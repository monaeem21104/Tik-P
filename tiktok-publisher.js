/**
 * TikTok Publisher Helper - TikTok API غير الرسمي
 * هذا الملف يحتوي على دوال مساعدة للنشر الحقيقي على TikTok مع دعم الاوتوميشن الكامل
 */

class TikTokPublisher {
    constructor() {
        this.apiBaseUrl = 'https://www.tiktok.com';
        this.apiEndpoint = 'https://www.tiktok.com/api/comment/publish/';
        this.sessionCookies = null;
        this.csrfToken = null;
        this.userId = null;
        this.sessionId = null;
    }

    /**
     * استخراج cookies و tokens من TikTok تلقائياً
     * @param {Window} iframeWindow - نافذة iframe الخاصة بتسجيل الدخول
     * @returns {Promise<Object>} - بيانات الجلسة
     */
    async extractSessionData(iframeWindow) {
        try {
            // طريقة 1: محاولة الوصول إلى cookies من iframe
            let cookies = '';
            let csrfToken = null;
            
            try {
                if (iframeWindow && iframeWindow.document) {
                    cookies = iframeWindow.document.cookie;
                    
                    // محاولة استخراج CSRF token من meta tags
                    const metaTags = iframeWindow.document.querySelectorAll('meta[name*="csrf"], meta[property*="csrf"]');
                    for (const meta of metaTags) {
                        if (meta.content) {
                            csrfToken = meta.content;
                            break;
                        }
                    }
                    
                    // محاولة استخراج من window object
                    if (!csrfToken && iframeWindow.__UNSTABLE__REACT_ENVIRONMENT__) {
                        csrfToken = iframeWindow.__UNSTABLE__REACT_ENVIRONMENT__.csrfToken;
                    }
                }
            } catch (e) {
                console.log('لا يمكن الوصول إلى cookies من iframe مباشرة (CORS)');
            }

            // طريقة 2: استخدام cookies من الصفحة الرئيسية
            if (!cookies || cookies.length < 50) {
                cookies = document.cookie;
            }

            // طريقة 3: محاولة استخراج من localStorage (إذا كان TikTok يخزنها)
            try {
                const tiktokData = localStorage.getItem('tiktok_session') || sessionStorage.getItem('tiktok_session');
                if (tiktokData) {
                    const parsed = JSON.parse(tiktokData);
                    if (parsed.cookies) cookies = parsed.cookies;
                    if (parsed.csrfToken) csrfToken = parsed.csrfToken;
                }
            } catch (e) {
                // تجاهل
            }

            // طريقة 4: محاولة استخراج من fetch headers (إذا كان متاحاً)
            if (!csrfToken || cookies.length < 50) {
                try {
                    const response = await fetch('https://www.tiktok.com/api/user/detail/', {
                        method: 'GET',
                        credentials: 'include'
                    });
                    
                    // استخراج CSRF token من response headers
                    const setCookie = response.headers.get('Set-Cookie');
                    if (setCookie && setCookie.includes('csrf')) {
                        csrfToken = this.extractCookieValue(setCookie, 'csrf_session_id');
                    }
                } catch (e) {
                    // تجاهل
                }
            }

            // استخراج CSRF token إذا لم يكن موجوداً
            if (!csrfToken) {
                csrfToken = this.extractCSRFToken(cookies);
            }
            
            // استخراج session_id
            const sessionId = this.extractCookieValue(cookies, 'sessionid');
            
            // استخراج user_id
            const userId = this.extractCookieValue(cookies, 'sid_guard');

            // إذا كانت cookies غير كافية، حاول طريقة بديلة
            if (!sessionId && !userId && cookies.length < 50) {
                // محاولة الحصول على cookies من موقع TikTok مباشرة
                return await this.extractSessionFromTikTok();
            }

            return {
                cookies: cookies,
                csrfToken: csrfToken,
                sessionId: sessionId,
                userId: userId,
                extractedAt: new Date().toISOString()
            };
        } catch (error) {
            console.error('خطأ في استخراج بيانات الجلسة:', error);
            return null;
        }
    }

    /**
     * استخراج الجلسة من TikTok مباشرة
     * @returns {Promise<Object|null>} - بيانات الجلسة
     */
    async extractSessionFromTikTok() {
        try {
            // محاولة الحصول على معلومات المستخدم من TikTok API
            const response = await fetch('https://www.tiktok.com/api/user/detail/', {
                method: 'GET',
                credentials: 'include',
                headers: {
                    'User-Agent': navigator.userAgent,
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                // استخراج cookies من response
                const cookies = document.cookie;
                const csrfToken = this.extractCSRFToken(cookies);
                
                return {
                    cookies: cookies,
                    csrfToken: csrfToken,
                    sessionId: this.extractCookieValue(cookies, 'sessionid'),
                    userId: this.extractCookieValue(cookies, 'sid_guard'),
                    extractedAt: new Date().toISOString()
                };
            }
        } catch (error) {
            console.error('خطأ في استخراج الجلسة من TikTok:', error);
        }
        return null;
    }

    /**
     * استخراج CSRF token من cookies أو HTML
     * @param {string} cookies - cookies string
     * @returns {string|null} - CSRF token
     */
    extractCSRFToken(cookies) {
        // محاولة استخراج من cookies
        let token = this.extractCookieValue(cookies, 'csrf_session_id');
        if (token) return token;

        // محاولة استخراج من meta tag في HTML
        try {
            const metaTag = document.querySelector('meta[name="csrf-token"]');
            if (metaTag) return metaTag.content;

            // محاولة استخراج من window object
            if (window.__UNSTABLE__REACT_ENVIRONMENT__ && window.__UNSTABLE__REACT_ENVIRONMENT__.csrfToken) {
                return window.__UNSTABLE__REACT_ENVIRONMENT__.csrfToken;
            }
        } catch (e) {
            console.log('لا يمكن استخراج CSRF token من HTML');
        }

        // قيمة افتراضية (يجب الحصول عليها من TikTok)
        return null;
    }

    /**
     * استخراج قيمة cookie محددة
     * @param {string} cookies - cookies string
     * @param {string} name - اسم cookie
     * @returns {string|null} - قيمة cookie
     */
    extractCookieValue(cookies, name) {
        if (!cookies) return null;
        const match = cookies.match(new RegExp('(^|; )' + name + '=([^;]*)'));
        return match ? match[2] : null;
    }

    /**
     * إعداد جلسة TikTok
     * @param {Object} sessionData - بيانات الجلسة
     */
    setSession(sessionData) {
        this.sessionCookies = sessionData.cookies || this.buildCookiesString(sessionData);
        this.csrfToken = sessionData.csrfToken;
        this.sessionId = sessionData.sessionId;
        this.userId = sessionData.userId;
    }

    /**
     * بناء cookies string من object
     * @param {Object} cookieData - بيانات cookies
     * @returns {string} - cookies string
     */
    buildCookiesString(cookieData) {
        const cookies = [];
        if (cookieData.sessionid) cookies.push(`sessionid=${cookieData.sessionid}`);
        if (cookieData.csrf_session_id) cookies.push(`csrf_session_id=${cookieData.csrf_session_id}`);
        if (cookieData.sid_guard) cookies.push(`sid_guard=${cookieData.sid_guard}`);
        if (cookieData.tt_chain_token) cookies.push(`tt_chain_token=${cookieData.tt_chain_token}`);
        return cookies.join('; ');
    }

    /**
     * استخراج video ID من رابط TikTok
     * @param {string} url - رابط الفيديو
     * @returns {Promise<string|null>} - video ID
     */
    async extractVideoId(url) {
        // نمط 1: https://www.tiktok.com/@username/video/1234567890
        const pattern1 = /\/video\/(\d+)/;
        const match1 = url.match(pattern1);
        if (match1) return match1[1];

        // نمط 2: https://vm.tiktok.com/xxxxxxxxx
        if (url.includes('vm.tiktok.com')) {
            try {
                // محاولة فك الرابط القصير
                const response = await fetch(url, { method: 'HEAD', redirect: 'follow' });
                const finalUrl = response.url;
                const match = finalUrl.match(/\/video\/(\d+)/);
                return match ? match[1] : null;
            } catch (e) {
                console.error('خطأ في فك الرابط القصير:', e);
                return null;
            }
        }

        return null;
    }

    /**
     * الحصول على aweme_id من رابط الفيديو
     * @param {string} videoUrl - رابط الفيديو
     * @returns {Promise<string|null>} - aweme_id
     */
    async getAwemeId(videoUrl) {
        try {
            const videoId = await this.extractVideoId(videoUrl);
            if (!videoId) return null;

            // محاولة الحصول على معلومات الفيديو من API
            try {
                const response = await fetch(`https://www.tiktok.com/api/post/detail/?aweme_id=${videoId}`, {
                    method: 'GET',
                    headers: {
                        'Referer': videoUrl,
                        'User-Agent': navigator.userAgent,
                        'Cookie': this.sessionCookies || ''
                    },
                    credentials: 'include'
                });

                const data = await response.json();
                if (data.aweme_detail && data.aweme_detail.aweme_id) {
                    return data.aweme_detail.aweme_id;
                }
            } catch (e) {
                console.log('لا يمكن الحصول على aweme_id من API، استخدام video_id مباشرة');
            }

            return videoId;
        } catch (error) {
            console.error('خطأ في الحصول على aweme_id:', error);
            return null;
        }
    }

    /**
     * النشر عبر TikTok API غير الرسمي
     * @param {string} comment - نص التعليق
     * @param {string} videoUrl - رابط الفيديو
     * @returns {Promise<Object>} - نتيجة النشر
     */
    async publishViaAPI(comment, videoUrl) {
        try {
            const awemeId = await this.getAwemeId(videoUrl);
            if (!awemeId) {
                throw new Error('رابط الفيديو غير صحيح أو غير متاح');
            }

            if (!this.sessionCookies || !this.csrfToken) {
                throw new Error('يرجى تسجيل الدخول أولاً والحصول على cookies و CSRF token');
            }

            // بناء الطلب
            const payload = {
                text: comment,
                item_id: awemeId,
                aweme_id: awemeId,
                reply_id: 0
            };

            // بناء headers
            const headers = {
                'Content-Type': 'application/json',
                'Accept': 'application/json, text/plain, */*',
                'Accept-Language': 'ar,en-US;q=0.9,en;q=0.8',
                'Origin': 'https://www.tiktok.com',
                'Referer': videoUrl,
                'User-Agent': navigator.userAgent,
                'X-Requested-With': 'XMLHttpRequest',
                'Cookie': this.sessionCookies
            };

            // إضافة CSRF token إذا كان موجوداً
            if (this.csrfToken) {
                headers['X-CSRFToken'] = this.csrfToken;
                headers['csrf-token'] = this.csrfToken;
            }

            // إرسال الطلب
            const response = await fetch(this.apiEndpoint, {
                method: 'POST',
                headers: headers,
                credentials: 'include',
                body: JSON.stringify(payload)
            });

            // التحقق من الاستجابة
            let data;
            try {
                data = await response.json();
            } catch (e) {
                // إذا لم تكن الاستجابة JSON
                const text = await response.text();
                throw new Error(`استجابة غير متوقعة: ${text.substring(0, 200)}`);
            }

            // التحقق من النجاح
            if (response.ok && data.status_code === 0) {
                return {
                    success: true,
                    message: 'تم النشر بنجاح',
                    data: data
                };
            } else {
                const errorMsg = data.status_msg || data.message || `فشل النشر (كود: ${data.status_code || response.status})`;
                throw new Error(errorMsg);
            }

        } catch (error) {
            console.error('خطأ في النشر عبر API:', error);
            return {
                success: false,
                error: error.message || 'حدث خطأ غير متوقع'
            };
        }
    }

    /**
     * التحقق من صحة الجلسة
     * @returns {Promise<boolean>} - true إذا كانت الجلسة صحيحة
     */
    async validateSession() {
        try {
            if (!this.sessionCookies) return false;

            const response = await fetch('https://www.tiktok.com/api/user/detail/', {
                method: 'GET',
                headers: {
                    'Cookie': this.sessionCookies,
                    'User-Agent': navigator.userAgent,
                    'Referer': 'https://www.tiktok.com/'
                },
                credentials: 'include'
            });

            if (response.ok) {
                const data = await response.json();
                return data.status_code === 0;
            }

            return false;
        } catch (error) {
            console.error('خطأ في التحقق من الجلسة:', error);
            return false;
        }
    }

    /**
     * النشر التلقائي (Automation) - يعمل مباشرة في المتصفح
     * @param {string} comment - نص التعليق
     * @param {string} videoUrl - رابط الفيديو
     * @returns {Promise<Object>} - نتيجة النشر
     */
    async publishAutomated(comment, videoUrl) {
        try {
            // محاولة النشر عبر API أولاً
            const apiResult = await this.publishViaAPI(comment, videoUrl);
            if (apiResult.success) {
                return apiResult;
            }

            // إذا فشل API، حاول طريقة automation البديلة
            return await this.publishViaAutomation(comment, videoUrl);

        } catch (error) {
            console.error('خطأ في النشر التلقائي:', error);
            return {
                success: false,
                error: error.message
            };
        }
    }

    /**
     * النشر عبر automation البديل (استخدام fetch مع cookies من المتصفح)
     * @param {string} comment - نص التعليق
     * @param {string} videoUrl - رابط الفيديو
     * @returns {Promise<Object>} - نتيجة النشر
     */
    async publishViaAutomation(comment, videoUrl) {
        try {
            const awemeId = await this.getAwemeId(videoUrl);
            if (!awemeId) {
                throw new Error('رابط الفيديو غير صحيح');
            }

            // استخدام cookies من المتصفح مباشرة
            const payload = {
                text: comment,
                item_id: awemeId,
                aweme_id: awemeId,
                reply_id: 0
            };

            // استخدام credentials: 'include' لتمرير cookies تلقائياً
            const response = await fetch(this.apiEndpoint, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'Origin': 'https://www.tiktok.com',
                    'Referer': videoUrl,
                    'User-Agent': navigator.userAgent
                },
                credentials: 'include', // مهم: يمرر cookies تلقائياً
                body: JSON.stringify(payload)
            });

            const data = await response.json();

            if (response.ok && data.status_code === 0) {
                return {
                    success: true,
                    message: 'تم النشر بنجاح عبر automation',
                    data: data
                };
            } else {
                throw new Error(data.status_msg || 'فشل النشر');
            }

        } catch (error) {
            console.error('خطأ في النشر عبر automation:', error);
            return {
                success: false,
                error: error.message
            };
        }
    }
}

// تصدير الكلاس للاستخدام
if (typeof window !== 'undefined') {
    window.TikTokPublisher = TikTokPublisher;
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = TikTokPublisher;
}

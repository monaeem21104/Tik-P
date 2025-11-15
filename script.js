// قاعدة بيانات التعليقات السعودية (100 تعليق)
const SAUDI_COMMENTS = [
    "الله يوفقك والله محتوى رهيب 👏",
    "والله عاد صدق كلام صحيح ماشاء الله",
    "الله يسعدك والله فنان في المحتوى",
    "والله روعة والله فكرة ممتازة",
    "ماشاء الله تبارك الله والله محتوى مميز",
    "والله صدق والله استمتعت بالمحتوى",
    "الله يعطيك العافية والله محتوى حلو",
    "والله فكرة جميلة والله محتوى رائع",
    "ماشاء الله والله محتوى يستاهل المتابعة",
    "والله روعة والله محتوى مبدع",
    "الله يبارك لك والله محتوى مميز",
    "والله صدق والله استفدت من المحتوى",
    "ماشاء الله تبارك الله والله محتوى عالي",
    "والله روعة والله محتوى يستاهل اللايك",
    "الله يسعدك والله محتوى رهيب",
    "والله عاد صدق والله محتوى حلو",
    "ماشاء الله والله محتوى يستاهل المتابعة",
    "والله فكرة ممتازة والله محتوى رائع",
    "الله يعطيك العافية والله محتوى مميز",
    "والله روعة والله محتوى مبدع",
    "الله يوفقك والله محتوى يستاهل اللايك",
    "والله صدق والله استمتعت بالمحتوى",
    "ماشاء الله تبارك الله والله محتوى عالي",
    "والله روعة والله محتوى يستاهل المتابعة",
    "الله يسعدك والله محتوى رهيب",
    "والله عاد صدق والله محتوى حلو",
    "ماشاء الله والله محتوى يستاهل اللايك",
    "والله فكرة جميلة والله محتوى رائع",
    "الله يبارك لك والله محتوى مميز",
    "والله روعة والله محتوى مبدع",
    "الله يعطيك العافية والله محتوى عالي",
    "والله صدق والله استفدت من المحتوى",
    "ماشاء الله تبارك الله والله محتوى رهيب",
    "والله روعة والله محتوى يستاهل المتابعة",
    "الله يسعدك والله محتوى حلو",
    "والله عاد صدق والله محتوى مميز",
    "ماشاء الله والله محتوى يستاهل اللايك",
    "والله فكرة ممتازة والله محتوى رائع",
    "الله يوفقك والله محتوى مبدع",
    "والله روعة والله محتوى عالي",
    "الله يعطيك العافية والله محتوى رهيب",
    "والله صدق والله استمتعت بالمحتوى",
    "ماشاء الله تبارك الله والله محتوى حلو",
    "والله روعة والله محتوى يستاهل المتابعة",
    "الله يسعدك والله محتوى مميز",
    "والله عاد صدق والله محتوى رائع",
    "ماشاء الله والله محتوى يستاهل اللايك",
    "والله فكرة جميلة والله محتوى مبدع",
    "الله يبارك لك والله محتوى عالي",
    "والله روعة والله محتوى رهيب",
    "الله يعطيك العافية والله محتوى حلو",
    "والله صدق والله استفدت من المحتوى",
    "ماشاء الله تبارك الله والله محتوى يستاهل المتابعة",
    "والله روعة والله محتوى مميز",
    "الله يسعدك والله محتوى رائع",
    "والله عاد صدق والله محتوى مبدع",
    "ماشاء الله والله محتوى يستاهل اللايك",
    "والله فكرة ممتازة والله محتوى عالي",
    "الله يوفقك والله محتوى رهيب",
    "والله روعة والله محتوى حلو",
    "الله يعطيك العافية والله محتوى يستاهل المتابعة",
    "والله صدق والله استمتعت بالمحتوى",
    "ماشاء الله تبارك الله والله محتوى مميز",
    "والله روعة والله محتوى رائع",
    "الله يسعدك والله محتوى مبدع",
    "والله عاد صدق والله محتوى عالي",
    "ماشاء الله والله محتوى يستاهل اللايك",
    "والله فكرة جميلة والله محتوى رهيب",
    "الله يبارك لك والله محتوى حلو",
    "والله روعة والله محتوى يستاهل المتابعة",
    "الله يعطيك العافية والله محتوى مميز",
    "والله صدق والله استفدت من المحتوى",
    "ماشاء الله تبارك الله والله محتوى رائع",
    "والله روعة والله محتوى مبدع",
    "الله يسعدك والله محتوى عالي",
    "والله عاد صدق والله محتوى يستاهل اللايك",
    "ماشاء الله والله محتوى رهيب",
    "والله فكرة ممتازة والله محتوى حلو",
    "الله يوفقك والله محتوى يستاهل المتابعة",
    "والله روعة والله محتوى مميز",
    "الله يعطيك العافية والله محتوى رائع",
    "والله صدق والله استمتعت بالمحتوى",
    "ماشاء الله تبارك الله والله محتوى مبدع",
    "والله روعة والله محتوى عالي",
    "الله يسعدك والله محتوى يستاهل اللايك",
    "والله عاد صدق والله محتوى رهيب",
    "ماشاء الله والله محتوى حلو",
    "والله فكرة جميلة والله محتوى يستاهل المتابعة",
    "الله يبارك لك والله محتوى مميز",
    "والله روعة والله محتوى رائع",
    "الله يعطيك العافية والله محتوى مبدع",
    "والله صدق والله استفدت من المحتوى",
    "ماشاء الله تبارك الله والله محتوى عالي",
    "والله روعة والله محتوى يستاهل اللايك",
    "الله يسعدك والله محتوى رهيب",
    "والله عاد صدق والله محتوى حلو",
    "ماشاء الله والله محتوى يستاهل المتابعة",
    "والله فكرة ممتازة والله محتوى مميز",
    "الله يوفقك والله محتوى رائع",
    "والله روعة والله محتوى مبدع",
    "الله يعطيك العافية والله محتوى عالي",
    "والله صدق والله استمتعت بالمحتوى"
];

// إدارة التطبيق الرئيسية
class TikTokDashboard {
    constructor() {
        this.accounts = this.loadAccounts();
        this.links = this.loadLinks();
        this.comments = SAUDI_COMMENTS;
        this.currentStep = 1;
        this.selectedAccount = null;
        this.selectedComments = [];
        this.videoUrl = '';
        this.publishQuantity = 1;
        this.isLoggedIn = false;
        this.tiktokPublisher = null;
        this.sessionData = null;
        this.init();
    }

    // تهيئة TikTok Publisher
    initTikTokPublisher() {
        if (typeof TikTokPublisher !== 'undefined') {
            this.tiktokPublisher = new TikTokPublisher();
        }
    }

    init() {
        this.initTikTokPublisher();
        this.setupEventListeners();
        this.renderAccounts();
        this.renderLinks();
        this.renderComments();
        this.updateWorkflowStep(1);
        
        // بدء مراقبة الجلسة تلقائياً
        this.startSessionMonitoring();
    }

    // مراقبة الجلسة تلقائياً
    startSessionMonitoring() {
        // التحقق من الجلسة كل 5 ثوان
        setInterval(() => {
            if (this.tiktokPublisher && this.selectedAccount) {
                this.checkAndExtractSession();
            }
        }, 5000);
    }

    // ========== إدارة الحسابات ==========
    loadAccounts() {
        const saved = localStorage.getItem('tiktok_accounts');
        return saved ? JSON.parse(saved) : [];
    }

    saveAccounts() {
        localStorage.setItem('tiktok_accounts', JSON.stringify(this.accounts));
    }

    addAccount(username, displayName, password) {
        const account = {
            id: Date.now().toString(),
            username,
            displayName,
            password,
            isLoggedIn: false,
            sessionData: null,
            createdAt: new Date().toISOString()
        };
        this.accounts.push(account);
        this.saveAccounts();
        this.renderAccounts();
        this.showNotification('تم إضافة الحساب بنجاح', 'success');
    }

    updateAccount(id, username, displayName, password) {
        const account = this.accounts.find(acc => acc.id === id);
        if (account) {
            account.username = username;
            account.displayName = displayName;
            account.password = password;
            this.saveAccounts();
            this.renderAccounts();
            this.showNotification('تم تحديث الحساب بنجاح', 'success');
        }
    }

    deleteAccount(id) {
        if (confirm('هل أنت متأكد من حذف هذا الحساب؟')) {
            this.accounts = this.accounts.filter(acc => acc.id !== id);
            this.saveAccounts();
            this.renderAccounts();
            this.showNotification('تم حذف الحساب بنجاح', 'success');
        }
    }

    renderAccounts() {
        const grid = document.getElementById('accountsGrid');
        if (this.accounts.length === 0) {
            grid.innerHTML = '<div class="empty-state"><p>لا توجد حسابات. أضف حساب جديد للبدء.</p></div>';
            return;
        }

        grid.innerHTML = this.accounts.map(account => `
            <div class="account-card" data-id="${account.id}">
                <h3>${account.displayName}</h3>
                <p>@${account.username}</p>
                <p style="font-size: 12px; color: ${account.isLoggedIn ? 'var(--success)' : 'var(--tiktok-light-gray)'};">
                    ${account.isLoggedIn ? '✓ تم تسجيل الدخول' : 'غير مسجل دخول'}
                </p>
                <p style="font-size: 12px; color: var(--tiktok-light-gray);">تم الإضافة: ${this.formatDate(account.createdAt)}</p>
                <div class="account-actions">
                    <button class="btn-edit" onclick="dashboard.editAccount('${account.id}')">تعديل</button>
                    <button class="btn-delete" onclick="dashboard.deleteAccount('${account.id}')">حذف</button>
                </div>
            </div>
        `).join('');
    }

    editAccount(id) {
        const account = this.accounts.find(acc => acc.id === id);
        if (account) {
            document.getElementById('accountId').value = account.id;
            document.getElementById('accountUsername').value = account.username;
            document.getElementById('accountDisplayName').value = account.displayName;
            document.getElementById('accountPassword').value = account.password;
            document.getElementById('accountModalTitle').textContent = 'تعديل الحساب';
            document.getElementById('accountModal').classList.add('active');
        }
    }

    // ========== إدارة الروابط ==========
    loadLinks() {
        const saved = localStorage.getItem('tiktok_links');
        return saved ? JSON.parse(saved) : [];
    }

    saveLinks() {
        localStorage.setItem('tiktok_links', JSON.stringify(this.links));
    }

    addLink(title, url) {
        const link = {
            id: Date.now().toString(),
            title,
            url,
            createdAt: new Date().toISOString()
        };
        this.links.push(link);
        this.saveLinks();
        this.renderLinks();
        this.showNotification('تم إضافة الرابط بنجاح', 'success');
    }

    updateLink(id, title, url) {
        const link = this.links.find(l => l.id === id);
        if (link) {
            link.title = title;
            link.url = url;
            this.saveLinks();
            this.renderLinks();
            this.showNotification('تم تحديث الرابط بنجاح', 'success');
        }
    }

    deleteLink(id) {
        if (confirm('هل أنت متأكد من حذف هذا الرابط؟')) {
            this.links = this.links.filter(l => l.id !== id);
            this.saveLinks();
            this.renderLinks();
            this.showNotification('تم حذف الرابط بنجاح', 'success');
        }
    }

    renderLinks() {
        const list = document.getElementById('linksList');
        if (this.links.length === 0) {
            list.innerHTML = '<div class="empty-state"><p>لا توجد روابط. أضف رابط جديد للبدء.</p></div>';
            return;
        }

        list.innerHTML = this.links.map(link => `
            <div class="link-item">
                <div class="link-info">
                    <h3>${link.title}</h3>
                    <a href="${link.url}" target="_blank">${link.url}</a>
                    <p class="link-date">تم الإضافة: ${this.formatDate(link.createdAt)}</p>
                </div>
                <div class="link-actions">
                    <button class="btn-edit" onclick="dashboard.editLink('${link.id}')">تعديل</button>
                    <button class="btn-delete" onclick="dashboard.deleteLink('${link.id}')">حذف</button>
                </div>
            </div>
        `).join('');
    }

    editLink(id) {
        const link = this.links.find(l => l.id === id);
        if (link) {
            document.getElementById('linkId').value = link.id;
            document.getElementById('linkTitle').value = link.title;
            document.getElementById('linkUrl').value = link.url;
            document.getElementById('linkModalTitle').textContent = 'تعديل الرابط';
            document.getElementById('linkModal').classList.add('active');
        }
    }

    // ========== إدارة التعليقات ==========
    renderComments() {
        const commentsList = document.getElementById('commentsList');
        if (!commentsList) return;

        commentsList.innerHTML = this.comments.map((comment, index) => `
            <div class="comment-item" data-index="${index}" onclick="dashboard.toggleCommentByClick(${index})">
                <input type="checkbox" id="comment_${index}" value="${index}" 
                       ${this.selectedComments.includes(index) ? 'checked' : ''}
                       onchange="dashboard.toggleComment(${index})" 
                       onclick="event.stopPropagation();">
                <label for="comment_${index}" style="cursor: pointer; margin: 0; flex: 1; user-select: none;">${comment}</label>
            </div>
        `).join('');

        // إضافة class selected للتعليقات المحددة
        this.selectedComments.forEach(index => {
            const item = document.querySelector(`.comment-item[data-index="${index}"]`);
            if (item) {
                item.classList.add('selected');
            }
        });

        this.updateSelectedCommentsCount();
        this.updateNextButton();
    }

    filterComments(searchTerm) {
        const commentsList = document.getElementById('commentsList');
        if (!commentsList) return;

        if (!searchTerm || searchTerm.trim() === '') {
            this.renderComments();
            return;
        }

        const filtered = this.comments.map((comment, index) => ({
            comment,
            index,
            matches: comment.toLowerCase().includes(searchTerm.toLowerCase())
        })).filter(item => item.matches);

        commentsList.innerHTML = filtered.map(({ comment, index }) => {
            const isSelected = this.selectedComments.includes(index);
            return `
                <div class="comment-item ${isSelected ? 'selected' : ''}" data-index="${index}" onclick="dashboard.toggleCommentByClick(${index})">
                    <input type="checkbox" id="comment_${index}" value="${index}" 
                           ${isSelected ? 'checked' : ''}
                           onchange="dashboard.toggleComment(${index})" 
                           onclick="event.stopPropagation();">
                    <label for="comment_${index}" style="cursor: pointer; margin: 0; flex: 1; user-select: none;">${comment}</label>
                </div>
            `;
        }).join('');

        this.updateSelectedCommentsCount();
    }

    toggleCommentByClick(index) {
        const checkbox = document.getElementById(`comment_${index}`);
        if (checkbox) {
            checkbox.checked = !checkbox.checked;
            this.toggleComment(index);
        }
    }

    toggleComment(index) {
        const commentIndex = this.selectedComments.indexOf(index);
        const item = document.querySelector(`.comment-item[data-index="${index}"]`);
        
        if (commentIndex > -1) {
            this.selectedComments.splice(commentIndex, 1);
            if (item) {
                item.classList.remove('selected');
            }
        } else {
            this.selectedComments.push(index);
            if (item) {
                item.classList.add('selected');
            }
        }
        this.updateSelectedCommentsCount();
        this.updateNextButton();
    }

    updateSelectedCommentsCount() {
        const countElement = document.getElementById('selectedCommentsCount');
        if (countElement) {
            countElement.textContent = this.selectedComments.length;
        }
    }

    updateNextButton() {
        const nextButton = document.getElementById('nextToStep4');
        const videoUrlInput = document.getElementById('videoUrl');
        
        if (nextButton) {
            const hasSelectedComments = this.selectedComments.length > 0;
            const hasVideoUrl = videoUrlInput && videoUrlInput.value.trim() !== '';
            nextButton.disabled = !hasSelectedComments || !hasVideoUrl;
        }
    }

    // ========== سير العمل ==========
    startWorkflow() {
        if (this.accounts.length === 0) {
            this.showNotification('يرجى إضافة حساب على الأقل', 'error');
            return;
        }
        
        document.getElementById('mainScreen').style.display = 'none';
        document.getElementById('workflowScreen').classList.add('active');
        this.updateWorkflowStep(1);
        this.renderWorkflowAccounts();
    }

    renderWorkflowAccounts() {
        const select = document.getElementById('workflowAccountsSelect');
        select.innerHTML = this.accounts.map(account => `
            <div class="account-select-card" data-id="${account.id}" onclick="dashboard.selectAccount('${account.id}')">
                <h3>${account.displayName}</h3>
                <p>@${account.username}</p>
                <p style="font-size: 12px; color: ${account.isLoggedIn ? 'var(--success)' : 'var(--warning)'};">
                    ${account.isLoggedIn ? '✓ مسجل دخول' : 'غير مسجل دخول'}
                </p>
            </div>
        `).join('');
    }

    selectAccount(accountId) {
        this.selectedAccount = this.accounts.find(acc => acc.id === accountId);
        
        document.querySelectorAll('.account-select-card').forEach(card => {
            card.classList.remove('selected');
        });
        document.querySelector(`.account-select-card[data-id="${accountId}"]`).classList.add('selected');
        
        document.getElementById('nextToStep2').disabled = false;
    }

    nextToStep2() {
        if (!this.selectedAccount) {
            this.showNotification('يرجى اختيار حساب', 'error');
            return;
        }
        this.updateWorkflowStep(2);
        document.getElementById('selectedAccountName').textContent = 
            `${this.selectedAccount.displayName} (@${this.selectedAccount.username})`;
    }

    async checkAndExtractSession() {
        if (!this.tiktokPublisher || !this.selectedAccount) return;

        try {
            const iframe = document.getElementById('tiktokLoginFrame');
            if (!iframe || !iframe.contentWindow) return;

            // محاولة استخراج بيانات الجلسة
            const sessionData = await this.tiktokPublisher.extractSessionData(iframe.contentWindow);
            
            if (sessionData && sessionData.cookies) {
                // تحديث بيانات الحساب
                this.selectedAccount.sessionData = sessionData;
                this.selectedAccount.isLoggedIn = true;
                this.sessionData = sessionData;
                
                // تحديث TikTok Publisher
                this.tiktokPublisher.setSession(sessionData);
                
                // التحقق من صحة الجلسة
                const isValid = await this.tiktokPublisher.validateSession();
                if (isValid) {
                    this.updateSessionStatus('✓ تم استخراج الجلسة بنجاح', 'success');
                    document.getElementById('nextToStep3').disabled = false;
                } else {
                    this.updateSessionStatus('⚠ تم استخراج الجلسة لكن التحقق فشل', 'warning');
                }
                
                this.saveAccounts();
            }
        } catch (error) {
            console.error('خطأ في استخراج الجلسة:', error);
        }
    }

    async confirmLogin() {
        // حفظ حالة تسجيل الدخول
        if (!this.selectedAccount) return;

        if (!this.tiktokPublisher) {
            this.initTikTokPublisher();
        }

        this.updateSessionStatus('جاري استخراج بيانات الجلسة...', 'warning');

        // محاولة استخراج الجلسة من iframe
        try {
            const iframe = document.getElementById('tiktokLoginFrame');
            let sessionData = null;

            if (iframe && iframe.contentWindow) {
                sessionData = await this.tiktokPublisher.extractSessionData(iframe.contentWindow);
            }

            // محاولة بديلة: استخدام cookies من الصفحة الرئيسية
            if (!sessionData || !sessionData.cookies) {
                // فتح TikTok في نافذة منبثقة للحصول على cookies
                sessionData = await this.extractSessionFromPopup();
            }

            if (sessionData && sessionData.cookies) {
                // حفظ بيانات الجلسة
                this.selectedAccount.isLoggedIn = true;
                this.selectedAccount.sessionData = sessionData;
                this.sessionData = sessionData;
                
                // تحديث TikTok Publisher
                this.tiktokPublisher.setSession(sessionData);
                
                // التحقق من صحة الجلسة
                const isValid = await this.tiktokPublisher.validateSession();
                if (isValid) {
                    this.updateSessionStatus('✓ تم تأكيد تسجيل الدخول بنجاح', 'success');
                    document.getElementById('nextToStep3').disabled = false;
                    this.isLoggedIn = true;
                    this.showNotification('تم استخراج الجلسة وتأكيد تسجيل الدخول بنجاح', 'success');
                } else {
                    this.updateSessionStatus('⚠ تم استخراج الجلسة لكن التحقق فشل - جرب مرة أخرى', 'warning');
                    this.showNotification('فشل التحقق من الجلسة - يرجى المحاولة مرة أخرى', 'error');
                }
                
                this.saveAccounts();
            } else {
                this.updateSessionStatus('❌ فشل استخراج الجلسة - يرجى المحاولة مرة أخرى', 'error');
                this.showNotification('فشل استخراج بيانات الجلسة - تأكد من تسجيل الدخول', 'error');
            }

        } catch (error) {
            console.error('خطأ في تأكيد تسجيل الدخول:', error);
            this.updateSessionStatus('❌ خطأ: ' + error.message, 'error');
            this.showNotification('حدث خطأ أثناء استخراج الجلسة', 'error');
        }
    }

    async extractSessionFromPopup() {
        return new Promise((resolve) => {
            // فتح TikTok في نافذة منبثقة
            const popup = window.open('https://www.tiktok.com/login', 'tiktok-login', 'width=600,height=700');
            
            // مراقبة النافذة المنبثقة
            const checkInterval = setInterval(async () => {
                try {
                    if (popup.closed) {
                        clearInterval(checkInterval);
                        // محاولة استخراج من cookies الرئيسية
                        const cookies = document.cookie;
                        if (cookies && cookies.includes('sessionid')) {
                            const sessionData = {
                                cookies: cookies,
                                csrfToken: this.tiktokPublisher.extractCSRFToken(cookies),
                                sessionId: this.tiktokPublisher.extractCookieValue(cookies, 'sessionid'),
                                userId: this.tiktokPublisher.extractCookieValue(cookies, 'sid_guard'),
                                extractedAt: new Date().toISOString()
                            };
                            resolve(sessionData);
                        } else {
                            resolve(null);
                        }
                        return;
                    }

                    // محاولة الوصول إلى cookies من النافذة المنبثقة
                    try {
                        if (popup.location.href.includes('tiktok.com')) {
                            const cookies = popup.document.cookie;
                            if (cookies && cookies.includes('sessionid')) {
                                clearInterval(checkInterval);
                                const sessionData = {
                                    cookies: cookies,
                                    csrfToken: this.tiktokPublisher.extractCSRFToken(cookies),
                                    sessionId: this.tiktokPublisher.extractCookieValue(cookies, 'sessionid'),
                                    userId: this.tiktokPublisher.extractCookieValue(cookies, 'sid_guard'),
                                    extractedAt: new Date().toISOString()
                                };
                                popup.close();
                                resolve(sessionData);
                            }
                        }
                    } catch (e) {
                        // CORS - لا يمكن الوصول مباشرة
                    }
                } catch (e) {
                    // تجاهل الأخطاء
                }
            }, 1000);

            // إغلاق بعد 5 دقائق
            setTimeout(() => {
                clearInterval(checkInterval);
                if (!popup.closed) {
                    popup.close();
                }
                resolve(null);
            }, 300000);
        });
    }

    updateSessionStatus(message, type = 'info') {
        const statusElement = document.getElementById('sessionStatus');
        if (statusElement) {
            statusElement.textContent = message;
            statusElement.style.color = type === 'success' ? 'var(--success)' : 
                                       type === 'warning' ? 'var(--warning)' : 
                                       type === 'error' ? 'var(--danger)' : 
                                       'var(--tiktok-light-gray)';
        }
    }

    nextToStep3() {
        if (!this.isLoggedIn && !this.selectedAccount?.isLoggedIn) {
            this.showNotification('يرجى تأكيد تسجيل الدخول أولاً', 'error');
            return;
        }
        this.updateWorkflowStep(3);
        this.renderComments();
        this.setupCommentsSearch();
    }

    setupCommentsSearch() {
        const searchInput = document.getElementById('commentsSearch');
        if (searchInput) {
            searchInput.addEventListener('input', (e) => {
                this.filterComments(e.target.value);
            });
        }

        const videoUrlInput = document.getElementById('videoUrl');
        if (videoUrlInput) {
            videoUrlInput.addEventListener('input', (e) => {
                this.videoUrl = e.target.value.trim();
                this.updateNextButton();
            });
            // التحقق الأولي
            if (videoUrlInput.value) {
                this.videoUrl = videoUrlInput.value.trim();
            }
        }

        const quantityInput = document.getElementById('commentsQuantity');
        if (quantityInput) {
            quantityInput.addEventListener('input', (e) => {
                const value = parseInt(e.target.value) || 1;
                this.publishQuantity = Math.min(Math.max(value, 1), 100);
                e.target.value = this.publishQuantity;
            });
            // التحقق من القيمة الأولية
            this.publishQuantity = Math.min(Math.max(parseInt(quantityInput.value) || 1, 1), 100);
            quantityInput.value = this.publishQuantity;
        }

        // تحديث زر التالي عند التحميل
        this.updateNextButton();
    }

    nextToStep4() {
        if (this.selectedComments.length === 0) {
            this.showNotification('يرجى اختيار تعليق واحد على الأقل', 'error');
            return;
        }
        if (!this.videoUrl) {
            this.showNotification('يرجى إدخال رابط الفيديو', 'error');
            return;
        }
        this.updateWorkflowStep(4);
        this.renderReview();
    }

    renderReview() {
        document.getElementById('reviewAccount').textContent = 
            `${this.selectedAccount.displayName} (@${this.selectedAccount.username})`;
        document.getElementById('reviewVideoUrl').textContent = this.videoUrl;
        document.getElementById('reviewCommentsCount').textContent = this.selectedComments.length;
        document.getElementById('reviewQuantity').textContent = this.publishQuantity;

        const commentsList = document.getElementById('reviewCommentsList');
        const selectedCommentsText = this.selectedComments.slice(0, 10).map(index => 
            this.comments[index]
        ).join('\n');
        
        commentsList.innerHTML = this.selectedComments.slice(0, 10).map(index => `
            <div class="comment-preview">${this.comments[index]}</div>
        `).join('') + 
        (this.selectedComments.length > 10 ? `<p style="text-align: center; color: var(--tiktok-light-gray); margin-top: 10px;">و ${this.selectedComments.length - 10} تعليق آخر...</p>` : '');
    }

    backToStep3() {
        this.updateWorkflowStep(3);
    }

    async publishComments() {
        this.updateWorkflowStep(5);
        
        const progressBar = document.getElementById('progressBarFill');
        const publishingStatus = document.getElementById('publishingStatus');
        const publishedCount = document.getElementById('publishedCountNumber');
        const totalCount = document.getElementById('totalCountNumber');
        const successAnimation = document.getElementById('successAnimation');
        const publishingProgress = document.getElementById('publishingProgress');
        const backToMainBtn = document.getElementById('backToMainBtn');

        // تحديد عدد التعليقات المطلوب نشرها
        const commentsToPublish = [];
        for (let i = 0; i < this.publishQuantity; i++) {
            const randomIndex = this.selectedComments[Math.floor(Math.random() * this.selectedComments.length)];
            commentsToPublish.push(this.comments[randomIndex]);
        }

        totalCount.textContent = commentsToPublish.length;
        let published = 0;

        // محاولة النشر الحقيقي
        try {
            for (let i = 0; i < commentsToPublish.length; i++) {
                const comment = commentsToPublish[i];
                publishingStatus.textContent = `جاري نشر التعليق ${i + 1} من ${commentsToPublish.length}: ${comment.substring(0, 30)}...`;
                
                // محاولة النشر عبر TikTok API أو automation
                const success = await this.publishCommentToTikTok(comment, this.videoUrl);
                
                if (success) {
                    published++;
                    publishedCount.textContent = published;
                    progressBar.style.width = `${(published / commentsToPublish.length) * 100}%`;
                    
                    // حفظ في السجل
                    const commentHistory = JSON.parse(localStorage.getItem('tiktok_comments') || '[]');
                    commentHistory.push({
                        accountId: this.selectedAccount.id,
                        accountName: this.selectedAccount.displayName,
                        comment: comment,
                        videoUrl: this.videoUrl,
                        publishedAt: new Date().toISOString(),
                        status: 'success'
                    });
                    localStorage.setItem('tiktok_comments', JSON.stringify(commentHistory));
                } else {
                    this.showNotification(`فشل نشر التعليق ${i + 1}`, 'error');
                }

                // تأخير بين التعليقات لتجنب الحظر
                await this.delay(2000 + Math.random() * 3000);
            }

            // إظهار رسالة النجاح
            publishingProgress.style.display = 'none';
            successAnimation.style.display = 'block';
            backToMainBtn.style.display = 'block';
            
            const successMessage = document.getElementById('successMessage');
            successMessage.textContent = `تم نشر ${published} من ${commentsToPublish.length} تعليق بنجاح على تيك توك`;

        } catch (error) {
            console.error('خطأ في النشر:', error);
            this.showNotification('حدث خطأ أثناء النشر', 'error');
            publishingStatus.textContent = `حدث خطأ: ${error.message}`;
        }
    }

    async publishCommentToTikTok(comment, videoUrl) {
        try {
            // التحقق من وجود TikTok Publisher
            if (!this.tiktokPublisher) {
                this.initTikTokPublisher();
            }

            // التحقق من وجود بيانات الجلسة
            if (!this.sessionData && this.selectedAccount && this.selectedAccount.sessionData) {
                this.sessionData = this.selectedAccount.sessionData;
                this.tiktokPublisher.setSession(this.sessionData);
            }

            // محاولة النشر عبر TikTok API غير الرسمي مع الاوتوميشن
            if (this.tiktokPublisher && this.sessionData) {
                // النشر عبر API غير الرسمي
                const result = await this.tiktokPublisher.publishAutomated(comment, videoUrl);
                
                if (result.success) {
                    return true;
                } else {
                    // إذا فشل API، حاول automation البديل
                    const automationResult = await this.tiktokPublisher.publishViaAutomation(comment, videoUrl);
                    return automationResult.success;
                }
            } else {
                // محاولة النشر بدون بيانات جلسة (باستخدام cookies من المتصفح)
                if (this.tiktokPublisher) {
                    const result = await this.tiktokPublisher.publishViaAutomation(comment, videoUrl);
                    return result.success;
                }
            }

            // إذا فشل كل شيء، أعد false
            throw new Error('فشل النشر - تأكد من تسجيل الدخول وصحة الجلسة');
            
        } catch (error) {
            console.error('خطأ في نشر التعليق:', error);
            return false;
        }
    }

    // دالة مساعدة لفتح TikTok للنشر اليدوي (كحل بديل)
    openTikTokForManualPublish(comment, videoUrl) {
        // فتح TikTok في نافذة جديدة مع رابط الفيديو
        // يمكن للمستخدم النشر يدوياً
        const url = `${videoUrl}?comment=${encodeURIComponent(comment)}`;
        window.open(url, '_blank');
    }

    extractVideoId(url) {
        // استخراج video ID من رابط TikTok
        const match = url.match(/\/video\/(\d+)/);
        return match ? match[1] : null;
    }

    delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    backToMain() {
        document.getElementById('workflowScreen').classList.remove('active');
        document.getElementById('mainScreen').style.display = 'block';
        this.currentStep = 1;
        this.selectedAccount = null;
        this.selectedComments = [];
        this.videoUrl = '';
        this.publishQuantity = 1;
        this.isLoggedIn = false;
        this.updateWorkflowStep(1);
        this.renderAccounts();
        
        // إعادة تعيين العناصر
        if (document.getElementById('commentsSearch')) {
            document.getElementById('commentsSearch').value = '';
        }
        if (document.getElementById('videoUrl')) {
            document.getElementById('videoUrl').value = '';
        }
        if (document.getElementById('commentsQuantity')) {
            document.getElementById('commentsQuantity').value = '1';
        }
    }

    updateWorkflowStep(step) {
        this.currentStep = step;
        
        document.querySelectorAll('.step').forEach((stepEl, index) => {
            const stepNumber = index + 1;
            stepEl.classList.remove('active', 'completed');
            
            if (stepNumber < step) {
                stepEl.classList.add('completed');
            } else if (stepNumber === step) {
                stepEl.classList.add('active');
            }
        });
        
        document.querySelectorAll('.workflow-step').forEach((stepEl, index) => {
            stepEl.classList.remove('active');
            if (index + 1 === step) {
                stepEl.classList.add('active');
            }
        });
    }

    // ========== إعدادات الأحداث ==========
    setupEventListeners() {
        // إضافة حساب
        document.getElementById('addAccountBtn').addEventListener('click', () => {
            document.getElementById('accountId').value = '';
            document.getElementById('accountForm').reset();
            document.getElementById('accountModalTitle').textContent = 'إضافة حساب جديد';
            document.getElementById('accountModal').classList.add('active');
        });

        // حفظ حساب
        document.getElementById('accountForm').addEventListener('submit', (e) => {
            e.preventDefault();
            const id = document.getElementById('accountId').value;
            const username = document.getElementById('accountUsername').value.trim();
            const displayName = document.getElementById('accountDisplayName').value.trim();
            const password = document.getElementById('accountPassword').value;

            if (id) {
                this.updateAccount(id, username, displayName, password);
            } else {
                this.addAccount(username, displayName, password);
            }
            
            document.getElementById('accountModal').classList.remove('active');
        });

        // إغلاق نافذة الحساب
        document.getElementById('closeAccountModal').addEventListener('click', () => {
            document.getElementById('accountModal').classList.remove('active');
        });
        
        document.getElementById('cancelAccountBtn').addEventListener('click', () => {
            document.getElementById('accountModal').classList.remove('active');
        });

        // إضافة رابط
        document.getElementById('addLinkBtn').addEventListener('click', () => {
            document.getElementById('linkId').value = '';
            document.getElementById('linkForm').reset();
            document.getElementById('linkModalTitle').textContent = 'إضافة رابط جديد';
            document.getElementById('linkModal').classList.add('active');
        });

        // حفظ رابط
        document.getElementById('linkForm').addEventListener('submit', (e) => {
            e.preventDefault();
            const id = document.getElementById('linkId').value;
            const title = document.getElementById('linkTitle').value.trim();
            const url = document.getElementById('linkUrl').value.trim();

            if (id) {
                this.updateLink(id, title, url);
            } else {
                this.addLink(title, url);
            }
            
            document.getElementById('linkModal').classList.remove('active');
        });

        // إغلاق نافذة الرابط
        document.getElementById('closeLinkModal').addEventListener('click', () => {
            document.getElementById('linkModal').classList.remove('active');
        });
        
        document.getElementById('cancelLinkBtn').addEventListener('click', () => {
            document.getElementById('linkModal').classList.remove('active');
        });

        // بدء سير العمل
        document.getElementById('startWorkflowBtn').addEventListener('click', () => {
            this.startWorkflow();
        });

        // التنقل في سير العمل
        document.getElementById('nextToStep2').addEventListener('click', () => {
            this.nextToStep2();
        });

        document.getElementById('confirmLoginBtn').addEventListener('click', () => {
            this.confirmLogin();
        });

        document.getElementById('extractSessionBtn').addEventListener('click', () => {
            this.checkAndExtractSession();
        });

        document.getElementById('nextToStep3').addEventListener('click', () => {
            this.nextToStep3();
        });

        document.getElementById('nextToStep4').addEventListener('click', () => {
            this.nextToStep4();
        });

        document.getElementById('backToStep3').addEventListener('click', () => {
            this.backToStep3();
        });

        document.getElementById('publishBtn').addEventListener('click', () => {
            this.publishComments();
        });

        document.getElementById('backToMainBtn').addEventListener('click', () => {
            this.backToMain();
        });

        // إغلاق النوافذ عند النقر خارجها
        window.addEventListener('click', (e) => {
            const accountModal = document.getElementById('accountModal');
            const linkModal = document.getElementById('linkModal');
            
            if (e.target === accountModal) {
                accountModal.classList.remove('active');
            }
            
            if (e.target === linkModal) {
                linkModal.classList.remove('active');
            }
        });
    }

    // ========== الأدوات المساعدة ==========
    formatDate(dateString) {
        const date = new Date(dateString);
        return date.toLocaleDateString('ar-EG', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    }

    showNotification(message, type = 'success') {
        const notification = document.getElementById('notification');
        notification.textContent = message;
        notification.className = `notification ${type} show`;
        
        setTimeout(() => {
            notification.classList.remove('show');
        }, 3000);
    }
}

// تهيئة التطبيق
let dashboard;
document.addEventListener('DOMContentLoaded', () => {
    dashboard = new TikTokDashboard();
});

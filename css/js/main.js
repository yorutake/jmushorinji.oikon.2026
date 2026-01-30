/* ==========================================
   共通JavaScript（全ページ）
   ========================================== */

// ==========================================
// ページ読み込み時の初期化
// ==========================================
document.addEventListener('DOMContentLoaded', function() {
    // ナビゲーションのアクティブ状態を設定
    setActiveNavLink();
    
    // Dayタブの初期化（schedule.htmlのみ）
    initializeDayTabs();
    
    // スムーススクロールの設定
    initializeSmoothScroll();
});

// ==========================================
// ナビゲーションのアクティブ状態を設定
// ========================================== 
function setActiveNavLink() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });
}

// ==========================================
// Dayタブ切り替え機能（schedule.htmlで使用）
// ==========================================
function initializeDayTabs() {
    const dayTabs = document.querySelectorAll('.day-tab');
    const dayContents = document.querySelectorAll('.day-content');

    // タブがない場合は処理をスキップ
    if (dayTabs.length === 0) return;

    // タブクリック時の処理
    dayTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            // すべてのタブとコンテンツからactiveクラスを削除
            dayTabs.forEach(t => t.classList.remove('active'));
            dayContents.forEach(c => c.classList.remove('active'));

            // クリックされたタブにactiveクラスを追加
            this.classList.add('active');

            // 対応するコンテンツにactiveクラスを追加
            const targetDay = this.getAttribute('data-day');
            const targetContent = document.getElementById(targetDay);
            if (targetContent) {
                targetContent.classList.add('active');
            }
        });
    });
}

// ==========================================
// スムーススクロール（全ページで使用可能）
// ==========================================
function initializeSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

$(document).ready(function () {
    const toolbar = document.querySelector('.toolbar');
    const pagebar = document.querySelector('.pagebar');
    const leftmenu = document.querySelector('.leftmenu');
    const overlay = document.getElementById('.overlay');
    const scrollToTopButton = document.getElementById('topBtn');
    let isHiddenup = false;
    let isHiddendown = false;

    // 点击页面时切换显示/隐藏顶栏和底栏
    document.addEventListener('click', () => {
        isHiddenup = !isHiddenup;
        isHiddendown = !isHiddendown;
        toolbar.classList.toggle('hiddenup', isHiddenup);
        pagebar.classList.toggle('hiddendown', isHiddendown);

        // 同时隐藏回到顶部按钮
        scrollToTopButton.style.opacity = '0';
    });

    // 滚动页面时隐藏顶栏和底栏
    window.addEventListener('scroll', () => {
        toolbar.classList.add('hiddenup');
        pagebar.classList.add('hiddendown');

        if (window.scrollY > 200) {
            scrollToTopButton.style.opacity = '1'; // 显示回到顶部按钮
        } else {
            scrollToTopButton.style.opacity = '0'; // 隐藏回到顶部按钮
        }

        // 当滚动到顶部时，淡入显示 bar
        if (window.scrollY === 0) {
            toolbar.classList.remove('hiddenup');
            pagebar.classList.remove('hiddendown');
        }
    });

    $("#topBtn").click(function () {
        jQuery("html,body").animate({
            scrollTop: 0
        }, 700);
    });

    $('.menu').click(function () {
        $('.leftmenu').toggleClass('opened');
    });

    $('.close').click(function () {
        $('.leftmenu').toggleClass('opened');
    });
});

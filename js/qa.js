$(document).ready(function () {
    let totalScore = 0; // 总分数
    let currentQuestionIndex = 0; // 当前题目索引

    // 隐藏除第一题外的其他题目
    $('.question').not(':eq(0)').hide();

    // 点击问题按钮时的处理
    $('.qa_btn').on('click', function () {
        // 累积分数
        totalScore += parseInt($(this).data('score'));

        // 显示下一题目并隐藏当前题目
        $('.question').eq(currentQuestionIndex).hide();
        currentQuestionIndex++; // 更新题目索引

        // 如果未达到总题数，显示下一题
        if (currentQuestionIndex < 8) {
            $('.question').eq(currentQuestionIndex).show();
        } else {
            // 显示结果或其他处理逻辑
            moveToNextPage(); // 跳转到下一页
        }
    });

    //progress
    $(document).ready(function () {
        const logo = $('.logo');
        const bar = $('.bar');

        $('.qa_btn').on('click', function () {
            // 答对问题后，将 logo 向右移动 35px
            logo.css('transform', 'translateX(38px)');
            // 如果您希望移动后 logo 不再动画，则将 transition 属性设为空字符串
            logo.css('transition', 'transform 1s');
        });
    });


    // 监听"選好了"按钮点击事件
    $('.selectBtn').on('click', function () {
        // 移动进度条的 logo
        $('.logo').animate({ left: '35px' }, 'slow');

        // 显示下一题目并隐藏当前题目
        $('.question').eq(currentQuestionIndex).hide();
        currentQuestionIndex++; // 更新题目索引

        // 如果未达到总题数，显示下一题
        if (currentQuestionIndex < 8) {
            $('.question').eq(currentQuestionIndex).show();
        } else {
            // 所有题目已经回答完成，可以执行其他逻辑，例如跳转到结果页面等
            // moveToNextPage(); // 跳转到下一页
        }
    });

    // 跳转到下一页的函数
    function moveToNextPage() {
        // 在这里执行跳转到下一页的操作，可以根据你的需求来处理
        console.log('总分数为：' + totalScore);
    }
});


//q2
$(document).ready(function () {
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;
    let currentSlideIndex = 0;

    function showSlide(index) {
        // 隐藏所有幻灯片
        slides.forEach(slide => slide.style.display = 'none');
        // 显示指定索引的幻灯片
        slides[index].style.display = 'block';
    }

    // 初始化，显示第一张幻灯片
    showSlide(currentSlideIndex);

    // 向前切换幻灯片
    function prevSlide() {
        currentSlideIndex = (currentSlideIndex === 0) ? totalSlides - 1 : currentSlideIndex - 1;
        showSlide(currentSlideIndex);
    }

    // 向后切换幻灯片
    function nextSlide() {
        currentSlideIndex = (currentSlideIndex === totalSlides - 1) ? 0 : currentSlideIndex + 1;
        showSlide(currentSlideIndex);
    }

    // 监听左箭头按钮点击事件
    $('.leftarrow_btn').on('click', prevSlide);

    // 监听右箭头按钮点击事件
    $('.rightarrow_btn').on('click', nextSlide);
});



//q4
$(document).ready(function () {
    // 监听珍珠图像点击事件
    $('.pearl').on('click', function () {
        // 清除所有图像的亮起状态
        $('.pearl').attr('src', './img/img/pearl-1@3x.png');
        $('.shell').attr('src', './img/img/shell-1@3x.png');
        $('.star').attr('src', './img/img/star-1@3x.png');
        $('.coral').attr('src', './img/img/coral-1@3x.png');
        // 点亮当前点击的图像
        $(this).attr('src', './img/img/pearl-2@3x.png');
    });

    // 监听贝壳图像点击事件
    $('.shell').on('click', function () {
        // 清除所有图像的亮起状态
        $('.pearl').attr('src', './img/img/pearl-1@3x.png');
        $('.shell').attr('src', './img/img/shell-1@3x.png');
        $('.star').attr('src', './img/img/star-1@3x.png');
        $('.coral').attr('src', './img/img/coral-1@3x.png');
        // 点亮当前点击的图像
        $(this).attr('src', './img/img/shell-2@3x.png');
    });

    // 监听星星图像点击事件
    $('.star').on('click', function () {
        // 清除所有图像的亮起状态
        $('.pearl').attr('src', './img/img/pearl-1@3x.png');
        $('.shell').attr('src', './img/img/shell-1@3x.png');
        $('.star').attr('src', './img/img/star-1@3x.png');
        $('.coral').attr('src', './img/img/coral-1@3x.png');
        // 点亮当前点击的图像
        $(this).attr('src', './img/img/star-2@3x.png');
    });

    // 监听珊瑚图像点击事件
    $('.coral').on('click', function () {
        // 清除所有图像的亮起状态
        $('.pearl').attr('src', './img/img/pearl-1@3x.png');
        $('.shell').attr('src', './img/img/shell-1@3x.png');
        $('.star').attr('src', './img/img/star-1@3x.png');
        $('.coral').attr('src', './img/img/coral-1@3x.png');
        // 点亮当前点击的图像
        $(this).attr('src', './img/img/coral-2@3x.png');
    });
});

$(document).ready(function () {
    // 監聽 "選好了" 按鈕點擊事件
    $('.selectBtn,.qa_btn').on('click', function () {
        // 移動進度條的 logo
        $('.progress .logo').animate({ left: '35px' }, 'slow');

        // 隱藏當前問題並顯示下一個問題
        let currentQuestion = $(this).closest('.question');
        currentQuestion.hide();

        // 獲取下一個問題的索引
        let nextQuestionIndex = parseInt(currentQuestion.data('index')) + 1;
        let nextQuestion = $('.question[data-index="' + nextQuestionIndex + '"]');

        // 如果下一個問題存在，則顯示它
        if (nextQuestion.length) {
            nextQuestion.show();
        } else {
            // 如果沒有下一個問題，執行其他操作，例如跳轉到結果頁面
            console.log('所有問題都已經回答完畢。');
        }
    });
});


//q5 bg
$(document).ready(function () {
    $('.question').on('click', function () {
        // 获取当前问题的索引
        var currentIndex = parseInt($(this).data('index'));

        // 移除可能存在的之前的背景类
        $('html').removeClass('q4-background q5-background q6-background q8-background');

        // 根据问题的索引添加对应的背景类
        if (currentIndex === 2) {
            $('html').addClass('q4-background');
        }
        if (currentIndex === 4) {
            $('html').addClass('q6-background');
        }
        if (currentIndex === 5) {
            $('html').addClass('q6-background');
        }
        if (currentIndex === 6) {
            $('html').addClass('q8-background');
        }
        if (currentIndex === 7) {
            $('html').addClass('final-background');
        }
    });
});







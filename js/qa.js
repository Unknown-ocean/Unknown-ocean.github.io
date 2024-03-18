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

        // 如果是第二题，显示下一题，否则显示结果
        if (currentQuestionIndex === 1) {
            $('.question').eq(currentQuestionIndex).show();
        } else if (currentQuestionIndex === 2) {
            // 第二题之后的处理，例如移动进度条的 logo
            $('.logo').animate({ left: '35px' }, 'slow');
            $('.question').eq(currentQuestionIndex).show();
        } else {
            // 显示结果或其他处理逻辑
            alert('总分数为：' + totalScore);
        }
    });

    // 点击选好了按钮时的处理
    $('#selectBtn').on('click', function () {
        // 移动进度条的 logo
        $('.logo').animate({ left: '35px' }, 'slow');
        
        // 显示下一题目并隐藏当前题目
        $('.question').eq(currentQuestionIndex).hide();
        currentQuestionIndex++; // 更新题目索引

        // 如果是第二题，显示下一题，否则显示结果
        if (currentQuestionIndex === 1) {
            $('.question').eq(currentQuestionIndex).show();
        } else if (currentQuestionIndex === 2) {
            $('.question').eq(currentQuestionIndex).show();
        } else {
            // 显示结果或其他处理逻辑
            alert('总分数为：' + totalScore);
        }
    });
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
  

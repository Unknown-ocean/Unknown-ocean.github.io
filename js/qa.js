$(document).ready(function () {
    const questions = $('.question');
    let currentIndex = 0;
    let totalScore = {};

    // 初始化每個人格的分數為0
    $('.qa_btn').each(function () {
        const person = $(this).data('person');
        totalScore[person] = 0;
    });

    // 隱藏所有問題，除了第一個
    questions.hide();
    questions.eq(currentIndex).show();

    // 點擊選項時處理下一個問題並加分
    $('.qa_btn').on('click', function () {
        const currentQuestion = questions.eq(currentIndex);
        const score = parseInt($(this).data('score')); // 從 data-score 中取得分數
        const person = $(this).data('person'); // 從 data-person 中取得人格

        // 增加總分
        totalScore[person] += score;

        currentQuestion.hide();

        // 移至下一個問題
        currentIndex++;

        if (currentIndex < questions.length) {
            questions.eq(currentIndex).show();
        } else {
            // 回答完所有問題，跳轉到結果頁面
            redirectToResultPage(totalScore);
        }
    });

    // 跳轉到結果頁面
    function redirectToResultPage(score) {
        // 找出分數最高的人格類型
        const maxScore = Math.max(...Object.values(score));
        const maxScorePersons = Object.keys(score).filter(person => score[person] === maxScore);
        const randomMaxScorePerson = maxScorePersons[Math.floor(Math.random() * maxScorePersons.length)];

        // 指定結果頁面的路徑，根據您的目錄結構進行調整
        const resultPage = 'results/' + randomMaxScorePerson + '.html';
        window.location.href = resultPage;
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
  

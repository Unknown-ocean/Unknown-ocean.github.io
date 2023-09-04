$(document).ready(function () {
    const questions = $('.question');
    let currentIndex = 0;
    let totalScore = {};

    // 初始化每個人格的分數為0
    $('.option').each(function () {
        const person = $(this).data('person');
        totalScore[person] = 0;
    });

    // 隱藏所有問題，除了第一個
    questions.hide();
    questions.eq(currentIndex).show();

    // 點擊選項時處理下一個問題並加分
    $('.option').on('click', function () {
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

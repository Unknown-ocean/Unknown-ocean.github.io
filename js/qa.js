$(document).ready(function () {
    const questions = $('.question');
    let currentIndex = 0;
    let totalScore = 0;

    // 隱藏所有問題，除了第一個
    questions.hide();
    questions.eq(currentIndex).show();

    // 點擊選項時處理下一個問題並加分
    $('.option').on('click', function () {
        const currentQuestion = questions.eq(currentIndex);
        const score = parseInt($(this).data('score')); // 從 data-score 中取得分數
        totalScore += score; // 增加總分

        currentQuestion.hide();

        // 移至下一個問題
        currentIndex++;

        if (currentIndex < questions.length) {
            questions.eq(currentIndex).show();
        } else {
            // 回答完所有問題，顯示"loading"狀態
            showLoadingState();

            // 模擬一些處理時間（可根據需求調整）
            setTimeout(function () {
                // 導向到 result.html 並將總分作為參數傳遞
                window.location.href = `result.html?score=${totalScore}`;
            }, 2000); // 2秒後跳轉
        }
    });

    // 完成測試按鈕點擊處理
    $('#completeTest').on('click', function () {
        // 進行一些檢查並處理
        // ...

        // 跳轉到結果頁面
        window.location.href = `result.html?score=${totalScore}`;
    });

    // 顯示"loading"狀態
    function showLoadingState() {
        // 在此處顯示"loading" UI，例如：顯示一個等待圖示或訊息
    }
});

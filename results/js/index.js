$(document).ready(function() {
    // 獲取開始測試按鈕元素
    const startButton = document.getElementById('startButton');

    // 添加點擊事件監聽器
    startButton.addEventListener('click', () => {
        // 導航到下一頁 (qa.html)
        window.location.href = 'qa.html';
    });
});

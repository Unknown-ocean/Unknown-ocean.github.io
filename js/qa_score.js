// 分数计算器，初始化分数对象
let totalScores = {
    create: 0,
    detail: 0,
    one: 0,
    leader: 0,
    talk: 0,
    team: 0,
    selected: 0, // 用于存储选中的分数
    selectedPerson: "" // 用于存储选中的项目
};

// 更新分数显示
function updateScores() {
    document.getElementById("createScore").textContent = totalScores.create;
    document.getElementById("detailScore").textContent = totalScores.detail;
    document.getElementById("oneScore").textContent = totalScores.one;
    document.getElementById("leaderScore").textContent = totalScores.leader;
    document.getElementById("talkScore").textContent = totalScores.talk;
    document.getElementById("teamScore").textContent = totalScores.team;
}

$(document).ready(function () {
    // 点击按钮时更新分数
    $('.qa_btn').on('click', function () {
        let score = parseInt($(this).data('score'));
        let person = $(this).data('person');
        totalScores[person] += score;

        // 更新分数显示
        updateScores();

        // 更新选好了按钮的分数
        updateSelectedButtonScore(score, person);
    });

    $('.qa_img').on('click', function () {
        let score = parseInt($(this).data('score'));
        let person = $(this).data('person');
        totalScores[person] += score;

        // 更新分数显示
        updateScores();

        // 更新选好了按钮的分数
        updateSelectedButtonScore(score, person);
    });

    //導覽到該項目
    $(document).ready(function () {
        // 點擊花朵時的處理函數
        $('#resultLink').on('click', function () {

            event.preventDefault();

            // 顯示loading動畫
            $('#loadingSpinner').show();
            // 假設您有一個名為totalScores的對象，其中包含各項目的得分
            // 找到最高得分的項目
            let maxScore = Math.max(...Object.values(totalScores));

            // 創建一個對象，將每個項目映射到相應的結果頁面
            const resultPages = {
                create: './result1.html',
                detail: './result2.html',
                one: './result3.html',
                leader: './result4.html',
                talk: './result5.html',
                team: './result6.html'
            };

            // 找到最高得分的項目的鍵
            let resultPageKey = Object.keys(totalScores).find(key => totalScores[key] === maxScore);

            // 獲取最高得分項目對應的結果頁面
            let resultPage = resultPages[resultPageKey];

            // 更新花朵連結的href屬性 $('#resultLink').attr('href', resultPage);

            // 導向結果頁面
            setTimeout(function () {
                window.location.href = resultPage;
            }, 2000); // 這裡的2000是等待時間，以毫秒為單位，這裡設置為2秒
        });
    });

});

$(document).ready(function () {
    // 點擊花朵時觸發
    $('.flower').on('click', function () {
        // 隱藏花朵
        $('#flowerLink').hide();

        // 顯示 loading 動畫
        $('#loadingSpinner').show();
    });
});

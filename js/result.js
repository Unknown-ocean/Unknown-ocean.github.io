$(document).ready(function () {
    // 随机选择一个图片
    let $resultImgs = $('.result img');
    let randomIndex = Math.floor(Math.random() * $resultImgs.length);
    let $selectedImg = $resultImgs.eq(randomIndex);

    // 显示选中的图片，并隐藏其他图片
    $resultImgs.hide();
    $selectedImg.show();
});
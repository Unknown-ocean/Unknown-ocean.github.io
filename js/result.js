$(document).ready(function () {
    // 随机选择一个图片
    let $resultImgs = $('.result img');
    let randomIndex = Math.floor(Math.random() * $resultImgs.length);
    let $selectedImg = $resultImgs.eq(randomIndex);

    // 隐藏其他图片
    $resultImgs.each(function(index, img) {
        if ($(img).attr('src') !== $selectedImg.attr('src')) {
            $(img).hide();
        }
    });
});

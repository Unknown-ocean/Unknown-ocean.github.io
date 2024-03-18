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
$('#selectBtn').on('click', function () {
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
document.addEventListener('DOMContentLoaded', function () {
    const images = document.querySelectorAll('.image-selection img');
    const selectBtn = document.getElementById('selectBtn');
    let currentImageIndex = 0;

    // 添加点击事件监听器，用于切换图像
    images.forEach(function (image, index) {
      image.addEventListener('click', function () {
        // 获取当前图像的文件名和后缀
        const srcParts = image.src.split('/');
        const filename = srcParts[srcParts.length - 1];
        const parts = filename.split('.');
        const basename = parts[0];
        const extension = parts[1];

        // 构建下一个图像的文件名
        const nextFilename = basename + '-2.' + extension;

        // 设置下一个图像的 src 属性
        images[currentImageIndex].src = './img/img/' + nextFilename;
      });
    });

    // 添加点击事件监听器，用于进入下一题
    selectBtn.addEventListener('click', function () {
      // 进入下一题的逻辑，这里是隐藏当前问题显示下一个问题
      document.querySelector('.question').style.display = 'none';
      document.querySelectorAll('.question')[1].style.display = 'block'; // 显示下一个问题
    });
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




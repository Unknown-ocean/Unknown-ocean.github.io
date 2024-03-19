document.addEventListener("DOMContentLoaded", function () {
  // 淡入淡出动画
  let waves = document.querySelectorAll('.wave');
  waves.forEach((wave, index) => {
    wave.style.transitionDelay = `${index * 0.2}s`; // 依次延迟出现
    wave.style.opacity = '1'; // 设置可见
  });
});


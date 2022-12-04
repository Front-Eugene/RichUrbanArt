let position = 0,
      sliderWrap = document.querySelector('.bestseller-wrap'),
      sliderItem = document.querySelector('.bestseller-item'),
      itemWidth = sliderItem.offsetWidth,
      btnPrev = document.querySelector('.prev'),
      btnNext = document.querySelector('.next');

// autoScroll = setInterval(() => {
//     nextScroll()
// }, );

nextScroll = () => {
    if (position === -itemWidth) {
        position = 0
        sliderWrap.style.transform = `translateX(${position}px)`
    } else {
        position = position - itemWidth
        sliderWrap.style.transform = `translateX(${position}px)`
    }
}

btnPrev.addEventListener('click', function () {
    clearInterval(nextScroll)
    if (position === 0) {
        position = -itemWidth
        sliderWrap.style.transform = `translateX(${-trackWidth}px)`
    } else {
        position += itemWidth
        sliderWrap.style.transform = `translateX(${position}px)`
    }
})

btnNext.addEventListener('click', function () {
    clearInterval(nextScroll)
    nextScroll()
})

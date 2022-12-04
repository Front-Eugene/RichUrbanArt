const btn = document.querySelector('.header-btn'),
      wrap = document.querySelector('#hiden');

btn.addEventListener('click', () => {
    wrap.classList.remove('hiden');
    btn.classList.add('hiden');
})
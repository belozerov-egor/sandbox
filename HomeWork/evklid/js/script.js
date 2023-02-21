var swiper = new Swiper('.swiper-container', {
  autoplay: {
    delay: 4000,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  allowTouchMove: true,
  loop: true,
});


/* tabs */

document.querySelectorAll('.list-numbers__btn').forEach(function (tabsBtn) {
  tabsBtn.addEventListener('click', function (e) {
    const path = e.currentTarget.dataset.path;
    
    document.querySelectorAll('.list-numbers__btn').forEach(function (btn) {
      btn.classList.remove('list-numbers__btn--active')
    });
    e.currentTarget.classList.add('list-numbers__btn--active');

    document.querySelectorAll('.tab-items').forEach(function(tabsBtn){
        tabsBtn.classList.remove('tab-items--active')});

  document.querySelector(`[data-target="${path}"]`).classList.add('tab-items--active');
  });

});



$( function() {
  $( "#accordion" ).accordion();
} );

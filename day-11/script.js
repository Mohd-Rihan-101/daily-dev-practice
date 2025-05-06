
  const slider = document.getElementById('slider');
  let scrollAmount = 0;

  function autoScroll() {
    scrollAmount += 320;
    if (scrollAmount >= slider.scrollWidth - slider.clientWidth) {
      scrollAmount = 0;
    }
    slider.scrollTo({ left: scrollAmount, behavior: 'smooth' });
  }

  setInterval(autoScroll, 3000);


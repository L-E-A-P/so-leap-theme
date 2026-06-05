$(document).ready(function() {
  // main menu toggle
  var toggleButton = document.getElementById("menu-toggle");
  var menu = document.getElementById("primary-nav");

  if (toggleButton && menu) {
    toggleButton.addEventListener("click", function() {
      menu.classList.toggle("js-menu-is-open");
    });
  }

  // initialize smooth scroll
  $("a").smoothScroll({ offset: -20 });

  // add lightbox class to all image links, ESCLUSI i link delle gallerie
  // (.glightbox): quelli usano GLightbox, non Lity, e taggarli aprirebbe una
  // seconda lightbox sopra la prima.
  $("a[href$='.jpg']:not(.glightbox), a[href$='.png']:not(.glightbox), a[href$='.gif']:not(.glightbox)").attr("data-lity", "");
});

/* -----------------------------------------------
					Js Main
--------------------------------------------------


 Table of Content

	1. Preloader
	2. Isotope Portfolio Setup
	3. Blogs Masonry Setup
	4. Active Current Link
	5. Mobile Toggle Click Setup
	6. Chart Setup
	7. Portfolio Tilt Setup
	8. Portfolio Image Link
	9. Portfolio Video Link
  10. Portfolio Doc Link
  11. Portfolio PPT Link
	12. Blog Video Link


----------------------------------- */

$(window).on("load", function () {
  /* -----------------------------------
				1. Preloader
	----------------------------------- */
  $("#preloader").delay(1000).addClass("loaded");

  
  /* -----------------------------------
			2. Isotope Portfolio Setup
	----------------------------------- */
  if ($(".portfolio-items").length) {
    var $elements = $(".portfolio-items"),
      $filters = $(".portfolio-filter ul li");
    $elements.isotope();

    $filters.on("click", function () {
      $filters.removeClass("active");
      $(this).addClass("active");
      var selector = $(this).data("filter");
      $(".portfolio-items").isotope({
        filter: selector,
        hiddenStyle: {
          transform: "scale(.2) skew(30deg)",
          opacity: 0,
        },
        visibleStyle: {
          transform: "scale(1) skew(0deg)",
          opacity: 1,
        },
        transitionDuration: ".5s",
      });
    });
  }

  /* -----------------------------------
			3. Blogs Masonry Setup
	----------------------------------- */
  $(".blog-masonry").isotope({ layoutMode: "moduloColumns" });
});

$(document).ready(function () {
  "use strict";

  /* -----------------------------------
			4. Active Current Link
	----------------------------------- */
  $(".header-main ul li a").on("click", function () {
    if ($(".header-main.on").length) {
      $(".header-main").removeClass("on");
    }
  });

  /* -----------------------------------
		5. Mobile Toggle Click Setup
	----------------------------------- */
  $(".header-toggle").on("click", function () {
    $(".header-main").toggleClass("on");
  });

  /* -----------------------------------
	      	6. Chart Setup
	----------------------------------- */
  if ($(".chart").length > 0) {
    $(".chart").easyPieChart({
      trackColor: "#0e0f10",
      scaleColor: false,
      easing: "easeOutBounce",
      scaleLength: 4,
      lineCap: "square",
      lineWidth: 5,
      size: 130,
      animate: {
        duration: 2500,
        enabled: true,
      },
    });
  }

  /* -----------------------------------
	      	7. Portfolio Tilt Setup
	----------------------------------- */
  $(".pt-portfolio .portfolio-items .item figure").tilt({
    maxTilt: 3,
    glare: true,
    maxGlare: 0.6,
    reverse: true,
  });

  /* -----------------------------------
	      8. Portfolio Image Link
	----------------------------------- */
  $(".portfolio-items .image-link").magnificPopup({
    type: "image",
  });

  /* -----------------------------------
	      9. Portfolio Video Link
	----------------------------------- */
  $(".portfolio-items .video-link").magnificPopup({
    type: "iframe",
  });

  /* -----------------------------------
	      10. Portfolio Doc Link
	----------------------------------- */
  $(".portfolio-items .doc-link").magnificPopup({
    type: "iframe",
  });

   /* -----------------------------------
	      11. Portfolio PPT Link
	----------------------------------- */
  $(".portfolio-items .ppt-link").magnificPopup({
    type: "iframe",
  });

  /* -----------------------------------
	      12. Blog Video Link
	----------------------------------- */
  $(".pt-blog .blog-item .thumbnail .btn-play").magnificPopup({
    type: "iframe",
  });

    
});



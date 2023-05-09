(function ($) {
	"use strict";

	let fn = {
		Animate: function () {
			if (typeof lottie == "object") {
				$(".js-animation").each(function () {
					let $e = $(this),
						src = $e.attr("data-src") || "";
					if (src == "") return;

					$e.removeAttr("data-src");

					lottie.loadAnimation({
						container: this,
						renderer: "svg",
						loop: true,
						autoplay: true,
						path: src
					});
				});
			} else {
				console.log("lottie not load")
			}
		},
		CloseMenu: function () {
			const navLinks = document.querySelectorAll('.nav-item');
			const menuToggle = document.querySelector('.offcanvas');
			navLinks.forEach((elem) => {
				elem.addEventListener('click', () => {
					setTimeout(function() {
						$("button.navbar-toggler").click();

					}, 500);
				});
			});
		}
	};

	$(document).ready(function () {
		fn.Animate();
		fn.CloseMenu()
	});
})(jQuery);
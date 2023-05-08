(function ($) {
	"use strict";

	let fn = {
		Animate: function () {
			if (typeof lottie == "object") {
				console.log("loadingg");

				$(".js-animation").each(function () {
					var $e = $(this),
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
	};

	$(document).ready(function () {
		fn.Animate();
	});
})(jQuery);
var $window = $(window),
	$document = $(document);

function Loader(callback) {
	$(window).load(function () {
		setTimeout(function () {
			$("#loading").addClass('show');
			setTimeout(function () {
				$(`.logo_2`).fadeOut(function () {
					$("#loading").css('z-index', '-9999');
					$(".mm-slideout").css('z-index', '1');
				});
			}, 200);
		}, 6500);
	});
}
Loader();

$.fn.exists = function () {
	return this.length > 0;
};
$(document).ready(function () {
	$(".list-translate").toggle();
	$(".ngonngu").click(function () {
		$(this).parents(".box-ngonngu").find(".list-translate").toggle();
	});
	$(".list-translate.bg-white").removeClass("d-none").hide();
	/*$(".changeLanguage").click(function () {
		event.preventDefault();
		$(this).parents(".list-translate").toggle();
		$(this).parents('.list-translate').find('ul li a.active').removeClass('active');
		$(this).addClass('active');
		// var text_lang = $(this).attr('data-text');
		// var img_lang = $(this).attr('data-img');
		// $(".lang_txt .ngonngu-text").text(text_lang);
		// $(".lang_txt .ngonngu-img").html(img_lang);
		loadLanguage($(".changeLanguage"));
	});
	$(".changeLanguage.active").each(function () {
		loadLanguage($(".changeLanguage.active"));
	});*/
	function loadLanguage(obj) {
		var text = $(obj).attr('data-text');
		var img = $(obj).attr('data-img');
		$.ajax({
			url: CONFIG_BASE + 'ajax/ajax_language.php',
			type: "GET",
			dataType: 'html',
			async: false,
			data: { text: text, img: img, },
			success: function (result) {
				$(".show-lang-gg").html(result);
			}
		});
	}
	if ($('body').width() > 992) {
		fullpage = new Swiper('.box-slider', {
			hashNavigation: false,
			direction: 'vertical',
			effect: 'slide',
			speed: 900,
			slidesPerView: 1,
			spaceBetween: 0,
			mousewheel: {
				invert: true,
				forceToAxis: true,
				releaseOnEdges: true
			},
			keyboard: {
				enabled: true,
				onlyInViewport: true
			},
			on: {
				init: function () {
					$('.number-page ul li:nth-child(2) a').addClass('active');
				},
				slideChangeTransitionEnd: function () {
					$('.number-page ul li a').removeClass('active');
					var $slide_active = $('.group-box.swiper-slide-active');
					if ($slide_active.hasClass("menu-enable")) {
						$slide_active.parents("body").find("#menu").removeClass("fixed");
					} else {
						$slide_active.parents("body").find("#menu").addClass("fixed");
					}
					var index = $slide_active.attr('data-stt');
					console.log(index);
					if (index == 4) {
						$('.counter').counterUp({
							delay: 10,
							time: 3000
						});
					}
					$('.number-page ul li a').parents(".number-page").find("." + index).addClass("active");
					// $('.number-page ul li:eq(' + ($slide_active.attr('data-stt')  ) + ') a').addClass('active');
					// let indexbox = $slide_active.attr('data-stt') - 1;
					let boxclass = $slide_active.attr('data-animation');
					// console.log(boxclass);
					// console.log($('.' + boxclass).parents('.group-box').index());
					// console.log(indexbox);

					$('.home-banner').find(' .animation-left').removeClass('animation-left-active');
					$('.home-banner').find(' .animation-right').removeClass('animation-right-active');
					$('.home-banner').find(' .animation-up').removeClass('animation-up-active');
					$('.home-banner').find(' .animation-up1').removeClass('animation-up1-active');
					$('.home-banner').find(' .animation-up2').removeClass('animation-up2-active');
					$('.home-banner').find(' .animation-up3').removeClass('animation-up3-active');
					$('.home-banner').find(' .animation-right2').removeClass('animation-right2-active');
					$('.swiper-slide-active').find('.' + boxclass + ' .animation-left').addClass('animation-left-active');
					$('.swiper-slide-active').find('.' + boxclass + ' .animation-right').addClass('animation-right-active');
					$('.swiper-slide-active').find('.' + boxclass + ' .animation-up').addClass('animation-up-active');
					$('.swiper-slide-active').find('.' + boxclass + ' .animation-up1').addClass('animation-up1-active');
					$('.swiper-slide-active').find('.' + boxclass + ' .animation-up2').addClass('animation-up2-active');
					$('.swiper-slide-active').find('.' + boxclass + ' .animation-up3').addClass('animation-up3-active');
					$('.swiper-slide-active').find('.' + boxclass + ' .animation-right2').addClass('animation-right2-active');

				}
			}
		});
		$('.nav-click').click(function () {
			var stt = $(this).parents(".box-main").find(".group-box.swiper-slide-active").data("stt");
			fullpage.slideTo(stt, 900, function () { });
		});
	} else {
		$('.counter').counterUp({
			delay: 10,
			time: 1500
		});
	};
});
$(".search-open").click(function () {
	if ($(this).parent(".box-search").find(".search-ab").hasClass("active")) {
		$(this).parent(".box-search").find(".search-ab").removeClass("active");
	} else {
		$(this).parent(".box-search").find(".search-ab").addClass("active");
	}
});
if ($(".title-member").exists) {
	//$(".title-member.active").each(function () {
	//	var id = $(this).data("id");
	//	var thanhtuu = $(this).data('thanhtuu');
	//	loadPagingAjax("ajax/ajax_member.php?id=" + id + "&thanhtuu=" + thanhtuu, '.load-member', 0, 1);
	//});
	$(".title-member").click(function () {
		var type = $(this).data("type");
		$(this).parents(".title-members").find(".active").removeClass("active");
		$(this).addClass("active");
		var _root = $(this);

		var lnk = _root.data('url');
		document.location.href = lnk;

		//var id = $(this).data("id");
		//var thanhtuu = $(this).data('thanhtuu');
		//$(this).parents(".title-members").find(".active").removeClass("active");
		//$(this).addClass("active");
		//loadPagingAjax("ajax/ajax_member.php?id=" + id + "&thanhtuu=" + thanhtuu, '.load-member', 0, 1);
	});
}
if ($(".title-culture").exists) {
	$(".title-culture.active").each(function () {
		var type = $(this).data("type");
		var _root = $(this);
		link = window.location.href.split('?')[0];
		//$.ajax({
		//	url: CONFIG_BASE + 'ajax/ajax_culture.php',
		//	type: "GET",
		//	dataType: 'html',
		//	async: false,
		//	data: { type: type, },
		//	success: function (result) {
		//		$(".load-culture").html(result);
		//		ValidationFormSelf("validation-newsletter");
		//		window.history.pushState(null, null, link + '?filename=' + _root.data('url'));
		//	}
		//});
	});
	$(".title-culture").click(function () {
		var type = $(this).data("type");
		$(this).parents(".title-cultures").find(".active").removeClass("active");
		$(this).addClass("active");
		var _root = $(this);

		var lnk = _root.data('url');
		document.location.href = lnk;

		//var gotoPage = '';
		//if (lnk == 'thu-ngo') {
		//	gotoPage = 'thu-ngo.html';
		//}
		//else if (lnk == 'triet-ly-kinh-doanh') {
		//	gotoPage = 'triet-ly-kinh-doanh.html';
		//}
		//else if (lnk == 'tam-nhin') {
		//	gotoPage = 'tam-nhin.html';
		//}
		//else if (lnk == 'thong-tin-doanh-nghiep') {
		//	gotoPage = 'thong-tin-doanh-nghiep.html';
		//}
		//else if (lnk == 've-chung-toi') {
		//	gotoPage = 've-chung-toi.html';
		//}

		//document.location.href = gotoPage;


		//link = window.location.href.split('?')[0];
		//$.ajax({
		//	url: CONFIG_BASE + 'ajax/ajax_culture.php',
		//	type: "GET",
		//	dataType: 'html',
		//	async: false,
		//	data: { type: type, },
		//	success: function (result) {
		//		$(".load-culture").html(result);
		//		ValidationFormSelf("validation-newsletter");
		//		window.history.pushState(null, null, link + '?filename=' + _root.data('url'));
		//	}
		//});
	});
}
if ($(".slick-branch").exists()) {
	$('.slick-branch').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: false,
		arrows: false,
		centerMode: false,
		focusOnSelect: true,
		autoplay: false,
	});
	$('.slick-next').on('click', function () {
		$('.slick-branch').slick('slickNext');
	});
	$('.slick-prev').on('click', function () {
		$('.slick-branch').slick('slickPrev');
	});
}
$('body').on("click", '.name-faq', function () {
	if ($(this).hasClass("active")) {
		$(this).removeClass('active');
	} else {
		$(this).addClass('active');
	}
	$(this).parents(".faq").find(".desc-faq").toggle(400);
});

NN_FRAMEWORK.tocDetail = function () {
	if ($('.toc-list').exists) {
		$(".toc-list").toc({
			content: "div#toc-content",
			headings: "h2,h3,h4"
		});
		if (!$(".toc-list li").length) $(".meta-toc").hide();
		$('.toc-list').find('a').click(function () {
			var x = $(this).attr('data-rel');
			goToByScroll(x);
		});
	}
};
NN_FRAMEWORK.tabDetail = function () {
	if ($('.ul-tabs-pro-detail').exists) {
		$('body').on('click', '.ul-tabs-pro-detail li', function (event) {
			var tabs = $(this).data("tabs");
			$(".content-tabs-pro-detail, .ul-tabs-pro-detail li").removeClass("active");
			$(this).addClass("active");
			$("." + tabs).addClass("active");
		});
	}
};
NN_FRAMEWORK.iconSearch = function () {
	if ($('.icon-search').exists) {
		$('body').on('click', '.icon-search', function (event) {
			var obj = $(this);
			if (obj.hasClass('active')) {
				obj.removeClass('active');
				$(".search-grid").stop(true, true).animate({ opacity: "0", width: "0px" }, 200);
			} else {
				obj.addClass('active');
				$(".search-grid").stop(true, true).animate({ opacity: "1", width: "230px" }, 200);
			}
			var el = obj.next().find("input").attr('id');
			$('#' + el).focus();
			$('.icon-search i').toggleClass('fa fa-search fa fa-times');
		});
	}
};
/* Wow */
NN_FRAMEWORK.WowAnimation = function () {
	new WOW().init();
};
NN_FRAMEWORK.backToTop = function () {
	$('body').on("click", ".scrollToTop", function () {
		$('html, body').animate({ scrollTop: 0 }, 800);
		return false;
	});
};
NN_FRAMEWORK.setAlt = function () {
	$('img').each(function (index, element) {
		var obj = $(this);
		if (!obj.attr('alt') || obj.attr('alt') == '') {
			obj.attr('alt', WEBSITE_NAME);
		}
	});
};
NN_FRAMEWORK.pageCart = function () {
	if ($('.addcart').exists) {
		$("body").on("click", ".addcart", function () {
			var obj = $(this);
			var el_input = $(".qty-pro");
			var mau = ($(".color-pro-detail input:checked").val()) ? $(".color-pro-detail input:checked").val() : 0;
			var size = ($(".size-pro-detail input:checked").val()) ? $(".size-pro-detail input:checked").val() : 0;
			var id = obj.data("id");
			var action = obj.data("action");
			var qty = (el_input.val()) ? el_input.val() : 1;
			if (id) {
				$.ajax({
					url: CONFIG_BASE + 'ajax/ajax_add_cart.php',
					type: "POST",
					dataType: 'json',
					async: false,
					data: { cmd: 'addcart', id: id, mau: mau, size: size, qty: qty },
					success: function (result) {
						if (action == 'addnow') {
							$('.count-cart').html(result.max);
							$.ajax({
								url: CONFIG_BASE + 'ajax/ajax_popup_cart.php',
								type: "POST",
								dataType: 'html',
								async: false,
								success: function (result) {
									$("#popup-cart .modal-body").html(result);
									$('#popup-cart').modal('show');
								}
							});
						} else if (action == 'buynow') {
							window.location = CONFIG_BASE + "gio-hang";
						}
					}
				});
			}
		});
	}
	if ($('.del-procart').exists) {
		$("body").on("click", ".del-procart", function () {
			if (confirm(LANG['delete_product_from_cart'])) {
				var code = $(this).data("code");
				var ship = $(".price-ship").val();
				var endow = $(".price-endow").val();
				$.ajax({
					type: "POST",
					url: CONFIG_BASE + 'ajax/ajax_delete_cart.php',
					dataType: 'json',
					data: { code: code, ship: ship, endow: endow },
					success: function (result) {
						$('.count-cart').html(result.max);
						if (result.max) {
							$('.price-temp').val(result.temp);
							$('.load-price-temp').html(result.tempText);
							$('.price-total').val(result.total);
							$('.load-price-total').html(result.totalText);
							$(".procart-" + code).remove();
						} else {
							$(".wrap-cart").html('<a href="" class="empty-cart text-decoration-none"><i class="fa fa-cart-arrow-down"></i><p>' + LANG['no_products_in_cart'] + '</p><span>' + LANG['back_to_home'] + '</span></a>');
						}
					}
				});
			}
		});
	}
	if ($('.counter-procart').exists) {
		$("body").on("click", ".counter-procart", function () {
			var btn = $(this);
			var input = btn.parent().find("input");
			var pid = input.data('pid');
			var code = input.data('code');
			var old_val = btn.parent().find("input").val();
			if (btn.text() == "+") quantity = parseFloat(old_val) + 1;
			else if (old_val > 1) quantity = parseFloat(old_val) - 1;
			btn.parent().find("input").val(quantity);
			update_cart(pid, code, quantity);
		});
	}
	if ($('.quantity-procat').exists) {
		$("body").on("change", ".quantity-procat", function () {
			var obj = $(this);
			var quantity = obj.val();
			var pid = obj.data("pid");
			var code = obj.data("code");
			update_cart(pid, code, quantity);
		});
	}
	if ($('.apply-coupon').exists) {
		$("body").on("click", ".apply-coupon", function () {
			var coupon = $(".code-coupon").val();
			var ship = $(".price-ship").val();
			if (coupon == '') {
				modalNotify(LANG['no_coupon']);
				return false;
			}
			$.ajax({
				type: "POST",
				url: CONFIG_BASE + 'ajax/ajax_coupon_cart.php',
				dataType: 'json',
				data: { coupon: coupon, ship: ship },
				success: function (result) {
					$('.price-total').val(result.total);
					$('.load-price-total').html(result.totalText);
					$('.price-endowType').val(result.endowType);
					$('.price-endowID').val(result.endowID);
					$('.price-endow').val(result.endow);
					$('.load-price-endow').html(result.endowText);
					if (result.error != '') {
						$(".code-coupon").val("");
						modalNotify(result.error);
					}
				}
			});
		});
	}
	if ($('.payments-label').exists) {
		$("body").on("click", ".payments-label", function () {
			var obj = $(this);
			var payments = obj.data("payments");
			$(".payments-cart .payments-label, .payments-info").removeClass("active");
			obj.addClass("active");
			$(".payments-info-" + payments).addClass("active");
		});
	}
	if ($('.color-pro-detail').exists) {
		$('body').on('click', '.color-pro-detail', function (event) {
			var obj = $(this);
			$("a.color-pro-detail").removeClass("active");
			obj.addClass("active");
			var id_mau = $("input[name=color-pro-detail]:checked").val();
			var idpro = obj.data('idpro');
			$.ajax({
				url: CONFIG_BASE + 'ajax/ajax_colorthumb.php',
				type: "POST",
				dataType: 'html',
				data: { id_mau: id_mau, idpro: idpro },
				success: function (result) {
					if (result != '') {
						$('.left-pro-detail').html(result);
						MagicZoom.start('Zoom-1');
						$('.in-arrow-detail').owlCarousel({
							loop: false,
							margin: 5,
							responsiveClass: true,
							dots: false,
							nav: true,
							navText: ['<div class="owlleft"><svg viewBox="0 0 16000 16000" style="position:absolute;top:0;left:0;width:100%;height:100%;"><polyline class="a" points="11040,1920 4960,8000 11040,14080 "></polyline></svg></div>', '<div class="owlright"><svg viewBox="0 0 16000 16000" style="position:absolute;top:0;left:0;width:100%;height:100%;"><polyline class="a" points="4960,1920 11040,8000 4960,14080 "></polyline></svg></div>'],
							autoplay: true,
							autoplayTimeout: 4000,
							smartSpeed: 3000,
							autoplayHoverPause: true,
							autoHeight: false,
							responsive: {
								0: {
									items: 2
								},
								600: {
									items: 3
								},
								1000: {
									items: 4
								},
								1200: {
									items: 5
								}
							}
						})
					}
				}
			});
		});
	}
	if ($('.color-pro-detail').exists) {
		$('body').on('click', '.size-pro-detail', function (event) {
			$("a.size-pro-detail").removeClass("active");
			$(this).addClass("active");
		});
	}
	if ($('.quantity-pro-detail').exists) {
		$(".quantity-pro-detail span").click(function () {
			var btn = $(this);
			var old_val = btn.parent().find("input").val();
			if (btn.text() == "+") {
				var newVal = parseFloat(old_val) + 1;
			} else {
				if (old_val > 1) var newVal = parseFloat(old_val) - 1;
				else var newVal = 1;
			}
			btn.parent().find("input").val(newVal);
		});
	}
};

NN_FRAMEWORK.aweOwlPage = function () {
	var owl = $('.owl-carousel.in-page');
	owl.each(function () {
		var xs_item = $(this).attr('data-xs-items');
		var md_item = $(this).attr('data-md-items');
		var lg_item = $(this).attr('data-lg-items');
		var sm_item = $(this).attr('data-sm-items');
		var margin = $(this).attr('data-margin');
		var dot = $(this).attr('data-dot');
		var nav = $(this).attr('data-nav');
		var height = $(this).attr('data-height');
		var play = $(this).attr('data-play');
		var loop = $(this).attr('data-loop');

		if (typeof margin !== typeof undefined && margin !== false) {
		} else {
			margin = 30;
		}
		if (typeof xs_item !== typeof undefined && xs_item !== false) {
		} else {
			xs_item = 1;
		}
		if (typeof sm_item !== typeof undefined && sm_item !== false) {

		} else {
			sm_item = 3;
		}
		if (typeof md_item !== typeof undefined && md_item !== false) {
		} else {
			md_item = 3;
		}
		if (typeof lg_item !== typeof undefined && lg_item !== false) {
		} else {
			lg_item = 3;
		}

		if (loop == 1) { loop = true; } else { loop = false; }
		if (dot == 1) { dot = true; } else { dot = false; }
		if (nav == 1) { nav = true; } else { nav = false; }
		if (play == 1) { play = true; } else { play = false; }

		$(this).owlCarousel({
			loop: loop,
			margin: Number(margin),
			responsiveClass: true,
			dots: dot,
			nav: nav,
			navText: ['<div class="owlleft"><svg viewBox="0 0 16000 16000" style="position:absolute;top:0;left:0;width:100%;height:100%;"><polyline class="a" points="11040,1920 4960,8000 11040,14080 "></polyline></svg></div>', '<div class="owlright"><svg viewBox="0 0 16000 16000" style="position:absolute;top:0;left:0;width:100%;height:100%;"><polyline class="a" points="4960,1920 11040,8000 4960,14080 "></polyline></svg></div>'],
			autoplay: play,
			autoplayTimeout: 4000,
			smartSpeed: 3000,
			autoplayHoverPause: true,
			autoHeight: false,
			responsive: {
				0: {
					items: Number(xs_item)
				},
				600: {
					items: Number(sm_item)
				},
				1000: {
					items: Number(md_item)
				},
				1200: {
					items: Number(lg_item)
				}
			}
		})
	});
};

NN_FRAMEWORK.slickPage = function () {
	if ($('.slick.in-page').length > 0) {
		$('.slick.in-page').each(function () {
			var dots = $(this).attr('data-dots');
			var infinite = $(this).attr('data-infinite');
			var speed = $(this).attr('data-speed');
			var vertical = $(this).attr('data-vertical');
			var arrows = $(this).attr('data-arrows');
			var autoplay = $(this).attr('data-autoplay');
			var autoplaySpeed = $(this).attr('data-autoplaySpeed');
			var centerMode = $(this).attr('data-centerMode');
			var centerPadding = $(this).attr('data-centerPadding');
			var slidesDefault = $(this).attr('data-slidesDefault');
			var responsive = $(this).attr('data-responsive');
			var xs_item = $(this).attr('data-xs-items');
			var md_item = $(this).attr('data-md-items');
			var lg_item = $(this).attr('data-lg-items');
			var sm_item = $(this).attr('data-sm-items');
			var slidesDefault_ar = slidesDefault.split(":");
			var xs_item_ar = xs_item.split(":");
			var sm_item_ar = sm_item.split(":");
			var md_item_ar = md_item.split(":");
			var lg_item_ar = lg_item.split(":");
			var to_show = slidesDefault_ar[0];
			var to_scroll = slidesDefault_ar[1];
			if (responsive == 1) { responsive = true; } else { responsive = false; }
			if (dots == 1) { dots = true; } else { dots = false; }
			if (arrows == 1) { arrows = true; } else { arrows = false; }
			if (infinite == 1) { infinite = true; } else { infinite = false; }
			if (autoplay == 1) { autoplay = true; } else { autoplay = false; }
			if (centerMode == 1) { centerMode = true; } else { centerMode = false; }
			if (vertical == 1) { vertical = true; } else { vertical = false; }
			if (typeof speed !== typeof undefined && speed !== false) {
			} else { speed = 300; }
			if (typeof autoplaySpeed !== typeof undefined && autoplaySpeed !== false) {
			} else { autoplaySpeed = 2000; }
			if (typeof centerPadding !== typeof undefined && centerPadding !== false) {
			} else { centerPadding = "0px"; }
			var reponsive_json = [{
				breakpoint: 1024,
				settings: {
					slidesToShow: Number(lg_item_ar[0]),
					slidesToScroll: Number(lg_item_ar[1])
				}
			}, {
				breakpoint: 992,
				settings: {
					slidesToShow: Number(md_item_ar[0]),
					slidesToScroll: Number(md_item_ar[1])
				}
			}, {
				breakpoint: 768,
				settings: {
					slidesToShow: Number(sm_item_ar[0]),
					slidesToScroll: Number(sm_item_ar[1]),
					vertical: false
				}
			}, {
				breakpoint: 480,
				settings: {
					slidesToShow: Number(xs_item_ar[0]),
					slidesToScroll: Number(xs_item_ar[1]),
					vertical: false
				}
			}];
			if (responsive == 1) {
				$(this).slick({
					dots: dots,
					infinite: infinite,
					arrows: arrows,
					speed: Number(speed),
					vertical: vertical,
					slidesToShow: Number(to_show),
					slidesToScroll: Number(to_scroll),
					autoplay: autoplay,
					autoplaySpeed: Number(autoplaySpeed),
					responsive: reponsive_json
				});
			} else {
				$(this).slick({
					dots: dots,
					infinite: infinite,
					arrows: arrows,
					speed: Number(speed),
					vertical: vertical,
					slidesToShow: Number(to_show),
					slidesToScroll: Number(to_scroll),
					autoplay: autoplay,
					autoplaySpeed: Number(autoplaySpeed)
				});
			}
		});
	}
};
NN_FRAMEWORK.loadPage = function () {
	ValidationFormSelf("validation-newsletter");
	ValidationFormSelf("validation-cart");
	ValidationFormSelf("validation-user");
	ValidationFormSelf("validation-contact");
	loadPagingAjax("ajax/ajax_product.php", '.paging-product', 0, 12);
	ResizeWebsite();
};

NN_FRAMEWORK.galleryPage = function () {
	$('.pic-album [data-fancybox]').fancybox({
		thumbs: {
			autoStart: true
		},
		transitionEffect: "circular",
		slideShow: {
			autoStart: true,
			speed: 3000
		}
	});
};

$window.resize(function () {
	ResizeWebsite();
});
$window.scroll(function () {
	if ($window.scrollTop() >= $(".header").height() + 137) {
		$(".menu").addClass("fixed");
	} else {
		$(".menu").removeClass("fixed");
	}
	// $(".scroll-mouse").click(function () {
	// 	$window.()
	// });
	// if (!$('.scrollToTop').length) {
	// 	$("body").append('<div class="scrollToTop"><img src="' + GOTOP + '" alt="Go Top"/></div>');
	// }
	// if ($(this).scrollTop() > 100) {
	// 	$('.scrollToTop').fadeIn();
	// } else {
	// 	$('.scrollToTop').fadeOut();
	// }
});
NN_FRAMEWORK.menuMobile = function () {
	$('body').on('click', 'span.btn-dropdown-menu', function () {
		var o = $(this);
		if (!o.hasClass('active')) {
			o.addClass('active');
			o.next('.sub-menu').stop().slideDown(300);
		} else {
			o.removeClass('active');
			o.next('.sub-menu').stop().slideUp(300);
		}
	});
	$('.menu-mobile-btn').click(function (e) {
		e.preventDefault();
		e.stopPropagation();

		var _menuOpen = $('.header-left-fixwidth').toggleClass('active').hasClass('open-sidebar-menu');
		if (_menuOpen == false) {
			$('.header-left-fixwidth').toggleClass('open-sidebar-menu');
			$('.opacity-menu').toggleClass('open-opacity');

			$('#menu').addClass('fixed');
			$('body').css('overflow', 'hidden');
		}
		else {
			$('.open-menu-header').removeClass('open-button');
			$('.header-left-fixwidth').removeClass('open-sidebar-menu');
			$('.opacity-menu').removeClass('open-opacity');
			$('#menu').removeClass('fixed');
			$('body').css('overflow', 'auto');
		}
		
	});
	$('.opacity-menu').click(function (e) {
		$('.open-menu-header').removeClass('open-button');
		$('.header-left-fixwidth').removeClass('open-sidebar-menu');
		$('.opacity-menu').removeClass('open-opacity');

		$('#menu').removeClass('fixed');
		$('body').css('overflow', 'auto');
	});
	$('#navMenuClose').click(function () {
		$('.open-menu-header').removeClass('open-button');
		$('.header-left-fixwidth').removeClass('open-sidebar-menu');
		$('.opacity-menu').removeClass('open-opacity');
		$('#menu').removeClass('fixed');
		$('body').css('overflow', 'auto');
	});
};
$document.ready(function () {
	setTimeout(function () { $("#pre-loader").fadeOut(1e3) }, 400);
	NN_FRAMEWORK.menuMobile(),
		NN_FRAMEWORK.galleryPage(),
		NN_FRAMEWORK.WowAnimation(),
		NN_FRAMEWORK.aweOwlPage(),
		NN_FRAMEWORK.slickPage(),
		NN_FRAMEWORK.loadPage(),
		NN_FRAMEWORK.tocDetail(),
		NN_FRAMEWORK.tabDetail(),
		NN_FRAMEWORK.iconSearch(),
		NN_FRAMEWORK.backToTop(),
		NN_FRAMEWORK.setAlt(),
		NN_FRAMEWORK.pageCart();
});
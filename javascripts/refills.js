!function(e){e.mark={jump:function(t){var r={selector:"a.scroll-on-page-link"};return"string"==typeof t&&(r.selector=t),t=e.extend(r,t),e(t.selector).click(function(t){var r=e(this),n=r.attr("href"),o=1e3,c=e(n).offset().top;e("html,body").animate({scrollTop:c},o,"swing"),t.preventDefault()})}}}(jQuery),jQuery(function(){jQuery.mark.jump()});
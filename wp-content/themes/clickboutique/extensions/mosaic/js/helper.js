
jQuery.fn.outerHTML = function(){
    // IE, Chrome & Safari will comply with the non-standard outerHTML, all others (FF) will have a fall-back for cloning
    return (!this.length) ? this : (this[0].outerHTML || (
        function(el){
            var div = document.createElement('div');
            div.appendChild(el.cloneNode(true));
            var contents = div.innerHTML;
            div = null;
            return contents;
        })(this[0]));
}

jQuery(document).ready(function($){
    var banner_images = $('img[data-image-type="banner"]');
    $(banner_images).each(function(){
        $(this).wrap('<div class="banner-wrapper" />');
        $(this).parent().append('<div class="img-overlay" />');
        $(this).parent().append('<div class="img-text"><div class="img-text-inner">' + $(this).data('image-text') + '</div></div>');
    });
}); 
//const IMG_TAG = '<img src="https://globalprivacycontrol.org/img/favicon/favicon-32x32.png">'
const IMG_TAG_true = '<img src="https://globalprivacycontrol.org/img/favicon/favicon-32x32.png">'
const IMG_TAG_false = '<img src="https://globalprivacycontrol.org/img/favicon/favicon-32x32.png">'
function insert_gpc_icon(gpc_result) {
    $('.yuRUbf a').each(function() {
        var URL = $(this).prop('href');
        if (URL.indexOf('webcache') == -1 && URL.indexOf('www.google.com/search?') == -1) {
            var length = Object.keys(gpc_result).length;
            let decoded_array = JSON.parse(gpc_result);
            var match_array_bool;
            for(var i = 0; i < length; i++){
                if(decoded_array[i].URL == URL){
                    match_array_bool = x;
                }
            }
            if(match_array_bool){
                $(this).children("br").after(IMG_TAG_true);
            }
            else{
                $(this).children("br").after(IMG_TAG_false);
            }
        }
    });
    $('.yuRUbf link').each(function() {
        var URL = $(this).prop('href');
        if (URL.indexOf('webcache') == -1 && URL.indexOf('www.google.com/search?') == -1) {
            var bool_1 = JSON.parse(gpc_result[index]);
            if(bool_1.gpc){
                $(this).children("br").after(IMG_TAG_true);
            }
            else{
                $(this).children("br").after(IMG_TAG_false);
            }
            index++;
        }
    });
    $('g-link link').each(function() {
        var URL = $(this).prop('href');
        if (URL.indexOf('webcache') == -1 && URL.indexOf('www.google.com/search?') == -1) {
            var bool_1 = JSON.parse(gpc_result[index]);
            if(bool_1.gpc){
                $(this).children("br").after(IMG_TAG_true);
            }
            else{
                $(this).children("br").after(IMG_TAG_false);
            }
            index++;
        }
    });
    $('g-link a').each(function() {
        var URL = $(this).prop('href');
        if (URL.indexOf('webcache') == -1 && URL.indexOf('www.google.com/search?') == -1) {
            var bool_1 = JSON.parse(gpc_result[index]);
            if(bool_1.gpc){
                $(this).children("br").after(IMG_TAG_true);
            }
            else{
                $(this).children("br").after(IMG_TAG_false);
            }
            index++;
        }
    });
}
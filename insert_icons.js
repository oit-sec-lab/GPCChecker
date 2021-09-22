const EXTENSION_ID = chrome.runtime.id;
const IMG_PATH_TRUE = 'chrome-extension://' + EXTENSION_ID + '/images/gpc_logo_true.jpg'
const IMG_PATH_FLASE = 'chrome-extension://' + EXTENSION_ID + '/images/gpc_logo_false.jpg'
const IMG_TAG_TRUE = "<img src=" + IMG_PATH_TRUE + ">"
const IMG_TAG_FALSE = "<img src=" + IMG_PATH_FLASE + ">"
function insert_gpc_icon(gpc_result) {
    var index = 0;
    $('.yuRUbf a').each(function() {
        var URL = $(this).prop('href');
        if (URL.indexOf('webcache') == -1 && URL.indexOf('www.google.com/search?') == -1) {
            var match_array_bool = gpc_result[index]['gpc'];
            if(match_array_bool){
                $(this).children("br").after(IMG_TAG_TRUE);
            }
            else{
                $(this).children("br").after(IMG_TAG_FALSE);
            }
            index++;
        }
    });
    $('.yuRUbf link').each(function() {
        var URL = $(this).prop('href');
        if (URL.indexOf('webcache') == -1 && URL.indexOf('www.google.com/search?') == -1) {
            console.log(gpc_result);
            var match_array_bool = gpc_result[index]['gpc'];
            if(match_array_bool){
                $(this).children("br").after(IMG_TAG_TRUE);
            }
            else{
                $(this).children("br").after(IMG_TAG_FALSE);
            }
            index++;
        }
    });
    $('g-link link').each(function() {
        var URL = $(this).prop('href');
        if (URL.indexOf('webcache') == -1 && URL.indexOf('www.google.com/search?') == -1) {
            console.log(gpc_result);
            var match_array_bool = gpc_result[index]['gpc'];
            if(match_array_bool){
                $(this).children("br").after(IMG_TAG_TRUE);
            }
            else{
                $(this).children("br").after(IMG_TAG_FALSE);
            }
            index++;
        }
    });
    $('g-link a').each(function() {
        var URL = $(this).prop('href');
        if (URL.indexOf('webcache') == -1 && URL.indexOf('www.google.com/search?') == -1) {
            console.log(gpc_result);
            var match_array_bool = gpc_result[index]['gpc'];
            if(match_array_bool){
                $(this).children("br").after(IMG_TAG_TRUE);
            }
            else{
                $(this).children("br").after(IMG_TAG_FALSE);
            }
            index++;
        }
    });
}
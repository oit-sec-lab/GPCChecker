//const IMG_TAG = '<img src="https://globalprivacycontrol.org/img/favicon/favicon-32x32.png">'
const IMG_Path_true = chrome.extension.getURL('images/gpc_icon_true.jpg')
const IMG_Path_false = chrome.extension.getURL('images/gpc_icon_false.jpg')
const IMG_TAG_true = '<img src="${IMG_Path_true}">'
const IMG_TAG_false = '<img src="${IMG_Path_false}">'
function insert_gpc_icon(gpc_result) {
    var id = 0;
    $('.yuRUbf a').each(function() {
        var URL = $(this).prop('href');
        if (URL.indexOf('webcache') == -1 && URL.indexOf('www.google.com/search?') == -1) {
            var bool_1 = JSON.parse(gpc_result[id]);
            if(bool_1.gpc){
                $(this).children("br").after(IMG_TAG_true);
            }
            else{
                $(this).children("br").after(IMG_TAG_false);
            }
            id++;
        }
    });
    $('.yuRUbf link').each(function() {
        var URL = $(this).prop('href');
        if (URL.indexOf('webcache') == -1 && URL.indexOf('www.google.com/search?') == -1) {
            var bool_1 = JSON.parse(gpc_result[id]);
            if(bool_1.gpc){
                $(this).children("br").after(IMG_TAG_true);
            }
            else{
                $(this).children("br").after(IMG_TAG_false);
            }
            id++;
        }
    });
    $('g-link link').each(function() {
        var URL = $(this).prop('href');
        if (URL.indexOf('webcache') == -1 && URL.indexOf('www.google.com/search?') == -1) {
            var bool_1 = JSON.parse(gpc_result[id]);
            if(bool_1.gpc){
                $(this).children("br").after(IMG_TAG_true);
            }
            else{
                $(this).children("br").after(IMG_TAG_false);
            }
            id++;
        }
    });
    $('g-link a').each(function() {
        var URL = $(this).prop('href');
        if (URL.indexOf('webcache') == -1 && URL.indexOf('www.google.com/search?') == -1) {
            var bool_1 = JSON.parse(gpc_result[id]);
            if(bool_1.gpc){
                $(this).children("br").after(IMG_TAG_true);
            }
            else{
                $(this).children("br").after(IMG_TAG_false);
            }
            id++;
        }
    });
}
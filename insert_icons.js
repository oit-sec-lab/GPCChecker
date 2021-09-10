function insert_bool_icons(json_array) { //link_json_array == json_array

    $('.yuRUbf a').each(function() {
        var tags_url = $(this).prop('href');
        if (tags_url.indexOf('webcache') == -1 && tags_url.indexOf('www.google.com/search?') == -1) {
            const result_array = json_array.find(x => x.URL === tags_url);
            const aEle = document.getElementById($('div > a'));
            if(result_array.gpc){
                console.log('true');
            }
            else{
                console.log('false');
            }
        }
    });
    $('.yuRUbf link').each(function() {

    });
    $('g-link link').each(function() {

    });
    $('g-link a').each(function() {

    });
}

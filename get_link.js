function getURLs() {
    let URL_json_array = [];
    var id = 1;

    $('.yuRUbf a').each(function() {
        var URL_json = {};
        var URL = $(this).prop('href');
        if (URL.indexOf('webcache') == -1 && URL.indexOf('www.google.com/search?') == -1) {
            URL_json["id"] = id;
            URL_json["URL"] = URL;
            URL_json_array.push(JSON.stringify(URL_json));
            id++;
        }
    });
    $('.yuRUbf link').each(function() {
        var URL_json = {};
        var URL = $(this).prop('href');
        if (URL.indexOf('webcache') == -1 && URL.indexOf('www.google.com/search?') == -1) {
            URL_json["id"] = id;
            URL_json["URL"] = URL;
            URL_json_array.push(JSON.stringify(URL_json));
            id++;
        }
    });
    $('g-link link').each(function() {
        var URL_json = {};
        var URL = $(this).prop('href');
        if (URL.indexOf('webcache') == -1 && URL.indexOf('www.google.com/search?') == -1) {
            URL_json["id"] = id;
            URL_json["URL"] = URL;
            URL_json_array.push(JSON.stringify(URL_json));
            id++;
        }
    });
    $('g-link a').each(function() {
        var URL_json = {};
        var URL = $(this).prop('href');
        if (URL.indexOf('webcache') == -1 && URL.indexOf('www.google.com/search?') == -1) {
            URL_json["id"] = id;
            URL_json["URL"] = URL;
            URL_json_array.push(JSON.stringify(URL_json));
            id++;
        }
    });

    return URL_json_array;
}

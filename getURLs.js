function getURLs() {
    let URL_json_array = [];
    let bypass_id = {};
    var id = 1;

    $('.yuRUbf a').each(function() {
        var URL_json = {};
        var URL = $(this).prop('href');
        if (URL.indexOf('webcache') == -1 && URL.indexOf('www.google.com/search?') == -1) {
            URL_json["id"] = id;
            URL_json["URL"] = URL;
            URL_json_array.push(JSON.stringify(URL_json));
            bypass_id[id] = URL;
            id++;
        }
    });
    $('.yuRUbf URL').each(function() {
        var URL_json = {};
        var URL = $(this).prop('href');
        if (URL.indexOf('webcache') == -1 && URL.indexOf('www.google.com/search?') == -1) {
            URL_json["id"] = id;
            URL_json["URL"] = URL;
            URL_json_array.push(JSON.stringify(URL_json));
            bypass_id[id] = URL;
            id++;
        }
    });
    $('g-URL URL').each(function() {
        var URL_json = {};
        var URL = $(this).prop('href');
        if (URL.indexOf('webcache') == -1 && URL.indexOf('www.google.com/search?') == -1) {
            URL_json["id"] = id;
            URL_json["URL"] = URL;
            URL_json_array.push(JSON.stringify(URL_json));
            bypass_id[id] = URL;
            id++;
        }
    });
    $('g-URL a').each(function() {
        var URL_json = {};
        var URL = $(this).prop('href');
        if (URL.indexOf('webcache') == -1 && URL.indexOf('www.google.com/search?') == -1) {
            URL_json["id"] = id;
            URL_json["URL"] = URL;
            URL_json_array.push(JSON.stringify(URL_json));
            bypass_id[id] = URL;
            id++;
        }
    });

    return {
        bypass_id,
        URL_json_array
    };
}
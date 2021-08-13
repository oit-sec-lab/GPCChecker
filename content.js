function geturlss() {
    let urls = [];
    var id = 1;

    $('.yuRUbf a').each(function(id) {
        var url_json = {};
        url_json['id'] = id;
        url_json['URL'] = $(this).prop('href');
        url_json['tag'] = 'a';
        urs.append(JSON.stringify(url_json));
        id++;
    });
    $('.yuRUbf link').each(function(id) {
        var url_json = {};
        url_json['id'] = id;
        url_json['URL'] = $(this).prop('href');
        url_json['tag'] = 'link';
        urs.append(JSON.stringify(url_json));
        id++;
    });
    
    console.log(urls);
    return urls;
}

function geturlss() {
    var urls = [];
    
    $('.yuRUbf a').each(function(index) {
        var url_json = {};
        url_json['id'] = index + 1;
        url_json['URL'] = $(this).prop('href');
        url_json['tag'] = 'a';
        urs.append(JSON.stringify(url_json));
    });
    $('.yuRUbf link').each(function(index) {
        var url_json = {};
        url_json['id'] = index + 1;
        url_json['URL'] = $(this).prop('href');
        url_json['tag'] = 'link';
        urs.append(JSON.stringify(url_json));
    });
    
    console.log(urls);
    return urls;
}

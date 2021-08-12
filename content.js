function geturlss() {
    let urls = {};

    $(.yuRUbf a).each(function() {
        urls[$(this).prop('a')] = $(this).prop('href');
    });
    $(.yuRUbf link).each(function() {
        urls[$(this).prop('link')] = $(this).prop('href');
    });

    var URL_JSON = JSON.stringify(urls);
    console.log(URL_JSON);
}

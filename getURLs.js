let link_json_array = [];
let bypass_id = {};
var id = 1;

$('.yuRUbf a').each(function() {
    var link_json = {};
    var link = $(this).prop('href');
    if (!link.match('https?://[webcache.googleusercontent.com]+')) {
        link_json["id"] = id;
        link_json["URL"] = link;
        link_json_array.push(JSON.stringify(link_json));
        bypass_id[id] = link;
        id++;
    }
    else if (!link.match('https?://[www.google.com/search?]+')){
        link_json["id"] = id;
        link_json["URL"] = link;
        link_json_array.push(JSON.stringify(link_json));
        bypass_id[id] = link;
        id++;
    }
});
$('.yuRUbf link').each(function() {
    var link_json = {};
    var link = $(this).prop('href');
    if (!link.match('https?://[webcache.googleusercontent.com]+')) {
        link_json["id"] = id;
        link_json["URL"] = link;
        link_json_array.push(JSON.stringify(link_json));
        bypass_id[id] = link;
        id++;
    }
    else if (!link.match('https?://[www.google.com/search?]+')){
        link_json["id"] = id;
        link_json["URL"] = link;
        link_json_array.push(JSON.stringify(link_json));
        bypass_id[id] = link;
        id++;
    }
});
$('g-link link').each(function() {
    var link_json = {};
    var link = $(this).prop('href');
    if (!link.match('https?://[webcache.googleusercontent.com]+')) {
        link_json["id"] = id;
        link_json["URL"] = link;
        link_json_array.push(JSON.stringify(link_json));
        bypass_id[id] = link;
        id++;
    }
    else if (!link.match('https?://[www.google.com/search?]+')){
        link_json["id"] = id;
        link_json["URL"] = link;
        link_json_array.push(JSON.stringify(link_json));
        bypass_id[id] = link;
        id++;
    }
});
$('g-link a').each(function() {
    var link_json = {};
    var link = $(this).prop('href');
    if (!link.match('https?://[webcache.googleusercontent.com]+')) {
        link_json["id"] = id;
        link_json["URL"] = link;
        link_json_array.push(JSON.stringify(link_json));
        bypass_id[id] = link;
        id++;
    }
    else if (!link.match('https?://[www.google.com/search?]+')){
        link_json["id"] = id;
        link_json["URL"] = link;
        link_json_array.push(JSON.stringify(link_json));
        bypass_id[id] = link;
        id++;
    }
});

console.log(bypass_id);

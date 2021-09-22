let URL = "**********"

var link_json_array = getURLs();
console.log(link_json_array);

checkGPC(URL, link_json_array)
    .then(res => res.json())
    .then(data => {
        insert_gpc_icon(data);
    })
    .catch((error) => {
        console.error(error);
    });


async function checkGPC(url, links) {
    var response = await fetch(url, {
        method: 'POST',
        headers:{'ContentType': 'application/json'},
        body: links
    })
    return response;
}

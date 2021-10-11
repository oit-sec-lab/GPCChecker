let URL = "https://gpcchecker.net/sites"

var link_json_array = getURLs();

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
        headers:{'Content-Type': 'application/json'},
        body: links
    })
    return response;
}

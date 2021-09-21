let URL = "**********************"

var link_json_array = getURLs();
console.log(link_json_array);

checkGPC(URL, link_json_array)
    .then(res => res.json())
    .then(data => {
        //"data" is json array from API response
        //so, if you want to access each json, you can access like array
        console.log(data);
        insert_gpc_icon(data);
    })
    .catch((error) => {
        console.error(error);
    });


async function checkGPC(url, links) {
    var response = await fetch(url, {
        method: 'POST',
        body: links
    })
    return response;
}

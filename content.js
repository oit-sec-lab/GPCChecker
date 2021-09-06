let URL = "***************"

var [bypass_link_from_id, link_json_array] = getURLs();
checkGPC(URL, link_json_array)
    .then(res => {
        if(!res.ok) {
        throw new Error('Fetch: ${res.status} ${res.statusText}');
        }
        //Please add the following process
        console.log("kokomade");
    })
    .catch((error) => {
        console.error(error);
    });


async function checkGPC(url, links) {
    var response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type' : 'text/plain'
        },
        body: links
    })
    return response.text;
}

let URL = "***************"


function checkDNT(links) {
    var response = fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type' : 'text'
        },
        body: links
    }

    return response.json();
}

function main() {
    var {bypass_link_from_id, link_json_array} = getLinks();
    checkDNT(link_json_array)
        .then((res) => {
            if(!res.ok) {
            throw new Error('Fetch: ${res.status} ${res.statusText}');
            }
            console.log("kokomade");
            return res.json();
        })
        .catch((error) => {
            console.error(error);
        });
}

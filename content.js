let URL = "***************"

main();



function getLinks() {
    let link_json_array = [];
    let bypass_id = {};
    var id = 1;

    $('.TbwUpd cite').each(function(index) {
        if (index % 2 == 0) {
            var link_json = {};
            link_json["id"] = index;
            link_json["URL"] = $(this).text();
            link_json_array.append(JSON.stringify(link_json));

            bypass[index] = $(this).text();
        }
    });

    return {
        bypass_id,
        link_json_array
    };
}


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

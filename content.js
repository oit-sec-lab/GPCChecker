let URL = "***************"

main();



function getLinks() {
    let link_json_array = [];
    let bypass_id = {};
    var id = 1;

    $('.yuRUbf a').each(function() {
        var link_json = {};
        link_json["id"] = id;
        link_json["URL"] = $(this).prop('href');
        link_json_array.append(JSON.stringify(link_json));

        bypass[id] = $(this).prop('href');

        id++;
    });
    $('.yuRUbf link').each(function() {
        var link_json = {};
        link_json["id"] = id;
        link_json["URL"] = $(this).prop('href');
        link_json_array.append(JSON.stringify(link_json));

        bypass[id] = $(this).prop('href');

        id++;
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
            'Content-Type' : 'application/json'
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
            return res.json();
        })
        .then(json => {
            console.log("kokomade");
        })
        .catch((error) => {
            console.error(error);
        });
}

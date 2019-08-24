

function myFilteringFunction(jsonObjects, region){
    var filterData = []
    jsonObjects.forEach(hutData => {
        if (hutData.region === region) {
            filterData.push(hutData)
        }
    });
    return filterData
}


async function getMeHuts(region) {
    const headers = { "x-api-key": "bU5t3d5QOv5V0QNWU36yp5nGDhEtmLDc6UbTfvPM" };
    var data = await fetch("https://api.doc.govt.nz/v2/huts", { headers })
        .then(res => res.json())
        .then(jsonObjects => myFilteringFunction(jsonObjects, region))    
    return data;
}

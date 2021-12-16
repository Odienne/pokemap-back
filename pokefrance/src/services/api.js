const url = 'http://localhost:3000';

export const getPokemon = (urlParameters = '') => {
    const requestOptions = {
        method: 'GET',
        headers: {
            'Access-Control-Allow-Origin': '*'
        },
        mode: 'cors',
        cache: 'default'
    };
    return fetch(url + '/pokemon/' + urlParameters, requestOptions).then(res => res.json()).then(resJson => resJson).catch(e => console.error(e));
}


export const getPokemonsWithCities = (cities) => {
    const requestOptions = {
        method: 'POST',
        headers: {
            'Access-Control-Allow-Origin': '*'
        },
        body: JSON.parse(cities),
        mode: 'cors',
        cache: 'default'
    };
    console.log(cities)
    return fetch(url + '/pokemon', requestOptions).then(res => res.json()).then(resJson => resJson).catch(e => console.error(e));
}

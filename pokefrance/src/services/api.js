const url = 'http://localhost:3000';

export const getData = () => {
    const requestOptions = {
        method: 'GET',
        headers: {
            'Access-Control-Allow-Origin': '*'
        },
        mode: 'cors',
        cache: 'default'
    };

    return fetch(url + '/data', requestOptions).then(res => res.json()).then(resJson => resJson).catch(e => console.error(e));
}

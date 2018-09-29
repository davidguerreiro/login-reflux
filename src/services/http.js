import 'whatwg-fetch'

export function get(url) {
    return window.fetch(url)
    .then((response) => {
        return response.json();
    })
};
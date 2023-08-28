

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

if(urlParams.has('search')) {
    console.log(urlParams.get('search'));
    let term = urlParams.get('search').toLowerCase();
    if(term === '') {
        window.location.href = "https://cmardc.github.io/cMardc/html/search.html";
    }
    projects = document.getElementsByClassName('code');

    for (let index = 0; index < projects.length; index++) {
        const element = projects[index];
        if(!element.id.includes(term)) {
            element.style.display = 'none';
        }
    }
}
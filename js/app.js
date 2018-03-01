const loadPage = () => {
    apiLoad();
};

const apiLoad = () => {
    const url = `https://api.linkedin.com/v1/companies/1337/updates?start=20&count=10&format=json`;
    $.getJSON(url, (response) => {
        console.log(response);
    });
};

$(document).ready(loadPage);
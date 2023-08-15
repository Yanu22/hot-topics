const container = document.querySelector("#container");
const partials = document.querySelectorAll(".navigation");
let connect = "partials/home.html";
const loadContent = (urlFeed) => {
    fetch(urlFeed)

        .then((response) => {
        return response.text();
        })

        .then((data) => {
            container.innerHTML = data;
        })

        .catch((error) => {
            console.error("Error fetching content: ", error);
        });
};

const selectContent = (event) => {
    event.preventDefault();
    url = event.target.href;
    loadContent(url);
};

loadContent(connect);
partials.forEach((link) => {
link.addEventListener("click", selectContent);
});
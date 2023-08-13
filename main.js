// Navigation
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-items");

hamburger.addEventListener("click", function(){
    hamburger.classList.toggle("toggle");
    navLinks.classList.toggle("toggle");
});

// Clock
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const today = new Date();
const day = today.getDate();
const month = months[today.getMonth()];
const year = today.getFullYear();

const currentDate = `${month} ${day}, ${year}`;

const time = document.getElementById("time");
time.innerHTML = currentDate;

// Api Data

async function newYorkTimes(){
    const response = await fetch("https://api.nytimes.com/svc/topstories/v2/home.json?api-key=gOAzFbc43E3BQnM6221LbWnXz7DOhxSl");
    const data = await response.json();

    const headlineTitle = data.results[0].title;
    document.getElementById("headline-title").innerHTML = headlineTitle;

    const headlineAbstract = data.results[0].abstract;
    document.getElementById("headline-abstract").innerHTML = headlineAbstract;

    const imgSrc = data.results[0].multimedia[0].url;
    document.getElementById("img").src = imgSrc;

    const author = data.results[0].byline;
    document.getElementById("author").innerHTML = author;

    const headlineLocation = data.results[0].geo_facet;
    document.getElementById("headline-location").innerHTML = headlineLocation;

    const headlineCaption = data.results[0].multimedia[1].caption;
    document.getElementById("headline-caption").innerHTML = headlineCaption;

    const gridItem2Title = data.results[1].title;
    document.getElementById("grid-item2-title").innerHTML = gridItem2Title;

    const gridItem2Abstract = data.results[1].abstract;
    document.getElementById("grid-item2-abstract").innerHTML = gridItem2Abstract;

    const gridItem2Author = data.results[1].byline;
    document.getElementById("grid-item2-author").innerHTML = gridItem2Author;

    const gridItem3Caption = data.results[1].multimedia[0].caption;
    document.getElementById("grid-item3-caption").innerHTML = gridItem3Caption;

    const gridItem3Img = data.results[1].multimedia[0].url;
    document.getElementById("grid-item3-img").src = gridItem3Img;

}


newYorkTimes();
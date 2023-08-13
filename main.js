
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

    const headlineCaption = data.results[0].multimedia[1].caption
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

    const gridItem4Title = data.results[2].title;
    document.getElementById("grid-item4-title").innerHTML = gridItem4Title;

    const gridItem4Caption = data.results[2].multimedia[2].caption;
    document.getElementById("grid-item4-caption").innerHTML = gridItem4Caption;

    const gridItem4ImgSrc = data.results[2].multimedia[0].url;
    document.getElementById("grid-item4-img").src = gridItem4ImgSrc;

    const gridItem5Title = data.results[3].title;
    document.getElementById("grid-item5-title").innerHTML = gridItem5Title;

    const gridItem5Img = data.results[3].multimedia[0].url;
    document.getElementById("grid-item5-img").src = gridItem5Img;

    const gridItem5Caption = data.results[3].multimedia[0].caption;
    document.getElementById("grid-item5-caption").innerHTML = gridItem5Caption;

    const gridItem6Title = data.results[4].title;
    document.getElementById("grid-item6-title").innerHTML = gridItem6Title;

    const gridItem6Abstract = data.results[4].abstract;
    document.getElementById("grid-item6-abstract").innerHTML = gridItem6Abstract;

    const gridItem6Author = data.results[4].byline;
    document.getElementById("grid-item6-author").innerHTML = gridItem6Author;

    const gridItem7Title = data.results[8].title;
    document.getElementById("grid-item7-title").innerHTML = gridItem7Title;

    const gridItem7Abstract = data.results[8].abstract;
    document.getElementById("grid-item7-abstract").innerHTML = gridItem7Abstract;

    const gridItem7Author = data.results[8].byline;
    document.getElementById("grid-item7-author").innerHTML = gridItem7Author;

    const gridItem8Title = data.results[9].title;
    document.getElementById("grid-item8-title").innerHTML = gridItem8Title;

    const gridItem8Abstract = data.results[9].abstract;
    document.getElementById("grid-item8-abstract").innerHTML = gridItem8Abstract;

    const gridItem8Author = data.results[9].byline;
    document.getElementById("grid-item8-author").innerHTML = gridItem8Author;

    const gridItem9Title = data.results[11].title;
    document.getElementById("grid-item9-title").innerHTML = gridItem9Title;

    const gridITem9Abstract = data.results[11].abstract;
    document.getElementById("grid-item9-abstract").innerHTML = gridITem9Abstract;

    const gridItem9Author = data.results[11].byline;
    document.getElementById("grid-item9-author").innerHTML = gridItem9Author;

}


newYorkTimes();

//World Data

async function worldData(){
    const response = await fetch("https://api.nytimes.com/svc/topstories/v2/world.json?api-key=gOAzFbc43E3BQnM6221LbWnXz7DOhxSl");
    const data = await response.json();

    
    const headlineTitle = data.results[0].title;
    document.getElementById("headline-title-world").innerHTML = headlineTitle;

    const headlineAbstract = data.results[0].abstract;
    document.getElementById("headline-abstract-world").innerHTML = headlineAbstract;

    const imgSrc = data.results[0].multimedia[0].url;
    document.getElementById("img-world").src = imgSrc;

    const author = data.results[0].byline;
    document.getElementById("author-world").innerHTML = author;

    const headlineLocation = data.results[0].geo_facet;
    document.getElementById("headline-location-world").innerHTML = headlineLocation;

    const headlineCaption = data.results[0].multimedia[1].caption
    document.getElementById("headline-caption-world").innerHTML = headlineCaption;

    const gridItem2Title = data.results[1].title;
    document.getElementById("grid-item2-title-world").innerHTML = gridItem2Title;

    const gridItem2Abstract = data.results[1].abstract;
    document.getElementById("grid-item2-abstract-world").innerHTML = gridItem2Abstract;

    const gridItem2Author = data.results[1].byline;
    document.getElementById("grid-item2-author-world").innerHTML = gridItem2Author;

    const gridItem3Caption = data.results[1].multimedia[0].caption;
    document.getElementById("grid-item3-caption-world").innerHTML = gridItem3Caption;

    const gridItem3Img = data.results[1].multimedia[0].url;
    document.getElementById("grid-item3-img-world").src = gridItem3Img;

    const gridItem4Title = data.results[2].title;
    document.getElementById("grid-item4-title-world").innerHTML = gridItem4Title;

    const gridItem4Caption = data.results[2].multimedia[2].caption;
    document.getElementById("grid-item4-caption-world").innerHTML = gridItem4Caption;

    const gridItem4ImgSrc = data.results[2].multimedia[0].url;
    document.getElementById("grid-item4-img-world").src = gridItem4ImgSrc;

    const gridItem5Title = data.results[3].title;
    document.getElementById("grid-item5-title-world").innerHTML = gridItem5Title;

    const gridItem5Img = data.results[3].multimedia[0].url;
    document.getElementById("grid-item5-img-world").src = gridItem5Img;

    const gridItem5Caption = data.results[3].multimedia[0].caption;
    document.getElementById("grid-item5-caption-world").innerHTML = gridItem5Caption;

    const gridItem6Title = data.results[4].title;
    document.getElementById("grid-item6-title-world").innerHTML = gridItem6Title;

    const gridItem6Abstract = data.results[4].abstract;
    document.getElementById("grid-item6-abstract-world").innerHTML = gridItem6Abstract;

    const gridItem6Author = data.results[4].byline;
    document.getElementById("grid-item6-author-world").innerHTML = gridItem6Author;

    const gridItem7Title = data.results[8].title;
    document.getElementById("grid-item7-title-world").innerHTML = gridItem7Title;

    const gridItem7Abstract = data.results[8].abstract;
    document.getElementById("grid-item7-abstract-world").innerHTML = gridItem7Abstract;

    const gridItem7Author = data.results[8].byline;
    document.getElementById("grid-item7-author-world").innerHTML = gridItem7Author;

    const gridItem8Title = data.results[9].title;
    document.getElementById("grid-item8-title-world").innerHTML = gridItem8Title;

    const gridItem8Abstract = data.results[9].abstract;
    document.getElementById("grid-item8-abstract-world").innerHTML = gridItem8Abstract;

    const gridItem8Author = data.results[9].byline;
    document.getElementById("grid-item8-author-world").innerHTML = gridItem8Author;

    const gridItem9Title = data.results[11].title;
    document.getElementById("grid-item9-title-world").innerHTML = gridItem9Title;

    const gridITem9Abstract = data.results[11].abstract;
    document.getElementById("grid-item9-abstract-world").innerHTML = gridITem9Abstract;

    const gridItem9Author = data.results[11].byline;
    document.getElementById("grid-item9-author-world").innerHTML = gridItem9Author;
}

worldData();

async function artData(){

    const response = await fetch("https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=gOAzFbc43E3BQnM6221LbWnXz7DOhxSl");
    const data = await response.json();

    const headlineTitle = data.results[0].title;
    document.getElementById("headline-title-art").innerHTML = headlineTitle;

    const headlineAbstract = data.results[0].abstract;
    document.getElementById("headline-abstract-art").innerHTML = headlineAbstract;

    const imgSrc = data.results[0].multimedia[0].url;
    document.getElementById("img-art").src = imgSrc;

    const author = data.results[0].byline;
    document.getElementById("author-art").innerHTML = author;

    const headlineLocation = data.results[0].geo_facet;
    document.getElementById("headline-location-art").innerHTML = headlineLocation;

    const headlineCaption = data.results[0].multimedia[1].caption
    document.getElementById("headline-caption-art").innerHTML = headlineCaption;

    const gridItem2Title = data.results[1].title;
    document.getElementById("grid-item2-title-art").innerHTML = gridItem2Title;

    const gridItem2Abstract = data.results[1].abstract;
    document.getElementById("grid-item2-abstract-art").innerHTML = gridItem2Abstract;

    const gridItem2Author = data.results[1].byline;
    document.getElementById("grid-item2-author-art").innerHTML = gridItem2Author;

    const gridItem3Caption = data.results[1].multimedia[0].caption;
    document.getElementById("grid-item3-caption-art").innerHTML = gridItem3Caption;

    const gridItem3Img = data.results[1].multimedia[0].url;
    document.getElementById("grid-item3-img-art").src = gridItem3Img;

    const gridItem4Title = data.results[2].title;
    document.getElementById("grid-item4-title-art").innerHTML = gridItem4Title;

    const gridItem4Caption = data.results[2].multimedia[2].caption;
    document.getElementById("grid-item4-caption-art").innerHTML = gridItem4Caption;

    const gridItem4ImgSrc = data.results[2].multimedia[0].url;
    document.getElementById("grid-item4-img-art").src = gridItem4ImgSrc;

    const gridItem5Title = data.results[3].title;
    document.getElementById("grid-item5-title-art").innerHTML = gridItem5Title;

    const gridItem5Img = data.results[3].multimedia[0].url;
    document.getElementById("grid-item5-img-art").src = gridItem5Img;

    const gridItem5Caption = data.results[3].multimedia[0].caption;
    document.getElementById("grid-item5-caption-art").innerHTML = gridItem5Caption;

    const gridItem6Title = data.results[4].title;
    document.getElementById("grid-item6-title-art").innerHTML = gridItem6Title;

    const gridItem6Abstract = data.results[4].abstract;
    document.getElementById("grid-item6-abstract-art").innerHTML = gridItem6Abstract;

    const gridItem6Author = data.results[4].byline;
    document.getElementById("grid-item6-author-art").innerHTML = gridItem6Author;

    const gridItem7Title = data.results[8].title;
    document.getElementById("grid-item7-title-art").innerHTML = gridItem7Title;

    const gridItem7Abstract = data.results[8].abstract;
    document.getElementById("grid-item7-abstract-art").innerHTML = gridItem7Abstract;

    const gridItem7Author = data.results[8].byline;
    document.getElementById("grid-item7-author-art").innerHTML = gridItem7Author;

    const gridItem8Title = data.results[9].title;
    document.getElementById("grid-item8-title-art").innerHTML = gridItem8Title;

    const gridItem8Abstract = data.results[9].abstract;
    document.getElementById("grid-item8-abstract-art").innerHTML = gridItem8Abstract;

    const gridItem8Author = data.results[9].byline;
    document.getElementById("grid-item8-author-art").innerHTML = gridItem8Author;

    const gridItem9Title = data.results[11].title;
    document.getElementById("grid-item9-title-art").innerHTML = gridItem9Title;

    const gridITem9Abstract = data.results[11].abstract;
    document.getElementById("grid-item9-abstract-art").innerHTML = gridITem9Abstract;

    const gridItem9Author = data.results[11].byline;
    document.getElementById("grid-item9-author-art").innerHTML = gridItem9Author;


}

artData();

// US Data

async function usData(){
    const response = await fetch("https://api.nytimes.com/svc/topstories/v2/us.json?api-key=gOAzFbc43E3BQnM6221LbWnXz7DOhxSl");
    const data = await response.json();

    const headlineTitle = data.results[0].title;
    document.getElementById("headline-title-us").innerHTML = headlineTitle;

    const headlineAbstract = data.results[0].abstract;
    document.getElementById("headline-abstract-us").innerHTML = headlineAbstract;

    const imgSrc = data.results[0].multimedia[0].url;
    document.getElementById("img-us").src = imgSrc;

    const author = data.results[0].byline;
    document.getElementById("author-us").innerHTML = author;

    const headlineLocation = data.results[0].geo_facet;
    document.getElementById("headline-location-us").innerHTML = headlineLocation;

    const headlineCaption = data.results[0].multimedia[1].caption
    document.getElementById("headline-caption-us").innerHTML = headlineCaption;

    const gridItem2Title = data.results[1].title;
    document.getElementById("grid-item2-title-us").innerHTML = gridItem2Title;

    const gridItem2Abstract = data.results[1].abstract;
    document.getElementById("grid-item2-abstract-us").innerHTML = gridItem2Abstract;

    const gridItem2Author = data.results[1].byline;
    document.getElementById("grid-item2-author-us").innerHTML = gridItem2Author;

    const gridItem3Caption = data.results[1].multimedia[0].caption;
    document.getElementById("grid-item3-caption-us").innerHTML = gridItem3Caption;

    const gridItem3Img = data.results[1].multimedia[0].url;
    document.getElementById("grid-item3-img-us").src = gridItem3Img;

    const gridItem4Title = data.results[2].title;
    document.getElementById("grid-item4-title-us").innerHTML = gridItem4Title;

    const gridItem4Caption = data.results[2].multimedia[2].caption;
    document.getElementById("grid-item4-caption-us").innerHTML = gridItem4Caption;

    const gridItem4ImgSrc = data.results[2].multimedia[0].url;
    document.getElementById("grid-item4-img-us").src = gridItem4ImgSrc;

    const gridItem5Title = data.results[3].title;
    document.getElementById("grid-item5-title-us").innerHTML = gridItem5Title;

    const gridItem5Img = data.results[3].multimedia[0].url;
    document.getElementById("grid-item5-img-us").src = gridItem5Img;

    const gridItem5Caption = data.results[3].multimedia[0].caption;
    document.getElementById("grid-item5-caption-us").innerHTML = gridItem5Caption;

    const gridItem6Title = data.results[4].title;
    document.getElementById("grid-item6-title-us").innerHTML = gridItem6Title;

    const gridItem6Abstract = data.results[4].abstract;
    document.getElementById("grid-item6-abstract-us").innerHTML = gridItem6Abstract;

    const gridItem6Author = data.results[4].byline;
    document.getElementById("grid-item6-author-us").innerHTML = gridItem6Author;

    const gridItem7Title = data.results[8].title;
    document.getElementById("grid-item7-title-us").innerHTML = gridItem7Title;

    const gridItem7Abstract = data.results[8].abstract;
    document.getElementById("grid-item7-abstract-us").innerHTML = gridItem7Abstract;

    const gridItem7Author = data.results[8].byline;
    document.getElementById("grid-item7-author-us").innerHTML = gridItem7Author;

    const gridItem8Title = data.results[9].title;
    document.getElementById("grid-item8-title-us").innerHTML = gridItem8Title;

    const gridItem8Abstract = data.results[9].abstract;
    document.getElementById("grid-item8-abstract-us").innerHTML = gridItem8Abstract;

    const gridItem8Author = data.results[9].byline;
    document.getElementById("grid-item8-author-us").innerHTML = gridItem8Author;

    const gridItem9Title = data.results[11].title;
    document.getElementById("grid-item9-title-us").innerHTML = gridItem9Title;

    const gridITem9Abstract = data.results[11].abstract;
    document.getElementById("grid-item9-abstract-us").innerHTML = gridITem9Abstract;

    const gridItem9Author = data.results[11].byline;
    document.getElementById("grid-item9-author-us").innerHTML = gridItem9Author;


}

usData();
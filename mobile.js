setInterval(() => {
    if (window.innerWidth < window.innerHeight) {
        document.getElementById("pfp").className = "card-flat-bottom";
        document.getElementById("pfp").style.width = "100%";
        document.getElementById("pfp").style.height = "20rem";
        document.getElementById("text").style.width = "100%";
        document.getElementById("button-column").className = "row-flat";
        document.getElementById("button-column").style.height = "";
        document.getElementById("button-column").style.width = "100%";
        document.getElementById("gh-button").className = "card-flat-bottom-left-alt";
    }

    else {
        document.getElementById("pfp").className = "card-flat-right";
        document.getElementById("pfp").style.width = "10rem";
        document.getElementById("pfp").style.height = "10rem";
        document.getElementById("text").style.width = "";
        document.getElementById("button-column").className = "column-flat";
        document.getElementById("button-column").style.height = "240px";
        document.getElementById("button-column").style.width = "";
        document.getElementById("gh-button").className = "card-flat-top-right-alt";
    }
});
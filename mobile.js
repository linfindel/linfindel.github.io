setInterval(() => {
    if (window.innerWidth < window.innerHeight) {
        document.getElementById("pfp").className = "card-flat-bottom";
        document.getElementById("pfp").style.width = "100%";
        document.getElementById("pfp").style.height = "20rem";
        document.getElementById("text").style.width = "100%";
        document.getElementById("text").style.alignItems = "";
        document.getElementById("text").className = "card-flat-top column";
    }

    else {
        document.getElementById("pfp").className = "card-flat-right";
        document.getElementById("pfp").style.width = "10rem";
        document.getElementById("pfp").style.height = "10rem";
        document.getElementById("text").style.width = "";
        document.getElementById("text").style.alignItems = "flex-start";
        document.getElementById("text").className = "card-flat-left column";
    }
});
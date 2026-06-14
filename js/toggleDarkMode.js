const button = document.getElementById("dark-mode-toggle");

if (getCookie("darkModeToggle") == "light") {
    button.innerText = "⏾";
} else if (getCookie("darkModeToggle") == "dark") {
    button.innerText = "☀︎";
    setDarkMode();
} else {
    setCookie("darkModeToggle", "light", 30);
    button.innerText = "⏾";
}

button?.addEventListener("click", (event) => {
    if (getCookie("darkModeToggle") == "light") {
        setDarkMode();
        button.innerText = "☀︎";
    } else if (getCookie("darkModeToggle") == "dark") {
        setLightMode();
        button.innerText = "⏾";
    } else {
        console.err(`Couldn't find a cookie containing dark mode preferences, cookie document contains the following: ${document.cookie}`);
    }
});

function setDarkMode() {
    document.querySelectorAll(".light").forEach((item) => {
        item.classList.remove("light");
        item.classList.add("dark");
    });
    document.querySelectorAll(".col-light").forEach((item) => {
        item.classList.remove("col-light");
        item.classList.add("col-dark");
    });
    document.querySelectorAll(".card-light").forEach((item) => {
        item.classList.remove("card-light");
        item.classList.add("card-dark");
    });
    setCookie("darkModeToggle", "dark", 30);
}

function setLightMode() {
    document.querySelectorAll(".dark").forEach((item) => {
        item.classList.remove("dark");
        item.classList.add("light");
    });
    document.querySelectorAll(".col-dark").forEach((item) => {
        item.classList.remove("col-dark");
        item.classList.add("col-light");
    });
    document.querySelectorAll(".card-dark").forEach((item) => {
        item.classList.remove("card-dark");
        item.classList.add("card-light");
    });
    setCookie("darkModeToggle", "light", 30);
}

function setCookie(cookieName, cookieValue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires="+ d.toUTCString();
    document.cookie = cookieName + "=" + cookieValue + ";" + expires + ";path=/";
}


function getCookie(cookieName) {
    let name = cookieName + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
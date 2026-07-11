/* ===========================
   PORTFOLIO CONFIG
   Edit everything here
=========================== */

const config = {
    name: "REVEN ADRIAN TAN",

    email: "Revenadriantan@gmail.com",

    social: {
        instagram: "https://instagram.com/Revenadriantan",
        tiktok: "https://tiktok.com/@Revenadrntan",
        threads: "https://threads.net/@revenadriantan",
        strava: "https://www.strava.com/athletes/rvnadrtan",
        hevy: "https://hevy.com/user/Revenadrian",
        spotify: "https://open.spotify.com/user/31mk722dbhei6ecms6adyz6svrjm?si=44462e83211349ac"
    },

    pb: {
        "5k": "Avg Pace 6:37 00:33:10",
        "10k": "Avg Pace 7:32 01:15:17",
        "15k": "Avg Pace 7:56 01:58:59",
        "21k": "Soon."
    },

    quotes: [

        "isn't our nature, let's be mature",

        "But who are we kidding? Nobody winning.",

        "Who knows where life will take you?",

        "A rush of blood to the head",

        "Reggata de blanc",

        "Ok computer",

       "(what's the story) morning glory?",

       "There nothing left to lose",

       "Enema of the state",

       "All killer, no filler",

       

    ]
};


/* ===========================
   PERSONAL BEST
=========================== */

const pb5 = document.getElementById("pb5k");
const pb10 = document.getElementById("pb10k");
const pb15 = document.getElementById("pb15k");
const pb21 = document.getElementById("pb21k");

if (pb5) pb5.textContent = config.pb["5k"];
if (pb10) pb10.textContent = config.pb["10k"];
if (pb15) pb15.textContent = config.pb["15k"];
if (pb21) pb21.textContent = config.pb["21k"];


/* ===========================
   SOCIAL LINKS
=========================== */

const instagram = document.getElementById("instagram");
const tiktok = document.getElementById("tiktok");
const threads = document.getElementById("threads");
const strava = document.getElementById("strava");
const hevy = document.getElementById("hevy");
const spotify = document.getElementById("spotify");
const igContact = document.getElementById("igContact");

function setLink(element, url) {
    if (!element) return;

    element.href = url;
    element.target = "_blank";
}

setLink(instagram, config.social.instagram);
setLink(tiktok, config.social.tiktok);
setLink(threads, config.social.threads);
setLink(strava, config.social.strava);
setLink(hevy, config.social.hevy);
setLink(spotify, config.social.spotify);
setLink(igContact, config.social.instagram);


/* ===========================
   EMAIL
=========================== */

const emailText = document.querySelector("#contact p");

if (emailText) {
    emailText.textContent = `Email: ${config.email}`;
}


/* ===========================
   ROTATING QUOTES
=========================== */

const quote = document.getElementById("quote");

let quoteIndex = 0;

function changeQuote() {

    if (!quote) return;

    quote.style.opacity = 0;

    setTimeout(() => {

        quote.textContent = config.quotes[quoteIndex];

        quote.style.opacity = 1;

        quoteIndex++;

        if (quoteIndex >= config.quotes.length) {
            quoteIndex = 0;
        }

    }, 300);

}

changeQuote();

setInterval(changeQuote, 4000);


/* ===========================
   SCROLL REVEAL
=========================== */

const revealElements = document.querySelectorAll(
    "section, .pb-card, .stat-card, .profile-card"
);

const observer = new IntersectionObserver(

    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    },

    {
        threshold: 0.15
    }

);

revealElements.forEach(el => {

    el.classList.add("hidden");

    observer.observe(el);

});


/* ===========================
   SMOOTH NAV ACTIVE
=========================== */

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-menu a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if (window.scrollY >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});
console.log(`
Part-time student.
Full-time training.
`);

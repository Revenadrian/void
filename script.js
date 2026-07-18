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
        hevy: "https://hevy.com/user/revenadrian",
        spotify: "https://open.spotify.com/user/31mk722dbhei6ecms6adyz6svrjm?si=44462e83211349ac"
    },

    pb: {
         "5k": "00:31:59       
            6:24",
        "10k": "01:15:00        
   7:30",
        "15k": "01:54:03      
   7:26",
        "21k": "02:43:20     
   7:45"
    },

    quotes: [

        "(What's the story) morning glory?",

        "Master of puppets",

        "Who knows where life will take you?",

        "A rush of blood to the head",

        "Reggata de blanc",

        "Ok computer",

       "Is'nt our nature, let's be mature",

       "There nothing left to lose",

       "Enema of the state",

       "All killer, no filler",

       "Dude Ranch",

       "Dookie",

       "Superunknown",

       "Nevermind",

       "1984",

       "The joshua tree",

       "Sliperry when wet",

       "Appetite for destruction",

       "the dark side of the moon",

       "In rainbow",

     "The bends",
   
   "Californication",

   "Sticky fingers",

   "London calling",

   "In utero",

   "Parklife",

   "Hybrid theory",

       "The black parade",

   "Hot fuss",

       "Toxicity",

       "Agterplaas",

       "Never get better",

       "Kid A",

       "Sinestesia"

       

       

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

/* ===========================
   LAST.FM
=========================== */

function timeAgo(unix) {
    const seconds = Math.floor((Date.now() - unix * 1000) / 1000);

    const intervals = [
        { label: "year", seconds: 31536000 },
        { label: "month", seconds: 2592000 },
        { label: "day", seconds: 86400 },
        { label: "hour", seconds: 3600 },
        { label: "minute", seconds: 60 }
    ];

    for (const interval of intervals) {
        const count = Math.floor(seconds / interval.seconds);
        if (count >= 1) {
            return `${count} ${interval.label}${count > 1 ? "s" : ""} ago`;
        }
    }

    return "Just now";
}

async function loadLastListening() {

    const API_KEY = "59ed14b713c85189a3e1c2eed4c0ec8f";
    const USER = "revenmc";

    try {

        const response = await fetch(
            `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${USER}&api_key=${API_KEY}&format=json&limit=1`
        );

        const data = await response.json();
        const track = data.recenttracks.track[0];

        document.getElementById("last-song").textContent = track.name;
       document.getElementById("last-artist").textContent =
            track.artist["#text"];
        document.getElementById("last-cover").src = track.image[3]["#text"];

        if (track.date) {
            document.getElementById("last-time").textContent =
                timeAgo(Number(track.date.uts));
        } else {
            document.querySelector(".music-status").innerHTML =
                '<i class="ri-disc-fill"></i> Currently Listening';
            document.getElementById("last-time").textContent =
                "Now Playing ●";
        }

    } catch (err) {

        console.error(err);

        document.getElementById("last-song").textContent = "Unable to load";
        document.getElementById("last-artist").textContent = "";

    }

}

loadLastListening();

async function updateVisitor() {
    try {
        const response = await fetch(
            "https://api.counterapi.dev/v1/reven-portfolio/visits/up"
        );

        const data = await response.json();

        document.getElementById("counter").innerText = data.count;
    } catch (error) {
        document.getElementById("counter").innerText = "offline";
    }
}

updateVisitor();

async function randomKnowledge() {
    try {
        const response = await fetch(
            "https://en.wikipedia.org/api/rest_v1/page/random/summary"
        );

        const data = await response.json();

        document.getElementById("wiki-title").innerText =
            data.title;

        document.getElementById("wiki-text").innerText =
            data.extract;

        document.getElementById("wiki-link").href =
            data.content_urls.desktop.page;

    } catch {
        document.getElementById("wiki-title").innerText =
            "Knowledge unavailable";
    }
}

randomKnowledge();

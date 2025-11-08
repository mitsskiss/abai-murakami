// --- PAGE PROGRESS TRACKER ---
const pages = ["index", "about", "works", "quotes", "research", "contact"];
const currentPage = window.location.pathname.split("/").pop().replace(".html", "") || "index";

let visited = JSON.parse(localStorage.getItem("visitedPages") || "[]");

if (!visited.includes(currentPage)) {
  visited.push(currentPage);
  localStorage.setItem("visitedPages", JSON.stringify(visited));
}

const progress = Math.round((visited.length / pages.length) * 100);
const bar = document.getElementById("progress-bar");

if (bar) {
  bar.style.width = `${progress}%`;
  bar.textContent = `${progress}%`;
}

// --- DYNAMIC QUOTES ---
const quotes = [
  "“Seek wisdom — it is the light of the soul.” — Abai",
  "“Memories warm you up from the inside. But they also tear you apart.” — Murakami",
  "“A wise man’s wealth is knowledge, not gold.” — Abai",
  "“When you come out of the storm, you won’t be the same person.” — Murakami"
];

const quoteBox = document.getElementById("daily-quote");
if (quoteBox) {
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  quoteBox.textContent = randomQuote;
}

const body = document.body;
const sidebar = document.getElementById("sidebar");
const main = document.querySelector("main");
const themeSwitch = document.getElementById("theme-switch");

const logo = document.querySelector(".sidebarlogo img");




function toggleSidebar() {
    sidebar.classList.toggle("show");
    sidebar.classList.toggle("hidden");
    updateGridLayout(); // Toggle the sidebar visibility
}



function hideSidebar() {
    sidebar.classList.add("hidden"); // Always hide the sidebar
    updateGridLayout();
}

function updateGridLayout() {
    if (sidebar.classList.contains("hidden")) {
        document.body.style.gridTemplateColumns = "0px 1fr"; // Expand main when sidebar is hidden
    } else {
        document.body.style.gridTemplateColumns = "300px 1fr"; // Restore sidebar width
    }
}

function enableDarkMode() {
    body.classList.add("dark-mode");
    body.classList.remove("light-mode");
    localStorage.setItem("theme", "dark");
    logo.src = "assets/logo-light.svg";
}

function disableDarkMode() {
    body.classList.add("light-mode");
    body.classList.remove("dark-mode");
    localStorage.setItem("theme", "light");
    logo.src = "assets/logo-dark.svg";
}

// Ensure themeSwitch exists before adding event listener
if (themeSwitch) {
    themeSwitch.addEventListener("change", function () {
        if (themeSwitch.checked) {
            enableDarkMode();
        } else {
            disableDarkMode();
        }
    });

    // Load saved theme from localStorage
    if (localStorage.getItem("theme") === "dark") {
        enableDarkMode();
        themeSwitch.checked = true;
    } else {
        disableDarkMode();
    }
}
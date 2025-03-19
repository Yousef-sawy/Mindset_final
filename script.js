const body = document.body;
const sidebar = document.getElementById("sidebar");
const main = document.querySelector("main");
const themeSwitch = document.getElementById("theme-switch");

const logo = document.querySelector(".sidebarlogo img");

const taskModal = document.getElementById("taskModal");
const addTaskButton = document.querySelector(".addTaskButton");
const taskForm = document.getElementById("taskForm");


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



// Open the modal
addTaskButton.addEventListener("click", function () {
    taskModal.style.display = "flex";
});

// Close the modal when clicking outside
window.addEventListener("click", function (event) {
    if (event.target === taskModal) {
        closeTaskModal();
    }
});

// Close modal function
function closeTaskModal() {
    taskModal.style.display = "none";
}

// Handle form submission (optional)
taskForm.addEventListener("submit", function (event) {
    event.preventDefault();
    alert("Task Created!"); // Replace this with actual form handling logic
    closeTaskModal();
});
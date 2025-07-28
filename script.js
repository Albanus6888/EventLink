document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.getElementById("theme-toggle");

  // Function to handle theme toggle
  toggleButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    // Store the theme preference in local storage
    const isDarkMode = document.body.classList.contains("dark-mode");
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");

    // Update the theme toggle button icon
    toggleButton.textContent = isDarkMode ? "🌞" : "🌙"; // Switch between sun and moon icons
  });

  // Load the saved theme preference on page load
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
    toggleButton.textContent = "🌞"; // Set to sun icon if dark mode is enabled
  } else {
    toggleButton.textContent = "🌙"; // Set to moon icon if light mode is enabled
  }

  // Search functionality
  const searchButton = document.getElementById("search-btn");

  searchButton.addEventListener("click", () => {
    const service = document.querySelector(".search-bar input[type='text']:nth-child(1)").value;
    const location = document.querySelector(".search-bar input[type='text']:nth-child(2)").value;

    if (service && location) {
      alert(`Searching for ${service} in ${location}`);
      // Replace the alert with actual search functionality to filter or fetch vendors.
    } else {
      alert("Please fill out both fields before searching.");
    }
  });

  // Show the services panel for Interior and its subcategories
  const serviceLinks = [
    "home-repairs", // Home Repairs & Maintenance
    "cleaning", // Cleaning & Organization
    "renovations" // Renovations & Upgrades
  ];

  serviceLinks.forEach(linkId => {
    const linkElement = document.getElementById(linkId);
    const submenuElement = document.getElementById(`${linkId}-services`);

    linkElement.addEventListener("mouseenter", () => {
      submenuElement.style.display = "block";
    });

    linkElement.addEventListener("mouseleave", () => {
      submenuElement.style.display = "none";
    });
  });

  // Show the services panel for Exterior and its subcategories
  const exteriorLinks = [
    "exterior-home-care", // Exterior Home Care
    "landscaping" // Landscaping & Outdoor Services
  ];

  exteriorLinks.forEach(linkId => {
    const linkElement = document.getElementById(linkId);
    const submenuElement = document.getElementById(`${linkId}-services`);

    linkElement.addEventListener("mouseenter", () => {
      submenuElement.style.display = "block";
    });

    linkElement.addEventListener("mouseleave", () => {
      submenuElement.style.display = "none";
    });
  });

  // Show the services panel for More Services and its subcategories
  const moreServicesLinks = [
    "moving", // Moving
    "installation", // Installation & Assembly
    "pest-control" // Pest Control
  ];

  moreServicesLinks.forEach(linkId => {
    const linkElement = document.getElementById(linkId);
    const submenuElement = document.getElementById(`${linkId}-services`);

    linkElement.addEventListener("mouseenter", () => {
      submenuElement.style.display = "block";
    });

    linkElement.addEventListener("mouseleave", () => {
      submenuElement.style.display = "none";
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const signUpButton = document.getElementById("sign-up-button");
  const signUpForm = document.getElementById("sign-up-form");

  // Toggle visibility of the sign-up form
  signUpButton.addEventListener("click", (event) => {
    // Ensure the event object is passed correctly
    if (signUpForm.style.display === "none" || signUpForm.style.display === "") {
      signUpForm.style.display = "block";  // Show the form
    } else {
      signUpForm.style.display = "none";   // Hide the form
    }
    event.preventDefault(); // If you wrap inside a form or link
    signUpForm.scrollIntoView({ behavior: "smooth" });
  });
});


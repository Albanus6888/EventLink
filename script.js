document.addEventListener("DOMContentLoaded", () => {
  // Theme Toggle
  const toggleButton = document.getElementById("theme-toggle");
  const applyTheme = () => {
    const isDarkMode = localStorage.getItem("theme") === "dark";
    document.body.classList.toggle("dark-mode", isDarkMode);
    toggleButton.textContent = isDarkMode ? "🌞" : "🌙";
  };

  toggleButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    localStorage.setItem("theme", document.body.classList.contains("dark-mode") ? "dark" : "light");
    toggleButton.textContent = document.body.classList.contains("dark-mode") ? "🌞" : "🌙";
  });

  // Initialize theme on page load
  applyTheme();

  // Sign-Up Form Toggle
  const signUpButton = document.getElementById("sign-up-button");
  const signUpForm = document.getElementById("sign-up-form");

  signUpButton.addEventListener("click", (event) => {
    event.preventDefault();
    signUpForm.style.display = signUpForm.style.display === "block" ? "none" : "block";
    if (signUpForm.style.display === "block") {
      signUpForm.scrollIntoView({ behavior: "smooth" });
    }
  });

  // Search Functionality
  const searchButton = document.querySelector(".search-bar button");
  const serviceInput = document.querySelector(".search-bar input[type='text']:nth-child(1)");
  const locationInput = document.querySelector(".search-bar input[type='text']:nth-child(2)");

  searchButton.addEventListener("click", async () => {
    const service = serviceInput.value.trim();
    const location = locationInput.value.trim();

    if (!service || !location) {
      alert("Please fill out both the service and location fields.");
      return;
    }

    try {
      // Placeholder for API call
      // const response = await fetch(`/api/vendors?service=${encodeURIComponent(service)}&location=${encodeURIComponent(location)}`);
      // const vendors = await response.json();
      // displayVendors(vendors); // Implement this function to show results
      alert(`Searching for ${service} in ${location}`);
    } catch (error) {
      console.error("Search error:", error);
      alert("An error occurred while searching. Please try again later.");
    }
  });

  // Submenu Hover Handling for Non-More Categories
  const serviceCategories = [
    { linkId: "home-repairs", submenuId: "home-repairs-services" },
    { linkId: "cleaning", submenuId: "cleaning-services" },
    { linkId: "renovations", submenuId: "renovations-services" },
    { linkId: "exterior-home-care", submenuId: "exterior-home-care-services" },
    { linkId: "landscaping", submenuId: "landscaping-services" },
    { linkId: "moving", submenuId: "moving-services" },
    { linkId: "installation", submenuId: "installation-services" },
    { linkId: "pest-control", submenuId: "pest-control-services" },
  ];

  serviceCategories.forEach(({ linkId, submenuId }) => {
    const linkElement = document.getElementById(linkId);
    const submenuElement = document.getElementById(submenuId);

    if (!linkElement || !submenuElement) {
      console.warn(`Element not found: linkId=${linkId}, submenuId=${submenuId}`);
      return;
    }

    linkElement.addEventListener("mouseenter", () => {
      submenuElement.style.display = "block";
    });

    linkElement.addEventListener("mouseleave", () => {
      submenuElement.style.display = "none";
    });

    submenuElement.addEventListener("mouseenter", () => {
      submenuElement.style.display = "block";
    });

    submenuElement.addEventListener("mouseleave", () => {
      submenuElement.style.display = "none";
    });
  });

  // Dashboard Toggle and Management for "More" Category
  const moreToggle = document.querySelector('.navbar-main .dropdown-toggle[href="#more-services"]');
  const dashboard = document.getElementById('more-dashboard');
  const categoryItems = document.querySelectorAll('.category-item');
  const submenuContents = document.querySelectorAll('.submenu-content');

  if (moreToggle && dashboard) {
    moreToggle.addEventListener('click', (e) => {
      e.preventDefault();
      const isExpanded = moreToggle.getAttribute('aria-expanded') === 'true';
      dashboard.style.display = isExpanded ? 'none' : 'flex';
      moreToggle.setAttribute('aria-expanded', !isExpanded);
      if (!isExpanded) {
        // Default to showing the first category on open
        document.getElementById('home-improvement-content').classList.add('active');
        categoryItems[0].classList.add('active');
      } else {
        submenuContents.forEach(content => content.classList.remove('active'));
        categoryItems.forEach(item => item.classList.remove('active'));
      }
    });

    // Close dashboard when clicking the close button
    document.querySelector('.close-dashboard').addEventListener('click', () => {
      dashboard.style.display = 'none';
      moreToggle.setAttribute('aria-expanded', 'false');
      submenuContents.forEach(content => content.classList.remove('active'));
      categoryItems.forEach(item => item.classList.remove('active'));
    });

    // Close dashboard when clicking outside
    document.addEventListener('click', (e) => {
      if (dashboard.style.display === 'flex' && !moreToggle.contains(e.target) && !dashboard.contains(e.target)) {
        dashboard.style.display = 'none';
        moreToggle.setAttribute('aria-expanded', 'false');
        submenuContents.forEach(content => content.classList.remove('active'));
        categoryItems.forEach(item => item.classList.remove('active'));
      }
    });

    // Handle category selection with click and hover
    categoryItems.forEach(item => {
      item.addEventListener('click', () => {
        const category = item.getAttribute('data-category');
        submenuContents.forEach(content => content.classList.remove('active'));
        categoryItems.forEach(i => i.classList.remove('active'));
        item.classList.add('active');
        document.getElementById(`${category}-content`).classList.add('active');
      });

      item.addEventListener('mouseover', () => {
        const category = item.getAttribute('data-category');
        submenuContents.forEach(content => content.classList.remove('active'));
        document.getElementById(`${category}-content`).classList.add('active');
      });

      item.addEventListener('mouseout', () => {
        // Only remove active if another category isn't clicked
        if (!item.classList.contains('active')) {
          document.getElementById(`${item.getAttribute('data-category')}-content`).classList.remove('active');
        }
      });
    });
  }

  // Toggle for other dropdowns (excluding "More")
  document.querySelectorAll('.navbar-main .dropdown-toggle').forEach(link => {
    if (link.getAttribute('href') !== '#more-services') {
      link.addEventListener('click', (e) => {
        const submenu = link.nextElementSibling;
        if (submenu && submenu.classList.contains('submenu')) {
          e.preventDefault();
          const isExpanded = link.getAttribute('aria-expanded') === 'true';
          submenu.style.display = isExpanded ? 'none' : 'block';
          link.setAttribute('aria-expanded', !isExpanded);
        }
      });
    }
  });
});
// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", function () {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll(".nav_menu a");
    navLinks.forEach(link => {
        link.addEventListener("click", smoothScroll);
    });

    // Collapsible sidebar sections
    const sidebarMenus = document.querySelectorAll(".menu1");
    sidebarMenus.forEach(menu => {
        menu.addEventListener("click", toggleSubMenu);
    });

    // Function to handle smooth scrolling
    function smoothScroll(event) {
        event.preventDefault();
        const targetId = event.currentTarget.getAttribute("href");
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: "smooth" });
        }
    }

    // Function to toggle sidebar submenus
    function toggleSubMenu() {
        const subMenu = this.nextElementSibling;
        
        if (subMenu.classList.contains("show")) {
            subMenu.classList.remove("show");
            this.classList.remove("active");
        } else {
            // Hide all other open submenus
            document.querySelectorAll(".sub_menu.show").forEach(menu => menu.classList.remove("show"));
            document.querySelectorAll(".menu1.active").forEach(menu => menu.classList.remove("active"));
            
            // Show current submenu
            subMenu.classList.add("show");
            this.classList.add("active");
        }
    }

    // Dynamic loading content (dummy example)
    const loadContentButton = document.createElement("button");
    loadContentButton.textContent = "Load More Content";
    loadContentButton.style.marginTop = "20px";
    document.querySelector("#col_left").appendChild(loadContentButton);

    loadContentButton.addEventListener("click", () => {
        const newContent = document.createElement("p");
        newContent.textContent = "This is additional dynamically loaded content to simulate loading more information.";
        document.querySelector("#col_left").appendChild(newContent);
    });
});

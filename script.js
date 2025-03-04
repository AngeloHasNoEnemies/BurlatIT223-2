document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".sidebar-menu li").forEach(item => {
        item.addEventListener("click", function () {
            let submenu = this.querySelector(".submenu");
            if (submenu) {
                submenu.classList.toggle("active");
            }
        });
    });

    document.querySelectorAll(".like-btn").forEach(button => {
        button.addEventListener("click", function () {
            this.classList.toggle("liked");
        });
    });

    document.querySelectorAll(".comment-btn, .like-btn").forEach(button => {
        button.addEventListener("mouseenter", function () {
            this.style.backgroundColor = "#ffcc00";
        });
        button.addEventListener("mouseleave", function () {
            this.style.backgroundColor = "";
        });
    });

    document.querySelector(".notification-icon").addEventListener("click", function () {
        let dropdown = document.querySelector(".notification-dropdown");
        dropdown.classList.toggle("show");
    });

    document.querySelectorAll(".close-ad").forEach(button => {
        button.addEventListener("click", function () {
            this.parentElement.style.display = "none";
        });
    });
});

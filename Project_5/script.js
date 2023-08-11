
    let hamIcon = document.getElementById("hamIcon");
    let closeIcon = document.getElementById("closeIcon");
    let navUl = document.getElementById("navUl");

    hamIcon.addEventListener("click", function() {
        navUl.classList.add("show");
        hamIcon.style.display = "none";
        closeIcon.style.display = "block";
    });

    closeIcon.addEventListener("click", function() {
        navUl.classList.remove("show");
        hamIcon.style.display = "block";
        closeIcon.style.display = "none";
    });
    window.addEventListener("resize", function() {
        if (window.innerWidth > 768) {
            navUl.classList.remove("show");
            hamIcon.style.display = "none";
            closeIcon.style.display = "none";
        } else if (navUl.classList.contains("show")) {
            hamIcon.style.display = "none";
            closeIcon.style.display = "block";
        } else {
            hamIcon.style.display = "block";
            closeIcon.style.display = "none";
        }
    });


    const modal = document.getElementById("recipe-modal");
    const modalTitle = document.getElementById("modal-title");
    const modalDescription = document.getElementById("modal-description");
    const closeModal = document.getElementsByClassName("close")[0];

    function openModal(title, description) {
        modalTitle.textContent = title;
        modalDescription.textContent = description;
        modal.style.display = "block";
    }

    closeModal.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    }

    const recipeButtons = document.querySelectorAll(".card button");
    recipeButtons.forEach(button => {
        button.addEventListener("click", function() {
            const card = this.parentElement;
            const title = card.querySelector("h3").textContent;
            const description = card.querySelector("p").textContent;
            openModal(title, description);
        });
    });

    // Smooth scroll setup
    const scrollLinks = document.querySelectorAll('a[href^="#"]');
    scrollLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            document.querySelector(targetId).scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Button animation
    const startCookingButton = document.querySelector('.button');
    startCookingButton.addEventListener('click', function() {
        this.classList.add('active');
        setTimeout(() => {
            this.classList.remove('active');
        }, 300);
    });

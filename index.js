// Keydown Events
document.addEventListener("keydown", (event) => {
    if (event.key === "h") {
        const header = document.querySelector("header");
        const headerPosition = header.getBoundingClientRect().top;
        document.documentElement.scrollTo({
            top: headerPosition,
            behavior: 'smooth'
        });
    }
    if (event.key === "e") {
        const footer = document.querySelector("footer");
        const footerPosition = footer.getBoundingClientRect().top;
        document.documentElement.scrollTo({
            top: footerPosition,
            behavior: 'smooth'
        });
    }
});

// Mouse enter && Mouse leave Events
document.addEventListener("DOMContentLoaded", () => {
    const catsLink = document.getElementById("catslk");

    catsLink.addEventListener("mouseenter", () => {
        catsLink.textContent = 'MEOW!';
    });

    catsLink.addEventListener("mouseleave", () => {
        catsLink.textContent = 'CATS';
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const catsLink = document.getElementById("dogslk");

    catsLink.addEventListener("mouseenter", () => {
        catsLink.textContent = 'BARK!';
    });

    catsLink.addEventListener("mouseleave", () => {
        catsLink.textContent = 'DOGS';
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const catsLink = document.getElementById("donatelk");

    catsLink.addEventListener("mouseenter", () => {
        catsLink.textContent = '$$$';
    });

    catsLink.addEventListener("mouseleave", () => {
        catsLink.textContent = 'DONATE';
    });
});

// Fetch data from the Dog API
fetch('https://dog.ceo/api/breeds/image/random/5')
    .then(response => response.json())
    .then(data => {
        const petCards = document.querySelectorAll('#dogs .pet-profile img');
        petCards.forEach((img, index) => {
            img.src = data.message[index];
            img.alt = 'Dog';
        });
    })
    .catch(error => console.error('Error fetching dog data:', error));

// Fetch data from The Cat API
fetch('https://api.thecatapi.com/v1/images/search?limit=5')
    .then(response => response.json())
    .then(data => {
        const petCards = document.querySelectorAll('#cats .pet-profile img');
        petCards.forEach((img, index) => {
            img.src = data[index].url;
            img.alt = 'Cat';
        });
    })
    .catch(error => console.error('Error fetching cat data:', error));

// Function to hide the modal
function hideSignupModal() {
    const signupModal = document.getElementById("signup");
    signupModal.style.display = "none";
}

function showSignupModal() {
    const signupModal = document.getElementById("signup");
    signupModal.style.display = "block";
}
const signupBtns = document.querySelectorAll('.btn');

// Shows the modal when a button is clicked Event
signupBtns.forEach(function(btn) {
    btn.addEventListener('click', showSignupModal);
});

// Submits data from to local server
const signupForm = document.getElementById("form");
signupForm.addEventListener("submit", function(event) {
    event.preventDefault();
    const formData = new FormData(signupForm);
    const userData = {};
    formData.forEach((value, key) => {
        userData[key] = value;
    });
    fetch("http://localhost:3000/signup", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userData)
    })
        .then(response => {
            if (response.ok) {
                console.log('User signed up successfully');
                hideSignupModal();
            } else {
                console.error('Failed to sign up user');
            }
        })
        .catch(error => {
            console.error('Error signing up user:', error);
        });
    hideSignupModal();
});

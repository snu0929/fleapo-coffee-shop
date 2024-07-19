// index.js
document.querySelector(".menu-toggle").addEventListener("click", function () {
  document.querySelector(".navbar").classList.toggle("active");
});

document.querySelector(".menu-close").addEventListener("click", function () {
  document.querySelector(".navbar").classList.remove("active");
});

// Smooth Scrolling
document.querySelectorAll(".right-nav p a").forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = e.target.getAttribute("href").substring(1);
    document.getElementById(targetId).scrollIntoView({
      behavior: "smooth",
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const carousel = document.querySelector(".carousel");
  const leftArrow = document.querySelector(".left-arrow");
  const rightArrow = document.querySelector(".right-arrow");
  let offset = 0;
  const itemWidth = document.querySelector(".recommended-item").offsetWidth;

  leftArrow.addEventListener("click", () => {
    if (offset > 0) {
      offset -= itemWidth;
      carousel.style.transform = `translateX(-${offset}px)`;
    }
  });

  rightArrow.addEventListener("click", () => {
    if (offset < carousel.scrollWidth - carousel.clientWidth) {
      offset += itemWidth;
      carousel.style.transform = `translateX(-${offset}px)`;
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const blogList = document.querySelector(".blog-list");
  const items = document.querySelectorAll(".blog-item");
  const totalItems = items.length;
  const visibleItems = 2; // Number of items to show at once
  let currentPosition = 0;

  document.getElementById("arrow-right").addEventListener("click", function () {
    if (currentPosition < totalItems - visibleItems) {
      currentPosition++;
      updateCarousel();
    }
  });

  document.getElementById("arrow-left").addEventListener("click", function () {
    if (currentPosition > 0) {
      currentPosition--;
      updateCarousel();
    }
  });

  function updateCarousel() {
    const itemWidth = items[0].clientWidth;
    const newTransform = -currentPosition * (itemWidth + 20); // Adjust for margin
    blogList.style.transform = `translateX(${newTransform}px)`;
  }
});

document.querySelectorAll(".service-card").forEach((card) => {
  card.addEventListener("click", () => {
    const serviceName = card.querySelector("p").textContent;
    const modalTitle = document.getElementById("modal-title");
    const modalDescription = document.getElementById("modal-description");

    modalTitle.textContent = serviceName;
    modalDescription.textContent = `More information about ${serviceName}."A town centre coffee shop will be brewing up for the last time this summer."
"We took our coffee in a newly opened coffee shop - Cream - in the main street."
"In the coffee shop of a bookstore, my phone signals a message."
"I was sitting with a friend at a pavement table in a coffee-shop.".`; // You can customize this with actual service details

    const modal = document.getElementById("serviceModal");
    modal.style.display = "block";
  });
});

// Close the modal
const closeButton = document.querySelector(".close-button");
closeButton.addEventListener("click", () => {
  const modal = document.getElementById("serviceModal");
  modal.style.display = "none";
});

// Close the modal when clicking outside of it
window.addEventListener("click", (event) => {
  const modal = document.getElementById("serviceModal");
  if (event.target === modal) {
    modal.style.display = "none";
  }
});

const reviews = document.querySelectorAll(".review");
const leftArrow = document.querySelector(".left-arrow");
const rightArrow = document.querySelector(".right-arrow");
let currentIndex = 2; // Start with the third review

function updateReviews() {
  reviews.forEach((review, index) => {
    review.classList.remove("full");
    review.style.display = "none";
    // review.style.opacity = '0.5';
    review.style.height = "auto";
    review.style.backgroundColor = "#58321e";
  });

  const prevIndex = (currentIndex - 1 + reviews.length) % reviews.length;
  const nextIndex = (currentIndex + 1) % reviews.length;

  reviews[prevIndex].style.display = "flex";
  reviews[currentIndex].style.display = "flex";
  reviews[nextIndex].style.display = "flex";

  reviews[prevIndex].classList.remove("full");
  reviews[nextIndex].classList.remove("full");

  reviews[prevIndex].style.transform = "scale(0.8)";
  reviews[prevIndex].style.backgroundColor = "#52463f";
  reviews[prevIndex].style.width = "100%";

  reviews[nextIndex].style.transform = "scale(0.8)";
  reviews[nextIndex].style.backgroundColor = "#52463f";
  reviews[nextIndex].style.width = "100%";

  reviews[currentIndex].classList.add("full");
  reviews[currentIndex].style.transform = "scale(1)";
  reviews[currentIndex].style.backgroundColor = "#59321e";
  reviews[currentIndex].style.color = "white";
  reviews[currentIndex].style.width = "250px";
  reviews[currentIndex].style.padding = "10px";

  const invisibleLeft = (currentIndex - 2 + reviews.length) % reviews.length;
  const invisibleRight = (currentIndex + 2) % reviews.length;

  reviews[invisibleLeft].style.display = "none";
  reviews[invisibleRight].style.display = "none";

  // Smooth transition
  reviews.forEach((review) => {
    review.style.transition = "all 0.5s ease-in-out";
  });
}

leftArrow.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + reviews.length) % reviews.length;
  updateReviews();
});

rightArrow.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % reviews.length;
  updateReviews();
});

updateReviews();

// -----------------------reserve section-------------------

document.getElementById("reserve-btn").addEventListener("click", (e) => {
  e.preventDefault();

  const date = document.getElementById("date").value;
  const time = document.getElementById("time").value;
  const guest = document.getElementById("guest").value;
  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;
  const email = document.getElementById("email").value;

  if (date && time && guest && name && phone && email) {
    document.getElementById(
      "popup-details"
    ).innerText = `Date: ${date}\nTime: ${time}\nGuest: ${guest}\nName: ${name}\nPhone: ${phone}\nEmail: ${email}`;
    document.getElementById("popup").style.display = "block";
  } else {
    alert("Please fill in all fields");
  }
});

document.querySelector(".close").addEventListener("click", () => {
  document.getElementById("popup").style.display = "none";
});

document.getElementById("confirm-btn").addEventListener("click", () => {
  alert("Reservation Confirmed!");
  document.getElementById("popup").style.display = "none";
});

// Set the placeholder color dynamically
const inputs = document.querySelectorAll(
  '.reverse-table .form-container input[type="text"], .reverse-table .form-container input[type="date"], .reverse-table .form-container input[type="time"], .reverse-table .form-container input[type="email"]'
);
inputs.forEach((input) => {
  input.style.setProperty("::placeholder", "color", "rgb(168, 71, 71)");
});

document.addEventListener("scroll", function () {
  const scrolled = window.scrollY;
  const blogSection = document.querySelector(".our-blog");
  blogSection.style.backgroundPositionY = -(scrolled * 0.5) + "px";
});

document.getElementById("shop-now-btn").addEventListener("click", function () {
  alert("Redirecting to the shop page...");
  // You can add additional code here to actually redirect the user or perform other actions.
});

// Smooth Scroll for anchor links
document.querySelectorAll('.footer a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Back to Top button functionality
const backToTopButton = document.getElementById("back-to-top");

window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    backToTopButton.style.display = "block";
  } else {
    backToTopButton.style.display = "none";
  }
});

backToTopButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// Function to check if element is in view
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Add class when in view
function checkScroll() {
  const cup = document.querySelector(".cup");
  if (isInViewport(cup)) {
    cup.classList.add("animate");
  }
}

window.addEventListener("scroll", checkScroll);
window.addEventListener("load", checkScroll);

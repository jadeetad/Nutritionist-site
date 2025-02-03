document.addEventListener("DOMContentLoaded", () => {
    const boxes = document.querySelectorAll(".rec1, .rec2, .rec3, .rec4");
  
    // Observer options
    const observerOptions = {
      threshold: 0.5, // Trigger when 50% of the element is visible
    };
  
    // Observer callback
    const observerCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active"); // Add 'active' class when visible
          observer.unobserve(entry.target); // Stop observing the element after activation
        }
      });
    };
  
    // Create the observer
    const observer = new IntersectionObserver(observerCallback, observerOptions);
  
    // Attach the observer to each box
    boxes.forEach((box) => observer.observe(box));
  });

  


  const testimonials = document.querySelectorAll('.testimonial');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
let currentIndex = 0;

// Function to update the active testimonial
function updateTestimonial(index) {
  testimonials.forEach((testimonial, i) => {
    testimonial.classList.toggle('active', i === index);
  });
}

// Event listeners for buttons
prevButton.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
  updateTestimonial(currentIndex);
});

nextButton.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % testimonials.length;
  updateTestimonial(currentIndex);
});

// Initialize the first testimonial as active
updateTestimonial(currentIndex);

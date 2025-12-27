// Simple counting animation
const animateCounters = () => {
  const counters = document.querySelectorAll('.counter');
  
  counters.forEach(counter => {
    const target = parseInt(counter.getAttribute('data-target') || "0");
    const suffix = counter.getAttribute('data-suffix') || "";
    const duration = 2000; // 2 seconds
    const stepTime = 20; // update every 20ms
    const steps = duration / stepTime;
    const increment = target / steps;
    let current = 0;
    
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      counter.textContent = Math.floor(current) + suffix;
    }, stepTime);
  });
};

// Initialize animations
const initAnimations = () => {
  // Trigger counting when the hero section is visible
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Wait for the fade-in animation of the container (1s delay + 0.8s duration approx)
        setTimeout(animateCounters, 1200);
        observer.disconnect();
      }
    });
  }, { threshold: 0.5 });

  const heroSection = document.querySelector('.animate-float');
  if (heroSection) {
    observer.observe(heroSection);
  }

  // Generic animation observer
  const animationObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const animationClass = entry.target.getAttribute('data-animate');
        if (animationClass) {
          // Map data attributes to class names
          if (animationClass === 'slide-in-left') {
            entry.target.classList.add('animate-slide-in-left');
          } else if (animationClass === 'slide-in-right') {
            entry.target.classList.add('animate-slide-in-right');
          } else if (animationClass === 'slide-in-down') {
            entry.target.classList.add('animate-slide-in-down');
          } else if (animationClass === 'fade-in-up') {
            entry.target.classList.add('animate-fade-in-up');
          } else if (animationClass === 'scale-in') {
            entry.target.classList.add('animate-scale-in');
          } else if (animationClass === 'slide-in-up') {
            entry.target.classList.add('animate-slide-in-up');
          } else if (animationClass === 'fade-in') {
            entry.target.classList.add('animate-fade-in');
          }
          entry.target.classList.remove('opacity-0');
          animationObserver.unobserve(entry.target);
        }
      }
    });
  }, { threshold: 0.2, rootMargin: '0px 0px -50px 0px' });

  document.querySelectorAll('[data-animate]').forEach(el => {
    animationObserver.observe(el);
  });
};

// Run on initial load
document.addEventListener('DOMContentLoaded', initAnimations);

// Run on view transitions if enabled (optional, good practice for Astro)
document.addEventListener('astro:page-load', initAnimations);


document.addEventListener('DOMContentLoaded', function() {
  'use strict';


  const navbar = document.querySelector('.navbar');
  const navLinks = document.querySelectorAll('.nav-link');
  const backToTop = document.querySelector('.back-to-top');
  const sections = document.querySelectorAll('.section');
  const animatedElements = document.querySelectorAll(
    '.animate-text, .animate-text-delay, .animate-fade-in, .animate-slide-left, .animate-slide-right, .animate-scale'
  );
  const contactBtn = document.querySelector('.contact-btn');
  const contactForm = document.querySelector('.contact-form');
  
 
  setTimeout(() => {
    document.body.classList.add('loaded');
  }, 300);

  function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.8 &&
      rect.bottom >= 0
    );
  }
  
  function handleScroll() {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
      backToTop.classList.add('active');
    } else {
      navbar.classList.remove('scrolled');
      backToTop.classList.remove('active');
    }
    
    let current = '';
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 100;
      const sectionHeight = section.clientHeight;
      
      if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
        current = section.getAttribute('id');
      }
    });
    
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
    animatedElements.forEach(element => {
      if (isInViewport(element) && !element.classList.contains('animated')) {
        element.classList.add('animated');
        element.style.animationPlayState = 'running';
      }
    });
  }
  
  window.addEventListener('scroll', handleScroll);

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 70,
          behavior: 'smooth'
        });
      }
    });
  });
  
  if (contactBtn) {
    contactBtn.addEventListener('click', function() {
      const contactSection = document.querySelector('#contact');
      if (contactSection) {
        window.scrollTo({
          top: contactSection.offsetTop - 70,
          behavior: 'smooth'
        });
      }
    });
  }
  
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const name = this.querySelector('#name').value;
      const email = this.querySelector('#email').value;
      const message = this.querySelector('#message').value;
      
      if (!name || !email || !message) {
        alert('Please fill in all fields');
        return;
      }
      
      
      this.reset();
      
      const formContainer = this.parentElement;
      const successMessage = document.createElement('div');
      successMessage.className = 'alert-success';
      successMessage.textContent = 'Your message has been sent successfully!';
      successMessage.style.padding = '15px';
      successMessage.style.marginTop = '20px';
      successMessage.style.backgroundColor = '#d4edda';
      successMessage.style.color = '#155724';
      successMessage.style.borderRadius = '5px';
      successMessage.style.textAlign = 'center';
      formContainer.appendChild(successMessage);
     
      setTimeout(() => {
        successMessage.remove();
      }, 5000);
    });
  }
  
  const projectCards = document.querySelectorAll('.project-card');
  projectCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-10px)';
    });
    
    card.addEventListener('mouseleave', function() {
      this.style.transform = '';
    });
  });
  
  const skillCards = document.querySelectorAll('.skill-card');
  skillCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-10px)';
    });
    
    card.addEventListener('mouseleave', function() {
      this.style.transform = '';
    });
  });
  
  function setupTypingAnimation() {
    const heading = document.querySelector('.profile-content h1');
    if (heading) {
      const text = heading.textContent;
      heading.innerHTML = '';
      heading.style.borderRight = '0.15em solid var(--primary-color)';
      heading.style.overflow = 'hidden';
      heading.style.whiteSpace = 'nowrap';
      heading.style.margin = '0 auto';
      heading.style.animation = 'typing 3.5s steps(40, end), blink 0.75s step-end infinite';
      
      let i = 0;
      const typeWriter = () => {
        if (i < text.length) {
          heading.textContent += text.charAt(i);
          i++;
          setTimeout(typeWriter, 100);
        }
      };
      
      setTimeout(typeWriter, 1000);
    }
  }
  
  function parallaxEffect() {
    document.addEventListener('mousemove', function(e) {
      const moveX = (e.clientX - window.innerWidth / 2) / 25;
      const moveY = (e.clientY - window.innerHeight / 2) / 25;
      
      const backProfileImage = document.querySelector('.back-profile-image');
      if (backProfileImage) {
        backProfileImage.style.transform = `translate(${moveX}px, ${moveY}px)`;
      }
    });
  }
  function initAnimations() {
 
    setTimeout(() => {

      animatedElements.forEach(element => {
        if (isInViewport(element)) {
          element.classList.add('animated');
          element.style.animationPlayState = 'running';
        }
      });
      
     
    }, 500);
  }
 
  handleScroll();
  initAnimations();
  
  window.addEventListener('resize', function() {
    handleScroll();
  });
  
  window.addEventListener('load', function() {
    document.body.classList.add('page-loaded');
  });
  
  function preloadImages() {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
      const src = img.getAttribute('src');
      if (src) {
        const newImg = new Image();
        newImg.src = src;
      }
    });
  }
  
  preloadImages();
});

document.addEventListener('DOMContentLoaded', function() {
  const skillCards = document.querySelectorAll('.skill-card');
  skillCards.forEach((card, index) => {
    card.style.animationDelay = `${0.1 * index}s`;
  });
  
  const projectCards = document.querySelectorAll('.project-card');
  projectCards.forEach((card, index) => {
    card.style.animationDelay = `${0.2 * index}s`;
  });
  
  const aboutImage = document.querySelector('.about-image img');
  if (aboutImage) {
    aboutImage.addEventListener('mouseenter', function() {
      this.style.animation = 'wave 2.5s ease-in-out';
    });
    
    aboutImage.addEventListener('animationend', function() {
      this.style.animation = 'bounce 3s ease-in-out infinite';
    });
  }
  function revealOnScroll() {
    const elements = document.querySelectorAll('.section');
    
    elements.forEach(element => {
      const elementTop = element.getBoundingClientRect().top;
      const elementVisible = 150;
      
      if (elementTop < window.innerHeight - elementVisible) {
        element.classList.add('active');
      }
    });
  }
  
  window.addEventListener('scroll', revealOnScroll);
  revealOnScroll();
});

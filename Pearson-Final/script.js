document.addEventListener('DOMContentLoaded', () => {
    gsap.registerPlugin(ScrollTrigger);
    
    gsap.utils.toArray('section').forEach((section, i) => {
      const direction = i % 2 === 0 ? 50 : -50;
      
      gsap.set(section, { opacity: 0, y: direction });
      
      ScrollTrigger.create({
        trigger: section,
        start: "top 80%",
        onEnter: () => {
          gsap.to(section, {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "back.out(1.2)",
            overwrite: "auto"
          });
        },
        once: true
      });
    });

    const fastElements = gsap.utils.toArray('.momo, .card, .course-card, .feature, .guide-img');
    
    fastElements.forEach((el, i) => {
      const directionX = i % 2 === 0 ? 30 : -30;
      const rotation = i % 3 === 0 ? 5 : i % 3 === 1 ? -5 : 0;
      
      gsap.set(el, { 
        opacity: 0,
        x: directionX,
        rotation: 180
      });
      
      ScrollTrigger.create({
        trigger: el,
        start: "top 90%",
        onEnter: () => {
          gsap.to(el, {
            opacity: 1,
            x: 0,
            rotation: 0,
            duration: 0.5,
            ease: "power2.out",
            overwrite: "auto"
          });
        },
        once: true
      });
    });

    gsap.from('.hero-text h2', {
      duration: 0.8,
      y: 50,
      opacity: 0,
      ease: "back.out(1.2)"
    });
    
    gsap.from('.hero-text p', {
      duration: 0.6,
      y: 30,
      opacity: 0,
      delay: 0.2,
      ease: "power2.out"
    });
    
    gsap.from('.hero-buttons', {
      duration: 0.5,
      y: 20,
      opacity: 0,
      delay: 0.5,
      ease: "power2.out"
    });
    
    gsap.from('.hero-image', {
      duration: 0.8,
      x: 100,
      opacity: 0,
      ease: "back.out(1.5)"
    });

    ScrollTrigger.create({
      trigger: "body",
      start: "30px top",
      end: "max",
      onToggle: ({ isActive }) => {
        gsap.to('.navbar', {
          backgroundColor: isActive ? 'rgba(255,255,255,0.9)' : 'var(--white)',
          backdropFilter: isActive ? 'blur(10px)' : 'none',
          boxShadow: isActive ? '0 2px 20px rgba(0,0,0,0.1)' : '0 2px 10px rgba(0,0,0,0.1)',
          duration: 0.5
        });
      }
    });
  });


   function toggleMenu() {
      document.getElementById("navLinks").classList.toggle("show");
    }

    // GSAP Animations
    document.addEventListener('DOMContentLoaded', () => {
      gsap.registerPlugin(ScrollTrigger);
      
      // Hero animation
      gsap.from('.nail-hero h1', {
        duration: 0.8,
        y: 50,
        opacity: 1,
        ease: "back.out(1.2)"
      });
      
      gsap.from('.nail-hero .subtitle', {
        duration: 0.6,
        y: 30,
        opacity: 1,
        delay: 0.2,
        ease: "power2.out"
      });
      
      gsap.from('.hero-buttons', {
        duration: 0.5,
        y: 20,
        opacity: 1,
        delay: 0.4,
        ease: "power2.out"
      });
      
      gsap.from('.bottle', {
        duration: 0.8,
        rotation: -10,
        x: 50,
        opacity: 1,
        delay: 0.3,
        ease: "back.out(1.2)"
      });
      
      gsap.from('.brush', {
        duration: 0.8,
        rotation: 10,
        x: -50,
        opacity: 1,
        delay: 0.6,
        ease: "back.out(1.2)"
      });
      
      // Anatomy guide animation
      gsap.from('.anatomy-guide', {
        scrollTrigger: {
          trigger: '.nail-anatomy',
          start: "top 70%",
          toggleActions: "play none none none"
        },
        duration: 0.8,
        y: 50,
        opacity: 1,
        ease: "power2.out"
      });
      
      // Routine steps animation
      gsap.from('.step', {
        scrollTrigger: {
          trigger: '.nail-routine',
          start: "top 70%",
          toggleActions: "play none none none"
        },
        duration: 0.6,
        y: 50,
        opacity: 1,
        stagger: 0.15,
        ease: "back.out(1.2)"
      });
      
      // Health cards animation
      gsap.from('.health-card', {
        scrollTrigger: {
          trigger: '.nail-health',
          start: "top 70%",
          toggleActions: "play none none none"
        },
        duration: 0.6,
        scale: 0.9,
        opacity: 1,
        stagger: 0.1,
        ease: "back.out(1.7)"
      });
      
      // Manicure guide animation
      gsap.from('.manicure-video', {
        scrollTrigger: {
          trigger: '.manicure-guide',
          start: "top 70%",
          toggleActions: "play none none none"
        },
        duration: 0.8,
        y: 50,
        opacity: 1,
        ease: "power2.out"
      });
      
      // Gallery animation
      gsap.from('.gallery-item', {
        scrollTrigger: {
          trigger: '.nail-art',
          start: "top 70%",
          toggleActions: "play none none none"
        },
        duration: 0.6,
        y: 50,
        opacity: 1,
        stagger: 0.1,
        ease: "power2.out"
      });
      
      // Product carousel animation
      gsap.from('.product-card', {
        scrollTrigger: {
          trigger: '.nail-products',
          start: "top 70%",
          toggleActions: "play none none none"
        },
        duration: 0.5,
        rotation: 5,
        opacity: 1,
        stagger: 0.1,
        ease: "back.out(1.7)"
      });
      
      // Hotspot interaction
      const hotspots = document.querySelectorAll('.hotspot');
      const partInfos = document.querySelectorAll('.part-info');
      
      hotspots.forEach(hotspot => {
        hotspot.addEventListener('click', () => {
          const part = hotspot.getAttribute('data-part');
          
          // Hide all info
          partInfos.forEach(info => info.classList.remove('active'));
          
          // Show selected info
          document.getElementById(`${part}-info`).classList.add('active');
          
          // Animation
          gsap.from(`#${part}-info`, {
            duration: 0.5,
            y: 20,
            opacity: 1,
            ease: "power2.out"
          });
        });
      });
    });


    function toggleMenu() {
      document.getElementById("navLinks").classList.toggle("show");
    }

    // GSAP Animations
    document.addEventListener('DOMContentLoaded', () => {
      gsap.registerPlugin(ScrollTrigger);
      
      // Hero animation
      gsap.from('.hygiene-hero h1', {
        duration: 0.8,
        y: 50,
        opacity: 1,
        ease: "back.out(1.2)"
      });
      
      gsap.from('.hygiene-hero .subtitle', {
        duration: 0.6,
        y: 30,
        opacity: 1,
        delay: 0.2,
        ease: "power2.out"
      });
      
      gsap.from('.hero-buttons', {
        duration: 0.5,
        y: 20,
        opacity: 1,
        delay: 0.4,
        ease: "power2.out"
      });
      
      gsap.from('.main-image', {
        duration: 0.8,
        x: 100,
        opacity: 1,
        ease: "back.out(1.2)"
      });
      
      // Timeline animation
      gsap.from('.timeline-item', {
        scrollTrigger: {
          trigger: '.daily-routine',
          start: "top 70%",
          toggleActions: "play none none none"
        },
        duration: 0.8,
        y: 50,
        opacity: 1,
        stagger: 0.2,
        ease: "power2.out"
      });
      
      // Science cards animation
      gsap.from('.science-card', {
        scrollTrigger: {
          trigger: '.hygiene-science',
          start: "top 70%",
          toggleActions: "play none none none"
        },
        duration: 0.6,
        scale: 0.9,
        opacity: 1,
        stagger: 0.1,
        ease: "back.out(1.7)"
      });
      
      // Product tabs animation
      gsap.from('.product-tabs', {
        scrollTrigger: {
          trigger: '.product-guide',
          start: "top 70%",
          toggleActions: "play none none none"
        },
        duration: 0.8,
        y: 50,
        opacity: 1,
        ease: "power2.out"
      });
      
      // Accordion animation
      gsap.from('.accordion-item', {
        scrollTrigger: {
          trigger: '.hygiene-mistakes',
          start: "top 70%",
          toggleActions: "play none none none"
        },
        duration: 0.6,
        y: 30,
        opacity: 1,
        stagger: 0.1,
        ease: "power2.out"
      });
      
      // Situation cards animation
      gsap.from('.situation-card', {
        scrollTrigger: {
          trigger: '.special-situations',
          start: "top 70%",
          toggleActions: "play none none none"
        },
        duration: 0.6,
        y: 50,
        opacity: 1,
        stagger: 0.15,
        ease: "back.out(1.2)"
      });
      
      // Mental health section animation
      gsap.from('.health-text, .health-image', {
        scrollTrigger: {
          trigger: '.mental-health',
          start: "top 70%",
          toggleActions: "play none none none"
        },
        duration: 0.8,
        y: 50,
        opacity: 1,
        ease: "power2.out"
      });
      
      // Tab switching functionality
      const tabBtns = document.querySelectorAll('.tab-btn');
      const tabContents = document.querySelectorAll('.tab-content');
      
      tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
          // Remove active class from all buttons and contents
          tabBtns.forEach(btn => btn.classList.remove('active'));
          tabContents.forEach(content => content.classList.remove('active'));
          
          // Add active class to clicked button and corresponding content
          btn.classList.add('active');
          const tabId = btn.getAttribute('data-tab');
          document.getElementById(tabId).classList.add('active');
          
          // Animation for tab content
          gsap.from(`#${tabId}`, {
            duration: 0.5,
            y: 30,
            opacity: 1,
            ease: "power2.out"
          });
        });
      });
      
      // Accordion functionality
      const accordionBtns = document.querySelectorAll('.accordion-btn');
      
      accordionBtns.forEach(btn => {
        btn.addEventListener('click', () => {
          const content = btn.nextElementSibling;
          const isOpen = content.style.maxHeight;
          
          // Close all other accordion items
          document.querySelectorAll('.accordion-content').forEach(item => {
            if (item !== content) {
              item.style.maxHeight = null;
              item.previousElementSibling.classList.remove('active');
            }
          });
          
          // Toggle current item
          if (isOpen) {
            content.style.maxHeight = null;
            btn.classList.remove('active');
          } else {
            content.style.maxHeight = content.scrollHeight + "px";
            btn.classList.add('active');
          }
        });
      });
    });



    function toggleMenu() {
      document.getElementById("navLinks").classList.toggle("show");
    }

    // GSAP Animations for About Page
    document.addEventListener('DOMContentLoaded', () => {
      gsap.registerPlugin(ScrollTrigger);
      
      // Hero section animations
      gsap.from('.about-hero h1', {
        duration: 0.8,
        y: 50,
        opacity: 0,
        ease: "back.out(1.2)"
      });
      
      gsap.from('.about-hero .subtitle', {
        duration: 0.6,
        y: 30,
        opacity: 0,
        delay: 0.2,
        ease: "power2.out"
      });
      
      gsap.from('.about-hero-image', {
        duration: 0.8,
        x: 100,
        opacity: 0,
        delay: 0.4,
        ease: "back.out(1.2)"
      });
      
      gsap.from('.stat-item', {
        duration: 0.5,
        y: 30,
        opacity: 0,
        stagger: 0.15,
        delay: 0.6,
        ease: "power2.out"
      });

      // Counter animation for stats
      const statNumbers = document.querySelectorAll('.stat-number');
      statNumbers.forEach(number => {
        const target = parseInt(number.getAttribute('data-count'));
        const duration = 2;
        const increment = target / (duration * 60);
        
        let current = 0;
        const timer = setInterval(() => {
          current += increment;
          if (current >= target) {
            clearInterval(timer);
            current = target;
          }
          number.textContent = Math.floor(current).toLocaleString();
        }, 1000/60);
      });

      // Timeline animations
      gsap.from('.timeline-item', {
        scrollTrigger: {
          trigger: '.timeline',
          start: "top 70%",
          toggleActions: "play none none none"
        },
        duration: 0.8,
        x: -50,
        opacity: 1,
        stagger: 0.2,
        ease: "power2.out"
      });

      // Team member animations
      gsap.from('.team-member', {
        scrollTrigger: {
          trigger: '.team-section',
          start: "top 70%",
          toggleActions: "play none none none"
        },
        duration: 0.6,
        y: 50,
        opacity: 1,
        stagger: 0.15,
        ease: "back.out(1.2)"
      });

      // Values cards animation
      gsap.from('.value-card', {
        scrollTrigger: {
          trigger: '.values-section',
          start: "top 70%",
          toggleActions: "play none none none"
        },
        duration: 0.5,
        scale: 0.9,
        opacity: 1,
        stagger: 0.1,
        ease: "back.out(1.7)"
      });

      // Testimonials animation
      gsap.from('.testimonial', {
        scrollTrigger: {
          trigger: '.testimonials-section',
          start: "top 70%",
          toggleActions: "play none none none"
        },
        duration: 0.6,
        y: 50,
        opacity: 1,
        stagger: 0.15,
        ease: "power2.out"
      });

      // CTA animation
      gsap.from('.about-cta', {
        scrollTrigger: {
          trigger: '.about-cta',
          start: "top 80%",
          toggleActions: "play none none none"
        },
        duration: 0.8,
        y: 50,
        opacity: 1,
        ease: "back.out(1.2)"
      });
    });
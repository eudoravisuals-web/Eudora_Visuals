document.addEventListener('DOMContentLoaded', () => {
    
    // Navbar Scroll Effect
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Mobile Menu Toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const links = document.querySelectorAll('.nav-links li a');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburger.innerHTML = navLinks.classList.contains('active') 
            ? '<i class="fas fa-times"></i>' 
            : '<i class="fas fa-bars"></i>';
    });

    links.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            hamburger.innerHTML = '<i class="fas fa-bars"></i>';
        });
    });

    // Active Link Highlighting on Scroll
    const sections = document.querySelectorAll('section');
    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= (sectionTop - sectionHeight / 3)) {
                current = section.getAttribute('id');
            }
        });

        links.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    });

    // Slider Logic for Hero & Gallery Banners
    function createSlider(containerId, dotsId, data) {
        const sliderContainer = document.getElementById(containerId);
        const dotsContainer = document.getElementById(dotsId);
        if (!sliderContainer || !dotsContainer || !data || data.length === 0) return;

        let currentSlide = 0;
        let slideInterval;

        data.forEach((slide, index) => {
            // Create Slide Element
            const slideEl = document.createElement('div');
            slideEl.classList.add('hero-slide', `${containerId}-slide`);
            if (index === 0) slideEl.classList.add('active');
            
            let heroBtns = '';
            if (containerId === 'hero-slider') {
                heroBtns = `
                    <div class="hero-btns">
                        <a href="gallery.html" class="btn btn-primary">View My Work</a>
                        <a href="#contact" class="btn btn-outline">Contact Me</a>
                    </div>
                `;
            } else if (containerId === 'gallery-slider') {
                heroBtns = `
                    <div class="hero-btns">
                        <a href="#gallery" class="btn btn-primary">Explore Gallery</a>
                        <a href="index.html#contact" class="btn btn-outline">Get In Touch</a>
                    </div>
                `;
            } else if (containerId === 'about-slider') {
                heroBtns = `
                    <div class="hero-btns">
                        <a href="services.html" class="btn btn-primary">Our Services</a>
                        <a href="contact.html" class="btn btn-outline">Contact Us</a>
                    </div>
                `;
            }

            slideEl.innerHTML = `
                <div class="hero-bg">
                    <img src="${slide.image}" alt="Slider Image ${index + 1}">
                    <div class="overlay"></div>
                </div>
                <div class="hero-content">
                    <h2 class="subtitle">${slide.subtitle}</h2>
                    <h1 class="title">${slide.title}</h1>
                    <p>${slide.description}</p>
                    ${heroBtns}
                </div>
            `;
            sliderContainer.appendChild(slideEl);

            // Create Dot Element
            const dot = document.createElement('div');
            dot.classList.add('dot', `${containerId}-dot`);
            if (index === 0) dot.classList.add('active');
            dot.dataset.index = index;
            dot.addEventListener('click', () => goToSlide(index));
            dotsContainer.appendChild(dot);
        });

        function goToSlide(index) {
            const slides = sliderContainer.querySelectorAll(`.${containerId}-slide`);
            const dots = dotsContainer.querySelectorAll(`.${containerId}-dot`);
            
            slides[currentSlide].classList.remove('active');
            dots[currentSlide].classList.remove('active');
            
            currentSlide = index;
            
            if (currentSlide >= slides.length) currentSlide = 0;
            if (currentSlide < 0) currentSlide = slides.length - 1;
            
            slides[currentSlide].classList.add('active');
            dots[currentSlide].classList.add('active');
            
            resetSlideTimer();
        }

        function nextSlide() { goToSlide(currentSlide + 1); }
        function prevSlide() { goToSlide(currentSlide - 1); }
        function startSlideTimer() { slideInterval = setInterval(nextSlide, 5000); }
        function resetSlideTimer() { clearInterval(slideInterval); startSlideTimer(); }

        startSlideTimer();
        
        // Attach arrow events
        const section = sliderContainer.closest('section');
        if (section) {
            const nextArrow = section.querySelector('.next-arrow');
            const prevArrow = section.querySelector('.prev-arrow');
            if (nextArrow) nextArrow.addEventListener('click', nextSlide);
            if (prevArrow) prevArrow.addEventListener('click', prevSlide);
        }
    }

    if (typeof heroSliderData !== 'undefined') {
        createSlider('hero-slider', 'slider-dots', heroSliderData);
    }
    if (typeof galleryBannerData !== 'undefined') {
        createSlider('gallery-slider', 'gallery-slider-dots', galleryBannerData);
    }
    if (typeof aboutSliderData !== 'undefined') {
        createSlider('about-slider', 'about-slider-dots', aboutSliderData);
    }

    // Load Gallery Data
    const galleryContainer = document.getElementById('gallery-container');
    
    function renderGallery(filter = 'all') {
        galleryContainer.innerHTML = '';
        
        const filteredData = filter === 'all' 
            ? galleryData 
            : galleryData.filter(item => item.category === filter);

        filteredData.forEach(item => {
            const galleryItem = document.createElement('a');
            let detailPage = 'project-detail.html';
            if (item.category === 'video') detailPage = 'video-detail.html';
            else if (item.category === 'flyer') detailPage = 'flyer-detail.html';
            else if (item.category === 'visiting-card') detailPage = 'visiting-cards-detail.html';
            galleryItem.href = `${detailPage}?id=${item.id}`;
            galleryItem.classList.add('gallery-item');
            galleryItem.innerHTML = `
                <div class="gallery-img-container">
                    <img src="${item.image}" alt="${item.title}">
                    <div class="gallery-hover-overlay">
                        <i class="fas fa-plus"></i>
                    </div>
                </div>
                <div class="gallery-caption">
                    <h3>${item.title}</h3>
                    <p>${item.category}</p>
                </div>
            `;
            galleryContainer.appendChild(galleryItem);
        });
    }

    if (galleryContainer) {
        renderGallery();
    }

    // Load Gallery Teaser (Shortcut)
    const teaserContainer = document.getElementById('gallery-teaser-container');
    if (teaserContainer && typeof galleryData !== 'undefined') {
        const teaserData = galleryData.slice(0, 4);
        teaserData.forEach(item => {
            const teaserItem = document.createElement('a');
            let detailPage = 'project-detail.html';
            if (item.category === 'video') detailPage = 'video-detail.html';
            else if (item.category === 'flyer') detailPage = 'flyer-detail.html';
            else if (item.category === 'visiting-card') detailPage = 'visiting-cards-detail.html';
            teaserItem.href = `${detailPage}?id=${item.id}`;
            teaserItem.classList.add('gallery-item');
            teaserItem.innerHTML = `
                <div class="gallery-img-container">
                    <img src="${item.image}" alt="${item.title}">
                    <div class="gallery-hover-overlay">
                        <i class="fas fa-plus"></i>
                    </div>
                </div>
                <div class="gallery-caption">
                    <h3>${item.title}</h3>
                    <p>${item.category}</p>
                </div>
            `;
            teaserContainer.appendChild(teaserItem);
        });
    }

    // Load Services Data
    const servicesContainer = document.getElementById('services-container');

    function renderServices() {
        if (typeof servicesData !== 'undefined') {
            servicesData.forEach(service => {
                const card = document.createElement('div');
                card.classList.add('service-card', 'glass-card');
                
                let itemsHtml = '';
                service.items.forEach(item => {
                    itemsHtml += `<li><i class="fas fa-check-circle"></i> ${item}</li>`;
                });

                const subtitleHtml = service.subtitle ? `<p class="service-subtitle">${service.subtitle}</p>` : '';

                card.innerHTML = `
                    <div class="card-bg-icon">
                        <i class="fas ${service.icon || 'fa-star'}"></i>
                    </div>
                    <div class="card-accent"></div>
                    <div class="card-header">
                        <div class="card-icon">
                            <i class="fas ${service.icon || 'fa-star'}"></i>
                        </div>
                        <h3>${service.title}</h3>
                    </div>
                    ${subtitleHtml}
                    <ul>
                        ${itemsHtml}
                    </ul>
                `;
                servicesContainer.appendChild(card);
            });
        }
    }

    if (servicesContainer) {
        renderServices();
    }

    // Gallery Filtering
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons
            filterBtns.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            btn.classList.add('active');
            
            const filter = btn.getAttribute('data-filter');
            renderGallery(filter);
        });
    });

    // Scroll Animations using Intersection Observer
    const animateElements = document.querySelectorAll('.glass-card, .section-title, .gallery-item, .service-card, .about-image-wrapper, .about-text-content');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.8s ease-out';
        observer.observe(el);
    });

    // 3D Showcase Slider Logic
    function initShowcaseSlider() {
        const sliderContainer = document.getElementById('showcase-slider');
        const dotsContainer = document.getElementById('showcase-dots');
        
        if (!sliderContainer || !dotsContainer || typeof showcaseSliderData === 'undefined' || showcaseSliderData.length === 0) return;
        
        let currentIndex = 0;
        let autoPlayInterval;
        const totalSlides = showcaseSliderData.length;
        
        // Inject Cards
        showcaseSliderData.forEach((item, index) => {
            const card = document.createElement('a');
            card.href = item.link;
            card.classList.add('showcase-card');
            card.dataset.index = index;
            
            card.innerHTML = `
                <div class="showcase-card-inner">
                    <img src="${item.image}" alt="${item.title}" class="showcase-img">
                </div>
            `;
            
            // Click to transition or navigate
            card.addEventListener('click', (e) => {
                const cardIndex = parseInt(card.dataset.index);
                if (cardIndex !== currentIndex) {
                    e.preventDefault(); // Stop navigation if not active
                    goToSlide(cardIndex); // Transition to card
                }
            });
            
            sliderContainer.appendChild(card);
            
            // Create Dot
            const dot = document.createElement('div');
            dot.classList.add('showcase-dot');
            if (index === 0) dot.classList.add('active');
            dot.dataset.index = index;
            dot.addEventListener('click', () => goToSlide(index));
            dotsContainer.appendChild(dot);
        });
        
        const cards = sliderContainer.querySelectorAll('.showcase-card');
        const dots = dotsContainer.querySelectorAll('.showcase-dot');
        
        function goToSlide(index) {
            currentIndex = index;
            if (currentIndex >= totalSlides) currentIndex = 0;
            if (currentIndex < 0) currentIndex = totalSlides - 1;
            
            updateSliderClasses();
            resetTimer();
        }
        
        function updateSliderClasses() {
            cards.forEach((card, index) => {
                card.className = 'showcase-card'; // Reset
                
                let diff = index - currentIndex;
                
                // Circular wrapping diff calculation
                if (diff < -Math.floor(totalSlides / 2)) {
                    diff += totalSlides;
                } else if (diff > Math.floor(totalSlides / 2)) {
                    diff -= totalSlides;
                }
                
                if (diff === 0) {
                    card.classList.add('active');
                } else if (diff === 1 || (currentIndex === totalSlides - 1 && index === 0)) {
                    card.classList.add('next');
                } else if (diff === -1 || (currentIndex === 0 && index === totalSlides - 1)) {
                    card.classList.add('prev');
                } else if (diff < -1) {
                    card.classList.add('hidden-left');
                } else {
                    card.classList.add('hidden-right');
                }
            });
            
            dots.forEach((dot, index) => {
                dot.classList.toggle('active', index === currentIndex);
            });
        }
        
        function nextSlide() {
            goToSlide(currentIndex + 1);
        }
        
        function prevSlide() {
            goToSlide(currentIndex - 1);
        }
        
        // Controls
        const prevBtn = document.querySelector('.prev-showcase');
        const nextBtn = document.querySelector('.next-showcase');
        if (prevBtn) prevBtn.addEventListener('click', prevSlide);
        if (nextBtn) nextBtn.addEventListener('click', nextSlide);
        
        // Timer
        function startTimer() {
            autoPlayInterval = setInterval(nextSlide, 3000);
        }
        
        function resetTimer() {
            clearInterval(autoPlayInterval);
            startTimer();
        }
        
        // Pause on Hover
        sliderContainer.addEventListener('mouseenter', () => clearInterval(autoPlayInterval));
        sliderContainer.addEventListener('mouseleave', startTimer);
        
        // Touch Navigation
        let startX = 0;
        sliderContainer.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
        }, { passive: true });
        
        sliderContainer.addEventListener('touchend', (e) => {
            const diffX = e.changedTouches[0].clientX - startX;
            if (Math.abs(diffX) > 50) {
                if (diffX > 0) prevSlide();
                else nextSlide();
            }
        }, { passive: true });
        
        updateSliderClasses();
        startTimer();
    }
    
    initShowcaseSlider();

    // Load Shop Data
    const shopContainer = document.getElementById('shop-container');
    if (shopContainer && typeof shopData !== 'undefined') {
        shopData.forEach(item => {
            const shopCard = document.createElement('a');
            shopCard.href = `shop-detail.html?id=${item.id}`;
            shopCard.classList.add('shop-card');
            
            const availableTag = item.available 
                ? `<span class="available-tag">Available</span>`
                : `<span class="out-of-stock-tag">Out of Stock</span>`;
                
            shopCard.innerHTML = `
                <div class="shop-img-container">
                    <img src="${item.image}" alt="${item.title}">
                    <div class="shop-tags">
                        ${availableTag}
                    </div>
                    <div class="price-tag">LKR ${item.priceLKR}</div>
                </div>
                <div class="shop-caption">
                    <h3>${item.title}</h3>
                    <p>${item.description}</p>
                </div>
            `;
            
            // Add scroll animation classes manually or rely on intersection observer if set up
            shopCard.style.opacity = '0';
            shopCard.style.transform = 'translateY(30px)';
            shopCard.style.transition = 'all 0.8s ease-out';
            observer.observe(shopCard); // Reuse the existing observer
            
            shopContainer.appendChild(shopCard);
        });
    }

    // Initialize dedicated Shop Slider
    function initShopSlider() {
        const sliderContainer = document.getElementById('shop-slider');
        const dotsContainer = document.getElementById('shop-slider-dots');
        if (!sliderContainer || !dotsContainer || typeof shopSliderData === 'undefined') return;

        let currentSlide = 0;
        let slideInterval;
        const totalSlides = shopSliderData.length;

        // Inject slides
        shopSliderData.forEach((slide, index) => {
            const slideEl = document.createElement('div');
            slideEl.classList.add('shop-slide');
            if (index === 0) slideEl.classList.add('active');

            slideEl.innerHTML = `
                <div class="hero-bg">
                    <img src="${slide.image}" alt="${slide.title}">
                    <div class="overlay"></div>
                </div>
                <div class="hero-content">
                    <h2 class="subtitle">${slide.subtitle}</h2>
                    <h1 class="title">${slide.title}</h1>
                    <p>${slide.description}</p>
                    <div class="hero-btns">
                        <a href="#shop" class="btn btn-primary">Browse Shop</a>
                        <a href="contact.html" class="btn btn-outline">Custom Order</a>
                    </div>
                </div>
            `;
            sliderContainer.appendChild(slideEl);

            // Create dots
            const dot = document.createElement('div');
            dot.classList.add('dot', 'shop-dot');
            if (index === 0) dot.classList.add('active');
            dot.dataset.index = index;
            dot.addEventListener('click', () => goToSlide(index));
            dotsContainer.appendChild(dot);
        });

        const slides = sliderContainer.querySelectorAll('.shop-slide');
        const dots = dotsContainer.querySelectorAll('.shop-dot');

        function goToSlide(index) {
            if (index === currentSlide) return;

            // Mark current slide as prev-active (underneath)
            slides[currentSlide].classList.remove('active');
            slides[currentSlide].classList.add('prev-active');

            const prevIndex = currentSlide;

            // Move to new index
            currentSlide = index;
            if (currentSlide >= totalSlides) currentSlide = 0;
            if (currentSlide < 0) currentSlide = totalSlides - 1;

            // Mark new slide as active (wipes over the prev-active slide)
            slides[currentSlide].classList.add('active');

            // Update dots
            dots.forEach((dot, idx) => {
                dot.classList.toggle('active', idx === currentSlide);
            });

            // Clear prev-active class after transition finishes (1.2s clip-path transition)
            setTimeout(() => {
                slides[prevIndex].classList.remove('prev-active');
            }, 1200);

            resetTimer();
        }

        function nextSlide() { goToSlide(currentSlide + 1); }
        function prevSlide() { goToSlide(currentSlide - 1); }
        function startTimer() { slideInterval = setInterval(nextSlide, 6000); }
        function resetTimer() { clearInterval(slideInterval); startTimer(); }

        startTimer();

        // Arrows
        const nextArrow = document.querySelector('.shop-hero .next-arrow');
        const prevArrow = document.querySelector('.shop-hero .prev-arrow');
        if (nextArrow) nextArrow.addEventListener('click', nextSlide);
        if (prevArrow) prevArrow.addEventListener('click', prevSlide);
    }
    
    initShopSlider();

    // Contact Form Logic - Send to WhatsApp
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            // We do NOT prevent default, because we want it to submit to FormSubmit for the email.
            // We just open WhatsApp in a new tab concurrently.
            
            const name = this.querySelector('input[name="Name"]').value;
            const email = this.querySelector('input[name="Email"]').value;
            const subject = this.querySelector('input[name="Subject"]').value;
            const phone = this.querySelector('input[name="Phone"]').value;
            const message = this.querySelector('textarea[name="Message"]').value;
            
            const whatsappNumber = "94758162206";
            const whatsappText = `*New Inquiry via Website*\n\n*Name:* ${name}\n*Email:* ${email}\n*Phone:* ${phone}\n*Subject:* ${subject}\n\n*Message:*\n${message}`;
            const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappText)}`;
            
            window.open(whatsappUrl, '_blank');
        });
    }

});



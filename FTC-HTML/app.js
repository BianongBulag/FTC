document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');

  // Mobile menu toggle
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      hamburger.innerHTML = navLinks.classList.contains('active') ? '&times;' : '&#9776;';
    });
  }
  
  // Highlight active navigation link based on current page
  const currentPath = window.location.pathname.split('/').pop();
  if (currentPath) {
    const navItems = document.querySelectorAll('.nav-links a');
    navItems.forEach(link => {
      if (link.getAttribute('href') === currentPath) {
        link.classList.add('active');
      }
    });
  }

  // Reading Time Estimator
  const calculateReadingTime = () => {
    // Select all post containers
    const posts = document.querySelectorAll('.card, .blog-post, .trip-card, .coffee-card');
    
    posts.forEach(post => {
      // Find the text elements to estimate reading time from
      // We look at paragraph content within the post
      const textElements = post.querySelectorAll('p');
      if (textElements.length === 0) return;
      
      let totalText = '';
      textElements.forEach(p => totalText += p.textContent + ' ');
      
      const wordCount = totalText.trim().split(/\s+/).length;
      const wpm = 200; // Words per minute
      const readingTime = Math.ceil(wordCount / wpm);
      const timeStr = `${readingTime} min read`;
      
      // Look for an existing read-time span
      let readTimeSpan = post.querySelector('.read-time');
      
      if (readTimeSpan) {
        readTimeSpan.textContent = timeStr;
      } else {
        // If no placeholder, creatively inject one
        const metaContainer = post.querySelector('.card-meta, .blog-post-meta, .coffee-category, .location-tag');
        
        if (metaContainer) {
          readTimeSpan = document.createElement('span');
          readTimeSpan.className = 'read-time';
          readTimeSpan.textContent = timeStr;
          
          if (metaContainer.tagName.toLowerCase() === 'span') {
             metaContainer.innerHTML += ` &middot; `;
             metaContainer.appendChild(readTimeSpan);
          } else {
             // For div container like .card-meta
             const sepContainer = document.createElement('span');
             sepContainer.innerHTML = ` &middot; `;
             metaContainer.appendChild(sepContainer);
             metaContainer.appendChild(readTimeSpan);
          }
        } else {
          // If no meta container, insert it before the first paragraph
          readTimeSpan = document.createElement('span');
          readTimeSpan.className = 'read-time blog-post-meta';
          readTimeSpan.style.display = 'block';
          readTimeSpan.style.marginBottom = '10px';
          readTimeSpan.textContent = timeStr;
          textElements[0].parentNode.insertBefore(readTimeSpan, textElements[0]);
        }
      }
    });
  };

  calculateReadingTime();

  // Reading Progress Bar
  const progressBar = document.getElementById('reading-progress');
  if (progressBar) {
    window.addEventListener('scroll', () => {
      const scrollTotal = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollTotal > 0) {
        const progress = (window.scrollY / scrollTotal) * 100;
        progressBar.style.width = progress + '%';
      }
    });
  }
});

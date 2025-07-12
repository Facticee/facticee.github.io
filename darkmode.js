      document.addEventListener('DOMContentLoaded', () => {
        const toggleButton = document.getElementById('darkModeToggle');
        const body = document.body;

        // Check for saved theme in localStorage
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
          body.classList.add(savedTheme);
        } else {
          // Default to light mode if no theme is saved
          body.classList.add('light-mode');
        }

        toggleButton.addEventListener('click', () => {
          if (body.classList.contains('dark-mode')) {
            body.classList.replace('dark-mode', 'light-mode');
            localStorage.setItem('theme', 'light-mode');
          } else {
            body.classList.replace('light-mode', 'dark-mode');
            localStorage.setItem('theme', 'dark-mode');
          }
        });
      });
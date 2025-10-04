document.addEventListener('DOMContentLoaded', () => {

    // --- Dark Mode Toggle ---
    const darkModeToggle = document.getElementById('darkModeToggle');
    const body = document.body;

    // Lade den gespeicherten Modus beim Start
    if (localStorage.getItem('theme') === 'dark') {
        body.classList.add('dark-mode');
    }

    darkModeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        // Speichere die Wahl des Nutzers
        if (body.classList.contains('dark-mode')) {
            localStorage.setItem('theme', 'dark');
        } else {
            localStorage.setItem('theme', 'light');
        }
    });

    // --- Scroll Fade-In Animation ---
    const sections = document.querySelectorAll('.fade-in-section');

    const options = {
        root: null, // beobachtet im Verhältnis zum Viewport
        threshold: 0.1, // Element muss zu 10% sichtbar sein
        rootMargin: "0px"
    };

    const observer = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            }
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target); // Animation nur einmal ausführen
        });
    }, options);

    sections.forEach(section => {
        observer.observe(section);
    });

});

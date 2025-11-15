// Mobile burger menu toggle and smooth menu link behavior
document.addEventListener('DOMContentLoaded', function () {
    const burger = document.querySelector('.burger');
    const navigation = document.querySelector('.navigation');
    const navLinks = document.querySelectorAll('.nav-plis a');
    const navList = document.getElementById('main-nav');

    if (!burger || !navigation) return;

    // ensure initial aria state
    if (burger) burger.setAttribute('aria-expanded', 'false');
    if (navList) navList.setAttribute('aria-hidden', 'true');

    burger.addEventListener('click', function () {
        const isOpen = !navigation.classList.contains('open');
        burger.classList.toggle('open');
        navigation.classList.toggle('open');
        // lock body scroll when nav open
        document.body.classList.toggle('nav-open');
        // update accessibility attributes
        if (burger) burger.setAttribute('aria-expanded', String(isOpen));
        if (navList) navList.setAttribute('aria-hidden', String(!isOpen));
    });

    // Close the menu when a nav link is clicked (useful on mobile)
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navigation.classList.contains('open')) {
                navigation.classList.remove('open');
                burger.classList.remove('open');
                document.body.classList.remove('nav-open');
                if (burger) burger.setAttribute('aria-expanded', 'false');
                if (navList) navList.setAttribute('aria-hidden', 'true');
            }
        });
    });
});

/* Optional: if you want to give a subtle focus outline for keyboard users */
document.body.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
        const navigation = document.querySelector('.navigation');
        const burger = document.querySelector('.burger');
        if (navigation && navigation.classList.contains('open')) {
            navigation.classList.remove('open');
            burger.classList.remove('open');
            document.body.classList.remove('nav-open');
        }
    }
});

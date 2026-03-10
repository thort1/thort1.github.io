// Publication filter buttons
document.querySelectorAll('.filter-btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
        var filter = this.getAttribute('data-filter');

        document.querySelectorAll('.filter-btn').forEach(function (b) {
            b.classList.remove('active');
        });
        this.classList.add('active');

        document.querySelectorAll('.pub-item').forEach(function (item) {
            if (filter === 'all' || item.getAttribute('data-type') === filter) {
                item.classList.remove('hidden');
            } else {
                item.classList.add('hidden');
            }
        });
    });
});

// Abstract toggle
document.querySelectorAll('.pub-abstract-toggle').forEach(function (btn) {
    btn.addEventListener('click', function () {
        var abstract = this.closest('.pub-details').querySelector('.pub-abstract');
        abstract.classList.toggle('open');
    });
});

// BibTeX toggle
document.querySelectorAll('.pub-bibtex-toggle').forEach(function (btn) {
    btn.addEventListener('click', function () {
        var bibtex = this.closest('.pub-details').querySelector('.pub-bibtex');
        bibtex.classList.toggle('open');
    });
});

// Mobile nav toggle
var navToggle = document.querySelector('.nav-toggle');
var navLinks = document.querySelector('.nav-links');

if (navToggle && navLinks) {
    navToggle.addEventListener('click', function () {
        navLinks.classList.toggle('open');
    });

    // Close menu when a link is clicked
    navLinks.querySelectorAll('a').forEach(function (link) {
        link.addEventListener('click', function () {
            navLinks.classList.remove('open');
        });
    });
}

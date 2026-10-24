'use strict';

//Opening or closing side bar

const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }

const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

sidebarBtn.addEventListener("click", function() {elementToggleFunc(sidebar); })

//Translations (CV content lives in cv-data.js)

const UI = {
    en: {
        'ui.about': 'About', 'ui.resume': 'Resume', 'ui.portfolio': 'Portfolio', 'ui.contact': 'Contact',
        'ui.showContacts': 'Show Contacts', 'ui.email': 'Email', 'ui.phone': 'Phone', 'ui.birthday': 'Birthday', 'ui.location': 'Location',
        'ui.birthdayValue': 'October 17, 2000', 'ui.locationValue': 'Prague, Czechia',
        'ui.cvDownload': 'CV Download', 'ui.whatImDoing': "What I'm doing", 'ui.topProjects': 'Top Projects',
        'ui.selectCategory': 'Select Category', 'ui.contactForm': 'Contact Form', 'ui.sendMessage': 'Send Message',
        'ui.fullName': 'Full name', 'ui.emailAddress': 'Email Address', 'ui.yourMessage': 'Your Message',
        'cat.all': 'All', 'cat.web design': 'Web Design', 'cat.applications': 'Applications', 'cat.web development': 'Web Development'
    },
    cs: {
        'ui.about': 'O mně', 'ui.resume': 'Životopis', 'ui.portfolio': 'Portfolio', 'ui.contact': 'Kontakt',
        'ui.showContacts': 'Zobrazit kontakty', 'ui.email': 'E-mail', 'ui.phone': 'Telefon', 'ui.birthday': 'Datum narození', 'ui.location': 'Bydliště',
        'ui.birthdayValue': '17. října 2000', 'ui.locationValue': 'Praha, Česko',
        'ui.cvDownload': 'Stáhnout CV', 'ui.whatImDoing': 'Co dělám', 'ui.topProjects': 'Nejlepší projekty',
        'ui.selectCategory': 'Vyberte kategorii', 'ui.contactForm': 'Kontaktní formulář', 'ui.sendMessage': 'Odeslat zprávu',
        'ui.fullName': 'Celé jméno', 'ui.emailAddress': 'E-mailová adresa', 'ui.yourMessage': 'Vaše zpráva',
        'cat.all': 'Vše', 'cat.web design': 'Webový design', 'cat.applications': 'Aplikace', 'cat.web development': 'Vývoj webu'
    },
    ru: {
        'ui.about': 'Обо мне', 'ui.resume': 'Резюме', 'ui.portfolio': 'Портфолио', 'ui.contact': 'Контакты',
        'ui.showContacts': 'Показать контакты', 'ui.email': 'Эл. почта', 'ui.phone': 'Телефон', 'ui.birthday': 'Дата рождения', 'ui.location': 'Местоположение',
        'ui.birthdayValue': '17 октября 2000', 'ui.locationValue': 'Прага, Чехия',
        'ui.cvDownload': 'Скачать резюме', 'ui.whatImDoing': 'Чем я занимаюсь', 'ui.topProjects': 'Лучшие проекты',
        'ui.selectCategory': 'Выберите категорию', 'ui.contactForm': 'Форма обратной связи', 'ui.sendMessage': 'Отправить сообщение',
        'ui.fullName': 'Полное имя', 'ui.emailAddress': 'Адрес эл. почты', 'ui.yourMessage': 'Ваше сообщение',
        'cat.all': 'Все', 'cat.web design': 'Веб-дизайн', 'cat.applications': 'Приложения', 'cat.web development': 'Веб-разработка'
    }
};

const LANGS = ['en', 'cs', 'ru'];
let currentLang = 'en';
let currentFilter = 'all';

const esc = function (s) {
    return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; });
};

const lookup = function (key, cv) {
    if (key.indexOf('labels.') === 0) return cv.labels[key.slice(7)];
    if (key === 'role') return cv.role;
    return UI[currentLang][key];
};

const period = function (cv, from, to) {
    return from + ' – ' + (to || cv.labels.present);
};

const renderers = {
    intro: function (cv) { return cv.intro.map(function (t) { return '<p>' + esc(t) + '</p>'; }).join(''); },
    services: function (cv) {
        return cv.services.map(function (s) {
            return '<li class="service-item"><div class="service-icon-box"><ion-icon name="' + s.icon + '"></ion-icon></div>' +
                '<div class="service-content-box"><h4 class="h4 service-item-title">' + esc(s.title) + '</h4>' +
                '<p class="service-item-text">' + esc(s.text) + '</p></div></li>';
        }).join('');
    },
    education: function (cv) {
        return cv.education.map(function (e) {
            return '<li class="timeline-item"><h4 class="h4 timeline-item-title">' + esc(e.school) + ' – ' + esc(e.field) + '</h4>' +
                '<span>' + esc(e.from + ' – ' + e.to) + '</span>' +
                (e.note ? '<p class="timeline-text"><em>' + esc(e.note) + '</em></p>' : '') +
                e.text.map(function (t) { return '<p class="timeline-text">' + esc(t) + '</p>'; }).join('') + '</li>';
        }).join('');
    },
    experience: function (cv) {
        return cv.experience.map(function (e) {
            return '<li class="timeline-item"><h4 class="h4 timeline-item-title">' + esc(e.role) + ' | ' + esc(e.org) + '</h4>' +
                '<span>' + esc(period(cv, e.from, e.to)) + '</span>' +
                '<ul class="timeline-bullets">' + e.bullets.map(function (b) { return '<li class="timeline-text">' + esc(b) + '</li>'; }).join('') + '</ul></li>';
        }).join('');
    },
    certificates: function (cv) {
        return cv.certificates.map(function (c) {
            return '<li class="timeline-item"><h4 class="h4 timeline-item-title">' + esc(c.title) + '</h4>' +
                '<span>' + esc(c.year + ' · ' + c.issuer) + '</span>' +
                '<p class="timeline-text">' + esc(c.text) + '</p></li>';
        }).join('');
    },
    skills: function (cv) { return cv.skills.map(function (t) { return '<li class="tag">' + esc(t) + '</li>'; }).join(''); },
    languages: function (cv) { return cv.languages.map(function (t) { return '<li class="tag">' + esc(t) + '</li>'; }).join(''); },
    interests: function (cv) { return cv.interests.map(function (t) { return '<li class="tag">' + esc(t) + '</li>'; }).join(''); }
};

const setLanguage = function (lang) {
    if (LANGS.indexOf(lang) === -1) lang = 'en';
    currentLang = lang;
    const cv = window.CV[lang];

    document.documentElement.lang = lang;
    document.title = cv.title;

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
        const v = lookup(el.dataset.i18n, cv);
        if (v !== undefined) el.textContent = v;
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) {
        const v = lookup(el.dataset.i18nPlaceholder, cv);
        if (v !== undefined) el.placeholder = v;
    });
    document.querySelectorAll('[data-render]').forEach(function (el) {
        el.innerHTML = renderers[el.dataset.render](cv);
    });
    document.querySelectorAll('[data-bind="driving"]').forEach(function (el) { el.textContent = cv.driving; });

    const cvLink = document.querySelector('[data-cv-link]');
    if (cvLink) {
        cvLink.href = './_assets/CV/Emir-Aliev-' + lang + '.pdf';
        cvLink.setAttribute('download', 'Emir-Aliev-CV-' + lang.toUpperCase() + '.pdf');
    }

    document.querySelectorAll('[data-lang-btn]').forEach(function (b) {
        b.classList.toggle('active', b.dataset.langBtn === lang);
    });

    selectValue.textContent = UI[lang]['cat.' + currentFilter];

    try { localStorage.setItem('lang', lang); } catch (e) {}
};

//Activating Filter Select and filtering options

const select = document.querySelector('[data-select]');
const selectItems = document.querySelectorAll('[data-select-item]');
const selectValue = document.querySelector('[data-select-value]');
const filterBtn = document.querySelectorAll('[data-filter-btn]');

select.addEventListener('click', function () {elementToggleFunc(this); });

for(let i = 0; i < selectItems.length; i++) {
    selectItems[i].addEventListener('click', function() {

        elementToggleFunc(select);
        applyFilter(this.dataset.filter);

    });
}

const filterItems = document.querySelectorAll('[data-filter-item]');

const filterFunc = function (selectedValue) {
    for(let i = 0; i < filterItems.length; i++) {
        if(selectedValue == "all") {
            filterItems[i].classList.add('active');
        } else if (selectedValue == filterItems[i].dataset.category) {
            filterItems[i].classList.add('active');
        } else {
            filterItems[i].classList.remove('active');
        }
    }
}

const applyFilter = function (value) {
    currentFilter = value;
    selectValue.textContent = UI[currentLang]['cat.' + value];
    filterFunc(value);
    filterBtn.forEach(function (b) { b.classList.toggle('active', b.dataset.filter === value); });
}

//Enabling filter button for larger screens

for (let i = 0; i < filterBtn.length; i++) {
    filterBtn[i].addEventListener('click', function() { applyFilter(this.dataset.filter); })
}

// Enabling Contact Form

const form = document.querySelector('[data-form]');
const formInputs = document.querySelectorAll('[data-form-input]');
const formBtn = document.querySelector('[data-form-btn]');

for(let i = 0; i < formInputs.length; i++) {
    formInputs[i].addEventListener('input', function () {
        if(form.checkValidity()) {
            formBtn.removeAttribute('disabled');
        } else {
            formBtn.setAttribute('disabled', '');
        }
    })
}

// Enabling Page Navigation

const navigationLinks = document.querySelectorAll('[data-nav-link]');
const pages = document.querySelectorAll('[data-page]');

for(let i = 0; i < navigationLinks.length; i++) {
    navigationLinks[i].addEventListener('click', function() {
        const target = this.dataset.target;

        for(let j = 0; j < pages.length; j++) {
            const isTarget = pages[j].dataset.page === target;
            pages[j].classList.toggle('active', isTarget);
        }
        navigationLinks.forEach(function (l) { l.classList.toggle('active', l === navigationLinks[i]); });
        window.scrollTo(0, 0);
    });
}

// Language switcher

document.querySelectorAll('[data-lang-btn]').forEach(function (b) {
    b.addEventListener('click', function () { setLanguage(this.dataset.langBtn); });
});

(function () {
    let lang = null;
    try { lang = localStorage.getItem('lang'); } catch (e) {}
    if (!lang) {
        const nav = (navigator.language || 'en').slice(0, 2).toLowerCase();
        lang = nav === 'cs' || nav === 'sk' ? 'cs' : (nav === 'ru' ? 'ru' : 'en');
    }
    setLanguage(lang);
})();

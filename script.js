'use strict';

//Opening or closing side bar

const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }

const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

sidebarBtn.addEventListener("click", function() {elementToggleFunc(sidebar); })

//Featured projects (shown first in the portfolio)

const GITHUB_USER = 'EmirTheBest7';
const PROJECTS = [
    {
        title: 'Pixelite.cz', cover: 'cover-blue', image: './_assets/projects/pixelite.png',
        live: 'https://pixelite.cz', repo: 'https://github.com/EmirTheBest7/PIXELITE',
        tech: ['PHP', 'Docker', 'Multilingual (CS/EN)'],
        text: {
            en: 'Website of a Czech digital agency building clean, professional websites and practical digital solutions for people and small businesses at a fair price.',
            cs: 'Web české digitální agentury, která vytváří čisté, profesionální weby a praktická digitální řešení pro lidi a malé firmy za férovou cenu.',
            ru: 'Сайт чешского digital-агентства, создающего чистые профессиональные сайты и практичные цифровые решения для людей и малого бизнеса по честной цене.'
        }
    },
    {
        title: 'Dreamers', mark: 'D', cover: 'cover-violet',
        repo: 'https://github.com/EmirTheBest7/Dreamers-org-social-app',
        tech: ['Python', 'Django', 'REST Framework', 'PostgreSQL'],
        text: {
            en: 'Minimal social media platform built with Django: authentication, user profiles, posts, likes, comments, follow relationships and a personalised feed.',
            cs: 'Minimalistická sociální síť postavená na Djangu: přihlašování, uživatelské profily, příspěvky, lajky, komentáře, sledování uživatelů a personalizovaný feed.',
            ru: 'Минималистичная социальная сеть на Django: аутентификация, профили, посты, лайки, комментарии, подписки и персональная лента.'
        }
    },
    {
        title: 'aliev.io', mark: 'ΛΞV', cover: 'cover-gold',
        repo: 'https://github.com/EmirTheBest7/aev.platforms-v2',
        tech: ['PHP 8.3', 'MariaDB', 'Docker', 'Apache'],
        text: {
            en: 'Website of the Λ L I Ξ V Platforms digital studio, rebuilt without a framework: careers, contact, downloads and authentication on a hardened PHP and Docker stack.',
            cs: 'Web digitálního studia Λ L I Ξ V Platforms, přestavěný bez frameworku: kariéra, kontakt, soubory ke stažení a přihlašování na zabezpečeném stacku PHP a Dockeru.',
            ru: 'Сайт digital-студии Λ L I Ξ V Platforms, переписанный без фреймворка: вакансии, контакты, загрузки и аутентификация на защищённом стеке PHP и Docker.'
        }
    }
];

//Translations (CV content lives in cv-data.js)

const UI = {
    en: {
        'ui.about': 'About', 'ui.resume': 'Resume', 'ui.portfolio': 'Portfolio', 'ui.contact': 'Contact',
        'ui.showContacts': 'Show Contacts', 'ui.email': 'Email', 'ui.phone': 'Phone', 'ui.birthday': 'Birthday', 'ui.location': 'Location',
        'ui.birthdayValue': 'October 17, 2000', 'ui.locationValue': 'Prague, Czechia',
        'ui.cvDownload': 'CV Download', 'ui.whatImDoing': "What I'm doing", 'ui.topProjects': 'Top Projects',
        'ui.selectCategory': 'Select Category', 'ui.contactForm': 'Contact Form', 'ui.sendMessage': 'Send Message',
        'ui.fullName': 'Full name', 'ui.emailAddress': 'Email Address', 'ui.yourMessage': 'Your Message',
        'ui.featured': 'Featured projects', 'ui.allRepos': 'All GitHub repositories', 'ui.loading': 'Loading repositories…', 'ui.reposError': 'Could not load repositories right now. See them on GitHub instead.', 'ui.viewGithub': 'View on GitHub', 'ui.live': 'Live site', 'ui.source': 'Source code', 'ui.all': 'All', 'ui.updated': 'Updated', 'ui.noDesc': 'No description yet.',
        'cat.all': 'All', 'cat.web design': 'Web Design', 'cat.applications': 'Applications', 'cat.web development': 'Web Development'
    },
    cs: {
        'ui.about': 'O mně', 'ui.resume': 'Životopis', 'ui.portfolio': 'Portfolio', 'ui.contact': 'Kontakt',
        'ui.showContacts': 'Zobrazit kontakty', 'ui.email': 'E-mail', 'ui.phone': 'Telefon', 'ui.birthday': 'Datum narození', 'ui.location': 'Bydliště',
        'ui.birthdayValue': '17. října 2000', 'ui.locationValue': 'Praha, Česko',
        'ui.cvDownload': 'Stáhnout CV', 'ui.whatImDoing': 'Co dělám', 'ui.topProjects': 'Nejlepší projekty',
        'ui.selectCategory': 'Vyberte kategorii', 'ui.contactForm': 'Kontaktní formulář', 'ui.sendMessage': 'Odeslat zprávu',
        'ui.fullName': 'Celé jméno', 'ui.emailAddress': 'E-mailová adresa', 'ui.yourMessage': 'Vaše zpráva',
        'ui.featured': 'Vybrané projekty', 'ui.allRepos': 'Všechny repozitáře na GitHubu', 'ui.loading': 'Načítám repozitáře…', 'ui.reposError': 'Repozitáře se teď nepodařilo načíst. Podívejte se na ně na GitHubu.', 'ui.viewGithub': 'Zobrazit na GitHubu', 'ui.live': 'Živý web', 'ui.source': 'Zdrojový kód', 'ui.all': 'Vše', 'ui.updated': 'Aktualizováno', 'ui.noDesc': 'Zatím bez popisu.',
        'cat.all': 'Vše', 'cat.web design': 'Webový design', 'cat.applications': 'Aplikace', 'cat.web development': 'Vývoj webu'
    },
    ru: {
        'ui.about': 'Обо мне', 'ui.resume': 'Резюме', 'ui.portfolio': 'Портфолио', 'ui.contact': 'Контакты',
        'ui.showContacts': 'Показать контакты', 'ui.email': 'Эл. почта', 'ui.phone': 'Телефон', 'ui.birthday': 'Дата рождения', 'ui.location': 'Местоположение',
        'ui.birthdayValue': '17 октября 2000', 'ui.locationValue': 'Прага, Чехия',
        'ui.cvDownload': 'Скачать резюме', 'ui.whatImDoing': 'Чем я занимаюсь', 'ui.topProjects': 'Лучшие проекты',
        'ui.selectCategory': 'Выберите категорию', 'ui.contactForm': 'Форма обратной связи', 'ui.sendMessage': 'Отправить сообщение',
        'ui.fullName': 'Полное имя', 'ui.emailAddress': 'Адрес эл. почты', 'ui.yourMessage': 'Ваше сообщение',
        'ui.featured': 'Избранные проекты', 'ui.allRepos': 'Все репозитории на GitHub', 'ui.loading': 'Загружаю репозитории…', 'ui.reposError': 'Сейчас не удалось загрузить репозитории. Посмотрите их на GitHub.', 'ui.viewGithub': 'Открыть на GitHub', 'ui.live': 'Сайт', 'ui.source': 'Исходный код', 'ui.all': 'Все', 'ui.updated': 'Обновлено', 'ui.noDesc': 'Описания пока нет.',
        'cat.all': 'Все', 'cat.web design': 'Веб-дизайн', 'cat.applications': 'Приложения', 'cat.web development': 'Веб-разработка'
    }
};

const LANGS = ['en', 'cs', 'ru'];
let currentLang = 'en';
let repoFilter = 'all';
let repos = null;

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
    featured: function () {
        const t = UI[currentLang];
        return PROJECTS.map(function (p) {
            const links = (p.live ? '<a class="proj-link" href="' + p.live + '" target="_blank" rel="noopener"><ion-icon name="globe-outline"></ion-icon>' + esc(t['ui.live']) + '</a>' : '') +
                '<a class="proj-link" href="' + p.repo + '" target="_blank" rel="noopener"><ion-icon name="logo-github"></ion-icon>' + esc(t['ui.source']) + '</a>';
            return '<li class="featured-item"><div class="featured-cover ' + p.cover + '">' +
                (p.image ? '<img src="' + p.image + '" alt="' + esc(p.title) + '" loading="lazy">' : '<span class="featured-mark">' + esc(p.mark) + '</span>') + '</div>' +
                '<div class="featured-body"><h4 class="h4 featured-title">' + esc(p.title) + '</h4>' +
                '<p class="featured-text">' + esc(p.text[currentLang]) + '</p>' +
                '<ul class="tag-list">' + p.tech.map(function (x) { return '<li class="tag">' + esc(x) + '</li>'; }).join('') + '</ul>' +
                '<div class="proj-links">' + links + '</div></div></li>';
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

    renderRepos();

    try { localStorage.setItem('lang', lang); } catch (e) {}
};

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

// GitHub repositories (public ones, fetched live)

const renderRepos = function () {
    const list = document.querySelector('[data-repo-list]');
    const filter = document.querySelector('[data-repo-filter]');
    const status = document.querySelector('[data-repo-status]');
    if (!list || !repos) return;
    const t = UI[currentLang];

    const langs = [];
    repos.forEach(function (r) { if (r.language && langs.indexOf(r.language) === -1) langs.push(r.language); });
    filter.innerHTML = ['all'].concat(langs).map(function (l) {
        return '<li><button data-repo-lang="' + esc(l) + '" class="' + (l === repoFilter ? 'active' : '') + '">' + esc(l === 'all' ? t['ui.all'] : l) + '</button></li>';
    }).join('');
    filter.querySelectorAll('[data-repo-lang]').forEach(function (b) {
        b.addEventListener('click', function () { repoFilter = this.dataset.repoLang; renderRepos(); });
    });

    list.innerHTML = repos.filter(function (r) { return repoFilter === 'all' || r.language === repoFilter; }).map(function (r) {
        return '<li class="repo-item"><a href="' + esc(r.html_url) + '" target="_blank" rel="noopener">' +
            '<h4 class="h4 repo-name"><ion-icon name="logo-github"></ion-icon>' + esc(r.name) + '</h4>' +
            '<p class="repo-desc">' + esc(r.description || t['ui.noDesc']) + '</p>' +
            '<div class="repo-meta">' + (r.language ? '<span class="repo-lang">' + esc(r.language) + '</span>' : '<span></span>') +
            '<span>' + esc(t['ui.updated']) + ' ' + esc(r.pushed_at.slice(0, 7)) + '</span></div></a></li>';
    }).join('');
    status.hidden = true;
};

const loadRepos = function () {
    const status = document.querySelector('[data-repo-status]');
    fetch('https://api.github.com/users/' + GITHUB_USER + '/repos?per_page=100&sort=pushed&type=owner')
        .then(function (r) { if (!r.ok) throw new Error(r.status); return r.json(); })
        .then(function (data) {
            repos = data.filter(function (r) { return !r.fork && !r.private && r.name !== GITHUB_USER; });
            renderRepos();
        })
        .catch(function () {
            status.hidden = false;
            status.dataset.i18n = 'ui.reposError';
            status.textContent = UI[currentLang]['ui.reposError'];
        });
};

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

loadRepos();

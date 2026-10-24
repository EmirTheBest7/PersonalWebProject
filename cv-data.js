// Single source of truth for the CV content (EN / CS / RU).
// Used by the website (script.js) and by tools/build-cv.js to generate the downloadable PDFs.
(function (root) {
    const common = {
        name: 'Emir Aliev',
        phone: '(+420) 734 333 554',
        phoneHref: '+420734333554',
        email: 'emirthebest7@gmail.com',
        location: 'Prague, Czechia',
        linkedin: 'https://www.linkedin.com/in/emir-a-77a00a118/',
        github: 'https://github.com/EmirTheBest7'
    };

    const en = {
        lang: 'en',
        title: 'Emir Aliev | About Me',
        role: 'Web & Technical Specialist',
        labels: {
            about: 'About me', experience: 'Experience', education: 'Education', skills: 'Skills',
            certificates: 'Certificates and trainings', languages: 'Languages', interests: 'Interests and hobbies',
            drivingLicence: 'Driving licence', introduction: 'Introduction', present: 'until now'
        },
        intro: [
            'Web & Technical Specialist with experience across web development, web analytics, technical consulting, software engineering, and IT operations.',
            'I build and improve modern web applications across the full lifecycle, from frontend and backend development to APIs, databases, analytics, deployment, debugging, and continuous improvement. My technical stack includes React, Next.js, Django, Python, JavaScript, PHP, SQL, Docker, and Linux.',
            'I also have experience with Google Analytics, web tracking, and data-driven analysis. I use technical insight and data to understand user behaviour, identify problems, improve digital experiences, and support business decisions.',
            'My background combines software development, technical consulting, business-facing communication, production troubleshooting, and independent digital product development. I am comfortable working between technical and non-technical teams and turning business requirements into practical web solutions.'
        ],
        services: [
            { icon: 'code-slash-outline', title: 'Web development', text: 'Full-stack web applications with React, Next.js, Django, Node.js and PHP, from frontend to APIs, databases and deployment.' },
            { icon: 'color-palette-outline', title: 'UI/UX', text: 'Responsive, user-friendly interfaces built on UI/UX concepts that improve usability.' },
            { icon: 'analytics-outline', title: 'Web analytics', text: 'Google Analytics and web tracking to understand user behaviour and support business decisions.' },
            { icon: 'construct-outline', title: 'Technical consulting', text: 'Turning technical and business requirements into practical solutions, plus troubleshooting and process improvement.' }
        ],
        experience: [
            {
                from: '08/2026', to: null, role: 'Technical Consultant', org: 'MWT Solutions S. A.',
                bullets: [
                    'Analyse technical and business requirements and translate them into practical solutions.',
                    'Work with software systems, technical workflows, and application-related processes.',
                    'Support technical analysis, troubleshooting, and resolution of system-related issues.',
                    'Communicate technical topics clearly with both technical and non-technical stakeholders.',
                    'Contribute to process improvement, documentation, and continuous improvement of technical solutions.'
                ]
            },
            {
                from: '11/2024', to: '08/2026', role: 'Apple Certified Technician (AASP)', org: 'iWant | Smarty Brands - Apple (AASP)',
                bullets: [
                    'Diagnose and resolve hardware and software issues across macOS, iOS, and iPadOS environments.',
                    'Work with enterprise service systems and structured technical workflows.',
                    'Investigate incidents, identify root causes, and implement practical solutions.',
                    'Coordinate technical processes and communicate with customers, colleagues, and other stakeholders.',
                    'Work according to strict service, quality, and operational standards.',
                    'Support system restoration, data recovery, and technical troubleshooting.'
                ]
            },
            {
                from: '02/2022', to: '08/2026', role: 'Web & Software Engineer', org: 'Λ L I Ξ V Platforms (aliev.io)',
                bullets: [
                    'Develop and continuously improve full-stack web applications and digital platforms.',
                    'Build frontend solutions using React, Next.js, JavaScript, HTML, and CSS.',
                    'Use Google Analytics and web tracking to support data-driven analysis and improvements to digital products.',
                    'Analyse technical and business requirements and translate them into functional web solutions.',
                    'Develop responsive user interfaces and work with UI/UX concepts to improve usability and user experience.',
                    'Develop backend services and REST APIs using Python, Django, PHP, and Node.js.',
                    'Work across application architecture, authentication, databases, integrations, and deployment.',
                    'Perform debugging, testing, troubleshooting, and continuous technical improvements across web applications.',
                    'Manage Docker-based environments, Linux systems, Git workflows, and deployment processes.',
                    'Implement automation and AI-assisted functionality to improve efficiency and reduce repetitive work.'
                ]
            },
            {
                from: '02/2022', to: '08/2022', role: 'Retention & Account Manager', org: 'CapitalPanda',
                bullets: [
                    'Managed client accounts, user engagement, retention processes, and operational workflows within a financial technology environment.',
                    'Analysed user behaviour and system-generated metrics to identify engagement and retention patterns.',
                    'Used tracking and reporting data to support operational decisions and process improvements.',
                    'Monitored user activity and platform performance to identify issues and improvement opportunities.',
                    'Communicated with clients and internal teams and handled escalations and time-sensitive operational issues.'
                ]
            },
            {
                from: '01/2017', to: '12/2017', role: 'Software Developer', org: 'Pixelfield',
                bullets: [
                    'Developed and optimized production web applications and interactive projects using JavaScript and web technologies.',
                    'Worked closely with designers to translate visual concepts into clean and responsive web interfaces.',
                    'Debugged applications and resolved frontend and software defects.',
                    'Participated in testing and QA activities to improve reliability, performance, and user experience.',
                    'Contributed to interactive projects including MusicMap and Pěnožrouti 2.'
                ]
            }
        ],
        skills: [
            'Web development', 'Front-End Development', 'JavaScript', 'React.js', 'Next.js', 'Django', 'Python', 'Google Analytics',
            'HTML5', 'CSS', 'REST APIs', 'SQL', 'PHP', 'Node.js', 'Web Analytics', 'UI/UX', 'User Interface Design', 'API Integration',
            'Debugging', 'Troubleshooting', 'Software Architecture', 'Git', 'GitHub', 'Docker', 'Linux', 'Nginx', 'CI/CD', 'Deployment',
            'Automation', 'Artificial Intelligence', 'Agile development (Scrum)'
        ],
        languages: ['Czech (proficient)', 'Russian (proficient)', 'English (proficient)', 'Ukrainian (pre-intermediate)'],
        driving: 'B',
        education: [
            {
                from: '2021', to: '2022', school: 'Unicorn University', field: 'Software Engineering',
                text: [
                    'Professional software engineering studies focused on application development, programming, software architecture, databases, APIs, and agile development.',
                    'Key areas included Python, JavaScript, PHP, web and application development, software architecture, API design, database systems, and agile development.',
                    'Completed coursework. The programme was not completed with a university degree.'
                ]
            },
            {
                from: '2017', to: '2021', school: 'ISŠTE Sokolov', field: 'Information Technology',
                text: [
                    'Technical education focused on software development, web technologies, databases, computer systems, networking, and technical problem solving.',
                    'Key areas included application development, HTML, CSS, JavaScript, SQL, networking, system administration, hardware, automation, electronics, and robotics.'
                ],
                note: 'Secondary education with a school-leaving exam'
            }
        ],
        certificates: [
            { year: '2026', title: 'ManageEngine Endpoint Central – Mastering Endpoint Management', issuer: 'ManageEngine', text: 'Currently completing a comprehensive endpoint management course covering patch management, application deployment, OS imaging, remote control, endpoint security, reporting, and centralized device administration.' },
            { year: '2026', title: 'IT Service Management (ITSM) – Presales Training', issuer: 'ManageEngine', text: 'Successfully completed the IT Service Management (ITSM) – Presales Training on 31 August 2026.' },
            { year: '2025', title: 'Apple Certified Technician (AASP)', issuer: 'Apple', text: 'Professional Apple service certification covering technical diagnostics, hardware and software troubleshooting, repair procedures, device servicing, system restoration, and structured service workflows across Apple platforms.' }
        ],
        interests: ['Web development', 'Modern web technologies', 'Digital products', 'UI/UX', 'Open-source projects', 'AI integrations', 'Automation']
    };

    const cs = {
        lang: 'cs',
        title: 'Emir Aliev | O mně',
        role: 'Webový a technický specialista',
        labels: {
            about: 'O mně', experience: 'Praxe', education: 'Vzdělání', skills: 'Dovednosti',
            certificates: 'Certifikáty a školení', languages: 'Jazyky', interests: 'Zájmy a koníčky',
            drivingLicence: 'Řidičský průkaz', introduction: 'Úvod', present: 'dosud'
        },
        intro: [
            'Webový a technický specialista se zkušenostmi z oblasti vývoje webu, webové analytiky, technického poradenství, softwarového inženýrství a IT provozu.',
            'Vytvářím a vylepšuji moderní webové aplikace v celém jejich životním cyklu – od frontendu a backendu přes API a databáze až po analytiku, nasazení, ladění a průběžná vylepšení. Moje technologie zahrnují React, Next.js, Django, Python, JavaScript, PHP, SQL, Docker a Linux.',
            'Mám také zkušenosti s Google Analytics, webovým trackingem a analýzou dat. Technický vhled a data využívám k pochopení chování uživatelů, odhalování problémů, zlepšování digitálních služeb a podpoře obchodních rozhodnutí.',
            'Moje zázemí propojuje vývoj softwaru, technické poradenství, komunikaci s byznysem, řešení problémů v produkci a samostatný vývoj digitálních produktů. Umím pracovat mezi technickými i netechnickými týmy a převádět obchodní požadavky na praktická webová řešení.'
        ],
        services: [
            { icon: 'code-slash-outline', title: 'Vývoj webu', text: 'Full-stack webové aplikace v Reactu, Next.js, Djangu, Node.js a PHP – od frontendu přes API a databáze až po nasazení.' },
            { icon: 'color-palette-outline', title: 'UI/UX', text: 'Responzivní a uživatelsky přívětivá rozhraní postavená na principech UI/UX, která zlepšují použitelnost.' },
            { icon: 'analytics-outline', title: 'Webová analytika', text: 'Google Analytics a web tracking pro pochopení chování uživatelů a podporu obchodních rozhodnutí.' },
            { icon: 'construct-outline', title: 'Technické poradenství', text: 'Převod technických a obchodních požadavků na praktická řešení, řešení problémů a zlepšování procesů.' }
        ],
        experience: [
            {
                from: '08/2026', to: null, role: 'Technický konzultant', org: 'MWT Solutions S. A.',
                bullets: [
                    'Analyzuji technické a obchodní požadavky a převádím je na praktická řešení.',
                    'Pracuji se softwarovými systémy, technickými workflow a procesy souvisejícími s aplikacemi.',
                    'Podílím se na technické analýze, řešení problémů a odstraňování potíží se systémy.',
                    'Srozumitelně komunikuji technická témata s technickými i netechnickými zainteresovanými stranami.',
                    'Přispívám ke zlepšování procesů, dokumentaci a průběžnému zdokonalování technických řešení.'
                ]
            },
            {
                from: '11/2024', to: '08/2026', role: 'Certifikovaný technik Apple (AASP)', org: 'iWant | Smarty Brands - Apple (AASP)',
                bullets: [
                    'Diagnostika a řešení hardwarových i softwarových problémů v prostředí macOS, iOS a iPadOS.',
                    'Práce s podnikovými servisními systémy a strukturovanými technickými workflow.',
                    'Vyšetřování incidentů, hledání původních příčin a zavádění praktických řešení.',
                    'Koordinace technických procesů a komunikace se zákazníky, kolegy a dalšími zainteresovanými stranami.',
                    'Práce podle přísných servisních, kvalitativních a provozních standardů.',
                    'Podpora obnovy systémů, záchrany dat a technického řešení problémů.'
                ]
            },
            {
                from: '02/2022', to: '08/2026', role: 'Webový a softwarový inženýr', org: 'Λ L I Ξ V Platforms (aliev.io)',
                bullets: [
                    'Vyvíjím a průběžně zdokonaluji full-stack webové aplikace a digitální platformy.',
                    'Tvořím frontendová řešení v Reactu, Next.js, JavaScriptu, HTML a CSS.',
                    'Využívám Google Analytics a web tracking pro analýzu dat a zlepšování digitálních produktů.',
                    'Analyzuji technické a obchodní požadavky a převádím je na funkční webová řešení.',
                    'Vyvíjím responzivní uživatelská rozhraní a uplatňuji principy UI/UX ke zlepšení použitelnosti.',
                    'Vyvíjím backendové služby a REST API v Pythonu, Djangu, PHP a Node.js.',
                    'Pracuji napříč architekturou aplikací, autentizací, databázemi, integracemi a nasazením.',
                    'Provádím ladění, testování, řešení problémů a průběžná technická vylepšení webových aplikací.',
                    'Spravuji prostředí založená na Dockeru, systémy Linux, workflow v Gitu a procesy nasazení.',
                    'Zavádím automatizaci a funkce podporované AI pro vyšší efektivitu a méně opakující se práce.'
                ]
            },
            {
                from: '02/2022', to: '08/2022', role: 'Retention & Account Manager', org: 'CapitalPanda',
                bullets: [
                    'Správa klientských účtů, zapojení uživatelů, retenčních procesů a provozních workflow ve fintech prostředí.',
                    'Analýza chování uživatelů a systémových metrik za účelem odhalení vzorců zapojení a udržení klientů.',
                    'Využití trackingových a reportingových dat k podpoře provozních rozhodnutí a zlepšování procesů.',
                    'Sledování aktivity uživatelů a výkonu platformy pro odhalování problémů a příležitostí ke zlepšení.',
                    'Komunikace s klienty a interními týmy, řešení eskalací a časově kritických provozních problémů.'
                ]
            },
            {
                from: '01/2017', to: '12/2017', role: 'Softwarový vývojář', org: 'Pixelfield',
                bullets: [
                    'Vývoj a optimalizace produkčních webových aplikací a interaktivních projektů v JavaScriptu a webových technologiích.',
                    'Úzká spolupráce s designéry při převodu vizuálních konceptů do čistých a responzivních webových rozhraní.',
                    'Ladění aplikací a odstraňování chyb ve frontendu i softwaru.',
                    'Účast na testování a QA pro zvýšení spolehlivosti, výkonu a uživatelského zážitku.',
                    'Podíl na interaktivních projektech včetně MusicMap a Pěnožrouti 2.'
                ]
            }
        ],
        skills: [
            'Vývoj webu', 'Front-end vývoj', 'JavaScript', 'React.js', 'Next.js', 'Django', 'Python', 'Google Analytics',
            'HTML5', 'CSS', 'REST API', 'SQL', 'PHP', 'Node.js', 'Webová analytika', 'UI/UX', 'Návrh uživatelských rozhraní', 'Integrace API',
            'Ladění', 'Řešení problémů', 'Softwarová architektura', 'Git', 'GitHub', 'Docker', 'Linux', 'Nginx', 'CI/CD', 'Nasazení',
            'Automatizace', 'Umělá inteligence', 'Agilní vývoj (Scrum)'
        ],
        languages: ['Čeština (výborná)', 'Ruština (výborná)', 'Angličtina (výborná)', 'Ukrajinština (mírně pokročilá)'],
        driving: 'B',
        education: [
            {
                from: '2021', to: '2022', school: 'Unicorn University', field: 'Softwarové inženýrství',
                text: [
                    'Profesní studium softwarového inženýrství zaměřené na vývoj aplikací, programování, softwarovou architekturu, databáze, API a agilní vývoj.',
                    'Mezi hlavní oblasti patřily Python, JavaScript, PHP, vývoj webových a aplikačních řešení, softwarová architektura, návrh API, databázové systémy a agilní vývoj.',
                    'Absolvované předměty. Studium nebylo ukončeno vysokoškolským titulem.'
                ]
            },
            {
                from: '2017', to: '2021', school: 'ISŠTE Sokolov', field: 'Informační technologie',
                text: [
                    'Technické vzdělání zaměřené na vývoj softwaru, webové technologie, databáze, počítačové systémy, sítě a řešení technických problémů.',
                    'Mezi hlavní oblasti patřily vývoj aplikací, HTML, CSS, JavaScript, SQL, počítačové sítě, správa systémů, hardware, automatizace, elektronika a robotika.'
                ],
                note: 'Střední vzdělání s maturitní zkouškou'
            }
        ],
        certificates: [
            { year: '2026', title: 'ManageEngine Endpoint Central – Mastering Endpoint Management', issuer: 'ManageEngine', text: 'Aktuálně absolvuji komplexní kurz správy koncových zařízení zahrnující správu záplat, nasazování aplikací, imaging OS, vzdálené ovládání, zabezpečení koncových bodů, reporting a centralizovanou správu zařízení.' },
            { year: '2026', title: 'IT Service Management (ITSM) – Presales Training', issuer: 'ManageEngine', text: 'Úspěšně absolvované školení IT Service Management (ITSM) – Presales Training dne 31. srpna 2026.' },
            { year: '2025', title: 'Apple Certified Technician (AASP)', issuer: 'Apple', text: 'Profesionální servisní certifikace Apple zahrnující technickou diagnostiku, řešení hardwarových a softwarových problémů, opravárenské postupy, servis zařízení, obnovu systémů a strukturované servisní workflow napříč platformami Apple.' }
        ],
        interests: ['Vývoj webu', 'Moderní webové technologie', 'Digitální produkty', 'UI/UX', 'Open-source projekty', 'Integrace AI', 'Automatizace']
    };

    const ru = {
        lang: 'ru',
        title: 'Эмир Алиев | Обо мне',
        role: 'Веб- и технический специалист',
        labels: {
            about: 'Обо мне', experience: 'Опыт работы', education: 'Образование', skills: 'Навыки',
            certificates: 'Сертификаты и обучение', languages: 'Языки', interests: 'Интересы и хобби',
            drivingLicence: 'Водительские права', introduction: 'Введение', present: 'по настоящее время'
        },
        intro: [
            'Веб- и технический специалист с опытом в веб-разработке, веб-аналитике, техническом консалтинге, программной инженерии и ИТ-операциях.',
            'Я создаю и улучшаю современные веб-приложения на всём протяжении жизненного цикла: от фронтенда и бэкенда до API, баз данных, аналитики, развёртывания, отладки и постоянного совершенствования. Мой технический стек включает React, Next.js, Django, Python, JavaScript, PHP, SQL, Docker и Linux.',
            'Также у меня есть опыт работы с Google Analytics, веб-трекингом и анализом данных. Я использую технические знания и данные, чтобы понимать поведение пользователей, выявлять проблемы, улучшать цифровой опыт и поддерживать бизнес-решения.',
            'Мой опыт объединяет разработку ПО, технический консалтинг, коммуникацию с бизнесом, решение проблем в продакшене и самостоятельную разработку цифровых продуктов. Мне комфортно работать на стыке технических и нетехнических команд и превращать бизнес-требования в практичные веб-решения.'
        ],
        services: [
            { icon: 'code-slash-outline', title: 'Веб-разработка', text: 'Full-stack веб-приложения на React, Next.js, Django, Node.js и PHP: от фронтенда до API, баз данных и развёртывания.' },
            { icon: 'color-palette-outline', title: 'UI/UX', text: 'Адаптивные и удобные интерфейсы на основе принципов UI/UX, повышающие удобство использования.' },
            { icon: 'analytics-outline', title: 'Веб-аналитика', text: 'Google Analytics и веб-трекинг для понимания поведения пользователей и поддержки бизнес-решений.' },
            { icon: 'construct-outline', title: 'Технический консалтинг', text: 'Превращение технических и бизнес-требований в практичные решения, диагностика проблем и улучшение процессов.' }
        ],
        experience: [
            {
                from: '08/2026', to: null, role: 'Технический консультант', org: 'MWT Solutions S. A.',
                bullets: [
                    'Анализирую технические и бизнес-требования и превращаю их в практичные решения.',
                    'Работаю с программными системами, техническими процессами и процессами, связанными с приложениями.',
                    'Участвую в техническом анализе, диагностике и устранении проблем в системах.',
                    'Понятно объясняю технические вопросы как техническим, так и нетехническим заинтересованным сторонам.',
                    'Вношу вклад в улучшение процессов, документацию и постоянное совершенствование технических решений.'
                ]
            },
            {
                from: '11/2024', to: '08/2026', role: 'Сертифицированный техник Apple (AASP)', org: 'iWant | Smarty Brands - Apple (AASP)',
                bullets: [
                    'Диагностика и устранение аппаратных и программных проблем в средах macOS, iOS и iPadOS.',
                    'Работа с корпоративными сервисными системами и структурированными техническими процессами.',
                    'Расследование инцидентов, поиск первопричин и внедрение практичных решений.',
                    'Координация технических процессов и общение с клиентами, коллегами и другими заинтересованными сторонами.',
                    'Работа в соответствии со строгими сервисными, качественными и операционными стандартами.',
                    'Поддержка восстановления систем, восстановления данных и технической диагностики.'
                ]
            },
            {
                from: '02/2022', to: '08/2026', role: 'Веб- и программный инженер', org: 'Λ L I Ξ V Platforms (aliev.io)',
                bullets: [
                    'Разрабатываю и постоянно улучшаю full-stack веб-приложения и цифровые платформы.',
                    'Создаю фронтенд-решения на React, Next.js, JavaScript, HTML и CSS.',
                    'Использую Google Analytics и веб-трекинг для анализа данных и улучшения цифровых продуктов.',
                    'Анализирую технические и бизнес-требования и превращаю их в функциональные веб-решения.',
                    'Разрабатываю адаптивные пользовательские интерфейсы и применяю принципы UI/UX для повышения удобства.',
                    'Разрабатываю бэкенд-сервисы и REST API на Python, Django, PHP и Node.js.',
                    'Работаю с архитектурой приложений, аутентификацией, базами данных, интеграциями и развёртыванием.',
                    'Занимаюсь отладкой, тестированием, диагностикой проблем и постоянными техническими улучшениями веб-приложений.',
                    'Управляю окружениями на базе Docker, системами Linux, рабочими процессами Git и процессами развёртывания.',
                    'Внедряю автоматизацию и функциональность с поддержкой ИИ для повышения эффективности и сокращения рутинной работы.'
                ]
            },
            {
                from: '02/2022', to: '08/2022', role: 'Менеджер по удержанию клиентов и работе с аккаунтами', org: 'CapitalPanda',
                bullets: [
                    'Вёл клиентские аккаунты, вовлечение пользователей, процессы удержания и операционные процессы в финтех-среде.',
                    'Анализировал поведение пользователей и системные метрики для выявления закономерностей вовлечения и удержания.',
                    'Использовал данные трекинга и отчётности для поддержки операционных решений и улучшения процессов.',
                    'Отслеживал активность пользователей и производительность платформы для выявления проблем и возможностей улучшения.',
                    'Общался с клиентами и внутренними командами, решал эскалации и срочные операционные вопросы.'
                ]
            },
            {
                from: '01/2017', to: '12/2017', role: 'Разработчик программного обеспечения', org: 'Pixelfield',
                bullets: [
                    'Разрабатывал и оптимизировал продакшен веб-приложения и интерактивные проекты на JavaScript и веб-технологиях.',
                    'Тесно работал с дизайнерами, превращая визуальные концепции в чистые и адаптивные веб-интерфейсы.',
                    'Отлаживал приложения и устранял дефекты фронтенда и ПО.',
                    'Участвовал в тестировании и QA для повышения надёжности, производительности и удобства использования.',
                    'Участвовал в интерактивных проектах, включая MusicMap и Pěnožrouti 2.'
                ]
            }
        ],
        skills: [
            'Веб-разработка', 'Фронтенд-разработка', 'JavaScript', 'React.js', 'Next.js', 'Django', 'Python', 'Google Analytics',
            'HTML5', 'CSS', 'REST API', 'SQL', 'PHP', 'Node.js', 'Веб-аналитика', 'UI/UX', 'Дизайн интерфейсов', 'Интеграция API',
            'Отладка', 'Диагностика проблем', 'Архитектура ПО', 'Git', 'GitHub', 'Docker', 'Linux', 'Nginx', 'CI/CD', 'Развёртывание',
            'Автоматизация', 'Искусственный интеллект', 'Agile-разработка (Scrum)'
        ],
        languages: ['Чешский (свободно)', 'Русский (свободно)', 'Английский (свободно)', 'Украинский (ниже среднего)'],
        driving: 'B',
        education: [
            {
                from: '2021', to: '2022', school: 'Unicorn University', field: 'Программная инженерия',
                text: [
                    'Профессиональное обучение программной инженерии: разработка приложений, программирование, архитектура ПО, базы данных, API и гибкая разработка.',
                    'Основные направления: Python, JavaScript, PHP, веб- и прикладная разработка, архитектура ПО, проектирование API, системы баз данных и agile-разработка.',
                    'Курсы пройдены. Программа не была завершена получением университетского диплома.'
                ]
            },
            {
                from: '2017', to: '2021', school: 'ISŠTE Sokolov', field: 'Информационные технологии',
                text: [
                    'Техническое образование, ориентированное на разработку ПО, веб-технологии, базы данных, компьютерные системы, сети и решение технических проблем.',
                    'Основные направления: разработка приложений, HTML, CSS, JavaScript, SQL, сети, системное администрирование, аппаратное обеспечение, автоматизация, электроника и робототехника.'
                ],
                note: 'Среднее образование с аттестатом зрелости (maturita)'
            }
        ],
        certificates: [
            { year: '2026', title: 'ManageEngine Endpoint Central – Mastering Endpoint Management', issuer: 'ManageEngine', text: 'Сейчас прохожу комплексный курс по управлению конечными устройствами: управление патчами, развёртывание приложений, образы ОС, удалённое управление, защита конечных точек, отчётность и централизованное администрирование устройств.' },
            { year: '2026', title: 'IT Service Management (ITSM) – Presales Training', issuer: 'ManageEngine', text: 'Успешно завершил обучение IT Service Management (ITSM) – Presales Training 31 августа 2026 года.' },
            { year: '2025', title: 'Apple Certified Technician (AASP)', issuer: 'Apple', text: 'Профессиональная сервисная сертификация Apple: техническая диагностика, диагностика аппаратных и программных проблем, процедуры ремонта, обслуживание устройств, восстановление систем и структурированные сервисные процессы на платформах Apple.' }
        ],
        interests: ['Веб-разработка', 'Современные веб-технологии', 'Цифровые продукты', 'UI/UX', 'Open-source проекты', 'Интеграции ИИ', 'Автоматизация']
    };

    const CV = {};
    [en, cs, ru].forEach(function (l) { CV[l.lang] = Object.assign({}, common, l); });
    root.CV = CV;
    if (typeof module !== 'undefined' && module.exports) module.exports = CV;
})(typeof window !== 'undefined' ? window : globalThis);

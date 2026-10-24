#!/usr/bin/env node
// Generates the downloadable CV PDFs (EN / CS / RU) from cv-data.js using headless Chrome.
// Usage: node tools/build-cv.js   (set CHROME=/path/to/chrome to override the default macOS path)
'use strict';
const fs = require('fs');
const os = require('os');
const path = require('path');
const { execFileSync } = require('child_process');
const CV = require('../cv-data.js');

const CHROME = process.env.CHROME || '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const OUT = path.join(__dirname, '..', '_assets', 'CV');

const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

function html(cv) {
    const L = cv.labels;
    const tags = (a) => '<div class="tags">' + a.map((t) => '<span>' + esc(t) + '</span>').join('') + '</div>';
    const exp = cv.experience.map((e) => `
        <div class="item"><div class="when">${esc(e.from)} – ${esc(e.to || L.present)}</div>
        <div class="what"><h3>${esc(e.role)}</h3><div class="org">${esc(e.org)}</div>
        <ul>${e.bullets.map((b) => '<li>' + esc(b) + '</li>').join('')}</ul></div></div>`).join('');
    const edu = cv.education.map((e) => `
        <div class="item"><div class="when">${esc(e.from)} – ${esc(e.to)}</div>
        <div class="what"><h3>${esc(e.school)}</h3><div class="org">${esc(e.field)}${e.note ? ' · ' + esc(e.note) : ''}</div>
        ${e.text.map((t) => '<p>' + esc(t) + '</p>').join('')}</div></div>`).join('');
    const certs = cv.certificates.map((c) => `
        <div class="item"><div class="when">${esc(c.year)}</div>
        <div class="what"><h3>${esc(c.title)}</h3><div class="org">${esc(c.issuer)}</div><p>${esc(c.text)}</p></div></div>`).join('');
    return `<!doctype html><html lang="${cv.lang}"><head><meta charset="utf-8"><title>${esc(cv.name)} – CV</title>
<style>
@page { size: A4; margin: 14mm 15mm; }
* { box-sizing: border-box; }
body { font-family: "Helvetica Neue", Arial, sans-serif; font-size: 9.5pt; line-height: 1.45; color: #222; margin: 0; }
h1 { font-size: 24pt; margin: 0 0 2px; }
.role { font-size: 12pt; color: #b8860b; margin-bottom: 8px; }
.contact { color: #444; margin-bottom: 14px; }
.contact span { margin-right: 14px; }
h2 { font-size: 12pt; border-bottom: 1.5px solid #ddd; padding-bottom: 3px; margin: 16px 0 8px; text-transform: uppercase; letter-spacing: .04em; }
p { margin: 0 0 6px; }
.item { display: flex; gap: 14px; margin-bottom: 10px; break-inside: avoid; }
.when { width: 32mm; flex: none; color: #777; }
.what { flex: 1; }
h3 { font-size: 10.5pt; margin: 0; }
.org { color: #555; margin-bottom: 3px; }
ul { margin: 2px 0 0; padding-left: 16px; }
li { margin-bottom: 1px; }
.tags span { display: inline-block; background: #eee; border-radius: 3px; padding: 1px 7px; margin: 0 4px 4px 0; }
</style></head><body>
<h1>${esc(cv.name)}</h1><div class="role">${esc(cv.role)}</div>
<div class="contact"><span>${esc(cv.phone)}</span><span>${esc(cv.email)}</span><span>${esc(cv.location)}</span><br>
<span>LinkedIn: ${esc(cv.linkedin)}</span><span>GitHub: ${esc(cv.github)}</span></div>
<h2>${esc(L.introduction)}</h2>${cv.intro.map((t) => '<p>' + esc(t) + '</p>').join('')}
<h2>${esc(L.experience)}</h2>${exp}
<h2>${esc(L.skills)}</h2>${tags(cv.skills)}
<h2>${esc(L.languages)}</h2>${tags(cv.languages)}<p><strong>${esc(L.drivingLicence)}:</strong> ${esc(cv.driving)}</p>
<h2>${esc(L.education)}</h2>${edu}
<h2>${esc(L.certificates)}</h2>${certs}
<h2>${esc(L.interests)}</h2>${tags(cv.interests)}
</body></html>`;
}

fs.mkdirSync(OUT, { recursive: true });
const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'cv-'));
for (const lang of Object.keys(CV)) {
    const src = path.join(tmp, lang + '.html');
    const dest = path.join(OUT, `Emir-Aliev-${lang}.pdf`);
    fs.writeFileSync(src, html(CV[lang]));
    execFileSync(CHROME, ['--headless=new', '--disable-gpu', '--no-pdf-header-footer', `--print-to-pdf=${dest}`, 'file://' + src], { stdio: 'ignore' });
    console.log('wrote', path.relative(process.cwd(), dest));
}

// Load user submitted codes from localStorage if any
let userSubmittedCodes = JSON.parse(localStorage.getItem('user_nusuk_codes') || '[]');

// Combine predefined codes with user submitted codes
let combinedCodes = [...userSubmittedCodes, ...allCodesCombined];

let currentPage = 1;
const codesPerPage = 50;
let currentLang = 'en';

// Translations Dictionary
const translations = {
    en: {
        title: "🕌 Nusuk Umrah Challenge",
        subtitle: "Free Referral Codes for Umrah Keys - Use any code to get +1 Key for draws! You can use as many codes as you like, there is no limit.",
        hadithText: "“Whoever guides to good gets the same reward as the one who does it.”",
        hadithRef: "— Sahih Muslim 1893",
        lblTotal: "Total Codes Available",
        lblFree: "Free & Unlimited",
        lblVerified: "Verified Working",
        submitTitle: "Share Your Nusuk Code",
        submitDesc: "Help the community! Add your referral code below to get free keys when others use it.",
        submitPlaceholder: "e.g. NG-03Z0x0pt",
        submitBtn: "Share Code",
        instTitle: "How to Use These Codes",
        instList: `
            <li>Open the Nusuk Umrah Challenge app on your phone.</li>
            <li>Navigate to <strong>"Start the Challenge" → "Keys" → "Add code"</strong>.</li>
            <li>Copy any code below and paste it in the app.</li>
            <li>Each valid code gives you +1 Key for the Umrah draw!</li>
            <li>Good luck with your Umrah journey! May Allah accept it. 🤲</li>
        `,
        jumpLabel: "Jump to Page:",
        goBtn: "Go",
        prevBtn: "Prev",
        nextBtn: "Next",
        connect: "Connect With Us",
        donateTitle: "Support & Community Donation",
        donateDesc: "Help us maintain this website free for everyone. Scan or click below to connect with us on Messenger.",
        qrLabel: "Click to Donate / Contact via Messenger",
        msgBtnText: "Message on Facebook"
    },
    bn: {
        title: "🕌 নুসুক ওমরাহ চ্যালেঞ্জ",
        subtitle: "ওমরাহ কের জন্য ফ্রি রেফারেল কোড - যেকোনো কোড ব্যবহার করে ড্র-এর জন্য +1 কি নিন! আপনি যত খুশি কোড ব্যবহার করতে পারেন, কোনো সীমা নেই।",
        hadithText: "“যে ব্যক্তি কাউকে ভালো কাজের পথ দেখায়, সে সেই কাজটি করার সমান সওয়াব পায়।”",
        hadithRef: "— সহিহ মুসলিম ১৮৯৩",
        lblTotal: "মোট উপলব্ধ কোড",
        lblFree: "ফ্রি এবং সীমাহীন",
        lblVerified: "যাচাইকৃত কার্যকারী",
        submitTitle: "আপনার নুসুক কোড শেয়ার করুন",
        submitDesc: "সম্প্রদায়কে সাহায্য করুন! অন্যরা যখন এটি ব্যবহার করবে তখন ফ্রি কি পেতে আপনার রেফারেল কোড নিচে যোগ করুন।",
        submitPlaceholder: "যেমন: NG-03Z0x0pt",
        submitBtn: "কোড শেয়ার করুন",
        instTitle: "এই কোডগুলো কিভাবে ব্যবহার করবেন",
        instList: `
            <li>আপনার ফোনে নুসুক ওমরাহ চ্যালেঞ্জ অ্যাপটি খুলুন।</li>
            <li><strong>"Start the Challenge" → "Keys" → "Add code"</strong> অপশনে যান।</li>
            <li>নিচের যেকোনো কোড কপি করে অ্যাপে পেস্ট করুন।</li>
            <li>প্রতিটি কার্যকর কোড ওমরাহ ড্র-এর জন্য +1 কি দেবে!</li>
            <li>আপনার ওমরাহ যাত্রা সফল হোক! আল্লাহ কবুল করুন। 🤲</li>
        `,
        jumpLabel: "পাতায় যান:",
        goBtn: "যান",
        prevBtn: "পূর্ববর্তী",
        nextBtn: "পরবর্তী",
        connect: "আমাদের সাথে সংযুক্ত হোন",
        donateTitle: "সহযোগিতা ও অনুদান",
        donateDesc: "সবাইর জন্য এই ওয়েবসাইটটি বিনামূল্যে রাখতে আমাদের সাহায্য করুন। মেসেঞ্জারে যোগাযোগ করতে নিচে ক্লিক করুন।",
        qrLabel: "ডোনেট করতে বা মেসেঞ্জারে যোগাযোগ করতে ক্লিক করুন",
        msgBtnText: "ফেসবুকে মেসেজ করুন"
    },
    ar: {
        title: "🕌 تحدي نسك للعمري",
        subtitle: "رموز إحالة مجانية لمفاتيح العمرة - استخدم أي رمز لتحصل على +1 مفتاح للسحوبات! يمكنك استخدام عدد غير محدود من الرموز.",
        hadithText: "“من دل على خير فله مثل أجر فاعله.”",
        hadithRef: "— صحيح مسلم 1893",
        lblTotal: "إجمالي الرموز المتاحة",
        lblFree: "مجاني وبدون حدود",
        lblVerified: "موثوق وفعال",
        submitTitle: "شارك رمز نسك الخاص بك",
        submitDesc: "ساعد المجتمع! أضف رمز الإحالة الخاص بك أدناه للحصول على مفاتيح مجانية.",
        submitPlaceholder: "مثال: NG-03Z0x0pt",
        submitBtn: "شارك الرمز",
        instTitle: "كيفية استخدام هذه الرموز",
        instList: `
            <li>افتح تطبيق تحدي نسك عمرة على هاتفك.</li>
            <li>انتقل إلى <strong>"ابدأ التحدي" ← "المفاتيح" ← "إضافة رمز"</strong>.</li>
            <li>انسخ أي رمز أدناه والصقه في التطبيق.</li>
            <li>كل رمز صالح يمنحك +1 مفتاح لسحب العمرة!</li>
            <li>رحلة عمرة مباركة وتقبل الله طاعتكم. 🤲</li>
        `,
        jumpLabel: "الانتقال إلى الصفحة:",
        goBtn: "اذهب",
        prevBtn: "السابق",
        nextBtn: "التالي",
        connect: "تواصل معنا",
        donateTitle: "الدعم والتبرع المجتمعي",
        donateDesc: "ساعدنا في إبقاء هذا الموقع مجانياً للجميع. اضغط أدناه للتواصل معنا عبر الميسنجر.",
        qrLabel: "انقر للتبرع / التواصل عبر الميسنجر",
        msgBtnText: "راسلنا على الفيسبوك"
    }
};

function setLanguage(lang) {
    currentLang = lang;
    document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.remove('active'));
    document.getElementById(`btn-${lang}`).classList.add('active');

    const t = translations[lang];
    document.getElementById('main-title').textContent = t.title;
    document.getElementById('main-subtitle').textContent = t.subtitle;
    document.getElementById('hadith-text').textContent = t.hadithText;
    document.getElementById('hadith-ref').textContent = t.hadithRef;
    document.getElementById('lbl-total-codes').textContent = t.lblTotal;
    document.getElementById('lbl-free').textContent = t.lblFree;
    document.getElementById('lbl-verified').textContent = t.lblVerified;
    document.getElementById('submit-title').innerHTML = `<i class="fa-solid fa-plus-circle"></i> ${t.submitTitle}`;
    document.getElementById('submit-desc').textContent = t.submitDesc;
    document.getElementById('user-code-input').placeholder = t.submitPlaceholder;
    document.getElementById('btn-submit-code').innerHTML = `<i class="fa-solid fa-paper-plane"></i> ${t.submitBtn}`;
    document.getElementById('inst-title').innerHTML = `<i class="fa-solid fa-list-check"></i> ${t.instTitle}`;
    document.getElementById('inst-list').innerHTML = t.instList;
    document.getElementById('lbl-jump').textContent = t.jumpLabel;
    document.getElementById('btn-go').textContent = t.goBtn;
    document.getElementById('prev-btn').innerHTML = `<i class="fa-solid fa-chevron-left"></i> ${t.prevBtn}`;
    document.getElementById('next-btn').innerHTML = `${t.nextBtn} <i class="fa-solid fa-chevron-right"></i>`;
    document.getElementById('footer-connect').textContent = t.connect;
    document.getElementById('donate-title').innerHTML = `<i class="fa-solid fa-hand-holding-heart"></i> ${t.donateTitle}`;
    document.getElementById('donate-desc').textContent = t.donateDesc;
    document.getElementById('qr-label').textContent = t.qrLabel;
    document.getElementById('btn-msg-text').textContent = t.msgBtnText;

    if (lang === 'ar') {
        document.body.style.direction = 'rtl';
    } else {
        document.body.style.direction = 'ltr';
    }
}

// Render codes for current page
function renderCodes() {
    const container = document.getElementById('codes-container');
    container.innerHTML = '';

    const totalPages = Math.ceil(combinedCodes.length / codesPerPage) || 1;
    if (currentPage > totalPages) currentPage = totalPages;
    if (currentPage < 1) currentPage = 1;

    const startIdx = (currentPage - 1) * codesPerPage;
    const endIdx = Math.min(startIdx + codesPerPage, combinedCodes.length);
    const pageCodes = combinedCodes.slice(startIdx, endIdx);

    pageCodes.forEach((code) => {
        const card = document.createElement('div');
        card.className = 'code-card';
        card.innerHTML = `
            <div class="code-text">${code}</div>
            <button class="copy-btn" onclick="event.stopPropagation(); copyCode(this, '${code}')">
                <i class="fa-regular fa-copy"></i> Copy
            </button>
        `;
        card.onclick = () => copyCode(card.querySelector('.copy-btn'), code);
        container.appendChild(card);
    });

    // Update pagination UI
    document.getElementById('prev-btn').disabled = currentPage === 1;
    document.getElementById('next-btn').disabled = currentPage === totalPages || totalPages === 0;
    document.getElementById('page-info').textContent = `Page ${currentPage} of ${totalPages} (${combinedCodes.length} codes)`;
    document.getElementById('total-codes').textContent = combinedCodes.length.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

// Change page
function changePage(delta) {
    currentPage += delta;
    renderCodes();
    window.scrollTo({ top: document.getElementById('codes-container').offsetTop - 150, behavior: 'smooth' });
}

// Jump to specific page
function jumpToPage() {
    const input = document.getElementById('jump-input');
    const pageNum = parseInt(input.value);
    const totalPages = Math.ceil(combinedCodes.length / codesPerPage);

    if (pageNum >= 1 && pageNum <= totalPages) {
        currentPage = pageNum;
        renderCodes();
        input.value = '';
        window.scrollTo({ top: document.getElementById('codes-container').offsetTop - 150, behavior: 'smooth' });
    } else {
        alert(`Please enter a valid page number between 1 and ${totalPages}`);
    }
}

// Copy code to clipboard
function copyCode(button, code) {
    navigator.clipboard.writeText(code).then(() => {
        const originalHTML = button.innerHTML;
        button.innerHTML = '<i class="fa-solid fa-check"></i> Copied!';
        button.classList.add('copied');
        setTimeout(() => {
            button.innerHTML = originalHTML;
            button.classList.remove('copied');
        }, 2000);
    }).catch(err => {
        alert('Copy failed. Please select text manually: ' + code);
    });
}

// User submit code function
function submitUserCode() {
    const input = document.getElementById('user-code-input');
    const msg = document.getElementById('submit-msg');
    let code = input.value.trim().toUpperCase();

    if (!code.startsWith('NG-')) {
        code = 'NG-' + code.replace(/^NG-?/i, '');
    }

    if (code.length < 8) {
        msg.style.color = '#ff6b6b';
        msg.textContent = '❌ Please enter a valid Nusuk referral code (e.g. NG-03Z0x0pt)';
        return;
    }

    if (combinedCodes.includes(code)) {
        msg.style.color = '#ffa502';
        msg.textContent = '⚠️ This code is already in the list!';
        return;
    }

    // Add to user submitted codes and save to localStorage
    userSubmittedCodes.unshift(code);
    localStorage.setItem('user_nusuk_codes', JSON.stringify(userSubmittedCodes));

    // Update combined codes and re-render
    combinedCodes = [...userSubmittedCodes, ...allCodesCombined];
    currentPage = 1;
    renderCodes();

    msg.style.color = '#2ed573';
    msg.textContent = '✅ Success! Your code has been added and available instantly (+1 count).';
    input.value = '';

    setTimeout(() => {
        msg.textContent = '';
    }, 5000);
}

// Open Messenger for Donation/Contact
function openMessenger() {
    window.open('https://m.me/mriimran.m', '_blank');
}

// Initialize on load
renderCodes();
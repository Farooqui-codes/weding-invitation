/**
 * ==============================================================================
 * 👑 ROYAL SHAHI PATRA - MUSLIM WEDDING INVITATION CONFIGURATION
 * ==============================================================================
 * भाई, अगर आपको किसी भी नए Customer के लिए डिटेल्स बदलनी हैं,
 * तो आपको किसी भी HTML या CSS कोड को छूने की जरूरत नहीं है!
 * बस नीचे दिए गए नाम, तारीख, वेन्यू और फोटो को बदलें - पूरी वेबसाइट अपने आप अपडेट हो जाएगी।
 * ==============================================================================
 */

window.WEDDING_DATA = {
  // ---------------------------------------------------------------------------
  // 1. दूल्हा और दुल्हन की जानकारी (Groom & Bride Info)
  // ---------------------------------------------------------------------------
  groomName: "Akbar",       // दूल्हे का नाम (Groom First Name)
  brideName: "Fatema",      // दुल्हन का नाम (Bride First Name)
  title: "Akbar & Fatema",  // पेज का मुख्य टाइटल
  
  // शादी का मुख्य निमंत्रण संदेश (Front Envelope Message)
  introNote: "In the name of Allah, the Most Gracious, the Most Merciful. We cordially invite you to celebrate the joyous union and Nikah of…",

  // मुख्य निकाह की तारीख (Nikah / Wedding Main Date: YYYY-MM-DD format)
  weddingDate: "2026-11-15",

  // ---------------------------------------------------------------------------
  // 2. खानदान व परिवार की जानकारी (Family Royal Scrolls)
  // ---------------------------------------------------------------------------
  // दूल्हे का खानदान (Groom's Family)
  groomFamily: {
    enabled: true,
    name: "Akbar Ahmed",
    relLabel: "Son of",
    parentA: "Janab Tariq Ahmed",
    parentB: "Mohtarma Parveen Ahmed",
    grandLabel: "Grandson of",
    grandA: "Late Janab Abdul Rasheed",
    grandB: "Late Mohtarma Fatima Begum"
  },

  // दुल्हन का खानदान (Bride's Family)
  brideFamily: {
    enabled: true,
    name: "Fatema Khan",
    relLabel: "Daughter of",
    parentA: "Janab Imran Khan",
    parentB: "Mohtarma Shabana Khan",
    grandLabel: "Granddaughter of",
    grandA: "Late Janab Mohammad Yusuf",
    grandB: "Late Mohtarma Zohra Begum"
  },

  // ---------------------------------------------------------------------------
  // 3. सभी रस्में और कार्यक्रम (Muslim Wedding Ceremonies)
  // ---------------------------------------------------------------------------
  ceremonies: [
    {
      name: "Manjha / Haldi",
      art: "templates/royale/media/haldi.webp",
      date: "2026-11-13",
      time: "16:00",
      venue: "Ahmed Palace, Lucknow",
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Ahmed+Palace+Lucknow",
      enabled: true
    },
    {
      name: "Mehendi Night",
      art: "templates/royale/media/mehendi.webp",
      date: "2026-11-14",
      time: "18:00",
      venue: "Ahmed Palace, Lucknow",
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Ahmed+Palace+Lucknow",
      enabled: true
    },
    {
      name: "Sangeet & Qawwali",
      art: "templates/royale/media/sangeet.webp",
      date: "2026-11-14",
      time: "20:30",
      venue: "Ahmed Palace, Lucknow",
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Ahmed+Palace+Lucknow",
      enabled: true
    },
    {
      name: "Nikah Ceremony",
      art: "templates/royale/media/vivaah.webp",
      date: "2026-11-15",
      time: "19:00",
      venue: "The Royal Orchid Banquet, Lucknow",
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Royal+Orchid+Lucknow",
      enabled: true
    },
    {
      name: "Dawat-e-Walima",
      art: "templates/royale/media/reception.webp",
      date: "2026-11-16",
      time: "20:00",
      venue: "The Royal Orchid Banquet, Lucknow",
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Royal+Orchid+Lucknow",
      enabled: true
    }
  ],

  // ---------------------------------------------------------------------------
  // 4. हमारी कहानी और फोटो गैलरी (Our Story in Pictures)
  // ---------------------------------------------------------------------------
  gallery: [
    {
      type: "portrait",
      image: "uploads/photo1.jpg",
      caption: "#howitstarted",
      hang: 118
    },
    {
      type: "story",
      text: "Some stories begin with grand gestures. Ours started with a simple conversation and endless dua.",
      hang: 86
    },
    {
      type: "landscape",
      image: "uploads/photo2.jpg",
      caption: "#adventures",
      hang: 150
    },
    {
      type: "story",
      text: "Friendship grew into love, and with Allah's grace, our forever begins today.",
      hang: 120
    },
    {
      type: "portrait",
      image: "uploads/photo3.jpg",
      caption: "#thelittlethings",
      hang: 132
    }
  ],

  // ---------------------------------------------------------------------------
  // 5. परिवार व अहबाब की ओर से दुआएं व मुबारकबाद (Best Compliments)
  // ---------------------------------------------------------------------------
  compliments: [
    "Janab Shahnawaz Ahmed & Family (Chacha-Chachi)",
    "Janab Mansoor Ahmed & Family (Taya-Tai)",
    "Mohtarma Rubeena Bano & Family (Phuphi)",
    "Janab Rizwan Farooqui & Family (Mamu-Mami)"
  ],

  // ---------------------------------------------------------------------------
  // 6. जरूरी सूचना (Things to Note)
  // ---------------------------------------------------------------------------
  note: "- Complimentary valet parking is available at the main entrance of The Royal Orchid for all our esteemed guests.",

  // ---------------------------------------------------------------------------
  // 7. विदाई संदेश (Farewell Message)
  // ---------------------------------------------------------------------------
  farewell: "Your Presence & Duas Mean the World to Us",

  // ---------------------------------------------------------------------------
  // 8. बैकग्राउंड इस्लामिक निकाह नशीद (Background Wedding Nasheed in Loop)
  // ---------------------------------------------------------------------------
  music: {
    enabled: true,
    src: "templates/music/audio.mp3", // Baraka Allahu Lakuma (Islamic Wedding Nasheed)
    volume: 0.6
  }
};

// =============================================================================
// ENGINE INITIALIZER: Connects WEDDING_DATA to the Royal Template Engine
// =============================================================================
(function () {
  if (!window.Royale) return;

  const D = window.WEDDING_DATA;
  const RY = window.Royale;

  // Assemble full configuration
  const config = {
    version: 1,
    finalized: true,

    // Bismillah ir-Rahman ir-Raheem Invocation
    invocation: {
      symbol: 'none',
      religion: 'muslim',
      script: 'arabic',
      custom: 'بِسْمِ ٱللَّٰهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ'
    },

    brideName: D.brideName,
    groomName: D.groomName,
    title: D.title || (D.groomName + ' & ' + D.brideName),
    hostNames: [D.groomName, D.brideName],
    introNote: D.introNote,

    eventISO: D.weddingDate,
    revealButton: 'Reveal the Date',
    revealAfter: 'Save the Date',

    brideFamily: D.brideFamily,
    groomFamily: D.groomFamily,

    gallery: {
      enabled: true,
      items: D.gallery
    },

    ceremonies: D.ceremonies,

    compliments: {
      enabled: true,
      lead: "With Best Compliments & Duas From:",
      lines: D.compliments
    },

    note: {
      enabled: true,
      lead: "Things to Note",
      text: D.note
    },

    farewell: {
      line: D.farewell
    },

    social: {
      instagram: false,
      instagramUrl: ''
    },

    music: D.music
  };

  // Override template config
  RY.config = config;
  RY.platform = false;
  RY.syncDerived();

  // Hide the editor chrome & elephant remnants
  const style = document.createElement('style');
  style.innerHTML = `
    .royale-card__symbol { display: none !important; }
    #ryInvocation { display: none !important; }
    .ry-inv-btn, .ry-toolbar { display: none !important; }
    .royale-gate__decor--elephant-left,
    .royale-gate__decor--elephant-right,
    .royale-date__elephant,
    .royale-gate__elephant { display: none !important; }
  `;
  document.head.appendChild(style);
})();

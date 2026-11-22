# 👑 Royal Shahi Patra - Muslim Wedding Invitation (शाही निकाह पत्र)

यह एक प्रीमियम, रॉयल इस्लामिक/मुस्लिम वेडिंग डिजिटल इनविटेशन (Shahi Patra) है। इसमें सभी असली रॉयल एनिमेशन (दरवाजे खुलना, रिबन स्लाइड, रोलिंग स्क्रॉल, डेट रिवील, फ्लोटिंग पेटल्स, बैकग्राउंड अरबी निकाह नशीद) शामिल हैं।

> **मुख्य कस्टमाइज़ेशन:**
> 1. **फुटर क्रेडिट:** Balcony का नाम और वेबसाइट पूरी तरह हटाकर **"Created by Umair Farooqui"** सेट किया गया है, जो सीधे आपके पोर्टफोलियो (`https://farooqui-umair-portfolio.fmdumair07.workers.dev/#home`) पर ले जाता है।
> 2. **अरबी नशीद (Islamic Nasheed):** बैकग्राउंड म्यूजिक में प्रसिद्ध व रूहानी अरबी वेडिंग नशीद **"Baraka Allahu Lakuma" (بارك الله لكما)** जोड़ी गई है।
> 3. **मोबाइल रिस्पॉन्सिव (Mobile View):** सभी स्मार्टफोन्स (Android, iPhone) के लिए फ्लुइड फॉन्ट (`clamp`), स्मूथ टच गेट ओपनिंग, और सिंगल-कॉलम कार्ड लेआउट सेट किया गया है।
> 4. **बिस्मिल्लाह सुलेख:** कार्ड, बैनर, स्क्रॉल और रस्मों पर **"بِسْمِ ٱللَّٰهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ"** अरबी कैलीग्राफी फॉन्ट्स में सेट है।
> 5. **हाथी व गैर-जरूरी सिंबल्स:** पूरी तरह हटा दिए गए हैं।

---

## 🚀 किसी भी नए Customer के लिए डिटेल्स कैसे बदलें?

आपको किसी भी HTML, CSS या कोड को छूने की बिल्कुल जरूरत नहीं है!  
सिर्फ **`wedding-config.js`** फाइल को किसी भी टेक्स्ट एडिटर में खोलें और वैल्यूज बदलें:

```javascript
window.WEDDING_DATA = {
  // 1. दूल्हा और दुल्हन का नाम
  groomName: "Farhan",
  brideName: "Ayesha",
  title: "Farhan & Ayesha",

  // 2. निकाह की तारीख (YYYY-MM-DD)
  weddingDate: "2026-11-15",

  // 3. खानदान की जानकारी (Groom & Bride Family)
  groomFamily: {
    name: "Farhan Ahmed",
    relLabel: "Son of",
    parentA: "Janab Tariq Ahmed",
    parentB: "Mohtarma Parveen Ahmed",
    grandLabel: "Grandson of",
    grandA: "Late Janab Abdul Rasheed",
    grandB: "Late Mohtarma Fatima Begum"
  },
  brideFamily: {
    name: "Ayesha Khan",
    relLabel: "Daughter of",
    parentA: "Janab Imran Khan",
    parentB: "Mohtarma Shabana Khan",
    grandLabel: "Granddaughter of",
    grandA: "Late Janab Mohammad Yusuf",
    grandB: "Late Mohtarma Zohra Begum"
  },

  // 4. सभी कार्यक्रम (Manjha, Mehendi, Qawwali, Nikah, Walima)
  ceremonies: [
    { name: "Nikah Ceremony", date: "2026-11-15", time: "19:00", venue: "The Royal Orchid, Lucknow", ... },
    { name: "Dawat-e-Walima", date: "2026-11-16", time: "20:00", venue: "The Royal Orchid, Lucknow", ... }
  ],

  // 5. फोटो गैलरी
  gallery: [
    { type: "portrait", image: "uploads/photo1.jpg", caption: "#howitstarted", hang: 118 },
    { type: "story", text: "Some stories begin with grand gestures...", hang: 86 }
  ],

  // 6. दुआएं व मुबारकबाद (Compliments)
  compliments: [
    "Janab Shahnawaz Ahmed & Family (Chacha-Chachi)",
    "Janab Mansoor Ahmed & Family (Taya-Tai)",
  ],

  // 7. बैकग्राउंड अरबी नशीद
  music: {
    enabled: true,
    src: "templates/music/audio.mp3", // Baraka Allahu Lakuma Arabic Nasheed
    volume: 0.5
  }
};
```

---

## 📂 फ़ाइल संरचना (Project Folder Structure)

- **`index.html`** - मुख्य वेबसाइट फाइल। इसे ब्राउज़र में डबल क्लिक करके खोलें या लाइव होस्ट करें।
- **`wedding-config.js`** - **मुख्य फाइल** जहाँ हर कस्टमर का डेटा बदला जाता है।
- **`templates/music/audio.mp3`** - अरबी वेडिंग नशीद।
- **`uploads/`** - कस्टमर की फोटो यहाँ रखें (`photo1.jpg`, `photo2.jpg`, आदि)।
- **`templates/`** - सभी एनिमेशन, रॉयल दरवाजे, स्क्रॉल, वीडियो, म्यूजिक और स्टाइल।

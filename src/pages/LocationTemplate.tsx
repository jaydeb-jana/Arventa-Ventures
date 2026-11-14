import React, { useEffect } from "react";
import { useLanguage } from "@/src/contexts/LanguageContext";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Section } from "@/src/components/ui/Section";
import { Button } from "@/src/components/ui/Button";
import { pricing } from "@/src/data";
import { ArrowRight, MapPin, Target, TrendingUp, Users, CheckCircle2, Search, Megaphone, BarChart, Rocket, Globe } from "lucide-react";
import { SEO } from "@/src/components/common/SEO";

function getLangDict<T>(dict: Record<string, T>, selectedLang: string): T {
  return dict[selectedLang] || dict['en'] || dict['bn'] || Object.values(dict)[0];
}

export default function LocationTemplate() {
  const { city } = useParams();
  const { lang } = useLanguage();

  // Format city name (e.g. "new-york" -> "New York")
  const formattedCity = city 
    ? city.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
    : 'Your City';

  const localSchema = [
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": `Arventa Ventures - Best Digital Marketing Agency in ${formattedCity}`,
      "description": `Arventa Ventures is the best digital marketing agency in ${formattedCity}. We provide high-ROI Meta ads service, meta ads services near me, video making services near me, and low budget digital marketing agency packages.`,
      "url": `https://arventaventures.online/location/${(city || 'kolkata').toLowerCase()}`,
      "telephone": "+917872490719",
      "email": "info@arventaventures.online",
      "areaServed": {
        "@type": "City",
        "name": formattedCity
      },
      "priceRange": "$$",
      "knowsAbout": [
        `Best Digital Marketing Agency in ${formattedCity}`,
        "Best Digital Marketing Agency in Kolkata",
        "Best Digital Marketing Agency",
        "Meta Ads Service",
        "Meta Ads Services Near Me",
        "Video Making Services Near Me",
        "Low Budget Digital Marketing Agency"
      ]
    }
  ];

const translations = {
  en: {
    badge: "Top-Rated Digital Marketing Agency in",
    title1: "Transform Your Brand in",
    desc: "Arventa Ventures is the premier digital growth partner for businesses in {city}. We specialize in data-driven SEO, high-converting Meta Ads, and strategic content marketing to dominate your local market.",
    cta: "Launch Your Digital Marketing Campaign"
  },
  bn: {
    badge: "সেরা ডিজিটাল মার্কেটিং এজেন্সি",
    title1: "আপনার ব্র্যান্ডকে উন্নত করুন",
    desc: "Arventa Ventures হলো {city} তে ব্যবসার জন্য প্রিমিয়ার ডিজিটাল গ্রোথ পার্টনার। আপনার স্থানীয় মার্কেট দখল করতে আমরা ডেটা-চালিত SEO, হাই-কনভার্টিং Meta Ads এবং স্ট্র্যাটেজিক কন্টেন্ট মার্কেটিংয়ে বিশেষজ্ঞ।",
    cta: "আপনার ডিজিটাল মার্কেটিং শুরু করুন"
  },
  hi: {
    badge: "टॉप-रेटेड डिजिटल मार्केटिंग एजेंसी",
    title1: "अपने ब्रांड को नई पहचान दें",
    desc: "Arventa Ventures {city} में व्यवसायों के लिए प्रमुख डिजिटल ग्रोथ पार्टनर है। हम आपके स्थानीय बाजार पर हावी होने के लिए डेटा-संचालित SEO, हाई-कन्वर्टिंग Meta Ads और रणनीतिक कंटेंट मार्केटिंग में विशेषज्ञ हैं।",
    cta: "अपना डिजिटल मार्केटिंग अभियान शुरू करें"
  },
  te: {
    badge: "టాప్-రేటెడ్ డిజిటల్ మార్కెటింగ్ ఏజెన్సీ",
    title1: "మీ బ్రాండ్‌ను మార్చండి",
    desc: "Arventa Ventures {city} లోని వ్యాపారాల కోసం ప్రధాన డిజిటల్ గ్రోత్ భాగస్వామి. మీ స్థానిక మార్కెట్‌ను శాసించడానికి మేము డేటా-ఆధారిత SEO, హై-కన్వర్టింగ్ Meta Ads మరియు వ్యూహాత్మక కంటెంట్ మార్కెటింగ్‌లో ప్రత్యేకత కలిగి ఉన్నాము.",
    cta: "మీ డిజిటల్ మార్కెటింగ్ ప్రచారాన్ని ప్రారంభించండి"
  },
  ta: {
    badge: "சிறந்த டிஜிட்டல் மார்க்கெட்டிங் நிறுவனம்",
    title1: "உங்கள் பிராண்டை மாற்றுங்கள்",
    desc: "Arventa Ventures என்பது {city} இல் உள்ள வணிகங்களுக்கான முதன்மை டிஜிட்டல் வளர்ச்சி கூட்டாளர். உங்கள் உள்ளூர் சந்தையில் ஆதிக்கம் செலுத்த தரவு உந்துதல் SEO, அதிக மாற்றும் Meta விளம்பரங்கள் மற்றும் மூலோபாய உள்ளடக்க சந்தைப்படுத்தல் ஆகியவற்றில் நாங்கள் நிபுணத்துவம் பெற்றுள்ளோம்.",
    cta: "உங்கள் டிஜிட்டல் மார்க்கெட்டிங் பிரச்சாரத்தைத் தொடங்குங்கள்"
  },
  mr: {
    badge: "टॉप-रेटेड डिजिटल मार्केटिंग एजन्सी",
    title1: "तुमच्या ब्रँडमध्ये परिवर्तन करा",
    desc: "Arventa Ventures हे {city} मधील व्यवसायांसाठी प्रमुख डिजिटल ग्रोथ पार्टनर आहे. तुमच्या स्थानिक मार्केटवर वर्चस्व मिळवण्यासाठी आम्ही डेटा-चालित SEO, हाय-कन्व्हर्टिंग Meta Ads आणि धोरणात्मक सामग्री मार्केटिंगमध्ये तज्ञ आहोत.",
    cta: "तुमची डिजिटल मार्केटिंग मोहीम सुरू करा"
  },
  gu: {
    badge: "ટોપ-રેટેડ ડિજિટલ માર્કેટિંગ એજન્સી",
    title1: "તમારી બ્રાન્ડને પરિવર્તિત કરો",
    desc: "Arventa Ventures એ {city} માં વ્યવસાયો માટે પ્રીમિયર ડિજિટલ ગ્રોથ પાર્ટનર છે. અમે તમારા સ્થાનિક બજારમાં પ્રભુત્વ મેળવવા માટે ડેટા આધારિત SEO, હાઇ-કન્વર્ટિંગ Meta Ads અને વ્યૂહાત્મક કન્ટેન્ટ માર્કેટિંગમાં નિષ્ણાત છીએ.",
    cta: "તમારું ડિજિટલ માર્કેટિંગ અભિયાન શરૂ કરો"
  }
};

  const t = getLangDict(translations, lang);

  
  const t3 = getLangDict({
    en: {
      servicesTitle: "Our Core Services in {city}",
      servicesDesc: "Comprehensive digital growth solutions to elevate your brand above the local competition.",
      pricingTitle: "Risk-Free Growth Plans",
      pricingDesc: "Claim your <strong className=\"text-orange-500\">Exclusive Free Trial</strong> to experience the quality of our work before committing. No hidden fees. Just results.",
      ctaTitle: "Ready to grow your business in {city}?",
      ctaDesc: "Let's build a strategy that puts you ahead of your competitors in {city}. Partner with a world-class digital marketing agency.",
      ctaBtn: "Get Your Free Strategy Session"
    },
    bn: {
      servicesTitle: "{city} তে আমাদের মূল সার্ভিস",
      servicesDesc: "আপনার ব্র্যান্ডকে স্থানীয় প্রতিযোগিতার উপরে তুলতে ব্যাপক ডিজিটাল গ্রোথ সমাধান।",
      pricingTitle: "ঝুঁকিমুক্ত গ্রোথ প্ল্যান",
      pricingDesc: "কোনো কমিটমেন্টের আগেই আমাদের কাজের মান যাচাই করতে আপনার <strong className=\"text-orange-500\">এক্সক্লুসিভ ফ্রি ট্রায়াল</strong> দাবি করুন। কোনো লুকানো চার্জ নেই, শুধু ফলাফল।",
      ctaTitle: "{city} তে আপনার ব্যবসা বাড়াতে প্রস্তুত?",
      ctaDesc: "{city} তে আপনার প্রতিযোগীদের থেকে আপনাকে এগিয়ে রাখার মতো একটি স্ট্র্যাটেজি তৈরি করি। একটি ওয়ার্ল্ড-ক্লাস ডিজিটাল মার্কেটিং এজেন্সির সাথে যুক্ত হন।",
      ctaBtn: "ফ্রি স্ট্র্যাটেজি সেশন বুক করুন"
    },
    hi: {
      servicesTitle: "{city} में हमारी मुख्य सेवाएं",
      servicesDesc: "आपके ब्रांड को स्थानीय प्रतिस्पर्धा से ऊपर उठाने के लिए व्यापक डिजिटल विकास समाधान।",
      pricingTitle: "जोखिम मुक्त ग्रोथ प्लान",
      pricingDesc: "प्रतिबद्ध होने से पहले हमारे काम की गुणवत्ता का अनुभव करने के लिए अपना <strong className=\"text-orange-500\">विशेष फ्री ट्रायल</strong> प्राप्त करें। कोई छिपी हुई फीस नहीं।",
      ctaTitle: "क्या आप {city} में अपना व्यवसाय बढ़ाने के लिए तैयार हैं?",
      ctaDesc: "आइए एक ऐसी रणनीति बनाएं जो आपको {city} में अपने प्रतिस्पर्धियों से आगे रखे। एक विश्व स्तरीय डिजिटल मार्केटिंग एजेंसी के साथ भागीदार बनें।",
      ctaBtn: "अपना फ्री स्ट्रेटेजी सेशन बुक करें"
    },
    te: {
      servicesTitle: "{city} లో మా ప్రధాన సేవలు",
      servicesDesc: "స్థానిక పోటీకి మించి మీ బ్రాండ్‌ను పెంచడానికి సమగ్ర డిజిటల్ వృద్ధి పరిష్కారాలు.",
      pricingTitle: "రిస్క్-ఫ్రీ గ్రోత్ ప్లాన్స్",
      pricingDesc: "మా పని నాణ్యతను అనుభవించడానికి మీ <strong className=\"text-orange-500\">ప్రత్యేక ఉచిత ట్రయల్</strong> ను క్లెయిమ్ చేయండి.",
      ctaTitle: "{city} లో మీ వ్యాపారాన్ని అభివృద్ధి చేయడానికి సిద్ధంగా ఉన్నారా?",
      ctaDesc: "{city} లో మీ పోటీదారుల కంటే మిమ్మల్ని ముందుకు ఉంచే వ్యూహాన్ని నిర్మిద్దాం. ప్రపంచ స్థాయి డిజిటల్ మార్కెటింగ్ ఏజెన్సీతో భాగస్వామి కండి.",
      ctaBtn: "మీ ఉచిత వ్యూహ సెషన్‌ను పొందండి"
    },
    ta: {
      servicesTitle: "{city} இல் எங்கள் முக்கிய சேவைகள்",
      servicesDesc: "உள்ளூர் போட்டியைத் தாண்டி உங்கள் பிராண்டை உயர்த்த விரிவான டிஜிட்டல் வளர்ச்சி தீர்வுகள்.",
      pricingTitle: "ஆபத்து இல்லாத வளர்ச்சி திட்டங்கள்",
      pricingDesc: "எங்கள் பணியின் தரத்தை அனுபவிக்க உங்கள் <strong className=\"text-orange-500\">பிரத்யேக இலவச சோதனையை</strong> கோருங்கள்.",
      ctaTitle: "{city} இல் உங்கள் வணிகத்தை வளர்க்க தயாரா?",
      ctaDesc: "{city} இல் உங்கள் போட்டியாளர்களை விட உங்களை முன்னிலைப்படுத்தும் ஒரு உத்தியை உருவாக்குவோம்.",
      ctaBtn: "உங்கள் இலவச உத்தி அமர்வைப் பெறுங்கள்"
    },
    mr: {
      servicesTitle: "{city} मधील आमच्या प्रमुख सेवा",
      servicesDesc: "तुमच्या ब्रँडला स्थानिक स्पर्धेच्या वर नेण्यासाठी सर्वसमावेशक डिजिटल ग्रोथ सोल्यूशन्स.",
      pricingTitle: "जोखीम-मुक्त ग्रोथ प्लॅन्स",
      pricingDesc: "आमच्या कामाचा दर्जा अनुभवण्यासाठी तुमची <strong className=\"text-orange-500\">विशेष मोफत चाचणी</strong> मिळवा.",
      ctaTitle: "{city} मध्ये तुमचा व्यवसाय वाढवण्यासाठी तयार आहात?",
      ctaDesc: "{city} मध्ये तुमच्या प्रतिस्पर्ध्यांच्या पुढे राहण्यासाठी आम्ही एक रणनीती तयार करू. जागतिक दर्जाच्या डिजिटल मार्केटिंग एजन्सीसोबत काम करा.",
      ctaBtn: "तुमचे मोफत स्ट्रॅटेजी सेशन बुक करा"
    },
    gu: {
      servicesTitle: "{city} માં અમારી મુખ્ય સેવાઓ",
      servicesDesc: "તમારી બ્રાન્ડને સ્થાનિક સ્પર્ધાથી ઉપર લાવવા માટે વ્યાપક ડિજિટલ વૃદ્ધિ ઉકેલો.",
      pricingTitle: "જોખમ-મુક્ત વૃદ્ધિ યોજનાઓ",
      pricingDesc: "અમારા કામની ગુણવત્તાનો અનુભવ કરવા માટે તમારી <strong className=\"text-orange-500\">વિશેષ મફત અજમાયશ</strong> મેળવો.",
      ctaTitle: "શું તમે {city} માં તમારો વ્યવસાય વધારવા માટે તૈયાર છો?",
      ctaDesc: "ચાલો એક એવી વ્યૂહરચના બનાવીએ જે તમને {city} માં તમારા સ્પર્ધકોથી આગળ રાખે.",
      ctaBtn: "તમારું મફત વ્યૂહરચના સત્ર બુક કરો"
    }
  }, lang);

  const t2 = getLangDict({
    en: {
      title: "Why Businesses in {city} Trust Arventa Ventures",
      p1: "As a leading digital marketing agency serving <strong>{city}</strong>, we understand that generic marketing templates do not work. The local business landscape is highly competitive, and standing out requires a tailored, aggressive approach.",
      p2: "Our team deeply analyzes the market dynamics in {city} to build scalable revenue engines. Whether you are a local storefront, a B2B service provider, or an e-commerce brand operating out of {city}, we craft hyper-targeted campaigns designed to maximize your Return on Ad Spend (ROAS) and skyrocket your organic search rankings.",
      p3: "We don't just generate clicks; we generate qualified leads and measurable sales. We are the trusted SEO and digital marketing experts you need to outperform your competitors in {city}."
    },
    bn: {
      title: "{city} এর ব্যবসাগুলো কেন Arventa Ventures কে বিশ্বাস করে",
      p1: "<strong>{city}</strong> তে লিডিং ডিজিটাল মার্কেটিং এজেন্সি হিসেবে আমরা বুঝি যে সাধারণ টেমপ্লেট কাজ করে না। স্থানীয় বাজার অত্যন্ত প্রতিযোগিতামূলক, তাই আলাদা হতে বিশেষ এবং শক্তিশালী পদ্ধতির প্রয়োজন।",
      p2: "আমাদের টিম {city} এর মার্কেট ডাইনামিকস বিশ্লেষণ করে রেভিনিউ বাড়াতে সাহায্য করে। আপনি যদি {city} এর স্থানীয় দোকান, B2B সার্ভিস বা ই-কমার্স ব্র্যান্ড হন, আমরা আপনার ROAS বাড়াতে এবং সার্চ র‍্যাঙ্কিংয়ে শীর্ষে নিতে হাইপার-টার্গেটেড ক্যাম্পেইন তৈরি করি।",
      p3: "আমরা শুধু ক্লিক নয়, কোয়ালিফাইড লিড এবং সেলস জেনারেট করি। {city} তে আপনার প্রতিযোগীদের পরাস্ত করতে আমরাই আপনার বিশ্বস্ত SEO এবং ডিজিটাল মার্কেটিং এক্সপার্ট।"
    },
    hi: {
      title: "{city} में व्यवसाय Arventa Ventures पर क्यों भरोसा करते हैं",
      p1: "<strong>{city}</strong> में एक प्रमुख डिजिटल मार्केटिंग एजेंसी के रूप में, हम समझते हैं कि सामान्य मार्केटिंग टेम्प्लेट काम नहीं करते। स्थानीय व्यापार अत्यधिक प्रतिस्पर्धी है, और अलग दिखने के लिए एक विशेष और आक्रामक दृष्टिकोण की आवश्यकता होती है।",
      p2: "हमारी टीम {city} में बाजार की गतिशीलता का गहराई से विश्लेषण करती है। चाहे आप {city} में एक स्थानीय स्टोर हों, B2B सेवा हों, या ई-कॉमर्स ब्रांड हों, हम आपके ROAS को अधिकतम करने और आपकी सर्च रैंकिंग को ऊपर ले जाने के लिए हाइपर-लक्षित अभियान बनाते हैं।",
      p3: "हम केवल क्लिक नहीं लाते; हम योग्य लीड और मापने योग्य बिक्री उत्पन्न करते हैं। हम वे विश्वसनीय SEO और डिजिटल मार्केटिंग विशेषज्ञ हैं जिनकी आपको {city} में अपने प्रतिस्पर्धियों को पछाड़ने की आवश्यकता है।"
    },
    te: {
      title: "{city} లో వ్యాపారాలు Arventa Ventures ను ఎందుకు విశ్వసిస్తాయి",
      p1: "<strong>{city}</strong> లో ప్రముఖ డిజిటల్ మార్కెటింగ్ ఏజెన్సీగా, సాధారణ టెంప్లేట్‌లు పని చేయవని మాకు తెలుసు. స్థానిక వ్యాపారం అత్యంత పోటీతత్వంతో ఉంటుంది మరియు ప్రత్యేకంగా నిలబడటానికి అనుకూలమైన విధానం అవసరం.",
      p2: "స్థానిక మార్కెట్ గతిశీలతను మా బృందం లోతుగా విశ్లేషిస్తుంది. మీరు {city} లో స్థానిక స్టోర్ అయినా, B2B సర్వీస్ ప్రొవైడర్ అయినా లేదా ఈ-కామర్స్ బ్రాండ్ అయినా, మీ ROAS ను పెంచడానికి మేము ప్రత్యేక ప్రచారాలను రూపొందిస్తాము.",
      p3: "మేము కేవలం క్లిక్‌లను మాత్రమే తీసుకురాము; మేము అర్హత కలిగిన లీడ్స్ మరియు అమ్మకాలను ఉత్పత్తి చేస్తాము. {city} లో మీ పోటీదారులను అధిగమించడానికి మీకు అవసరమైన విశ్వసనీయ SEO నిపుణులం మేమే."
    },
    ta: {
      title: "{city} இல் உள்ள வணிகங்கள் ஏன் Arventa Ventures ஐ நம்புகின்றன",
      p1: "<strong>{city}</strong> இல் ஒரு முன்னணி டிஜிட்டல் மார்க்கெட்டிங் ஏஜென்சியாக, சாதாரண மார்க்கெட்டிங் டெம்ப்ளேட்கள் வேலை செய்யாது என்பதை நாங்கள் புரிந்துகொள்கிறோம். தனித்து நிற்க ஒரு சிறப்பு அணுகுமுறை தேவை.",
      p2: "எங்கள் குழு {city} இல் உள்ள சந்தை இயக்கவியலை ஆழமாக பகுப்பாய்வு செய்கிறது. நீங்கள் {city} இல் உள்ள ஒரு உள்ளூர் கடையாக இருந்தாலும், B2B சேவையாக இருந்தாலும் அல்லது இ-காமர்ஸ் பிராண்டாக இருந்தாலும், உங்கள் ROAS ஐ அதிகரிக்க நாங்கள் உதவுகிறோம்.",
      p3: "நாங்கள் கிளிக்குகளை மட்டும் உருவாக்குவதில்லை; தகுதிவாய்ந்த லீட்கள் மற்றும் விற்பனையை உருவாக்குகிறோம். {city} இல் உங்கள் போட்டியாளர்களை விஞ்ச உங்களுக்குத் தேவையான நம்பகமான SEO நிபுணர்கள் நாங்கள்."
    },
    mr: {
      title: "{city} मधील व्यवसाय Arventa Ventures वर का विश्वास ठेवतात",
      p1: "<strong>{city}</strong> मधील एक आघाडीची डिजिटल मार्केटिंग एजन्सी म्हणून, आम्हाला समजते की सामान्य मार्केटिंग टेम्पलेट्स काम करत नाहीत. स्थानिक व्यवसायात खूप स्पर्धा असते आणि वेगळे दिसण्यासाठी विशेष दृष्टिकोनाची आवश्यकता असते.",
      p2: "आमची टीम {city} मधील बाजारपेठेच्या गतिशीलतेचे सखोल विश्लेषण करते. तुम्ही {city} मधील स्थानिक स्टोअर, B2B सेवा किंवा ई-कॉमर्स ब्रँड असलात तरी, तुमचा ROAS वाढवण्यासाठी आम्ही विशेष मोहीम राबवतो.",
      p3: "आम्ही केवळ क्लिक्स आणत नाही; आम्ही पात्र लीड्स आणि मोजता येणारी विक्री निर्माण करतो. {city} मध्ये तुमच्या प्रतिस्पर्ध्यांवर मात करण्यासाठी तुम्हाला आवश्यक असलेले आम्ही विश्वसनीय SEO तज्ञ आहोत."
    },
    gu: {
      title: "{city} માં વ્યવસાયો Arventa Ventures પર શા માટે વિશ્વાસ કરે છે",
      p1: "<strong>{city}</strong> માં એક અગ્રણી ડિજિટલ માર્કેટિંગ એજન્સી તરીકે, અમે સમજીએ છીએ કે સામાન્ય માર્કેટિંગ ટેમ્પ્લેટ્સ કામ કરતા નથી. અલગ દેખાવા માટે વિશેષ અભિગમની જરૂર છે.",
      p2: "અમારી ટીમ {city} માં બજારની ગતિશીલતાનું ઊંડાણપૂર્વક વિશ્લેષણ કરે છે. ભલે તમે {city} માં સ્થાનિક સ્ટોર, B2B સેવા અથવા ઈ-કોમર્સ બ્રાન્ડ હોવ, અમે તમારા ROAS ને વધારવા માટે વિશેષ ઝુંબેશ ચલાવીએ છીએ.",
      p3: "અમે માત્ર ક્લિક્સ લાવતા નથી; અમે લાયક લીડ્સ અને વેચાણ પેદા કરીએ છીએ. અમે વિશ્વસનીય SEO નિષ્ણાતો છીએ જે તમને {city} માં તમારા સ્પર્ધકોને પાછળ છોડી દેવા માટે જરૂરી છે."
    }
  }, lang);


  
  
  const tServices = getLangDict({
    en: {
      s1: { title: "Local SEO in {city}", desc: "Rank at the top of Google search results when potential customers in {city} look for your products or services. We optimize your Google Business Profile, handle technical SEO, and build authoritative local backlinks.", link: "Explore SEO Services" },
      s2: { title: "Paid Advertising (PPC)", desc: "Reach the exact demographics you need within specific radiuses of {city}. Our Meta Ads and Google Ads campaigns are built to drive high-intent leads and sales at the lowest possible CPA.", link: "Explore Ads Services" },
      s3: { title: "Social Media Marketing", desc: "Build a loyal community around your brand in {city}. We create high-retention short-form video content and manage your presence across Instagram, TikTok, and LinkedIn to foster deep engagement.", link: "Explore Social Media" },
      s4: { title: "Web Design & Conversion", desc: "Your website is your digital storefront in {city}. We build blazing-fast, SEO-optimized, and highly converting landing pages that turn your local traffic into paying customers.", link: "Build Your Website" },
      s5: { title: "Content Marketing", desc: "Engage your {city} audience with compelling, value-driven content. From authoritative blog posts to persuasive email sequences, we craft narratives that convert.", link: "Explore Content Marketing" },
      s6: { title: "Ready for Growth?", desc: "Get a custom growth strategy for your business in {city}.", link: "Get Started" }
    },
    bn: {
      s1: { title: "{city} তে লোকাল SEO", desc: "গুগল সার্চে শীর্ষে থাকুন। আমরা আপনার গুগল বিজনেস প্রোফাইল, টেকনিক্যাল এসইও এবং লোকাল ব্যাকলিংক তৈরি করি।", link: "SEO সার্ভিস দেখুন" },
      s2: { title: "পেইড অ্যাডভার্টাইজিং (PPC)", desc: "{city} তে আপনার টার্গেট কাস্টমারদের কাছে পৌঁছান। আমাদের Meta এবং Google Ads ক্যাম্পেইনগুলো সবচেয়ে কম খরচে সেলস বাড়াতে তৈরি।", link: "অ্যাড সার্ভিস দেখুন" },
      s3: { title: "সোশ্যাল মিডিয়া মার্কেটিং", desc: "{city} তে আপনার ব্র্যান্ডের জন্য বিশ্বস্ত কমিউনিটি তৈরি করুন। আমরা Instagram, TikTok এবং LinkedIn এর জন্য আকর্ষণীয় কন্টেন্ট তৈরি করি।", link: "সোশ্যাল মিডিয়া দেখুন" },
      s4: { title: "ওয়েব ডিজাইন ও কনভার্শন", desc: "আপনার ওয়েবসাইট হলো {city} তে আপনার ডিজিটাল স্টোরফ্রন্ট। আমরা দ্রুত এবং এসইও-অপ্টিমাইজড ল্যান্ডিং পেজ তৈরি করি।", link: "ওয়েবসাইট তৈরি করুন" },
      s5: { title: "কন্টেন্ট মার্কেটিং", desc: "আকর্ষণীয় কন্টেন্ট দিয়ে {city} এর কাস্টমারদের মনোযোগ আকর্ষণ করুন। আমরা এমন ব্লগ এবং ইমেইল তৈরি করি যা সেলস বাড়ায়।", link: "কন্টেন্ট মার্কেটিং দেখুন" },
      s6: { title: "গ্রোথের জন্য প্রস্তুত?", desc: "{city} তে আপনার ব্যবসার জন্য একটি কাস্টম গ্রোথ স্ট্র্যাটেজি পান।", link: "শুরু করুন" }
    },
    hi: {
      s1: { title: "{city} में लोकल SEO", desc: "Google सर्च में शीर्ष पर रहें। हम आपकी Google Business Profile, तकनीकी SEO और स्थानीय बैकलिंक्स को ऑप्टिमाइज़ करते हैं।", link: "SEO सेवाएं देखें" },
      s2: { title: "पेड एडवरटाइजिंग (PPC)", desc: "{city} में अपने लक्षित ग्राहकों तक पहुँचें। हमारे Meta और Google Ads अभियान सबसे कम CPA पर बिक्री बढ़ाने के लिए बनाए गए हैं।", link: "Ads सेवाएं देखें" },
      s3: { title: "सोशल मीडिया मार्केटिंग", desc: "{city} में अपने ब्रांड के लिए एक वफादार समुदाय बनाएं। हम Instagram, TikTok और LinkedIn के लिए आकर्षक कंटेंट बनाते हैं।", link: "सोशल मीडिया देखें" },
      s4: { title: "वेब डिजाइन और रूपांतरण", desc: "आपकी वेबसाइट {city} में आपका डिजिटल स्टोरफ्रंट है। हम तेज़ और SEO-ऑप्टिमाइज़्ड लैंडिंग पेज बनाते हैं।", link: "वेबसाइट बनाएं" },
      s5: { title: "कंटेंट मार्केटिंग", desc: "आकर्षक कंटेंट के साथ {city} के ग्राहकों का ध्यान आकर्षित करें। हम ऐसे ब्लॉग और ईमेल बनाते हैं जो बिक्री बढ़ाते हैं।", link: "कंटेंट मार्केटिंग देखें" },
      s6: { title: "विकास के लिए तैयार हैं?", desc: "{city} में अपने व्यवसाय के लिए एक कस्टम ग्रोथ रणनीति प्राप्त करें।", link: "शुरू करें" }
    },
    te: {
      s1: { title: "{city} లో స్థానిక SEO", desc: "Google శోధనలో అగ్రస్థానంలో ఉండండి. మేము మీ Google బిజినెస్ ప్రొఫైల్, టెక్నికల్ SEO మరియు బ్యాక్‌లింక్‌లను ఆప్టిమైజ్ చేస్తాము.", link: "SEO సేవలను చూడండి" },
      s2: { title: "చెల్లింపు ప్రకటనలు (PPC)", desc: "{city} లో మీ లక్ష్య ప్రేక్షకులను చేరుకోండి. మా Meta మరియు Google Ads ప్రచారాలు తక్కువ ఖర్చుతో విక్రయాలను పెంచడానికి రూపొందించబడ్డాయి.", link: "Ads సేవలను చూడండి" },
      s3: { title: "సోషల్ మీడియా మార్కెటింగ్", desc: "{city} లో మీ బ్రాండ్ చుట్టూ నమ్మకమైన కమ్యూనిటీని నిర్మించండి. మేము ఆకర్షణీయమైన వీడియో కంటెంట్‌ను సృష్టిస్తాము.", link: "సోషల్ మీడియాను చూడండి" },
      s4: { title: "వెబ్ డిజైన్ & మార్పిడి", desc: "మీ వెబ్‌సైట్ {city} లో మీ డిజిటల్ స్టోర్‌ఫ్రంట్. మేము వేగవంతమైన మరియు SEO-ఆప్టిమైజ్ చేయబడిన పేజీలను నిర్మిస్తాము.", link: "వెబ్‌సైట్‌ను నిర్మించండి" },
      s5: { title: "కంటెంట్ మార్కెటింగ్", desc: "ఆకర్షణీయమైన కంటెంట్‌తో {city} ప్రేక్షకులను ఆకర్షించండి. విక్రయాలను పెంచే బ్లాగులు మరియు ఇమెయిల్‌లను మేము సృష్టిస్తాము.", link: "కంటెంట్ మార్కెటింగ్‌ను చూడండి" },
      s6: { title: "అభివృద్ధికి సిద్ధంగా ఉన్నారా?", desc: "{city} లో మీ వ్యాపారం కోసం అనుకూల వ్యూహాన్ని పొందండి.", link: "ప్రారంభించండి" }
    },
    ta: {
      s1: { title: "{city} இல் உள்ளூர் SEO", desc: "கூகிள் தேடலில் முதலிடத்தில் இருங்கள். நாங்கள் உங்கள் கூகிள் வணிக சுயவிவரம் மற்றும் SEO ஐ மேம்படுத்துகிறோம்.", link: "SEO சேவைகளை ஆராயுங்கள்" },
      s2: { title: "கட்டண விளம்பரம் (PPC)", desc: "{city} இல் உங்கள் இலக்கு பார்வையாளர்களை அடையுங்கள். குறைந்த செலவில் விற்பனையை அதிகரிக்க எங்கள் Ads பிரச்சாரங்கள் உருவாக்கப்பட்டுள்ளன.", link: "விளம்பர சேவைகளை ஆராயுங்கள்" },
      s3: { title: "சமூக ஊடக மார்க்கெட்டிங்", desc: "{city} இல் உங்கள் பிராண்டைச் சுற்றி ஒரு விசுவாசமான சமூகத்தை உருவாக்குங்கள். ஈர்க்கக்கூடிய உள்ளடக்கத்தை நாங்கள் உருவாக்குகிறோம்.", link: "சமூக ஊடகங்களை ஆராயுங்கள்" },
      s4: { title: "வலை வடிவமைப்பு", desc: "உங்கள் இணையதளம் {city} இல் உங்கள் டிஜிட்டல் ஸ்டோர் ஃபிரண்ட். வேகமான வலைப்பக்கங்களை நாங்கள் உருவாக்குகிறோம்.", link: "இணையதளத்தை உருவாக்குங்கள்" },
      s5: { title: "உள்ளடக்க மார்க்கெட்டிங்", desc: "ஈர்க்கக்கூடிய உள்ளடக்கத்துடன் {city} பார்வையாளர்களை ஈர்க்கவும். விற்பனையை அதிகரிக்கும் வலைப்பதிவுகளை நாங்கள் உருவாக்குகிறோம்.", link: "உள்ளடக்க மார்க்கெட்டிங்கை ஆராயுங்கள்" },
      s6: { title: "வளர்ச்சிக்கு தயாரா?", desc: "{city} இல் உங்கள் வணிகத்திற்கான தனிப்பயன் வளர்ச்சி உத்தியைப் பெறுங்கள்.", link: "தொடங்குங்கள்" }
    },
    mr: {
      s1: { title: "{city} मधील स्थानिक SEO", desc: "Google शोध मध्ये शीर्षस्थानी रहा. आम्ही तुमचे Google व्यवसाय प्रोफाइल आणि SEO ऑप्टिमाइझ करतो.", link: "SEO सेवा एक्सप्लोर करा" },
      s2: { title: "पेड ॲडव्हर्टायझिंग (PPC)", desc: "{city} मध्ये तुमच्या लक्ष्यित ग्राहकांपर्यंत पोहोचा. आमचे Ads मोहिमा कमी खर्चात विक्री वाढवण्यासाठी डिझाइन केले आहेत.", link: "Ads सेवा एक्सप्लोर करा" },
      s3: { title: "सोशल मीडिया मार्केटिंग", desc: "{city} मध्ये तुमच्या ब्रँडभोवती एक निष्ठावान समुदाय तयार करा. आम्ही आकर्षक सामग्री तयार करतो.", link: "सोशल मीडिया एक्सप्लोर करा" },
      s4: { title: "वेब डिझाइन", desc: "तुमची वेबसाइट {city} मधील तुमचे डिजिटल स्टोअरफ्रंट आहे. आम्ही वेगवान वेब पृष्ठे तयार करतो.", link: "वेबसाइट तयार करा" },
      s5: { title: "कंटेंट मार्केटिंग", desc: "आकर्षक सामग्रीसह {city} मधील ग्राहकांना आकर्षित करा. आम्ही विक्री वाढवणारे ब्लॉग तयार करतो.", link: "कंटेंट मार्केटिंग एक्सप्लोर करा" },
      s6: { title: "विकासासाठी तयार आहात?", desc: "{city} मधील तुमच्या व्यवसायासाठी सानुकूल धोरण मिळवा.", link: "सुरू करा" }
    },
    gu: {
      s1: { title: "{city} માં સ્થાનિક SEO", desc: "Google શોધમાં ટોચ પર રહો. અમે તમારી Google વ્યવસાય પ્રોફાઇલ અને SEO ને ઑપ્ટિમાઇઝ કરીએ છીએ.", link: "SEO સેવાઓનું અન્વેષણ કરો" },
      s2: { title: "પેઇડ એડવર્ટાઇઝિંગ (PPC)", desc: "{city} માં તમારા લક્ષિત ગ્રાહકો સુધી પહોંચો. અમારી Ads ઝુંબેશ ઓછા ખર્ચે વેચાણ વધારવા માટે ડિઝાઇન કરવામાં આવી છે.", link: "Ads સેવાઓનું અન્વેષણ કરો" },
      s3: { title: "સોશિયલ મીડિયા માર્કેટિંગ", desc: "{city} માં તમારી બ્રાન્ડની આસપાસ એક વફાદાર સમુદાય બનાવો. અમે આકર્ષક સામગ્રી બનાવીએ છીએ.", link: "સોશિયલ મીડિયાનું અન્વેષણ કરો" },
      s4: { title: "વેબ ડિઝાઇન", desc: "તમારી વેબસાઇટ {city} માં તમારું ડિજિટલ સ્ટોરફ્રન્ટ છે. અમે ઝડપી વેબ પેજ બનાવીએ છીએ.", link: "વેબસાઇટ બનાવો" },
      s5: { title: "કન્ટેન્ટ માર્કેટિંગ", desc: "આકર્ષક સામગ્રી સાથે {city} ના ગ્રાહકોને આકર્ષિત કરો. અમે વેચાણ વધારતા બ્લોગ્સ બનાવીએ છીએ.", link: "કન્ટેન્ટ માર્કેટિંગનું અન્વેષણ કરો" },
      s6: { title: "વિકાસ માટે તૈયાર છો?", desc: "{city} માં તમારા વ્યવસાય માટે કસ્ટમ વ્યૂહરચના મેળવો.", link: "શરૂઆત કરો" }
    }
  }, lang);

  const tTestimonial = {
    en: {
      title: "Why We Stand Out in {city}",
      desc: "Unlike traditional agencies that focus purely on vanity metrics like 'likes' or 'impressions,' our primary metric of success is your revenue growth. We combine technical excellence with elite creative strategy.",
      b1: "Data-driven decisions, zero guesswork",
      b2: "Full-funnel marketing expertise",
      b3: "Transparent reporting and analytics",
      b4: "Dedicated account management for local clients",
      s1Val: "80%+", s1Title: "Average ROI Increase", s1Desc: "For local campaigns in competitive markets.",
      s2Val: "Page 1", s2Title: "Google Rankings", s2Desc: "Consistent top placements for highly competitive local keywords."
    },
    bn: {
      title: "{city} তে আমরা কেন আলাদা",
      desc: "অন্যান্য এজেন্সি যেখানে শুধু 'লাইক' বা 'ইম্প্রেশন'-এ ফোকাস করে, সেখানে আমাদের প্রধান লক্ষ্য হলো আপনার রেভিনিউ বাড়ানো। আমরা প্রযুক্তিগত দক্ষতার সাথে সেরা ক্রিয়েটিভ স্ট্র্যাটেজির সমন্বয় করি।",
      b1: "ডেটা-চালিত সিদ্ধান্ত, কোনো অনুমান নয়",
      b2: "ফুল-ফানেল মার্কেটিং এক্সপার্টিজ",
      b3: "স্বচ্ছ রিপোর্টিং এবং অ্যানালিটিক্স",
      b4: "লোকাল ক্লায়েন্টদের জন্য ডেডিকেটেড অ্যাকাউন্ট ম্যানেজমেন্ট",
      s1Val: "৮০%+", s1Title: "গড় ROI বৃদ্ধি", s1Desc: "প্রতিযোগিতামূলক বাজারে লোকাল ক্যাম্পেইনের জন্য।",
      s2Val: "১ম পেজ", s2Title: "গুগল র‍্যাঙ্কিং", s2Desc: "কঠিন লোকাল কিওয়ার্ডের জন্য নিয়মিত শীর্ষ অবস্থান।"
    },
    hi: {
      title: "हम {city} में अलग क्यों हैं",
      desc: "पारंपरिक एजेंसियों के विपरीत जो केवल 'लाइक' या 'इंप्रेशन' पर ध्यान केंद्रित करती हैं, हमारी सफलता का प्राथमिक मीट्रिक आपके राजस्व में वृद्धि है।",
      b1: "डेटा-संचालित निर्णय, कोई अनुमान नहीं",
      b2: "पूर्ण-फ़नल मार्केटिंग विशेषज्ञता",
      b3: "पारदर्शी रिपोर्टिंग और एनालिटिक्स",
      b4: "स्थानीय ग्राहकों के लिए समर्पित खाता प्रबंधन",
      s1Val: "80%+", s1Title: "औसत ROI वृद्धि", s1Desc: "प्रतिस्पर्धी बाजारों में स्थानीय अभियानों के लिए।",
      s2Val: "पेज 1", s2Title: "Google रैंकिंग", s2Desc: "प्रतिस्पर्धी स्थानीय कीवर्ड के लिए शीर्ष स्थान।"
    },
    te: {
      title: "{city} లో మేము ఎందుకు ప్రత్యేకంగా ఉంటాము",
      desc: "సాంప్రదాయ ఏజెన్సీల వలె కాకుండా, మా ప్రధాన లక్ష్యం మీ ఆదాయ వృద్ధి. మేము సాంకేతిక నైపుణ్యాన్ని ఉత్తమ సృజనాత్మక వ్యూహంతో మిళితం చేస్తాము.",
      b1: "డేటా ఆధారిత నిర్ణయాలు, ఊహలు లేవు",
      b2: "పూర్తి-ఫన్నెల్ మార్కెటింగ్ నైపుణ్యం",
      b3: "పారదర్శక నివేదన మరియు విశ్లేషణలు",
      b4: "స్థానిక ఖాతాదారుల కోసం అంకితమైన ఖాతా నిర్వహణ",
      s1Val: "80%+", s1Title: "సగటు ROI పెరుగుదల", s1Desc: "పోటీ మార్కెట్లలో స్థానిక ప్రచారాల కోసం.",
      s2Val: "పేజీ 1", s2Title: "Google ర్యాంకింగ్‌లు", s2Desc: "పోటీ స్థానిక కీవర్డ్‌ల కోసం అగ్ర స్థానాలు."
    },
    ta: {
      title: "{city} இல் நாங்கள் ஏன் தனித்து நிற்கிறோம்",
      desc: "பாரம்பரிய ஏஜென்சிகளைப் போலல்லாமல், எங்கள் முக்கிய குறிக்கோள் உங்கள் வருவாய் வளர்ச்சி. சிறந்த தொழில்நுட்ப நிபுணத்துவத்தை ஆக்கபூர்வமான உத்தியுடன் இணைக்கிறோம்.",
      b1: "தரவு உந்துதல் முடிவுகள்",
      b2: "முழு புனல் சந்தைப்படுத்தல் நிபுணத்துவம்",
      b3: "வெளிப்படையான அறிக்கையிடல் மற்றும் பகுப்பாய்வு",
      b4: "உள்ளூர் வாடிக்கையாளர்களுக்கான பிரத்யேக கணக்கு மேலாண்மை",
      s1Val: "80%+", s1Title: "சராசரி ROI அதிகரிப்பு", s1Desc: "போட்டி சந்தைகளில் உள்ளூர் பிரச்சாரங்களுக்கு.",
      s2Val: "பக்கம் 1", s2Title: "Google தரவரிசை", s2Desc: "உள்ளூர் முக்கிய வார்த்தைகளுக்கான சிறந்த இடங்கள்."
    },
    mr: {
      title: "आम्ही {city} मध्ये वेगळे का आहोत",
      desc: "पारंपारिक एजन्सींच्या विपरीत, आमचे प्राथमिक लक्ष्य तुमच्या महसुलात वाढ करणे आहे. आम्ही सर्वोत्तम तांत्रिक कौशल्य आणि सर्जनशील धोरण एकत्र करतो.",
      b1: "डेटा-आधारित निर्णय, कोणतेही अनुमान नाही",
      b2: "फुल-फनेल मार्केटिंग कौशल्य",
      b3: "पारदर्शक अहवाल आणि विश्लेषण",
      b4: "स्थानिक ग्राहकांसाठी समर्पित खाते व्यवस्थापन",
      s1Val: "80%+", s1Title: "सरासरी ROI वाढ", s1Desc: "स्पर्धात्मक बाजारपेठेत स्थानिक मोहिमांसाठी.",
      s2Val: "पृष्ठ 1", s2Title: "Google रँकिंग", s2Desc: "स्पर्धात्मक स्थानिक कीवर्डसाठी शीर्ष स्थान."
    },
    gu: {
      title: "અમે {city} માં કેમ અલગ છીએ",
      desc: "પરંપરાગત એજન્સીઓથી વિપરીત, અમારું પ્રાથમિક લક્ષ્ય તમારી આવક વધારવાનું છે. અમે શ્રેષ્ઠ તકનીકી કુશળતા અને સર્જનાત્મક વ્યૂહરચનાને જોડીએ છીએ.",
      b1: "ડેટા-આધારિત નિર્ણયો, કોઈ અનુમાન નહીં",
      b2: "ફુલ-ફનલ માર્કેટિંગ કુશળતા",
      b3: "પારદર્શક રિપોર્ટિંગ અને એનાલિટિક્સ",
      b4: "સ્થાનિક ગ્રાહકો માટે સમર્પિત એકાઉન્ટ મેનેજમેન્ટ",
      s1Val: "80%+", s1Title: "સરેરાશ ROI વધારો", s1Desc: "સ્પર્ધાત્મક બજારોમાં સ્થાનિક ઝુંબેશ માટે.",
      s2Val: "પૃષ્ઠ 1", s2Title: "Google રેન્કિંગ", s2Desc: "સ્પર્ધાત્મક સ્થાનિક કીવર્ડ્સ માટે ટોચનું સ્થાન."
    }
  }[lang];

  const tSeoContent = getLangDict({
    en: {
      h2: "Best Digital Marketing Company in {city}",
      p1: "Are you searching for the <strong>best digital marketing company in {city}</strong> to take your business to the next level? Look no further! At Arventa Ventures, we are proud to be recognized as the <strong>top digital marketing agency in {city}</strong>, helping local businesses, startups, and enterprise brands achieve explosive growth.",
      p2: "In today's competitive digital landscape, you need a partner who understands the local {city} market inside out. Whether you need a <strong>digital marketing consultant in {city}</strong>, a reliable <strong>SEO agency in {city}</strong>, or comprehensive <strong>social media marketing services in {city}</strong>, our team of experts is here to deliver high-impact, measurable results. We don't just bring traffic; we bring targeted customers who are ready to buy.",
      h3: "Why We Are the #1 Choice for Digital Marketing in {city}",
      l1_title: "Top SEO Company in {city}:", l1_desc: "Be the first choice when customers search for your products. We dominate local SEO, technical SEO, and organic search rankings to keep you ahead of competitors.",
      l2_title: "Best Performance Advertising Agency:", l2_desc: "Maximize your ROI with targeted Meta Ads, Facebook Ads, and Google Ads management tailored specifically for the {city} demographic.",
      l3_title: "Expert Social Media Marketing Company in {city}:", l3_desc: "We create viral, engaging, and brand-building content that turns your followers into loyal brand advocates.",
      l4_title: "Premium Web Design & Development:", l4_desc: "We build fast, beautiful, and conversion-optimized websites that serve as your best 24/7 salesperson in {city}.",
      p3: "Choosing the <strong>best digital marketing agency in {city}</strong> can completely transform your business trajectory. We are passionate about what we do, and we treat your business like our own. Our digital marketing strategies are completely custom-tailored to fit your unique goals, budget, and industry requirements.",
      p4: "Ready to dominate the market? Partner with the <strong>leading digital marketing experts in {city}</strong> today. Whether you want to boost your local foot traffic, skyrocket your online sales, or build a recognizable brand, Arventa Ventures is your ultimate growth partner.",
      box1: "Dedicated Support", box2: "Transparency & Results"
    },
    bn: {
      h2: "{city} এর সেরা ডিজিটাল মার্কেটিং কোম্পানি",
      p1: "আপনার ব্যবসাকে পরবর্তী স্তরে নিয়ে যাওয়ার জন্য কি <strong>{city} এর সেরা ডিজিটাল মার্কেটিং কোম্পানি</strong> খুঁজছেন? আর খুঁজতে হবে না! Arventa Ventures এ, আমরা <strong>{city} এর টপ ডিজিটাল মার্কেটিং এজেন্সি</strong> হিসেবে পরিচিত, যা স্থানীয় ব্যবসা, স্টার্টআপ এবং এন্টারপ্রাইজ ব্র্যান্ডগুলোকে ব্যাপক গ্রোথ অর্জনে সহায়তা করে।",
      p2: "আজকের প্রতিযোগিতামূলক ডিজিটাল যুগে, আপনার এমন একজন পার্টনার প্রয়োজন যে {city} এর মার্কেট ভালো বোঝে। আপনার <strong>{city} তে ডিজিটাল মার্কেটিং কনসালট্যান্ট</strong>, একটি নির্ভরযোগ্য <strong>SEO এজেন্সি</strong> বা <strong>সোশ্যাল মিডিয়া মার্কেটিং সার্ভিস</strong> প্রয়োজন হোক না কেন, আমাদের এক্সপার্ট টিম হাই-ইমপ্যাক্ট ফলাফল দিতে প্রস্তুত।",
      h3: "কেন আমরা {city} তে ডিজিটাল মার্কেটিং এর জন্য #১ চয়েস?",
      l1_title: "{city} এর টপ SEO কোম্পানি:", l1_desc: "কাস্টমাররা যখন সার্চ করে তখন প্রথম অপশন হিসেবে থাকুন। আমরা লোকাল এবং টেকনিক্যাল SEO তে আধিপত্য বিস্তার করি।",
      l2_title: "বেস্ট পারফরম্যান্স অ্যাডভার্টাইজিং এজেন্সি:", l2_desc: "{city} এর ডেমোগ্রাফিকের উপর ভিত্তি করে টারগেটেড Meta Ads এবং Google Ads দিয়ে আপনার ROI সর্বোচ্চ করুন।",
      l3_title: "এক্সপার্ট সোশ্যাল মিডিয়া মার্কেটিং:", l3_desc: "আমরা ভাইরাল এবং এনগেজিং কন্টেন্ট তৈরি করি যা আপনার ফলোয়ারদের বিশ্বস্ত কাস্টমারে পরিণত করে।",
      l4_title: "প্রিমিয়াম ওয়েব ডিজাইন ও ডেভেলপমেন্ট:", l4_desc: "আমরা দ্রুত এবং কনভার্শন-অপ্টিমাইজড ওয়েবসাইট তৈরি করি যা আপনার ২৪/৭ সেলসপারসন হিসেবে কাজ করে।",
      p3: "<strong>{city} এর সেরা ডিজিটাল মার্কেটিং এজেন্সি</strong> নির্বাচন করা আপনার ব্যবসাকে পুরোপুরি বদলে দিতে পারে। আমরা সম্পূর্ণ কাস্টম স্ট্র্যাটেজি প্রদান করি।",
      p4: "মার্কেট ডমিনেট করতে প্রস্তুত? আজই <strong>{city} এর লিডিং ডিজিটাল মার্কেটিং এক্সপার্টদের</strong> সাথে যুক্ত হোন।",
      box1: "ডেডিকেটেড সাপোর্ট", box2: "স্বচ্ছতা এবং ফলাফল"
    },
    hi: {
      h2: "{city} में सर्वश्रेष्ठ डिजिटल मार्केटिंग कंपनी",
      p1: "क्या आप अपने व्यवसाय को अगले स्तर पर ले जाने के लिए <strong>{city} में सर्वश्रेष्ठ डिजिटल मार्केटिंग कंपनी</strong> की तलाश कर रहे हैं? Arventa Ventures को <strong>{city} में शीर्ष डिजिटल मार्केटिंग एजेंसी</strong> के रूप में मान्यता प्राप्त होने पर गर्व है।",
      p2: "आज के प्रतिस्पर्धी परिदृश्य में, आपको एक ऐसे भागीदार की आवश्यकता है जो {city} के बाजार को समझता हो। चाहे आपको एक <strong>SEO एजेंसी</strong>, या <strong>सोशल मीडिया मार्केटिंग सेवाओं</strong> की आवश्यकता हो, हमारी विशेषज्ञ टीम उच्च-प्रभाव वाले परिणाम देने के लिए यहाँ है।",
      h3: "हम {city} में डिजिटल मार्केटिंग के लिए #1 विकल्प क्यों हैं",
      l1_title: "{city} में शीर्ष SEO कंपनी:", l1_desc: "जब ग्राहक खोजें तो पहली पसंद बनें। हम आपको प्रतिस्पर्धियों से आगे रखने के लिए स्थानीय SEO में हावी हैं।",
      l2_title: "सर्वश्रेष्ठ प्रदर्शन विज्ञापन एजेंसी:", l2_desc: "{city} जनसांख्यिकी के लिए लक्षित Meta Ads और Google Ads के साथ अपने ROI को अधिकतम करें।",
      l3_title: "विशेषज्ञ सोशल मीडिया मार्केटिंग:", l3_desc: "हम आकर्षक और ब्रांड-निर्माण सामग्री बनाते हैं।",
      l4_title: "प्रीमियम वेब डिज़ाइन:", l4_desc: "हम तेज़ और रूपांतरण-अनुकूलित वेबसाइटें बनाते हैं।",
      p3: "<strong>{city} में सर्वश्रेष्ठ डिजिटल मार्केटिंग एजेंसी</strong> चुनना आपके व्यवसाय को पूरी तरह से बदल सकता है।",
      p4: "बाजार पर हावी होने के लिए तैयार हैं? आज ही <strong>{city} में अग्रणी डिजिटल मार्केटिंग विशेषज्ञों</strong> के साथ भागीदार बनें।",
      box1: "समर्पित समर्थन", box2: "पारदर्शिता और परिणाम"
    },
    te: {
      h2: "{city} లో ఉత్తమ డిజిటల్ మార్కెటింగ్ కంపెనీ",
      p1: "మీ వ్యాపారాన్ని తదుపరి స్థాయికి తీసుకెళ్లడానికి మీరు <strong>{city} లో ఉత్తమ డిజిటల్ మార్కెటింగ్ కంపెనీ</strong> కోసం చూస్తున్నారా? Arventa Ventures అగ్రశ్రేణి ఏజెన్సీగా గుర్తింపు పొందింది.",
      p2: "నేటి పోటీ వాతావరణంలో, {city} మార్కెట్‌ను అర్థం చేసుకునే భాగస్వామి మీకు అవసరం. మా నిపుణుల బృందం మీకు సహాయం చేయడానికి సిద్ధంగా ఉంది.",
      h3: "మేము ఎందుకు #1 ఎంపిక",
      l1_title: "{city} లో టాప్ SEO కంపెనీ:", l1_desc: "మేము స్థానిక SEO లో అగ్రస్థానంలో ఉంటాము.",
      l2_title: "ఉత్తమ పనితీరు ప్రకటనలు:", l2_desc: "లక్ష్యంగా ఉన్న Meta మరియు Google Ads తో మీ ROI ని పెంచుకోండి.",
      l3_title: "సోషల్ మీడియా మార్కెటింగ్:", l3_desc: "మేము ఆకర్షణీయమైన కంటెంట్‌ను సృష్టిస్తాము.",
      l4_title: "ప్రీమియం వెబ్ డిజైన్:", l4_desc: "మేము వేగవంతమైన మరియు అనుకూలీకరించిన వెబ్‌సైట్‌లను నిర్మిస్తాము.",
      p3: "ఉత్తమ ఏజెన్సీని ఎంచుకోవడం మీ వ్యాపారాన్ని పూర్తిగా మార్చగలదు.",
      p4: "మార్కెట్‌ను శాసించడానికి సిద్ధంగా ఉన్నారా? ఈరోజే మాతో భాగస్వామి కండి.",
      box1: "అంకితమైన మద్దతు", box2: "పారదర్శకత & ఫలితాలు"
    },
    ta: {
      h2: "{city} இல் சிறந்த டிஜிட்டல் மார்க்கெட்டிங் நிறுவனம்",
      p1: "உங்கள் வணிகத்தை அடுத்த கட்டத்திற்கு கொண்டு செல்ல <strong>{city} இல் சிறந்த டிஜிட்டல் மார்க்கெட்டிங் நிறுவனத்தை</strong> தேடுகிறீர்களா? Arventa Ventures சிறந்த ஏஜென்சியாக அங்கீகரிக்கப்பட்டுள்ளது.",
      p2: "இன்றைய போட்டி சூழலில், {city} சந்தையைப் புரிந்துகொள்ளும் ஒரு கூட்டாளர் உங்களுக்குத் தேவை. எங்கள் நிபுணர் குழு உங்களுக்கு உதவ தயாராக உள்ளது.",
      h3: "நாங்கள் ஏன் #1 தேர்வு",
      l1_title: "{city} இல் சிறந்த SEO நிறுவனம்:", l1_desc: "நாங்கள் உள்ளூர் SEO இல் ஆதிக்கம் செலுத்துகிறோம்.",
      l2_title: "சிறந்த செயல்திறன் விளம்பரம்:", l2_desc: "இலக்கு Meta மற்றும் Google Ads மூலம் உங்கள் ROI ஐ அதிகரிக்கவும்.",
      l3_title: "சமூக ஊடக மார்க்கெட்டிங்:", l3_desc: "நாங்கள் ஈர்க்கக்கூடிய உள்ளடக்கத்தை உருவாக்குகிறோம்.",
      l4_title: "பிரீமியம் வலை வடிவமைப்பு:", l4_desc: "நாங்கள் வேகமான மற்றும் தனிப்பயனாக்கப்பட்ட வலைத்தளங்களை உருவாக்குகிறோம்.",
      p3: "சிறந்த ஏஜென்சியைத் தேர்ந்தெடுப்பது உங்கள் வணிகத்தை முழுமையாக மாற்றும்.",
      p4: "சந்தையில் ஆதிக்கம் செலுத்த தயாரா? இன்றே எங்களுடன் இணைந்து செயல்படுங்கள்.",
      box1: "அர்ப்பணிப்பு ஆதரவு", box2: "வெளிப்படைத்தன்மை & முடிவுகள்"
    },
    mr: {
      h2: "{city} मधील सर्वोत्तम डिजिटल मार्केटिंग कंपनी",
      p1: "तुम्ही तुमच्या व्यवसायाला पुढील स्तरावर नेण्यासाठी <strong>{city} मधील सर्वोत्तम डिजिटल मार्केटिंग कंपनी</strong> शोधत आहात? Arventa Ventures ही सर्वोच्च एजन्सी म्हणून ओळखली जाते.",
      p2: "आजच्या स्पर्धात्मक वातावरणात, तुम्हाला {city} ची बाजारपेठ समजून घेणारा भागीदार हवा आहे. आमची तज्ञांची टीम तुम्हाला मदत करण्यास तयार आहे.",
      h3: "आम्ही का #1 निवड आहोत",
      l1_title: "{city} मधील शीर्ष SEO कंपनी:", l1_desc: "आम्ही स्थानिक SEO मध्ये वर्चस्व राखतो.",
      l2_title: "उत्कृष्ट जाहिरात एजन्सी:", l2_desc: "लक्ष्यित Meta आणि Google Ads सह तुमचा ROI वाढवा.",
      l3_title: "सोशल मीडिया मार्केटिंग:", l3_desc: "आम्ही आकर्षक सामग्री तयार करतो.",
      l4_title: "प्रीमियम वेब डिझाइन:", l4_desc: "आम्ही वेगवान आणि ऑप्टिमाइझ्ड वेबसाइट्स तयार करतो.",
      p3: "सर्वोत्तम एजन्सी निवडणे तुमच्या व्यवसायात पूर्णपणे बदल घडवू शकते.",
      p4: "मार्केटवर वर्चस्व मिळवण्यासाठी तयार आहात? आजच आमच्याशी भागीदारी करा.",
      box1: "समर्पित समर्थन", box2: "पारदर्शकता आणि परिणाम"
    },
    gu: {
      h2: "{city} માં શ્રેષ્ઠ ડિજિટલ માર્કેટિંગ કંપની",
      p1: "શું તમે તમારા વ્યવસાયને આગલા સ્તર પર લઈ જવા માટે <strong>{city} માં શ્રેષ્ઠ ડિજિટલ માર્કેટિંગ કંપની</strong> શોધી રહ્યા છો? Arventa Ventures ટોચની એજન્સી તરીકે ઓળખાય છે.",
      p2: "આજના સ્પર્ધાત્મક વાતાવરણમાં, તમારે {city} ના બજારને સમજતા ભાગીદારની જરૂર છે. અમારી નિષ્ણાત ટીમ તમને મદદ કરવા તૈયાર છે.",
      h3: "અમે શા માટે #1 પસંદગી છીએ",
      l1_title: "{city} માં ટોચની SEO કંપની:", l1_desc: "અમે સ્થાનિક SEO માં પ્રભુત્વ ધરાવીએ છીએ.",
      l2_title: "શ્રેષ્ઠ પ્રદર્શન જાહેરાત:", l2_desc: "લક્ષિત Meta અને Google Ads સાથે તમારા ROI માં વધારો કરો.",
      l3_title: "સોશિયલ મીડિયા માર્કેટિંગ:", l3_desc: "અમે આકર્ષક સામગ્રી બનાવીએ છીએ.",
      l4_title: "પ્રીમિયમ વેબ ડિઝાઇન:", l4_desc: "અમે ઝડપી અને ઑપ્ટિમાઇઝ વેબસાઇટ્સ બનાવીએ છીએ.",
      p3: "શ્રેષ્ઠ એજન્સી પસંદ કરવાથી તમારા વ્યવસાયમાં સંપૂર્ણ પરિવર્તન આવી શકે છે.",
      p4: "બજારમાં પ્રભુત્વ મેળવવા માટે તૈયાર છો? આજે જ અમારી સાથે ભાગીદારી કરો.",
      box1: "સમર્પિત સમર્થન", box2: "પારદર્શિતા અને પરિણામો"
    }
  }, lang);

  const tContact = getLangDict({
    en: {
      title: "Contact Our {city} Marketing Experts",
      desc: "Ready to dominate your local market? Schedule a free strategy session with our top-rated digital marketing consultants in {city} today.",
      office: "Office Address",
      officeDesc: "Purba Gopinathpur, Chapatala, More, Contai, West Bengal 721442",
      contact: "Contact Details",
      email: "Email: info@arventaventures.online",
      phone: "Phone: +91 7872490719",
      btn: "Book Your Free Strategy Session"
    },
    bn: {
      title: "আমাদের {city} মার্কেটিং এক্সপার্টদের সাথে যোগাযোগ করুন",
      desc: "আপনার লোকাল মার্কেট ডমিনেট করতে প্রস্তুত? আজই {city} তে আমাদের টপ-রেটেড ডিজিটাল মার্কেটিং কনসালট্যান্টদের সাথে ফ্রি স্ট্র্যাটেজি সেশন বুক করুন।",
      office: "অফিসের ঠিকানা",
      officeDesc: "Purba Gopinathpur, Chapatala, More, Contai, West Bengal 721442",
      contact: "যোগাযোগের বিবরণ",
      email: "ইমেইল: info@arventaventures.online",
      phone: "ফোন: +91 7872490719",
      btn: "আপনার ফ্রি স্ট্র্যাটেজি সেশন বুক করুন"
    },
    hi: {
      title: "हमारे {city} मार्केटिंग विशेषज्ञों से संपर्क करें",
      desc: "क्या आप अपने स्थानीय बाजार पर हावी होने के लिए तैयार हैं? आज ही {city} में हमारे शीर्ष-रेटेड डिजिटल मार्केटिंग सलाहकारों के साथ एक मुफ्त रणनीति सत्र निर्धारित करें।",
      office: "कार्यालय का पता",
      officeDesc: "Purba Gopinathpur, Chapatala, More, Contai, West Bengal 721442",
      contact: "संपर्क विवरण",
      email: "ईमेल: info@arventaventures.online",
      phone: "फ़ोन: +91 7872490719",
      btn: "अपना मुफ्त रणनीति सत्र बुक करें"
    },
    te: {
      title: "మా {city} మార్కెటింగ్ నిపుణులను సంప్రదించండి",
      desc: "మీ స్థానిక మార్కెట్‌ను శాసించడానికి సిద్ధంగా ఉన్నారా? ఈరోజే {city} లోని మా డిజిటల్ మార్కెటింగ్ కన్సల్టెంట్‌లతో ఉచిత వ్యూహ సెషన్‌ను బుక్ చేయండి.",
      office: "కార్యాలయ చిరునామా",
      officeDesc: "Purba Gopinathpur, Chapatala, More, Contai, West Bengal 721442",
      contact: "సంప్రదింపు వివరాలు",
      email: "ఇమెయిల్: info@arventaventures.online",
      phone: "ఫోన్: +91 7872490719",
      btn: "మీ ఉచిత వ్యూహ సెషన్‌ను బుక్ చేయండి"
    },
    ta: {
      title: "எங்கள் {city} சந்தைப்படுத்தல் நிபுணர்களை தொடர்பு கொள்ளவும்",
      desc: "உங்கள் உள்ளூர் சந்தையில் ஆதிக்கம் செலுத்த தயாரா? இன்றே {city} இல் உள்ள எங்கள் டிஜிட்டல் மார்க்கெட்டிங் நிபுணர்களுடன் இலவச உத்தி அமர்வை பதிவு செய்யுங்கள்.",
      office: "அலுவலக முகவரி",
      officeDesc: "Purba Gopinathpur, Chapatala, More, Contai, West Bengal 721442",
      contact: "தொடர்பு விவரங்கள்",
      email: "மின்னஞ்சல்: info@arventaventures.online",
      phone: "தொலைபேசி: +91 7872490719",
      btn: "உங்கள் இலவச உத்தி அமர்வை பதிவு செய்யவும்"
    },
    mr: {
      title: "आमच्या {city} मार्केटिंग तज्ञांशी संपर्क साधा",
      desc: "तुमच्या स्थानिक बाजारपेठेवर वर्चस्व मिळवण्यासाठी तयार आहात? आजच {city} मधील आमच्या डिजिटल मार्केटिंग तज्ञांसोबत मोफत स्ट्रॅटेजी सेशन बुक करा.",
      office: "कार्यालयाचा पत्ता",
      officeDesc: "Purba Gopinathpur, Chapatala, More, Contai, West Bengal 721442",
      contact: "संपर्क तपशील",
      email: "ईमेल: info@arventaventures.online",
      phone: "फोन: +91 7872490719",
      btn: "तुमचे मोफत स्ट्रॅटेजी सेशन बुक करा"
    },
    gu: {
      title: "અમારા {city} માર્કેટિંગ નિષ્ણાતોનો સંપર્ક કરો",
      desc: "તમારા સ્થાનિક બજારમાં પ્રભુત્વ મેળવવા માટે તૈયાર છો? આજે જ {city} માં અમારા ડિજિટલ માર્કેટિંગ નિષ્ણાતો સાથે મફત વ્યૂહરચના સત્ર બુક કરો.",
      office: "ઓફિસ સરનામું",
      officeDesc: "Purba Gopinathpur, Chapatala, More, Contai, West Bengal 721442",
      contact: "સંપર્ક વિગતો",
      email: "ઈમેલ: info@arventaventures.online",
      phone: "ફોન: +91 7872490719",
      btn: "તમારું મફત વ્યૂહરચના સત્ર બુક કરો"
    }
  }, lang);

  
  
  const tInfluencer = getLangDict({
    en: {
      tag: "Influencer Network",
      title: "Partner with Top Creators in",
      p1: "Looking to make a massive impact? We have direct connections with some of the biggest content creators, influencers, and local celebrities in <strong>{city}</strong> and across India.",
      p2: "Whether you have a modest startup budget or a large enterprise fund, we can seamlessly negotiate, collaborate, and execute high-ROI influencer marketing campaigns tailored to your specific budget constraints. Let their voice amplify your brand.",
      l1: "Direct access to local {city} influencers",
      l2: "Customized campaigns for any budget size",
      l3: "Authentic content creation & brand integration",
      btn: "Discuss Your Budget",
      c1: "Micro-Influencers",
      c1sub: "High Engagement",
      c2: "Mega Creators",
      c2sub: "Massive Reach"
    },
    bn: {
      tag: "ইনফ্লুয়েন্সার নেটওয়ার্ক",
      title: "শীর্ষ ক্রিয়েটরদের সাথে যুক্ত হোন",
      p1: "বড় ধরনের প্রভাব ফেলতে চান? <strong>{city}</strong> এবং সারা ভারতের জনপ্রিয় কন্টেন্ট ক্রিয়েটর, ইনফ্লুয়েন্সার এবং স্থানীয় সেলিব্রিটিদের সাথে আমাদের সরাসরি যোগাযোগ রয়েছে।",
      p2: "আপনার বাজেট যেমনই হোক না কেন – ছোট স্টার্টআপ বা বড় এন্টারপ্রাইজ – আমরা আপনার বাজেটের মধ্যে সেরা ইনফ্লুয়েন্সারদের সাথে কোলাবোরেশন করে আপনার ব্র্যান্ডের প্রচার নিশ্চিত করি।",
      l1: "স্থানীয় {city} ইনফ্লুয়েন্সারদের সাথে সরাসরি যোগাযোগ",
      l2: "যেকোনো বাজেটের জন্য কাস্টমাইজড ক্যাম্পেইন",
      l3: "ব্র্যান্ডের জন্য অথেন্টিক কন্টেন্ট তৈরি",
      btn: "বাজেট নিয়ে আলোচনা করুন",
      c1: "মাইক্রো-ইনফ্লুয়েন্সার",
      c1sub: "অধিক এঙ্গেজমেন্ট",
      c2: "মেগা ক্রিয়েটর",
      c2sub: "বিশাল রিচ"
    },
    hi: { tag: "Influencer Network", title: "Top Creators के साथ जुड़ें", p1: "बड़े प्रभाव की तलाश है? <strong>{city}</strong> और पूरे भारत में सबसे बड़े कंटेंट क्रिएटर्स, इन्फ्लुएंसर्स और मशहूर हस्तियों के साथ हमारा सीधा संपर्क है।", p2: "चाहे आपका बजट कम हो या ज्यादा, हम आपके बजट के अनुसार प्रभावशाली मार्केटिंग अभियान चला सकते हैं।", l1: "स्थानीय {city} इन्फ्लुएंसर्स तक सीधी पहुंच", l2: "किसी भी बजट के लिए अनुकूलित अभियान", l3: "ब्रांड के लिए प्रामाणिक कंटेंट", btn: "अपना बजट डिस्कस करें", c1: "माइक्रो-इन्फ्लुएंसर्स", c1sub: "उच्च जुड़ाव", c2: "मेगा क्रिएटर्स", c2sub: "विशाल पहुंच" }
  }, lang);


  
  const tStats = getLangDict({
    en: {
      title: "Our Impact in {city}",
      metrics: [
        { value: "150+", label: "Local Campaigns Delivered" },
        { value: "$5,000+", label: "Client Revenue Generated" },
        { value: "98%", label: "Client Retention Rate" },
        { value: "24/7", label: "Dedicated Support" }
      ]
    },
    bn: {
      title: "{city} তে আমাদের প্রভাব",
      metrics: [
        { value: "150+", label: "স্থানীয় ক্যাম্পেইন সম্পন্ন" },
        { value: "$5,000+", label: "ক্লায়েন্ট রাজস্ব তৈরি" },
        { value: "98%", label: "ক্লায়েন্ট ধরে রাখার হার" },
        { value: "24/7", label: "ডেডিকেটেড সাপোর্ট" }
      ]
    },
    hi: {
      title: "{city} में हमारा प्रभाव",
      metrics: [
        { value: "150+", label: "स्थानीय अभियान पूरे किए" },
        { value: "$5,000+", label: "ग्राहक राजस्व उत्पन्न" },
        { value: "98%", label: "ग्राहक प्रतिधारण दर" },
        { value: "24/7", label: "समर्पित समर्थन" }
      ]
    }
  }, lang);

  const tProcess = getLangDict({
    en: {
      tag: "Our Methodology",
      title: "How We Dominate {city} Markets",
      steps: [
        { title: "Deep Local Discovery", desc: "We analyze {city}'s unique consumer behavior, local competitors, and search trends to find untapped opportunities." },
        { title: "Custom Growth Strategy", desc: "We craft a multi-channel digital roadmap specifically designed to capture market share in your local industry." },
        { title: "Flawless Execution", desc: "Our elite team deploys SEO, Paid Ads, and Content Marketing with precision, monitoring every click and conversion." },
        { title: "Scale & Dominate", desc: "Using real-time data, we optimize ROI and scale your campaigns to make you the undisputed market leader." }
      ]
    },
    bn: {
      tag: "আমাদের কার্যপদ্ধতি",
      title: "আমরা কীভাবে {city} মার্কেট দখল করি",
      steps: [
        { title: "গভীর স্থানীয় বিশ্লেষণ", desc: "আমরা {city}-এর অনন্য ভোক্তা আচরণ, প্রতিযোগী এবং সার্চ ট্রেন্ড বিশ্লেষণ করি।" },
        { title: "কাস্টম গ্রোথ স্ট্র্যাটেজি", desc: "আপনার স্থানীয় শিল্পে মার্কেট শেয়ার দখল করার জন্য আমরা একটি মাল্টি-চ্যানেল ডিজিটাল রোডম্যাপ তৈরি করি।" },
        { title: "নিখুঁত বাস্তবায়ন", desc: "আমাদের বিশেষজ্ঞ দল এসইও, পেইড অ্যাডস এবং কন্টেন্ট মার্কেটিং নিখুঁতভাবে পরিচালনা করে।" },
        { title: "স্কেল এবং আধিপত্য", desc: "রিয়েল-টাইম ডেটা ব্যবহার করে, আমরা আরও ভাল ফলাফলের জন্য আপনার ক্যাম্পেইন স্কেল করি।" }
      ]
    },
    hi: {
      tag: "हमारी कार्यप्रणाली",
      title: "हम {city} बाजार पर कैसे हावी होते हैं",
      steps: [
        { title: "गहरी स्थानीय खोज", desc: "हम अप्रयुक्त अवसरों को खोजने के लिए {city} के अद्वितीय उपभोक्ता व्यवहार और प्रतिस्पर्धियों का विश्लेषण करते हैं।" },
        { title: "कस्टम विकास रणनीति", desc: "हम आपके स्थानीय उद्योग में बाजार हिस्सेदारी हासिल करने के लिए विशेष रूप से डिज़ाइन किया गया एक मल्टी-चैनल डिजिटल रोडमैप तैयार करते हैं।" },
        { title: "त्रुटिहीन निष्पादन", desc: "हमारी एलीट टीम एसईओ, पेड विज्ञापन और सामग्री विपणन को सटीकता के साथ तैनात करती है।" },
        { title: "स्केल और हावी", desc: "वास्तविक समय के डेटा का उपयोग करते हुए, हम ROI को अनुकूलित करते हैं और आपके अभियानों को बढ़ाते हैं।" }
      ]
    }
  }, lang);

  const tWhy = getLangDict({
    en: {
      tag: "Why Arventa Ventures",
      title: "Your Unfair Advantage in {city}",
      features: [
        { title: "Hyper-Local Expertise", desc: "We don't just guess. We know what {city} audiences click, share, and buy." },
        { title: "Data-Obsessed", desc: "Every decision is backed by analytics. We track every rupee spent for maximum ROI." },
        { title: "Premium Brand Aesthetics", desc: "We elevate your brand perception so you can charge premium prices." },
        { title: "Exclusive Influencer Network", desc: "Direct access to top local creators to authentically amplify your brand." }
      ]
    },
    bn: {
      tag: "কেন Arventa Ventures",
      title: "{city} তে আপনার অন্যায্য সুবিধা",
      features: [
        { title: "হাইপার-লোকাল দক্ষতা", desc: "আমরা জানি {city}-এর দর্শকরা কিসে ক্লিক করে, শেয়ার করে এবং কেনে।" },
        { title: "ডেটা-অবসেসড", desc: "প্রতিটি সিদ্ধান্ত অ্যানালিটিক্স দ্বারা সমর্থিত। আমরা সর্বাধিক আরওআইয়ের জন্য ব্যয় করা প্রতিটি টাকা ট্র্যাক করি।" },
        { title: "প্রিমিয়াম ব্র্যান্ড নান্দনিকতা", desc: "আমরা আপনার ব্র্যান্ডের ধারণা উন্নত করি যাতে আপনি প্রিমিয়াম মূল্য নিতে পারেন।" },
        { title: "এক্সক্লুসিভ ইনফ্লুয়েন্সার নেটওয়ার্ক", desc: "আপনার ব্র্যান্ডকে প্রামাণিকভাবে প্রসারিত করতে শীর্ষ স্থানীয় ক্রিয়েটরদের সাথে সরাসরি যোগাযোগ।" }
      ]
    },
    hi: {
      tag: "Arventa Ventures क्यों",
      title: "{city} में आपका अनुचित लाभ",
      features: [
        { title: "हाइपर-लोकल विशेषज्ञता", desc: "हम जानते हैं कि {city} के दर्शक क्या क्लिक करते हैं, साझा करते हैं और खरीदते हैं।" },
        { title: "डेटा-जुनूनी", desc: "प्रत्येक निर्णय एनालिटिक्स द्वारा समर्थित है। हम अधिकतम ROI के लिए खर्च किए गए हर रुपये को ट्रैक करते हैं।" },
        { title: "प्रीमियम ब्रांड सौंदर्यशास्त्र", desc: "हम आपकी ब्रांड धारणा को बढ़ाते हैं ताकि आप प्रीमियम कीमतें ले सकें।" },
        { title: "विशेष इन्फ्लुएंसर नेटवर्क", desc: "आपके ब्रांड को प्रामाणिक रूप से बढ़ाने के लिए शीर्ष स्थानीय रचनाकारों तक सीधी पहुंच।" }
      ]
    }
  }, lang);
  

  const tFaq = getLangDict({
    en: {
      title: "Frequently Asked Questions",
      desc: "Common questions about our digital marketing services in {city}.",
      faqs: [
        {
          q: "Why is Arventa Ventures considered the best digital marketing agency in {city}?",
          a: "Arventa Ventures is rated the best digital marketing agency in {city} because we focus strictly on high-ROI results, local market targeting, custom Meta Ads service strategies, and data-backed SEO that delivers real paying clients to your business."
        },
        {
          q: "Do you offer Meta ads service and meta ads services near me in {city}?",
          a: "Yes! Our Meta ads service includes high-converting Facebook Ads, Instagram Ads, custom ad copy, pixel setup, retargeting funnels, and ROAS optimization specifically tailored for businesses in {city}."
        },
        {
          q: "Can I get professional video making services near me in {city}?",
          a: "Absolutely! We provide video making services near me including short-form Reels, TikToks, YouTube Shorts, brand promos, and video ad production designed to engage your local {city} audience."
        },
        {
          q: "Is Arventa Ventures a low budget digital marketing agency for small businesses in {city}?",
          a: "Yes! As a top low budget digital marketing agency, we offer flexible, cost-effective starter packages designed specifically for startups, local shops, and small businesses in {city} without compromising on quality."
        }
      ]
    },
    bn: {
      title: "সাধারণ জিজ্ঞাসাসমূহ (FAQ)",
      desc: "{city} তে আমাদের ডিজিটাল মার্কেটিং সার্ভিস সংক্রান্ত সাধারণ প্রশ্নাবলী।",
      faqs: [
        {
          q: "কেন Arventa Ventures কে {city} এর সেরা ডিজিটাল মার্কেটিং এজেন্সি বলা হয়?",
          a: "Arventa Ventures {city} তে সেরা ডিজিটাল মার্কেটিং এজেন্সি হিসেবে পরিচিত কারণ আমরা হাই-ROI রেজাল্ট, লোকাল টার্গেটিং, মেটা অ্যাডস সার্ভিস এবং সেরা SEO প্রদান করি যা সরাসরি ক্লায়েন্ট জেনারেট করে।"
        },
        {
          q: "আপনারা কি {city} তে Meta ads service এবং মেটা অ্যাডস সার্ভিস প্রদান করেন?",
          a: "হ্যাঁ! আমাদের Meta ads service এর মধ্যে রয়েছে ফেইসবুক অ্যাডস, ইনস্টাগ্রাম অ্যাডস, পিক্সেল সেটআপ, রিটার্গেটিং এবং ROAS অপ্টিমাইজেশন যা {city} এর কাস্টমারদের টার্গেট করে।"
        },
        {
          q: "আমি কি {city} তে কাস্টম video making services near me বা ভিডিও মেকিং সার্ভিস পাবো?",
          a: "অবশ্যই! আমরা রিলস, শর্টস, ব্র্যান্ড প্রোমো এবং হাই-কনভার্টিং ভিডিও অ্যাড তৈরির জন্য প্রফেশনাল ভিডিও মেকিং সার্ভিস প্রদান করি।"
        },
        {
          q: "ছোট ব্যবসার জন্য আপনারা কি low budget digital marketing agency প্যাকেজ অফার করেন?",
          a: "হ্যাঁ! আমরা একটি অ্যাফোর্ডেবল এবং low budget digital marketing agency হিসেবে ছোট ব্যবসা ও স্টার্টআপদের জন্য সাশ্রয়ী প্যাকেজ প্রদান করি।"
        }
      ]
    },
    hi: { title: "Frequently Asked Questions", desc: "Common questions about our digital marketing services in {city}.", faqs: [ { q: "Why do I need a local digital marketing agency in {city}?", a: "Partnering with a local expert ensures your strategies align with {city}'s unique market dynamics. We understand the local audience, search trends, and competitors, allowing us to build highly targeted campaigns that drive real foot traffic and local online sales." }, { q: "How long does it take to see results in {city}?", a: "While paid advertising (PPC) can deliver immediate traffic and leads within days, organic strategies like Local SEO typically take 3 to 6 months to show significant momentum. We provide a timeline and set clear expectations during our initial strategy session." }, { q: "Do you work with businesses of my size in {city}?", a: "Yes! We partner with a wide range of businesses in {city}, from local startups and retail shops to large enterprise brands. We customize our marketing solutions to fit your specific growth goals and budget constraints." } ] },
    te: { title: "Frequently Asked Questions", desc: "Common questions about our digital marketing services in {city}.", faqs: [ { q: "Why do I need a local digital marketing agency in {city}?", a: "Partnering with a local expert ensures your strategies align with {city}'s unique market dynamics. We understand the local audience, search trends, and competitors, allowing us to build highly targeted campaigns that drive real foot traffic and local online sales." }, { q: "How long does it take to see results in {city}?", a: "While paid advertising (PPC) can deliver immediate traffic and leads within days, organic strategies like Local SEO typically take 3 to 6 months to show significant momentum. We provide a timeline and set clear expectations during our initial strategy session." }, { q: "Do you work with businesses of my size in {city}?", a: "Yes! We partner with a wide range of businesses in {city}, from local startups and retail shops to large enterprise brands. We customize our marketing solutions to fit your specific growth goals and budget constraints." } ] },
    ta: { title: "Frequently Asked Questions", desc: "Common questions about our digital marketing services in {city}.", faqs: [ { q: "Why do I need a local digital marketing agency in {city}?", a: "Partnering with a local expert ensures your strategies align with {city}'s unique market dynamics. We understand the local audience, search trends, and competitors, allowing us to build highly targeted campaigns that drive real foot traffic and local online sales." }, { q: "How long does it take to see results in {city}?", a: "While paid advertising (PPC) can deliver immediate traffic and leads within days, organic strategies like Local SEO typically take 3 to 6 months to show significant momentum. We provide a timeline and set clear expectations during our initial strategy session." }, { q: "Do you work with businesses of my size in {city}?", a: "Yes! We partner with a wide range of businesses in {city}, from local startups and retail shops to large enterprise brands. We customize our marketing solutions to fit your specific growth goals and budget constraints." } ] },
    mr: { title: "Frequently Asked Questions", desc: "Common questions about our digital marketing services in {city}.", faqs: [ { q: "Why do I need a local digital marketing agency in {city}?", a: "Partnering with a local expert ensures your strategies align with {city}'s unique market dynamics. We understand the local audience, search trends, and competitors, allowing us to build highly targeted campaigns that drive real foot traffic and local online sales." }, { q: "How long does it take to see results in {city}?", a: "While paid advertising (PPC) can deliver immediate traffic and leads within days, organic strategies like Local SEO typically take 3 to 6 months to show significant momentum. We provide a timeline and set clear expectations during our initial strategy session." }, { q: "Do you work with businesses of my size in {city}?", a: "Yes! We partner with a wide range of businesses in {city}, from local startups and retail shops to large enterprise brands. We customize our marketing solutions to fit your specific growth goals and budget constraints." } ] },
    gu: { title: "Frequently Asked Questions", desc: "Common questions about our digital marketing services in {city}.", faqs: [ { q: "Why do I need a local digital marketing agency in {city}?", a: "Partnering with a local expert ensures your strategies align with {city}'s unique market dynamics. We understand the local audience, search trends, and competitors, allowing us to build highly targeted campaigns that drive real foot traffic and local online sales." }, { q: "How long does it take to see results in {city}?", a: "While paid advertising (PPC) can deliver immediate traffic and leads within days, organic strategies like Local SEO typically take 3 to 6 months to show significant momentum. We provide a timeline and set clear expectations during our initial strategy session." }, { q: "Do you work with businesses of my size in {city}?", a: "Yes! We partner with a wide range of businesses in {city}, from local startups and retail shops to large enterprise brands. We customize our marketing solutions to fit your specific growth goals and budget constraints." } ] }
  }, lang);


  const tMultilingual = getLangDict({
    en: {
      title: "Local Digital Marketing in Your Language",
      desc: "We understand the diverse culture of {city}. That's why our marketing strategies connect with your audience in their preferred language. Here is how local customers search for the best digital marketing services in {city}:"
    },
    bn: {
      title: "আপনার ভাষায় লোকাল ডিজিটাল মার্কেটিং",
      desc: "আমরা {city} এর বৈচিত্র্যময় সংস্কৃতি বুঝি। তাই আমাদের মার্কেটিং স্ট্র্যাটেজি আপনার কাস্টমারদের পছন্দের ভাষায় কানেক্ট করে। এখানে দেখুন লোকাল কাস্টমাররা কীভাবে {city} তে সেরা ডিজিটাল মার্কেটিং সার্ভিস খোঁজে:"
    },
    hi: {
      title: "आपकी भाषा में स्थानीय डिजिटल मार्केटिंग",
      desc: "हम {city} की विविध संस्कृति को समझते हैं। इसीलिए हमारी मार्केटिंग रणनीतियाँ आपके दर्शकों से उनकी पसंदीदा भाषा में जुड़ती हैं।"
    },
    te: {
      title: "మీ భాషలో స్థానిక డిజిటల్ మార్కెటింగ్",
      desc: "మేము {city} యొక్క వైవిధ్యమైన సంస్కృతిని అర్థం చేసుకున్నాము. అందుకే మా మార్కెటింగ్ వ్యూహాలు మీ ప్రేక్షకులతో వారి ప్రాధాన్యత భాషలో కనెక్ట్ అవుతాయి."
    },
    ta: {
      title: "உங்கள் மொழியில் உள்ளூர் டிஜிட்டல் மார்க்கெட்டிங்",
      desc: "நாங்கள் {city} இன் மாறுபட்ட கலாச்சாரத்தைப் புரிந்துகொள்கிறோம். அதனால்தான் எங்கள் உத்திகள் உங்கள் பார்வையாளர்களுடன் அவர்கள் விரும்பும் மொழியில் இணைகின்றன."
    },
    mr: {
      title: "तुमच्या भाषेत स्थानिक डिजिटल मार्केटिंग",
      desc: "आम्हाला {city} ची वैविध्यपूर्ण संस्कृती समजते. म्हणूनच आमची मार्केटिंग रणनीती तुमच्या प्रेक्षकांशी त्यांच्या पसंतीच्या भाषेत जोडली जाते."
    },
    gu: {
      title: "તમારી ભાષામાં સ્થાનિક ડિજિટલ માર્કેટિંગ",
      desc: "અમે {city} ની વિવિધ સંસ્કૃતિ સમજીએ છીએ. તેથી જ અમારી માર્કેટિંગ વ્યૂહરચના તમારા પ્રેક્ષકો સાથે તેમની પસંદગીની ભાષામાં જોડાય છે."
    }
  }, lang);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const mapUrl = `https://maps.google.com/maps?q=${encodeURIComponent(formattedCity + ', India')}&t=&z=12&ie=UTF8&iwloc=&output=embed`;

  const citySlug = (city || 'kolkata').toLowerCase();
  const locationHreflangs = [
    { lang: 'en', href: `https://arventaventures.online/location/${citySlug}` },
    { lang: 'bn', href: `https://arventaventures.online/location/${citySlug}?lang=bn` },
    { lang: 'hi', href: `https://arventaventures.online/location/${citySlug}?lang=hi` },
    { lang: 'te', href: `https://arventaventures.online/location/${citySlug}?lang=te` },
    { lang: 'ta', href: `https://arventaventures.online/location/${citySlug}?lang=ta` },
    { lang: 'mr', href: `https://arventaventures.online/location/${citySlug}?lang=mr` },
    { lang: 'gu', href: `https://arventaventures.online/location/${citySlug}?lang=gu` },
    { lang: 'x-default', href: `https://arventaventures.online/location/${citySlug}` },
  ];

  return (
    <div className="flex flex-col min-h-screen pt-20 bg-slate-950">
      <SEO
        title={`Best Digital Marketing Agency in ${formattedCity} | Meta Ads & SEO`}
        description={`Arventa Ventures is the best digital marketing agency in ${formattedCity} offering low budget digital marketing agency plans, Meta Ads service, video making services near me & SEO.`}
        keywords={`best digital marketing agency in ${formattedCity}, best digital marketing agency, meta ads service, meta ads services near me, video making services near me, low budget digital marketing agency, SEO Services ${formattedCity}, Arventa Ventures`}
        canonicalUrl={`/location/${citySlug}`}
        hreflangs={locationHreflangs}
        structuredData={localSchema}
      />
            {/* Hero Section */}
      <section className="relative pt-2 pb-20 md:pt-4 md:pb-32 overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950 to-slate-950 pointer-events-none z-0"></div>
        
        
        
        <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-slate-900 border border-slate-800 text-slate-300 text-sm mb-8 font-medium">
              <MapPin className="w-4 h-4 text-orange-500 mr-2" />
              {t.badge} {formattedCity}
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight leading-tight max-w-5xl mx-auto">
              {t.title1} <br className="hidden md:block"/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-500">
                {formattedCity}
              </span>
            </h1>
            
            <p className="text-xl text-slate-400 leading-relaxed mb-10 font-light max-w-2xl mx-auto">
              {t.desc.replace('{city}', formattedCity)}
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Button size="lg" className="rounded-full bg-orange-500 hover:bg-orange-600 text-white w-full sm:w-auto h-14 px-8" asChild>
                <Link to="/contact">
                  {t.cta} <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Overview & Map */}
      <Section className="py-24 bg-slate-900/50 border-b border-slate-800">
        <div className="w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                {t2.title.replace('{city}', formattedCity)}
              </h2>
              <div className="space-y-6 text-lg text-slate-400 font-light">
                <p dangerouslySetInnerHTML={{__html: t2.p1.replace(/\{city\}/g, formattedCity)}}></p>
                <p>
                  {t2.p2.replace(/\{city\}/g, formattedCity)}
                </p>
                <p>
                  {t2.p3.replace(/\{city\}/g, formattedCity)}
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-orange-500 to-amber-500 rounded-3xl transform rotate-2 scale-[1.02] opacity-10 blur-lg"></div>
              <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden relative z-10 p-2">
                <iframe 
                  src={mapUrl}
                  width="100%" 
                  height="450" 
                  style={{ border: 0, borderRadius: '1.2rem' }} 
                  allowFullScreen={false} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`Map of ${formattedCity}`}
                ></iframe>
              </div>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* SEO Optimized Content Section */}
      <Section className="py-24 bg-slate-950 border-b border-slate-800">
        <div className="w-full">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">{t3.servicesTitle.replace('{city}', formattedCity)}</h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg">{t3.servicesDesc}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8">
            {[
              { icon: Search, id: 's1' },
              { icon: Target, id: 's2' },
              { icon: Megaphone, id: 's3' },
              { icon: Globe, id: 's4' },
              { icon: BarChart, id: 's5' },
            ].map((s, idx) => (
              <div key={idx} className="bg-slate-900 border border-slate-800 p-4 md:p-8 rounded-3xl hover:border-orange-500/50 transition-colors">
                <s.icon className="w-12 h-12 text-orange-500 mb-6" />
                <h3 className="text-2xl font-bold text-white mb-4">{(tServices as any)[s.id].title.replace(/\{city\}/g, formattedCity)}</h3>
                <p className="text-slate-400 leading-relaxed mb-6">{(tServices as any)[s.id].desc.replace(/\{city\}/g, formattedCity)}</p>
                <Link to="/contact" className="text-orange-500 hover:text-orange-400 font-medium flex items-center">
                  {(tServices as any)[s.id].link} <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            ))}
            
            <div className="bg-slate-900 border border-slate-800 p-4 md:p-8 rounded-3xl hover:border-orange-500/50 transition-colors flex flex-col justify-center items-center text-center">
              <Rocket className="w-16 h-16 text-slate-700 mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4">{tServices.s6.title}</h3>
              <p className="text-slate-400 leading-relaxed mb-6">
                {tServices.s6.desc.replace(/\{city\}/g, formattedCity)}
              </p>
              <Button className="rounded-full bg-orange-500 hover:bg-orange-600 text-white w-full" asChild>
                <Link to="/contact">{tServices.s6.link}</Link>
              </Button>
            </div>
          </div>
        </div>
      </Section>
      
      {/* Testimonials / Trust Section */}
      <Section className="py-24 bg-slate-900/50 border-b border-slate-800">
         <div className="w-full">
           <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-5">
                 <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">{tTestimonial.title.replace(/\{city\}/g, formattedCity)}</h2>
                 <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                   {tTestimonial.desc}
                 </p>
                 <ul className="space-y-4">
                  {[tTestimonial.b1, tTestimonial.b2, tTestimonial.b3, tTestimonial.b4].map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle2 className="w-6 h-6 text-orange-500 shrink-0 mr-3 mt-0.5" />
                      <span className="text-slate-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
                 <div className="bg-slate-900 border border-slate-800 p-4 md:p-8 rounded-3xl flex flex-col justify-center text-center">
                    <div className="text-4xl font-bold text-white mb-2">{tTestimonial.s1Val}</div>
                    <div className="text-orange-500 text-sm font-medium uppercase tracking-wider mb-2">{tTestimonial.s1Title}</div>
                    <p className="text-slate-400 text-sm">{tTestimonial.s1Desc}</p>
                 </div>
                 <div className="bg-slate-900 border border-slate-800 p-4 md:p-8 rounded-3xl flex flex-col justify-center text-center ">
                    <div className="text-4xl font-bold text-white mb-2">{tTestimonial.s2Val}</div>
                    <div className="text-orange-500 text-sm font-medium uppercase tracking-wider mb-2">{tTestimonial.s2Title}</div>
                    <p className="text-slate-400 text-sm">{tTestimonial.s2Desc}</p>
                 </div>
              </div>
           </div>
         </div>
      </Section>

      {/* SEO & Local Market Content */}
      <Section className="py-24 bg-slate-950 border-b border-slate-800">
             <motion.div
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.5 }}
             >
               <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
                 {tSeoContent.h2.replace(/\{city\}/g, formattedCity)}
               </h2>
               
               <div className="space-y-5 md:space-y-8 text-base md:text-lg text-slate-400 font-light leading-relaxed text-left max-w-5xl mx-auto w-full">
                 <p dangerouslySetInnerHTML={{__html: tSeoContent.p1.replace(/\{city\}/g, formattedCity)}}></p>
                 <p dangerouslySetInnerHTML={{__html: tSeoContent.p2.replace(/\{city\}/g, formattedCity)}}></p>
                 <div className="bg-slate-900 border border-slate-800 p-4 md:p-8 rounded-3xl my-6 md:my-8 shadow-xl w-full">
                   <h3 className="text-2xl font-bold text-white mb-6">{tSeoContent.h3.replace(/\{city\}/g, formattedCity)}</h3>
                   <ul className="space-y-6">
                     <li className="flex items-start">
                       <CheckCircle2 className="w-6 h-6 text-orange-500 shrink-0 mr-4 mt-1" />
                       <span><strong className="text-slate-200">{tSeoContent.l1_title.replace(/\{city\}/g, formattedCity)}</strong> {tSeoContent.l1_desc.replace(/\{city\}/g, formattedCity)}</span>
                     </li>
                     <li className="flex items-start">
                       <CheckCircle2 className="w-6 h-6 text-orange-500 shrink-0 mr-4 mt-1" />
                       <span><strong className="text-slate-200">{tSeoContent.l2_title.replace(/\{city\}/g, formattedCity)}</strong> {tSeoContent.l2_desc.replace(/\{city\}/g, formattedCity)}</span>
                     </li>
                     <li className="flex items-start">
                       <CheckCircle2 className="w-6 h-6 text-orange-500 shrink-0 mr-4 mt-1" />
                       <span><strong className="text-slate-200">{tSeoContent.l3_title.replace(/\{city\}/g, formattedCity)}</strong> {tSeoContent.l3_desc.replace(/\{city\}/g, formattedCity)}</span>
                     </li>
                     <li className="flex items-start">
                       <CheckCircle2 className="w-6 h-6 text-orange-500 shrink-0 mr-4 mt-1" />
                       <span><strong className="text-slate-200">{tSeoContent.l4_title.replace(/\{city\}/g, formattedCity)}</strong> {tSeoContent.l4_desc.replace(/\{city\}/g, formattedCity)}</span>
                     </li>
                   </ul>
                 </div>
                 <p dangerouslySetInnerHTML={{__html: tSeoContent.p3.replace(/\{city\}/g, formattedCity)}}></p>
                 <p dangerouslySetInnerHTML={{__html: tSeoContent.p4.replace(/\{city\}/g, formattedCity)}}></p>
               </div>
               
               <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-slate-900 border border-slate-800 p-4 md:p-8 rounded-2xl border-t-2 border-t-orange-500 flex items-center justify-center flex-col text-center shadow-lg w-full">
                     <div className="text-4xl font-bold text-white mb-2">24/7</div>
                     <div className="text-sm text-slate-400 font-medium uppercase tracking-wider">{tSeoContent.box1}</div>
                  </div>
                  <div className="bg-slate-900 border border-slate-800 p-4 md:p-8 rounded-2xl border-t-2 border-t-orange-500 flex items-center justify-center flex-col text-center shadow-lg w-full">
                     <div className="text-4xl font-bold text-white mb-2">100%</div>
                     <div className="text-sm text-slate-400 font-medium uppercase tracking-wider">{tSeoContent.box2}</div>
                  </div>
               </div>
             </motion.div>
      </Section>
      {/* Contact & Map Section */}
      <Section className="py-24 bg-slate-900/50 border-b border-slate-800">
           <div className="max-w-4xl mx-auto">
             <motion.div
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.5 }}
               className="text-center"
             >
               <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                 {tContact.title.replace(/\{city\}/g, formattedCity)}
               </h2>
               <p className="text-lg text-slate-400 mb-12 leading-relaxed">
                 {tContact.desc.replace(/\{city\}/g, formattedCity)}
               </p>
               
               <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                 <div className="bg-slate-900 border border-slate-800 p-4 md:p-8 rounded-3xl flex flex-col md:flex-row items-start w-full">
                   <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center shrink-0 mr-4 border border-slate-700">
                     <MapPin className="w-5 h-5 text-orange-500" />
                   </div>
                   <div>
                     <h4 className="text-white font-bold mb-1">{tContact.office}</h4>
                     <p className="text-slate-400" dangerouslySetInnerHTML={{__html: tContact.officeDesc.replace(/\{city\}/g, formattedCity)}}></p>
                   </div>
                 </div>
                 
                 <div className="bg-slate-900 border border-slate-800 p-4 md:p-8 rounded-3xl flex flex-col md:flex-row items-start w-full">
                   <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center shrink-0 mr-4 border border-slate-700">
                     <Megaphone className="w-5 h-5 text-orange-500" />
                   </div>
                   <div>
                     <h4 className="text-white font-bold mb-1">{tContact.contact}</h4>
                     <p className="text-slate-400">
                       {tContact.email.replace('{email}', formattedCity.toLowerCase().replace(/\s+/g, ''))}<br/>
                       {tContact.phone}
                     </p>
                   </div>
                 </div>
               </div>
               
               <Button size="lg" className="rounded-full bg-orange-500 hover:bg-orange-600 text-white mt-12 h-14 px-10" asChild>
                 <Link to="/contact">{tContact.btn}</Link>
               </Button>
             </motion.div>
           </div>
      </Section>
      
      {/* Influencer Marketing Section */}
      <Section className="py-24 bg-slate-950 relative border-b border-slate-800 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 to-transparent pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center space-x-2 bg-orange-500/10 text-orange-500 px-4 py-2 rounded-full mb-6 border border-orange-500/20">
                <Users className="w-4 h-4" />
                <span className="text-sm font-bold uppercase tracking-wider">{tInfluencer.tag}</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                {tInfluencer.title} <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-500">{formattedCity}</span>
              </h2>
              <p className="text-slate-400 text-lg leading-relaxed mb-6" dangerouslySetInnerHTML={{__html: tInfluencer.p1.replace(/\{city\}/g, formattedCity)}}></p>
              <p className="text-slate-400 text-lg leading-relaxed mb-8">
                {tInfluencer.p2}
              </p>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-center text-slate-300">
                  <CheckCircle2 className="w-5 h-5 text-orange-500 mr-3 shrink-0" />
                  {tInfluencer.l1.replace('{city}', formattedCity)}
                </li>
                <li className="flex items-center text-slate-300">
                  <CheckCircle2 className="w-5 h-5 text-orange-500 mr-3 shrink-0" />
                  {tInfluencer.l2}
                </li>
                <li className="flex items-center text-slate-300">
                  <CheckCircle2 className="w-5 h-5 text-orange-500 mr-3 shrink-0" />
                  {tInfluencer.l3}
                </li>
              </ul>
              
              <Button size="lg" className="rounded-full bg-orange-500 hover:bg-orange-600 text-white h-14 px-8" asChild>
                <Link to="/contact">{tInfluencer.btn} <ArrowRight className="ml-2 w-5 h-5" /></Link>
              </Button>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/20 to-transparent rounded-3xl blur-2xl"></div>
              <div className="relative bg-slate-900 border border-slate-800 rounded-3xl p-8 overflow-hidden">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-4">
                    <div className="relative group rounded-2xl overflow-hidden">
                      <img src="https://images.unsplash.com/photo-1611601322175-ef8ec8c85f01?auto=format&fit=crop&q=80&w=400&h=500" alt="Fashion Creator" referrerPolicy="no-referrer" onError={(e) => { (e.currentTarget as HTMLImageElement).src = "https://picsum.photos/seed/inf1/400/500"; }} className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110" />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
                      <div className="absolute bottom-4 left-4">
                        <h4 className="text-white font-bold text-sm">{tInfluencer.c1}</h4>
                        <p className="text-orange-500 text-xs font-semibold">{tInfluencer.c1sub}</p>
                      </div>
                    </div>
                    <div className="relative group rounded-2xl overflow-hidden">
                      <img src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&q=80&w=400&h=500" alt="Lifestyle Influencer" referrerPolicy="no-referrer" onError={(e) => { (e.currentTarget as HTMLImageElement).src = "https://picsum.photos/seed/inf2/400/500"; }} className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110" />
                    </div>
                  </div>
                  <div className="space-y-4 mt-8">
                    <div className="relative group rounded-2xl overflow-hidden">
                      <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400&h=500" alt="Beauty Creator" referrerPolicy="no-referrer" onError={(e) => { (e.currentTarget as HTMLImageElement).src = "https://picsum.photos/seed/inf3/400/500"; }} className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110" />
                    </div>
                    <div className="relative group rounded-2xl overflow-hidden">
                      <img src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&q=80&w=400&h=500" alt="Travel Influencer" referrerPolicy="no-referrer" onError={(e) => { (e.currentTarget as HTMLImageElement).src = "https://picsum.photos/seed/inf4/400/500"; }} className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110" />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
                      <div className="absolute bottom-4 left-4">
                        <h4 className="text-white font-bold text-sm">{tInfluencer.c2}</h4>
                        <p className="text-orange-500 text-xs font-semibold">{tInfluencer.c2sub}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </Section>

      
      {/* Stats Section */}
      <Section className="py-24 bg-orange-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557683316-973673baf926?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center mix-blend-overlay opacity-20"></div>
        <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-16">
            {tStats.title.replace('{city}', formattedCity)}
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {tStats.metrics.map((metric: any, idx: number) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white/10 backdrop-blur-sm border border-white/20 p-8 rounded-3xl text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-white mb-4">{metric.value}</div>
                <div className="text-orange-100 font-medium">{metric.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>
  

      {/* Process Section */}
      <Section className="py-24 bg-slate-900 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-orange-500/10 text-orange-500 px-4 py-2 rounded-full mb-6 border border-orange-500/20">
              <TrendingUp className="w-4 h-4" />
              <span className="text-sm font-bold uppercase tracking-wider">{tProcess.tag}</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              {tProcess.title.replace('{city}', formattedCity)}
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            <div className="hidden lg:block absolute top-12 left-0 w-full h-[2px] bg-gradient-to-r from-orange-500/0 via-orange-500/50 to-orange-500/0 z-0"></div>
            {tProcess.steps.map((step: any, idx: number) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative z-10 bg-slate-950 border border-slate-800 p-8 rounded-3xl hover:border-orange-500/50 transition-colors group"
              >
                <div className="w-16 h-16 rounded-2xl bg-orange-500/10 text-orange-500 flex items-center justify-center text-2xl font-bold mb-6 group-hover:bg-orange-500 group-hover:text-white transition-colors border border-orange-500/20">
                  0{idx + 1}
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{step.title.replace('{city}', formattedCity)}</h3>
                <p className="text-slate-400 leading-relaxed">{step.desc.replace('{city}', formattedCity)}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>
  

      {/* Why Choose Us Section */}
      <Section className="py-24 bg-slate-950 border-b border-slate-800 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-500/5 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                {tWhy.title.replace('{city}', formattedCity)}
              </h2>
              <p className="text-lg text-slate-400 mb-8 leading-relaxed">
                We don't just build websites and run ads. We engineer comprehensive digital ecosystems designed to extract maximum value from your local market. 
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {tWhy.features.map((feature: any, idx: number) => (
                  <div key={idx} className="bg-slate-900 border border-slate-800 p-6 rounded-2xl">
                    <CheckCircle2 className="w-6 h-6 text-orange-500 mb-4" />
                    <h4 className="text-white font-bold mb-2">{feature.title.replace('{city}', formattedCity)}</h4>
                    <p className="text-sm text-slate-400">{feature.desc.replace('{city}', formattedCity)}</p>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800&h=900" alt="Data Analytics" referrerPolicy="no-referrer" onError={(e) => { (e.currentTarget as HTMLImageElement).src = "https://picsum.photos/seed/analytics/800/900"; }} className="rounded-3xl border border-slate-800 w-full object-cover h-[600px] shadow-2xl" />
              <div className="absolute -bottom-8 -left-8 bg-slate-900 border border-slate-800 text-white p-8 rounded-3xl shadow-xl max-w-xs backdrop-blur-sm">
                <div className="text-5xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">300%</div>
                <div className="font-medium text-slate-300">Average ROI increase for our local clients in the first 90 days.</div>
              </div>
            </motion.div>
          </div>
        </div>
      </Section>
  
      {/* FAQ Section */}
      <Section className="py-24 bg-slate-900 border-b border-slate-800">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              {tFaq.title}
            </h2>
            <p className="text-lg text-slate-400">
              {tFaq.desc.replace(/\{city\}/g, formattedCity)}
            </p>
          </div>
          <div className="space-y-6">
            {tFaq.faqs.map((faq: any, idx: number) => (
              <div key={idx} className="bg-slate-950 border border-slate-800 p-6 md:p-8 rounded-2xl">
                <h3 className="text-xl font-bold text-white mb-3 flex items-start">
                  <span className="text-orange-500 mr-3">Q:</span>
                  {faq.q.replace(/\{city\}/g, formattedCity)}
                </h3>
                <p className="text-slate-400 leading-relaxed flex items-start">
                  <span className="text-slate-600 mr-3 font-bold">A:</span>
                  {faq.a.replace(/\{city\}/g, formattedCity)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>
      {/* CTA Section */}
      <section className="py-24 bg-orange-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557683316-973673baf926?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center mix-blend-overlay opacity-20"></div>
        <div className="max-w-4xl mx-auto px-4 md:px-6 relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">{t3.ctaTitle.replace('{city}', formattedCity)}</h2>
          <p className="text-xl text-orange-100 mb-10 max-w-2xl mx-auto">
            {t3.ctaDesc.replace(/\{city\}/g, formattedCity)}
          </p>
          <Button size="lg" className="rounded-full bg-white text-orange-600 hover:bg-slate-100 h-14 px-10 text-lg font-bold" asChild>
            <Link to="/contact">{t3.ctaBtn}</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}

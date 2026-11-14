import React, { useEffect, useState } from "react";
import { useLanguage } from "@/src/contexts/LanguageContext";
import { useParams, Navigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Section } from "@/src/components/ui/Section";
import { Button } from "@/src/components/ui/Button";
import { CheckCircle2, ArrowRight, MapPin, TrendingUp, PlayCircle, Users, Target } from "lucide-react";
import { servicesData } from "@/src/data/pageContent";
import { SEO } from "@/src/components/common/SEO";

function getLangDict<T>(dict: Record<string, T>, selectedLang: string): T {
  return dict[selectedLang] || dict['en'] || dict['bn'] || Object.values(dict)[0];
}

export default function ServiceLocationTemplate() {

const translations = {
  en: {
    badge: "Premium Service in",
    title1: "Best",
    title2: "Agency in",
    desc: "Our elite {service} strategies are tailored specifically for ambitious businesses targeting the {city} market.",
    cta: "Grow Your Brand in"
  },
  bn: {
    badge: "প্রিমিয়ার সার্ভিস",
    title1: "সেরা",
    title2: "এজেন্সি",
    desc: "আমাদের {service} স্ট্র্যাটেজিগুলি বিশেষভাবে {city} মার্কেটকে টার্গেট করা উচ্চাকাঙ্ক্ষী ব্যবসার জন্য তৈরি করা হয়েছে।",
    cta: "আপনার ব্র্যান্ডকে উন্নত করুন"
  },
  hi: {
    badge: "प्रीमियम सेवा",
    title1: "बेस्ट",
    title2: "एजेंसी",
    desc: "हमारी {service} रणनीतियां विशेष रूप से {city} बाजार को लक्षित करने वाले महत्वाकांक्षी व्यवसायों के लिए तैयार की गई हैं।",
    cta: "अपने ब्रांड को बढ़ाएं"
  },
  te: {
    badge: "ప్రీమియం సేవ",
    title1: "ఉత్తమ",
    title2: "ఏజెన్సీ",
    desc: "మా {service} వ్యూహాలు {city} మార్కెట్‌ను లక్ష్యంగా చేసుకున్న ప్రతిష్టాత్మక వ్యాపారాల కోసం ప్రత్యేకంగా రూపొందించబడ్డాయి.",
    cta: "మీ బ్రాండ్‌ను వృద్ధి చేయండి"
  },
  ta: {
    badge: "பிரீமியம் சேவை",
    title1: "சிறந்த",
    title2: "நிறுவனம்",
    desc: "எங்கள் {service} உத்திகள் {city} சந்தையை இலக்காகக் கொண்ட லட்சிய வணிகங்களுக்காக சிறப்பாக வடிவமைக்கப்பட்டுள்ளன.",
    cta: "உங்கள் பிராண்டை வளர்க்கவும்"
  },
  mr: {
    badge: "प्रीमियम सेवा",
    title1: "सर्वोत्तम",
    title2: "एजन्सी",
    desc: "आमची {service} धोरणे विशेषतः {city} मार्केटला लक्ष्य करणाऱ्या महत्त्वाकांक्षी व्यवसायांसाठी तयार केली आहेत.",
    cta: "तुमचा ब्रँड वाढवा"
  },
  gu: {
    badge: "પ્રીમિયમ સેવા",
    title1: "શ્રેષ્ઠ",
    title2: "એજન્સી",
    desc: "અમારી {service} વ્યૂહરચનાઓ ખાસ કરીને {city} બજારને લક્ષ્યમાં રાખતા મહત્વાકાંક્ષી વ્યવસાયો માટે બનાવવામાં આવી છે.",
    cta: "તમારી બ્રાન્ડનો વિકાસ કરો"
  }
};

  const { slug, city } = useParams();
  const { lang } = useLanguage();
  const t = getLangDict(translations, lang);
  const [data, setData] = useState<any>(null);

  const formattedCity = city 
    ? city.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
    : 'Your City';

  const tAdvantage = getLangDict({
    en: {
      title: "Why {service} is Crucial for {city} Businesses",
      p1: "In a highly competitive local market like {city}, relying on outdated marketing strategies will leave you invisible to your target audience. Our specialized <strong>{service}</strong> campaigns are designed to help you capture massive market share and drive highly qualified leads in {city} and surrounding regions.",
      p2: "We combine global best practices with deep local insights to ensure that every dollar you invest delivers measurable ROI. Whether it's localized search engine dominance or highly targeted social media reach, Arventa Ventures is the trusted growth partner for {city}'s leading brands.",
      tailored: "{feature} tailored for {city}",
      localAdvTitle: "The Local {city} Advantage",
      localAdvDesc: "When targeting audiences in {city}, generic approaches fail. We tailor our {service} campaigns to match local search intent, demographic preferences, and market dynamics.",
      marketDom: "Market Dominance",
      marketDomDesc: "Outperform competitors in {city} with data-driven strategies."
    },
    bn: {
      title: "কেন {city} ব্যবসার জন্য {service} অত্যন্ত গুরুত্বপূর্ণ",
      p1: "{city} এর মতো প্রতিযোগিতামূলক স্থানীয় বাজারে, পুরানো মার্কেটিং কৌশলগুলির উপর নির্ভর করলে আপনি আপনার টার্গেট কাস্টমারদের কাছে পৌঁছাতে পারবেন না। আমাদের বিশেষ <strong>{service}</strong> ক্যাম্পেইনগুলি আপনাকে {city} এবং তার আশেপাশের অঞ্চলে বিশাল মার্কেট শেয়ার দখল করতে সাহায্য করবে।",
      p2: "আমরা গ্লোবাল বেস্ট প্র্যাকটিসের সাথে লোকাল ইনসাইটস একত্রিত করে নিশ্চিত করি যে আপনার প্রতিটি বিনিয়োগ যেন পরিমাপযোগ্য ROI প্রদান করে। Arventa Ventures হলো {city} এর লিডিং ব্র্যান্ডগুলোর জন্য বিশ্বস্ত পার্টনার।",
      tailored: "{city} এর জন্য কাস্টমাইজ করা {feature}",
      localAdvTitle: "লোকাল {city} সুবিধা",
      localAdvDesc: "{city} এর কাস্টমারদের টার্গেট করার সময় সাধারণ নিয়মগুলো কাজ করে না। আমরা লোকাল সার্চ, ডেমোগ্রাফি এবং মার্কেট অনুযায়ী আমাদের {service} ক্যাম্পেইন সাজাই।",
      marketDom: "মার্কেট ডমিনেন্স",
      marketDomDesc: "ডেটা-চালিত স্ট্র্যাটেজি দিয়ে {city} তে প্রতিযোগীদের ছাড়িয়ে যান।"
    },
    hi: {
      title: "{city} के व्यवसायों के लिए {service} महत्वपूर्ण क्यों है",
      p1: "{city} जैसे अत्यधिक प्रतिस्पर्धी स्थानीय बाजार में, पुरानी मार्केटिंग रणनीतियों पर निर्भर रहने से आप अपने लक्षित दर्शकों के लिए अदृश्य हो जाएंगे। हमारे विशेष <strong>{service}</strong> अभियान आपको {city} में भारी बाजार हिस्सेदारी हासिल करने में मदद करेंगे।",
      p2: "हम यह सुनिश्चित करने के लिए कि आपका हर निवेश ROI प्रदान करे, गहरी स्थानीय जानकारी के साथ वैश्विक सर्वोत्तम प्रथाओं को जोड़ते हैं।",
      tailored: "{city} के लिए अनुकूलित {feature}",
      localAdvTitle: "स्थानीय {city} लाभ",
      localAdvDesc: "जब {city} में दर्शकों को लक्षित किया जाता है, तो सामान्य दृष्टिकोण विफल हो जाते हैं। हम अपने {service} अभियानों को स्थानीय बाजार की गतिशीलता से मिलाते हैं।",
      marketDom: "बाजार में दबदबा",
      marketDomDesc: "डेटा-संचालित रणनीतियों के साथ {city} में प्रतिस्पर्धियों से बेहतर प्रदर्शन करें।"
    },
    te: {
      title: "{city} వ్యాపారాలకు {service} ఎందుకు కీలకం",
      p1: "{city} లాంటి అత్యంత పోటీతత్వ మార్కెట్‌లో, పాత మార్కెటింగ్ వ్యూహాల వల్ల ప్రయోజనం ఉండదు. మా ప్రత్యేక <strong>{service}</strong> ప్రచారాలు మీకు సహాయం చేస్తాయి.",
      p2: "మీ ప్రతి పెట్టుబడికి మంచి ROI వచ్చేలా మేము స్థానిక అవగాహనతో ఉత్తమ పద్ధతులను ఉపయోగిస్తాము.",
      tailored: "{city} కోసం ప్రత్యేకంగా {feature}",
      localAdvTitle: "స్థానిక {city} ప్రయోజనం",
      localAdvDesc: "{city} లో ప్రేక్షకులను లక్ష్యంగా చేసుకున్నప్పుడు సాధారణ పద్ధతులు పనిచేయవు. మేము మా {service} ప్రచారాలను అనుకూలీకరిస్తాము.",
      marketDom: "మార్కెట్ ఆధిపత్యం",
      marketDomDesc: "డేటా ఆధారిత వ్యూహాలతో {city} లో పోటీదారులను మించిపోండి."
    },
    ta: {
      title: "{city} வணிகங்களுக்கு {service} ஏன் முக்கியமானது",
      p1: "{city} போன்ற மிகவும் போட்டித்தன்மை வாய்ந்த உள்ளூர் சந்தையில், பழைய மார்க்கெட்டிங் உத்திகளை நம்பியிருப்பது பலன் தராது. எங்கள் சிறப்பு <strong>{service}</strong> பிரச்சாரங்கள் உங்களுக்கு உதவும்.",
      p2: "உங்கள் ஒவ்வொரு முதலீடும் நல்ல ROI ஐ வழங்குவதை உறுதிசெய்ய உள்ளூர் நுண்ணறிவுகளுடன் சிறந்த நடைமுறைகளை இணைக்கிறோம்.",
      tailored: "{city} க்கான பிரத்யேக {feature}",
      localAdvTitle: "உள்ளூர் {city} நன்மை",
      localAdvDesc: "{city} இல் உள்ள பார்வையாளர்களை குறிவைக்கும் போது, பொதுவான அணுகுமுறைகள் தோல்வியடையும். எங்கள் {service} பிரச்சாரங்களை நாங்கள் தனிப்பயனாக்குகிறோம்.",
      marketDom: "சந்தை ஆதிக்கம்",
      marketDomDesc: "தரவு உந்துதல் உத்திகள் மூலம் {city} இல் போட்டியாளர்களை மிஞ்சவும்."
    },
    mr: {
      title: "{city} व्यवसायांसाठी {service} का महत्त्वाचे आहे",
      p1: "{city} सारख्या अत्यंत स्पर्धात्मक स्थानिक बाजारपेठेत, जुन्या मार्केटिंग धोरणांवर अवलंबून राहिल्यास तुम्हाला फायदा होणार नाही. आमचे विशेष <strong>{service}</strong> मोहिमा तुम्हाला मदत करतील.",
      p2: "तुमच्या प्रत्येक गुंतवणुकीला चांगला ROI मिळेल याची खात्री करण्यासाठी आम्ही स्थानिक माहितीसह सर्वोत्तम पद्धती वापरतो.",
      tailored: "{city} साठी सानुकूलित {feature}",
      localAdvTitle: "स्थानिक {city} फायदा",
      localAdvDesc: "{city} मधील प्रेक्षकांना लक्ष्य करताना, सामान्य दृष्टिकोन अपयशी ठरतात. आम्ही आमचे {service} मोहिमा सानुकूलित करतो.",
      marketDom: "बाजारपेठेवर वर्चस्व",
      marketDomDesc: "डेटा-आधारित धोरणांसह {city} मध्ये प्रतिस्पर्ध्यांवर मात करा."
    },
    gu: {
      title: "{city} વ્યવસાયો માટે {service} શા માટે નિર્ણાયક છે",
      p1: "{city} જેવા અત્યંત સ્પર્ધાત્મક સ્થાનિક બજારમાં, જૂની માર્કેટિંગ વ્યૂહરચનાઓ પર આધાર રાખવાથી કોઈ ફાયદો થશે નહીં. અમારી વિશેષ <strong>{service}</strong> ઝુંબેશ તમને મદદ કરશે.",
      p2: "તમારા દરેક રોકાણ પર સારો ROI મળે તેની ખાતરી કરવા માટે અમે સ્થાનિક આંતરદૃષ્ટિ સાથે શ્રેષ્ઠ પ્રયાસોનો ઉપયોગ કરીએ છીએ.",
      tailored: "{city} માટે ખાસ {feature}",
      localAdvTitle: "સ્થાનિક {city} લાભ",
      localAdvDesc: "{city} માં પ્રેક્ષકોને લક્ષ્ય બનાવતી વખતે, સામાન્ય અભિગમો નિષ્ફળ જાય છે. અમે અમારી {service} ઝુંબેશને કસ્ટમાઇઝ કરીએ છીએ.",
      marketDom: "બજારમાં પ્રભુત્વ",
      marketDomDesc: "ડેટા-આધારિત વ્યૂહરચના સાથે {city} માં સ્પર્ધકોને પાછળ છોડી દો."
    }
  }, lang);

  
  
  const tInfluencer = getLangDict({
    en: {
      tag: "Influencer Network",
      title: "Partner with Top Creators in",
      p1: "Looking to make a massive impact with your {service}? We have direct connections with some of the biggest content creators, influencers, and local celebrities in <strong>{city}</strong> and across India.",
      p2: "Whether you have a modest startup budget or a large enterprise fund, we can seamlessly negotiate, collaborate, and execute high-ROI influencer marketing campaigns tailored to your specific budget constraints.",
      l1: "Direct access to local {city} influencers",
      l2: "Customized campaigns for any budget size",
      l3: "Authentic {service} content creation",
      btn: "Discuss Your Budget",
      c1: "Micro-Influencers",
      c1sub: "High Engagement",
      c2: "Mega Creators",
      c2sub: "Massive Reach"
    },
    bn: {
      tag: "ইনফ্লুয়েন্সার নেটওয়ার্ক",
      title: "শীর্ষ ক্রিয়েটরদের সাথে যুক্ত হোন",
      p1: "আপনার {service} এর মাধ্যমে বড় ধরনের প্রভাব ফেলতে চান? <strong>{city}</strong> এবং সারা ভারতের জনপ্রিয় কন্টেন্ট ক্রিয়েটর, ইনফ্লুয়েন্সার এবং স্থানীয় সেলিব্রিটিদের সাথে আমাদের সরাসরি যোগাযোগ রয়েছে।",
      p2: "আপনার বাজেট যেমনই হোক না কেন – ছোট স্টার্টআপ বা বড় এন্টারপ্রাইজ – আমরা আপনার বাজেটের মধ্যে সেরা ইনফ্লুয়েন্সারদের সাথে কোলাবোরেশন করে আপনার ব্র্যান্ডের প্রচার নিশ্চিত করি।",
      l1: "স্থানীয় {city} ইনফ্লুয়েন্সারদের সাথে সরাসরি যোগাযোগ",
      l2: "যেকোনো বাজেটের জন্য কাস্টমাইজড ক্যাম্পেইন",
      l3: "অথেন্টিক {service} কন্টেন্ট তৈরি",
      btn: "বাজেট নিয়ে আলোচনা করুন",
      c1: "মাইক্রো-ইনফ্লুয়েন্সার",
      c1sub: "অধিক এঙ্গেজমেন্ট",
      c2: "মেগা ক্রিয়েটর",
      c2sub: "বিশাল রিচ"
    },
    hi: { tag: "Influencer Network", title: "Top Creators के साथ जुड़ें", p1: "बड़े प्रभाव की तलाश है? <strong>{city}</strong> और पूरे भारत में सबसे बड़े कंटेंट क्रिएटर्स, इन्फ्लुएंसर्स और मशहूर हस्तियों के साथ हमारा सीधा संपर्क है।", p2: "चाहे आपका बजट कम हो या ज्यादा, हम आपके बजट के अनुसार प्रभावशाली मार्केटिंग अभियान चला सकते हैं।", l1: "स्थानीय {city} इन्फ्लुएंसर्स तक सीधी पहुंच", l2: "किसी भी बजट के लिए अनुकूलित अभियान", l3: "प्रामाणिक {service} कंटेंट", btn: "अपना बजट डिस्कस करें", c1: "माइक्रो-इन्फ्लुएंसर्स", c1sub: "उच्च जुड़ाव", c2: "मेगा क्रिएटर्स", c2sub: "विशाल पहुंच" }
  }, lang);


  
  const tStats = getLangDict({
    en: {
      title: "Our {service} Impact in {city}",
      metrics: [
        { value: "500+", label: "Businesses Helped" },
        { value: "3x", label: "Average ROI Growth" },
        { value: "99%", label: "Client Satisfaction" },
        { value: "Top 1%", label: "Industry Experts" }
      ]
    },
    bn: {
      title: "{city} তে আমাদের {service} এর প্রভাব",
      metrics: [
        { value: "500+", label: "সাহায্যপ্রাপ্ত ব্যবসা" },
        { value: "3x", label: "গড় ROI প্রবৃদ্ধি" },
        { value: "99%", label: "ক্লায়েন্ট সন্তুষ্টি" },
        { value: "Top 1%", label: "শিল্প বিশেষজ্ঞ" }
      ]
    },
    hi: {
      title: "{city} में हमारा {service} प्रभाव",
      metrics: [
        { value: "500+", label: "सहायता प्राप्त व्यवसाय" },
        { value: "3x", label: "औसत ROI वृद्धि" },
        { value: "99%", label: "ग्राहक संतुष्टि" },
        { value: "Top 1%", label: "उद्योग विशेषज्ञ" }
      ]
    }
  }, lang);

  const tProcess = getLangDict({
    en: {
      tag: "Our Strategy",
      title: "How We Deliver {service} Excellence in {city}",
      steps: [
        { title: "Audit & Analysis", desc: "We evaluate your current {service} efforts against {city}'s top competitors." },
        { title: "Strategic Roadmap", desc: "We design a customized plan to dominate your specific niche." },
        { title: "Rapid Execution", desc: "Our specialists implement the strategy using cutting-edge tools." },
        { title: "Optimization", desc: "Continuous testing and refinement to ensure your ROI scales infinitely." }
      ]
    },
    bn: {
      tag: "আমাদের কৌশল",
      title: "আমরা কীভাবে {city} তে {service} এর শ্রেষ্ঠত্ব প্রদান করি",
      steps: [
        { title: "অডিট এবং বিশ্লেষণ", desc: "আমরা {city}-এর শীর্ষ প্রতিযোগীদের বিপরীতে আপনার বর্তমান প্রচেষ্টা মূল্যায়ন করি।" },
        { title: "কৌশলগত রোডম্যাপ", desc: "আমরা আপনার নির্দিষ্ট ক্ষেত্রে আধিপত্য বিস্তারের জন্য একটি কাস্টমাইজড পরিকল্পনা ডিজাইন করি।" },
        { title: "দ্রুত বাস্তবায়ন", desc: "আমাদের বিশেষজ্ঞরা আধুনিক সরঞ্জাম ব্যবহার করে কৌশলটি বাস্তবায়ন করেন।" },
        { title: "অপ্টিমাইজেশন", desc: "আপনার ROI নিরবচ্ছিন্নভাবে বৃদ্ধি নিশ্চিত করতে ক্রমাগত পরীক্ষা এবং উন্নতি।" }
      ]
    },
    hi: {
      tag: "हमारी रणनीति",
      title: "हम {city} में {service} उत्कृष्टता कैसे प्रदान करते हैं",
      steps: [
        { title: "ऑडिट और विश्लेषण", desc: "हम {city} के शीर्ष प्रतिस्पर्धियों के खिलाफ आपके वर्तमान प्रयासों का मूल्यांकन करते हैं।" },
        { title: "रणनीतिक रोडमैप", desc: "हम आपके विशिष्ट क्षेत्र पर हावी होने के लिए एक अनुकूलित योजना तैयार करते हैं।" },
        { title: "तेजी से निष्पादन", desc: "हमारे विशेषज्ञ आधुनिक उपकरणों का उपयोग करके रणनीति को लागू करते हैं।" },
        { title: "अनुकूलन", desc: "आपके ROI को असीमित रूप से बढ़ाने के लिए निरंतर परीक्षण और सुधार।" }
      ]
    }
  }, lang);

  const tWhy = getLangDict({
    en: {
      title: "Why Choose Us for {service} in {city}?",
      features: [
        { title: "Specialized Experts", desc: "Our team consists of dedicated specialists for {service}, not generalists." },
        { title: "Local Market Nuance", desc: "We adapt global best practices to {city}'s unique cultural and market dynamics." },
        { title: "Transparent Reporting", desc: "Live dashboards so you always know exactly where your money is going." },
        { title: "Proven Track Record", desc: "We've helped dozens of businesses scale exponentially using these exact strategies." }
      ]
    },
    bn: {
      title: "{city} তে {service} এর জন্য আমাদের কেন বেছে নেবেন?",
      features: [
        { title: "বিশেষজ্ঞ দল", desc: "আমাদের দলে {service} এর জন্য ডেডিকেটেড বিশেষজ্ঞ রয়েছে, সাধারণ কর্মী নয়।" },
        { title: "স্থানীয় বাজারের ধারণা", desc: "আমরা {city}-এর অনন্য সাংস্কৃতিক এবং বাজারের গতিশীলতার সাথে বিশ্বব্যাপী সেরা অনুশীলনগুলি খাপ খাইয়ে নিই।" },
        { title: "স্বচ্ছ রিপোর্টিং", desc: "লাইভ ড্যাশবোর্ড যাতে আপনি সর্বদা জানেন আপনার অর্থ কোথায় যাচ্ছে।" },
        { title: "প্রমাণিত ট্র্যাক রেকর্ড", desc: "আমরা এই সঠিক কৌশলগুলি ব্যবহার করে কয়েক ডজন ব্যবসাকে দ্রুত স্কেল করতে সাহায্য করেছি।" }
      ]
    },
    hi: {
      title: "{city} में {service} के लिए हमें क्यों चुनें?",
      features: [
        { title: "विशेषज्ञ टीम", desc: "हमारी टीम में {service} के लिए समर्पित विशेषज्ञ हैं, सामान्य कर्मचारी नहीं।" },
        { title: "स्थानीय बाजार की समझ", desc: "हम {city} की अनूठी सांस्कृतिक और बाजार गतिशीलता के लिए वैश्विक सर्वोत्तम प्रथाओं को अनुकूलित करते हैं।" },
        { title: "पारदर्शी रिपोर्टिंग", desc: "लाइव डैशबोर्ड ताकि आप हमेशा जान सकें कि आपका पैसा कहां जा रहा है।" },
        { title: "साबित ट्रैक रिकॉर्ड", desc: "हमने इन सटीक रणनीतियों का उपयोग करके दर्जनों व्यवसायों को तेजी से बढ़ने में मदद की है।" }
      ]
    }
  }, lang);
  

  const tFaq = getLangDict({
    en: {
      title: "Frequently Asked Questions",
      desc: "Common questions about our {service} services in {city}.",
      faqs: [
        {
          q: "Why do I need a local {service} agency in {city}?",
          a: "Partnering with a local expert ensures your {service} strategies align with {city}'s unique market dynamics. We understand the local audience, search trends, and competitors, allowing us to build highly targeted campaigns that drive real results."
        },
        {
          q: "How long does it take to see results from {service} in {city}?",
          a: "The timeline depends on the specific strategy. While paid advertising can deliver immediate traffic, organic {service} typically takes 3 to 6 months to show significant momentum. We provide a clear timeline during our initial strategy session."
        },
        {
          q: "Do you work with businesses of my size in {city}?",
          a: "Yes! We partner with a wide range of businesses in {city}, from local startups and retail shops to large enterprise brands. We customize our {service} solutions to fit your specific growth goals and budget constraints."
        }
      ]
    },
    bn: {
      title: "Frequently Asked Questions",
      desc: "Common questions about our {service} services in {city}.",
      faqs: [
        {
          q: "Why do I need a local {service} agency in {city}?",
          a: "Partnering with a local expert ensures your {service} strategies align with {city}'s unique market dynamics. We understand the local audience, search trends, and competitors, allowing us to build highly targeted campaigns that drive real results."
        },
        {
          q: "How long does it take to see results from {service} in {city}?",
          a: "The timeline depends on the specific strategy. While paid advertising can deliver immediate traffic, organic {service} typically takes 3 to 6 months to show significant momentum. We provide a clear timeline during our initial strategy session."
        },
        {
          q: "Do you work with businesses of my size in {city}?",
          a: "Yes! We partner with a wide range of businesses in {city}, from local startups and retail shops to large enterprise brands. We customize our {service} solutions to fit your specific growth goals and budget constraints."
        }
      ]
    },
    hi: { title: "Frequently Asked Questions", desc: "Common questions about our {service} services in {city}.", faqs: [ { q: "Why do I need a local {service} agency in {city}?", a: "Partnering with a local expert ensures your {service} strategies align with {city}'s unique market dynamics. We understand the local audience, search trends, and competitors, allowing us to build highly targeted campaigns that drive real results." }, { q: "How long does it take to see results from {service} in {city}?", a: "The timeline depends on the specific strategy. While paid advertising can deliver immediate traffic, organic {service} typically takes 3 to 6 months to show significant momentum. We provide a clear timeline during our initial strategy session." }, { q: "Do you work with businesses of my size in {city}?", a: "Yes! We partner with a wide range of businesses in {city}, from local startups and retail shops to large enterprise brands. We customize our {service} solutions to fit your specific growth goals and budget constraints." } ] },
    te: { title: "Frequently Asked Questions", desc: "Common questions about our {service} services in {city}.", faqs: [ { q: "Why do I need a local {service} agency in {city}?", a: "Partnering with a local expert ensures your {service} strategies align with {city}'s unique market dynamics. We understand the local audience, search trends, and competitors, allowing us to build highly targeted campaigns that drive real results." }, { q: "How long does it take to see results from {service} in {city}?", a: "The timeline depends on the specific strategy. While paid advertising can deliver immediate traffic, organic {service} typically takes 3 to 6 months to show significant momentum. We provide a clear timeline during our initial strategy session." }, { q: "Do you work with businesses of my size in {city}?", a: "Yes! We partner with a wide range of businesses in {city}, from local startups and retail shops to large enterprise brands. We customize our {service} solutions to fit your specific growth goals and budget constraints." } ] },
    ta: { title: "Frequently Asked Questions", desc: "Common questions about our {service} services in {city}.", faqs: [ { q: "Why do I need a local {service} agency in {city}?", a: "Partnering with a local expert ensures your {service} strategies align with {city}'s unique market dynamics. We understand the local audience, search trends, and competitors, allowing us to build highly targeted campaigns that drive real results." }, { q: "How long does it take to see results from {service} in {city}?", a: "The timeline depends on the specific strategy. While paid advertising can deliver immediate traffic, organic {service} typically takes 3 to 6 months to show significant momentum. We provide a clear timeline during our initial strategy session." }, { q: "Do you work with businesses of my size in {city}?", a: "Yes! We partner with a wide range of businesses in {city}, from local startups and retail shops to large enterprise brands. We customize our {service} solutions to fit your specific growth goals and budget constraints." } ] },
    mr: { title: "Frequently Asked Questions", desc: "Common questions about our {service} services in {city}.", faqs: [ { q: "Why do I need a local {service} agency in {city}?", a: "Partnering with a local expert ensures your {service} strategies align with {city}'s unique market dynamics. We understand the local audience, search trends, and competitors, allowing us to build highly targeted campaigns that drive real results." }, { q: "How long does it take to see results from {service} in {city}?", a: "The timeline depends on the specific strategy. While paid advertising can deliver immediate traffic, organic {service} typically takes 3 to 6 months to show significant momentum. We provide a clear timeline during our initial strategy session." }, { q: "Do you work with businesses of my size in {city}?", a: "Yes! We partner with a wide range of businesses in {city}, from local startups and retail shops to large enterprise brands. We customize our {service} solutions to fit your specific growth goals and budget constraints." } ] },
    gu: { title: "Frequently Asked Questions", desc: "Common questions about our {service} services in {city}.", faqs: [ { q: "Why do I need a local {service} agency in {city}?", a: "Partnering with a local expert ensures your {service} strategies align with {city}'s unique market dynamics. We understand the local audience, search trends, and competitors, allowing us to build highly targeted campaigns that drive real results." }, { q: "How long does it take to see results from {service} in {city}?", a: "The timeline depends on the specific strategy. While paid advertising can deliver immediate traffic, organic {service} typically takes 3 to 6 months to show significant momentum. We provide a clear timeline during our initial strategy session." }, { q: "Do you work with businesses of my size in {city}?", a: "Yes! We partner with a wide range of businesses in {city}, from local startups and retail shops to large enterprise brands. We customize our {service} solutions to fit your specific growth goals and budget constraints." } ] }
  }, lang);


  const tMulti = getLangDict({
    en: {
      title: "{service} in Your Language",
      desc: "We understand the diverse culture of {city}. Here is how local customers search for the best {service} services in {city}:"
    },
    bn: {
      title: "আপনার ভাষায় {service}",
      desc: "আমরা {city} এর বৈচিত্র্যময় সংস্কৃতি বুঝি। এখানে দেখুন লোকাল কাস্টমাররা কীভাবে {city} তে সেরা {service} সার্ভিস খোঁজে:"
    },
    hi: {
      title: "आपकी भाषा में {service}",
      desc: "हम {city} की विविध संस्कृति को समझते हैं। यहां बताया गया है कि स्थानीय ग्राहक {city} में सर्वोत्तम {service} सेवाओं की खोज कैसे करते हैं:"
    },
    te: {
      title: "మీ భాషలో {service}",
      desc: "మేము {city} యొక్క వైవిధ్యమైన సంస్కృతిని అర్థం చేసుకున్నాము. ఇక్కడ స్థానిక కస్టమర్‌లు {city} లో ఉత్తమ {service} సేవల కోసం ఎలా శోధిస్తారో ఇక్కడ ఉంది:"
    },
    ta: {
      title: "உங்கள் மொழியில் {service}",
      desc: "நாங்கள் {city} இன் மாறுபட்ட கலாச்சாரத்தைப் புரிந்துகொள்கிறோம். {city} இல் சிறந்த {service} சேவைகளை உள்ளூர் வாடிக்கையாளர்கள் எவ்வாறு தேடுகிறார்கள் என்பது இங்கே:"
    },
    mr: {
      title: "तुमच्या भाषेत {service}",
      desc: "आम्हाला {city} ची वैविध्यपूर्ण संस्कृती समजते. स्थानिक ग्राहक {city} मध्ये सर्वोत्तम {service} सेवा कशा शोधतात ते येथे आहे:"
    },
    gu: {
      title: "તમારી ભાષામાં {service}",
      desc: "અમે {city} ની વિવિધ સંસ્કૃતિ સમજીએ છીએ. અહીં સ્થાનિક ગ્રાહકો {city} માં શ્રેષ્ઠ {service} સેવાઓ કેવી રીતે શોધે છે તે અહીં છે:"
    }
  }, lang);

  const tCall = getLangDict({
    en: {
      title: "Ready to dominate {city} with {service}?",
      desc: "Partner with Arventa Ventures and let us build a high-converting {service} engine for your brand in {city}.",
      btn: "Get Your Free Proposal"
    },
    bn: {
      title: "{service} দিয়ে {city} ডমিনেট করতে প্রস্তুত?",
      desc: "Arventa Ventures এর সাথে পার্টনারশিপ করুন এবং আমরা {city} তে আপনার ব্র্যান্ডের জন্য একটি হাই-কনভার্টিং {service} ইঞ্জিন তৈরি করি।",
      btn: "আপনার ফ্রি প্রপোজাল নিন"
    },
    hi: {
      title: "क्या आप {service} के साथ {city} पर हावी होने के लिए तैयार हैं?",
      desc: "Arventa Ventures के साथ साझेदारी करें और हमें {city} में आपके ब्रांड के लिए एक उच्च-परिवर्तित {service} इंजन बनाने दें।",
      btn: "अपना निःशुल्क प्रस्ताव प्राप्त करें"
    },
    te: {
      title: "{service} తో {city} ని శాసించడానికి సిద్ధంగా ఉన్నారా?",
      desc: "మాతో భాగస్వామి కండి మరియు {city} లో మీ బ్రాండ్ కోసం మేము {service} ఇంజిన్‌ను నిర్మిస్తాము.",
      btn: "ఉచిత ప్రతిపాదనను పొందండి"
    },
    ta: {
      title: "{service} மூலம் {city} ஐ ஆதிக்கம் செலுத்த தயாரா?",
      desc: "எங்களுடன் கூட்டு சேருங்கள், {city} இல் உங்கள் பிராண்டிற்கான {service} இயந்திரத்தை உருவாக்குவோம்.",
      btn: "உங்கள் இலவச முன்மொழிவைப் பெறுங்கள்"
    },
    mr: {
      title: "{service} सह {city} वर वर्चस्व मिळवण्यासाठी तयार आहात?",
      desc: "आमच्याशी भागीदारी करा आणि आम्ही {city} मध्ये तुमच्या ब्रँडसाठी {service} इंजिन तयार करू.",
      btn: "तुमचा मोफत प्रस्ताव मिळवा"
    },
    gu: {
      title: "{service} સાથે {city} માં પ્રભુત્વ મેળવવા માટે તૈયાર છો?",
      desc: "અમારી સાથે ભાગીદારી કરો અને અમે {city} માં તમારી બ્રાન્ડ માટે {service} એન્જિન બનાવીશું.",
      btn: "તમારી મફત દરખાસ્ત મેળવો"
    }
  }, lang);


  useEffect(() => {
    if (slug && servicesData[slug]) {
      setData(servicesData[slug]);
      window.scrollTo(0, 0);
      document.title = `${servicesData[slug].title} Services in ${formattedCity} | Arventa Ventures`;
      
      
      // Dynamic SEO Meta Description
      const metaDescription = document.querySelector('meta[name="description"]');
      const descText = `Looking for top-tier ${servicesData[slug].title.toLowerCase()} services in ${formattedCity}? Arventa Ventures helps brands in ${formattedCity} dominate their market with data-driven strategies.`;
      
      if (metaDescription) {
        metaDescription.setAttribute("content", descText);
      } else {
        const meta = document.createElement('meta');
        meta.name = "description";
        meta.content = descText;
        document.head.appendChild(meta);
      }
    }
  }, [slug, formattedCity]);

  if (!slug || !city || (!servicesData[slug] && data === null)) {
    if (!servicesData[slug as string]) {
      return <Navigate to="/services" replace />;
    }
  }

  if (!data) return null;

  const mapUrl = `https://maps.google.com/maps?q=${encodeURIComponent(formattedCity + ', India')}&t=&z=12&ie=UTF8&iwloc=&output=embed`;

  const serviceLocationSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": `${data.title} in ${formattedCity}`,
    "provider": {
      "@type": "LocalBusiness",
      "name": `Arventa Ventures ${formattedCity}`,
      "telephone": "+917872490719"
    },
    "areaServed": {
      "@type": "City",
      "name": formattedCity
    },
    "description": `Top ${data.title} agency in ${formattedCity}. Drive targeted business leads and growth.`
  };

  const citySlug = city.toLowerCase();
  const serviceLocationHreflangs = [
    { lang: 'en', href: `https://arventaventures.online/services/${slug}/in/${citySlug}` },
    { lang: 'bn', href: `https://arventaventures.online/services/${slug}/in/${citySlug}?lang=bn` },
    { lang: 'hi', href: `https://arventaventures.online/services/${slug}/in/${citySlug}?lang=hi` },
    { lang: 'te', href: `https://arventaventures.online/services/${slug}/in/${citySlug}?lang=te` },
    { lang: 'ta', href: `https://arventaventures.online/services/${slug}/in/${citySlug}?lang=ta` },
    { lang: 'mr', href: `https://arventaventures.online/services/${slug}/in/${citySlug}?lang=mr` },
    { lang: 'gu', href: `https://arventaventures.online/services/${slug}/in/${citySlug}?lang=gu` },
    { lang: 'x-default', href: `https://arventaventures.online/services/${slug}/in/${citySlug}` },
  ];

  return (
    <div className="flex flex-col min-h-screen pt-20 bg-slate-950">
      <SEO
        title={`Best ${data.title} Agency in ${formattedCity} | Arventa Ventures`}
        description={`Scale your revenue with premier ${data.title} services in ${formattedCity}. Arventa Ventures delivers guaranteed ROI and high-intent local leads.`}
        keywords={`${data.title} in ${formattedCity}, ${data.title} Agency ${formattedCity}, Best Digital Marketing ${formattedCity}, Arventa Ventures`}
        canonicalUrl={`/services/${slug}/in/${citySlug}`}
        hreflangs={serviceLocationHreflangs}
        structuredData={serviceLocationSchema}
      />
            {/* Hero Section */}
      <section className="relative pt-2 pb-20 md:pt-4 md:pb-32 overflow-hidden border-b border-slate-800">
        
        
        <div className="absolute inset-0 bg-gradient-to-b from-orange-500/5 via-slate-950 to-slate-950 pointer-events-none z-0"></div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-[120px] -z-10 translate-x-1/3 -translate-y-1/3"></div>
        
        <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-slate-900 border border-slate-800 text-slate-300 text-sm mb-8 tracking-wide font-medium">
                <MapPin className="w-4 h-4 text-orange-500 mr-2" />
                {t.badge} {formattedCity}
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight leading-[1.1]">
                {t.title1} {data.title} {t.title2} <span className="text-orange-500">{formattedCity}</span>
              </h1>
              <p className="text-xl md:text-2xl text-slate-400 leading-relaxed mb-10 font-light">
                {t.desc.replace('{service}', data.title.toLowerCase()).replace('{city}', formattedCity)}
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-6">
                <Button size="lg" className="rounded-full bg-orange-500 hover:bg-orange-600 text-white w-full sm:w-auto text-lg h-14 px-8" asChild>
                  <Link to="/contact">
                    {t.cta} {formattedCity} <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-orange-500 to-amber-500 rounded-[2.5rem] transform rotate-3 scale-[1.02] opacity-20 blur-xl"></div>
              <div className="relative rounded-[2.5rem] overflow-hidden border border-slate-700/50 bg-slate-900 aspect-[4/3] w-full shadow-2xl">
                <img 
                  src={data.image || "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=1200"} 
                  alt={`${data.title} in ${formattedCity}`}
                  referrerPolicy="no-referrer"
                  onError={(e) => { (e.currentTarget as HTMLImageElement).src = "https://picsum.photos/seed/hero-slt/800/600"; }}
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-slate-950/20"></div>
                {slug === 'video-marketing' && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer">
                       <PlayCircle className="w-10 h-10 text-white pl-1" />
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us for this Service in this Location */}
      <Section className="py-24 bg-slate-950 relative border-b border-slate-800">
        <div className="w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">
                {tAdvantage.title.replace('{service}', data.title).replace('{city}', formattedCity)}
              </h2>
              <p className="text-slate-300 text-xl leading-relaxed mb-8 border-l-4 border-orange-500 pl-6 font-light">
                {data.desc}
              </p>
              <p className="text-slate-400 text-lg leading-relaxed mb-6" dangerouslySetInnerHTML={{__html: tAdvantage.p1.replace(/\{service\}/g, data.title).replace(/\{city\}/g, formattedCity)}}></p>
              <p className="text-slate-400 text-lg leading-relaxed mb-6">
                {tAdvantage.p2.replace(/\{city\}/g, formattedCity)}
              </p>
              
              <ul className="space-y-4 mt-8">
                {data.features.map((feature: string, idx: number) => (
                  <li key={idx} className="flex items-center text-slate-300">
                    <CheckCircle2 className="w-5 h-5 text-orange-500 mr-3 shrink-0" />
                    {tAdvantage.tailored.replace('{feature}', feature).replace('{city}', formattedCity)}
                  </li>
                ))}
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="bg-slate-900 border border-slate-800 rounded-3xl p-4 md:p-8 mb-8">
                <h3 className="text-2xl font-bold text-white mb-6">{tAdvantage.localAdvTitle.replace('{city}', formattedCity)}</h3>
                <p className="text-slate-400 mb-8">
                  {tAdvantage.localAdvDesc.replace('{service}', data.title.toLowerCase()).replace('{city}', formattedCity)}
                </p>
                
                <div className="space-y-6">
                   <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 flex gap-4 items-start">
                      <TrendingUp className="w-8 h-8 text-orange-500 shrink-0" />
                      <div>
                        <h4 className="text-lg font-bold text-white mb-2">{tAdvantage.marketDom}</h4>
                        <p className="text-slate-400 text-sm">{tAdvantage.marketDomDesc.replace('{city}', formattedCity)}</p>
                      </div>
                   </div>
                </div>
              </div>
              
              {/* Map Embed for specific service location */}
              <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden p-2">
                <iframe 
                  src={mapUrl}
                  width="100%" 
                  height="250" 
                  style={{ border: 0, borderRadius: '1rem' }} 
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
              <p className="text-slate-400 text-lg leading-relaxed mb-6" dangerouslySetInnerHTML={{__html: tInfluencer.p1.replace(/\{city\}/g, formattedCity).replace(/\{service\}/g, data.title)}}></p>
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
                  {tInfluencer.l3.replace('{service}', data.title)}
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
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center mix-blend-overlay opacity-20"></div>
        <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-16">
            {tStats.title.replace('{city}', formattedCity).replace('{service}', data.title)}
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
              {tProcess.title.replace('{city}', formattedCity).replace('{service}', data.title)}
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
                <h3 className="text-xl font-bold text-white mb-4">{step.title.replace('{city}', formattedCity).replace('{service}', data.title)}</h3>
                <p className="text-slate-400 leading-relaxed">{step.desc.replace('{city}', formattedCity).replace('{service}', data.title)}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>
  

      {/* Why Choose Us Section */}
      <Section className="py-24 bg-slate-950 border-b border-slate-800 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-orange-500/5 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="order-2 lg:order-1 relative"
            >
              <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=800&h=900" alt="Team Collaboration" referrerPolicy="no-referrer" onError={(e) => { (e.currentTarget as HTMLImageElement).src = "https://picsum.photos/seed/teamcollab/800/900"; }} className="rounded-3xl border border-slate-800 w-full object-cover h-[600px] shadow-2xl" />
              <div className="absolute -bottom-8 right-0 md:-right-8 bg-slate-900 border border-slate-800 text-white p-8 rounded-3xl shadow-xl max-w-xs">
                <div className="flex items-center space-x-2 text-orange-500 mb-2">
                  {[1,2,3,4,5].map(i => <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>)}
                </div>
                <div className="font-bold text-lg mb-1">Rated 5 Stars</div>
                <div className="text-sm text-slate-400">By 500+ Local Businesses</div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="order-1 lg:order-2"
            >
              <div className="inline-flex items-center space-x-2 bg-orange-500/10 text-orange-500 px-4 py-2 rounded-full mb-6 border border-orange-500/20">
                <Target className="w-4 h-4" />
                <span className="text-sm font-bold uppercase tracking-wider">Premium Quality</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                {tWhy.title.replace('{city}', formattedCity).replace('{service}', data.title)}
              </h2>
              <p className="text-lg text-slate-400 mb-8 leading-relaxed">
                When you partner with us for {data.title}, you get an entire elite team dedicated to dominating the {formattedCity} market.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {tWhy.features.map((feature: any, idx: number) => (
                  <div key={idx} className="bg-slate-900 border border-slate-800 p-6 rounded-2xl">
                    <CheckCircle2 className="w-6 h-6 text-orange-500 mb-4" />
                    <h4 className="text-white font-bold mb-2">{feature.title.replace('{city}', formattedCity).replace('{service}', data.title)}</h4>
                    <p className="text-sm text-slate-400">{feature.desc.replace('{city}', formattedCity).replace('{service}', data.title)}</p>
                  </div>
                ))}
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
              {tFaq.desc.replace(/\{city\}/g, formattedCity).replace(/\{service\}/g, data.title)}
            </p>
          </div>
          <div className="space-y-6">
            {tFaq.faqs.map((faq: any, idx: number) => (
              <div key={idx} className="bg-slate-950 border border-slate-800 p-6 md:p-8 rounded-2xl">
                <h3 className="text-xl font-bold text-white mb-3 flex items-start">
                  <span className="text-orange-500 mr-3">Q:</span>
                  {faq.q.replace(/\{city\}/g, formattedCity).replace(/\{service\}/g, data.title)}
                </h3>
                <p className="text-slate-400 leading-relaxed flex items-start">
                  <span className="text-slate-600 mr-3 font-bold">A:</span>
                  {faq.a.replace(/\{city\}/g, formattedCity).replace(/\{service\}/g, data.title)}
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
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">{tCall.title.replace('{city}', formattedCity).replace('{service}', data.title)}</h2>
          <p className="text-xl text-orange-100 mb-10 max-w-2xl mx-auto">
            {tCall.desc.replace('{service}', data.title.toLowerCase()).replace('{city}', formattedCity)}
          </p>
          <Button size="lg" className="rounded-full bg-white text-orange-600 hover:bg-slate-100 h-14 px-10 text-lg font-bold" asChild>
            <Link to="/contact">{tCall.btn}</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}

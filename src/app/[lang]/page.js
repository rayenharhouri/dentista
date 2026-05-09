import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import AppointmentForm from "@/components/AppointmentForm";
import FloatingWhatsAppButton from "@/components/FloatingWhatsAppButton";
import FloatingLocationButton from "@/components/FloatingLocationButton";
import {
  ToothIcon,
  SmileIcon,
  CheckIcon,
  CalendarIcon,
  PhoneIcon,
  MapPinIcon,
  MailIcon,
  StarIcon,
  ShieldIcon,
  SparkleIcon,
  HeartIcon,
  UsersIcon,
  AwardIcon,
  StethoscopeIcon,
  FilingIcon,
  SyringeIcon,
  InstagramIcon,
  FacebookIcon,
  ArrowRightIcon,
} from "@/components/Icons";

const locales = ["it", "en", "ar"];
const WHATSAPP_NOTIFY_TO = "+393208406049";
const INSTAGRAM_URL = "https://www.instagram.com/saffidental/";

const SERVICE_ICONS = [
  ShieldIcon,
  FilingIcon,
  SyringeIcon,
  HeartIcon,
  StethoscopeIcon,
  ToothIcon,
  SmileIcon,
  AwardIcon,
  SparkleIcon,
  UsersIcon,
  StarIcon,
];

const translations = {
  it: {
    metaTitle: "Dott. Soliman Saffi | Dentista",
    metaDescription:
      "Riparazione dentale, terapia canalare e implantologia con il Dott. Soliman Saffi.",
    clinicName: "Studio Dentistico Soliman Saffi",
    clinicTag: "Saffi Dental Clinic",
    nav: {
      services: "Servizi",
      about: "Chi siamo",
      gallery: "Galleria",
      contact: "Contatti",
      book: "Prenota",
    },
    hero: {
      eyebrow: "Accettiamo nuovi pazienti",
      titlePrefix: "Sorrisi sani con il",
      titleAccent: "Dott. Soliman Saffi",
      titleSuffix: ".",
      text:
        "Dottore laureato all'Universita di Bologna. Cure chiare, rapide e personalizzate con focus su riparazione dentale, terapia canalare e implantologia.",
      points: [
        "Laurea Universita di Bologna",
        "Certificati Professionali",
        "Trattamenti su Misura",
      ],
      live: "Disponibile oggi",
      photoAlt: "Illustrazione di uno studio dentistico",
    },
    stats: [
      { value: "10+", label: "Anni di esperienza", icon: "AwardIcon" },
      { value: "5000+", label: "Pazienti trattati", icon: "UsersIcon" },
      { value: "12", label: "Servizi specialistici", icon: "StethoscopeIcon" },
      { value: "4.9", label: "Valutazione media", icon: "StarIcon" },
    ],
    bookCta: "Prenota un Appuntamento",
    servicesCta: "Scopri i Servizi",
    callNowLabel: "Chiama ora",
    phoneTitle: "Contatti Telefonici",
    phonePrimary: "+39 320 840 6049",
    phonePrimaryHref: "+39 320 840 6049",
    phoneSecondary: "+39 051 523 065",
    phoneSecondaryHref: "+39051523065",
    email: "info@saffidental.it",
    floatingWhatsappLabel: "Apri chat WhatsApp",
    floatingWhatsappTooltip: "Chatta su WhatsApp",
    floatingWhatsappPrefill: "Ciao, vorrei informazioni per un appuntamento.",
    floatingLocationLabel: "Vai alla mappa",
    floatingLocationTooltip: "Vedi posizione",
    form: {
      heading: "Prenota la tua visita",
      subheading: "Compila il modulo. Ti contatteremo per confermare l'orario.",
      nameLabel: "Nome e Cognome",
      namePlaceholder: "Il tuo nome completo",
      phoneLabel: "Telefono",
      phonePlaceholder: "+39 320 840 6049",
      emailLabel: "Email (opzionale)",
      emailPlaceholder: "nome@esempio.com",
      serviceLabel: "Servizio",
      servicePlaceholder: "Seleziona un servizio",
      dateLabel: "Data preferita",
      notesLabel: "Note (opzionale)",
      notesPlaceholder: "Scrivi informazioni utili per l'appuntamento",
      submit: "Prenota Appuntamento",
      sendingNotice: "Invio in corso...",
      successNotice:
        "Richiesta inviata con successo. Ti contatteremo presto.",
      errorNotice: "Invio non riuscito. Riprova.",
      successPopupTitle: "Appuntamento prenotato",
      successPopupText: "Abbiamo ricevuto la tua richiesta.",
      successPopupButton: "Chiudi",
    },
    aboutEyebrow: "Chi e il dottore",
    aboutTitle: "Cure odontoiatriche moderne, mani esperte",
    aboutText:
      "Il Dott. Soliman Saffi e un dentista con forte preparazione accademica e clinica. Il suo approccio e diretto: diagnosi chiara, piano di cura pratico e follow-up affidabile.",
    aboutQuote:
      "Ogni paziente merita un piano di cura su misura, spiegato con chiarezza e seguito con attenzione.",
    aboutAuthor: "Dott. Soliman Saffi",
    aboutRole: "Odontoiatra · Universita di Bologna",
    servicesEyebrow: "Servizi",
    servicesTitle: "Trattamenti completi per tutta la famiglia",
    servicesText:
      "Servizi completi di odontoiatria, chirurgia orale, implantologia e medicina estetica.",
    galleryEyebrow: "Galleria",
    galleryTitle: "Uno sguardo alla nostra clinica",
    galleryText:
      "Le immagini piu recenti dal nostro profilo Instagram. Tecnologia, sorrisi e momenti di studio.",
    galleryItems: [
      { label: "Sbiancamento", tag: "Estetica" },
      { label: "Implantologia", tag: "Chirurgia" },
      { label: "Faccette", tag: "Sorriso" },
      { label: "Igiene professionale", tag: "Prevenzione" },
      { label: "Ortodonzia", tag: "Allineamento" },
      { label: "Pedodonzia", tag: "Bambini" },
      { label: "Endodonzia", tag: "Cura canalare" },
      { label: "Studio moderno", tag: "Clinica" },
    ],
    galleryCta: "Seguici su Instagram",
    contactEyebrow: "Dove siamo",
    mapTitle: "Vieni a trovarci",
    mapText:
      "Lo studio si trova presso Saffi Dental Clinic. Apri la mappa per l'indirizzo completo.",
    mapEmbedTitle: "Mappa dello studio dentistico",
    mapCta: "Apri su Google Maps",
    mapLink: "https://maps.app.goo.gl/F431kso8C3TXYi459",
    mapEmbedUrl:
      "https://www.google.com/maps?q=44.5039031,11.3315083&z=16&output=embed",
    hoursTitle: "Orari di apertura",
    hoursEyebrow: "Quando siamo aperti",
    hours: [
      { day: "Lunedi", time: "09:00 — 19:00" },
      { day: "Martedi", time: "09:00 — 19:00" },
      { day: "Mercoledi", time: "09:00 — 19:00" },
      { day: "Giovedi", time: "09:00 — 19:00" },
      { day: "Venerdi", time: "09:00 — 19:00" },
      { day: "Sabato", time: "10:00 — 14:00" },
      { day: "Domenica", time: "Chiuso", closed: true },
    ],
    contactCardLabel: "Contatti diretti",
    languageLabel: "Lingua",
    footer: {
      tagline:
        "Studio Dentistico Soliman Saffi · Cure di alta qualita con un tocco umano.",
      colExplore: "Esplora",
      colContact: "Contatti",
      colFollow: "Social",
      privacyNote: "© 2026 Saffi Dental Clinic — Tutti i diritti riservati.",
      designedBy: "Progettato da Rayen HARHOURI",
    },
    services: [
      {
        value: "odontoiatria-preventiva",
        title: "Odontoiatria Preventiva",
        description: "Serve a prevenire problemi dentali prima che compaiano.",
        items: [
          "Detartrasi (pulizia dentale professionale)",
          "Fluoroprofilassi",
          "Sigillatura dei solchi",
          "Visita di controllo periodica",
          "Igiene orale professionale",
        ],
      },
      {
        value: "odontoiatria-conservativa",
        title: "Odontoiatria Conservativa",
        description: "Ripara i denti danneggiati da carie o traumi.",
        items: [
          "Otturazione (ricostruzione)",
          "Ricostruzione estetica",
          "Intarsi (in composito o ceramica)",
          "Sigillatura terapeutica",
        ],
      },
      {
        value: "endodonzia",
        title: "Endodonzia (Devitalizzazione)",
        description: "Tratta l'infezione interna del dente.",
        items: [
          "Devitalizzazione (cura canalare)",
          "Ritrattamento canalare",
          "Incappucciamento pulpare",
        ],
      },
      {
        value: "parodontologia",
        title: "Parodontologia",
        description: "Cura gengive e osso che sostengono i denti.",
        items: [
          "Curettage",
          "Scaling e root planing (levigatura radicolare)",
          "Terapia della gengivite",
          "Terapia della parodontite",
          "Chirurgia parodontale",
        ],
      },
      {
        value: "chirurgia-orale",
        title: "Chirurgia Orale",
        description: "Interventi chirurgici su denti e bocca.",
        items: [
          "Estrazione dentale semplice",
          "Estrazione denti del giudizio",
          "Apicectomia",
          "Frenulectomia",
          "Inserimento impianti dentali",
        ],
      },
      {
        value: "implantologia",
        title: "Implantologia",
        description:
          "Sostituisce denti mancanti con radici artificiali in titanio.",
        items: [
          "Impianto singolo",
          "Ponte su impianti",
          "Protesi totale su impianti (All-on-4 / All-on-6)",
          "Rigenerazione ossea",
        ],
      },
      {
        value: "ortodonzia",
        title: "Ortodonzia",
        description: "Allinea i denti e corregge la posizione delle arcate.",
        items: [
          "Apparecchio fisso",
          "Apparecchio mobile",
          "Allineatori trasparenti",
          "Ortodonzia intercettiva (nei bambini)",
          "Contenzione post-trattamento",
        ],
      },
      {
        value: "protesi-dentaria",
        title: "Protesi Dentaria",
        description: "Sostituisce o ricopre denti mancanti o danneggiati.",
        items: [
          "Corona (capsula)",
          "Ponte dentale",
          "Protesi mobile parziale",
          "Dentiera completa",
          "Protesi scheletrata",
        ],
      },
      {
        value: "odontoiatria-estetica",
        title: "Odontoiatria Estetica",
        description: "Migliora l'aspetto del sorriso.",
        items: [
          "Sbiancamento dentale",
          "Faccette dentali",
          "Contouring gengivale",
          "Ricostruzioni estetiche",
          "Smile makeover",
        ],
      },
      {
        value: "pedodonzia",
        title: "Odontoiatria Pediatrica (Pedodonzia)",
        description: "Cure dentali dedicate ai bambini.",
        items: [
          "Cura carie nei denti da latte",
          "Sigillature preventive",
          "Fluoroprofilassi pediatrica",
          "Mantenitori di spazio",
          "Gestione traumi dentali",
        ],
      },
      {
        value: "medicina-estetica",
        title: "Medicina Estetica",
        description: "Trattamenti estetici complementari al sorriso.",
        items: ["Trattamento di pigmentazione e acne", "Filler", "Botox"],
      },
    ],
  },
  en: {
    metaTitle: "Dr. Soliman Saffi | Dentist",
    metaDescription:
      "Dental repair, root canal treatment, and dental implantation with Dr. Soliman Saffi.",
    clinicName: "Soliman Saffi Dental Clinic",
    clinicTag: "Saffi Dental Clinic",
    nav: {
      services: "Services",
      about: "About",
      gallery: "Gallery",
      contact: "Contact",
      book: "Book",
    },
    hero: {
      eyebrow: "Accepting new patients",
      titlePrefix: "Healthy smiles with",
      titleAccent: "Dr. Soliman Saffi",
      titleSuffix: ".",
      text:
        "Doctor graduated from the University of Bologna. Fast, clear, and personalized care with focus on dental repair, root canal treatment, and implantation.",
      points: [
        "University of Bologna Graduate",
        "Professional Certificates",
        "Patient-Centered Care",
      ],
      live: "Available today",
      photoAlt: "Dental clinic illustration",
    },
    stats: [
      { value: "10+", label: "Years of experience", icon: "AwardIcon" },
      { value: "5000+", label: "Patients treated", icon: "UsersIcon" },
      { value: "12", label: "Specialist services", icon: "StethoscopeIcon" },
      { value: "4.9", label: "Average rating", icon: "StarIcon" },
    ],
    bookCta: "Take an Appointment",
    servicesCta: "View Services",
    callNowLabel: "Call now",
    phoneTitle: "Phone Contacts",
    phonePrimary: "+39 320 840 6049",
    phonePrimaryHref: "+39 320 840 6049",
    phoneSecondary: "+39 051 523 065",
    phoneSecondaryHref: "+39051523065",
    email: "info@saffidental.it",
    floatingWhatsappLabel: "Open WhatsApp chat",
    floatingWhatsappTooltip: "Chat on WhatsApp",
    floatingWhatsappPrefill: "Hello, I would like information about an appointment.",
    floatingLocationLabel: "Go to location",
    floatingLocationTooltip: "View location",
    form: {
      heading: "Book your visit",
      subheading: "Fill in the form. We will contact you to confirm your time.",
      nameLabel: "Full Name",
      namePlaceholder: "Your full name",
      phoneLabel: "Phone Number",
      phonePlaceholder: "+39 320 840 6049",
      emailLabel: "Email (optional)",
      emailPlaceholder: "name@example.com",
      serviceLabel: "Service",
      servicePlaceholder: "Select a service",
      dateLabel: "Preferred Date",
      notesLabel: "Notes (optional)",
      notesPlaceholder: "Write any useful details for the appointment",
      submit: "Take an Appointment",
      sendingNotice: "Sending request...",
      successNotice: "Request sent successfully. We will contact you shortly.",
      errorNotice: "Sending failed. Please try again.",
      successPopupTitle: "Appointment taken",
      successPopupText: "We received your appointment request.",
      successPopupButton: "Close",
    },
    aboutEyebrow: "About the doctor",
    aboutTitle: "Modern dental care, expert hands",
    aboutText:
      "Dr. Soliman Saffi is a dentist with strong academic and clinical training. His approach is direct: clear diagnosis, practical treatment plan, and reliable follow-up.",
    aboutQuote:
      "Every patient deserves a tailored care plan, explained clearly and followed up with attention.",
    aboutAuthor: "Dr. Soliman Saffi",
    aboutRole: "Dentist · University of Bologna",
    servicesEyebrow: "Services",
    servicesTitle: "Comprehensive treatments for the whole family",
    servicesText:
      "Comprehensive services in dentistry, oral surgery, implantology, and aesthetic medicine.",
    galleryEyebrow: "Gallery",
    galleryTitle: "A look inside our clinic",
    galleryText:
      "Recent moments from our Instagram. Technology, smiles, and life at the clinic.",
    galleryItems: [
      { label: "Whitening", tag: "Aesthetic" },
      { label: "Implants", tag: "Surgery" },
      { label: "Veneers", tag: "Smile" },
      { label: "Professional cleaning", tag: "Prevention" },
      { label: "Orthodontics", tag: "Alignment" },
      { label: "Pediatric care", tag: "Kids" },
      { label: "Root canal", tag: "Endodontics" },
      { label: "Modern clinic", tag: "Studio" },
    ],
    galleryCta: "Follow us on Instagram",
    contactEyebrow: "Where we are",
    mapTitle: "Come visit us",
    mapText:
      "The clinic is located at Saffi Dental Clinic. Open the map for full address details.",
    mapEmbedTitle: "Dental clinic map",
    mapCta: "Open in Google Maps",
    mapLink: "https://maps.app.goo.gl/F431kso8C3TXYi459",
    mapEmbedUrl:
      "https://www.google.com/maps?q=44.5039031,11.3315083&z=16&output=embed",
    hoursTitle: "Opening hours",
    hoursEyebrow: "When we are open",
    hours: [
      { day: "Monday", time: "09:00 — 19:00" },
      { day: "Tuesday", time: "09:00 — 19:00" },
      { day: "Wednesday", time: "09:00 — 19:00" },
      { day: "Thursday", time: "09:00 — 19:00" },
      { day: "Friday", time: "09:00 — 19:00" },
      { day: "Saturday", time: "10:00 — 14:00" },
      { day: "Sunday", time: "Closed", closed: true },
    ],
    contactCardLabel: "Direct contacts",
    languageLabel: "Language",
    footer: {
      tagline: "Soliman Saffi Dental Clinic · High-quality care with a human touch.",
      colExplore: "Explore",
      colContact: "Contact",
      colFollow: "Follow",
      privacyNote: "© 2026 Saffi Dental Clinic — All rights reserved.",
      designedBy: "Designed by Rayen HARHOURI",
    },
    services: [
      {
        value: "preventive-dentistry",
        title: "Preventive Dentistry",
        description: "Prevents dental problems before they appear.",
        items: [
          "Dental scaling (professional cleaning)",
          "Fluoride therapy",
          "Fissure sealing",
          "Periodic check-up visit",
          "Professional oral hygiene",
        ],
      },
      {
        value: "conservative-dentistry",
        title: "Conservative Dentistry",
        description: "Repairs teeth damaged by decay or trauma.",
        items: [
          "Filling (reconstruction)",
          "Aesthetic reconstruction",
          "Inlays (composite or ceramic)",
          "Therapeutic sealing",
        ],
      },
      {
        value: "endodontics",
        title: "Endodontics (Root Canal Therapy)",
        description: "Treats internal tooth infection.",
        items: [
          "Root canal therapy",
          "Root canal retreatment",
          "Pulp capping",
        ],
      },
      {
        value: "periodontology",
        title: "Periodontology",
        description: "Treats gums and supporting bone.",
        items: [
          "Curettage",
          "Scaling and root planing",
          "Gingivitis therapy",
          "Periodontitis therapy",
          "Periodontal surgery",
        ],
      },
      {
        value: "oral-surgery",
        title: "Oral Surgery",
        description: "Surgical procedures for teeth and oral tissues.",
        items: [
          "Simple tooth extraction",
          "Wisdom tooth extraction",
          "Apicoectomy",
          "Frenectomy",
          "Dental implant insertion",
        ],
      },
      {
        value: "implantology",
        title: "Implantology",
        description: "Replaces missing teeth with titanium artificial roots.",
        items: [
          "Single implant",
          "Implant-supported bridge",
          "Full implant prosthesis (All-on-4 / All-on-6)",
          "Bone regeneration",
        ],
      },
      {
        value: "orthodontics",
        title: "Orthodontics",
        description: "Aligns teeth and corrects arch position.",
        items: [
          "Fixed braces",
          "Removable appliance",
          "Clear aligners",
          "Interceptive orthodontics (for children)",
          "Post-treatment retention",
        ],
      },
      {
        value: "dental-prosthetics",
        title: "Dental Prosthetics",
        description: "Replaces or covers missing and damaged teeth.",
        items: [
          "Crown",
          "Dental bridge",
          "Partial removable denture",
          "Complete denture",
          "Cast metal partial denture",
        ],
      },
      {
        value: "aesthetic-dentistry",
        title: "Aesthetic Dentistry",
        description: "Improves smile appearance.",
        items: [
          "Teeth whitening",
          "Dental veneers",
          "Gum contouring",
          "Aesthetic restorations",
          "Smile makeover",
        ],
      },
      {
        value: "pediatric-dentistry",
        title: "Pediatric Dentistry",
        description: "Dental care dedicated to children.",
        items: [
          "Caries treatment in primary teeth",
          "Preventive sealants",
          "Pediatric fluoride therapy",
          "Space maintainers",
          "Dental trauma management",
        ],
      },
      {
        value: "aesthetic-medicine",
        title: "Aesthetic Medicine",
        description: "Complementary facial aesthetic treatments.",
        items: ["Pigmentation and acne treatment", "Fillers", "Botox"],
      },
    ],
  },
  ar: {
    metaTitle: "د. سليمان صافي | طبيب أسنان",
    metaDescription:
      "ترميم الأسنان، علاج الجذور، وزراعة الأسنان مع الدكتور سليمان صافي.",
    clinicName: "عيادة سليمان صافي لطب الأسنان",
    clinicTag: "Saffi Dental Clinic",
    nav: {
      services: "الخدمات",
      about: "من نحن",
      gallery: "المعرض",
      contact: "اتصل بنا",
      book: "احجز",
    },
    hero: {
      eyebrow: "نستقبل مرضى جدد",
      titlePrefix: "ابتسامات صحية مع",
      titleAccent: "د. سليمان صافي",
      titleSuffix: ".",
      text:
        "طبيب متخرج من جامعة بولونيا. رعاية سريعة وواضحة ومخصصة مع تركيز على ترميم الأسنان، علاج الجذور، وزراعة الأسنان.",
      points: [
        "خريج جامعة بولونيا",
        "شهادات مهنية",
        "رعاية مخصصة لكل مريض",
      ],
      live: "متاح اليوم",
      photoAlt: "رسم توضيحي لعيادة أسنان",
    },
    stats: [
      { value: "+10", label: "سنوات من الخبرة", icon: "AwardIcon" },
      { value: "+5000", label: "مريض عولجوا", icon: "UsersIcon" },
      { value: "12", label: "تخصصًا علاجيًا", icon: "StethoscopeIcon" },
      { value: "4.9", label: "متوسط التقييم", icon: "StarIcon" },
    ],
    bookCta: "احجز موعدًا",
    servicesCta: "عرض الخدمات",
    callNowLabel: "اتصل الآن",
    phoneTitle: "أرقام الهاتف",
    phonePrimary: "+39 320 840 6049",
    phonePrimaryHref: "+39 320 840 6049",
    phoneSecondary: "+39 051 523 065",
    phoneSecondaryHref: "+39051523065",
    email: "contact@saffidental.com",
    floatingWhatsappLabel: "افتح محادثة واتساب",
    floatingWhatsappTooltip: "تواصل عبر واتساب",
    floatingWhatsappPrefill: "مرحبًا، أود الاستفسار عن موعد.",
    floatingLocationLabel: "الانتقال إلى الموقع",
    floatingLocationTooltip: "عرض الموقع",
    form: {
      heading: "احجز زيارتك",
      subheading: "املأ النموذج وسنتواصل معك لتأكيد الموعد.",
      nameLabel: "الاسم الكامل",
      namePlaceholder: "اكتب اسمك الكامل",
      phoneLabel: "رقم الهاتف",
      phonePlaceholder: "+39 320 840 6049",
      emailLabel: "البريد الإلكتروني (اختياري)",
      emailPlaceholder: "name@example.com",
      serviceLabel: "الخدمة",
      servicePlaceholder: "اختر خدمة",
      dateLabel: "التاريخ المفضل",
      notesLabel: "ملاحظات (اختياري)",
      notesPlaceholder: "اكتب أي تفاصيل مفيدة للموعد",
      submit: "احجز الموعد",
      sendingNotice: "جاري إرسال الطلب...",
      successNotice: "تم إرسال الطلب بنجاح. سنتواصل معك قريبًا.",
      errorNotice: "فشل الإرسال. حاول مرة أخرى.",
      successPopupTitle: "تم حجز الموعد",
      successPopupText: "تم استلام طلب الموعد بنجاح.",
      successPopupButton: "إغلاق",
    },
    aboutEyebrow: "عن الدكتور",
    aboutTitle: "رعاية أسنان حديثة بأيدٍ خبيرة",
    aboutText:
      "الدكتور سليمان صافي طبيب أسنان ذو تأهيل أكاديمي وسريري قوي. منهجه مباشر: تشخيص واضح، خطة علاج عملية، ومتابعة موثوقة لكل مريض.",
    aboutQuote:
      "كل مريض يستحق خطة علاج مخصصة، تُشرح بوضوح وتُتابَع باهتمام.",
    aboutAuthor: "د. سليمان صافي",
    aboutRole: "طبيب أسنان · جامعة بولونيا",
    servicesEyebrow: "الخدمات",
    servicesTitle: "علاجات شاملة لكل أفراد العائلة",
    servicesText:
      "خدمات متكاملة في طب الأسنان، جراحة الفم، زراعة الأسنان، والطب التجميلي.",
    galleryEyebrow: "المعرض",
    galleryTitle: "نظرة على عيادتنا",
    galleryText:
      "أحدث اللقطات من حسابنا على إنستغرام: تقنية وابتسامات وتفاصيل من العيادة.",
    galleryItems: [
      { label: "تبييض الأسنان", tag: "تجميلي" },
      { label: "الزراعة", tag: "جراحة" },
      { label: "الفينير", tag: "ابتسامة" },
      { label: "تنظيف احترافي", tag: "وقاية" },
      { label: "تقويم الأسنان", tag: "محاذاة" },
      { label: "أسنان الأطفال", tag: "أطفال" },
      { label: "علاج الجذور", tag: "العصب" },
      { label: "عيادة حديثة", tag: "الاستوديو" },
    ],
    galleryCta: "تابعنا على إنستغرام",
    contactEyebrow: "موقعنا",
    mapTitle: "تفضل بزيارتنا",
    mapText:
      "تقع العيادة في Saffi Dental Clinic. افتح الخريطة لمعرفة العنوان الكامل.",
    mapEmbedTitle: "خريطة العيادة",
    mapCta: "افتح في خرائط Google",
    mapLink: "https://maps.app.goo.gl/F431kso8C3TXYi459",
    mapEmbedUrl:
      "https://www.google.com/maps?q=44.5039031,11.3315083&z=16&output=embed",
    hoursTitle: "أوقات العمل",
    hoursEyebrow: "متى نكون مفتوحين",
    hours: [
      { day: "الإثنين", time: "09:00 — 19:00" },
      { day: "الثلاثاء", time: "09:00 — 19:00" },
      { day: "الأربعاء", time: "09:00 — 19:00" },
      { day: "الخميس", time: "09:00 — 19:00" },
      { day: "الجمعة", time: "09:00 — 19:00" },
      { day: "السبت", time: "10:00 — 14:00" },
      { day: "الأحد", time: "مغلق", closed: true },
    ],
    contactCardLabel: "اتصال مباشر",
    languageLabel: "اللغة",
    footer: {
      tagline:
        "عيادة سليمان صافي لطب الأسنان · رعاية بجودة عالية بلمسة إنسانية.",
      colExplore: "استكشف",
      colContact: "تواصل",
      colFollow: "تابعنا",
      privacyNote: "© 2026 عيادة صافي لطب الأسنان — جميع الحقوق محفوظة.",
      designedBy: "تصميم Rayen HARHOURI",
    },
    services: [
      {
        value: "preventive-dentistry",
        title: "طب الأسنان الوقائي",
        description: "يهدف إلى الوقاية من مشاكل الأسنان قبل ظهورها.",
        items: [
          "إزالة الجير (تنظيف أسنان احترافي)",
          "الوقاية بالفلورايد",
          "سد الشقوق",
          "زيارة متابعة دورية",
          "نظافة فموية احترافية",
        ],
      },
      {
        value: "conservative-dentistry",
        title: "طب الأسنان الترميمي",
        description: "يعالج الأسنان المتضررة بسبب التسوس أو الصدمات.",
        items: [
          "حشوة (إعادة بناء السن)",
          "ترميم تجميلي",
          "إنلاي (كومبوزيت أو سيراميك)",
          "سد علاجي",
        ],
      },
      {
        value: "endodontics",
        title: "علاج جذور الأسنان (سحب العصب)",
        description: "يعالج العدوى داخل السن.",
        items: [
          "علاج الجذور (سحب العصب)",
          "إعادة علاج الجذور",
          "تغطية اللب",
        ],
      },
      {
        value: "periodontology",
        title: "طب دواعم الأسنان",
        description: "يعالج اللثة والعظم الداعم للأسنان.",
        items: [
          "الكحت اللثوي (Curettage)",
          "إزالة الجير وكشط الجذور",
          "علاج التهاب اللثة",
          "علاج التهاب دواعم الأسنان",
          "جراحة دواعم الأسنان",
        ],
      },
      {
        value: "oral-surgery",
        title: "جراحة الفم",
        description: "إجراءات جراحية للأسنان والفم.",
        items: [
          "قلع سن بسيط",
          "قلع ضرس العقل",
          "استئصال ذروة الجذر",
          "قص اللجام",
          "زرع غرسات الأسنان",
        ],
      },
      {
        value: "implantology",
        title: "زراعة الأسنان",
        description: "تعوّض الأسنان المفقودة بجذور صناعية من التيتانيوم.",
        items: [
          "زرعة واحدة",
          "جسر مدعوم بالزرعات",
          "تعويض كامل على الزرعات (All-on-4 / All-on-6)",
          "تجديد العظم",
        ],
      },
      {
        value: "orthodontics",
        title: "تقويم الأسنان",
        description: "يحاذي الأسنان ويصحح وضعية الفكين.",
        items: [
          "تقويم ثابت",
          "تقويم متحرك",
          "تقويم شفاف",
          "تقويم اعتراضي للأطفال",
          "مثبت ما بعد العلاج",
        ],
      },
      {
        value: "dental-prosthetics",
        title: "التركيبات السنية",
        description: "تعوض أو تغطي الأسنان المفقودة أو المتضررة.",
        items: [
          "تاج (كراون)",
          "جسر أسنان",
          "طقم متحرك جزئي",
          "طقم أسنان كامل",
          "طقم هيكلي معدني",
        ],
      },
      {
        value: "aesthetic-dentistry",
        title: "طب الأسنان التجميلي",
        description: "يحسن مظهر الابتسامة.",
        items: [
          "تبييض الأسنان",
          "قشور خزفية (فينير)",
          "تجميل اللثة",
          "ترميمات تجميلية",
          "تصميم الابتسامة",
        ],
      },
      {
        value: "pediatric-dentistry",
        title: "طب أسنان الأطفال",
        description: "علاجات أسنان مخصصة للأطفال.",
        items: [
          "علاج تسوس الأسنان اللبنية",
          "سد الشقوق الوقائي",
          "الوقاية بالفلورايد للأطفال",
          "حافظات المسافة",
          "علاج إصابات الأسنان",
        ],
      },
      {
        value: "aesthetic-medicine",
        title: "الطب التجميلي",
        description: "علاجات تجميلية مكملة للابتسامة.",
        items: ["علاج التصبغات وحب الشباب", "فيلر", "بوتوكس"],
      },
    ],
  },
};

const STAT_ICON_MAP = {
  AwardIcon,
  UsersIcon,
  StethoscopeIcon,
  StarIcon,
};

const GALLERY_ICONS = [
  SparkleIcon,
  ToothIcon,
  SmileIcon,
  ShieldIcon,
  AwardIcon,
  UsersIcon,
  SyringeIcon,
  StethoscopeIcon,
];

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }) {
  const { lang } = await params;
  const t = translations[lang] ?? translations.it;

  return {
    title: t.metaTitle,
    description: t.metaDescription,
    alternates: {
      canonical: `/${lang}`,
      languages: {
        it: "/it",
        en: "/en",
        ar: "/ar",
      },
    },
  };
}

export default async function LocalizedHome({ params }) {
  const { lang } = await params;
  const t = translations[lang];

  if (!t) {
    notFound();
  }

  const isRtl = lang === "ar";
  const todayIndex = (new Date().getDay() + 6) % 7; // Monday=0..Sunday=6

  return (
    <div
      className={`site-shell${isRtl ? " rtl" : ""}`}
      dir={isRtl ? "rtl" : "ltr"}
      lang={lang}
    >
      {/* Top navigation */}
      <header className="site-nav">
        <div className="container nav-inner">
          <Link href={`/${lang}`} className="nav-brand" aria-label={t.clinicName}>
            <span className="nav-brand-mark">
              <ToothIcon />
            </span>
            <span className="nav-brand-text">
              <span>Saffi Dental</span>
              <small>{t.clinicTag}</small>
            </span>
          </Link>

          <nav className="nav-links" aria-label="Primary">
            <a href="#services">{t.nav.services}</a>
            <a href="#about">{t.nav.about}</a>
            <a href="#gallery">{t.nav.gallery}</a>
            <a href="#location">{t.nav.contact}</a>
          </nav>

          <div className="nav-actions">
            <nav className="language-switch" aria-label={t.languageLabel}>
              <Link className={`lang-pill ${lang === "it" ? "active" : ""}`} href="/it">
                IT
              </Link>
              <Link className={`lang-pill ${lang === "en" ? "active" : ""}`} href="/en">
                EN
              </Link>
              <Link className={`lang-pill ${lang === "ar" ? "active" : ""}`} href="/ar">
                AR
              </Link>
            </nav>
            <a className="nav-cta" href="#appointment">
              <CalendarIcon style={{ width: 14, height: 14, fill: "currentColor" }} />
              {t.nav.book}
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="hero container" id="appointment">
        <div className="hero-grid">
          <div className="hero-copy">
            <span className="hero-eyebrow">
              <span className="dot">
                <SparkleIcon />
              </span>
              {t.hero.eyebrow}
            </span>
            <h1 className="hero-title">
              {t.hero.titlePrefix} <em>{t.hero.titleAccent}</em>
              {t.hero.titleSuffix}
            </h1>
            <p className="hero-text">{t.hero.text}</p>

            <div className="hero-points">
              {t.hero.points.map((point) => (
                <span key={point}>{point}</span>
              ))}
            </div>

            <div className="hero-actions">
              <a className="btn btn-primary" href="#appointment-form">
                <CalendarIcon />
                {t.bookCta}
              </a>
              <a className="btn btn-ghost" href="#services">
                {t.servicesCta}
                <ArrowRightIcon />
              </a>
              <a className="btn btn-outline" href={`tel:${t.phonePrimaryHref}`}>
                <PhoneIcon />
                {t.phonePrimary}
              </a>
            </div>
          </div>

          <div className="hero-booking-panel">
            <div className="hero-illustration-wrap">
              <Image
                src="/dental-hero.svg"
                alt={t.hero.photoAlt}
                width={640}
                height={420}
                priority
              />
              <span className="hero-illustration-tag">{t.hero.live}</span>
            </div>

            <AppointmentForm
              form={t.form}
              services={t.services}
              locale={lang}
            />
          </div>
        </div>

        {/* Stats strip */}
        <div className="stats-strip">
          {t.stats.map((stat) => {
            const Icon = STAT_ICON_MAP[stat.icon] ?? StarIcon;
            return (
              <div key={stat.label} className="stat-card">
                <div className="stat-icon">
                  <Icon />
                </div>
                <span className="stat-value">{stat.value}</span>
                <span className="stat-label">{stat.label}</span>
              </div>
            );
          })}
        </div>
      </section>

      {/* About */}
      <section className="section container" id="about">
        <div className="about-grid">
          <div>
            <span className="section-eyebrow">{t.aboutEyebrow}</span>
            <h2 style={{ marginTop: 14, fontSize: "clamp(1.9rem, 4.2vw, 3rem)" }}>
              {t.aboutTitle}
            </h2>
            <p style={{ marginTop: 14, fontSize: "1.02rem", lineHeight: 1.7 }}>
              {t.aboutText}
            </p>
          </div>
          <div className="about-card">
            <p className="about-quote">{t.aboutQuote}</p>
            <div className="about-meta">
              <div className="about-meta-avatar">SS</div>
              <div className="about-meta-text">
                <strong>{t.aboutAuthor}</strong>
                <small>{t.aboutRole}</small>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section container" id="services">
        <div className="section-head">
          <span className="section-eyebrow">{t.servicesEyebrow}</span>
          <h2>{t.servicesTitle}</h2>
          <p>{t.servicesText}</p>
        </div>

        <div className="service-grid">
          {t.services.map((service, index) => {
            const Icon = SERVICE_ICONS[index] ?? ToothIcon;
            return (
              <article key={service.title} className="service-card">
                <div className="service-icon">
                  <Icon />
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <ul className="service-list">
                  {service.items.map((item) => (
                    <li key={item}>
                      <CheckIcon style={{ width: 14, height: 14, color: "var(--accent-strong)", marginTop: 3, flex: "0 0 14px" }} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </section>

      {/* Gallery */}
      <section className="section container" id="gallery">
        <div className="gallery-head">
          <div>
            <span className="section-eyebrow">{t.galleryEyebrow}</span>
            <h2 style={{ marginTop: 12, fontSize: "clamp(1.9rem, 4.2vw, 3rem)" }}>
              {t.galleryTitle}
            </h2>
            <p style={{ marginTop: 10, maxWidth: 60 + "ch" }}>{t.galleryText}</p>
          </div>
          <a
            className="btn btn-ghost"
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            <InstagramIcon />
            @saffidental
          </a>
        </div>

        <div className="gallery-grid">
          {t.galleryItems.map((item, index) => {
            const Icon = GALLERY_ICONS[index % GALLERY_ICONS.length];
            return (
              <a
                key={item.label}
                className="gallery-item"
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  background: `linear-gradient(${135 + (index % 4) * 25}deg, var(--teal-50) 0%, var(--bg-mint) 100%)`,
                }}
              >
                <span className="gallery-item-tag">{item.tag}</span>
                <span className="gallery-item-illu">
                  <Icon />
                </span>
                <span className="gallery-item-overlay">
                  <span className="gallery-item-label">{item.label}</span>
                </span>
              </a>
            );
          })}
        </div>

        <div className="gallery-cta">
          <a
            className="btn btn-primary"
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            <InstagramIcon />
            {t.galleryCta}
          </a>
        </div>
      </section>

      {/* Contact / Map / Hours */}
      <section className="section container" id="location">
        <div className="section-head">
          <span className="section-eyebrow">{t.contactEyebrow}</span>
          <h2>{t.mapTitle}</h2>
          <p>{t.mapText}</p>
        </div>

        <div className="booking-grid">
          <div>
            <div className="map-frame">
              <iframe
                title={t.mapEmbedTitle}
                src={t.mapEmbedUrl}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <a
              className="btn btn-ghost map-cta"
              href={t.mapLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MapPinIcon />
              {t.mapCta}
            </a>
          </div>

          <aside className="info-card" aria-label={t.hoursTitle}>
            <div>
              <span className="info-eyebrow">{t.hoursEyebrow}</span>
              <h3>{t.hoursTitle}</h3>
            </div>
            <ul className="hours-list">
              {t.hours.map((row, i) => (
                <li
                  key={row.day}
                  className={`hours-row${i === todayIndex ? " today" : ""}${row.closed ? " closed" : ""}`}
                >
                  <span className="day">{row.day}</span>
                  <span className="time">{row.time}</span>
                </li>
              ))}
            </ul>

            <div className="info-divider" />

            <div>
              <span className="info-eyebrow">{t.contactCardLabel}</span>
              <div className="info-contact" style={{ marginTop: 10 }}>
                <div className="info-contact-row">
                  <span className="ico">
                    <PhoneIcon />
                  </span>
                  <a href={`tel:${t.phonePrimaryHref}`}>{t.phonePrimary}</a>
                </div>
                <div className="info-contact-row">
                  <span className="ico">
                    <PhoneIcon />
                  </span>
                  <a href={`tel:${t.phoneSecondaryHref}`}>{t.phoneSecondary}</a>
                </div>
                <div className="info-contact-row">
                  <span className="ico">
                    <MailIcon />
                  </span>
                  <a href={`mailto:${t.email}`}>{t.email}</a>
                </div>
                <div className="info-contact-row">
                  <span className="ico">
                    <MapPinIcon />
                  </span>
                  <a
                    href={t.mapLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t.clinicTag}
                  </a>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* Footer */}
      <footer className="site-footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <Link href={`/${lang}`} className="nav-brand" aria-label={t.clinicName}>
                <span className="nav-brand-mark">
                  <ToothIcon />
                </span>
                <span className="nav-brand-text">
                  <span>Saffi Dental</span>
                  <small>{t.clinicTag}</small>
                </span>
              </Link>
              <p>{t.footer.tagline}</p>
              <div className="footer-socials">
                <a
                  className="footer-social"
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <InstagramIcon />
                </a>
                <a
                  className="footer-social"
                  href="#"
                  aria-label="Facebook"
                >
                  <FacebookIcon />
                </a>
                <a
                  className="footer-social"
                  href={`tel:${t.phonePrimaryHref}`}
                  aria-label="Phone"
                >
                  <PhoneIcon />
                </a>
              </div>
            </div>

            <div className="footer-col">
              <h4>{t.footer.colExplore}</h4>
              <a href="#services">{t.nav.services}</a>
              <a href="#about">{t.nav.about}</a>
              <a href="#gallery">{t.nav.gallery}</a>
              <a href="#location">{t.nav.contact}</a>
            </div>

            <div className="footer-col">
              <h4>{t.footer.colContact}</h4>
              <a href={`tel:${t.phonePrimaryHref}`}>{t.phonePrimary}</a>
              <a href={`tel:${t.phoneSecondaryHref}`}>{t.phoneSecondary}</a>
              <a href={`mailto:${t.email}`}>{t.email}</a>
              <a href={t.mapLink} target="_blank" rel="noopener noreferrer">
                {t.clinicTag}
              </a>
            </div>

            <div className="footer-col">
              <h4>{t.footer.colFollow}</h4>
              <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">
                Instagram
              </a>
              <a href="#">Facebook</a>
              <a
                href={`https://wa.me/${WHATSAPP_NOTIFY_TO.replace(/\D/g, "")}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp
              </a>
            </div>
          </div>

          <div className="footer-bottom">
            <span>{t.footer.privacyNote}</span>
            <a
              href="https://linktr.ee/rayenharhouri"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t.footer.designedBy}
            </a>
          </div>
        </div>
      </footer>

      <FloatingWhatsAppButton
        phoneNumber={WHATSAPP_NOTIFY_TO}
        label={t.floatingWhatsappLabel}
        tooltip={t.floatingWhatsappTooltip}
        prefilledMessage={t.floatingWhatsappPrefill}
      />
      <FloatingLocationButton
        label={t.floatingLocationLabel}
        tooltip={t.floatingLocationTooltip}
      />
    </div>
  );
}

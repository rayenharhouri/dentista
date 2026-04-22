import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import AppointmentForm from "@/components/AppointmentForm";
import FloatingWhatsAppButton from "@/components/FloatingWhatsAppButton";
import FloatingLocationButton from "@/components/FloatingLocationButton";

const locales = ["it", "en", "ar"];
const WHATSAPP_NOTIFY_TO = "+393208406049";

const translations = {
  it: {
    metaTitle: "Dott. Soliman Saffi | Dentista",
    metaDescription:
      "Riparazione dentale, terapia canalare e implantologia con il Dott. Soliman Saffi.",
    clinicName: "Studio Dentistico Soliman Saffi",
    heroTitle: "Prenota un appuntamento con il Dott. Soliman Saffi",
    heroText:
      "Dottore laureato all'Universita di Bologna. Cure chiare, rapide e personalizzate con focus su riparazione dentale, terapia canalare e implantologia.",
    points: [
      "Laurea - Universita di Bologna",
      "Molti Certificati Professionali",
      "Trattamenti su Misura del Paziente",
    ],
    bookCta: "Prenota un Appuntamento",
    servicesCta: "Scopri i Servizi",
    callNowLabel: "Chiama ora",
    phoneTitle: "Contatti Telefonici",
    phonePrimary: "+39 320 840 6049",
    phonePrimaryHref: "+39 320 840 6049",
    phoneSecondary: "+39 051 523 065",
    phoneSecondaryHref: "+39051523065",
    floatingWhatsappLabel: "Apri chat WhatsApp",
    floatingWhatsappTooltip: "Chatta su WhatsApp",
    floatingWhatsappPrefill: "Ciao, vorrei informazioni per un appuntamento.",
    floatingLocationLabel: "Vai alla mappa",
    floatingLocationTooltip: "Vedi posizione",
    form: {
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
    aboutTitle: "Chi e Soliman?",
    aboutText:
      "Il Dott. Soliman Saffi e un dentista con forte preparazione accademica e clinica. Il suo approccio e diretto: diagnosi chiara, piano di cura pratico e follow-up affidabile.",
    servicesTitle: "Servizi",
    servicesText:
      "Servizi completi di odontoiatria, chirurgia orale, implantologia e medicina estetica.",
    mapTitle: "Dove Siamo",
    mapText:
      "Lo studio si trova presso Saffi Dental Clinic. Apri la mappa per l'indirizzo completo.",
    mapEmbedTitle: "Mappa dello studio dentistico",
    mapCta: "Apri su Google Maps",
    mapLink: "https://maps.app.goo.gl/F431kso8C3TXYi459",
    mapEmbedUrl: "https://www.google.com/maps?q=44.5039031,11.3315083&z=16&output=embed",
    heroImageAlt: "Illustrazione di uno studio dentistico",
    languageLabel: "Lingua",
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
    heroTitle: "Book an Appointment with Dr. Soliman Saffi",
    heroText:
      "Doctor graduated from the University of Bologna. Fast, clear, and personalized care with focus on dental repair, root canal treatment, and implantation.",
    points: [
      "University of Bologna Graduate",
      "Many Professional Certificates",
      "Patient-Centered Treatments",
    ],
    bookCta: "Take an Appointment",
    servicesCta: "View Services",
    callNowLabel: "Call now",
    phoneTitle: "Phone Contacts",
    phonePrimary: "+39 320 840 6049",
    phonePrimaryHref: "+39 320 840 6049",
    phoneSecondary: "+39 051 523 065",
    phoneSecondaryHref: "+39051523065",
    floatingWhatsappLabel: "Open WhatsApp chat",
    floatingWhatsappTooltip: "Chat on WhatsApp",
    floatingWhatsappPrefill: "Hello, I would like information about an appointment.",
    floatingLocationLabel: "Go to location",
    floatingLocationTooltip: "View location",
    form: {
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
      successNotice:
        "Request sent successfully. We will contact you shortly.",
      errorNotice: "Sending failed. Please try again.",
      successPopupTitle: "Appointment taken",
      successPopupText: "We received your appointment request.",
      successPopupButton: "Close",
    },
    aboutTitle: "Who is Soliman?",
    aboutText:
      "Dr. Soliman Saffi is a dentist with strong academic and clinical training. His approach is direct: clear diagnosis, practical treatment plan, and reliable follow-up.",
    servicesTitle: "Services",
    servicesText:
      "Comprehensive services in dentistry, oral surgery, implantology, and aesthetic medicine.",
    mapTitle: "Find Us",
    mapText:
      "The clinic is located at Saffi Dental Clinic. Open the map for full address details.",
    mapEmbedTitle: "Dental clinic map",
    mapCta: "Open in Google Maps",
    mapLink: "https://maps.app.goo.gl/F431kso8C3TXYi459",
    mapEmbedUrl: "https://www.google.com/maps?q=44.5039031,11.3315083&z=16&output=embed",
    heroImageAlt: "Dental clinic illustration",
    languageLabel: "Language",
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
    heroTitle: "احجز موعدًا مع الدكتور سليمان صافي",
    heroText:
      "طبيب متخرج من جامعة بولونيا. رعاية سريعة وواضحة ومخصصة مع تركيز على ترميم الأسنان، علاج الجذور، وزراعة الأسنان.",
    points: [
      "خريج جامعة بولونيا",
      "حاصل على العديد من الشهادات المهنية",
      "علاجات مخصصة لكل مريض",
    ],
    bookCta: "احجز موعدًا",
    servicesCta: "عرض الخدمات",
    callNowLabel: "اتصل الآن",
    phoneTitle: "أرقام الهاتف",
    phonePrimary: "+39 320 840 6049",
    phonePrimaryHref: "+39 320 840 6049",
    phoneSecondary: "+39 051 523 065",
    phoneSecondaryHref: "+39051523065",
    floatingWhatsappLabel: "افتح محادثة واتساب",
    floatingWhatsappTooltip: "تواصل عبر واتساب",
    floatingWhatsappPrefill: "مرحبًا، أود الاستفسار عن موعد.",
    floatingLocationLabel: "الانتقال إلى الموقع",
    floatingLocationTooltip: "عرض الموقع",
    form: {
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
    aboutTitle: "من هو سليمان؟",
    aboutText:
      "الدكتور سليمان صافي طبيب أسنان ذو تأهيل أكاديمي وسريري قوي. منهجه مباشر: تشخيص واضح، خطة علاج عملية، ومتابعة موثوقة لكل مريض.",
    servicesTitle: "الخدمات",
    servicesText:
      "خدمات متكاملة في طب الأسنان، جراحة الفم، زراعة الأسنان، والطب التجميلي.",
    mapTitle: "موقعنا",
    mapText:
      "تقع العيادة في Saffi Dental Clinic. افتح الخريطة لمعرفة العنوان الكامل.",
    mapEmbedTitle: "خريطة العيادة",
    mapCta: "افتح في خرائط Google",
    mapLink: "https://maps.app.goo.gl/F431kso8C3TXYi459",
    mapEmbedUrl: "https://www.google.com/maps?q=44.5039031,11.3315083&z=16&output=embed",
    heroImageAlt: "رسم توضيحي لعيادة أسنان",
    languageLabel: "اللغة",
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

  return (
    <div
      className={`site-shell${isRtl ? " rtl" : ""}`}
      dir={isRtl ? "rtl" : "ltr"}
      lang={lang}
    >
      <section className="hero-booking" id="appointment">
        <div className="booking-copy">
          <div className="hero-top">
            <p className="eyebrow">{t.clinicName}</p>
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
          </div>

          <h1>{t.heroTitle}</h1>
          <p className="hero-text">{t.heroText}</p>
          <div className="hero-points">
            {t.points.map((point) => (
              <span key={point}>{point}</span>
            ))}
          </div>
          <div className="hero-links">
            <a className="cta" href="#appointment-form">
              {t.bookCta}
            </a>
            <a className="ghost-cta" href="#services">
              {t.servicesCta}
            </a>
            <a className="phone-cta" href={`tel:${t.phonePrimaryHref}`}>
              {t.callNowLabel}: {t.phonePrimary}
            </a>
          </div>

          <div className="phone-block">
            <p>{t.phoneTitle}</p>
            <div className="phone-list">
              <a href={`tel:${t.phonePrimaryHref}`}>{t.phonePrimary}</a>
              <a href={`tel:${t.phoneSecondaryHref}`}>{t.phoneSecondary}</a>
            </div>
          </div>
        </div>

        <div className="booking-panel">
          <Image
            className="hero-illustration"
            src="/dental-hero.svg"
            alt={t.heroImageAlt}
            width={640}
            height={420}
            priority
          />

          <AppointmentForm
            form={t.form}
            services={t.services}
            locale={lang}
          />
        </div>
      </section>

      <main className="content">
        <section className="panel" id="about">
          <h2>{t.aboutTitle}</h2>
          <p>{t.aboutText}</p>
        </section>

        <section className="panel" id="services">
          <div className="section-head">
            <h2>{t.servicesTitle}</h2>
            <p>{t.servicesText}</p>
          </div>

          <div className="service-grid">
            {t.services.map((service) => (
              <article key={service.title} className="service-card">
                <div className="card-head">
                  <Image
                    src="/tooth-badge.svg"
                    alt=""
                    width={42}
                    height={42}
                    aria-hidden="true"
                  />
                  <h3>{service.title}</h3>
                </div>
                <p>{service.description}</p>
                <ul className="service-list">
                  {service.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="panel map-panel" id="location">
          <div className="section-head">
            <h2>{t.mapTitle}</h2>
            <p>{t.mapText}</p>
          </div>
          <div className="map-frame">
            <iframe
              title={t.mapEmbedTitle}
              src={t.mapEmbedUrl}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <a
            className="map-link"
            href={t.mapLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            {t.mapCta}
          </a>
        </section>
      </main>
      <footer className="site-footer">
        <a
          href="https://linktr.ee/rayenharhouri"
          target="_blank"
          rel="noopener noreferrer"
        >
          designed by Rayen HARHOURI © 2026
        </a>
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

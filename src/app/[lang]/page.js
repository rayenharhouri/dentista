import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

const locales = ["it", "en"];

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
    phonePrimary: "+39 320 8406 049",
    phonePrimaryHref: "+393208406049",
    phoneSecondary: "+39 051 523 065",
    phoneSecondaryHref: "+39051523065",
    form: {
      nameLabel: "Nome e Cognome",
      namePlaceholder: "Il tuo nome completo",
      phoneLabel: "Telefono",
      phonePlaceholder: "320 840 6049",
      phonePrefix: "+39",
      phonePatternTitle:
        "Inserisci un numero italiano valido. Esempio: +39 320 840 6049",
      serviceLabel: "Servizio",
      servicePlaceholder: "Seleziona un servizio",
      dateLabel: "Data preferita",
      submit: "Prenota Appuntamento",
    },
    aboutTitle: "Chi e Soliman?",
    aboutText:
      "Il Dott. Soliman Saffi e un dentista con forte preparazione accademica e clinica. Il suo approccio e diretto: diagnosi chiara, piano di cura pratico e follow-up affidabile.",
    servicesTitle: "Servizi",
    servicesText:
      "I servizi principali includono riparazione dentale, terapia canalare e implantologia dentale.",
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
        value: "repair-restoration",
        title: "Riparazione e Restauro Dentale",
        description:
          "Riparazione dei denti danneggiati, fratturati o usurati con tecniche moderne di restauro.",
      },
      {
        value: "root-canal",
        title: "Terapia Canalare",
        description:
          "Trattamento canalare preciso per eliminare l'infezione, proteggere il dente e ridurre il dolore.",
      },
      {
        value: "implantation",
        title: "Implantologia Dentale",
        description:
          "Impianti dentali progettati per ripristinare funzione, comfort ed estetica del sorriso.",
      },
      {
        value: "checkups",
        title: "Controlli Preventivi",
        description:
          "Visite periodiche e igiene per prevenire problemi e mantenere stabile la salute orale.",
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
    phonePrimary: "+39 320 8406 049",
    phonePrimaryHref: "+393208406049",
    phoneSecondary: "+39 051 523 065",
    phoneSecondaryHref: "+39051523065",
    form: {
      nameLabel: "Full Name",
      namePlaceholder: "Your full name",
      phoneLabel: "Phone Number",
      phonePlaceholder: "320 840 6049",
      phonePrefix: "🇮🇹 +39",
      phonePatternTitle:
        "Enter a valid Italian phone number. Example: +39 320 840 6049",
      serviceLabel: "Service",
      servicePlaceholder: "Select a service",
      dateLabel: "Preferred Date",
      submit: "Take an Appointment",
    },
    aboutTitle: "Who is Soliman?",
    aboutText:
      "Dr. Soliman Saffi is a dentist with strong academic and clinical training. His approach is direct: clear diagnosis, practical treatment plan, and reliable follow-up.",
    servicesTitle: "Services",
    servicesText:
      "Core services include dental repair, root canal treatment, and dental implantation.",
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
        value: "repair-restoration",
        title: "Dental Repair & Restoration",
        description:
          "Tooth repair for damage, fractures, and worn enamel with modern restorative techniques.",
      },
      {
        value: "root-canal",
        title: "Root Canal Treatment",
        description:
          "Precise root canal care to remove infection, protect the tooth, and reduce pain.",
      },
      {
        value: "implantation",
        title: "Dental Implantation",
        description:
          "Dental implants designed to restore function, comfort, and a natural smile.",
      },
      {
        value: "checkups",
        title: "Preventive Checkups",
        description:
          "Routine visits, cleaning, and early detection to keep your oral health stable.",
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

  return (
    <div className="site-shell">
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

          <form className="appointment-form" id="appointment-form" action="#" method="get">
            <label htmlFor="fullName">{t.form.nameLabel}</label>
            <input
              id="fullName"
              name="fullName"
              type="text"
              placeholder={t.form.namePlaceholder}
              required
            />

            <label htmlFor="phone">{t.form.phoneLabel}</label>
            <div className="phone-input">
              <span className="phone-country">{t.form.phonePrefix}</span>
              <input
                id="phone"
                name="phone"
                type="tel"
                defaultValue=" "
                pattern={"^\\+39\\s?[0-9\\s]{6,14}$"}
                title={t.form.phonePatternTitle}
                placeholder={t.form.phonePlaceholder}
                required
              />
            </div>

            <label htmlFor="service">{t.form.serviceLabel}</label>
            <select id="service" name="service" required defaultValue="">
              <option value="" disabled>
                {t.form.servicePlaceholder}
              </option>
              {t.services.map((service) => (
                <option key={service.value} value={service.value}>
                  {service.title}
                </option>
              ))}
            </select>

            <label htmlFor="appointmentDate">{t.form.dateLabel}</label>
            <input id="appointmentDate" name="appointmentDate" type="date" required />

            <button type="submit">{t.form.submit}</button>
          </form>
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
    </div>
  );
}

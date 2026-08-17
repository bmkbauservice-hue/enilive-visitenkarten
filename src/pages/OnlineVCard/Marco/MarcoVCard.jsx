import "../Tommy/TommyVCard.css"

const services = [
  { icon: "◷", title: "24-Stunden-Service" },
  { icon: "▣", title: "SB-Waschanlage" },
  { icon: "✦", title: "SONAX-Waschanlage" },
  { icon: "▤", title: "Getränkemarkt" },
  { icon: "⚒", title: "Kfz-Service" },
  { icon: "◇", title: "Pickpoint" },
  { icon: "▷", title: "DEKRA-Stützpunkt" },
  { icon: "□", title: "Hermes PaketShop" },
]

const routeUrl =
  "https://www.google.com/maps/search/?api=1&query=G%C3%BClzower+Str.+15a%2C+12619+Berlin"

export default function MarcoVCard() {
  const baseUrl = import.meta.env.BASE_URL

  return (
    <main className="tommy-vcard">
      <div className="tommy-vcard__honeycomb" aria-hidden="true" />
      <div className="tommy-vcard__light tommy-vcard__light--one" aria-hidden="true" />
      <div className="tommy-vcard__light tommy-vcard__light--two" aria-hidden="true" />

      <article className="tommy-vcard__card">
        <header className="tommy-vcard__hero">
          <img
            className="tommy-vcard__station"
            src={`${baseUrl}images/tankstellen/guelzower.png`}
            alt="Enilive Service-Station Gülzower Straße in Berlin"
          />
          <div className="tommy-vcard__hero-shade" />
          <img
            className="tommy-vcard__logo"
            src={`${baseUrl}images/enilive/enilive-logo.png`}
            alt="Enilive"
          />
          <div className="tommy-vcard__identity">
            <p>Enilive Service-Station</p>
            <h1>Marco Köpke</h1>
            <span>Gülzower Straße · Berlin</span>
          </div>
        </header>

        <section className="tommy-vcard__content">
          <div className="tommy-vcard__address">
            <span aria-hidden="true">●</span>
            <p>
              Gülzower Str. 15a
              <br />
              12619 Berlin
            </p>
          </div>

          <div className="tommy-vcard__actions">
            <a className="tommy-vcard__action" href="tel:+493056293100">
              <span aria-hidden="true">☎</span>
              <strong>Anrufen</strong>
            </a>
            <a
              className="tommy-vcard__action"
              href={routeUrl}
              target="_blank"
              rel="noreferrer"
            >
              <span aria-hidden="true">➜</span>
              <strong>Route starten</strong>
            </a>
            <a
              className="tommy-vcard__action"
              href={`${baseUrl}vcards/marco-koepke.vcf`}
              download
            >
              <span aria-hidden="true">＋</span>
              <strong>Kontakt speichern</strong>
            </a>
            <a className="tommy-vcard__action" href="mailto:TS5088@enilive.net">
              <span aria-hidden="true">✉</span>
              <strong>E-Mail senden</strong>
            </a>
          </div>

          <section className="tommy-vcard__services" aria-labelledby="marco-services-title">
            <div className="tommy-vcard__section-heading">
              <span />
              <h2 id="marco-services-title">Unsere Leistungen</h2>
              <span />
            </div>
            <div className="tommy-vcard__service-grid">
              {services.map((service) => (
                <div className="tommy-vcard__service" key={service.title}>
                  <span aria-hidden="true">{service.icon}</span>
                  <strong>{service.title}</strong>
                </div>
              ))}
            </div>
          </section>

          <p className="tommy-vcard__slogan">
            Ankommen. Auftanken. Weiterfahren.
          </p>
        </section>
      </article>
    </main>
  )
}

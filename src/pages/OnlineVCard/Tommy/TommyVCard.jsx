import { useEffect } from "react"
import "./TommyVCard.css"

const services = [
  {
    icon: "✦",
    title: "SONAX Waschanlage",
  },
  {
    icon: "▤",
    title: "Getränke Shop",
  },
  {
    icon: "▰",
    title: "Backshop",
  },
]

const routeUrl =
  "https://www.google.com/maps/search/?api=1&query=Dietzgenstra%C3%9Fe+127%2C+13158+Berlin-Pankow"

export default function TommyVCard() {
  const baseUrl = import.meta.env.BASE_URL

  useEffect(() => {
    document.title = "Thomas Weickardt · Digitale VCard"

    const ensureLink = (rel, href) => {
      let link = document.querySelector(`link[rel="${rel}"]`)

      if (!link) {
        link = document.createElement("link")
        link.rel = rel
        document.head.appendChild(link)
      }

      link.href = href
    }

    ensureLink("manifest", `${baseUrl}manifest-tommy.webmanifest`)
    ensureLink("apple-touch-icon", `${baseUrl}icons/tommy-vcard-180.png`)

    let themeColor = document.querySelector('meta[name="theme-color"]')
    if (!themeColor) {
      themeColor = document.createElement("meta")
      themeColor.name = "theme-color"
      document.head.appendChild(themeColor)
    }
    themeColor.content = "#008B7A"
  }, [baseUrl])

  return (
    <main className="tommy-vcard">
      <div className="tommy-vcard__honeycomb" aria-hidden="true" />
      <div className="tommy-vcard__light tommy-vcard__light--one" aria-hidden="true" />
      <div className="tommy-vcard__light tommy-vcard__light--two" aria-hidden="true" />

      <article className="tommy-vcard__card">
        <header className="tommy-vcard__hero">
          <img
            className="tommy-vcard__station"
            src={`${baseUrl}images/tankstellen/tommy.jpg`}
            alt="Enilive Service-Station in Berlin-Pankow"
          />

          <div className="tommy-vcard__hero-shade" />

          <img
            className="tommy-vcard__logo"
            src={`${baseUrl}images/enilive/enilive-logo.png`}
            alt="Enilive"
          />

          <div className="tommy-vcard__identity">
            <p>Enilive Service-Station</p>
            <h1>Thomas Weickardt</h1>
            <span>Berlin-Pankow</span>
          </div>
        </header>

        <section className="tommy-vcard__content">
          <div className="tommy-vcard__address">
            <span aria-hidden="true">●</span>
            <p>
              Dietzgenstraße 127
              <br />
              13158 Berlin-Pankow
            </p>
          </div>

          <div className="tommy-vcard__actions">
            <a className="tommy-vcard__action" href="tel:+493047750441">
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
              href={`${baseUrl}vcards/thomas-weickardt.vcf`}
              download
            >
              <span aria-hidden="true">＋</span>
              <strong>Kontakt speichern</strong>
            </a>

            <span
              className="tommy-vcard__action tommy-vcard__action--disabled"
              aria-disabled="true"
            >
              <span aria-hidden="true">✉</span>
              <strong>E-Mail folgt</strong>
            </span>
          </div>

          <section className="tommy-vcard__services" aria-labelledby="services-title">
            <div className="tommy-vcard__section-heading">
              <span />
              <h2 id="services-title">Unsere Leistungen</h2>
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

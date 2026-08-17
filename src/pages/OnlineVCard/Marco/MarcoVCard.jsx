import { useEffect, useState } from "react"
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
  const [openMenu, setOpenMenu] = useState(null)
  const [shareStatus, setShareStatus] = useState("")

  useEffect(() => {
    document.title = "Marco Köpke · Digitale VCard"

    const ensureLink = (rel, href) => {
      let link = document.querySelector(`link[rel="${rel}"]`)

      if (!link) {
        link = document.createElement("link")
        link.rel = rel
        document.head.appendChild(link)
      }

      link.href = href
    }

    ensureLink("manifest", `${baseUrl}manifest-marco.webmanifest`)
    ensureLink("apple-touch-icon", `${baseUrl}icons/marco-vcard-180.png`)

    let themeColor = document.querySelector('meta[name="theme-color"]')
    if (!themeColor) {
      themeColor = document.createElement("meta")
      themeColor.name = "theme-color"
      document.head.appendChild(themeColor)
    }
    themeColor.content = "#007EAD"
  }, [baseUrl])

  const toggleMenu = (menu) => {
    setShareStatus("")
    setOpenMenu((currentMenu) => (currentMenu === menu ? null : menu))
  }

  const shareVCard = async () => {
    const shareData = {
      title: "Marco Köpke · Enilive Service-Station",
      text: "Online-VCard von Marco Köpke – Enilive Service-Station Gülzower Straße",
      url: window.location.href,
    }

    try {
      if (navigator.share) {
        await navigator.share(shareData)
        setShareStatus("VCard wurde geteilt.")
        return
      }

      await navigator.clipboard.writeText(window.location.href)
      setShareStatus("Link wurde kopiert.")
    } catch (error) {
      if (error?.name !== "AbortError") {
        setShareStatus("Teilen war nicht möglich. Bitte den Link aus der Adresszeile kopieren.")
      }
    }
  }

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
            <button
              className="tommy-vcard__action"
              type="button"
              onClick={() => toggleMenu("phone")}
              aria-expanded={openMenu === "phone"}
              aria-controls="marco-phone-options"
            >
              <span aria-hidden="true">☎</span>
              <strong>Anrufen</strong>
            </button>
            {openMenu === "phone" && (
              <div className="tommy-vcard__action-panel" id="marco-phone-options">
                <strong>Telefonnummer auswählen</strong>
                <a href="tel:+493056293100">
                  <span>Festnetz</span>
                  <b>030 56293100</b>
                </a>
                <a href="tel:+491749329259">
                  <span>Mobil</span>
                  <b>0174 9329259</b>
                </a>
              </div>
            )}
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
            <button
              className="tommy-vcard__action tommy-vcard__action--wide"
              type="button"
              onClick={() => toggleMenu("more")}
              aria-expanded={openMenu === "more"}
              aria-controls="marco-more-options"
            >
              <span aria-hidden="true">•••</span>
              <strong>Sonstiges</strong>
            </button>
            {openMenu === "more" && (
              <div className="tommy-vcard__action-panel" id="marco-more-options">
                <strong>Weitere Möglichkeiten</strong>
                <a href="https://wa.me/491749329259" target="_blank" rel="noreferrer">
                  <span>WhatsApp</span>
                  <b>Nachricht schreiben</b>
                </a>
                <a href="sms:+491749329259">
                  <span>SMS</span>
                  <b>Nachricht senden</b>
                </a>
                <button type="button" onClick={shareVCard}>
                  <span>Teilen</span>
                  <b>VCard-Link weitergeben</b>
                </button>
                {shareStatus && <p className="tommy-vcard__share-status" role="status">{shareStatus}</p>}
              </div>
            )}
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

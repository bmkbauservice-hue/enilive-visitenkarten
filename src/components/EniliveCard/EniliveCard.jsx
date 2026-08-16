import "./EniliveCard.css"

function ServiceItem({ icon, text }) {
  return (
    <div className="enilive-card__service">
      <span
        className="enilive-card__service-icon"
        aria-hidden="true"
      >
        {icon}
      </span>

      <span>{text}</span>
    </div>
  )
}

export default function EniliveCard({ station }) {
  return (
    <section className="card-preview">
      {/* Vorderseite */}
      <article className="card-side">
        <p className="card-side__label">
          Vorderseite
        </p>

        <div className="business-card enilive-card enilive-card--front">
          <div className="enilive-card__photo-background" />

          <div className="enilive-card__photo-frame">
            <img
              className="enilive-card__photo"
              src={station.image}
              alt={`Enilive Service-Station ${station.location}`}
              onError={(event) => {
                event.currentTarget.style.display = "none"
              }}
            />
          </div>

          <div className="enilive-card__photo-shade" />
          <div className="enilive-card__curve" />

          {/* Logo Vorderseite */}
          <div className="enilive-card__front-logo-panel">
            <img
              className="enilive-card__front-logo"
              src="/images/enilive/enilive-logo.png"
              alt="Enilive"
            />
          </div>

          {/* Inhalt Vorderseite */}
          <div className="enilive-card__content">
            <header>
              <h2 className="enilive-card__name">
                {station.owner}
              </h2>

              <p className="enilive-card__position">
                <strong>enilive</strong>
                <span>Service-Station</span>
              </p>
            </header>

            <div className="enilive-card__short-line" />

            {/* Kontaktdaten */}
            <address className="enilive-card__contact">
              {/* Adresse */}
              <div className="enilive-card__contact-row">
                <span
                  className="enilive-card__contact-icon"
                  aria-hidden="true"
                >
                  ●
                </span>

                <p>
                  {station.address.map((line) => (
                    <span key={line}>
                      {line}
                      <br />
                    </span>
                  ))}
                </p>
              </div>

              {/* Telefonnummer */}
              <div className="enilive-card__contact-row">
                <span
                  className="enilive-card__contact-icon"
                  aria-hidden="true"
                >
                  ☎
                </span>

                <p>Tel.: {station.phone}</p>
              </div>

              {/* Mobilnummer – nur wenn vorhanden */}
              {station.mobile && (
                <div className="enilive-card__contact-row">
                  <span
                    className="enilive-card__contact-icon"
                    aria-hidden="true"
                  >
                    ▣
                  </span>

                  <p>Mobil: {station.mobile}</p>
                </div>
              )}

              {/* E-Mail-Adresse */}
              <div className="enilive-card__contact-row">
                <span
                  className="enilive-card__contact-icon"
                  aria-hidden="true"
                >
                  ✉
                </span>

                <p>
                  E-Mail:{" "}
                  <span className="enilive-card__email-address">
                    {station.email}
                  </span>
                </p>
              </div>
            </address>

            <div className="enilive-card__long-line" />

            {/* Leistungen */}
            <div className="enilive-card__services">
              <div className="enilive-card__service-column">
                {station.servicesLeft.map((service) => (
                  <ServiceItem
                    key={service.text}
                    icon={service.icon}
                    text={service.text}
                  />
                ))}
              </div>

              <div className="enilive-card__service-column enilive-card__service-column--right">
                {station.servicesRight.map((service) => (
                  <ServiceItem
                    key={service.text}
                    icon={service.icon}
                    text={service.text}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Rückseite */}
      <article className="card-side card-side--back">
        <p className="card-side__label">
          Rückseite · Gutschein
        </p>

        <div className="business-card enilive-card enilive-card--back">
          {/* Logo Rückseite */}
          <div className="enilive-card__back-logo-panel">
            <img
              className="enilive-card__back-logo"
              src="/images/enilive/enilive-logo.png"
              alt="Enilive"
            />
          </div>

          {/* Gutscheininhalt */}
          <div className="enilive-card__voucher-content">
            <h2 className="enilive-card__voucher-title">
              Gutschein für:
            </h2>

            <div className="enilive-card__writing-lines">
              <div className="enilive-card__writing-line" />
              <div className="enilive-card__writing-line" />
            </div>

            <div className="enilive-card__signature">
              <span className="enilive-card__signature-label">
                Unterschrift
              </span>

              <div className="enilive-card__writing-line" />
            </div>
          </div>

          {/* Schriftzug */}
          <p className="enilive-card__good-trip">
            Gute Fahrt
          </p>

          {/* Hintergrundbild Rückseite */}
          <img
            className="enilive-card__back-photo"
            src={station.image}
            alt=""
            aria-hidden="true"
            onError={(event) => {
              event.currentTarget.style.display = "none"
            }}
          />

          <div className="enilive-card__dots" />
          <div className="enilive-card__bottom-wave" />
        </div>
      </article>
    </section>
  )
}
import { useState } from "react"
import "./App.css"

import Guelzower from "./pages/Guelzower/Guelzower"
import Ahrensfelde from "./pages/Ahrensfelde/Ahrensfelde"
import Blumberg from "./pages/Blumberg/Blumberg"
import Tommy from "./pages/Tommy/Tommy"
import TommyVCard from "./pages/OnlineVCard/Tommy/TommyVCard"
import MarcoVCard from "./pages/OnlineVCard/Marco/MarcoVCard"

const cards = [
  {
    id: "guelzower",
    button: "Gülzower",
    title: "Marco Köpke – Gülzower",
    Component: Guelzower,
  },
  {
    id: "ahrensfelder-chaussee",
    button: "Ahrensfelder Chaussee",
    title: "Marco Köpke – Ahrensfelder Chaussee",
    Component: Ahrensfelde,
  },
  {
    id: "blumberger-chaussee",
    button: "Blumberger Chaussee",
    title: "Marco Köpke – Ahrensfelde",
    Component: Blumberg,
  },
  {
    id: "tommy",
    button: "Tommy",
    title: "Thomas Weickardt – Dietzgenstraße",
    Component: Tommy,
  },
]

function App() {
  const [selectedCard, setSelectedCard] =
    useState("guelzower")

  const vcard = new URLSearchParams(window.location.search).get("vcard")
  const path = window.location.pathname.replace(/\/$/, "")

  if (vcard === "tommy" || path.endsWith("/vcard/tommy")) {
    return <TommyVCard />
  }

  if (vcard === "marco" || path.endsWith("/vcard/marco")) {
    return <MarcoVCard />
  }

  const activeCard = cards.find(
    (card) => card.id === selectedCard,
  )

  const ActiveCard = activeCard.Component

  return (
    <main className="app">
      <header className="app-header">
        <p className="app-header__eyebrow">
          Enilive Visitenkarten
        </p>

        <h1>{activeCard.title}</h1>

        <p>
          Vorder- und Rückseite im Originalverhältnis 85 × 55 mm.
          Ausgewählte Karten erhalten eine digitale VCard mit QR-Code.
        </p>

        <nav
          className="card-switcher"
          aria-label="Visitenkarte auswählen"
        >
          {cards.map((card) => (
            <button
              key={card.id}
              type="button"
              className={
                selectedCard === card.id
                  ? "card-switcher__button card-switcher__button--active"
                  : "card-switcher__button"
              }
              onClick={() => setSelectedCard(card.id)}
            >
              {card.button}
            </button>
          ))}
        </nav>
      </header>

      <ActiveCard />
    </main>
  )
}

export default App

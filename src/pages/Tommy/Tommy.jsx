import { useState } from "react"
import EniliveCard from "../../components/EniliveCard/EniliveCard"
import "./Tommy.css"

const tommyData = {
  owner: "Thomas Weickardt",
  location: "Tommy",

  address: [
    "Dietzgenstraße 127",
    "13158 Berlin-Pankow",
  ],

  phone: "030 / 47 75 04 41",
  mobile: "0177 / 61 10 689",
  email: "",

  image: "/images/tankstellen/tommy.jpg",
  vcardUrl:
    "https://bmkbauservice-hue.github.io/enilive-visitenkarten/?vcard=tommy",
  qrCode: "/qrcodes/tommy-vcard.png",

  servicesLeft: [
    {
      icon: "✦",
      text: "SONAX Waschanlage",
    },
    {
      icon: "▤",
      text: "Getränke Shop",
    },
    {
      icon: "▰",
      text: "Backshop",
    },
  ],
  servicesRight: [],
}

export default function Tommy() {
  const [design, setDesign] = useState("exclusive")

  return (
    <div className={`tommy-card tommy-card--${design}`}>
      <div
        className="tommy-card__design-switch"
        aria-label="Design für die Tommy-Karte auswählen"
      >
        <button
          type="button"
          className={design === "exclusive" ? "is-active" : ""}
          onClick={() => setDesign("exclusive")}
        >
          Design Exclusive
        </button>

        <button
          type="button"
          className={design === "blue-gray" ? "is-active" : ""}
          onClick={() => setDesign("blue-gray")}
        >
          Design Blau-Grau
        </button>
      </div>

      <EniliveCard station={tommyData} />
    </div>
  )
}

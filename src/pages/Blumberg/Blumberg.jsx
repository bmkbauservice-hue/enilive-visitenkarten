import EniliveCard from "../../components/EniliveCard/EniliveCard"

const blumbergStation = {
  owner: "Marco Köpke",
  location: "Ahrensfelde",

  address: [
    "Blumberger Chaussee 1",
    "16356 Ahrensfelde",
  ],

  phone: "030 93798237",
  mobile: "0174 / 93 29 25 9",
  email: "TS5050@enilive.net",

  image: "/images/tankstellen/guelzower.png",

  servicesLeft: [
    {
      icon: "◷",
      text: "Öffnungszeiten: 05:00 bis 21:00 Uhr",
    },
    {
      icon: "✦",
      text: "SONAX  Waschanlage",
    },
    {
      icon: "▤",
      text: "Getränke Markt",
    },
  ],

  servicesRight: [
    {
      icon: "⚡",
      text: "3 × E-Auto Ladestationen",
    },
    {
      icon: "▰",
      text: "LKW Übernachtungsplätze",
    },
    {
      icon: "◇",
      text: "Hermes Paket-Shop",
    },
  ],
}

export default function Blumberg() {
  return <EniliveCard station={blumbergStation} />
}
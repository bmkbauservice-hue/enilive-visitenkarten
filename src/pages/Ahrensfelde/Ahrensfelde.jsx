import EniliveCard from "../../components/EniliveCard/EniliveCard"

const ahrensfeldeStation = {
  owner: "Marco Köpke",
  location: "BFC FAN SHOP",

  address: [
    "Ahrensfelder Chaussee 152",
    "12689 Berlin",
  ],

  phone: "030 9374392",
  email: "TS5058@enilive.net",

  image: "/images/tankstellen/guelzower.png",

  servicesLeft: [
    {
      icon: "◷",
      text: "Öffnungszeiten von 05:30 bis 22:00 Uhr",
    },
    {
      icon: "✦",
      text: "SONAX Waschanlage",
    },
    {
      icon: "▤",
      text: "Getränke Markt",
    },
  ],

  servicesRight: [
    {
      icon: "★",
      text: "Lotto",
    },
    {
      icon: "⚽",
      text: "BFC Fan Shop",
    },
    {
      icon: "◇",
      text: "Hermes Paket-Shop",
    },
  ],
}

export default function Ahrensfelde() {
  return <EniliveCard station={ahrensfeldeStation} />
}
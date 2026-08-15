import EniliveCard from "../../components/EniliveCard/EniliveCard"

const ahrensfeldeData = {
  owner: "Marco Köpke",
  location: "Ahrensfelde",

  address: [
    "Ahrensfelder Chaussee 152",
    "12689 Berlin",
  ],

  phone: "030 / 93 74 39 2",
  mobile: "",
  email: "TS5058@enilive.net",

  image: "/images/tankstellen/ahrensfelde.jpg",

  servicesLeft: [
    {
      icon: "◷",
      text: "05:30 bis 22:00 Uhr",
    },
    {
      icon: "✦",
      text: "SONAX Waschanlage",
    },
    {
      icon: "▣",
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
  return <EniliveCard station={ahrensfeldeData} />
}
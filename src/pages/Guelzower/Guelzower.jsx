import EniliveCard from "../../components/EniliveCard/EniliveCard"

const guelzowerData = {
  owner: "Marco Köpke",
  location: "Gülzower",

  address: [
    "Gülzower Str. 15 a",
    "12619 Berlin",
  ],

  phone: "030 / 56 29 31 00",
  mobile: "0174 / 93 29 25 9",
  email: "TS5088@enilive.net",

  image: "/images/tankstellen/guelzower.png",

  servicesLeft: [
    {
      icon: "24",
      text: "Stunden-Service",
    },
    {
      icon: "▣",
      text: "SB-Waschanlage",
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
      icon: "⚒",
      text: "KFZ-Service",
    },
    {
      icon: "◇",
      text: "Pickpoint",
    },
    {
      icon: "▷",
      text: "DEKRA Stützpunkt",
    },
    {
      icon: "□",
      text: "Hermes Paket-Shop",
    },
  ],
}

export default function Guelzower() {
  return <EniliveCard station={guelzowerData} />
}
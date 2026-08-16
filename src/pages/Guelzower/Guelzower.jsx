import EniliveCard from "../../components/EniliveCard/EniliveCard"

const guelzowerData = {
  owner: "Marco Köpke",
  location: "Gülzower",

  address: [
    "Gülzower Str. 15a",
    "12619 Berlin",
  ],

  phone: "030 / 56 29 31 00",
  mobile: "0174 / 93 29 25 9",
  email: "TS5088@enilive.net",

  image: "/images/tankstellen/guelzower.png",

  servicesLeft: [
    {
      icon: "◷",
      text: "24-Stunden-Service",
    },
    {
      icon: "▣",
      text: "SB-Waschanlage",
    },
    {
      icon: "✦",
      text: "SONAX-Waschanlage",
    },
    {
      icon: "▤",
      text: "Getränkemarkt",
    },
  ],

  servicesRight: [
    {
      icon: "⚒",
      text: "Kfz-Service",
    },
    {
      icon: "◇",
      text: "Pickpoint",
    },
    {
      icon: "▷",
      text: "DEKRA-Stützpunkt",
    },
    {
      icon: "□",
      text: "Hermes PaketShop",
    },
  ],
}

export default function Guelzower() {
  return <EniliveCard station={guelzowerData} />
}
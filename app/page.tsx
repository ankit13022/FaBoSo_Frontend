import Image from "next/image";
import Header from "./comp/header/header";
import Leftbar from "./comp/leftbar/leftbar";
import Leftbarbottom from "./comp/leftbar/Leftbarbottom";

import Tab from "./comp/Cards/tabOne";
import image1 from "../public/images/music2.jpg";
export default function Home() {
  const cards = [
    {
      number: 1,
      imageSrc: "/images/music2.jpg",
      text: "This is the first card",
    },
    {
      number: 2,
      imageSrc: "/images/music2.jpg",
      text: "This is the second card",
    },
    {
      number: 3,
      imageSrc: "/images/music2.jpg",
      text: "This is the third card",
    },
    {
      number: 4,
      imageSrc: "/images/music2.jpg",
      text: "This is the fourth card",
    },
    {
      number: 5,
      imageSrc: "/images/music2.jpg",
      text: "This is the fifth card",
    },
  ];
  return (
    <div className="flex flex-col">
      {/* Header */}
      <Header />


      {/* Main content (Leftbar and TabOne with dynamic cards) */}
      <div className="flex gap-4">
        <div className="w-1/6 bg-gray-200">
          <Leftbar />
          <Leftbarbottom />
        </div>
        <div className="w-5/6 flex flex-col gap-6">
          <Tab cards={cards} title="Top song" />
          <Tab cards={cards} title="Top song new" />

     
        </div>
      </div>
    </div>
  );
}

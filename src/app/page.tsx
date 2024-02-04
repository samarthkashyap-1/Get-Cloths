import Image from "next/image";
import logo from "../assets/GC logo.png";

export default function Home() {
  return (
    <div className="flex p-3 justify-between">
      <Image src={logo} alt="Get Cloths logo"  className="w-20 "/>
      <h1 className=" font-sec text-3xl ">Welcome to Get Cloths</h1>
    </div>
  );
}

import { Bio } from "@/components/bio";
import { _Header } from "@/components/header";
import { Services } from "@/components/services";
import { Techno } from "@/components/technologies";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <_Header />
    <Services></Services>
    <Bio></Bio>
    <Techno></Techno>
    </>
  );
}

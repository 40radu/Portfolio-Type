"use client"


import Button from "@/Components/Global/Button/Button";
import Title from "@/Components/Global/Button/Title/Title";
import Image from "next/image";

export default function Home() {

  function functionF () {

  }

  return (

 
    <main >
      <Button type="button" className="btn_primary" onClick={functionF} value="Contact" />
      <Button type="button" className="btn_secondary" onClick={functionF} value="Donwload CV" />
      <Title title="about" description="[HEY Jfdslfj]" underTitle="self-summary" />
    </main>
  );
}

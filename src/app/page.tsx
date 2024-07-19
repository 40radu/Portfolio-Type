"use client"


import Button from "@/Components/Global/Button/Button";
import Input from "@/Components/Global/InputForm/InputForm";
import Logo from "@/Components/Global/Logo/Logo";
import MenuBar from "@/Components/Global/Menu/MenuBar/MenuBar";
import Title from "@/Components/Global/Title/Title";
import NavBar from "@/Components/Layout/NavBar/NavBar";
import StatutResponse from "@/Components/Specifies/Contact/StatutResponse/StatutResponse";
import TextArea from "@/Components/Specifies/Contact/Text-Area/TextArea";
import LogoSkills from "@/Components/Specifies/Skills/LogoSkills/LogoSkills";
import Image from "next/image";

export default function Home() {

  function functionF () {

  }

  return (

 
    <main >
      <Button type="button" className="btn_primary" onClick={functionF} value="Contact" />
      <Button type="button" className="btn_secondary" onClick={functionF} value="Donwload CV" />
      <Title title="about" description="[ HERE,  DISCOVER MY PERSONAL PROFILE  ]" underTitle="self-summary" />
      <Logo/>
      <MenuBar/>
      <NavBar/>
      <LogoSkills icon="css"/>
      <Input name="name" placeholder="name" type="text" onChange={functionF}/>
      <TextArea onChange={functionF}/>
      {/* <StatutResponse isSucces = {true} onClick={functionF}/> */}
    </main>
  );
}

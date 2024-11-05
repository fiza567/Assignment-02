import Image from "next/image";
import Header from "./components/Header";
import Link from "next/link";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import React from 'react'
const Home = () => {
  return (
    <div>
      <Header/> 
      <Hero/>
      <Footer/> 
    </div>
  )
}

export default Home

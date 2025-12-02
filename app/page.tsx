import React from 'react';
import Head from 'next/head';

// Хедер футер
import Header from "@/src/components/landing/Header/Header";
import Footer from "@/src/components/landing/Footer";

// Секции
import Hero from "@/src/components/landing/Hero";
import WorkingPrinciple from "@/src/components/landing/sections/WorkingPrinciple";
import WorkingScheme from "@/src/components/landing/sections/WorkingScheme";
import Composition from "@/src/components/landing/sections/Composition";
import ContactForm from "@/src/components/landing/sections/ContactForm";
import TechSupport from "@/src/components/landing/sections/TechSupport";

export default function LandingPage() {
  return (
      <div className="min-h-screen bg-black text-white font-sans selection:bg-cyan-500 selection:text-black">
        <Head>
          <title>mrnet - Bonding Technology</title>
        </Head>

        <Header />

        <main className="max-w-[1400px] mx-auto px-4 py-8 lg:py-12 space-y-20">

          <Hero />

          <WorkingPrinciple />

          <WorkingScheme />

          <Composition />

          <TechSupport />

          <ContactForm />

        </main>

        <Footer />
      </div>
  );
}
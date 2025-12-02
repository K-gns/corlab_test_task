import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ScrollButton from "@/src/components/ui/buttons/ScrollButton";
import MobileMenu from "@/src/components/landing/Header/MobileMenu";

export default function Header() {
    return (
        <header className="w-full bg-black py-4 lg:py-6 fixed top-0 left-0 z-50 lg:relative">
            <div className="max-w-[1400px] mx-auto px-4 flex justify-between items-center relative">

                {/* mobile layout */}
                <div className="flex flex-col gap-3 lg:hidden">
                    <Link href="/" className="relative block">
                        <Image
                            src="/images/logo.svg"
                            alt="mrnet logo"
                            width={120}
                            height={30}
                            priority
                            className="object-contain w-auto h-8"
                        />
                    </Link>
                    <a href="tel:+78006003538" className="text-[#00d2d3] text-sm font-light tracking-wide">
                        + 7 (800) 600-35-38
                    </a>
                </div>

                <MobileMenu />


                {/* desktop layout */}
                <div className="hidden lg:flex items-center gap-12">
                    <Link href="/" className="relative block">
                        <Image
                            src="/images/logo.svg"
                            alt="mrnet logo"
                            width={140}
                            height={40}
                            priority
                            className="object-contain w-auto h-10"
                        />
                    </Link>
                    <a href="tel:+78006003538" className="text-[#00d2d3] text-sm tracking-wider hover:text-white transition-colors">
                        + 7 (800) 600-35-38
                    </a>
                </div>

                <nav className="hidden lg:flex items-center gap-10 text-[12px] font-medium uppercase tracking-[0.15em] text-gray-300">
                    <Link href="#" className="relative text-white group">
                        <span className="absolute -top-5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-[#00d2d3]"></span>
                        Технология
                    </Link>
                    <Link href="#" className="hover:text-white transition-colors">
                        Платформа управления
                    </Link>
                    <Link href="#" className="hover:text-white transition-colors">
                        Тест-драйв
                    </Link>
                    <Link href="#" className="hover:text-white transition-colors">
                        Наша сеть
                    </Link>
                </nav>

                <div className="hidden lg:block">
                    <ScrollButton
                        targetId="contact-form"
                        className="text-[#00d2d3] text-[12px] font-bold uppercase tracking-[0.1em] hover:text-white transition-colors"
                    >
                        Оставить заявку
                    </ScrollButton>
                </div>

            </div>
        </header>
    );
}
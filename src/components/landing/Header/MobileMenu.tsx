"use client"

import React, { useState } from 'react';
import Link from 'next/link';
import { scrollToElement } from "@/src/utils/scroll";

export default function MobileMenu() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleScrollAndClose = () => {
        scrollToElement('contact-form');
        setIsMenuOpen(false);
    };

    return (
        <>
            {/* Кнопка Бургер */}
            <div className="lg:hidden">
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="flex flex-col gap-[8px] items-end justify-center w-8 h-8 focus:outline-none"
                >
                    <span className={`w-8 h-[2px] bg-[#00d2d3] transition-transform ${isMenuOpen ? 'rotate-45 translate-y-[5px]' : ''}`}></span>
                    <span className={`w-8 h-[2px] bg-[#00d2d3] transition-transform ${isMenuOpen ? '-rotate-45 -translate-y-[5px]' : ''}`}></span>
                </button>
            </div>

            {isMenuOpen && (
                <div className="lg:hidden absolute top-full left-0 w-full bg-black border-t border-gray-800 z-50 p-6 shadow-2xl">
                    <nav className="flex flex-col gap-6 text-white uppercase text-sm font-medium tracking-widest text-center">
                        <Link href="#" onClick={() => setIsMenuOpen(false)} className="text-[#00d2d3]">Технология</Link>
                        <Link href="#" onClick={() => setIsMenuOpen(false)}>Платформа управления</Link>
                        <Link href="#" onClick={() => setIsMenuOpen(false)}>Тест-драйв</Link>
                        <Link href="#" onClick={() => setIsMenuOpen(false)}>Наша сеть</Link>

                        <button
                            onClick={handleScrollAndClose}
                            className="text-[#00d2d3] font-bold mt-4"
                        >
                            Оставить заявку
                        </button>
                    </nav>
                </div>
            )}
        </>
    );
}
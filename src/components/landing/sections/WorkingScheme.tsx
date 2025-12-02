import React from 'react';
import Image from 'next/image';

export default function WorkingScheme() {
    return (
        <section>
            <h2 className="text-3xl lg:text-4xl font-light mb-10 uppercase tracking-wide">
                Схема работы решения <span className="font-bold">mrnet</span>
            </h2>

            <div className="rounded-xl border border-[#00d2d3] shadow-[0_0_20px_rgba(0,210,211,0.2)] bg-black p-6 lg:p-10 relative overflow-hidden">

                {/* desktop scheme */}
                <div className="hidden lg:block w-full">
                    <Image
                        src="/images/scheme_desktop.svg"
                        alt="Схема работы mrnet (Desktop)"
                        width={0}
                        height={0}
                        sizes="100vw"
                        className="w-full h-auto object-contain"
                        priority
                    />
                </div>

                {/* mobile scheme */}
                <div className="block lg:hidden w-full">
                    <Image
                        src="/images/scheme_mobile.svg"
                        alt="Схема работы mrnet (Mobile)"
                        width={0}
                        height={0}
                        sizes="100vw"
                        className="w-full h-auto object-contain"
                    />
                </div>

            </div>
        </section>
    );
}
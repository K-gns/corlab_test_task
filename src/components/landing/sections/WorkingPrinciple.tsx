"use client"

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import CardImage from "@/src/utils/CardImage/CardImage";
import SliderControls from "@/src/components/ui/Slider/SliderControls";

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const cardsData = [
    {
        id: 1,
        src: "/images/ports_closeup.jpg",
        alt: "Мультироут",
        text: "ПО «БОНДИНГ» АГРЕГИРУЕТ НЕСКОЛЬКО ОПЕРАТОРОВ СВЯЗИ В МУЛЬТИРОУТЕРЕ"
    },
    {
        id: 2,
        src: "/images/preview_map.jpg",
        alt: "Скриншот платформы",
        text: "ПО «ПЛАТФОРМА УПРАВЛЕНИЯ СЕТЕВЫМИ УСТРОЙСТВАМИ» В ОБЛАКЕ ОБЕСПЕЧИВАЕТ МОНИТОРИНГ И УПРАВЛЕНИЕ"
    },
    {
        id: 3,
        src: "/images/abstract_lines.jpg",
        alt: "Потоки",
        text: "АГРЕГИРОВАНИЕ НЕСКОЛЬКИХ КАНАЛОВ И ОБЛАЧНАЯ ПЛАТФОРМА ПОВЫШАЮТ ОТКАЗОУСТОЙЧИВОСТЬ ИНТЕРНЕТА"
    }
];

const PrincipleCard = ({ src, alt, text }: { src: string, alt: string, text: string }) => (
    <div className="border border-[#f15a24] rounded-xl overflow-hidden bg-black flex flex-col group h-full hover:shadow-[0_0_30px_rgba(241,90,36,0.15)] transition-shadow duration-300">
        <CardImage
            src={src}
            alt={alt}
            className="h-56 rounded-none"
        />
        <div className="p-6 lg:p-8 flex-grow">
            <p className="text-lg lg:text-xl font-light leading-relaxed uppercase">
                {text}
            </p>
        </div>
    </div>
);

export default function WorkingPrinciple() {
    return (
        <section>
            <h2 className="text-3xl lg:text-4xl font-medium mb-10 tracking-wide uppercase">
                Принцип работы
            </h2>

            <div className="lg:hidden">
                <Swiper
                    modules={[Pagination, Navigation]}
                    spaceBetween={16}
                    slidesPerView={1}
                    autoHeight={false}
                    pagination={{
                        el: '.principle-pagination',
                        clickable: true,
                        bulletActiveClass: '!bg-[#00d2d3] !opacity-100',
                        renderBullet: function (index, className) {
                            return `<span class="${className} w-2.5 h-2.5 rounded-full border border-[#00d2d3] bg-transparent !opacity-100 mx-1 cursor-pointer block transition-all"></span>`;
                        }
                    }}
                    loop={false}
                    className="w-full"
                >
                    {cardsData.map((card) => (
                        <SwiperSlide key={card.id} className="!h-auto">
                            <PrincipleCard src={card.src} alt={card.alt} text={card.text} />
                        </SwiperSlide>
                    ))}

                    <SliderControls
                        paginationClassName="principle-pagination"
                    />
                </Swiper>
            </div>

            <div className="hidden lg:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {cardsData.map((card) => (
                    <PrincipleCard key={card.id} src={card.src} alt={card.alt} text={card.text} />
                ))}
            </div>
        </section>
    );
}
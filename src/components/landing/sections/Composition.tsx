"use client"

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import CardImage from "@/src/utils/CardImage/CardImage";
import SliderControls from "@/src/components/ui/Slider/SliderControls";

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const gradientStyle = "bg-[linear-gradient(65deg,rgba(0,210,211,0.6)_0%,#000000_70%)]";

const Card1 = () => (
    <div className={`border border-[#00d2d3] rounded-xl p-6 flex flex-col h-full ${gradientStyle}`}>
        <div className="flex items-center gap-3 mb-4">
            <span className="flex items-center justify-center w-8 h-8 rounded-full border border-gray-500 text-xs text-white">1</span>
            <span className="border border-white/30 rounded-full px-4 py-1 text-[10px] uppercase tracking-wider text-white">У клиента</span>
        </div>
        <h3 className="text-[26px] uppercase font-light mb-6 text-white leading-tight">
            Мультироутер
        </h3>
        <div className="mb-6">
            <CardImage
                src="/images/multi_router.jpg"
                alt="Мультироутер"
                className="h-52 rounded-xl"
            />
        </div>
        <div className="mt-auto">
            <p className="text-lg text-white leading-snug font-normal">
                Подключается к LTE-соединениям и передает данные параллельно по нескольким независимым каналам связи. <br/>
                Скорость суммируется — до 250 Мбит/с с четырех каналов связи
            </p>
        </div>
    </div>
);

const Card2 = () => (
    <div className={`border border-[#00d2d3] rounded-xl p-6 flex flex-col h-full ${gradientStyle}`}>
        <div className="flex items-center gap-3 mb-4">
            <span className="flex items-center justify-center w-8 h-8 rounded-full border border-gray-500 text-xs text-white">2</span>
            <div className="flex flex-wrap gap-2 items-center">
                <span className="border border-white/30 rounded-full px-4 py-1 text-[10px] uppercase tracking-wider text-white">В дата центре</span>
                <span className="text-[10px] uppercase text-gray-500">или</span>
                <span className="border border-white/30 rounded-full px-4 py-1 text-[10px] uppercase tracking-wider text-white">у клиента</span>
            </div>
        </div>
        <h3 className="text-[26px] uppercase font-light mb-2 text-white leading-tight">
            ПО «БОНДИНГ»
        </h3>
        <p className="text-[#00d2d3] text-base mb-6 font-medium leading-snug">
            (№ 25726 РЕЕСТР РОССИЙСКОГО <br/> ПРОГРАММНОГО ОБЕСПЕЧЕНИЯ)
        </p>
        <div className="text-lg text-white leading-snug mb-6 space-y-4 flex-grow font-normal">
            <p>
                Обеспечивает передачу данных с Мультироутера с использованием одновременно всех подключенных каналов до «суммирующего сервера» и обратно.
                Суммирующий сервер можно установить на ресурсах клиента. <span className="font-medium text-[#00d2d3]">C / C++ / Bash</span>
            </p>
        </div>
        <div className="mt-auto space-y-4 pt-5 border-t border-white/10">
            <a href="#" className="block text-white underline decoration-white underline-offset-4 hover:opacity-80 transition-opacity text-base font-normal">
                Функциональные характеристики <br/> ПО «Бондинг»
            </a>
            <div className="text-base text-white font-normal leading-relaxed">
                Цены на ПО «Бондинг» рассчитываются индивидуально под клиента. Для запроса цены <a href="#" className="text-white underline decoration-white underline-offset-4 hover:opacity-80">оставьте заявку</a>
            </div>
        </div>
    </div>
);

const Card3 = () => (
    <div className={`border border-[#00d2d3] rounded-xl p-6 flex flex-col h-full ${gradientStyle}`}>
        <div className="flex items-center gap-3 mb-4">
            <span className="flex items-center justify-center w-8 h-8 rounded-full border border-gray-500 text-xs text-white">3</span>
            <span className="border border-white/30 rounded-full px-4 py-1 text-[10px] uppercase tracking-wider text-white">В облаке</span>
        </div>
        <h3 className="text-[26px] uppercase font-light mb-2 text-white leading-tight">
            ПО «ПЛАТФОРМА УПРАВЛЕНИЯ СЕТЕВЫМИ УСТРОЙСТВАМИ»
        </h3>
        <p className="text-[#00d2d3] text-base mb-6 font-medium leading-snug">
            (№ 25623 РЕЕСТР РОССИЙСКОГО <br/> ПРОГРАММНОГО ОБЕСПЕЧЕНИЯ)
        </p>
        <div className="text-lg text-white leading-snug mb-6 space-y-4 flex-grow font-normal">
            <p>
                Web-интерфейс с дашбордом для мониторинга и удаленного управления мультироутеров <span className="font-bold">mrnet</span> и настройки сети. <span className="font-medium text-[#00d2d3]">Python / JavaScript / TypeScript</span>
            </p>
        </div>
        <div className="mt-auto space-y-4 pt-5 border-t border-white/10">
            <a href="#" className="block text-white underline decoration-white underline-offset-4 hover:opacity-80 transition-opacity text-base font-normal">
                Функциональные характеристики ПО «Платформа управления сетевыми устройствами»
            </a>
            <div className="text-base text-white font-normal leading-relaxed">
                Цены на ПО «Платформа управления сетевыми устройствами» рассчитываются индивидуально под клиента. Для запроса цены <a href="#" className="text-white underline decoration-white underline-offset-4 hover:opacity-80">оставьте заявку</a>
            </div>
        </div>
    </div>
);

export default function Composition() {
    return (
        <section>
            <h2 className="text-3xl lg:text-4xl font-light mb-10 uppercase tracking-wide text-white">
                Состав решения
            </h2>

            <div className="lg:hidden">
                <Swiper
                    modules={[Pagination, Navigation]}
                    spaceBetween={16}
                    slidesPerView={1}
                    autoHeight={false}
                    pagination={{
                        el: '.swiper-custom-pagination',
                        clickable: true,
                        bulletActiveClass: '!bg-[#00d2d3] !opacity-100',
                        renderBullet: function (index, className) {
                            return `<span class="${className} w-2.5 h-2.5 rounded-full border border-[#00d2d3] bg-transparent !opacity-100 mx-1 cursor-pointer block transition-all"></span>`;
                        }
                    }}
                    loop={false}
                    className="w-full"
                >
                    <SwiperSlide className="!h-auto"><Card1 /></SwiperSlide>
                    <SwiperSlide className="!h-auto"><Card2 /></SwiperSlide>
                    <SwiperSlide className="!h-auto"><Card3 /></SwiperSlide>

                    <SliderControls paginationClassName="swiper-custom-pagination" />
                </Swiper>
            </div>

            <div className="hidden lg:grid grid-cols-3 gap-6">
                <Card1 />
                <Card2 />
                <Card3 />
            </div>
        </section>
    );
}
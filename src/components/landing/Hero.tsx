import React from 'react';
import CardImage from "@/src/utils/CardImage/CardImage";
import ScrollButton from "@/src/components/ui/buttons/ScrollButton";

export default function Hero() {
    const gradientStyle = "bg-[linear-gradient(250deg,rgba(0,210,211,0.8)_0%,#000000_70%)]";

    return (
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            <div className="relative w-full h-full min-h-[300px] lg:min-h-[500px]">
                <div className="absolute -left-10 top-10 w-3/4 h-3/4 bg-orange-600/20 blur-[100px] rounded-full mix-blend-screen"></div>
                <CardImage
                    src="/images/hero_router.jpg"
                    alt="Главный роутер"
                    className="h-full rounded-xl shadow-2xl"
                    priority={true}
                />
            </div>

            <div className={`border border-[#00d2d3] rounded-xl p-8 lg:p-12 flex flex-col justify-between shadow-lg shadow-cyan-900/10 ${gradientStyle}`}>
                <div>
                    <h1 className="text-2xl lg:text-3xl xl:text-4xl font-medium leading-snug mb-8">
                        РЕШЕНИЕ <span className="font-bold">mrnet</span> С ТЕХНОЛОГИЕЙ BONDING ОБЪЕДИНЯЕТ ВСЕ ДОСТУПНЫЕ КАНАЛЫ СВЯЗИ В ЕДИНЫЙ ВИРТУАЛЬНЫЙ КАНАЛ, СУММИРУЕТ СКОРОСТЬ ПЕРЕДАЧИ ДАННЫХ И ПОВЫШАЕТ НАДЕЖНОСТЬ СОЕДИНЕНИЯ
                    </h1>
                    <ScrollButton
                        targetId="contact-form"
                        className="w-full sm:w-auto bg-[#00d2d3] text-black font-bold uppercase tracking-wide py-4 px-10 rounded-full hover:bg-cyan-300 transition-colors shadow-[0_0_20px_rgba(0,210,211,0.3)]"
                    >
                        Оставить заявку
                    </ScrollButton>
                </div>
                <div className="mt-12 text-sm leading-relaxed pt-6">
                    <p>
                        Оставьте заявку и с вами свяжется менеджер и договорится о запуске пилота.
                        Без необходимости отключения от текущего провайдера и заключения договора.
                        Все цены рассчитываются индивидуально под клиента.
                    </p>
                </div>
            </div>
        </section>
    );
}
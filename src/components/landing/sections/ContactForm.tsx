"use client"

import React from 'react';

export default function ContactForm() {
    // Градиент для левой колонки
    const bannerGradient = "bg-[linear-gradient(75deg,#ff4800,#b386d8,#00d2d3)]";

    // Градиент для правой колонки
    const formGradient = "bg-[linear-gradient(250deg,rgba(0,210,211,0.8)_0%,#000000_70%)]";

    return (
        <section id="contact-form" className="bg-black text-white py-12 lg:py-20">
            <div className="max-w-[1400px] mx-auto px-4">

                <h2 className="text-2xl lg:text-4xl font-normal uppercase leading-snug mb-10 lg:mb-14">
                    Наши специалисты на связи круглосуточно. <br/>
                    Отвечают по телефону, в почте и telegram
                </h2>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 min-h-[500px]">

                    {/* Левая колонка 1/3 */}
                    <div className={`lg:col-span-1 rounded-xl p-4 lg:p-8 flex items-start ${bannerGradient}`}>
                        <h3 className="text-left text-black text-3xl sm:text-3xl lg:text-4xl font-medium uppercase leading-[1.15] tracking-tight">
                            Хотите узнать больше, <br/>
                            рассчитать стоимость <br/>
                            или забрать устройство <br/>
                            на бесплатный тест?
                        </h3>
                    </div>

                    {/* Правая колонка 2/3 */}
                    <div
                        className={`lg:col-span-2 rounded-xl border border-[#00d2d3] p-8 lg:p-12 flex flex-col justify-center relative shadow-[0_0_15px_rgba(0,210,211,0.1)] ${formGradient}`}>

                        <p className="text-white text-lg lg:text-xl uppercase font-light mb-8 text-center lg:text-left">
                            Услуга доступна только для юридических лиц
                        </p>

                        <form className="space-y-6 w-full" onSubmit={(e) => e.preventDefault()}>

                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="Ваше имя *"
                                    className="w-full bg-black border border-gray-600 rounded-full px-6 py-4 text-white placeholder-gray-400 focus:outline-none focus:border-[#00d2d3] transition-colors"
                                />
                            </div>

                            <div className="text-white text-lg font-light pl-2">
                                Оставьте ваши контакты
                            </div>

                            <div className="relative">
                                <input
                                    type="tel"
                                    placeholder="Ваш телефон +7 (___)___-__-__ *"
                                    className="w-full bg-black border border-gray-600 rounded-full px-6 py-4 text-white placeholder-gray-400 focus:outline-none focus:border-[#00d2d3] transition-colors"
                                />
                            </div>

                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="Ваш ник в tg"
                                    className="w-full bg-black border border-gray-600 rounded-full px-6 py-4 text-white placeholder-gray-400 focus:outline-none focus:border-[#00d2d3] transition-colors"
                                />
                            </div>

                            {/* Checkbox Policy */}
                            <div className="flex items-start gap-3 mt-4">
                                <div className="relative flex items-center mt-1">
                                    <input
                                        type="checkbox"
                                        id="policy"
                                        className="peer h-5 w-5 cursor-pointer appearance-none border border-[#00d2d3] bg-transparent checked:bg-[#00d2d3] transition-all"
                                    />
                                    <svg
                                        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 text-black pointer-events-none opacity-0 peer-checked:opacity-100 transition-opacity"
                                        viewBox="0 0 14 14" fill="none">
                                        <path d="M1 7L5 11L13 1" stroke="currentColor" strokeWidth="2"
                                              strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </div>
                                <label htmlFor="policy"
                                       className="text-[10px] sm:text-xs text-gray-400 leading-tight cursor-pointer select-none">
                                    Я даю <a href="#"
                                             className="underline text-gray-300 hover:text-white">согласие</a> на
                                    обработку моих персональных данных в форме обращения на странице сайта. Ознакомиться
                                    с условиями <a href="#" className="underline text-gray-300 hover:text-white">Политики
                                    обработки персональных данных ООО «НЬЮКОМ ДИСТРИБЬЮШН»</a>
                                </label>
                            </div>

                            <div className="text-[10px] text-gray-500 mt-1 pl-8">
                                * Поля, обязательные для заполнения
                            </div>

                            <button
                                type="submit"
                                className="w-full sm:w-auto mt-6 px-30 py-4 rounded-full text-black font-bold text-xl uppercase tracking-wider
                                        bg-[linear-gradient(75deg,#00d2d3,#b386d8,#ff4800)]
                                        hover:opacity-90
                                        transition-opacity
                                        shadow-[0_0_20px_rgba(0,210,211,0.5)]"
                            >
                                Начать!
                            </button>
                        </form>

                    </div>
                </div>

            </div>
        </section>
    );
}
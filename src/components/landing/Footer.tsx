import React from 'react';
import Image from "next/image";

export default function Footer() {

    const CompanyInfo = (
        <div className="space-y-1 leading-relaxed">
            <p>ООО «Ньюком Дистрибьюшн»,</p>
            <p>ОГРН: 1207700420784,</p>
            <p>Юридический адрес: 119017, Российская</p>
            <p>Федерация, г. Москва,</p>
            <p>ул. Большая Ордынка, д. 54 стр. 2</p>
        </div>
    );

    const LogoBlock = (
        <div>
            <Image
                src="/images/logo.svg"
                alt="mrnet logo"
                width={185}
                height={42}
                priority
                className="object-contain w-auto h-10 lg:h-12 mb-4"
            />
            <p className="text-white uppercase tracking-widest text-xs lg:text-sm font-medium leading-snug">
                Категорически новый <br />
                интернет для бизнеса
            </p>
        </div>
    );

    const GeneralContacts = (
        <div className="space-y-1">
            <p>Почта: <a href="mailto:info@mrnet.ru" className="text-gray-300 underline hover:text-white">info@mrnet.ru</a></p>
            <p>График работы: по будням</p>
            <p>с 9:00 до 19:00 по Москве</p>
        </div>
    );

    const SupportContacts = (
        <div className="space-y-1">
            <p className="mb-2">Служба поддержки:</p>
            <p>Тел: <a href="tel:84953084151" className="text-gray-300 underline hover:text-white">8 (495) 308-41-51</a></p>
            <p>Тел: <a href="tel:88006003538" className="text-gray-300 underline hover:text-white">8 (800) 600-35-38</a></p>
            <p>Почта: <a href="mailto:helpdesk@mrnet.ru" className="text-gray-300 underline hover:text-white">helpdesk@mrnet.ru</a></p>
            <p>График работы: 24/7</p>
        </div>
    );

    const Copyright = (
        <div className="text-xs text-gray-400">
            ©2025 mrnet.ru Все права защищены
        </div>
    );

    const CopyrightMobile = (
        <div className="text-xs text-gray-400">
            ©2025 mrnet.ru <br />
            Все права защищены
        </div>
    );

    const LinksGroup1 = (
        <div className="space-y-3">
            <a href="#" className="block underline decoration-gray-600 hover:text-white hover:decoration-white transition-colors">Пользовательское соглашение</a>
            <a href="#" className="block underline decoration-gray-600 hover:text-white hover:decoration-white transition-colors">Политика в отношении обработки персональных данных</a>
            <a href="#" className="block underline decoration-gray-600 hover:text-white hover:decoration-white transition-colors">Соглашение об обработке данных</a>
            <a href="#" className="block underline decoration-gray-600 hover:text-white hover:decoration-white transition-colors">Соглашение о порядке оказания услуг</a>
            <a href="#" className="block underline decoration-gray-600 hover:text-white hover:decoration-white transition-colors">Соглашение о технической поддержке</a>
            <a href="#" className="block underline decoration-gray-600 hover:text-white hover:decoration-white transition-colors">Требования по эксплуатации оборудования mrnet</a>
            <a href="#" className="block underline decoration-gray-600 hover:text-white hover:decoration-white transition-colors">Требования к серверным ресурсам для установки ПО</a>
        </div>
    );

    const LinksGroup2 = (
        <div className="space-y-3">
            <a href="#" className="block underline decoration-gray-600 hover:text-white hover:decoration-white transition-colors">Инструкция по работе с личным кабинетом</a>
            <a href="#" className="block underline decoration-gray-600 hover:text-white hover:decoration-white transition-colors">Инструкция по эксплуатации мультироутера 04</a>
            <a href="#" className="block underline decoration-gray-600 hover:text-white hover:decoration-white transition-colors">Инструкция по эксплуатации мультироутера 05</a>
            <a href="#" className="block underline decoration-gray-600 hover:text-white hover:decoration-white transition-colors">Инструкция по эксплуатации мультироутера 06</a>
            <a href="#" className="block underline decoration-gray-600 hover:text-white hover:decoration-white transition-colors">Инструкция по эксплуатации мультироутера 07</a>
        </div>
    );

    return (
        <footer className="bg-black text-gray-400 text-sm pt-12 pb-0 relative overflow-hidden">
            <div className="max-w-[1400px] mx-auto px-4">

                <h2 className="text-white text-2xl lg:text-3xl font-light uppercase mb-12 lg:mb-16 tracking-wide">
                    Дефолтный подвал
                </h2>

                {/* mobile layout */}
                <div className="lg:hidden grid grid-cols-2 gap-x-4 gap-y-8 pb-0">

                    <div className="col-span-1 text-xs">
                        {CompanyInfo}
                    </div>
                    <div className="col-span-1 text-xs">
                        {SupportContacts}
                    </div>

                    <div className="col-span-2">
                        {GeneralContacts}
                    </div>

                    <div className="col-span-2 space-y-8">
                        {LinksGroup1}
                        {LinksGroup2}
                    </div>

                    <div className="col-span-1 flex flex-col justify-end">
                        {LogoBlock}
                    </div>
                    <div className="col-span-1 flex items-start justify-start text-left pb-1">
                        {CopyrightMobile}
                    </div>

                    {/*  Декоративный блок */}
                    <div className="col-span-2 w-[calc(100%+2rem)] -mx-4 mt-4">
                        <Image
                            src="/images/footer_decor_mobile.svg"
                            alt=""
                            width={375}
                            height={268}
                            className="block w-full h-auto object-cover object-bottom"
                        />
                    </div>
                </div>


                {/* desktop layout */}
                <div className="hidden lg:grid grid-cols-12 gap-8 xl:gap-12">

                    <div className="col-span-3 flex flex-col justify-between h-full space-y-8 pb-12">
                        {CompanyInfo}
                        {LogoBlock}
                    </div>

                    <div className="col-span-3 space-y-8 pb-12">
                        {GeneralContacts}
                        {SupportContacts}
                        <div className="pt-16">
                            {Copyright}
                        </div>
                    </div>

                    <div className="col-span-4 flex flex-row gap-8 pb-12">
                        <div className="flex-1">
                            {LinksGroup1}
                        </div>
                        <div className="flex-1">
                            {LinksGroup2}
                        </div>
                    </div>

                    {/*  Декоративный блок */}
                    <div className="col-span-2 flex items-end justify-end w-full leading-none">
                        <Image
                            src="/images/footer_decor_desktop.svg"
                            alt=""
                            width={368}
                            height={327}
                            className="block w-full h-auto object-contain object-bottom max-w-[368px] ml-auto"
                        />
                    </div>
                </div>
            </div>
        </footer>
    );
}
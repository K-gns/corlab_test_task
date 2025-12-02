import React from 'react';
import { Icons } from '../../ui/icons/Icons';

const orangeGradientStyle = "bg-[linear-gradient(65deg,rgba(241,90,36,0.4)_0%,#000000_70%)]";

const SupportCard = ({
                         title,
                         items,
                         icon
                     }: {
    title: string,
    items: string[],
    icon: React.ReactNode
}) => {
    return (
        <div className={`relative border border-[#f15a24] rounded-xl p-8 lg:p-10 overflow-hidden ${orangeGradientStyle}`}>

            <div className="relative z-10 flex justify-between items-start h-full">
                <div className="max-w-[70%]">
                    <h3 className="text-2xl lg:text-3xl font-normal uppercase mb-6 tracking-wide text-white">
                        {title}
                    </h3>
                    <ul className="space-y-1">
                        {items.map((item, index) => (
                            <li key={index} className="flex items-start gap-3 font-normal font-light text-lg">
                                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#f15a24] shrink-0"></span>
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="mt-4 opacity-90">
                    {icon}
                </div>
            </div>
        </div>
    );
};

export default function TechSupport() {
    return (
        <section>
            <h2 className="text-3xl lg:text-4xl font-light mb-10 uppercase tracking-wide">
                Техподдержка 24/7
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                <SupportCard
                    title="Видим"
                    items={[
                        "Работоспособность устройств",
                        "Уровень сигнала на устройстве",
                        "Доступность канала передачи и узла связи"
                    ]}
                    icon={<Icons.RouterCheck />}
                />

                <SupportCard
                    title="Делаем удаленно"
                    items={[
                        "Настройку устройств",
                        "Перезагрузку устройств",
                        "Обновление ПО"
                    ]}
                    icon={<Icons.RemoteSync />}
                />

            </div>
        </section>
    );
}
"use client"

import React from 'react';
import { scrollToElement } from "@/src/utils/scroll";

interface ScrollButtonProps {
    targetId: string;
    children: React.ReactNode;
    className?: string;
}

export default function ScrollButton({ targetId, children, className }: ScrollButtonProps) {
    return (
        <button
            onClick={() => scrollToElement(targetId)}
            className={className}
        >
            {children}
        </button>
    );
}
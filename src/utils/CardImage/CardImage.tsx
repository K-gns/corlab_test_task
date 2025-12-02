import React from 'react';
import Image, { StaticImageData } from 'next/image';

interface CardImageProps {
    src: string | StaticImageData;
    alt: string;
    className?: string;
    mode?: 'cover' | 'contain';
    priority?: boolean;
    quality?: number;
}

export default function CardImage({
                                      src,
                                      alt,
                                      className = "h-64",
                                      mode = "cover",
                                      priority = false,
                                      quality = 90
                                  }: CardImageProps) {
    return (
        <div className={`relative w-full ${className} overflow-hidden rounded-lg group`}>
            <Image
                src={src}
                alt={alt}
                fill
                priority={priority}
                quality={quality}
                className={`
          transition-transform duration-700 ease-out group-hover:scale-105
          ${mode === 'cover' ? 'object-cover' : 'object-contain'}
        `}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 50vw"
            />
        </div>
    );
}
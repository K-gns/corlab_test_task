import React from 'react';
import Image from 'next/image';

export const Icons = {
    Laptop: () => (
        <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
    ),
    Router: () => (
        <svg className="w-12 h-12 text-[#f15a24]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 10h16v6a2 2 0 01-2 2H6a2 2 0 01-2-2v-6zm3 7v3m10-3v3M6.5 6.5l2.5 2.5m8.5-2.5l-2.5 2.5M12 4v5" /></svg>
    ),
    Sim: () => (
        <svg className="w-6 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3h6l3 3v14a2 2 0 01-2 2H9a2 2 0 01-2-2V5a2 2 0 012-2z" /><path d="M11 7h2" /><path d="M11 10h2" /><path d="M11 13h2" /></svg>
    ),
    Tower: () => (
        <svg className="w-8 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /><path d="M12 2v20" /><path d="M7 16l5-4 5 4" /><path d="M8 12l4-3 4 3" /></svg>
    ),
    Server: () => (
        <svg className="w-10 h-10 text-[#f15a24]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" /></svg>
    ),
    Globe: () => (
        <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>
    ),
    Ethernet: () => (
        <svg className="w-6 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
    ),
    RouterCheck: () => (
        <Image
            src="/icons/router_check.svg"
            alt="Router Check"
            width={80}
            height={80}
            className="object-contain"
        />
    ),

    RemoteSync: () => (
        <Image
            src="/icons/remote_sync.svg"
            alt="Remote Sync"
            width={80}
            height={80}
            className="object-contain"
        />
    )
};
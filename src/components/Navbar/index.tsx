'use client';

import Image from 'next/image';
import './index.scss';

export default function Navbar() {
    const handleSearchChange = (search: string) => console.log(search);

    return (
        <nav className="navbar">
            <Image
                src="/logo.svg"
                alt="Movies App Logo"
                width={172}
                height={82}
                priority
            />
        </nav>
    );
}
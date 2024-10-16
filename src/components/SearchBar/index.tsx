'use client';

import { useEffect, useState } from 'react';
import './index.scss';

import { FaMagnifyingGlass } from "react-icons/fa6";

type Props = {
    onSearchChange: (search: string) => void;
}

export default function SearchBar(
    props: Props
) {
    const [search, setSearch] = useState<string>('');

    useEffect(() => {
        props.onSearchChange(search);
    }, [search]);

    return (
        <div className="input-group">
            <div className="input-icon">
                <FaMagnifyingGlass />
            </div>

            <input 
                type="text" 
                className="input-field" 
                placeholder="Pesquisar"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
        </div>
    );
}

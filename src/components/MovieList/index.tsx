'use client';

import axios from 'axios';
import MovieCard from '../MovieCard';
import { useEffect, useState } from 'react';
import { MovieType } from '@/types/movie';
import './index.scss';
import SearchBar from '../SearchBar';
import Loading from '../Loading';

export default function MovieList() {
    const [movies, setMovies] = useState<MovieType[]>([]);
    const [filteredMovies, setFilteredMovies] = useState<MovieType[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [search, setSearch] = useState<string>('');

    useEffect(() => {
        getMovies();
    }, []);

    useEffect(() => {
        let newMovieList = [...movies];
        if (search !== '') {
            newMovieList = newMovieList.filter(movie =>
                formatString(movie.title).includes(formatString(search))
            );
        }
        setFilteredMovies(newMovieList);
    }, [search]);

    const getMovies = async () => {
        await axios({
            method: 'get',
            url: 'https://api.themoviedb.org/3/discover/movie',
            params: {
                api_key: process.env.NEXT_PUBLIC_API_KEY,
                language: 'pt-BR'
            }
        }).then(response => {
            setMovies(response.data.results);
            setFilteredMovies(response.data.results);
        });

        setIsLoading(false);
    }

    const formatString = (value: string) => {
        return value
            .toLowerCase()
            .trim()
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '');
    }

    if (isLoading) {
        return <Loading />
    }

    return (
        <section className='movie-container'>
            <div className='sub-header'>
                <h1 className='title'>Lista de Filmes</h1>
                <SearchBar onSearchChange={setSearch} />
            </div>
            <ul className='movie-list'>
                {filteredMovies.map(movie => (
                    <MovieCard
                        key={movie.id}
                        movie={movie}
                    />
                ))}
            </ul>
        </section>
    );
}

import React from 'react'
import fetch from 'isomorphic-unfetch';
import { useRouter } from 'next/router';

import Card from '../components/Card'; 


const Movies = ({ movies, page, numberOfMovies }) => {
    // console.log(movies)

    const router = useRouter()
     // console.log(router.query)

    const lastPage = Math.ceil(numberOfMovies / 6)

    return (
        <div className="container row">
            <div className="col d-inline">
                <div className="container movies">
                    {
                        movies.map(movie => (
                            <Card key={movie.id} movie={movie} />
                        ))
                    }
                </div>

            </div>

            <div class="d-grid gap-4 d-md-flex justify-content-md-center mt-5 mx-5">
                <button onClick={() => router.push(`/movies?page=${page - 1}`)} disabled={page <=1} class="btn btn-outline-dark me-md-2" type="button">Previous</button>
                <button onClick={() => router.push(`/movies?page=${page + 1}`)} disabled={page >= lastPage} class="btn btn-outline-dark px-4" type="button">Next</button>
            </div>

        </div>

    
    )
}

export async function getServerSideProps({ query: {page = 1} }) {
    const { API_URL } = process.env

    const start = +page === 1 ? 0 : (+page - 1) * 6

    const numberOfMoviesResponse = await fetch(`${API_URL}/movies/count`)
    const numberOfMovies = await numberOfMoviesResponse.json()

    

    const res = await fetch(`${API_URL}/movies?_limit=6&_start=${start}`)
    const data = await res.json()

    return {
        props: {
            movies: data,
            page: +page,
            numberOfMovies
        }
    }
}

export default Movies;
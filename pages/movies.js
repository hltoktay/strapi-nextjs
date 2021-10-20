import React from 'react'
import fetch from 'isomorphic-unfetch';

import Card from '../components/Card'; 

const Movies = ({ movies }) => {
    console.log(movies)

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

        </div>

    
    )
}
   


export async function getServerSideProps() {
    const { API_URL } = process.env

    const res = await fetch(`${API_URL}/movies`)
    const data = await res.json()

    return {
        props: {
            movies: data
        }
    }
}

export default Movies;
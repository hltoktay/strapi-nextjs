import React from 'react'
import Link from 'next/link';

export default function Card({ movie }) {

    const { API_URL } = process.env

    return (
        <div class="row">
            <div class="col mx-2 mt-2">
                <div class="card h-100">

                    <img src={API_URL + movie.poster.url} class="card-img-top" alt={API_URL + movie.poster.url} />
                    <div class="card-body">
                        <h5 class="card-title">{movie.title}</h5>
                        <p class="card-text">{movie.desc}</p>
                    </div>

                    <div class="d-flex justify-content-between align-items-center p-2">
                        <div class="btn-group">
                            <button type="button" class="btn btn-sm btn-outline-success">Like <i class="far fa-heart"></i></button>
                            <Link href="/movies/[genre]/[slug]" as={`/movies/${movie.genre.slug}/${movie.slug}`}><button type="button" class="btn btn-sm btn-outline-dark mx-2">Info <i class="fas fa-info-circle"></i></button></Link>
                            <button type="button" class="btn btn-sm btn-outline-danger">Dislike <i className="far fa-thumbs-down"></i> </button>
                        </div>
                        <small class="text-muted">View 10</small>
                    </div>

                </div>
            </div>
        </div>
    )
}



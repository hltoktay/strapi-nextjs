import React from 'react';
import getConfig from 'next/config';
import fetch from 'isomorphic-unfetch';
import { NextSeo } from 'next-seo';
 
function Movie( { movie }) {

    const SEO = {
        title: `Next Movies | ${movie.title}`,
        description: movie.description
    }

    return (
        <>
         <NextSeo {...SEO} />
        <div className="container">
                <div class="p-5 mb-4 rounded-3" style={{
                    backgroundImage: 'url(https://wallpaperaccess.com/full/4840775.jpg)', 
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat'
                }} >
                <div class="container-fluid py-5 text-white"> 
                    <h1 class="display-5 fw-bold">{movie.title}</h1>
                    <p class="col-md-8 fs-4" dangerouslySetInnerHTML={{ __html: movie.desc }}></p>
                    <button class="btn btn-outline-light btn-lg" type="button"><i class="far fa-play-circle"></i> Play Trailer</button>
                   <div className="type mt-4">
                        <button className="btn btn-outline-light ">Crime</button>
                        <button className="btn btn-outline-light mx-3">Drama</button>
                        <button className="btn btn-outline-light">Mystery</button>
                   </div>
                </div>
            </div>

            <div class="row align-items-md-stretch">
                <div class="col-md-6">
                    <div className="mt-4 row">
                        <div className="">
                            <p class="">Actors:</p>
                            <ul class="list-inline">
                                <li class="list-inline-item">Actor 1</li>
                                <li class="list-inline-item">Actor 2</li>
                                <li class="list-inline-item">Actor 3</li>
                            </ul>
                        </div>

                        <div className="">
                            <p class="">Star:</p>
                            <ul class="list-inline ">
                                <li class="list-inline-item">Star 1</li>
                                <li class="list-inline-item">Star 2</li>
                                <li class="list-inline-item">Star 3</li>
                            </ul>
                        </div>

                    </div>         
                </div>
                
                <div class="col-md-6">
                    <div class="h-100 p-5 bg-light border rounded-3">
                        <h2>More Explore</h2>
                        <p>Or, keep it light and add a border for some added definition to the boundaries of your content. Be sure to look under the hood at the source HTML here as we've adjusted the alignment and sizing of both column's content for equal-height.</p>
                        <button class="btn btn-outline-secondary" type="button">More Movie</button>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

const { publicRuntimeConfig } = getConfig()

export async function getServerSideProps(context){
    const { slug } = context.query
    const res = await fetch(`${publicRuntimeConfig.API_URL}/movies?slug=${slug}`)
    const data = await res.json()

    return {
        props: {
            movie: data[0]
        },
    }
}

export default Movie;
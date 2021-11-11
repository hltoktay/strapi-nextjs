import {NextSeo} from 'next-seo';

import getConfig from 'next/config';
import fetch from 'isomorphic-unfetch';

import Genres from '../components/Genres';


const Home = ({ genres }) => {

   // console.log(genres)

 const SEO = {
    title: 'Movie Application',
    description: 'Just your favorite movie application'
  }


  return (
    <>
      <NextSeo {...SEO} />
      <div className="container">
        <div class="nav-scroller py-1 mb-2">
          <nav class="nav d-flex justify-content-between">
            {genres.map(genre => (
              <Genres key={genre.id} genre={genre} />
            ))}
          </nav>
        </div>

        <div className="trend-movie">
          <h3>Trend Movies</h3>
          <div className="row">
            <div class="card mb-3" style={{ maxWidth: '440px' }}>
              <div class="row">
                <div class="col-md-4">
                  <img src="..." class="img-fluid rounded-start" alt="..." />
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                  </div>
                </div>
              </div>
            </div>

            <div class="card mb-3" style={{ maxWidth: '440px' }}>
              <div class="row">
                <div class="col-md-4">
                  <img src="..." class="img-fluid rounded-start" alt="..." />
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                  </div>
                </div>
              </div>
            </div>

            <div class="card mb-3" style={{ maxWidth: '440px' }}>
              <div class="row">
                <div class="col-md-4">
                  <img src="..." class="img-fluid rounded-start" alt="..." />
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                  </div>
                </div>
              </div>
            </div>


          </div>
        </div>



      </div>
    </>
  )
}


export async function getServerSideProps() {
  const { API_URL } = process.env

  const res = await fetch(`${API_URL}/genres`)
  const data = await res.json()

  return {
    props: {
      genres: data,
      movies: data
    }
  }
}




export default Home;
import React from 'react'
import getConfig from 'next/config';
import fetch from 'isomorphic-unfetch';

export default function Movie({ genres }) {
    return (
        <div>
            <h2>Movie Title</h2>
        </div>
    )
}

const { publicRuntimeConfig } = getConfig()

export async function getServerSideProps(context) {
    const res = await fetch(`${publicRuntimeConfig.API_URL}/genres/${id}`)
    const data = await res.json()
    const { id } = context.query

    console.log(id)

    return {
        props: {},
    }
}
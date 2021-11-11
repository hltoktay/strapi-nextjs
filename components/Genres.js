import React from 'react'
import Link from 'next/link';

export default function Genres({ genre }) {
    return (
        <div>
            <a class="p-2 link-secondary" href={genre.slug}>{genre.title}</a> 
        </div>
    )
}

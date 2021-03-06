import React from 'react'
import Link from 'next/link';


export default function Header({ navigation }) {


    return (
        <div className="container">
            <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
                <a className="navbar-brand d-flex align-items-center col-md-3 mb-2 mb-md-0" href="/">
                    <img src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/56849d25344275.563441ab0af8b.jpg" alt="" width="180" height="75" className="d-inline-block align-text-top" />
                </a>

                <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0 text-uppercase">
                    {navigation.map(item => (
                        <li key={item.id}>
                            <Link href={item.slug}>
                                <a className="nav-link px-2 active">{item.title}</a>
                            </Link>
                        </li>
                    ))}

                </ul>

                <div className="col-md-3 text-end">
                    <a class="link-secondary" href="#" aria-label="Search">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="mx-3" role="img" viewBox="0 0 24 24"><title>Search</title><circle cx="10.5" cy="10.5" r="7.5" /><path d="M21 21l-5.2-5.2" /></svg>
                    </a>



                    <button type="button" className="btn btn-ligh me-2">Login</button>
                    <button type="button" className="btn btn-outline-dark">Sign-up</button>
                </div>
            </header>
        </div>
    )
}

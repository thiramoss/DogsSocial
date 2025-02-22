import React from 'react'
import Feed from './Feed/Feed'
import "../../App.css"
import Head from './Helper/Head'


const Home = () => {
    return (
    <section className="container mainContainer">
        <Head title="Fotos" />
        <Feed />
    </section>
)}

export default Home;
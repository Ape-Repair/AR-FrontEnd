import React from "react";
import Header from '../components/header';
import NavBar from "../components/navbar";
import Banner from "../components/banner";
import SobreNos from "../components/sobrenos";


function HomePage() {

    return (

        <div>
            <Header />
            <NavBar />
            <Banner />
            <SobreNos />
            
        </div>
    )
}

export default HomePage;
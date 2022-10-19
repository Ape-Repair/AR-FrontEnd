import React from "react";
import Header from '../components/homepage/header';
import NavBar from "../components/homepage/navbar";
import Banner from "../components/homepage/banner";
import SobreNos from "../components/homepage/sobrenos";


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
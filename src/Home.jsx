import { useState } from 'react'
import "./App.css";

import Banner from "./assets/components/Banner";
import Cards from "./assets/components/Cards";
import Compare from "./assets/components/Compare";
import Rankings from "./assets/components/Rankings";

function Home() {
    return (
        <>
        
        <Banner />
        <Cards/>
        <Compare/>
        <Rankings/>
        </>
        
    )
}

export default Home;

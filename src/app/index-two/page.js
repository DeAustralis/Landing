import React from "react";

import FormTwo from "../components/formTwo";
import Navbar from "../components/navbar";
import About from "../components/about";
import Feature from "../components/feature";
import PropertyTwo from "../components/property-two";
import ClientTwo from "../components/client-two";
import GetInTuch from "../components/get-in-touch";
import Footer from "../components/footer";
import Switcher from "../components/switcher";

export default function IndexTwo(){
    return(
        <>
        <Navbar navClass="navbar-white" />
        <section className="relative table w-full py-36 lg:py-44 overflow-hidden zoom-image">
        <div
            style={{ backgroundImage: "url(/images/bg/04.jpg)"}}
            className="absolute inset-0 image-wrap z-1 bg-no-repeat bg-center bg-cover"></div>
        <div className="absolute inset-0 bg-black/70 z-2"></div>
        <div className="container z-3">
            <FormTwo/>
        </div>
        </section>
        <section className="relative md:pb-24 pb-16">
            <About />

            <Feature />

            <PropertyTwo />

            <ClientTwo />

           <GetInTuch/>
        </section>
        <Footer />
        <Switcher />
        </>
    )
}
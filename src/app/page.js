import React from "react";

import Navbar from "./components/navbar";
import Switcher from "./components/switcher";
import Footer from "./components/footer";
import About from "./components/about";
import Feature from "./components/feature";
import Property from "./components/property";
import Client from "./components/client";
import GetInTuch from "./components/get-in-touch";
import FormThree from "./components/formThree";


export default function Home() {
  return (
     <>
     <Navbar/>
        {/* Hero Start  */}
        <section className="relative mt-20">
            <div className="container-fluid md:mx-4 mx-2">
                <div style={{ backgroundImage: `url('/images/bg/01.jpg')` }} className="relative pt-40 pb-52 table w-full rounded-2xl shadow-md overflow-hidden  bg-no-repeat bg-center bg-cover" id="home">
                    <div className="absolute inset-0 bg-black/60"></div>

                    <div className="container">
                        <div className="grid grid-cols-1">
                            <div className="md:text-start text-center">
                                <h1 className="font-bold text-white lg:leading-normal leading-normal text-4xl lg:text-5xl mb-6">We will help you find <br /> your <span className="text-green-600">Wonderful</span> home</h1>
                                <p className="text-white/70 text-xl max-w-xl">A great plateform to buy, sell and rent your properties without any agent or commisions.</p>
                            </div>
                          </div>
                    </div>
                  </div>
              </div>
          </section>
            {/* Hero End */}
            <section className="relative md:pb-24 pb-16">
                <div className="container">
                    <div className="grid grid-cols-1 justify-center">
                        <div className="relative -mt-32">
                            <FormThree/>
                        </div>
                    </div>
                </div>

                <About />
                <Feature />
                <Property />
                <Client />
                <GetInTuch/>
            </section>
     <Footer/>
     <Switcher/>
     </>
  )
}

"use client"
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '../components/navbar';
import FormOne from '../components/formOne';
import Switcher from '../components/switcher';
import { propertiesDetails } from "../data/data";
import { LiaCompressArrowsAltSolid, LuBedDouble, LuBath, FiChevronLeft, FiChevronRight, FiLinkedin, FiFacebook, FiInstagram, FiTwitter } from '../assets/icons/vander';
import MapComponent from '../components/map'; // Import the MapComponent
import Feature from '../components/feature'; // Import the Feature component

export default function GridMap() {
    return (
        <>
            <Navbar topnavClass="bg-white dark:bg-slate-900" />
            <section className="relative">
                <div className="container-fluid">
                    <div className="grid lg:grid-cols-2 md:grid-cols-2">
                        <div>
                            <div className="relative mt-12 md:p-8 py-8 px-3">
                                <div className="grid grid-cols-1">
                                    <FormOne />
                                </div>
                                <div className="grid lg:grid-cols-2 grid-cols-1 mt-8 gap-[30px]">
                                    {propertiesDetails.map((item, index) => (
                                        <div key={index} className="group rounded-xl bg-white dark:bg-slate-900 shadow hover:shadow-xl dark:hover:shadow-xl dark:shadow-gray-700 dark:hover:shadow-gray-700 overflow-hidden ease-in-out duration-500">
                                            <div className="relative">
                                                <Image src={item.image} alt="" width={0} height={0} sizes='100vw' style={{ width: "100%", height: "auto" }} />
                                                <div className="absolute top-4 end-4">
                                                    <Link href="#" className="btn btn-icon bg-white dark:bg-slate-900 shadow dark:shadow-gray-700 rounded-full text-slate-100 dark:text-slate-700 focus:text-red-600 dark:focus:text-red-600 hover:text-red-600 dark:hover:text-red-600"><i className="mdi mdi-heart mdi-18px"></i></Link>
                                                </div>
                                            </div>
                                            <div className="p-6">
                                                <div className="pb-6">
                                                    <Link href={`/property-detail/${item.id}`} className="text-lg hover:text-green-600 font-medium ease-in-out duration-500">{item.name}</Link>
                                                </div>
                                                <ul className="py-6 border-y border-slate-100 dark:border-gray-800 flex items-center list-none">
                                                    <li className="flex items-center me-4">
                                                        <LiaCompressArrowsAltSolid width={20} className="me-2 text-green-600" />
                                                        <span>{item.square}sqf</span>
                                                    </li>
                                                    <li className="flex items-center me-4">
                                                        <LuBedDouble width={20} className="me-2 text-green-600" />
                                                        <span>{item.beds} Beds</span>
                                                    </li>
                                                    <li className="flex items-center">
                                                        <LuBath width={20} className="me-2 text-green-600" />
                                                        <span>{item.baths} Baths</span>
                                                    </li>
                                                </ul>
                                                <ul className="pt-6 flex justify-between items-center list-none">
                                                    <li>
                                                        <span className="text-slate-400">Price</span>
                                                        <p className="text-lg font-medium">${item.price}</p>
                                                    </li>
                                                    <li>
                                                        <span className="text-slate-400">Rating</span>
                                                        <ul className="text-lg font-medium text-amber-400 list-none">
                                                            <li className="inline ms-1"><i className="mdi mdi-star"></i></li>
                                                            <li className="inline ms-1"><i className="mdi mdi-star"></i></li>
                                                            <li className="inline ms-1"><i className="mdi mdi-star"></i></li>
                                                            <li className="inline ms-1"><i className="mdi mdi-star"></i></li>
                                                            <li className="inline ms-1"><i className="mdi mdi-star"></i></li>
                                                            <li className="inline ms-1 text-black dark:text-white">{item.rating}(30)</li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="grid md:grid-cols-12 grid-cols-1 mt-8">
                                    <div className="md:col-span-12 text-center">
                                        <nav>
                                            <ul className="inline-flex items-center -space-x-px">
                                                <li>
                                                    <Link href="#" className="w-10 h-10 inline-flex justify-center items-center mx-1 rounded-full text-slate-400 bg-white dark:bg-slate-900 hover:text-white shadow-sm dark:shadow-gray-700 hover:border-green-600 dark:hover:border-green-600 hover:bg-green-600 dark:hover:bg-green-600">
                                                        <FiChevronLeft className="text-[20px]" />
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="#" className="w-10 h-10 inline-flex justify-center items-center mx-1 rounded-full text-slate-400 hover:text-white bg-white dark:bg-slate-900 shadow-sm dark:shadow-gray-700 hover:border-green-600 dark:hover:border-green-600 hover:bg-green-600 dark:hover:bg-green-600">1</Link>
                                                </li>
                                                <li>
                                                    <Link href="#" className="w-10 h-10 inline-flex justify-center items-center mx-1 rounded-full text-slate-400 hover:text-white bg-white dark:bg-slate-900 shadow-sm dark:shadow-gray-700 hover:border-green-600 dark:hover:border-green-600 hover:bg-green-600 dark:hover:bg-green-600">2</Link>
                                                </li>
                                                <li>
                                                    <Link href="#" aria-current="page" className="z-10 w-10 h-10 inline-flex justify-center items-center mx-1 rounded-full text-white bg-green-600 shadow-sm dark:shadow-gray-700">3</Link>
                                                </li>
                                                <li>
                                                    <Link href="#" className="w-10 h-10 inline-flex justify-center items-center mx-1 rounded-full text-slate-400 hover:text-white bg-white dark:bg-slate-900 shadow-sm dark:shadow-gray-700 hover:border-green-600 dark:hover:border-green-600 hover:bg-green-600 dark:hover:bg-green-600">4</Link>
                                                </li>
                                                <li>
                                                    <Link href="#" className="w-10 h-10 inline-flex justify-center items-center mx-1 rounded-full text-slate-400 bg-white dark:bg-slate-900 hover:text-white shadow-sm dark:shadow-gray-700 hover:border-green-600 dark:hover:border-green-600 hover:bg-green-600 dark:hover:bg-green-600">
                                                        <FiChevronRight className="text-[20px]" />
                                                    </Link>
                                                </li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                                <Feature /> {/* Use the Feature component here */}
                            </div>
                            <footer className="relative bg-neutral-900">
                                <div className="py-[30px] px-0">
                                    <div className="container text-center px-6">
                                        <div className="grid md:grid-cols-2 items-center gap-6">
                                            <div className="md:text-start text-center">
                                                <p className="mb-0 text-gray-300">© {(new Date().getFullYear())}{" "} Hously. Design & Develop with <i className="mdi mdi-heart text-red-600"></i> by <a rel="noreferrer" href="https://shreethemes.in/" target="_blank" className="text-reset">Shreethemes</a>.</p>
                                            </div>
                                            <ul className="list-none md:text-end text-center">
                                                <li className="inline ms-1"><Link href="#" className="btn btn-icon btn-sm text-gray-400 hover:text-white border !border-gray-800 rounded-md hover:border-green-600 dark:hover:border-green-600 hover:bg-green-600 dark:hover:bg-green-600"><FiFacebook className="h-4 w-4" /></Link></li>
                                                <li className="inline ms-1"><Link href="#" className="btn btn-icon btn-sm text-gray-400 hover:text-white border !border-gray-800 rounded-md hover:border-green-600 dark:hover:border-green-600 hover:bg-green-600 dark:hover:bg-green-600"><FiInstagram className="h-4 w-4" /></Link></li>
                                                <li className="inline ms-1"><Link href="#" className="btn btn-icon btn-sm text-gray-400 hover:text-white border !border-gray-800 rounded-md hover:border-green-600 dark:hover:border-green-600 hover:bg-green-600 dark:hover:bg-green-600"><FiTwitter className="h-4 w-4" /></Link></li>
                                                <li className="inline ms-1"><Link href="#" className="btn btn-icon btn-sm text-gray-400 hover:text-white border !border-gray-800 rounded-md hover:border-green-600 dark:hover:border-green-600 hover:bg-green-600 dark:hover:bg-green-600"><FiLinkedin className="h-4 w-4" /></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </footer>
                        </div>
                        <div className="relative md:block hidden">
                            <div className="map border-0 fixed w-full leading-[0]">
                                <MapComponent /> {/* Use the MapComponent here */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Switcher />
        </>
    );
}

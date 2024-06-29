"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import { LiaCompressArrowsAltSolid, LuBedDouble, LuBath } from '../../assets/icons/vander';

export default function PropertyDetail() {
  const router = useRouter();
  const { id } = router.query;
  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      const fetchProperty = async () => {
        try {
          const response = await fetch(`/api/properties/${id}`);
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const data = await response.json();
          setProperty(data);
          setLoading(false);
        } catch (error) {
          console.error('Error fetching property:', error);
          setLoading(false);
        }
      };

      fetchProperty();
    }
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!property) {
    return <div>No property found</div>;
  }

  return (
    <>
      <Navbar navClass="navbar-white" />
      <section
        className="relative table w-full py-32 lg:py-36 bg-no-repeat bg-center bg-cover"
        style={{ backgroundImage: "url('/images/bg/01.jpg')" }}
      >
        <div className="absolute inset-0 bg-black opacity-80"></div>
        <div className="container">
          <div className="grid grid-cols-1 text-center mt-10">
            <h3 className="md:text-4xl text-3xl md:leading-normal leading-normal font-medium text-white">Property Detail</h3>
          </div>
        </div>
      </section>
      <div className="container py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Image
            src={property.image}
            alt={property.name}
            width={600}
            height={400}
            className="rounded-lg"
          />
          <div>
            <h1 className="text-3xl font-semibold mb-4">{property.name}</h1>
            <p className="text-xl mb-4">${property.price}</p>
            <ul className="flex items-center list-none mb-4">
              <li className="flex items-center mr-4">
                <LiaCompressArrowsAltSolid width={20} className="mr-2 text-green-600" />
                <span>{property.square} sqf</span>
              </li>
              <li className="flex items-center mr-4">
                <LuBedDouble width={20} className="mr-2 text-green-600" />
                <span>{property.beds} Beds</span>
              </li>
              <li className="flex items-center">
                <LuBath width={20} className="mr-2 text-green-600" />
                <span>{property.baths} Baths</span>
              </li>
            </ul>
            <p className="text-lg">{property.description}</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

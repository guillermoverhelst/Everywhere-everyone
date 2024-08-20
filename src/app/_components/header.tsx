import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
    return (
        <div className="w-full bg-white">
            <Link className="ml-72 pt-3 flex" href="/">
                <Image className="" src="/logo.png" alt="Logo image" width={35} height={24} priority />
                <p className="ml-1 text-sm font-bold content-center">EO-EW</p>
            </Link>
            <div className="flex justify-center">
                <Link className="mb-2 mr-6" href="/pages/flights/">
                    <Image className="m-auto" src="/plane.png" alt="Plane image" width={30} height={24} priority />
                    <p className="text-center text-sm">Flights</p>
                </Link>
                <Link className="mb-2 mr-6" href="/pages/destinations/">
                    <Image className="m-auto" src="/buildings.png" alt="Buildings image" width={30} height={24} priority />
                    <p className="text-center text-sm">Stays</p>
                </Link>
                <Link className="mb-2 mr-6" href="/pages/attractions/">
                    <Image className="m-auto" src="/attractions.png" alt="Attractions image" width={30} height={24} priority />
                    <p className="text-center text-sm">Attractions</p>
                </Link>
            </div>
            
        </div>
    );
  }
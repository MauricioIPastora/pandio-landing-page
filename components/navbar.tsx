"use client";

import { NavigationMenu, NavigationMenuItem, NavigationMenuList, NavigationMenuLink } from "@/components/ui/navigation-menu";
import Link from "next/link";
import Image from "next/image";
import { LockIcon } from "lucide-react";
import { useState } from "react";

export function Navbar() {
    const [shake, setShake] = useState(false);

    const handleClick = () => {
        setShake(true);
        setTimeout(() => setShake(false), 800);
    };

    return (
        <div className="flex justify-between items-center w-full fixed top-0 z-50">
            <div className="flex justify-start items-center">
                <NavigationMenu className="flex">
                    <NavigationMenuList className="flex">
                        <NavigationMenuItem>
                            <Image src="/pandio-logo.png" alt="Logo" width={175} height={175} />
                        </NavigationMenuItem>
                </NavigationMenuList>
                </NavigationMenu>
            </div>
            {/* <div className=" align-items-center transform flex justify-center rounded-2xl bg-foreground/50 backdrop-blur-sm items-center m-5 h-10">
                <NavigationMenu className="flex m-3 text-white">
                    <NavigationMenuList>
                        <NavigationMenuItem>
                            <NavigationMenuLink className="hover:text-gray-500/75 hover:bg-transparent">
                                <Link href="#">
                                    About
                                </Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuLink className="hover:text-gray-500/75 hover:bg-transparent">
                                <Link href="#">
                                    Features
                                </Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuLink className="hover:text-gray-500/75 hover:bg-transparent">
                                <Link href="#">
                                    Pricing
                                </Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
            </div> */}
            <div className="flex justify-end rounded-2xl bg-foreground/50 backdrop-blur-sm items-center m-3 h-12 overflow-hidden transition-all duration-300 group hover:pl-5 hover:py-2">
                <NavigationMenu className="flex m-3 text-white">
                  <NavigationMenuList>
                    <NavigationMenuItem>
                <div id="gooey-btn" className="relative flex items-center group download-btn-group" style={{ filter: "url(#gooey-filter)" }}>
                    <button className="absolute right-0 px-2 py-2 rounded-full bg-gradient-to-b from-[#FF8FC4] via-[#FF6FAE] to-[#E55A9A] text-foreground font-normal text-sm transition-all duration-300 hover:bg-[#FF6FAE]/90 cursor-pointer h-8 flex items-center justify-center -translate-x-20 group-hover:-translate-x-27 z-0 shadow-[0_1px_4px_0_rgba(255,111,174,0.15)]">
                    <span className="shake-on-hover inline-block">
                        <LockIcon className={`w-3 h-3 ${shake ? 'shake-twice' : ''}`} />
                    </span>
                    </button>
                    <button 
                        onClick={handleClick}
                        className="download-btn px-6 py-2 rounded-full bg-gradient-to-b from-[#FF8FC4] via-[#FF6FAE] to-[#E55A9A] text-foreground font-normal text-sm transition-all duration-300 hover:bg-FF6FAE/90 cursor-pointer h-8 flex items-center z-10 shadow-[0_4px_14px_0_rgba(255,111,174,0.4),0_2px_4px_0_rgba(255,111,174,0.2)]">
                    Download
                    </button>
                </div>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
            </div> 
        </div>
    )
}
import { NavigationMenu, NavigationMenuItem, NavigationMenuList, NavigationMenuLink } from "@/components/ui/navigation-menu";
import Link from "next/link";
import Image from "next/image";

export function Navbar() {
    return (
        <div className="flex justify-between w-full">
            <div className="flex justify-start items-center">
                <NavigationMenu className="flex">
                    <NavigationMenuList className="flex">
                        <NavigationMenuItem>
                            <Image src="/pandio-logo.png" alt="Logo" width={150} height={150} />
                        </NavigationMenuItem>
                </NavigationMenuList>
                </NavigationMenu>
            </div>
            <div className="flex justify-center rounded-lg bg-gray-500/40 backdrop-blur-sm items-center m-3 h-10">
                <NavigationMenu className="flex m-3 text-white/80">
                    <NavigationMenuList>
                        <NavigationMenuItem>
                            <NavigationMenuLink className="hover:text-gray-400 hover:bg-transparent">
                                <Link href="#">
                                    About
                                </Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuLink className="hover:text-gray-400 hover:bg-transparent">
                                <Link href="#">
                                    Features
                                </Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
            </div>
            <div className="flex justify-end rounded-lg bg-gray-500/40 backdrop-blur-sm items-center m-3 h-10">
                <NavigationMenu className="flex m-3 text-white/80">
                        <NavigationMenuList>
                    <NavigationMenuItem>
                            <NavigationMenuLink className="hover:text-gray-400 hover:bg-transparent">
                                <Link href="#">
                                   Download
                                </Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
            </div> 
        </div>
    )
}
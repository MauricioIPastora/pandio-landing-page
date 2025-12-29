import { NavigationMenu, NavigationMenuItem, NavigationMenuList, NavigationMenuLink } from "@/components/ui/navigation-menu";
import Link from "next/link";
import Image from "next/image";

export function Navbar() {
    return (
        <div className="flex justify-between w-full fixed top-0 z-50">
            <div className="flex justify-start items-center">
                <NavigationMenu className="flex">
                    <NavigationMenuList className="flex">
                        <NavigationMenuItem>
                            <Image src="/pandio-logo.png" alt="Logo" width={150} height={150} />
                        </NavigationMenuItem>
                </NavigationMenuList>
                </NavigationMenu>
            </div>
            <div className="flex justify-center rounded-2xl bg-foreground/50 backdrop-blur-sm items-center m-3 h-10">
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
                    </NavigationMenuList>
                </NavigationMenu>
            </div>
        <div className="flex justify-end rounded-2xl bg-foreground/50 backdrop-blur-sm items-center m-3 h-10">
                <NavigationMenu className="flex m-3 text-white">
                        <NavigationMenuList>
                    <NavigationMenuItem>
                            <NavigationMenuLink className="hover:text-gray-500/75 hover:bg-transparent">
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
import React from "react";
import {
    Navbar,
    Collapse,
    Typography,
    IconButton,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link, Outlet } from "react-router-dom";
import { FaDownload, FaGraduationCap } from "react-icons/fa";
import { RiMoonFill, RiOpenaiFill } from "react-icons/ri";
import { MdMiscellaneousServices } from "react-icons/md";
import TeksJalan from "./TeksJalan";

function NavList() {
    const data = [
        {
            link: '/',
            icon: FaDownload,
            title: 'Downloader'
        },
        {
            link: '/edu',
            icon: FaGraduationCap,
            title: 'Edukasi'
        },
        {
            link: '/gpt-ai',
            icon: RiOpenaiFill,
            title: 'GPT & AI'
        },
        {
            link: '/islami',
            icon: RiMoonFill,
            title: 'Islami'
        },
        {
            link: '/other-tools',
            icon: MdMiscellaneousServices,
            title: 'Tools Lain'
        },
    ]
    return (
        <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
            {
                data && data.map((d, index) => (
                    <Typography
                        key={index}
                        as="li"
                        variant="paragraph"
                        color="blue-gray"
                        className="p-1 font-medium"
                    >
                        <Link to={d.link} className={`flex ${window.location.pathname == d.link ? ' text-red-500' : ''} items-center font-bold hover:text-blue-500 transition-colors`}>
                            <d.icon /> &nbsp; {d.title}
                        </Link>
                    </Typography>
                ))
            }
        </ul>
    );
}

export function NavbarFront() {
    const [openNav, setOpenNav] = React.useState(false);

    const handleWindowResize = () =>
        window.innerWidth >= 960 && setOpenNav(false);

    React.useEffect(() => {
        window.addEventListener("resize", handleWindowResize);

        return () => {
            window.removeEventListener("resize", handleWindowResize);
        };
    }, []);
    const logoStyle = {
        fontFamily: 'Protest Revolution'
    }
    return (
        <div>
            <Navbar className="mt-5 shadow-lg bg-white px-6 py-3">
                <div className="flex items-center justify-between text-blue-gray-900">
                    <Link
                        to={"/"}
                        className="mr-4 cursor-pointer py-1.5 text-2xl font-bold text-blue-800"
                        style={logoStyle}
                    >
                        Roidev<span style={logoStyle} className="text-red-500">Tools</span>
                    </Link>
                    <div className="hidden lg:block">
                        <NavList />
                    </div>
                    <IconButton
                        variant="text"
                        className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                        ripple={false}
                        onClick={() => setOpenNav(!openNav)}
                    >
                        {openNav ? (
                            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
                        ) : (
                            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
                        )}
                    </IconButton>
                </div>
                <Collapse open={openNav}>
                    <NavList />
                </Collapse>
            </Navbar>
            <Outlet />
            <TeksJalan />
        </div>
    );
}
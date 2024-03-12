import { useState } from "react"
import { FiLogOut } from "react-icons/fi";
import logo from '@/../public/logo.png';
import iconLogo from '@/../public/icon_logo.svg';
import close from '@/../public/close.png';

import dashboardImage from '@/../public/dashboard.png';
import notebookImage from '@/../public/diary.png';
import tasksImage from '@/../public/tasks.png';
import settingsImage from '@/../public/settings.png';
import supportImage from '@/../public/help.png';
import projectsImage from '@/../public/projects.svg';

import { useEffect } from "react";

async function keycloakSessionLogOut() {
    try {
        await fetch(`/api/auth/logout`, { method: "GET" });
    } catch (err) {
        console.error(err);
    }
}



function SideBar() {

    const { data: session, status } = useSession();

    useEffect(() => {

        if (
            status != "loading" &&
            session &&
            session?.error === "RefreshAccessTokenError"
        ) {
            signOut({ callbackUrl: "/" });
        }
    }, [session, status]);

    const [open, setOpen] = useState(true);
    const Menus = [
        { title: "Dashboard", src: dashboardImage },
        { title: "Diário de bordo", src: notebookImage },
        { title: "Tarefas", src: tasksImage },
        { title: "Meus projetos", src: projectsImage },
        { title: "Configurações", src: settingsImage },
        { title: "Ajuda", src: supportImage },
    ]

    if (!session && status != "loading") {
        return (
            <div className="my-3">
                Not logged in.{" "}
                <button
                    className="bg-blue-900 font-bold text-white py-1 px-2 rounded border border-gray-50"
                    onClick={() => signIn("keycloak")}>
                    Log in
                </button>
            </div>
        )
    }

    return (
        <nav className={`fixed h-full duration-500 bg-palette-menu transition-all px-5 ${open ? "" : "translate-x-[-60%]"}`} >

            {/* opened */}
            <div className={`${!open && 'hidden ml-0'} w-full`}>
                <Image alt="close icon" src={close}
                    className={`absolute cursor-pointer rounded-full -right-0 w-7 border-2 border-palette-menu bottom-2 mr-2`}
                    onClick={() => setOpen(!open)} />
                <div className="flex justify-center mt-5">
                    <Image alt="Trackhub logo" src={logo} className={`cursor-pointer duration-500  w-40`} />
                    <Image alt="icon trackhub" src={iconLogo} className={`cursor-pointer duration-500 w-[40px] hidden`} />
                </div>

                <hr className="h-px my-3 bg-palette-gray border-0" />

                <div className="flex justify-center w-full">
                    <ul className="flex-col">
                        {Menus.map((menu, index) => (
                            <li key={index} className={`text-light flex justify-start text-sm gap-x-4 cursor-pointer p-2 hover:bg-palette-gray rounded-md items-center`}>
                                <Link href={"/"} className="flex gap-2 justify-center items-center">
                                    <Image alt="option logo" src={menu.src} className="transition-none w-6" />
                                    <span className={`origin-left duration-300 `}>{menu.title}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <hr className="h-px my-3 bg-palette-gray border-0" />

                <div className="">
                    <button className={`text-light border-2 border-palette-gray p-2 flex items-center gap-3 rounded-md w-40 justify-center`} onClick={() => {
                        keycloakSessionLogOut().then(() => signOut({ callbackUrl: "/" }));
                    }}>
                        <FiLogOut />
                        <span>Logout</span>
                    </button>
                </div>
            </div>
            {/* ----- */}

            {/* closed */}

            <div className="w-40">
                <div className={`${open && 'hidden'} flex flex-col justify-end ml-[68%]`}>
                    <Image alt="close icon" src={close}
                        className={`absolute cursor-pointer rounded-full -right-0 w-7 border-2 border-palette-menu bottom-2 rotate-180`}
                        onClick={() => setOpen(!open)} />
                    <div className="flex justify-center mt-5">
                        <Image alt="Trackhub logo" src={logo} className={`cursor-pointer duration-500  w-40 hidden`} />
                        <Image alt="icon trackhub" src={iconLogo} className={`cursor-pointer duration-500 w-[40px]`} />
                    </div>

                    <hr className="h-px my-3 bg-palette-gray border-0" />

                    <div className="flex justify-center w-full">
                        <ul className="flex-col">
                            {Menus.map((menu, index) => (
                                <li key={index} className={`text-light flex justify-start text-sm gap-x-4 cursor-pointer p-2 hover:bg-palette-gray rounded-md items-center`}>
                                    <Image alt="option logo" src={menu.src} className="transition-none w-6" color="#FFF" />
                                    <span className={`hidden origin-right duration-300 `}>{menu.title}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <hr className="h-px my-3 bg-palette-gray border-0" />

                    <div className="">
                        <button onClick={() => {
                            keycloakSessionLogOut().then(() => signOut({ callbackUrl: "/" }));
                        }} className={`text-light border-2 border-palette-gray p-2 flex items-center gap-3 rounded-md w-20 justify-center border-none`}>
                            <FiLogOut className={`mr-[40%] w-[20px] h-[20px] text-light border-2 border-palette-gray flex items-center gap-3 rounded-md justify-center border-none`} />
                        </button>
                    </div>
                </div>
            </div>
            {/* closed */}
        </nav>

    );
}

export default SideBar
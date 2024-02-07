import { IoMoonOutline  } from "react-icons/io5";
import Faq from "../../components/info/faq";

export default function ScreenHelp() {
    return (
        <div className="select-none">
            <div className="flex items-center gap-20 relative m-auto w-[95%]">
                <img src="../../src/assets/help/logo.png" className="w-[160px] m-8 " />
                <div className="flex gap-[120px] ml-10">
                    <h1 className="font-medium">Documentação</h1>
                    <h1 className="font-medium">Ajuda</h1>
                </div>
                <div className="flex gap-[5rem]">
                    <button className="font-medium bg-palette-404 hover:bg-palette-line rounded w-[120px] h-[30px] ml-[850px]">Feedback</button>
                    <IoMoonOutline size={25} />
                </div>
            </div>
            <div className="z-1 absolute w-full items-center justify-center flex h-[20rem]">
                <img src="../../src/assets/help/Iconlogo.png" className="w-40" />
            </div>
            <div className="relative m-auto mt-4 bg-black bg-opacity-[0.65] backdrop-blur p-10 flex flex-col justify-center items-center w-[95%] h-[18rem]" >
                <img src="../../src/assets/help/IconBook.png" className="w-10 ml-[16px]"/>
                <h1 className="text-white font-bold text-2xl">Como podemos te ajudar?</h1>
                <h2 className="text-white">Descubra soluções através da nossa documentação</h2>
            </div>
            <div className="w-[95%]">
                <Faq/>
            </div>
        </div>
    );
}
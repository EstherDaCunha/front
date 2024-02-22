import NavBar from "../../components/NavBar"

export default function Apresentation() {
    return (
        <div className="bg-black w-full h-[100vh]">
            <NavBar />
            <div className="flex mr-[4%]">
                <div className="h-[30em] items-center justify-center flex ">
                    <div>
                        <h1 className="text-white font-bold text-7xl mt-[3em]  ml-[3em]">TrackHub</h1>
                        <img src="../../src/assets/Apresentation/gradient.gif" className="w-[19em] ml-[14em]" />
                        <div className="flex">
                            <h2 className="text-lyricsDark w-[28em] ml-[11em] m-2 text-xl">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            </h2>
                        </div>
                    </div>

                </div>
                <div className="w-[40%] m-[6%] ml-[8%]">
                    <img src="../../src/assets/Apresentation/ilustration.png" className="" />
                </div>
            </div>



        </div>
    )
}
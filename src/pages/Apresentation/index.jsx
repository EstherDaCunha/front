import NavBar from "../../components/NavBar"

export default function Apresentation() {
    return (
        <div className="bg-black w-full h-[100vh]">
            <NavBar />
            <div className="h-[30em] items-center justify-center">
                <h1 className="text-white font-bold text-7xl mt-[3em]  ml-[4em]">TrackHub</h1>
                <img src="../../src/assets/Apresentation/gradient.gif" className="w-[19em] ml-[18em]"/>
                <div className="flex">
                    <h2 className="text-lyricsDark w-[28em] ml-[18em] m-2">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </h2>
                    
                </div>
            </div>
        </div>
    )
}
export default function NavBar() {
    return (
        <div className="bg-black w-full flex items-center">
            <img src="../../src/assets/Apresentation/logo.png" className="w-[160px] m-5" />
            <div className="flex space-x-20 ml-[5em]">
                <button><h1 className="text-lyricsDark font-semibold">About</h1></button>
                <button><h1 className="text-lyricsDark font-semibold">Documentation</h1></button>
                <button><h1 className="text-lyricsDark font-semibold">Team</h1></button>
            </div>
            <div className="ml-[55%]">
                <button className="border border-lyricsDark text-lyricsDark font-semibold w-[7em] h-[2em] rounded-md ">Access</button>
            </div>
        </div>
    )
}
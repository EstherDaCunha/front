import Team from "./Team"

export default function Detail() {
    return (
        <div className="border w-[30em] h-[35em] m-10 rounded">
            <div className="flex space-x-[10em] p-4">
                <h1 className="font-bold text-2xl">Start Process Mapping</h1>
                <button className="text-lyricsDark">X</button>
            </div>
            <hr className="h-px bg-palette-line border-0 w-[30em] " />
            <div className="p-4 flex space-x-3">
                <Team />
                <Team />
            </div>
            <div className="bg-teamcolor w-[25em] h-[14em]">
                <h2>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip 
                ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex 
                </h2>
            </div>
        </div>
    )
}
import { useState } from "react"
import Detail from "./Detail"

export default function Register() {
    const [ShowDetail, setShowDetail] = useState(false)

    return (
        <div>
            <div className="border w-[17em] h-[17em] rounded-xl drop-shadow-sm space-y-1">
                <div className="p-4">
                    <div className="p-2">
                        <h1 className="font-bold text-xl">Start Process Mapping</h1>
                    </div>
                    <div className="p-2 flex space-x-2 items-center">
                        <img src="../../src/assets/historico/calendario.png" />
                        <h2 className="text-lyricsDark text-sm">04/04/2024</h2>
                    </div>
                    <div className="p-2 w-[14em] h-[6em]">
                        <h3 className="text-lyricsDark text-sm size-30">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Sed do eiusenim ad minim veniam, quis nostrud exercitation......
                        </h3>
                    </div>
                </div>

                <div className="m-0">
                    <hr className="h-px bg-palette-line border-0 w-[17em] " />
                </div>
                <div className="p-2 w-[8em] h-[30px] ml-[4em]">
                    <button className="bg-palette-blue w-[8em] h-[30px] text-white font-semibold rounded" onClick={() => setShowDetail(true)}>Ver mais</button>
                </div>
            </div>
            <div>
                <Detail isVisible={ShowDetail} onClose={() => setShowDetail(false)} />
            </div>
        </div>
    )
}
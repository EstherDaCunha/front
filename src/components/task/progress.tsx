export default function Progress() {
    return (
        <main className="w-full">
            <div className="m-2">
                <div className="border border-3 border-color: rgb(191 191 191); w-[20em] h-[11em] rounded shadow-lg">
                    <div className="flex space-x-[5em]">
                        <div className="m-3">
                            <h1 className="font-semibold text-lg">Data analysis</h1>
                            <h2 className="text-sm font-normal text-slate-400 opacity-1">Data for dashboard</h2>
                        </div>
                    </div>

                    <div className="m-3">
                        <div className="bg-yellow w-[8em] h-[2em] rounded-lg">
                            <h1 className="text-yellowDark font-bold p-1 m-3">In Progress</h1>
                        </div>
                    </div>
                    <div className="flex m-3">
                        <div className=" w-[10em] h-[2em] flex space-x-3 items-center">
                            <div className=" w-[30px] rounded-full">
                                <img src="../../src/assets/perfil/perfil.png" />
                            </div>
                            <div className="">
                                <h1 className="font-normal text-slate-400">Fulano de tal</h1>
                            </div>
                        </div>
                        <div className="ml-10 mt-[5px] opacity-1 ont-normal">
                            <h1 className="text-slate-400">15/03/2024</h1>
                        </div>
                    </div>

                </div>
            </div>
        </main>
    )
}
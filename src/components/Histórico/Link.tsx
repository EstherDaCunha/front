export default function Link() {
    return (
        <div className="bg-teamcolor w-[12em] h-[21px] rounded">
            <div className=" w-[20px] h-[20px] ml-2 flex items-center space-x-2">
                <img src="../../src/assets/historico/link.png" className="w-[20px] h-[20px]" />
                <a className="text-sm text-palette-blue">http://localhost:5173/</a>
            </div>

        </div>
    )
}
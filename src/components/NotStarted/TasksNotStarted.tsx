import Number from "./Number"

export default function TasksNorStarted() {
    return (
        <div className="w-[13em] h-[10em] bg-[#FEE6E7] rounded">
            <div className="w-[12em] p-3">
                <h1 className="font-bold text-xl">Tasks not started</h1>
            </div>
            <div className="w-[7em] p-3 ml-8">
                <Number />
            </div>
            <h2 className="text-xs ml-3 text-[#868686] font-bold">All tasks</h2>
        </div>
    )
}
import Tostart from "../task/tostart"
import Progress from "../task/progress"
import Finished from "../task/finished"

export default function Column() {
    return(
        <div className="flex">
            <div className="border border-2 w-[22em] h-[50em] m-10">
                <h1 className="font-bold text-2xl m-2">To Start</h1>
                <Tostart />
            </div>
            <div className="border border-2 w-[22em] h-[50em] m-10">
                <h1 className="font-bold text-2xl m-2">In Progress</h1>
                <Progress />
            </div>
            <div className="border border-2 w-[22em] h-[50em] m-10">
                <h1 className="font-bold text-2xl m-2">Finished</h1>
                <Finished />
            </div>
        </div>
    )
}
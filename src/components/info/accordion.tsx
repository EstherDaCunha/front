import {useState} from "react"
import { IoIosArrowDown, IoIosArrowUp  } from "react-icons/io";

const Accordion = ({title, answer}) => {
    const [accordOpen, setAccordOpen] = useState(false)
    return(
        <div className="py-2">
            <button className="justify-between flex w-full" onClick={() => setAccordOpen(!accordOpen)}>
                <h1 className="text-palette-blue font-semibold text-lg">{title}</h1>
                {accordOpen ? <span><IoIosArrowUp /></span> : <span><IoIosArrowDown /></span>}
            </button>
            <div className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600 text-sm
            ${accordOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                <div className="overflow-hidden">{answer}</div>
            </div>
        </div>
    )
};

export default Accordion;
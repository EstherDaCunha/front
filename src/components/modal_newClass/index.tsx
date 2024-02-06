import { useState } from "react"
import Modal from "./modal"
import { MdOutlineGroupAdd } from "react-icons/md";

export default function NovaTurma() {
    const [showModal, setShowModal] = useState(false)
    return(
        <main>
            <div className="p-10 text-center  ">
                <button className="text-white bg-palette-sea-green hover:bg-palette-sea-greenDark focus:outline-none font-medium text-base rounded px-5 py-2.5 text-center mr-5 flex gap-3"
                onClick={() => setShowModal(true)}><MdOutlineGroupAdd size={25}/>Nova turma</button>
            </div>
            <Modal isVisible={showModal} onClose={() => setShowModal(false)}>
                <div>
                    <h1 className="text-xl font-bold text-gray-900 mb-6 ml-3 h-3 mt-5">Nova Turma</h1>
                    <hr className="h-px my-3 bg-palette-line border-0 " />
                    <h2 className="text-lg font-semibold ml-5 text-palette-sea-green">Digital Solutions</h2>
                    <input type="number" min="1" max="20" className="border border-palette-line rounded-sm h-9 w-[90px] ml-5 mt-2 placeholder: p-2" />
                    <h2 className="text-lg font-semibold ml-5 text-palette-sea-green mt-2">Padrinho ou Madrinha</h2>
                    <input type="text" className="border border-palette-line rounded-sm h-9 w-[300px] ml-5 mt-2 placeholder: p-2" />
                    <h2 className="text-lg font-semibold ml-5 text-palette-sea-green mt-2">Turno</h2>
                    <select className="border border-palette-line rounded-sm h-9 w-[300px] ml-5 mt-2 placeholder: p-2">
                        <option selected>Selecione o turno</option>
                        <option value="M">Manhã</option>
                        <option value="T">Tarde</option>
                    </select>
                    <div>
                        <button className="bg-palette-sea-green w-[98px] h-8 rounded mt-12 ml-5 text-white mb-7 font-semibold hover:bg-palette-sea-greenDark">Adicionar</button>
                        <button className="bg-palette-cancel w-[98px] h-8 rounded mt-12 ml-5 text-palette-sea-green mb-7 font-semibold hover:bg-palette-grayDark">Cancelar</button>
                    </div>
    
                </div>
               
            </Modal>
        </main>
    )
}
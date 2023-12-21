import { faTimes } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const SearchProduct = ({ show, isShow, searchValue, add, showOnShop, result }) => {
    return (
        <div className={`fixed z-10 overflow-y-auto top-0 w-full left-0 ${show ? "" : "hidden"}  `} id="modal">
            <div className="flex items-center justify-center min-height-100vh pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                <div className="fixed inset-0 transition-opacity">
                    <div className="absolute inset-0 bg-gray-700 opacity-75" />
                </div>
                <span className="hidden sm:inline-block sm:align-middle sm:h-screen">&#8203;</span>
                <div className="inline-block align-center bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full mt-64"
                    role="dialog" aria-modal="true" aria-labelledby="modal-headline">
                    <div className="bg-white border-solid border-4 px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                        <button className="absolute top-0 right-0 h-19 w-6 " >
                            <FontAwesomeIcon icon={faTimes} className="w-5" onClick={() => isShow(false)} />
                        </button>
                        <input name="stock" type="text" id={"search"} placeholder={"Buscar producto por nombre..."} onKeyDown={searchValue}
                            className="w-full bg-gray-100 p-2 mt-2 mb-3" />
                        <div className="right-0 w-full rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                            role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex="-1">
                            <div className="py-1" role="none">
                                <ul className="bg-white max-h-60 overflow-y-auto no-scrollbar rounded-lg border border-gray-200 text-gray-900 text-sm font-medium">
                                    {
                                        result.map((item, index) => (
                                            <li className="px-4 py-2 border-b border-gray-200 w-full hover:bg-blue-700 hover:text-white cursor-pointer"
                                                key={index} href="#"
                                                tabIndex="-1" onClick={() => add(item)}>
                                                {item.name}
                                                <span className="cursor-pointer
                                                                 float-right
                                                                 text-xs
                                                                 px-3
                                                                 font-small
                                                                 text-base
                                                                 bg-pink-500
                                                                 text-white
                                                                 rounded-full"
                                                    onClick={() => showOnShop(item)}
                                                > Ver en Shop
                                                </span>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchProduct
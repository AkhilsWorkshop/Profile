import logo from '../assets/logo.svg';
import { CgMenu, CgClose } from "react-icons/cg";
import { useState } from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {

    const items = [
        {
            id: 1,
            item: "Home"
        },
        {
            id: 2,
            item: "About"
        },
        // {
        //     id: 3,
        //     item: "Projects"
        // },
        // {
        //     id: 4,
        //     item: "Education"
        // },
        {
            id: 5,
            item: "Contact"
        }
    ]

    const [menu, setMenu] = useState(false);

    return (
        <div className="flex justify-center items-center w-full h-20 text-white  backdrop-blur bg-black/70
        px-4 fixed shadow-xl">
            <div className="max-w-screen-lg flex justify-between items-center w-full">
                <Link to="Home" smooth duration={500}>
                    <img className="w-20 cursor-pointer hover:scale-95 duration-200" src={logo} alt="Logo"></img>
                </Link>


                <ul className="hidden md:flex">
                    {items.map(({ id, item }) => (
                        <li key={id} className="px-4 cursor-pointer text-gray-300  duration-100 hover:text-gray-50 hover:scale-105">
                            <Link to={item} smooth duration={500}>
                                {item}
                            </Link>
                        </li>
                    ))}
                </ul>

                <div onClick={() => setMenu(!menu)} className="cursor-pointer z-20 text-gray-300 md:hidden">
                    {menu ? <CgClose size={35} /> : <CgMenu size={35} />}
                </div>

                {menu && (
                    <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-[#272727] to-gray-800">
                        {items.map(({ id, item }) => (
                            <li key={id} className="px-4 cursor-pointer text-gray-300 py-6 text-4xl">
                                <Link onClick={() => setMenu(!menu)} to={item} smooth duration={500}>
                                    {item}
                                </Link>
                            </li>
                        ))}
                        <a href="/Resume-AkhilKumar.pdf" target="_blank" rel="noreferrer" className="text-white w-fit px-6 py-3 my-6 border-2 border-[#fff559] flex items-center rounded-md">Resume
                        </a>
                    </ul>
                )}


            </div>



        </div>
    )
}

export default Navbar
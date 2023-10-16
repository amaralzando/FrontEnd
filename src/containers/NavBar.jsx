import React from 'react';
import { Link } from 'react-router-dom';
import imagemLogo from '../assets/Logo.png';	

const NavBar = () => {
    return (
        < >
            <div className="p-10 space-y-10  text-white">
                <div className="w-1/2 flex">
                    <img src={imagemLogo}/>
                </div>
                <div className="bg-slate-700 p-3 rounded-xl">
                    <p className="text-xl font-bold">NomeDoOperador</p>
                    <p className="text-base">CargoDoOperador</p>
                </div>
                {/*  */}
                <nav className="text-xl">
                <ul  className="space-y-3">
                    <li className="hover:bg-slate-700 focus-within:bg-slate-700 p-2 rounded-xl">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="hover:bg-slate-700 focus-within:bg-slate-700 p-2 rounded-xl">
                        <Link to="/EncurtadorLink">Encurtador Link</Link>
                    </li>
                </ul>
                </nav>
            </div>
        </>
    );
}

export default NavBar;
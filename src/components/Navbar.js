import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './Navbar.css';

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu  = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false)
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton()
    }, []);

    window.addEventListener('resize', showButton);

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo" 
                     onClick={closeMobileMenu}>
                        RM <i className="fas fa-spa" />
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/apresentacao' 
                             className='nav-links' 
                             onClick={closeMobileMenu}
                            >
                             Apresentação
                            </Link>
                        </li>

                        <li className='nav-item'>
                            <Link to='/services' 
                             className='nav-links' 
                             onClick={closeMobileMenu}
                            >
                             Serviços
                            </Link>
                        </li>
                       
                        <li className='nav-item'>
                            <Link to='/products' 
                             className='nav-links' 
                             onClick={closeMobileMenu}
                            >
                             Técnicas
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/nosso-espaco' 
                             className='nav-links' 
                             onClick={closeMobileMenu}
                            >
                             Nosso Espaço
                            </Link>
                        </li>
                        
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar

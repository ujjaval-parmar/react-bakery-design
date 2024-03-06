import React, { useEffect, useState } from 'react'

function Header( { isScroll }) {


   const [showMenu, setShowMenu]  = useState(false);

  

 

    const handleLinkClick = e =>{
        // console.log(e.target.className)
        if(e.target.className === 'nav__link'){
            setShowMenu(false);
        }
    }


  return (
    <header className={`header ${isScroll ? 'isScroll' : ''}`} id="header" >

        <nav className="nav container">
            <a href="#" className='nav__logo'>Bakery</a>

            <div className={`nav__menu ${showMenu ? 'show-menu' : ''}`} id="nav-menu">

                <ul className="nav__list" onClick={handleLinkClick}>

                    <li className="nav__item">
                        <a href="#home" className='nav__link'>Home</a>
                    </li>

                    <li className="nav__item">
                        <a href="#news" className='nav__link'>News</a>
                    </li>

                    <li className="nav__item">
                        <a href="#about" className='nav__link'>About Us</a>
                    </li>

                    <li className="nav__item">
                        <a href="#favorite" className='nav__link'>Favorites</a>
                    </li>

                    <li className="nav__item">
                        <a href="#visit" className='nav__link'>Location</a>
                    </li>

                </ul>

                {/* close button */}
                <div className="nav__close" id="nav-close" onClick={()=> setShowMenu(false)}>
                <i className="fa-solid fa-x"></i>
                </div>

                <img src="./img/bread-4.png" alt="image" className='nav__img-1' />
                <img src="./img/bread-1.png" alt="image" className='nav__img-2' />


            </div>

            {/* Toggle button */}
            <div className="nav__toggle" onClick={()=> setShowMenu(true)}>
            <i className="fa-solid fa-bars"></i>
            </div>

        </nav>


    </header>
  )
}

export default Header
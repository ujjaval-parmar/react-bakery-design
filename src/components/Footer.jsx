import React from 'react'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container container grid">

                <div>
                    <a href="#" className="footer__logo">Bakery</a>
                    <p className="footer__description">
                        We make the best bread <br /> in the city.
                    </p>
                </div>

                <div className="footer__content grid">
                    <div>
                        <h3 className="footer__title">Address</h3>

                        <ul className="footer__list">
                            <li>
                                <address className="footer__info"> AV. The Sun #321 <br /> Lima Peru</address>
                            </li>

                            <li>
                                <address className="footer__info"> 9AM - 11PM</address>
                            </li>
                        </ul>

                    </div>

                    <div>
                        <h3 className="footer__title">Contact Me</h3>

                        <ul className="footer__list">
                            <li>
                                <address className="footer__info"> bakery@email.com
                                </address>
                            </li>

                            <li>
                                <address className="footer__info">+00 987 654 321</address>
                            </li>
                        </ul>

                    </div>

                    <div>
                        <h3 className="footer__title">Follow Us</h3>

                        <div className="footer__social">
                            <a href="#">
                                <i className="fa-brands fa-facebook"></i>
                            </a>
                            <a href="#">
                                <i className="fa-brands fa-twitter"></i>
                            </a>
                            <a href="#">
                                <i className="fa-brands fa-square-instagram"></i>
                            </a>
                        </div>

                    </div>

                </div>


                <img src="./img/bread-4.png" alt="image" className="footer__img-1" />

                <img src="./img/bread-3.png" alt="image" className="footer__img-2" />

            </div>

            <span className="footer__copy">
                &#169; All Rights Reserved By Bedimcode
            </span>

        </footer>
    )
}

export default Footer
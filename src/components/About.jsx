import React, { useEffect } from 'react'

const About = () => {

    

    return (
        <section className='about section' id='about'>
            <div className="about__container container grid">
                <div className="about__data">
                    <h2 className="section__title">About Us</h2>

                    <p className="about__description">
                        We prepare all types of bread that are made at home,
                        maintaining the tradition of using only the best
                        ingredients made with local products whenever possible.
                        We have an extensive line of freshly prepared bakery
                        and coffee products.
                    </p>

                    <a href="#" className="button">Know More</a>

                    <img src="./img/bread-2.png" alt="image" className="about__bread" />

                </div>

                <img src="./img/about-bread.png" alt="image" className="abot__img" />

            </div>
        </section>
    )
}

export default About
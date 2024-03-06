import React, { useEffect } from 'react'

const Visit = () => {

  


    return (
        <section className="section visit" id="visit">
            <div className="visit__container">
                <img src="./img/visit-bg.jpg" alt="image" className="visit__bg" />
                <div className="visit__shadow"></div>

                <div className="visit__content container grid">
                    <div className="visit__data">
                        <h2 className="section__title">
                            Visit Us
                        </h2>
                        <p className="visit__description">
                            Discover the best bread, we look forward
                            to your visit. 
                        </p>

                        <a href="#" className="button">See Location</a>

                    </div>
                </div>


            </div>
        </section>
    )
}

export default Visit
import React, { useEffect, useRef, useState } from 'react'

const New = () => {

    const [isVisible, setIsVisible] = useState(false);

    const newRef = useRef();

    useEffect(() => {

        const observer = new IntersectionObserver((entries) => {
            // console.log(entries[0].isIntersecting)

            setIsVisible(entries[0].isIntersecting);

        }, {
            root: null,
            rootMargin: '0px',
            threshold: 0.3
        });

        if (newRef.current)
            observer.observe(newRef.current);

        // console.log(observer);

        return () => observer.unobserve(newRef.current);

    }, [])



    return (
        <section className='new section' id='news' ref={newRef}>
            <h2 className="section__title">
                New Breads
            </h2>

            <div className="new__container container grid">
                <div className="new__content grid">

                    <article className="new__card">

                        <div className="new__data">
                            <h2 className="new__title">Multigrain Bread</h2>
                            <p className="new__description">Tasty and made with different
                                natural grains from the countryside.</p>
                        </div>

                        <img src="./img/new-bread-1.png" alt="image" className={`new__img ${isVisible ? 'visible' : ''}`} />

                    </article>

                    <article className="new__card">

                        <div className="new__data">
                            <h2 className="new__title">Rye Bread</h2>
                            <p className="new__description">Baked with healthy, gluten-free
                                sourdough for good nutrition.</p>
                        </div>

                        <img src="./img/new-bread-2.png" alt="image" className={`new__img ${isVisible ? 'visible' : ''}`} />

                    </article>

                    <article className="new__card">

                        <div className="new__data">
                            <h2 className="new__title">Whole Grain Bread</h2>
                            <p className="new__description">Crispy and homemade prepared
                                from organic yeast-free flour.</p>
                        </div>

                        <img src="./img/new-bread-3.png" alt="image" className={`new__img ${isVisible ? 'visible' : ''}`} />

                    </article>

                </div>

                <a href="" className="new__button button">See More Breads</a>


            </div>

        </section>
    )
}

export default New
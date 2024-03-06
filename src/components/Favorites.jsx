import React, { useEffect, useRef, useState } from 'react'

const DATA = [
    {
        title: 'Whole Grain',
        subtitle: 'Bread',
        img: 'favorite-bread-1.png',
        price: '$6.00',
    },
    
    {
        title: 'Rye',
        subtitle: 'Bread',
        img: 'favorite-bread-2.png',
        price: '$8.00',
    },
    
    {
        title: 'Wheat',
        subtitle: 'Bread',
        img: 'favorite-bread-3.png',
        price: '$3.00',
    },
    
    {
        title: 'Multigrain',
        subtitle: 'Bread',
        img: 'favorite-bread-4.png',
        price: '$5.00',
    },
    
    {
        title: 'Sourdough',
        subtitle: 'Bread',
        img: 'favorite-bread-5.png',
        price: '$7.00',
    },
    
    {
        title: 'French',
        subtitle: 'Bread',
        img: 'favorite-bread-6.png',
        price: '$3.00',
    }
]

const Favorites = () => {

    const [isVisible, setIsVisible] = useState(false);

    const favoriteRef = useRef();

    useEffect(() => {

        const observer = new IntersectionObserver((entries) => {
            console.log(entries[0].isIntersecting)

            setIsVisible(entries[0].isIntersecting);

        }, {
            root: null,
            rootMargin: '0px',
            threshold: 0.2
        });

        if (favoriteRef.current)
            observer.observe(favoriteRef.current);

        // console.log(observer);

        return () => observer.unobserve(favoriteRef.current);

    }, [])


    return (
        <section className="section favorite" id="favorite" ref={favoriteRef}>
            <h2 className="section__title">
                Customer Favorites
            </h2>

            <div className="favorite__container container grid">

                {DATA.map(item=>{
                    return(<article className="favorite__card" key={item.title}>
                    <img src={`./img/${item.img}`} alt="image" className={`favorite__img ${isVisible ? 'visible' : ''}`}  />

                    <div className="favorite__data">
                        <h2 className="favorite__title">{item.title}</h2>
                        <span className="favorite__subtitle">{item.subtitle}</span>
                        <h3 className="favorite__price">{item.price}</h3>
                    </div>

                </article>)
                })}
                
            </div>


        </section>
    )
}

export default Favorites
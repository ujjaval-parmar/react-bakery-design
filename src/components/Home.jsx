import React, { useEffect, useRef, useState } from 'react'

const Home = () => {

  const [isVisible, setIsVisible] = useState(false);

    const homeRef = useRef();

    useEffect(() => {

        const observer = new IntersectionObserver((entries) => {
            // console.log(entries[0].isIntersecting)

            setIsVisible(entries[0].isIntersecting);

        }, {
            root: null,
            rootMargin: '0px',
            threshold: 0.3
        });

        if (homeRef.current)
            observer.observe(homeRef.current);

        // console.log(observer);

        return () => observer.unobserve(homeRef.current);

    }, [])

    // console.log(isVisible)



  return (
    <section className='home section' id='home' ref={homeRef} >

      <img src="./img/home-bg.jpg" alt="image" className="home__bg" />

      <div className="home__shadow"></div>

      <div className="home__container container grid">

        <div className={`home__data ${isVisible ? 'visible' : ''}`}>

          <h1 className="home__title">
            Select The Best <br /> Quality Breads
          </h1>

          <a href="#" className='button'>Select Breads</a>

          <img src="./img/bread-1.png" alt="image" className="home__bread" />

        </div>

        <div className="home__image">
          <img src="./img/home-bread.png" alt="image" className={`home__img ${isVisible ? 'visible' : ''}`} />
        </div>

        <footer className='home__footer'>

          <div className="home__location">
            <i className="fa-solid fa-location-dot"></i>
            <span>AV. The Sun #321 <br /> Lima Peru</span>
          </div>

          <div className="home__social">
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


        </footer>



      </div>


    </section>
  )
}

export default Home
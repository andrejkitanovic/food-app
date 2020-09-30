import React, {useEffect, useState} from 'react'

import Banner from '../../../components/LandingPage/Banner/Banner'
import Stats from '../../../components/LandingPage/Stats/Stats'
import AboutUs from '../../../components/LandingPage/AboutUs/AboutUs'
import Cards from '../../../components/LandingPage/Cards/Cards'
import Description from '../../../components/LandingPage/Description/Description'
import Menu from '../../../components/LandingPage/Menu/Menu'
import Reviews from '../../../components/LandingPage/Reviews/Reviews'
import SpecialMenu from '../../../components/LandingPage/SpecialMenu/SpecialMenu'
import ContactUs from '../../../components/LandingPage/ContactUs/ContactUs'

let changeActiveCard = null

const LandingPage = props => {
    const [activeCard,setActiveCard] = useState(1)
    const [activeReview,setActiveReview] = useState(1)

    useEffect(() => {
        changeActiveCard = setTimeout(() => {
            if(activeCard < 3){
                setActiveCard(p => p+1)
            }else setActiveCard(1)
        }, 3000)

        return () => clearTimeout(changeActiveCard)
    },[activeCard])

    const changeActiveCardHandler = property => {
        setActiveCard(property)
    }

    const changeActiveReviewHandler = property => {
        setActiveReview(property)
    }

    return <div className="LandingPage">
        <Banner />
        <Stats />
        <AboutUs />
        <Cards active={activeCard} click={changeActiveCardHandler}/>
        <Description />
        <Menu />
        <Reviews active={activeReview} click={changeActiveReviewHandler}/>
        <SpecialMenu />
        <ContactUs />
    </div>
}

export default LandingPage
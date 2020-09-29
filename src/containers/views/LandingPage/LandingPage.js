import React, {useEffect, useState} from 'react'

import Banner from '../../../components/LandingPage/Banner/Banner'
import Stats from '../../../components/LandingPage/Stats/Stats'
import AboutUs from '../../../components/LandingPage/AboutUs/AboutUs'
import Cards from '../../../components/LandingPage/Cards/Cards'
import Description from '../../../components/LandingPage/Description/Description'
import Menu from '../../../components/LandingPage/Menu/Menu'

let changeActiveCard = null

const LandingPage = props => {
    const [activeCard,setActiveCard] = useState(1)

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

    return <div className="LandingPage">
        <Banner />
        <Stats />
        <AboutUs />
        <Cards active={activeCard} click={changeActiveCardHandler}/>
        <Description />
        <Menu />
    </div>
}

export default LandingPage
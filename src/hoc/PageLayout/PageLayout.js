import React from 'react'

import Header from '../../components/PageLayout/Header/Header'
import Footer from '../../components/PageLayout/Footer/Footer'

const PageLayout = props => {

    return (
        <div className="PageLayout">
            <Header />
            <main>
                {props.children}
            </main>
            <Footer />
        </div>
    )
}

export default PageLayout
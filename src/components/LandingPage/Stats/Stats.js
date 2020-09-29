import React from 'react'
import './Stats.scss'

const stats = props => {

    return(
    <div className="Stats">
        <div className="stat">
            <h4>Customers</h4>
            <p>1000+</p>
        </div>

        <div className="stat">
            <h4>Reviews</h4>
            <p>150</p>
        </div>

        <div className="stat">
            <h4>Orders</h4>
            <p>5000+</p>
        </div>

        <div className="stat">
            <h4>Different meals</h4>
            <p>100</p>
        </div>
    </div>)
}

export default stats
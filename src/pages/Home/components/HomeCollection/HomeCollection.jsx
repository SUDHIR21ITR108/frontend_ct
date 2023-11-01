import React from 'react'
import HomeCollectionItem from '../HomeCollectionItem/HomeCollectionItem'

const HomeCollection = () => {
    return (
        <div className="home-collection">
            <div className="page-container">
                <HomeCollectionItem
                    image='https://rethority.com/wp-content/uploads/2022/10/Shutterstock_1724488825-960x600.jpg.webp'
                    title='Exterior Hardwares!'
                    comment='Launch Offer 50% Off!'
                    reverse={false}
                />
                <HomeCollectionItem
                    image='https://wallpapercave.com/dwp1x/wp2089287.jpg'
                    title='Interior Hardwares!'
                    comment='Launch Offer 25% off!'
                    reverse={true}
                />
            </div>
        </div>
    )
}

export default HomeCollection
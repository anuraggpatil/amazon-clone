import React from 'react'
import './Home.css'
import home_background from './amazon_background.jpg'
import Product from './Product'
import { v4 as uuidv4 } from 'uuid'

function Home() {
    return (
        <div className='home'>
            <a href="https://www.primevideo.com/?ref_=dvm_pds_gen_in_as_s_g_sitemon_mkw_slgAX6a65-dc&mrntrk=pcrid_386561644245_slid__pgrid_82649959367_pgeo_9300447_x__ptid_kwd-303629226711" target="_blank" rel="noreferrer noopener">
                <img className="home__background" src={home_background} alt="background" />

            </a>
            <div className="home__container"> 
                <div className="home__row">
                    <Product id={uuidv4()} title='boAt Xtend Smartwatch with Alexa Built-in, 1.69” HD Display, Multiple Watch Faces, Stress Monitor, Heart & SpO2 Monitoring, 14 Sports Modes, Sleep Monitor & 5 ATM Water Resistance(Pitch Black)' price={2999.00} rating={5} image="https://m.media-amazon.com/images/I/61IMRs+o0iL._AC_UY327_FMwebp_QL65_.jpg" />

                    <Product id={uuidv4()} title='Mi Notebook Ultra 3.2K resolution display Intel Core i5-11300H 11th Gen 15.6-inch(39.62 cm) Thin and Light laptop' price={64990} rating={4} image="https://m.media-amazon.com/images/I/81RHHnGydgL._AC_UY327_FMwebp_QL65_.jpg" />
                </div>
                <div className="home__row">
                    <Product id={uuidv4()} title='Echo Dot (3rd Gen) - #1 smart speaker brand in India with Alexa (Black)' price={3250} rating={4} image="https://m.media-amazon.com/images/I/61EXU8BuGZL._AC_UY327_FMwebp_QL65_.jpg" />
                    <Product id={uuidv4()} title='Apple iPhone 13 (128GB) - (Product) RED' price={74900} rating={5} image="https://m.media-amazon.com/images/I/71gm8v4uPBL._AC_UY327_FMwebp_QL65_.jpg" />
                    <Product id={uuidv4()} title="Nike Men's Air Max 2021 Sneaker" price={14495} rating={3} image="https://m.media-amazon.com/images/I/11yTJjIACqL._AC_UL392_FMwebp_QL65_.jpg" />
                </div>
                <div className="home__row">
                    <Product id={uuidv4()} title='PHILIPS Brilliance 499P9H1/75 124.46 cm (49-inch) Curved SuperWide Dual QHD LCD Display with Pop-Up Webcam' price={107000} rating={4} image="https://m.media-amazon.com/images/I/61PnS+zB2QL._AC_UY327_FMwebp_QL65_.jpg" />

                </div>
            </div>
        </div>
    )
}

export default Home
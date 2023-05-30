import React from 'react'
import style from './style.module.scss'
import SearchIcon from '@mui/icons-material/Search';

const Aside = () => {
    return (
        <aside>
            <div className={style.aside_input}>
                <span className={style.aside_search_icon}><SearchIcon/></span>
                <input type="text" placeholder="Search Twitter" />

            </div>

            <div className={style.aside_container}>
                <h2>What's happening?</h2>
                <blockquote className={style.twitter_tweet}>
                    <p lang="en" dir="ltr"> Save the date, because
                        <a href="https://twitter.com/hashtag/JavaOne?src=hash&amp;ref_src=twsrc%5Etfw">#JavaOne</a>
                        is back! Join the world’s premier
                        <a href="https://twitter.com/hashtag/developer?src=hash&amp;ref_src=twsrc%5Etfw">#developer</a>
                        conference in Las Vegas at
                        <a href="https://twitter.com/Oracle?ref_src=twsrc%5Etfw">@Oracle</a>
                        CloudWorld October 16–20, 2022.<br />
                        <br />Subscribe for the latest news about registration, the call for papers, luminary speakers, and more.
                        <a href="https://t.co/hhSf3dMGc1">https://t.co/hhSf3dMGc1</a>
                        <a href="https://t.co/OeDFukcM8K">pic.twitter.com/OeDFukcM8K</a>
                    </p>&mdash; Java (@java)
                    <a href="https://twitter.com/java/status/1506310994112483328?ref_src=twsrc%5Etfw">March 22, 2022</a>
                </blockquote>

            </div>
        </aside>
    )
}

export default Aside
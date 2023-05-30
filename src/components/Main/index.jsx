import React, { useEffect, useState } from 'react'
import style from './style.module.scss'
import VerifiedIcon from '@mui/icons-material/Verified';
import ChatIcon from '@mui/icons-material/Chat';
import RepeatIcon from '@mui/icons-material/Repeat';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import Post from './../Post/index';

// const posts = [
//     {
//         logo: "https://www.pngitem.com/pimgs/m/174-1746846_java-logo-hd-png-download.png",
//         title: "Java",
//         tag: "@java",
//         text: "Java 18 is now available! #Java18 #JDK18 #openjdk",
//         description: "Download now: https://social.ora.cl/6012KoqQ0\nRelease notes: https://social.ora.cl/6013KoqQF\nAPI Javadoc: https://social.ora.cl/6015KoqQN\nFeatures: https://social.ora.cl/6016KoqQ4",
//         image: "https://www.oracle.com/oce/press/assets/CONTEA3E548B1B56494CB8AD8208F13021D7/native/rc24-java-18.jpg"
//     },
//     {
//         logo: "https://www.pngitem.com/pimgs/m/174-1746846_java-logo-hd-png-download.png",
//         title: "Java",
//         tag: "@java",
//         text: "Java 18 is now available! #Java18 #JDK18 #openjdk",
//         description: "Download now: https://social.ora.cl/6012KoqQ0\nRelease notes: https://social.ora.cl/6013KoqQF\nAPI Javadoc: https://social.ora.cl/6015KoqQN\nFeatures: https://social.ora.cl/6016KoqQ4",
//         image: "https://images5.alphacoders.com/587/587597.jpg"
//     },
//     {
//         logo: "https://www.pngitem.com/pimgs/m/174-1746846_java-logo-hd-png-download.png",
//         title: "Java",
//         tag: "@java",
//         text: "Java 18 is now available! #Java18 #JDK18 #openjdk",
//         description: "Download now: https://social.ora.cl/6012KoqQ0\nRelease notes: https://social.ora.cl/6013KoqQF\nAPI Javadoc: https://social.ora.cl/6015KoqQN\nFeatures: https://social.ora.cl/6016KoqQ4",
//         image: "https://wallpaper-mania.com/wp-content/uploads/2018/09/High_resolution_wallpaper_background_ID_77700178906-optimized.jpg"
//     },
// ]



const Main = () => {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        fetch('https://dummyjson.com/posts')
            .then(res => res.json())
            .then(json=>{
                setPosts(json.posts)
                console.log(json)
            });
    }, [])
    return (
        <div className={style.main}>
            <div className={style.header}>
                <h2>Home</h2>
            </div>

            <div className={style.tweet_box}>
                <form>
                    <div className={style.tweet_box_input}>
                        <img src="https://play-lh.googleusercontent.com/Lkq_OOIi0iEbeU3MT1j-8iVdKm8eau78zC89K4u1p1tQ712k3l-EgyT1NKNJKTFRYQ" alt="profile image" />
                        <input type="text" placeholder="What's happening?" />
                        <button className="">Tweet</button>

                    </div>
                </form>

            </div>

            {posts.map((post) => <Post key={post.id} title={post.userId} text={post.title} description={post.body} reactions={post.reactions}/>)}


        </div>
    )
}

export default Main
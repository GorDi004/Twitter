import React from 'react'
import style from './style.module.scss'
import VerifiedIcon from '@mui/icons-material/Verified';
import ChatIcon from '@mui/icons-material/Chat';
import RepeatIcon from '@mui/icons-material/Repeat';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FileUploadIcon from '@mui/icons-material/FileUpload';

const Post = (props) => {
    return (
        <div className={style.post}>
            <div className={style.post_profile_image}>
                <img src={props.logo} alt="java-logo" />

            </div>

            <div className={style.post_body}>
                <div className={style.post_header}>
                    <div className={style.post_header_text}>
                        <h3>{props.title}
                            <span className={style.header_icon_section}>
                                <span className={style.post_badge}><VerifiedIcon /></span>{props.tag}
                            </span>
                        </h3>
                    </div>

                    <div className={style.post_header_description}>
                        <p>{props.text}</p>
                        <br />
                        <p>{props.description}</p>
                    </div>

                </div>
                <img src={props.image} alt="java18" />

                <div className={style.post_footer}>

                    <span><ChatIcon /></span>
                    <span><RepeatIcon /></span>
                    <span><FavoriteBorderIcon /></span>
                    <span><FileUploadIcon /></span>

                </div>

            </div>

        </div>
    )
}

export default Post
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
                <img src="https://www.pngitem.com/pimgs/m/174-1746846_java-logo-hd-png-download.png" alt="java-logo" />
            </div>

            <div className={style.post_body}>
                <div className={style.post_header}>
                    <div className={style.post_header_text}>
                        <h3>Java-{props.title}
                            <span className={style.header_icon_section}>
                                <VerifiedIcon className={style.post_badge} />
                                @java
                            </span>
                        </h3>
                    </div>

                    <div className={style.post_header_description}>
                        <p>{props.text}</p>
                        <br />
                        <p className={style.description}>{props.description}</p>
                    </div>

                </div>
                <img src="https://images5.alphacoders.com/587/587597.jpg" alt="java18" />

                <div className={style.post_footer}>

                    <ChatIcon />
                    <RepeatIcon />
                    <span className={style.reactions}>
                        <FavoriteBorderIcon />{props.reactions}
                    </span>
                    <FileUploadIcon />

                </div>

            </div>

        </div>
    )
}

export default Post
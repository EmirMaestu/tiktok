import { useEffect, useRef, useState } from 'react'
import styles from './styles.module.css'

const SRC =
    'https://v16-webapp.tiktok.com/feeda71c4c34ce9f93073e3723d81f87/62710b06/video/tos/useast2a/tos-useast2a-ve-0068c002/cef3b615dbdc496680887f7dff6d8fc8/?a=1988&br=1982&bt=991&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=eXd.6HmzMyq8ZF1Rjwe2NJxwyl7Gb&l=202205030457090102230791451AA27983&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=M3B1ajQ6ZnFvPDMzNzczM0ApZWg6NGc7O2Q1NzpkNWlnNWdoNi1ocjRnL2dgLS1kMTZzczFgLmNfYGM1LzAuMmJiXy06Yw%3D%3D&vl=&vr='
export default function VideoPlayer() {
    const [playing, setPlaying] = useState(false)
    const video = useRef()
    const handlePlay = () => {
        if (playing) {
            video.current.pause()
        } else {
            video.current.play()
        }
        setPlaying(!playing)
    }

    return (
        <div>
            <video
                className={styles.video}
                src={SRC}
                controls={false}
                ref={video}></video>
            <button className={styles.player} onClick={handlePlay}></button>
        </div>
    )
}

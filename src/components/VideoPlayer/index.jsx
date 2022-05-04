import clsx from 'clsx'
import { useEffect, useRef, useState } from 'react'
import styles from './styles.module.css'
import VideoPlayerActions from './VideoPlayerActions'

export default function VideoPlayer({ src }) {
    const [playing, setPlaying] = useState(false)
    const video = useRef(null)
    const handlePlay = () => {
        const { current: videoElmt } = video
        playing ? videoElmt.pause() : videoElmt.play()
        setPlaying(!playing)
    }

    const playerClassName = clsx(styles.player, {
        [styles.hidden]: playing,
    })

    return (
        <div className={styles.wrapper} onClick={handlePlay}>
            <video
                className={styles.video}
                src={src}
                controls={false}
                ref={video}
            />
            <i className={playerClassName} />
            <VideoPlayerActions />
        </div>
    )
}

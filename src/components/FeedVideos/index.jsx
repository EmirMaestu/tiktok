import VideoPlayer from '../VideoPlayer/index.jsx'
import styles from './styles.module.css'

const VIDEOS = [
    {
        id: 1,
        author: 'JP',
        description: '🤣🤣 #serepudrio #joda',
        likes: 123,
        shares: 456,
        comments: 333,
        songTitle: 'sonido original - JP',
        albumCover:
            'https://p16-amd-va.tiktokcdn.com/img/tos-useast2a-v-2774/bf1241342b4b424c9ecab1f90d19f96f~c5_200x200.jpeg',
        src: 'https://v16-webapp.tiktok.com/61f9c82f7ce28a72a1b8c794bc3d9d57/62722212/video/tos/useast2a/tos-useast2a-pve-0068/220aa406901943e085f0a11c165a5cad/?a=1988&br=2714&bt=1357&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=eXd.6HmzMyq8Z6-vjwe2N0rELl7Gb&l=202205040049200102231000261558A973&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=MzU6ODw6ZmpwPDMzNzczM0ApZGkzNmU2Zjw2N2ZkNTY8aGdrX2thcjRfZjBgLS1kMTZzcy1jMDA0YC1fLTMwLjBiYWM6Yw%3D%3D&vl=&vr=',
    },
    {
        id: 2,
        author: 'JP',
        description: '🤣🤣 #serepudrio #joda',
        likes: 123,
        shares: 456,
        comments: 333,
        songTitle: 'sonido original - JP',
        albumCover:
            'https://p16-amd-va.tiktokcdn.com/img/tos-useast2a-v-2774/bf1241342b4b424c9ecab1f90d19f96f~c5_200x200.jpeg',
        src: 'https://v16-webapp.tiktok.com/afa8bf4ede54de24699d2232b1a3bc3b/62722a57/video/tos/alisg/tos-alisg-pve-0037c001/77c44b202c964f9aa1d8bd7a4e388563/?a=1988&br=2308&bt=1154&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=eXd.6HmzMyq8ZNQZjwe2NHPjyl7Gb&l=20220504012416010189053069166371D5&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=amxvbTU6ZnE4PDMzODczNEApZDloOTg3NztpNzw0NzlnPGc1cWVfcjQwYGhgLS1kMS1zczZeMF8vNTEuMmA0LjMvLS46Yw%3D%3D&vl=&vr=',
    },
]

export default function FeedVideos() {
    return VIDEOS.map(video => {
        return (
            <div key={video.id} className={styles.item}>
                <VideoPlayer {...video} />
            </div>
        )
    })
}

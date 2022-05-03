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
        src: 'https://v16-webapp.tiktok.com/967a00e4f626e2de30e3ca25b90d4a66/62711673/video/tos/useast2a/tos-useast2a-ve-0068c002/836629b21d05481585a670bd4ee65703/?a=1988&br=4014&bt=2007&cd=0%7C0%7C0%7C0&ch=0&cr=0&cs=0&dr=0&ds=2&er=&ft=eXd.6HmzMyq8ZucJjwe2NoWoyl7Gb&l=20220503054747010223065022139F7DBC&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=am11bDU6ZnZ5PDMzNzczM0ApPGg8Z2Q1Ojw0NzY6MzY7OWdmc2ducjRfbWRgLS1kMTZzczJiMy9hMjBeLzVhYi0yX186Yw%3D%3D&vl=&vr=',
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
        src: 'https://v16-webapp.tiktok.com/bf3e75958cebaee26af9e4a3078e802b/62711bfb/video/tos/useast2a/tos-useast2a-ve-0068c003/9b2e6fdd7a434ec985e16c1756df717b/?a=1988&br=3568&bt=1784&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=eXd.6HmzMyq8ZbNJjwe2NJ1eyl7Gb&l=2022050306100101022302013125B199B3&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=M3Q6cDc6ZmVsOjMzNzczM0ApN2c5OWk8NmQ8N2lpZ2U7Z2dma2tucjRnYnFgLS1kMTZzczVeXzAvXmAwNDZeLzEvYS46Yw%3D%3D&vl=&vr=',
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

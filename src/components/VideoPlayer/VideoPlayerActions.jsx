import { Heart } from '../Icons/Heart'
import { Comment } from '../Icons/Comment'
import { Share } from '../Icons/Share'
import styles from './styles.module.css'

export default function VideoPlayerActions({
    like = 1571,
    comments = 700,
    shares = 900,
    hearted = false,
}) {
    return (
        <aside className={styles.actions}>
            <div className={styles.action}>
                <Heart />
                <strong title='like'>{like}</strong>
            </div>
            <div className={styles.action}>
                <Comment />
                <strong title='comments'>{comments}</strong>
            </div>
            <div className={styles.action}>
                <Share />
                <strong title='shares'>{shares}</strong>
            </div>
        </aside>
    )
}

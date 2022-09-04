import rocket from '../../assets/rocket.png'
import cafe from '../../assets/cafe.png'
import alf from '../../assets/alf.png'
import styles from './Logo.module.scss'

export const Logo = () => {

    return (
        <div className={styles.container}>
          <img src={rocket} className={styles.item} />
          <img src={alf} className={styles.itemMain} />
          <img src={cafe} className={styles.item} />
        </div>
    )
};

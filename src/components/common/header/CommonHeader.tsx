import styles from './CommonHeader.module.scss';

function CommonHeader() {
    return (
         <div className={styles.header}>
            <div className={styles.header_logoBox}>
                <img src='public\images\image-logo.png' alt='' className={styles.header_logoBox_logo}/>
                <span className={styles.header_logoBox_title}>PhotoSplash</span>
            </div>
            <div className={styles.header__profileBox}>
            <button className={styles.header_profileBox_button}>사진제출</button>
            <button className={styles.header_profileBox_button}>북마크</button>
            <span className={styles.header_profileBox_username}>Samuel / github.com/bdyong</span>
        </div>
        </div>
    )
    
}

export default CommonHeader
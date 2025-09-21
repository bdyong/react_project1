import styles from './CommonFooter.module.scss';

function CommonFooter() {
    return (
        <footer className={styles.footer}>
            <div className={styles.pagination_button}>
             <button className={styles.pagination_button}>
                <img src="public\icons\icon-arrowLeft.svg" alt="" />
             </button>
            {/*변경될 ui부분*/}
            <span>1</span>
                <button className={styles.pagination_button}>
                    <img src="public\icons\icon-arrowRight.svg" alt="" />
                </button>
        </div>
    </footer>
    )
}

export default CommonFooter
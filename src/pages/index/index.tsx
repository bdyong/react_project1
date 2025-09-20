import CommonHeader from "@/components/common/header/CommonHeader"
import CommonSearchBar from "@/components/common/searchBar/CommonSearchBar"
import styles from "./styles/index.module.scss"
import CommonFooter from "@/components/common/footer/CommonFooter"
import CommonNav from "@/components/common/navigation/CommonNav"

function index() {
  return (
    <div className={styles.page}>
        {/* 공통 헤더 ui 부분*/}
        <CommonHeader />
        {/* 공통 네비게이션 ui 부분*/}
        <CommonNav />
        <div className={styles.page_contents}>
            <div className={styles.page_contents_introBox}>
                <div className={styles.wrapper}>
                    <span className={styles.wrapper_title}>PhtoSplash</span>
                    <span className={styles.wrapper_desc}>
                        인터넷의 시각 자료 출처입니다. <br />
                        모든 지역에 있는 크리에이터들의 지원을 받습니다.
                        </span>
                        {/* 검색창 ui 부분 */}
                        <CommonSearchBar/>
                </div>
            </div>
            <div className={styles.page_contents_imageBox}></div>
        </div>
            {/* 공통 푸터 ui 부분*/}
            <CommonFooter />
    </div>
  )
}

export default index
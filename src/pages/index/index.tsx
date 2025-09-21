import CommonHeader from "@/components/common/header/CommonHeader"
import CommonSearchBar from "@/components/common/searchBar/CommonSearchBar"
import styles from "./styles/index.module.scss"
import CommonFooter from "@/components/common/footer/CommonFooter"
import CommonNav from "@/components/common/navigation/CommonNav"
import Card from "./components/Card"
import axios from "axios"
import { useEffect } from "react"

function index() {
  const getData= async() => {
    // API
    const API_URL = 'https://api.unsplash.com/search/photos'
    const API_KEY = 'OGa0W_pb-1li6-6KDWQLz67dsDeyDnO6UzgNDQo7sek'
    const PER_PAGE = 30

    const searchValue = 'Korea'
    const pageValue = 100

    try{
        const res = await axios.get(`${API_URL}?query=${searchValue}&client_id=${API_KEY}&page=${pageValue}&per_page=${PER_PAGE}`)
      
        console.log(res)      
      }catch(error){
        console.log(error) 
    }
  }

  useEffect(() => {
    getData()
  }, [])

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
            <div className={styles.page_contents_imageBox}>
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </div>
            {/* 공통 푸터 ui 부분*/}
            <CommonFooter />
    </div>
  )
}

export default index
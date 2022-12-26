import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBrush, faGear, faHeadset, faMessage, faUserGroup, faUsers } from "@fortawesome/free-solid-svg-icons"
import PageController from '../components/dashboard/PageController'
const Home: NextPage = () => {
  const router = useRouter()
  const [currentPage, setCurrentPage] = useState(0)
  useEffect(() => {
    document.querySelectorAll(".lists")[currentPage].classList.remove("active")
    if (router.query.page) {
      const newPage = Number(router.query.page)
      document.querySelectorAll(".lists")[newPage].classList.add("active")
      setCurrentPage(newPage)
    }
    else document.querySelectorAll(".lists")[currentPage].classList.add("active")
  }, [router.query])
  const controller = (newPage: number) => {
    document.querySelectorAll(".lists")[currentPage].classList.remove("active")
    document.querySelectorAll(".lists")[newPage].classList.add("active")
    router.push(`${router.route}?page=${newPage}`)
    setCurrentPage(newPage)
  }
  return (
    <div className="lg:flex-row flex flex-col">
      <aside className="lg:min-h-screen lg:w-1/6 lg:mt-0 lg:overflow-auto bg-black w-full mt-20 overflow-scroll  ">
        <div className="lg:block lg:w-24 lg:h-24 hidden "></div>
        <ul className="lg:block  flex text-left w-full justify-between">
          <li className="lists" onClick={() => controller(0)}>
            <FontAwesomeIcon icon={faUsers} />
            <span>Users</span>
          </li>
          <li className="lists" onClick={() => controller(1)}>
            <FontAwesomeIcon icon={faBrush} />
            <span>Login Screen</span>
          </li>
          <li className="lists" onClick={() => controller(2)}>
            <FontAwesomeIcon icon={faUserGroup} />
            <span>Cliques</span>
          </li>
          <li className="lists" onClick={() => controller(3)}>
            <FontAwesomeIcon icon={faHeadset} />
            <span>Support</span>
          </li>
          <li className="lists" onClick={() => controller(4)}>
            <FontAwesomeIcon icon={faMessage} />
            <span>Feedback</span>
          </li>
          <li className="lists" onClick={() => controller(5)}>
            <FontAwesomeIcon icon={faGear} />
            <span>Settings</span>
          </li>
        </ul>
      </aside>
      <main className="lg:w-5/6 w-full">
        <header className="lg:relative absolute top-0 w-full bg-black h-20 center">
          <img src="/TMP.ico" alt="TMP" className="w-10 h-10" />
          <h1 className="text-2xl font-bold ml-4">The Movieplay Admin</h1>
        </header>
        {/* Height calculated full screen - header's height */}
        <div className="dashboard h-[calc(100%-5rem)]">
          <PageController currentPage={currentPage} />
        </div>
      </main>
    </div>
  )
}

export default Home

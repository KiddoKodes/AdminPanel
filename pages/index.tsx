import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useEffect, useMemo, useState } from 'react'

const Home: NextPage = () => {
  const router = useRouter()
  const [currentPage, setCurrentPage] = useState(0)
  useEffect(() => {
    if (router.query.page) {
      const newPage = Number(router.query.page)
      setCurrentPage(newPage)
      document.querySelectorAll(".lists")[newPage].classList.add("active")
    }
  }, [router.query])
  const controller = (newPage: number) => {
    document.querySelectorAll(".lists")[currentPage].classList.remove("active")
    document.querySelectorAll(".lists")[newPage].classList.add("active")
    router.push(`${router.route}?page=${newPage}`)
    setCurrentPage(newPage)
  }
  return (
    <div className="flex">
      <aside className="h-screen bg-black w-1/6">
        <div className="w-24 h-24"></div>
        <ul className="text-left">
          <li className="lists" onClick={() => controller(0)}>
            <span>Users</span>
          </li>
          <li className="lists" onClick={() => controller(1)}>
            <span>Login Screen</span>
          </li>
          <li className="lists" onClick={() => controller(2)}>
            <span>Cliques</span>
          </li>
          <li className="lists" onClick={() => controller(3)}>
            <span>Support</span>
          </li>
          <li className="lists" onClick={() => controller(4)}>
            <span>Feedback</span>
          </li>
          <li className="lists" onClick={() => controller(5)}>
            <span>Settings</span>
          </li>
        </ul>
      </aside>
      <main className="w-5/6">
        <header className="w-full bg-black h-20 flex justify-center items-center">
          <img src="/TMP.ico" alt="TMP" className="w-10 h-10" />
          <h1 className="text-2xl font-bold ml-4">The Movieplay Admin</h1>
        </header>
        <Page currentPage={currentPage} />
      </main>
    </div>
  )
}
const Page = ({ currentPage }: { currentPage: number }) => {
  return <h1>Hello {currentPage}</h1>
}
export default Home

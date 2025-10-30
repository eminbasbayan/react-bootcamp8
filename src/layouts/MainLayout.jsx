import { Outlet } from 'react-router-dom'
import Header from '../components/Layout/Header'

const MainLayout = () => {
  return (
    <div className='main-layout'>
        <Header />
        <main className='pt-20 pb-10 min-h-[calc(100vh-80px)]'>
           <Outlet />
        </main>
    </div>
  )
}

export default MainLayout
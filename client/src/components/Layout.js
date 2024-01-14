import { Outlet } from "react-router-dom"
import asl from '../images/asl.png'
import { CircleUserRound } from 'lucide-react';

const Layout = () => {
    const backdrop = `rgba(47, 62, 70, 0.3)`;
    return (
        <main className="App">
            <div className='absolute top-0 left-0 w-full h-screen bg-background-color -z-50'></div>
            <div className='absolute top-0 left-0 w-full h-screen bg-gradient-to-r from-primary-color to-secondary-color opacity-50 -z-[49]'></div>
            <Outlet />
            <nav className='absolute top-0 left-0 flex justify-between items-center w-full h-28 px-10 border-b-2 border-primary-color backdrop-blur-sm' style={{ background: backdrop }}>
                <a href='/'><img src={asl} alt='asl' className='w-[175px] h-[80]' /></a>
                <div className='flex justify-between items-center w-1/6'>
                    <a href='/lessons' className='font-ShinGoPro text-primary-color text-2xl mr-5 '>Lessons</a>
                    <a href='/login' className='font-ShinGoPro text-primary-color text-2xl mr-5'><CircleUserRound className='w-6 h-6' /></a>
                </div>
            </nav>
        </main>
    )
}

export default Layout
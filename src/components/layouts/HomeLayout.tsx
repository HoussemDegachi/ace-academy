import { ReactNode } from 'react'
import HomeNav from './HomeNav';
import Foter from './Foter';

type homeLayoutProps = {
    children: ReactNode;
    toggleSignup?: () => void;
}

function HomeLayout({ children, toggleSignup }: homeLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <div>
      <HomeNav toggleSignup={toggleSignup} />
        {children}
        </div>
        <Foter />
    </div>
  )
}

export default HomeLayout
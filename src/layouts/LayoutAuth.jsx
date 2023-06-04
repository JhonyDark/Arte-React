import { Outlet } from 'react-router-dom';

const LayoutAuth = () => {
  return (
    <div className='min-h-screen flex items-center justify-center p-4 pb-20 sm:pb-0'>
      <Outlet />
    </div>
  )
}

export default LayoutAuth;

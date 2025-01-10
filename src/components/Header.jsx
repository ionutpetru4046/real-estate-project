import { FaSearch } from 'react-icons/fa';
import Link from 'next/link';

export default function Header() {
  return (
    <header className='bg-slate-200 shadow-md'>
      <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
        <Link href='/' >
            <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
              <span className=''>Sahand</span>  
              <span className=''>Estate</span>  
            </h1>
        </Link>
      </div>
    </header>
  )
}

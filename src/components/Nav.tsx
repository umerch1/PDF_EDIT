import Constact from '../constants/Constant';
import logoicon from '../assets/login-icon.png';
import pdf from '../assets/PDF_TECH.svg'
function Nav() {
  return (
   <header className='py-8  z-10 w-full bg-[#13144D] '>
    <nav className='px-10 flex  items-center justify-between'>
      <img src={pdf} className='w-[200px] h-[140px]' alt='Logo' />
        <div className='flex justify-center items-center'>
           <ul className='flex gap-10'>
            {Constact.map((item)=>{
                return(
                   <h3 className='text-white font-medium from-neutral-50 uppercase'>{item.title}</h3>
                )
            })}
           </ul>
           <div className='flex bg-gradient-to-r from-[#41C93E] to-[#74F27E] w-[136px] h-[48px] justify-between items-center px-4 ml-8 drop-shadow-md'>
            <img className='w-[20px] h-[20px] ' src={logoicon} alt="logo Icon" />
            <button className='text-[#13144D] text-2xl font-normal'>Login</button>
           </div>
        </div>
    </nav>
   </header>
  )
}

export default Nav

import { BasicClasses } from '../../styles/BasicStyles';

type Props = {
  title: string;
  description: React.ReactNode;
  link: string;
}
function Layout({ title, description,link }: Props) {
  return (
    <div className={`flex flex-col gap-4 h-full  w-full p-3 md:p-8 text-${BasicClasses.primary}`}>
      <h1 className=' font-bold text-3xl md:text-6xl'>{title} </h1>
      <div className=' flex border-l-4 pl-6 border-[#66FCF1] '>
        <p className={`font-semibold text-lg `}>
          {
            description
          }
        </p>
      </div>
      <div className=' flex font-bold text-2 '> 
      <a href={link}  target='_blank' >
      <button className='border p-2 transform transition-transform duration-300 hover:scale-110'> Visit site</button>
      </a>
       </div>
      
    </div>
  )
}

export default Layout;
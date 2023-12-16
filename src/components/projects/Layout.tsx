
import { BasicClasses } from '../../styles/BasicStyles';

type Props = {
  title: String;
  description: React.ReactNode;
}
function Layout({ title, description }: Props) {
  return (
    <div className={`flex flex-col gap-4 h-full  w-full p-3 md:p-8 text-${BasicClasses.primary}`}>
      <h1 className=' font-bold text-3xl md:text-6xl'>{title} </h1>
      <div className=' flex border-l-4 pl-6 rounded-tl-lg rounded-bl-lg '>
        <p className={`font-semibold text-lg `}>
          {
            description
          }
        </p>
      </div>
      <div className=' flex font-bold text-2 '> 
      <button className='border p-2 transform transition-transform duration-300 hover:scale-110'> Visit site</button>
       </div>
      
    </div>
  )
}

export default Layout;
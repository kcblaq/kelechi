
import { motion } from 'framer-motion';
import './App.css';


function App() {

  return (
    <>
      <div className=" min-h-[100dvh] min-w-[100dvw] flex items-center justify-center"> 
      <motion.div 
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className=' bg-purple-500 w-40 h-40'>
          I believe
        </motion.div>
      </div>
    </>
  )
}

export default App

import { motion } from "framer-motion"
function Loader() {
  return (
    <div className='loader'>
        <motion.h1 className='loader__title'
        initial={{opacity:0, y:30}}
        animate={{opacity:1, y:0}}
        transition={{duration: .6}}
        >Dave</motion.h1>
        <motion.h1 className='loader__title2'
        initial={{opacity:0, y:30}}
        animate={{opacity:1, y:0}}
        transition={{duration: .9}}
        
        >Dev.</motion.h1>
    
    </div>
  )
}

export default Loader
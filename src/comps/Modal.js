import React from 'react'
import { motion } from "framer-motion"

const Modal = ({selectedImg, setSelectedImg}) => {

const onClick = (e) => {
    if (e.target.classList.contains('backdrop')){
        setSelectedImg(null)
    }
}

    return (
        <motion.div className='backdrop'
         onClick={onClick}
         initial={{ opacity: 0}}
         animate={{ opacity: 1}}>
         
            <motion.img src={selectedImg}
            initial={{ y:"-100vh" }} 
            animate={ {y: 0}}
            alt='Enlarged pic'/>
        </motion.div>
    )
}

export default Modal

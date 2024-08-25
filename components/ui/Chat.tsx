"use client"

import React, { useState, useEffect, useRef } from 'react'
import { BiSolidPlusCircle } from 'react-icons/bi'
import { motion } from 'framer-motion'
import { BsEmojiWinkFill, BsGiftFill } from 'react-icons/bs'

const spinVariants = {
  initial: { rotate: 0 },
  hover: { rotate: 360 }
}

const Chat = () => {
  const [text, setText] = useState('')
  const [footerHeight, setFooterHeight] = useState('h-12')
  const textareaRef = useRef(null)

  useEffect(() => {
    if (textareaRef.current) {
      // Adjust textarea height based on content
      textareaRef.current.style.height = 'auto'
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`
    }

    // Adjust footer height based on the textarea height
    if (textareaRef.current) {
      const height = Math.min(textareaRef.current.scrollHeight, 80) // Max height for 4 lines
      setFooterHeight(`h-${Math.ceil(height / 4) * 2}`) // Adjust height for the footer
    }
  }, [text])

  const handleChange = (e) => {
    setText(e.target.value)
  }

  return (
    <main className='h-[92%] relative flex flex-col justify-between items-center gap-2'>
      <section className='flex-1'>Chat</section>
      <footer className={`w-full bg-bg2 ${footerHeight} rounded-xs px-4 py-2 flex justify-between items-center gap-2`}>
        <div className='flex gap-5 w-full justify-center items-center'>
          <motion.div
            className='text-2xl cursor-pointer text-text3 hover:text-text1'
            variants={spinVariants}
            initial='initial'
            whileHover='hover'
            transition={{ duration: 0.8 }}
          >
            <BiSolidPlusCircle />
          </motion.div>
          <div className='flex justify-center items-center flex-1'>

            <textarea 
              ref={textareaRef}
              value={text}
              onChange={handleChange}
              placeholder='Message'
              className='bg-transparent w-full outline-none text-text3 placeholder:text-text4 resize-none'
              rows={1}
              maxLength={1000}
            />
          </div>
      
          
        </div>
        <div className='flex gap-4 text-xl'>
          <motion.div className='text-text3 hover:text-text1'>
            <BsGiftFill />
          </motion.div>
          <motion.div className='text-text3 hover:text-text1'>
            <BsEmojiWinkFill />
          </motion.div>
        </div>
      </footer>
    </main>
  )
}

export default Chat

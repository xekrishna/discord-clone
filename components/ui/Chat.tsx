"use client"

import React, { useState, useEffect, useRef, ChangeEvent } from 'react'
import { BiSolidPlusCircle } from 'react-icons/bi'
import { motion, MotionProps } from 'framer-motion'
import { BsEmojiWinkFill, BsGiftFill } from 'react-icons/bs'

interface TextareaRef extends HTMLTextAreaElement {}

const spinVariants: MotionProps['variants'] = {
  initial: { rotate: 0 },
  hover: { rotate: 360 }
}

const wobbleVariants: MotionProps['variants'] = {
  initial: { rotate: 0 },
  hover: { 
    rotate: [0, -10, 10, -10, 10, -10, 0],
    transition: { 
      duration: 1, 
      ease: "easeInOut" 
    }
  }
}

const Chat: React.FC = () => {
  const [text, setText] = useState<string>('')
  const [footerHeight, setFooterHeight] = useState<string>('h-12')
  const textareaRef = useRef<TextareaRef | null>(null)

  useEffect(() => {
    if (textareaRef.current) {
      // Adjust textarea height based on content
      textareaRef.current.style.height = 'auto'
      textareaRef.current.style.height = `${Math.min(textareaRef.current.scrollHeight, 120)}px`
    }

    // Adjust footer height based on the textarea height
    if (textareaRef.current) {
      const height = Math.min(textareaRef.current.scrollHeight, 120) // Max height for 4 lines
      setFooterHeight(`h-${Math.ceil(height / 4) * 2}`) // Adjust height for the footer
    }
  }, [text])

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value)
  }

  return (
    <main className='h-[92%] relative flex flex-col justify-between items-center gap-2'>
      <section className='flex-1'>Chat</section>
      <footer className={`w-full bg-bg2 ${footerHeight} rounded-xs px-4 py-2 flex justify-between items-center gap-2`}>
        <div className='flex gap-5 items-center w-full'>
          <motion.div
            className='text-2xl cursor-pointer text-text3 hover:text-text1'
            variants={spinVariants}
            initial='initial'
            whileHover='hover'
            transition={{ duration: 0.8 }}
          >
            <BiSolidPlusCircle />
          </motion.div>
         
            <textarea 
              ref={textareaRef}
              value={text}
              onChange={handleChange}
              placeholder='Message'
              className='bg-transparent w-full outline-none text-text3 placeholder:text-text4 resize-none overflow-y-auto custom-scrollbar'
              rows={1}
              maxLength={1000}
            />
          </div>
     
        <div className='flex gap-4 text-xl'>
          <motion.div 
            className='text-text3 hover:text-text1 cursor-pointer'
            variants={wobbleVariants}
            initial='initial'
            whileHover='hover'
          >
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

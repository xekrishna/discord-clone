"use client"

import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import { BsPeopleFill, BsPinAngleFill } from 'react-icons/bs'
import Members from './ui/Members'

const iconProps = "cursor-pointer hover:text-text1 duration-500"
const labelProps = "absolute left-1/2 transform -translate-x-1/2 top-full mt-2 hidden px-2 py-1 text-sm text-text3 bg-bg3 rounded opacity-0 group-hover:opacity-100 group-hover:block transition-all duration-300"

const Guild = () => {
  const [membersVisible, setMembersVisible] = useState(false)

  const handleShowMembers = () => {
    setMembersVisible(prev => !prev)
  }

  return (
    <main className='flex w-[76vw] overflow-hidden gap-3'>
      <AnimatePresence>
        <motion.section
          className={`bg-bg4 h-[94vh] rounded-xl p-2 px-4 flex-shrink-0`}
          style={{ width: membersVisible ? '78%' : '100%' }}
          initial={{ width: '100%' }}
          animate={{ width: membersVisible ? '78%' : '100%' }}
          exit={{ width: '100%' }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
        >
          <nav className='flex justify-between items-center text-text3'>
            <span className='text-lg'>
              <span className='text-2xl text-text4'>#</span> general
            </span>
            <div className="flex gap-3 text-2xl">
              <div className="relative group">
                <BsPeopleFill className={iconProps} onClick={handleShowMembers} />
                <span className={labelProps}>
                  Members
                </span>
              </div>
              <div className="relative group">
                <BsPinAngleFill className={iconProps} />
                <span className={labelProps}>
                  Pinned
                </span>
              </div>
            </div>
          </nav>
        </motion.section>
      </AnimatePresence>
      
      <AnimatePresence>
        {membersVisible && (
          <motion.section
            className='bg-bg4 h-[94vh] rounded-xl p-4'
            initial={{ width: '0%', opacity: 0 }}
            animate={{ width: '22%', opacity: 1 }}
            exit={{ width: '0%', opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <Members/>
          </motion.section>
        )}
      </AnimatePresence>
    </main>
  )
}

export default Guild
"use client"

import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import { BiUser } from 'react-icons/bi'
import { BsPeopleFill, BsPinAngleFill, BsPinFill } from 'react-icons/bs'

const iconProps = "cursor-pointer hover:text-text1 duration-500"

const labelProps = "absolute left-1/2 transform -translate-x-1/2 top-full mt-2 hidden px-2 py-1 text-sm text-text3 bg-bg3 rounded opacity-0 group-hover:opacity-100 group-hover:block transition-all duration-300"

const Guild = () => {
    const [membersVisible, setMembersVisible] = useState(false)

    const handleShowMembers = () => {
        setMembersVisible(prev=>!prev)
    }


  return (
    <main className='flex gap-3 w-[76vw] overflow-hidden'>
        <AnimatePresence>
          <motion.section
            className={`bg-bg4 h-[94vh] rounded-xl p-2 px-4`}
            style={{ width: !membersVisible ? '100%' : '80%' }}
            initial={{ width: '100%' }}
            animate={{ width: !membersVisible ? '100%' : '80%' }}
            exit={{ width: '100%' }}
            transition={{ duration: 0.3 }}
          >
            <nav className='flex justify-between items-center text-text3'>
                <span className='text-lg'><span className='text-2xl text-text4'>#</span> general</span>
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
        <section>
            
        </section>
        <AnimatePresence>
        {membersVisible && (
          <motion.section
            className='bg-bg4 h-[94vh] w-[20%] rounded-xl p-4'
            initial={{ width: '0%' }}
            animate={{ width: membersVisible ? '20%' : '0%', opacity: membersVisible? 1 : 0 }}
            exit={{ width: '0%' }}
            transition={{ duration: 0.3 }}
          >
            Member
          </motion.section>
        )}
      </AnimatePresence>
    </main>
  )
}

export default Guild
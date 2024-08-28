'use client';

import Image from 'next/image';
import React, { useCallback, useEffect } from 'react';
import { BsGearFill, BsHeadphones, BsMicFill } from 'react-icons/bs';

import { useUserStore } from '@/lib/userStore';
import { auth, db } from '@/lib/firebase';
import { create } from 'zustand'
import { doc, getDoc } from 'firebase/firestore';

const User = () => {
    const {currentUser} = useUserStore()

    console.log('user:'+currentUser)

    console.log(auth.currentUser)

    auth.onAuthStateChanged(async user => {
        if (user) {
          console.log("user:"+user)
        }
        else {
          console.log("nothing,"+user)
        }
      })


  return (
    <main className='h-[18vh] bg-bg4 rounded-xl p-1 text-sm text-text3 flex flex-col justify-between items-start'>
      <div>Current Activity</div>
      <section className='flex w-full justify-center items-center'>
        <div className='flex gap-2 p-2 hover:bg-bg3 rounded-xl w-full transition-all'>
          <Image
            src={'/avatars/1.jpg'}
            height={40}
            width={40}
            alt='user'
            className='rounded-full max-h-10 max-w-10'
          />
          <div className='flex gap-2 justify-between w-full items-center'>
            <div className='flex flex-col'>
              <span className='font-medium text-text2'>{'Sanzu'}</span>
              <span className='font-light text-[0.7rem]'>Radhe Radhe</span>
            </div>
          </div>
        </div>

        <div className='flex gap-1 text-lg'>
          <div className='p-1 hover:bg-bg2 rounded-lg transition-all cursor-pointer'>
            <BsMicFill />
          </div>
          <div className='p-1 hover:bg-bg2 rounded-lg transition-all cursor-pointer'>
            <BsHeadphones />
          </div>
          <div className='p-1 hover:bg-bg2 rounded-lg transition-all cursor-pointer'>
            <BsGearFill />
          </div>
        </div>
      </section>
    </main>
  );
};

export default User;

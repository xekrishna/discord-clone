'use client';

import Image from 'next/image';
import React, { useEffect } from 'react';
import { BsGearFill, BsHeadphones, BsMicFill } from 'react-icons/bs';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '@/lib/firebase';  // Adjust the path to your firebase setup file
import { useUserStore } from '@/lib/userStore';

const User = () => {
  const { currentUser, isLoading, fetchUserInfo } = useUserStore();

  console.log(currentUser, isLoading, fetchUserInfo)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
        console.log('user'+user)
      if (user) {
        fetchUserInfo(user.uid);  // Fetch user info using the uid
      }
    });

    return () => unsubscribe();
  }, [fetchUserInfo]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!currentUser) {
    return <div>No user found</div>;
  }

  return (
    <main className='h-[18vh] bg-bg4 rounded-xl p-1 text-sm text-text3 flex flex-col justify-between items-start'>
      <div>Current Activity</div>
      <section className='flex w-full justify-center items-center'>
        <div className='flex gap-2 p-2 hover:bg-bg3 rounded-xl w-full transition-all'>
          <Image
            src={currentUser.avatarUrl}
            height={40}
            width={40}
            alt='user'
            className='rounded-full max-h-10 max-w-10'
          />
          <div className='flex gap-2 justify-between w-full items-center'>
            <div className='flex flex-col'>
              <span className='font-medium text-text2'>{currentUser.name}</span>
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

import Channel from '@/components/Channel'
import Guild from '@/components/Guild'
import Navbar from '@/components/ui/Navbar'
import React from 'react'



const Page = ({params} : {
  params : {id: string, channelId: string},
}) => {
  const id = params.id
  const channelId = params.channelId
  console.log(channelId)
  console.log(id)

  return (
<main className=' bg-bg2 max-h-[100vh] h-[100vh] px-3 flex flex-col w-[100vw] gap-1'>
      <nav>
        <span className="font-semibold text-text4">Discord</span>
      </nav>
      <div className='flex gap-3'>
      <section>
        <Navbar/>
      </section>
      <section className=''>
        <Channel id={parseInt(id)} />
      </section>
      <section>
        <Guild channelId={parseInt(channelId)}/>
      </section>
      </div>
  
     
    </main>
  )
}

export default Page
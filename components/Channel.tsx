'use client'

import { serverData } from "@/constants/data";
import { useRouter } from "next/navigation";

interface ChannelProps {
  id: number;
}

const Channel = ({ id }: ChannelProps) => {
  const server = serverData.find(item => item.id === id);

  console.log(id)

  const currentId = id

  const router = useRouter()
  const handleClick = (id: number, channelId: number) => {
    router.push(`/channels/${id}/${channelId}`)
   }


  return (
    <main className='bg-bg4 h-[74vh] w-64 rounded-xl py-4 px-5'>
      
      {server ? (
        <>
       <span className='text-text2 font-medium'>{server.serverName}</span>
        <section className="mt-2">
          
            {server.categories.map((category, index)=> (
              <>
                          <span className='text-xs font-semibold uppercase text-text4' key={index}>{category.name}</span>
              <ul>
                {category.channels.map((channel)=>(
                  <li className='text-base text-text4 leading-8 hover:bg-bg2 rounded-lg px-2 hover:pl-4 transition-all' key={channel.id}
                  onClick={()=> handleClick(id,parseInt(""+ server.id + category.id+channel.id))}
                  >
                    # <span className='text-text2'>{channel.name}
                    </span>
                    </li>
                ))}

              </ul>
              </>
  
            ))}
            
        
        </section>
        </>
      ) : (
        <p className='text-text4'>Nothing to show here :3</p>
      )}
    </main>
  );
};

export default Channel;

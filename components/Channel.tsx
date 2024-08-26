import { serverData } from "@/constants/data";

interface ChannelProps {
  channelId: number;
}

const Channel = ({ channelId }: ChannelProps) => {
  // Find the server data that matches the channelId
  const server = serverData.find(item => item.id === channelId);
  const id = channelId
  console.log(channelId)


  return (
    <main className='bg-bg4 h-[94vh] w-60 rounded-xl py-4 px-5'>
      
      {server ? (
        <>
       <span className='text-text2 font-medium'>{server.serverName}</span>
        <section className="mt-2">
          
            {server.categories.map((category, index)=> (
              <>
                          <span className='text-xs font-semibold uppercase text-text4' key={index}>{category.name}</span>
              <ul>
                {category.channels.map((channel)=>(
                  <li className='text-base text-text4 leading-8 hover:bg-bg2 rounded-lg px-2 hover:pl-4 transition-all' key={channel.id}>
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
        <p className='text-text4'>Channel not found</p>
      )}
    </main>
  );
};

export default Channel;

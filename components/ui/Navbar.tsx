import Image from "next/image"
import { BsDiscord } from "react-icons/bs"

const Navbar = () => {
  return (
    <main className="flex flex-col  h-[94vh] gap-1 max-h-[100vh]  max-w-20 w-20 justify-center items-center">
        
        <section className="flex-1 bg-bg4 h-full w-[90%] max-w-[90%] p-2 rounded-xl">
            <div className="h-max w-full flex items-center justify-center bg-bg1">
                <BsDiscord className="text-3xl"/>
            </div>
            <div>

            </div>
        </section>
    </main>
  )
}

export default Navbar
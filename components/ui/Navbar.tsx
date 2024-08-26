import Image from "next/image";
import { userData, serverData, PlusIcon, DiscordIcon } from '@/constants/data'

const iconProps =
  "h-12 w-12 transition-all hover:text-white hover:rounded-lg rounded-3xl duration-300 cursor-pointer";

const Navbar = () => {
  return (
    <main className="flex flex-col h-[94vh] gap-1 max-h-[100vh] max-w-20 w-20 justify-center items-center">
      <section className="flex-1 bg-bg4 h-full w-[90%] max-w-[90%] p-2 rounded-xl overflow-y-auto hide-scrollbar">
        <div className="h-max w-full flex items-center justify-center flex-col gap-2">
          {/* Top section with Discord icon */}
          <div className="bg-bg1 w-12 h-12 justify-center items-center flex rounded-full">
            <DiscordIcon className="text-3xl" />
          </div>

          {/* Users */}
          <div className="flex gap-3 flex-col">
            {userData.map((icon) => (
              <Image
                key={icon.id}
                src={icon.src}
                alt={icon.alt}
                className={iconProps}
                width={48}
                height={48}
              />
            ))}
          </div>

          {/* Divider */}
          <div className="h-1 w-[80%] rounded-full bg-bg3"></div>

          {/* Servers */}
          <div className="flex gap-3 flex-col">
            {serverData.map((icon) => (
              <Image
                key={icon.id}
                src={icon.src}
                alt={icon.alt}
                className={iconProps}
                width={48}
                height={48}
              />
            ))}
          </div>

          {/* Plus icon */}
          <div
            className={`${iconProps} flex justify-center items-center bg-bg4 hover:bg-accent1 text-accent1`}
          >
            <PlusIcon className="h-7 w-7" />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Navbar;

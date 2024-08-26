
import Image from "next/image";
import { userData, serverData, PlusIcon, DiscordIcon } from "@/constants/data";

const iconProps =
  "h-12 w-12 transition-all hover:text-white hover:rounded-lg rounded-3xl duration-300 cursor-pointer";
const labelProps = "absolute left-16 transform -translate-y-1/2 top-1/2 px-2 py-1 text-sm text-text3 bg-bg3 rounded opacity-0 group-hover:opacity-100 group-hover:block transition-all duration-300"

const Navbar = () => {
  return (
    <main className="flex flex-col h-[94vh] gap-1 max-h-[100vh] max-w-20 w-20 justify-center items-center">
      <section className="relative flex-1 bg-bg4 h-full w-[90%] max-w-[90%] p-2 rounded-xl overflow-y-auto hide-scrollbar">
        <div className="h-max w-full flex items-center justify-center flex-col gap-2">
          {/* Top section */}
          <div className="bg-bg1 w-12 h-12 justify-center items-center flex rounded-full">
            <DiscordIcon className="text-3xl" />
          </div>

          {/* Users */}
          <div className="flex gap-3 flex-col">
            {userData.map((icon) => (
              <Image
                key={icon.id}
                src={icon.src}
                alt='bleh'
                className={iconProps}
                width={48}
                height={48}
              />
            ))}
          </div>

          {/* Divider */}
          <div className="h-1 w-[80%] rounded-full bg-bg3"></div>

          {/* Servers */}
          <div className="flex gap-3 flex-col relative">
            {serverData.map((icon) => (
              <div
                key={icon.id}
                className="relative flex items-center"
              >
                <Image
                  src={icon.src}
                  alt='bleh'
                  className={iconProps}
                  width={48}
                  height={48}
                />
                {/* Label Display */}
                <span className={labelProps}>
                  {icon.serverName}
                </span>
              </div>
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

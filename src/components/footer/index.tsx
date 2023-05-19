import { AiFillLinkedin, AiOutlineTwitter } from 'react-icons/ai'
import { FaDiscord } from 'react-icons/fa'
import logo from '../../assets/Nav/logo.svg'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="relative flex h-[30rem] w-full items-center justify-center bg-[#10121D]">
      <div
        data-aos="zoom-in"
        className="flex h-[50%] w-3/4 items-center justify-center rounded-[20px] bg-[#181B2D] 360:h-auto 360:flex-col 360:gap-8 360:py-12 sm:w-[90%] sm:flex-row sm:gap-12 md:gap-12"
      >
        <div className="flex gap-10 text-white sm:gap-4 md:gap-5">
          <a
            href="https://www.linkedin.com/company/mesh-labs-web3/?viewAsMember=true"
            target="_blank"
            rel="noreferrer"
          >
            <span className="text-3xl hover:opacity-50 360:text-xl">
              <AiFillLinkedin />
            </span>
          </a>
          <a
            href="https://discord.gg/GBzBcUSq"
            target="_blank"
            rel="noreferrer"
          >
            <span className="text-3xl hover:opacity-50 360:text-xl">
              <FaDiscord />
            </span>
          </a>
          <a
            href="https://twitter.com/MeshLabss"
            target="_blank"
            rel="noreferrer"
          >
            <span className="text-3xl hover:opacity-50 360:text-xl">
              <AiOutlineTwitter />
            </span>
          </a>
        </div>

        <span className="mx-24 h-[40%] border border-gray-500 360:hidden md:hidden lg:mx-12"></span>

        <div className="flex w-[62px] flex-col items-center">
          <Image
            src={logo}
            alt="Logo da Mesh"
            draggable="false"
            className="w-[80%] object-cover"
          />
          <h2 className="mt-2 font-semibold italic tracking-widest text-white ">
            MESH
          </h2>
        </div>

        <span className="mx-24 h-[40%] border border-gray-500 360:hidden sm:mx-6 md:hidden lg:mx-12"></span>

        <div>
          <h3 className="text-xl text-white 360:text-[16px] sm:text-[14px] md:text-[14px]">
            #FindYourSpaceInWeb3
          </h3>
        </div>
      </div>
    </footer>
  )
}

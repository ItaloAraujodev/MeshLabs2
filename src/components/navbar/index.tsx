'use client'

import icon from '../../assets/Nav/logo.svg'
import brasil from '../../assets/Nav/brasil.svg'
import american from '../../assets/Nav/american.svg'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { BiMenu } from 'react-icons/bi'
import { AiOutlineClose } from 'react-icons/ai'
import Image from 'next/image'

function NavBar() {
  // eslint-disable-next-line react-hooks/rules-of-hooks

  const itemVariants = {
    open: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 300, damping: 24 },
    },
    closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
  }

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [toogle, setToogle] = useState(false)

  return (
    <nav className="relative z-10 h-auto w-full bg-navBar">
      <div className="fixed flex h-16 w-full justify-center bg-navBar 360:hidden sm:hidden">
        <div className="flex w-10/12 items-center justify-between">
          <div>
            <a href="/">
              <Image src={icon} alt="Logo da Mesh" draggable="false" />
            </a>
          </div>
          <div>
            <ul className="flex gap-8 text-base text-white 1440:gap-16 md:text-sm lg:gap-16 xl:gap-14 2xl:gap-[5rem] full:gap-[6rem] full:text-lg ">
              <li>
                <a href="/#home" className="hover:opacity-80">
                  Home
                </a>
              </li>
              <li>
                <a href="/#atividade" className="hover:opacity-80">
                  Serviços
                </a>
              </li>
              <li>
                <a href="/#sobre" className="hover:opacity-80">
                  Quem somos
                </a>
              </li>
              <li>
                <a href="/#fale" className="hover:opacity-80">
                  Fale Conosco
                </a>
              </li>
              <li>
                <a href="/#inte" className="hover:opacity-80">
                  Equipe
                </a>
              </li>
            </ul>
          </div>
          <div className="flex gap-4 full:gap-6">
            <Image src={brasil} alt="Bandeira do brasil" draggable="false" />
            <Image
              src={american}
              alt="Bandeira do Estados unidos"
              draggable="false"
              className="opacity-50"
            />
          </div>
        </div>
      </div>

      <div className="fixed z-30 h-16 w-[100%] bg-navBar 1440:hidden md:hidden lg:hidden xl:hidden 2xl:hidden full:hidden">
        <motion.div
          initial={false}
          animate={toogle ? 'open' : 'closed'}
          className={`relative flex h-[64px] w-[100%] items-center justify-between`}
        >
          <div className="mx-auto flex h-full w-[80%] items-center justify-between">
            <div>
              <a href="/">
                <Image src={icon} alt="Logo da Mesh" draggable="false" />
              </a>
            </div>

            <motion.button
              whileTap={{ scale: 0.97 }}
              onClick={() => setToogle(!toogle)}
              className="text-3xl text-blue-600"
            >
              {toogle ? <AiOutlineClose /> : <BiMenu />}
            </motion.button>
          </div>
          <motion.ul
            className="absolute top-14 flex w-full flex-col gap-4 bg-navBar p-4 text-white"
            variants={{
              open: {
                clipPath: 'inset(0% 0% 0% 0% round 10px)',
                transition: {
                  type: 'spring',
                  bounce: 0,
                  duration: 0.7,
                  delayChildren: 0.3,
                  staggerChildren: 0.05,
                },
              },
              closed: {
                clipPath: 'inset(10% 50% 90% 50% round 10px)',
                transition: {
                  type: 'spring',
                  bounce: 0,
                  duration: 0.3,
                },
              },
            }}
            style={{ pointerEvents: toogle ? 'auto' : 'none' }}
          >
            <motion.li variants={itemVariants}>
              <a href="/#home" className="hover:opacity-80">
                Home
              </a>
            </motion.li>
            <motion.li variants={itemVariants}>
              <a href="/#atividade" className="hover:opacity-80">
                Serviços
              </a>
            </motion.li>
            <motion.li variants={itemVariants}>
              <a href="/#sobre" className="hover:opacity-80">
                Quem somos
              </a>
            </motion.li>
            <motion.li variants={itemVariants}>
              <a href="/#fale" className="hover:opacity-80">
                Fale Conosco
              </a>
            </motion.li>
            <motion.li variants={itemVariants}>
              <a href="/#inte" className="hover:opacity-80">
                Equipe
              </a>
            </motion.li>
          </motion.ul>
        </motion.div>
      </div>
    </nav>
  )
}

export default NavBar

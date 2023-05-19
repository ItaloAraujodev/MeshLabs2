'use client'
import imgsJuntar from '../../utils/juntar'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Juntar() {
  return (
    <div
      id="juntar"
      className="h-auto w-full bg-gradient-to-r from-line-linear-azul to-line-linear-red pb-1 "
    >
      <div className="flex h-full w-full justify-center bg-gradient-to-r from-azul-claro via-saturation-azul-escuro to-azul-claro py-24 text-white">
        <div className="flex flex-col items-center justify-center">
          <div
            data-aos="fade-down"
            className="mb-12 flex w-[90%] flex-col items-center"
          >
            <h2 className="leading-2 text-center font-russo-one text-[42px] 360:mb-[3.5rem] 360:text-[2rem]">
              Porque você deve ser juntar a nós
            </h2>
          </div>

          <div className="flex w-full items-center justify-center gap-8 360:flex-col md:gap-5 full:gap-12">
            {imgsJuntar.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{
                  background: 'linear-gradient(#EC2158, #EC2158, #498CF1)',
                }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                data-aos="zoom-in"
                className=" h-[19rem] w-[16rem] rounded-[10px] bg-gradient-to-bl from-saturation-green to-saturation-azul-claro px-[2px] py-[2px] md:h-[14rem] md:w-[10rem] lg:h-[17.5rem] lg:w-[13.5rem] full:h-[22rem] full:w-[18rem]"
              >
                <div className="h-full w-full rounded-[10px] bg-azul-claro">
                  <div className="w-full overflow-hidden rounded-[10px] ">
                    <Image src={item.imagem} alt="" />
                  </div>

                  <div className="m-6 md:m-3">
                    <h3 className="text-center text-lg md:text-sm lg:text-base">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

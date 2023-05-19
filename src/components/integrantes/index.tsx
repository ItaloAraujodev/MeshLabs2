'use client'
import { listIntegrantes } from '../../utils/integrantes'
import { ImLinkedin } from 'react-icons/im'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Integrantes() {
  return (
    <div
      id="inte"
      className="h-full w-full bg-gradient-to-r from-line-linear-azul to-line-linear-red "
    >
      <div className="flex h-full w-full flex-col items-center bg-[#10121D] py-20 text-white">
        <h2
          data-aos="fade-down"
          className="mb-4 font-russo-one text-[42px] 360:text-[2rem] "
        >
          Integrantes
        </h2>
        <div className="mt-12 grid grid-cols-3 gap-32 360:grid-cols-1 360:gap-12 md:grid-cols-2 md:gap-20 lg:gap-16 full:gap-48">
          {listIntegrantes.map((item, index) => (
            <motion.div
              whileHover={{
                background:
                  'linear-gradient(to bottom left, #EC2158, #EC2158, 80%, #498CF1)',
              }}
              transition={{ ease: 'linear', duration: 0.3 }}
              data-aos="zoom-in"
              key={index}
              className="flex h-72 w-[280px] items-center rounded-[30px] bg-gradient-to-bl from-saturation-green to-saturation-azul-claro px-[2px] py-[2px]  md:h-[15rem] md:w-[220px] lg:h-64 lg:w-[230px] "
            >
              <div className="group relative flex h-full w-full flex-col rounded-[28px] bg-azul-claro px-10 py-3">
                <div className="flex flex-col items-center">
                  <div className="h-40 w-40 md:h-28 md:w-28 lg:h-32 lg:w-32">
                    <Image
                      src={item.imagem}
                      alt={`Foto do ${item.nome}`}
                      draggable="false"
                      className="rounded-[20px] object-cover"
                    />
                  </div>

                  <div className="mt-2 text-center">
                    <h2 className="text-lg text-saturation-green md:text-base lg:text-base">
                      {item.nome}
                    </h2>
                    <p className="md:text-sm lg:text-sm full:text-lg">
                      {item.funcao}
                    </p>
                  </div>
                </div>

                <div className="mx-auto mt-3">
                  <a
                    href={item.linkedin}
                    className=" text-center text-2xl text-blue-600 lg:text-xl"
                  >
                    {item.linkedin !== undefined ? <ImLinkedin /> : ''}
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

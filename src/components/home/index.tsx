import espaco from '../../assets/Home/espaco.svg'
import { Trabalhamos } from '../trabalhamos'
import Image from 'next/image'

export default function HomeComp() {
  return (
    <main className="h-auto w-full bg-gradient-to-tr from-[#181F36] from-30% via-[#10121D] to-[#10121D] ">
      <section id="home" className="relative z-0 h-screen w-full">
        <div className="z-10 mb-4 flex items-center justify-center">
          <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-[90%] w-full justify-center 360:bottom-8 360:h-[80%]">
            {' '}
            <Image
              src={espaco}
              alt="Imagem do espaço"
              draggable="false"
              className="object-cover"
            />
          </div>
          <div
            data-aos=""
            className="absolute bottom-0 left-0 right-0 top-0 m-auto h-[50%] w-[50%] text-center text-white 360:bottom-20 360:w-[80%]"
          >
            {' '}
            <h3
              className="text-base font-bold italic 360:text-[1rem] xl:text-lg 2xl:text-xl         
                        full:text-2xl"
            >
              Bem-vindo à Mesh
            </h3>
            <h2 className="my-10 font-russo-one text-display-large leading-custom-leading 360:my-6 360:text-[2.5rem] 360:leading-[2.8rem] 414:text-[2.5rem] 1440:text-6xl sm:text-[2.5rem] md:text-5xl lg:text-5xl xl:text-6xl 2xl:text-6xl full:text-7xl">
              Encontre seu <br /> espaço na Web3{' '}
            </h2>
            <p className="text-base 360:text-[16px] 360:leading-[18px] sm:text-base md:text-lg xl:text-xl 2xl:text-lg full:text-xl">
              Somos um laboratório digital especializado em oferecer serviços de
              ponta. Nossa expertise está em ajudar empresas e empreendedores a
              transformar suas ideias em realidade!
            </p>
          </div>
        </div>
      </section>
      <Trabalhamos />
    </main>
  )
}

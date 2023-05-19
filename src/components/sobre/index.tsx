import sobre from '../../assets/Sobre/sobrenos.svg'
import Button from '../button'
import Image from 'next/image'

export default function Sobre() {
  return (
    <div
      id="sobre"
      className="relative h-[55rem] w-full bg-gradient-to-r from-line-linear-azul to-line-linear-red py-1 360:h-auto md:h-[auto] "
    >
      <div className="flex h-full w-full justify-center bg-gradient-to-r from-saturation-azul-escuro to-saturation-preto text-white">
        <div className="flex h-full w-[90%] flex-col justify-center overflow-x-hidden">
          <h2
            data-aos="fade-down"
            className="font-white my-8 text-center font-russo-one text-[42px] 360:text-[2rem]"
          >
            Sobre nós
          </h2>
          <div className="flex items-center 360:flex-col md:flex-col">
            <div
              data-aos="fade-right"
              className="w-[60%] 360:w-auto sm:w-[80%] md:w-[60%] lg:w-[60%]"
            >
              <Image src={sobre} alt="Foto de um robo" draggable="false" />
            </div>

            <div
              data-aos="fade-left"
              className="flex w-[50%] flex-col gap-16 text-justify text-base 360:w-[90%] 360:py-6 1440:text-xl sm:p-12 md:w-full md:p-12 md:text-xl lg:gap-8 xl:gap-8 2xl:text-xl full:text-xl"
            >
              <div className="flex items-center">
                <span className="text-saturation-green">▸</span>
                <p className="ml-5">
                  Aqui na Mesh Labs conctamos ideias e tecnologia para criar
                  soluções inovadoras e escaláveis. Somos especialistas em
                  desenvolvimento de produtos digitais que impulsionam o seu
                  negócio para o sucesso
                </p>
              </div>

              <div className="flex items-center">
                <span className="text-saturation-green">▸</span>
                <p className="ml-5">
                  Laboratório de criatividade e tecnologia. Desenvolvemos
                  produtos digitais personalizados, combinando design e
                  engenharia de ponta para transformar ideias em realidade
                </p>
              </div>

              <div className="flex items-center">
                <span className="text-saturation-green">▸</span>
                <p className="ml-5">
                  Oferecemos serviços de consultoria e desenvolvimento de
                  produtos digitais, ajudando você a alcançar resultados
                  excepcionais no mercado atual.
                </p>
              </div>
              <div className="mb-10 w-[260px] 360:mx-auto sm:mx-0">
                <Button text="Conheça mais sobre nós" url="#inte" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

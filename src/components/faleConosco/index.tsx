import aviao from '../../assets/FaleConosco/aviao.svg'
import ponto from '../../assets/FaleConosco/ponto.svg'
import Button from '../button'
import Image from 'next/image'

export default function FaleConosco() {
  return (
    <section
      id="fale"
      className="relative flex h-full w-full flex-col items-center bg-[#10121D] py-24 text-white 360:h-auto"
    >
      <h2
        data-aos="zoom-in"
        className="font-white mb-14 font-russo-one text-[42px] 360:text-[2rem] "
      >
        Fale conosco
      </h2>
      <Image
        src={ponto}
        alt=""
        draggable="false"
        className="absolute left-[3rem] top-36 360:invisible md:top-40 md:w-28"
      />
      <Image
        src={ponto}
        alt=""
        draggable="false"
        className="absolute bottom-6 right-[3rem] rotate-180 360:invisible md:bottom-10 md:w-28"
      />
      <div className="flex w-full justify-center bg-[#181B2D] py-24 360:py-12  ">
        <div
          data-aos="fade-right"
          className="grid h-full w-[80%] grid-cols-2 items-stretch 360:grid-cols-1"
        >
          <div className="my-auto">
            <Image
              src={aviao}
              alt="Imagem de um avião de papel"
              draggable="false"
              className="object-cover"
            />
          </div>

          <div
            data-aos="fade-left"
            className="my-auto ml-14 flex h-auto w-[calc(100%-3.5rem)] flex-col gap-10 360:mx-auto 360:mt-10 360:text-center"
          >
            <div>
              <h2 className="mb-4 text-[1.2rem] font-semibold 2xl:text-[1.6rem] full:text-[1.6rem]">
                Vamos tirar sua idéia do papel?
              </h2>
              <p className="text-lg font-light full:text-xl">
                Não deixe para depois, agende uma conversa com um de nossos
                especialistas! Nós cuidamos de tudo!
              </p>
            </div>
            <div className="flex gap-4 360:mx-auto 360:w-full 360:flex-col sm:flex-row md:flex-col">
              <Button
                text="Marque uma reunião"
                url="https://calendly.com/brncrysis/call"
                redirect="_blank"
              />
              <Button
                text="Envie sua ideia"
                url="https://1y7idwqhetx.typeform.com/to/Y2RL4h8P"
                redirect="_blank"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

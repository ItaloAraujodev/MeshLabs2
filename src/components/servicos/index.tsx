import Carousel from './carousel'
import './style.css'

export default function Servicos() {
  return (
    <div
      id="atividade"
      className="h-auto w-full bg-gradient-to-r from-line-linear-azul to-line-linear-red pb-1 "
    >
      <div className="flex h-full w-full items-center justify-center bg-azul-claro py-40 text-white 360:py-28 ">
        <div className="flex h-2/3 w-full flex-col">
          <h2
            data-aos="zoom-in"
            className="font-white mb-16 text-center font-russo-one text-[42px] 360:text-[2rem]"
          >
            Nossos serviços
          </h2>
          <div
            data-aos="zoom-in"
            className="flex w-full items-center justify-center gap-16 lg:gap-10 full:gap-[6rem]"
          >
            <Carousel />
          </div>
        </div>
      </div>
    </div>
  )
}

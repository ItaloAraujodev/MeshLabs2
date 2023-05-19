import Produto from './produto'
/* ---------- IMAGENS ------------------ */
import planejamento from '../../assets/Trabalhamos/planejamento.svg'
import cricao from '../../assets/Trabalhamos/criacao.svg'
import desenvolvimento from '../../assets/Trabalhamos/desenvolvimento.svg'
import desing from '../../assets/Trabalhamos/desing.svg'
import intnegocios from '../../assets/Trabalhamos/negocio.svg'
import solucao from '../../assets/Trabalhamos/solucao.svg'

export const Trabalhamos = () => {
  return (
    <section className="flex flex-col items-center justify-center py-24">
      <h1 className="text-center font-russo-one text-[42px] text-white">
        Produtos
      </h1>
      <div className="mt-10 grid grid-cols-3 gap-x-[85px] gap-y-10 360:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
        <Produto
          imgProp={planejamento}
          nameProp="Planejamento"
          linkProp={`planejamento`}
        />
        <Produto imgProp={cricao} nameProp="Criação" linkProp={`criacao`} />
        <Produto imgProp={desing} nameProp="Design" linkProp={`design`} />
        <Produto
          imgProp={desenvolvimento}
          nameProp="Desenvolvimento"
          linkProp={`desenvolvimento`}
        />
        <Produto imgProp={solucao} nameProp="Solução" linkProp={`solucao`} />
        <Produto
          imgProp={intnegocios}
          nameProp="Inteligência de negócios"
          linkProp={`inteligencia-negocio`}
        />
      </div>
    </section>
  )
}

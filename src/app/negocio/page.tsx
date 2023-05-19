/* ---------- IMAGENS ------------------ */
import bannerNegocio from '../../assets/planejamento/bannerNegocio.svg'
import iconColeta from '../../assets/planejamento/icon/iconColeta.svg'
import iconDados from '../../assets/planejamento/icon/iconDados.svg'
import iconVisualizacao from '../../assets/planejamento/icon/iconVisualizacao.svg'
import iconModelagem from '../../assets/planejamento/icon/iconModelagem.svg'
import iconAcompanhamento from '../../assets/planejamento/icon/iconAcompanhamento.svg'
import Details from '../../components/details'
import Image from 'next/image'

const Negocio = () => {
  return (
    <>
      <div className="relative top-16 h-[257px] w-full bg-gradient-to-r from-line-linear-azul to-line-linear-red pb-[2px]">
        <Image
          src={bannerNegocio}
          alt="Inteligência de negócios"
          draggable="false"
          className="h-full w-full object-cover object-center"
        />
        <h1 className="absolute bottom-6 left-[10%] font-russo-one text-[54px] text-white 360:text-4xl">
          Inteligência de negócios
        </h1>
      </div>

      <div className="mt-16 h-auto w-full bg-[#10121D] py-40">
        <div className="mx-auto grid w-[80%] grid-cols-3 gap-x-7 gap-y-24 360:grid-cols-1 md:grid-cols-2 md:gap-y-44 lg:grid-cols-2 xl:gap-y-44">
          <div className="h-[360px] w-full px-4 text-white 360:h-auto">
            <h1 className="text-2xl font-bold">
              Decisões estratégicas baseadas em dados precisos e insights
            </h1>
            <p className="mt-[8px] text-start text-base text-[#B7BCD1]">
              A etapa de Inteligência de Negócios é um processo estruturado e
              metodológico que visa a coleta, análise e interpretação de dados
              para auxiliar na tomada de decisões estratégicas em um projeto ou
              empresa. Essa etapa envolve a utilização de ferramentas e técnicas
              avançadas para extrair insights valiosos a partir dos dados
              disponíveis. A importância da Inteligência de Negócios em um
              projeto é significativa, pois permite uma compreensão aprofundada
              do desempenho e do ambiente de negócios.
            </p>
          </div>

          <Details
            imgProp={iconColeta}
            nameProp="Coleta de dados"
            description="Na coleta de dados da Inteligência de Negócios, é realizada uma identificação minuciosa das fontes de dados relevantes para o negócio. Essas fontes podem ser internas, como bancos de dados, registros de vendas, registros de clientes e dados operacionais, ou externas, como dados de mercado, informações demográficas, redes sociais e fontes de dados públicas. A coleta de dados é uma fase essencial, pois é necessário obter informações precisas e confiáveis para realizar análises posteriores"
          />
          <Details
            imgProp={iconDados}
            nameProp="Análise de dados"
            description="Utilizando técnicas estatísticas, algoritmos de aprendizado de máquina e outras abordagens analíticas, os dados são explorados em busca de informações relevantes para o negócio. Essa análise pode incluir a aplicação de modelos estatísticos para identificar correlações entre os dados, a utilização de algoritmos de clusterização para segmentar os dados em grupos similares e a aplicação de algoritmos de regressão para prever tendências futuras com base nos dados históricos."
          />
          <Details
            imgProp={iconVisualizacao}
            nameProp="Visualização de dados"
            description="Este processo é um papel fundamental ao comunicar insights e informações complexas de maneira compreensível e impactante. Ao transformar os dados em elementos visuais, é possível extrair significado e padrões que podem não ser facilmente identificados em dados brutos. As visualizações ajudam os tomadores de decisão a obter uma compreensão rápida e abrangente das informações, permitindo que eles identifiquem tendências, façam comparações e tomem decisões informadas e estratégicas."
          />
          <Details
            imgProp={iconModelagem}
            nameProp="Modelagem preditiva"
            description="Utilizando os dados históricos e os insights obtidos na análise para construir modelos estatísticos ou algoritmos de aprendizado de máquina que possam fazer previsões sobre eventos futuros. Um modelo preditivo pode ser desenvolvido para prever a demanda de determinado produto ao longo do tempo, levando em consideração variáveis como sazonalidade, tendências de mercado, dados demográficos e comportamentais dos clientes."
          />
          <Details
            imgProp={iconAcompanhamento}
            nameProp="Monitoramento e acompanhamento"
            description="Após a implementação das estratégias de negócio, é essencial realizar o monitoramento e acompanhamento contínuo para avaliar o desempenho e a eficácia das ações implementadas. Nessa etapa, são coletados e analisados dados relevantes que refletem o progresso e os resultados obtidos. O monitoramento envolve a observação regular e sistemática dos indicadores-chave de desempenho (KPIs), que são métricas específicas que ajudam a medir o sucesso das estratégias adotadas."
          />
        </div>
      </div>
    </>
  )
}

export default Negocio

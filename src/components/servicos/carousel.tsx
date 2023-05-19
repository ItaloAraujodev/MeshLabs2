import produtos from '../../assets/Atividades/produtosWeb.svg'
import banco from '../../assets/Atividades/banco.svg'
import money from '../../assets/Atividades/money.svg'
import digital from '../../assets/Atividades/digital.svg'
import blockchain from '../../assets/Atividades/blockchain.svg'
import nfts from '../../assets/Atividades/nfts.svg'
import token from '../../assets/Atividades/tokens.svg'
import ageis from '../../assets/Atividades/ageis.svg'
import product from '../../assets/Atividades/product.svg'
import './style.css'
import Image from 'next/image'

const caroul = () => {
  return (
    <div className="slider mt-16">
      <div className="slider-track mx-auto flex items-center">
        <div className="box bg-gradient-to-bl from-saturation-green to-saturation-azul-claro ">
          <div className="box-context flex flex-col">
            <Image src={produtos} alt="Produtos para Web3" draggable="false" />
            <h3>Produtos para Web3</h3>
          </div>
        </div>

        <div className="box bg-gradient-to-bl from-saturation-red to-saturation-azul-claro">
          <div className="box-context">
            <Image src={money} alt="SaaS para Fintechs" draggable="false" />
            <h3>SaaS para Fintechs</h3>
          </div>
        </div>

        <div className="box bg-gradient-to-b from-saturation-green to-saturation-azul-claro">
          <div className="box-context">
            <Image
              src={banco}
              alt="De-Fi e economias descentralizadas"
              draggable="false"
            />
            <h3>De-Fi e economias descentralizadas</h3>
          </div>
        </div>

        <div className="box bg-gradient-to-br from-saturation-green to-saturation-azul-claro">
          <div className="box-context">
            <Image src={digital} alt="Branding" draggable="false" />
            <h3>Branding</h3>
          </div>
        </div>

        <div className="box bg-gradient-to-bl from-saturation-red to-saturation-azul-claro">
          <div className="box-context">
            <Image
              src={blockchain}
              alt="Blockchain as a Service"
              draggable="false"
            />
            <h3>Blockchain as a Service</h3>
          </div>
        </div>

        <div className="box bg-gradient-to-b from-saturation-green to-saturation-azul-claro">
          <div className="box-context">
            <Image src={nfts} alt="NFTs" draggable="false" />
            <h3>NFTs</h3>
          </div>
        </div>

        <div className="box bg-gradient-to-br from-saturation-green to-saturation-azul-claro">
          <div className="box-context">
            <Image src={token} alt="Tokens" draggable="false" />
            <h3>Tokens</h3>
          </div>
        </div>

        <div className="box bg-gradient-to-bl from-saturation-red to-saturation-azul-claro">
          <div className="box-context">
            <Image src={ageis} alt="Metodos ágeis" draggable="false" />
            <h3>Metodos ágeis</h3>
          </div>
        </div>

        <div className="box bg-gradient-to-b from-saturation-green to-saturation-azul-claro">
          <div className="box-context">
            <Image src={product} alt="Produtos" draggable="false" />
            <h3>Produtos</h3>
          </div>
        </div>

        {/* ------------------ */}

        <div className="box bg-gradient-to-bl from-saturation-green to-saturation-azul-claro ">
          <div className="box-context flex flex-col">
            <Image src={produtos} alt="Produtos para Web3" draggable="false" />
            <h3>Produtos para Web3</h3>
          </div>
        </div>

        <div className="box bg-gradient-to-bl from-saturation-red to-saturation-azul-claro">
          <div className="box-context">
            <Image src={money} alt="SaaS para Fintechs" draggable="false" />
            <h3>SaaS para Fintechs</h3>
          </div>
        </div>

        <div className="box bg-gradient-to-b from-saturation-green to-saturation-azul-claro">
          <div className="box-context">
            <Image
              src={banco}
              alt="De-Fi e economias descentralizadas"
              draggable="false"
            />
            <h3>De-Fi e economias descentralizadas</h3>
          </div>
        </div>

        <div className="box bg-gradient-to-br from-saturation-green to-saturation-azul-claro">
          <div className="box-context">
            <Image src={digital} alt="Branding" draggable="false" />
            <h3>Branding</h3>
          </div>
        </div>

        <div className="box bg-gradient-to-bl from-saturation-red to-saturation-azul-claro">
          <div className="box-context">
            <Image
              src={blockchain}
              alt="Blockchain as a Service"
              draggable="false"
            />
            <h3>Blockchain as a Service</h3>
          </div>
        </div>

        <div className="box bg-gradient-to-b from-saturation-green to-saturation-azul-claro">
          <div className="box-context">
            <Image src={nfts} alt="NFTs" draggable="false" />
            <h3>NFTs</h3>
          </div>
        </div>

        <div className="box bg-gradient-to-br from-saturation-green to-saturation-azul-claro">
          <div className="box-context">
            <Image src={token} alt="Tokens" draggable="false" />
            <h3>Tokens</h3>
          </div>
        </div>

        <div className="box bg-gradient-to-bl from-saturation-red to-saturation-azul-claro">
          <div className="box-context">
            <Image src={ageis} alt="Metodos ágeis" draggable="false" />
            <h3>Metodos ágeis</h3>
          </div>
        </div>

        <div className="box bg-gradient-to-b from-saturation-green to-saturation-azul-claro">
          <div className="box-context">
            <Image src={product} alt="Produtos" draggable="false" />
            <h3>Produtos</h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default caroul

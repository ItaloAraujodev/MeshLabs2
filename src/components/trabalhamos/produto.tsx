import PropTypes from 'prop-types'
import Image from 'next/image'
import Link from 'next/link'

interface ProductProps {
  imgProp: string
  nameProp: string
  linkProp: string
}

const Produto = ({ imgProp, nameProp, linkProp }: ProductProps) => {
  return (
    <>
      <div
        className={`relative h-[366px] w-[366px] rounded-2xl bg-gradient-to-b from-[#EC2158] via-[#EC2158] to-[#498CF1] 360:h-[300px] 360:w-[300px] md:h-[300px] md:w-[300px]`}
      >
        <Image
          src={imgProp}
          alt={nameProp}
          draggable="false"
          className="absolute h-full w-full rounded-2xl object-cover p-[2px]"
        />
        <div className="absolute flex h-full w-full flex-col items-center justify-end p-6">
          <h2 className="text-center text-[26px] font-bold text-white">
            {nameProp}
          </h2>
          <button className="mt-4 h-[32px] w-32 rounded-[12px] bg-white text-base text-black transition-all delay-100 ease-in-out hover:bg-[#D41F31] hover:text-white">
            <Link href={linkProp}>Saiba mais</Link>
          </button>
        </div>
      </div>
    </>
  )
}

Produto.propTypes = {
  imgProp: PropTypes.string,
  nameProp: PropTypes.string,
  linkProp: PropTypes.string,
}

export default Produto

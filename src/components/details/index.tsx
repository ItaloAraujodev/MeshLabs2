import PropTypes from 'prop-types'
import Image from 'next/image'

const Details = ({ imgProp, nameProp, description }: any) => {
  return (
    <>
      <div className="h-[360px] w-full text-white 360:h-auto">
        <div className="mb-4 flex items-center gap-4 px-4">
          <Image src={imgProp} alt="" draggable="false" />
          <h1 className="text-[20px] font-semibold">{nameProp}</h1>
        </div>
        <p className="px-4 text-start text-[16px] text-[#B7BCD1]">
          {description}
        </p>
      </div>
    </>
  )
}

Details.propTypes = {
  imgProp: PropTypes.string,
  nameProp: PropTypes.string,
  description: PropTypes.string,
}

export default Details

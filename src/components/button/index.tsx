'use client'

import { motion } from 'framer-motion'

export default function Button(props: any) {
  // eslint-disable-next-line react/prop-types
  const { text, url, redirect } = props

  return (
    <motion.div
      whileHover={{ background: 'linear-gradient(#EC2158, #498CF1)' }}
      transition={{ delay: 0.026 }}
      className="flex h-full w-full items-center justify-center rounded-[50px] bg-gradient-to-bl from-saturation-green to-saturation-azul-claro px-[2px] py-[2px]"
    >
      <motion.button
        whileHover={{ backgroundColor: '#283563' }}
        transition={{ delay: 0.024 }}
        className="h-[40px] w-full rounded-[50px] bg-azul-claro text-base xl:text-xl 2xl:text-xl"
      >
        <a href={url} target={redirect} rel="noreferrer">
          {text}
        </a>
      </motion.button>
    </motion.div>
  )
}

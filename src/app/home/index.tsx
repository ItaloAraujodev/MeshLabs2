'use client'
import Integrantes from '@/components/integrantes'
import Juntar from '@/components/juntar'
import Servicos from '@/components/servicos'
import Sobre from '@/components/sobre'
import HomeComp from '@/components/home'
import Aos from 'aos'
import { useEffect } from 'react'

export default function Home() {
  useEffect(() => {
    Aos.init({
      duration: 1600,
    })
  }, [])

  return (
    <div>
      <HomeComp />
      <Sobre />
      <Servicos />
      <Juntar />
      <Integrantes />
    </div>
  )
}

"use client"
import Image from 'next/image'
import styles from './page.module.css'
import { useEffect, useState } from 'react'
import Imagens from '@/components/Imagens'
import Hero from '@/components/Hero'
import Header from '@/components/Header'
import Menu from '@/components/Menu'

export default function Home() {
  var itensMenu = ["Marcas", "Lojas", "Feminino", "Masculino", "Infantil", "Casa", "Viagem", "..."]
  
  var image = [
    <img src="biquini.jpg" className="img1" />,
    <img src="body.jpg" className="img2" />,
    <img src="hering.jpg" className="img3" />,
    <img src="lilia-ripilica.jpg" className="img4" />,
  ]
  var [imagemAtiva, setImagemAtiva] = useState(0)
  function Corre() {
    function intervalo() {
      console.log(imagemAtiva)
      setImagemAtiva(imagemAtiva < 3 ? imagemAtiva + 1 : 0)
    }
    setTimeout(intervalo, 5000)
  }
  useEffect(Corre, [imagemAtiva])
  const secoes=[
    {imagem1:"amarante.webp",imagem2:"lilica-tigor.webp",titulo:"destaques"},
  {imagem1:"colorita.webp" ,imagem2:"lacoste.webp"},
  {imagem1:"LACOSTE2.webp",imagem2:"Cozinha.webp"},
  {imagem1:"crocs.jpg",imagem2:"puma.webp"},
  {imagem1:"hering2.webp",imagem2:"parqueaquatico.jpg"},
  {imagem1:"dimmy.webp",imagem2:"farm.webp",titulo:".Novidades."},]
  secoes[0][2]
  secoes[1][1]
  secoes[0] .titulo
  const roupa=[{camiseta:10}]
  const mercado=[{salada:"alface"}]
  const academia=[{leg:100}]
  const aula=[{informatica:8}]
  const carro=["ford","ka"]
var ideia=["boa","ruim"]
ideia=23



  return (
    <main className={styles.main}>
      <Header/>

      <Menu itensMenu={itensMenu}/>

      <Hero imagem={image[imagemAtiva]}/>
      {secoes.map(item =>  <Imagens
       titulo={item.titulo} 
       imagem1={item.imagem1}
       imagem2={item.imagem2}
       />
      )}

    </main>
  )
}
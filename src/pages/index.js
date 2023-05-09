import { motion } from "framer-motion"
import Layout from "./components/layout"
import styles from '@/styles/home.module.css'
import Hero from "./components/hero"



export default function Home() {
  return (
    <>
    <Layout title={"Home"}>
      <Hero/>
    </Layout>
     
    </>
  )
}

import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import MainLayout from "layouts/MainLayout";

const Home: NextPage = () => {
  return (
      <MainLayout title={'Freeshnesecom'}>
        <h1>Heact</h1>
      </MainLayout>
  )
}

export default Home

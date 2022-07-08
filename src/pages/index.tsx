import type { NextPage } from 'next'
import MainLayout from "layouts/MainLayout";
import Categories from "components/Sections/Categories";
import BestSelling from "components/Sections/BestSelling";
import Headline from "components/Sections/Headline";
import Blogs from "components/Sections/Blogs";
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
      <MainLayout title={'Freeshnesecom | Home'}>
          <Categories/>
          <BestSelling/>
          <Headline/>
          <Blogs/>
      </MainLayout>
  )
}

export default Home

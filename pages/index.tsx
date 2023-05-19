import Container from '@/components/Container'
import FavouriteProjects from '@/components/FavouriteProjects'
import Hero from '@/components/Hero'
import LatestArticles from '@/components/Hero'

import styles from '@/styles/Home.module.css'

const Home = () => {
  return (
    <Container>
      <Hero />
      <FavouriteProjects />
      {/* <LatestArticles /> */}
    </Container>
  )
}

export default Home

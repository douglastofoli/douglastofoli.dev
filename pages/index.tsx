import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Container from '@/components/Container'
import FavouriteProjects from '@/components/FavouriteProjects'
import Hero from '@/components/Hero'

const Home = () => {
  return (
    <Container>
      <Hero />
      <FavouriteProjects />
      {/* <LatestArticles /> */}
    </Container>
  )
}

export const getStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'home'])),
    },
  }
}

export default Home

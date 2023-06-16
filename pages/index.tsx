import Container from '@/components/Container'
import FavouriteProjects from '@/components/FavouriteProjects'
import Hero from '@/components/Hero'
import LatestCode from '@/components/LatestCode'
import config from '@/config'
import getLatestRepositories from '@/lib/getLatestRepositories'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

export default function Home({ repositories }) {
  return (
    <Container>
      <Hero />
      <FavouriteProjects />
      <LatestCode repositories={repositories} />
    </Container>
  )
}

export const getStaticProps = async ({ locale }) => {
  const repositories = await getLatestRepositories(config.githubUsername)

  console.log(repositories)
  return {
    props: {
      repositories,
      ...(await serverSideTranslations(locale, ['common', 'home'])),
    },
  }
}

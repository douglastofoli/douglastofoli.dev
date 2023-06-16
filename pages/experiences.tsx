import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Container from '@/components/Container'
import Experiences from '@/components/Experiences'

const experiences = () => {
  return (
    <Container title="Experiences">
      <Experiences />
    </Container>
  )
}

export const getStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'experience'])),
    },
  }
}

export default experiences

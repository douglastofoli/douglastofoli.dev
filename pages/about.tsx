import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import AboutComponent from '@/components/AboutComponent'
import Container from '@/components/Container'

export default function About() {
  return (
    <Container title="About">
      <AboutComponent />
    </Container>
  )
}

export const getStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['about'])),
    },
  }
}

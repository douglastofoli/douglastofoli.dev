import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Container from '@/components/Container'
import Projects from '@/components/Projects'

const projects = () => {
  return (
    <Container title="Projects">
      <Projects />
    </Container>
  )
}

export const getStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'projects'])),
    },
  }
}

export default projects

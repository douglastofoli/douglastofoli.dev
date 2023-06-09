import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Contact from '@/components/Contact'
import Container from '@/components/Container'

const contact = () => {
  return (
    <Container title="Contact">
      <Contact />
    </Container>
  )
}

export const getStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'contact'])),
    },
  }
}

export default contact

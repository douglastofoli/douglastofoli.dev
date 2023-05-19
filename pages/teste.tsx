import { useRouter } from 'next/router'
import Container from '@/components/Container'
import config from '@/config'

const teste = () => {
  const { locale } = useRouter()

  return (
    <Container title={`Projects | ${config.title}`}>
      <h1>{config[locale].teste}</h1>
    </Container>
  )
}

export default teste

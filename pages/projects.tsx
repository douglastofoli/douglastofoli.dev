import Container from '@/components/Container'
import Projects from '@/components/Projects'
import config from '@/config'

const projects = () => {
  return (
    <Container title={`Projects | ${config.title}`}>
      <Projects />
    </Container>
  )
}

export default projects

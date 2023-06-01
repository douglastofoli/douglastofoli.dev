import Footer from './Footer'
import Meta from './Meta'
import Navbar from './Navbar'
import config from '@/config'

type Props = {
  title?: string
  children?: React.ReactNode
}

const Container = ({ title, children }: Props) => {
  return (
    <>
      <Meta title={title} />
      <main className="dark:bg-gray-800 w-full">
        <Navbar />
        {children}
        <Footer />
      </main>
    </>
  )
}

export default Container

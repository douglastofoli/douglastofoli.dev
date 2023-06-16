import config from '@/config'
import Head from 'next/head'
import { useTranslation } from 'react-i18next'
import GoogleAnalytics from './GoogleAnalytics'

type Props = {
  title: string
}

const Meta = ({ title }: Props) => {
  const { t } = useTranslation()

  return (
    <Head>
      <title>{title ? `${title} | ${t('site_name')}` : t('site_name')}</title>

      <link rel="shortcut icon" href={config.favicon.favicon} />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href={config.favicon.favicon16x16}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href={config.favicon.favicon32x32}
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href={config.favicon.appleTouchIcon}
      />
      <link
        rel="mask-icon"
        color="#000000"
        href={config.favicon.safariPinnedTab}
      />
      <link rel="manifest" href={config.favicon.manifest} />
      <meta name="msapplication-TileColor" content="#000000" />
      <meta
        name="msapplication-config"
        content={config.favicon.browserConfig}
      />
      <meta name="theme-color" content="#000" />
      <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
      <meta name="description" content={t('meta_description')} />
      <meta property="og:image" content={config.meta.ogImage} />

      <GoogleAnalytics />
    </Head>
  )
}

export default Meta

import React from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { Transition, animated } from 'react-spring'
import { ThemeProvider } from '@material-ui/core/styles'
import { CacheProvider } from '@emotion/react'
import CssBaseline from '@material-ui/core/CssBaseline'
import createCache from '@emotion/cache'
import theme from '../styles/theme'
import '../styles/style.css'
import Header from '../components/Header'

export const cache = createCache({ key: 'css' })

export default function MyApp (props) {
  const { Component, pageProps } = props
  const router = useRouter()
  const items = [
    {
      id: router.pathname,
      Component,
      pageProps
    }
  ]

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles)
    }
  }, [])

  return (
    <CacheProvider value={cache}>
      <Head>
        <title>My page</title>
        <meta name='viewport' content='initial-scale=1, width=device-width' />
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />

        <Header />

        <div style={{ position: 'relative' }}>
          <Transition
            items={items}
            keys={item => item.id}
            unique
            initial={null}
            from={{ opacity: 1, transform: 'translate3d(100%,0,0)' }}
            enter={{ opacity: 1, transform: 'translate3d(0%,0,0)' }}
            leave={{ opacity: 1, transform: 'translate3d(-50%,0,0)' }}
          >
            {(styles, { pageProps, Component }) => (
              <animated.div style={{ ...styles, width: '100%', position: 'absolute' }}>
                <Component {...pageProps} />
              </animated.div>
            )}
          </Transition>
        </div>
      </ThemeProvider>
    </CacheProvider>
  )
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired
}

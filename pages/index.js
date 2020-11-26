import React from 'react'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import ProTip from '../components/ProTip'
import Link from '../components/Link'
import Copyright from '../components/Copyright'

export default function Index () {
  return (
    <Container maxWidth='sm'>
      <Typography variant='h4' component='h1' gutterBottom>
        Next.js v5-alpha example
      </Typography>
      <Link href='/about' color='secondary'>
        Go to the about page
      </Link>
      <ProTip />
      <Copyright />
    </Container>
  )
}

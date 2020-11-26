import React from 'react'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import ProTip from '../components/ProTip'
import Link from '../components/Link'
import Copyright from '../components/Copyright'

export default function About () {
  return (
    <Container maxWidth='sm'>
      <Typography variant='h4' component='h1' gutterBottom>
        Next.js v5-alpha example
      </Typography>
      <Button variant='contained' component={Link} naked href='/'>
        Go to the main page
      </Button>
      <ProTip />
      <Copyright />
    </Container>
  )
}

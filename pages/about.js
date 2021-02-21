import Typography from '@material-ui/core/Typography'
import Layout from '../components/Layout'
import PageBody from '../components/PageBody'
import { useTheme } from '@material-ui/core/styles'

export default function About () {
  const theme = useTheme()
  const pageColor = theme.palette.secondary.main

  return (
    <Layout>
      <PageBody bgColor={pageColor}>
        <Typography variant='h1' fontWeight={700}>About</Typography>
      </PageBody>
    </Layout>
  )
}

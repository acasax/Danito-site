import React, { useContext, useState } from 'react'
import Footer from 'components/footer'
import { ContactFormContainer, ContactLayoutContainer, ContactMapContainer } from './style'
import { AboutHeaderImage, AboutHeaderImageContainer } from '../about/style'
import LineAnimation from '../../components/lineAnimation'
import CompanyImgCover from 'constants/img/showRoom/19.jpg'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import { TextareaAutosize } from '@mui/material'
import Button from '@mui/material/Button'
import { SiteNavigationContext } from 'siteNavigation/context'
import axios from 'axios'

/**
 *
 * About component
 *
 * @author SaxDev 03.28.2022
 *
 * This is layout for contact page.
 *
 */

const Contact = () => {
  const { scroll } = useContext(SiteNavigationContext)
  const [state, setState] = useState({
    name: '',
    email: '',
    phone: '',
    msg: ''
  })

  const setField = (field: string, data: any) => {
    setState(v => ({
      ...v,
      [field]: data
    }))
  }

  const handleSubmit = async (event: any) => {
    event.preventDefault()
    const data = { ...state }
    try {
      const response = await axios('https://react.danito.rs/api/index.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        },
        data: data,
        withCredentials: true
      })
      console.log('response', response)
    } catch (e) {
      console.log(e)
    }
  }

  return (
        <ContactLayoutContainer>
            <AboutHeaderImageContainer>
                <AboutHeaderImage src={CompanyImgCover} alt="company img cover"/>
            </ AboutHeaderImageContainer>
            <LineAnimation header="Kontaktiraj nas" scroll={scroll} scrollY={0}/>
            <ContactFormContainer>
                <Container sx={{ width: '100%' }}>
                    <Box
                        sx={{
                          marginTop: 2,
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'center'
                        }}
                    >
                        <Box component="form" sx={{ mt: 3, width: '100%' }}>
                            <Grid item xs={12} sx={{ mb: 2 }}>
                                <TextField
                                    required
                                    fullWidth
                                    id="name"
                                    label="Ime i prezime"
                                    name="name"
                                    autoFocus
                                    value={state.name}
                                    onChange={(e) => setField('name', e.target.value)}
                                />
                            </Grid>
                            <Grid container spacing={2} sx={{ mt: 3, mb: 2 }}>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        autoComplete="given-name"
                                        name="email"
                                        required
                                        fullWidth
                                        id="email"
                                        label="E-mail"
                                        value={state.email}
                                        onChange={(e) => setField('email', e.target.value)}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        fullWidth
                                        id="phone"
                                        label="Broj telefona"
                                        name="phone"
                                        value={state.phone}
                                        onChange={(e) => setField('phone', e.target.value)}
                                    />
                                </Grid>
                            </Grid>
                            <Grid item xs={12} sx={{ mt: 3, mb: 2 }}>
                                <TextareaAutosize
                                    id="msg"
                                    name="msg"
                                    aria-label="empty textarea"
                                    placeholder="Poruka"
                                    value={state.msg}
                                    onChange={(e) => setField('msg', e.target.value)}
                                    style={{ width: '100%', height: 200 }}
                                />
                            </Grid>
                            <Button
                                type="submit"
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                                onClick={e => handleSubmit(e)}
                            >
                                Posalji
                            </Button>
                        </Box>
                    </Box>
                </Container>
            </ContactFormContainer>
            <ContactMapContainer>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2828.2276582537675!2d20.65220461553725!3d44.8576599790985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a7ed857157abf%3A0x47141fd5145e027d!2z0JbQsNGA0LrQsCDQl9GA0LXRmtCw0L3QuNC90LAgMTE0LCDQn9Cw0L3Rh9C10LLQviAyNjAwMDA!5e0!3m2!1ssr!2srs!4v1646753870372!5m2!1ssr!2srs"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    aria-hidden="false"
                    loading="lazy"/>
            </ContactMapContainer>
            <Footer/>
        </ContactLayoutContainer>
  )
}

export default Contact

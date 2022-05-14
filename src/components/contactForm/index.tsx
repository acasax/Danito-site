import * as React from 'react'
import { useEffect, useState } from 'react'
import Button from '@mui/material/Button'
import CssBaseline from '@mui/material/CssBaseline'
import TextField from '@mui/material/TextField'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { TextareaAutosize } from '@mui/material'
import { calcSize } from '../../constants/ResponsiveBreakpoints'

/**
 *
 * About Component
 *
 * @author SaxDev 03.28.2022
 *
 * This is UI for Contact Form.
 * Make using Material UI.
 *
 */

const theme = createTheme()

const ContactForm = () => {
  const [width, setWidth] = useState(0)

  const updateDimension = () => {
    const width = window.innerWidth
    setWidth(width)
  }

  useEffect(() => {
    updateDimension()
  }, [updateDimension])

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    // eslint-disable-next-line no-console
    console.log({
      email: data.get('email'),
      name: data.get('name'),
      company: data.get('company'),
      phone: data.get('phone'),
      msg: data.get('msg')
    })
  }

  const InputContainer = {
    mt:
            width > calcSize.large && width <= calcSize.extralarge
              ? calcSize.extralarge * 25 / calcSize.hd
              : width > calcSize.medium && width <= calcSize.large
                ? calcSize.large * 25 / calcSize.hd
                : width > calcSize.small && width <= calcSize.medium
                  ? calcSize.medium * 25 / calcSize.hd
                  : width > calcSize.xsmall && width <= calcSize.small
                    ? calcSize.small * 25 / calcSize.hd
                    : width > 0 && width <= calcSize.xsmall
                      ? calcSize.xsmall * 25 / calcSize.hd
                      : 25,
    mb:
            width > calcSize.large && width <= calcSize.extralarge
              ? calcSize.extralarge * 15 / calcSize.hd
              : width > calcSize.medium && width <= calcSize.large
                ? calcSize.large * 15 / calcSize.hd
                : width > calcSize.small && width <= calcSize.medium
                  ? calcSize.medium * 15 / calcSize.hd
                  : width > calcSize.xsmall && width <= calcSize.small
                    ? calcSize.small * 15 / calcSize.hd
                    : width > 0 && width <= calcSize.xsmall
                      ? calcSize.xsmall * 15 / calcSize.hd
                      : 15
  }

  return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="lg">
                <CssBaseline/>
                <Box
                    sx={{
                      marginTop: 2,
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center'
                    }}
                >
                    <Box component="form" noValidate onSubmit={handleSubmit} sx={InputContainer}>
                        <Grid item xs={12} sx={InputContainer}>
                            <TextField
                                required
                                fullWidth
                                id="name"
                                label="Ime i prezime"
                                name="name"
                                autoFocus
                            />
                        </Grid>
                        <Grid item xs={12} sx={InputContainer}>
                            <TextField
                                required
                                fullWidth
                                id="company"
                                label="Ime firme"
                                name="company"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} sx={InputContainer}>
                            <TextField
                                autoComplete="given-name"
                                name="email"
                                required
                                fullWidth
                                id="email"
                                label="E-mail"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} sx={InputContainer}>
                            <TextField
                                required
                                fullWidth
                                id="phone"
                                label="Broj telefona"
                                name="phone"
                            />
                        </Grid>
                        <Grid item xs={12} sx={InputContainer}>
                            <TextareaAutosize
                                aria-label="empty textarea"
                                placeholder="Poruka"
                                id="msg"
                                name="msg"
                                style={{ width: '100%', height: 200 }}
                            />
                        </Grid>
                        <Button
                            type="submit"
                            variant="contained"
                            sx={{
                              mt: 0
                            }}
                        >
                            Posalji
                        </Button>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
  )
}

export default ContactForm

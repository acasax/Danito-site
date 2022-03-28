import * as React from 'react'
import Button from '@mui/material/Button'
import CssBaseline from '@mui/material/CssBaseline'
import TextField from '@mui/material/TextField'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { TextareaAutosize } from '@mui/material'

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
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    // eslint-disable-next-line no-console
    console.log({
      email: data.get('email'),
      password: data.get('password')
    })
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
                    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                        <Grid item xs={12} sx={{ mb: 2 }}>
                            <TextField
                                required
                                fullWidth
                                id="name"
                                label="Ime i prezime"
                                name="name"
                                autoFocus
                            />
                        </Grid>
                        <Grid item xs={12} sx={{ mt: 3, mb: 2 }}>
                            <TextField
                                required
                                fullWidth
                                id="company"
                                label="Ime firme"
                                name="company"
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
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    fullWidth
                                    id="phone"
                                    label="Broj telefona"
                                    name="phone"
                                />
                            </Grid>
                        </Grid>
                        <Grid item xs={12} sx={{ mt: 3, mb: 2 }}>
                            <TextareaAutosize
                                aria-label="empty textarea"
                                placeholder="Poruka"
                                style={{ width: '100%', height: 200 }}
                            />
                        </Grid>
                        <Button
                            type="submit"
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
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

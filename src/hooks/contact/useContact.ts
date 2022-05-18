import { useCallback, useMemo } from 'react'
import axios from 'axios'

/**
 *
 * About hook
 *
 * @author saxDev 05.17.2022
 *
 * hook for sending email from contact form
 *
 *
 */

// DEV PATH
const API_PATH = 'http://loaclhost:3000/api/index.php'

export const UseContact = () => {
  const sendEmail = async (data: any) => {
    axios.post('/api/contact/index.php', data, {
      headers: { 'Content-Type': 'multipart/form-data' },
      baseURL: 'http://localhost'
    }).then(result => {
      console.log('send email', result)
    }).catch(error => console.log('send email error', error.message))
    /* axios({
      method: 'POST',
      url: `${API_PATH}`,
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      data: JSON.stringify(data)
    }).then(result => {
      console.log('send email', result)
    }).catch(error => console.log('send email error', error.message)) */
  }

  const data = useMemo(
    () => ({
      sendEmail
    }), [
      sendEmail
    ])
  return data
}

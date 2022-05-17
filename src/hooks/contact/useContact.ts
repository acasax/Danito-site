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
const API_PATH = 'http://loaclhost/api/contact/index.php'

export const UseContact = () => {
  const sendEmail = useCallback((data: any) => {
    axios({
      method: 'post',
      url: `${API_PATH}`,
      headers: { 'content-type': 'application/json' },
      data: data
    }).then(result => {
      console.log('send email', result)
    }).catch(error => console.log('send email error', error.message))
  }, [axios])

  const data = useMemo(
    () => ({
      sendEmail
    }), [
      sendEmail
    ])
  return data
}

import {useState, useCallback} from 'react'

export const useHttp = () => {
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(null)
  const [errors, setError] = useState(null)
  const request =  useCallback(async (url, method = 'GET', body = null, headers = {}) => {
    setLoading(true)
    try {
      if (body) {
        body = JSON.stringify(body)
        headers['Content-Type'] = 'application/json'
      }
      const response = await fetch(url, {method, body, headers})
      const data = await response.json()
      if (!response.ok) {
        throw new Error(JSON.stringify(data) || 'Что-то пошло не так')
      }
      setLoading(false)
      setSuccess(data)
      return data
    } catch(e) {
      setLoading(false)
      setError(JSON.parse(e.message))     
      throw e
    }
  }, [])
  const clearError = useCallback( () => setError(null), [])
  const clearSuccess = useCallback( () => setSuccess(null), [])

  return {loading, request, errors, clearError, success, clearSuccess} 
}
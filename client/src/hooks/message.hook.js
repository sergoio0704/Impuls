import {useCallback} from 'react'

export const useMessage = () => {
  return useCallback( data => {
    if (window.M && data) {
        if (data.errors)
        {
          data.errors.forEach(el => {
            window.M.toast({html: el.msg}) 
          })  
        }
        if (data.message) {
          window.M.toast({html: data.message})
        }
    }
  }, [])
}
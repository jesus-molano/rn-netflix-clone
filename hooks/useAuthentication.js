import {auth} from '../firebase'
import { useEffect, useState } from 'react'



const useAuthentication = () => {
  const [user, setUser] = useState()

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user)
      }else{
        setUser(null)
      }
    })
    return unsubscribe
  }, [])


  return {user}
}

export default useAuthentication
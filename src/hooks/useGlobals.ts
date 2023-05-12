import { useContext } from 'react'

import { GlobalContext } from '~/context/globals/GlobalContext'

export const useGlobals = () => {
  return useContext(GlobalContext)
}

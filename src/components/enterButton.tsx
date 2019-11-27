import * as React from 'react'
import { Button } from '../styles/enterButton'
import { useDispatch, useSelector } from 'react-redux'
import { AllState } from '../store/storeState'

export const EnterButton: React.FC = () => {
  const fade = useSelector((state: AllState) => state.isOpenFade.isFade);
  console.log(fade)
  const dispatch = useDispatch()

  return (
    <Button onClick={()=> {dispatch({type: "FADE_IN"})}}>
      Click Here
    </Button>
  )
}
import * as React from 'react'
import { Button } from '../styles/enterButton'
import { useDispatch } from 'react-redux'

export const EnterButton: React.FC = () => {
  const dispatch = useDispatch()

  return (
    <Button onClick={()=> {dispatch({type: "FADE_IN"})}}>
      Click Here
    </Button>
  )
}
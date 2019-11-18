import { Action } from "redux"

export type isFlip = {
  flipped: boolean
}

export const OPEN = "OPEN" as const
export const CLOSE = "CLOSE" as const

interface OpenAction extends Action {
  type: typeof OPEN
}

export const open = (): OpenAction => ({
  type: OPEN
})

interface CloseAction extends Action {
  type: typeof CLOSE
}

export const close = (): CloseAction => ({
  type: CLOSE
})

const initialState: isFlip = {
  flipped: false
}

type isFlipAction = OpenAction | CloseAction

export default function Flip (
  state: isFlip = initialState,
  action: isFlipAction
) {
  switch (action.type) {
    default:
      return state;
    case OPEN:
      return {
        flipped: true
      }
    case CLOSE:
      return {
        flipped: false
      }
  }
}




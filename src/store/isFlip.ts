import { Action } from "redux"

export type Flip = {
  isFlip: boolean
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

const initialState: Flip = {
  isFlip: false
}

type isFlipAction = OpenAction | CloseAction

export default function isOpenFlip (
  state: Flip = initialState,
  action: isFlipAction
) {
  switch (action.type) {
    default:
      return state;
    case OPEN:
      return {
        isFlip: true
      }
    case CLOSE:
      return {
        isFlip: false
      }
  }
}




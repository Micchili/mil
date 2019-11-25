import { createStore, combineReducers } from "redux"
import isOpenFade from './isFade'
import isOpenFlip from './isFlip'

export const store = createStore(
  combineReducers({
    isOpenFade,
    isOpenFlip
  })
)


export type AllState = ReturnType<typeof store.getState>
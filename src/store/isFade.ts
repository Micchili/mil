import { Action } from "redux";

export type Fade = {
  isFade: boolean
}

export const FADE_IN = "FADE_IN" as const;
export const FADE_OUT = "FADE_OUT" as const;

interface FadeInAction extends Action {
  type: typeof FADE_IN
}

export const fadeIn = (): FadeInAction => ({
  type: 'FADE_IN'
})

interface FadeOutAction extends Action {
  type: typeof FADE_OUT
}

export const fadeOut = (): FadeOutAction => ({
  type: 'FADE_OUT'
})

export type FadeActions = FadeInAction | FadeOutAction;

const initialState: Fade = {
  isFade: false
}

export default function isOpenFade(
  state: Fade = initialState,
  action: FadeActions
) {
  switch (action.type) {
    default:
      return state
    case FADE_IN:
      return {
        isFade: true
      }
    case FADE_OUT:
      return {
        isFade: false
      }
  }
}
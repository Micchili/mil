import { Action } from "redux";
import Firebase from 'firebase';
import image from '../image/me3.jpg'

export type ImageUrl = {
  imageUrl: any //firebaseを参照するFunctionの型がわからないため
}

export const GET = "GET" as const;

interface GetAction extends Action {
  type: typeof GET
}

export const get = (): GetAction => ({
  type: GET
})

const initialState: ImageUrl = {
  imageUrl: image
}

export default async function getUrl(
  state: ImageUrl = initialState,
  action: GetAction
) {
  switch (action.type) {
    default:
      return state;
    case GET:
      return {
        imageUrl: await Firebase.storage().ref().child('mil.jpg').getDownloadURL()
      }
  }
}




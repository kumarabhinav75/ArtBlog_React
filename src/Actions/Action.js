export const ADD_CARD = 'ADD_CARD';
export const INCREMENT_LIKE = 'INCREMENT_LIKE';
export const TOGGLE_LIKE = 'TOGGLE_LIKE';

export const AddCard = (cardData) => {
  return {
    type: ADD_CARD,
    payload: cardData
  }
}

export const incrementClap = () => {
  return {
    type: INCREMENT_LIKE,
  }
}

export const toggleLike = () => {
  return {
    type: TOGGLE_LIKE,
  }
}
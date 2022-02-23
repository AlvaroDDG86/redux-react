import { uiActions } from './ui'

export const sendCartData = (cartData) => { // import in component an use it
    return (dispatch) => {
       // some async fetch
       console.log(uiActions) // use other reducers here
       fetch('someurl', {
           data: JSON.stringify(cartData)
       })
       .then(res => res.json)()
       .then(res => console.log(res.data))
    }
}

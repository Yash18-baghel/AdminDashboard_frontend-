

const productReducer = (state={data:null}, action)=>{
  // console.log('first')
    switch (action.type) {
        case 'products':
          // console.log('first')
          return {...state, data: action?.data};
        default:
          return state
    }

}



export default productReducer

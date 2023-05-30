import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from './actions';

const initialState = {
    myFavorites: [],
    allCharacters: [],
};

const rootReducer = (state = initialState, action) => {
    switch (action.type){
        case ADD_FAV:
            return {
                ...state, 
                myFavorites:[...state.myFavorites, action.payload],
                allCharacters:[...state.myFavorites, action.payload],
            };
        case REMOVE_FAV:
            return {
                ...state, 
                myFavorites: state.myFavorites.filter(
                    (char) => char.id !== parseInt(action.payload)
                ),
            };
        case FILTER:
            return {
                ...state,
                allCharacters: state.allCharacters.filter(
                    (char) => char.gender === action.payload
                ),
                myFavorites: state.allCharacters,
            }
        case ORDER:
            return {
                ...state,
                allCharacters: action.payload === 'A' ? state.allCharacters.sort() : state.allCharacters.sort((a, b) => b - a),
                myFavorites: state.allCharacters,
            }
        default: return {...state};
    }
};

export default rootReducer;


// import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from './actions';

// const initialState = {
//     myFavorites: [],
//     allCharacters: [],
// };

// const rootReducer = (state = initialState, action) => {
//     switch (action.type){
//         case ADD_FAV:
//             return {...state, myFavorites:[...state.myFavorites, action.payload]};
//         case REMOVE_FAV:
//             return {
//                 ...state, 
//                 myFavorites: state.myFavorites.filter(
//                     (char) => char.id !== parseInt(action.payload)
//                 ),
//             };
//         default: return {...state};
//     }
// };

// export default rootReducer;
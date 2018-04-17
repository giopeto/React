// Types

export const ADD_ITEM = 'ADD_ITEM';
export const ITEMS_HAS_ERROR = 'ITEMS_HAS_ERROR';
export const ITEMS_IS_LOADING = 'ITEMS_IS_LOADING';
export const ITEMS_FETCH_DATA_SUCCESS = 'ITEMS_FETCH_DATA_SUCCESS';



// Reducers

const initialState = {
    items: []
};

export const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ITEM:
            return { ...state, items: [...state.items, action.payload] };
        default:
            return state;
    }
};


// Actions


export function itemsHasErrored(bool) {
    return {
        type: ITEMS_HAS_ERROR,
        hasErrored: bool
    };
}

export function itemsIsLoading(bool) {
    return {
        type: ITEMS_IS_LOADING,
        isLoading: bool
    };
}

export function itemsFetchDataSuccess(items) {
    return {
        type: ITEMS_FETCH_DATA_SUCCESS,
        items
    };
}

export function itemsFetchData(url) {
    return (dispatch) => {
        dispatch(itemsIsLoading(true));

        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    console.log(response);
                    throw Error(response.statusText);
                }

                dispatch(itemsIsLoading(false));
                console.log(response);
                return response;
            })
            .then((response) => response.json())
            .then((items) => dispatch(itemsFetchDataSuccess(items)))
            .catch(() => dispatch(itemsHasErrored(true)));
    };
}
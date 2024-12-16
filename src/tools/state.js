let state = {
    filters: {
        priceMin: null,
        priceMax: null,
        tag: null,
        category: null,
    },
    sorting: null
};

let stateLoaded = false;

function setState(newState) {
    if(typeof newState === 'function') {
        state = newState(state);
    }
    if(typeof newState === 'object') {
        state = {
            ...state,
            ...newState
        };
    }
    localStorage.setItem('state', JSON.stringify(state));
}

function getState() {
    if(!stateLoaded) {
        const storedState = JSON.parse(localStorage.getItem("state"));
        if(storedState) {
            state = storedState;
        }
        stateLoaded = true;
    }
    return state;
}

export {
    setState,
    getState,
}
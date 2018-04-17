const testEqual = (expected, actual) => {
    return JSON.stringify(expected)==JSON.stringify(actual);
};

const todo = (state, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return {
                id: action.id,
                text: action.text,
                completed: action.completed
            };
        case 'TOGGLE_TODO':
            if (state.id !== action.id) {
                return todo;
            }
            return {
                ...state,
                completed: !state.completed
            };
        default:
            return state;
    }
};

const todos = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                todo(undefined, action)

            ];
        case 'TOGGLE_TODO':
            return state.map(t => todo(t, action));
        default:
            return state;
    }
};

// @Test
const testAddTodo = () => {
    const action = {
        type: 'ADD_TODO',
        id: 0,
        text: 'Learn Redux',
        completed: false,
    };
    const stateBefore = [];
    const stateAfter = [{
        id: 0,
        text: 'Learn Redux',
        completed: false,
    }];

    console.log(testEqual(stateAfter, todos(stateBefore, action)));
};

// @Test
const testToggleTodo = () => {
    const action = {
        type: 'TOGGLE_TODO',
        id: 1
    };
    const stateBefore = [{
        id: 0,
        text: 'Learn Redux',
        completed: false,
    },{
        id: 1,
        text: 'Go shopping',
        completed: false,
    }];
    const stateAfter = [{
        id: 0,
        text: 'Learn Redux',
        completed: false,
    },{
        id: 1,
        text: 'Go shopping',
        completed: true,
    }];

    console.log(testEqual(stateAfter, todos(stateBefore, action)));
};

testAddTodo();
testToggleTodo();
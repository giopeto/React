const testEqual = (expected, actual) => {
    return JSON.stringify(expected)==JSON.stringify(actual);
};

const toggleTodoWithObjectAssign = (todo) => {
    return Object.assign({}, todo, {completed: !todo.completed});
};

const toggleTodoWithSpreadOperator = (todo) => {
    return {
        ...todo,
        completed: !todo.completed
    };
};

// @Test
const testToggleTodo = () => {
    const todoBefore = {
        id: 0,
        text: 'Learn Redux',
        completed: false,
    };
    const todoAfter = {
        id: 0,
        text: 'Learn Redux',
        completed: true,
    };

    console.log(testEqual(todoAfter, toggleTodoWithObjectAssign(todoBefore)));
    console.log(testEqual(todoAfter, toggleTodoWithSpreadOperator(todoBefore)));
};

testToggleTodo();
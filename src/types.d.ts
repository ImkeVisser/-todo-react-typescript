type Todo = {
    text: string;
    complete: boolean;
};

type ToggleTodo = (selctedTodo: Todo) => void;

type AddTodo = (newTodo: string) => void;
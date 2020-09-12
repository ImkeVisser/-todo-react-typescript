type Todo = {
    id: string;
    text: string;
    complete: boolean;
};

type AddTodo = (newTodo: string) => void;
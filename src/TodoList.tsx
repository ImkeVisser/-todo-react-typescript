import React from "react";
import { TodoListItem } from "./TodoListItem";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';

const useStyles = makeStyles({
    root: {
        maxWidth: 'xs',
    },
});

interface TodoListProps {
    todos: Array<Todo>;
    toggleTodo: ToggleTodo;
}

export const TodoList: React.FC<TodoListProps> = ({ todos, toggleTodo }) => {

    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    alt="Plant image from Katya Ausstin"
                    height="140"
                    image="https://425magazine.com/wp-content/uploads/2020/03/katya-austin-4Vg6ez9jaec-unsplash2-scaled.jpg"
                    title="Plants"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        Did I water my plants?
                    </Typography>
                    <FormControl>
                        {todos.map(todo => {
                            return <TodoListItem key={todo.text} todo={todo} toggleTodo={toggleTodo} />;
                        })}
                    </FormControl>
                </CardContent>
            </CardActionArea>
        </Card>
    );
};
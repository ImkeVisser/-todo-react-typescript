import React from "react";
import { TodoListItem } from "./TodoListItem";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';


interface TodoListProps {
    plants: Array<Todo>;
}

export const TodoList: React.FC<TodoListProps> = ({ plants }) => {

    return (
        <Card >
            <CardActionArea>
                <CardMedia
                    component="img"
                    alt="Plant image from Katya Ausstin"
                    height="200"
                    image="https://425magazine.com/wp-content/uploads/2020/03/katya-austin-4Vg6ez9jaec-unsplash2-scaled.jpg"
                    title="Plants"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        Did I water my plants?
                    </Typography>
                    <FormControl>
                        {plants.map(plant => {
                            return <TodoListItem key={plant.id} todo={plant} />;
                        })}
                    </FormControl>
                </CardContent>
            </CardActionArea>
        </Card>
    );
};
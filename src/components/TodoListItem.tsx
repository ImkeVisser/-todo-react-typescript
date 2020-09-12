import React from "react";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';

interface TodoListItemProps {
    todo: Todo;
}

export const TodoListItem: React.FC<TodoListItemProps> = ({
    todo
}) => {
    return (
        <FormControlLabel
            control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name={todo.id} />}
            label={todo.text}
        />

    );
}


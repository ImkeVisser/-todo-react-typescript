import React, { useState, ChangeEvent, FormEvent } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { FormGroup } from "@material-ui/core";

const useStyles = makeStyles({
    margin: {
        marginTop: 20,
    },
});

interface AddTodoFormProps {
    addTodo: AddTodo;
}

export const AddTodoForm: React.FC<AddTodoFormProps> = ({ addTodo }) => {
    const classes = useStyles();

    const [newTodo, setNewTodo] = useState("");

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setNewTodo(e.target.value);
    }

    const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
        e.preventDefault();
        addTodo(newTodo);
        setNewTodo("");
    };

    return (
        <FormGroup className={classes.margin} >
            <TextField
                id="outlined-required"
                label="More plants please"
                defaultValue={newTodo}
                variant="outlined"
                onChange={handleChange}
            />
            <Button size="large" variant="contained" color="secondary" onClick={handleSubmit}>Add a Green Friend</Button>
        </FormGroup>
    );
};
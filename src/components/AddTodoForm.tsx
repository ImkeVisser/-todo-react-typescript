import React, { useState, FormEvent } from "react";
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
    addPlant: AddTodo;
}

export const AddTodoForm: React.FC<AddTodoFormProps> = ({ addPlant }) => {
    const classes = useStyles();

    const [text, setText] = useState('');

    const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
        e.preventDefault();
        addPlant(text);
        setText('')
    };


    return (
        <FormGroup className={classes.margin} >
            <TextField
                id="outlined-required"
                label="More plants please"
                variant="outlined"
                value={text}
                onChange={e => {
                    setText(e.target.value);
                }}
            />
            <Button size="large" variant="contained" color="secondary" onClick={handleSubmit}>Add a Green Friend</Button>
        </FormGroup>
    );
};
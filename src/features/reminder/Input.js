import { Button, Grid, TextField } from '@material-ui/core'
import React from 'react'
import { useReminderContext } from './ReminderScreenController'

export default function Input() {

    const { taskInput, setTaskInput, onSave } = useReminderContext()
    return (
        <Grid alignItems="center" justify="center" container>
            <Grid item>
                <TextField id="outlined-basic" label="task" variant="outlined"
                    value={taskInput}
                    onChange={(e) => setTaskInput(e.target.value)}
                />
            </Grid>
            <Grid item>
                <Button onClick={onSave} variant="contained" color="primary">
                    Save
                </Button>
            </Grid>
        </Grid>
    )
}
import { Grid, Typography } from '@material-ui/core'
import React, { useContext } from 'react'
import { useReminderContext } from './ReminderScreenController'

export default function Summary() {
    const {
        totalDone,
        totalFavourites,
        totalReminders
    } = useReminderContext()
    return (
        <Grid justify="center" direction="column" container>
            <Typography variant="body">Progress: {totalDone}/{totalReminders}</Typography>
            <Typography variant="body">Favorite: {totalFavourites}/{totalReminders}</Typography>
        </Grid>
    )
}
import React from 'react'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import CreateIcon from '@material-ui/icons/Create';
import DeleteIcon from '@material-ui/icons/Delete';
import { useReminderContext } from './ReminderScreenController';
import FavoriteButton from '../../components/FavouriteButton';


export default function ReminderList() {
    const { reminderList,
        onDelete,
        onEdit,
        onClickFavorite,
        onClickDone } = useReminderContext()
    return (
        <List>
            {reminderList.map((item, key) => {
                const labelId = `checkbox-list-label-${key}`;
                return (
                    <ListItem key={key} role={undefined} dense button >
                        <ListItemIcon>
                            <Checkbox
                                onClick={() => onClickDone(item)}
                                edge="start"
                                checked={item.isDone}
                                tabIndex={-1}
                                disableRipple
                                inputProps={{ 'aria-labelledby': labelId }}
                            />
                            <FavoriteButton 
                                onClick={() => onClickFavorite(item)}
                                checked={item.isFavorite} 
                            />

                        </ListItemIcon>
                        <ListItemText id={labelId} primary={item.title} />
                        <ListItemSecondaryAction>
                            <IconButton edge="end" aria-label="comments"
                                onClick={() => onEdit(item)}>
                                <CreateIcon />
                            </IconButton>
                            <IconButton edge="end"
                                aria-label="comments"
                                onClick={
                                    () => onDelete(item)
                                }
                            >
                                <DeleteIcon style={{ color: "red" }} />
                            </IconButton>
                        </ListItemSecondaryAction>
                    </ListItem>
                );
            })}
        </List>
    );
}
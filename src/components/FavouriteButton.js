import StarBorderIcon from '@material-ui/icons/StarBorder';
import StarIcon from '@material-ui/icons/Star';
import React from 'react'
import IconButton from '@material-ui/core/IconButton'

const FavoriteButton = ({ checked }) => {
    if (checked) {
        return (
            <IconButton edge="end" aria-label="comments">
                <StarIcon style={{ color: "gold" }} />
            </IconButton>
        )
    } else {
        return (
            <IconButton edge="end" aria-label="comments">
                <StarBorderIcon style={{ color: "gold" }} />
            </IconButton>
        )
    }
}

export default FavoriteButton
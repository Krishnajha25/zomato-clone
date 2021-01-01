import { Card, CardActionArea, CardContent, CardMedia, makeStyles } from '@material-ui/core'
import React from 'react'

const useStyle = makeStyles({
    card: {
        height: 150,
        width: 175,
        margin: 5,
        marginTop: 10,
        borderRadius: '1.2rem',
        position: 'relative',
    },
    media: {
        height: 150,
        width: "100%"
    },
})

export default function Card2(props) {
    const classes = useStyle()

    return (
        <div>
            <Card className={classes.card}>
                <CardActionArea>
                    <CardMedia 
                        className={classes.media}
                        image={props.img}
                    />
                    <CardContent>
                        <p>Card2</p>
                    </CardContent>
                </CardActionArea>
            </Card>
        </div>
    )
}

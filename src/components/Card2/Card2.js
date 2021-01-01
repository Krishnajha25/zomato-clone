import { Card, CardActionArea, CardContent, CardMedia, makeStyles } from '@material-ui/core'
import React from 'react'

const useStyle = makeStyles({
    card: {
        height: 150,
        width: 175,
        margin: 5,
        marginTop: 10,
        borderRadius: 10,
        position: 'relative',
    },
    media: {
        height: 150,
        width: "100%"
    },
    title: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        height: 32,
        zIndex: 1,
        margin: 0,
        padding: 0,
        background: 'transparent',
        color: '#fff',
        textAlign: 'left',
        display: 'flex',
        alignItems: 'center',
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
                    <CardContent className={classes.title}>
                        <p>Card2</p>
                    </CardContent>
                </CardActionArea>
            </Card>
        </div>
    )
}

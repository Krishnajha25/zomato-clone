import React from 'react'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import { CardContent, Typography, CardMedia, makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
    media: {
        height: 150,
        width: "100%"
    },
    cardWrapper: {
        width: '80%',
        margin: '0 auto',
        flexGrow: 0,
        flexShrink: 0,
    },
    card: {
        height: 150,
        width: 175,
        margin: 5,
        marginTop: 10,
        borderRadius: 10,
        position: 'relative',
        flexGrow: 1,
    },
    title: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        height: 32,
        zIndex: 1,
        margin: 0,
        padding: 0,
        background: '#fff',
        textAlign: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    para: {
        fontWeight: 500,
        color: '#333',
        fontFamily: 'Roboto',
        fontSize: 16,
        margin: 0
    }
})

export default function Card1(props) {

    const classes = useStyles()

    return (
        <div className={classes.cardWrapper} >
            <Card className={classes.card}>
                <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={props.img}
                />
                <CardContent className={classes.title}>
                    {/* <Typography style={{ margin: 0 }} gutterBottom variant='h5' component='h4'>
                        {props.title}
                    </Typography> */}
                    <p className={classes.para}>{props.title}</p>
                </CardContent>
                </CardActionArea>
            </Card>
        </div>
    )
}

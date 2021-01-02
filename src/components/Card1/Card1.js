import React from 'react'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import { CardContent, Typography, CardMedia, makeStyles } from '@material-ui/core'
import classes from './Card.module.css'

// const useStyles = makeStyles({
//     // media: {
//     //     height: 150,
//     //     // width: "100%"
//     // },
//     // cardWrapper: {
//     //     width: '100%',
//     //     minWidth: 200,
//     //     maxWidth: '23%',
//     //     // flexGrow: 0,
//     //     // flexShrink: 0,
//     //     padding: 2,
//     //     flex: '0 1 auto',
//     // },
//     // card: {
//     //     height: 150,
//     //     margin: 5,
//     //     marginTop: 10,
//     //     borderRadius: 10,
//     //     position: 'relative',
//     //     // flexGrow: 1,
//     // },
//     // title: {
//     //     position: 'absolute',
//     //     bottom: 0,
//     //     width: '100%',
//     //     height: 32,
//     //     zIndex: 1,
//     //     margin: 0,
//     //     padding: 0,
//     //     background: '#fff',
//     //     textAlign: 'center',
//     //     display: 'flex',
//     //     alignItems: 'center',
//     //     justifyContent: 'center'
//     // },
//     // para: {
//     //     fontWeight: 500,
//     //     color: '#333',
//     //     fontFamily: 'Roboto',
//     //     fontSize: 16,
//     //     margin: 0
//     // }
// })

export default function Card1(props) {

    // const classes = useStyles()

    return (
        <Card className={classes.Card}>
            <CardActionArea>
            <CardMedia
                className={classes.Media}
                image={props.img}
            />
            <CardContent className={classes.Title}>
                <Typography style={{ margin: 0 }} gutterBottom variant='p' component='p'>
                    {props.title}
                </Typography>
                {/* <p className={classes.Para}>{props.title}</p> */}
            </CardContent>
            </CardActionArea>
        </Card>
    )
}

import { Card, CardActionArea, CardContent, CardMedia, makeStyles, Typography } from '@material-ui/core'
import React from 'react'

import arrowRight from '../../assets/image/right-arrow.svg'
import classes from '../Card1/Card.module.css'

// const useStyle = makeStyles({
//     card: {
//         height: 150,
//         margin: 5,
//         marginTop: 10,
//         borderRadius: 10,
//         position: 'relative',
//         flexGrow: 1,
//     },
//     media: {
//         height: 150,
//     },
//     title: {
//         position: 'absolute',
//         bottom: 0,
//         width: '100%',
//         zIndex: 1,
//         margin: 0,
//         padding: 0,
//         background: 'transparent',
//         color: '#fff',
//         textAlign: 'left',
//         display: 'flex',
//         alignItems: 'center',
        
//     },
//     section: {
//         display: 'flex',
//         flexDirection: 'column',
//         justifyContent: 'flex-start',
//         alignItems: 'center'
//     },
//     cardWrapper: {
//         width: '100%',
//         maxWidth: '45%',
//         flexGrow: 0,
//         flexShrink: 0,
//         padding: 2,
//     },
// })

export default function Card2(props) {
    // const classes = useStyle()

    return (
        
        <Card className={classes.Card}>
            <CardActionArea>
                <CardMedia 
                    className={classes.Media}
                    image={props.img}
                />
                <CardContent style={{ background: 'transparent' }} className={classes.Title}>
                    {/* <section style={{ paddingLeft: '10px', background: 'rgba(0,0,0,0.2)' }}>
                        <p style={{margin: 0, fontSize: '1.1rem'}}>Card2</p>
                        <p style={{margin: 0, fontSize: '1.1rem'}}>62 Places <img src={arrowRight} height='10px' width='10px'  alt=""/></p>
                    </section> */}
                    <Typography style={{ margin: 0 }} gutterBottom variant='h5' component='h5'>
                        {/* {props.title} */}
                        Card2
                    </Typography>
                    <Typography style={{ margin: 0 }} gutterBottom variant='p' component='p'>
                        {/* {props.title} */}
                        62 Places <img src={arrowRight} height='10px' width='10px'  alt=""/>
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
        
    )
}

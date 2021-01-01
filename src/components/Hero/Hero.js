import { makeStyles } from '@material-ui/core'
import React from 'react'

import Header from '../Navigation/Header/Header'
import Search from '../Search/Search'
import heroImg from '../../assets/image/ZomatoBackground.jpg'


const useStyle = makeStyles({
    hero: {
        position: 'relative',
        minHeight: 400,
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundImage: `url(${heroImg})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        // backgroundPosition: 'center',
        paddingBottom: 20
    },
    overlay: {
        position: 'absolute',
        height: '100%',
        width: '100%',
        top: 0,
        background: 'rgba(0,0,0,0.4)'
    }
})

export default function Hero() {
    const classes = useStyle()

    return (
        <div className={classes.hero}>
            <div className={classes.overlay}></div>
            <Header />
            <Search />
        </div>
    )
}

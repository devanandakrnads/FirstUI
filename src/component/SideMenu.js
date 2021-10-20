import React from 'react'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
    sideMenu: {
        display: 'flex',
        flexDirection: 'column',
        position: 'fixed',
        left: '0px',
        width: '180px',
        height: '100%',
        backgroundColor: '#008037'
    }
})

export default function SideMenu() {
    const classes = useStyles();
    return (
        <div className={classes.sideMenu}>
            
        </div>
    )
}

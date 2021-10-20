import { Grid, Toolbar, InputBase, IconButton } from '@material-ui/core'
import React from 'react'
import { AppBar,Badge } from '@material-ui/core'
import NotificationsIcon from '@material-ui/icons/Notifications';

export default function Header() {
    return (
        <AppBar position = "static" >
            <Toolbar>
                <Grid container justifyContent='flex-end' >
                    <Grid item lg={3} style={{border:'1px solid #fff'}}>
                        <InputBase />
                    </Grid>
                    <Grid item lg={7}>
                        <InputBase />
                    </Grid>
                    <Grid item lg={0}>
                        <IconButton>
                            <Badge>
                                <NotificationsIcon />
                            </Badge>
                        </IconButton>
                    </Grid>
                </Grid>  
            </Toolbar>
        </AppBar>
    )
}

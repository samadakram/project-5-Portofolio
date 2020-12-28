import React from 'react';
import {Grid} from '@material-ui/core';

export const Home = () => {
    return (
        <div>
            <Grid container>
                <Grid className="homeGrid" item md={6}>Text</Grid>
                <Grid className="homeGrid" item md={6}>Image</Grid>
            </Grid>            
        </div>
    );
}
import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

export class HelloWorld extends Component {
    render() {
        return (
          <Grid container
            direction="row"
            justify="center"
            alignItems="center"
            spacing = {12}
          >
            <Button variant="contained" color="primary">
              Hello World
            </Button>
          </Grid>
        );
    }
}
export default HelloWorld;

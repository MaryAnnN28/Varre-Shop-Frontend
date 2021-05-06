import React, { useState } from 'react';
import './Filter.css';
import { makeStyles } from '@material-ui/core/styles'
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Checkbox from '@material-ui/core/Checkbox'
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(1),
  },
}));

const Filter = ({ items, sort, setSort }) => {

  

  const classes = useStyles();


  return (
    <div>
    
      <div className="filter-container">
        <div className="filter-header">
        <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel id="demo-simple-select-outlined-label">Sort:</InputLabel>
              <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                // value={sort}
                // onChange={event => setSort(event.target.value)}
                label="Sort"
                margin="dense"
              >
                <MenuItem value={"None"}>None</MenuItem>

                <MenuItem value={"Price_Low_To_High"}>Price (Low to High)</MenuItem>
              
                <MenuItem value={"Price_High_To_Low"}>Price (High to Low)</MenuItem>
              
                <MenuItem value={"Newest"}>Newest</MenuItem>

                <MenuItem value={"Oldest"}>Oldest</MenuItem>
              
              </Select>
          </FormControl>
          <br /><br />
          <p className="filter-header-text">FILTER BY:</p>
              <br />
          <FormGroup margin="dense">
          <p className="filter-header-text">CATEGORY</p>
            <FormControlLabel
              control={
                <Checkbox
                  name="Abstract"
                  color="primary"
                />
              }
              label="Abstract"
            />

            <FormControlLabel
              control={
                <Checkbox
                  name="Nature"
                  color="primary"
                />
              }
              label="Nature"
            />

            <FormControlLabel
              control={
                <Checkbox
                  name="Figurative"
                  color="primary"
                />
              }
              label="Figurative"
            />
            <FormControlLabel
              control={
                <Checkbox
                  name="Fashion"
                  color="primary"
                />
              }
              label="Fashion"
            />
            <br />
            <p className="filter-header-text">COLOR</p>
            <FormControlLabel
              control={
                <Checkbox
                  name="Black"
                  color="primary"
                />
              }
              label="Black"
            />
            <FormControlLabel
              control={
                <Checkbox
                  name="White"
                  color="primary"
                />
              }
              label="White"
            />
            <FormControlLabel
              control={
                <Checkbox
                  name="Multi-color"
                  color="primary"
                />
              }
              label="Multi-color"
            />
            <FormControlLabel
              control={
                <Checkbox
                  name="Blue"
                  color="primary"
                />
              }
              label="Blue"
            />
            <FormControlLabel
              control={
                <Checkbox
                  name="Beige"
                  color="primary"
                />
              }
              label="Beige"
            />
            <FormControlLabel
              control={
                <Checkbox
                  name="Gold"
                  color="primary"
                />
              }
              label="Gold"
            />


          </FormGroup>
       
        </div>
      </div>
    </div>
  )
}

export default Filter; 

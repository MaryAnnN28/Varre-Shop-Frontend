import React, { useState } from 'react';
import './Filter.css';
import { makeStyles } from '@material-ui/core/styles'
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
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
    marginTop: theme.spacing(2),
  },
}));

const Filter = ({ sort, handleSort }) => {

  const classes = useStyles();

  const [value, setValue] = useState("None");
  
  const [checked, setChecked] = useState("None");



  return (
    <>
      <div className="sort-container">
        <div className="sort">
          {/* <p className="sort-header-text">
            SORT BY: */}
            <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel id="demo-simple-select-outlined-label">Sort:</InputLabel>
              <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                value={value}
                onChange={handleSort}
                label="Sort"
                margin="dense"
              >
                <MenuItem
                  checked={sort === "None"}
                  value="None"
                >None</MenuItem>

                <MenuItem
                checked={sort === "Price_Low_To_High"}
                value="Price_Low_To_High"
                >Price (Low to High)</MenuItem>
              
                <MenuItem
                  checked={sort === "Price_High_To_Low"}
                  value="Price_High_To_Low"
                >Price (High to Low)</MenuItem>
              
                <MenuItem
                  checked={sort === "Newest"}
                  value="Newest"
                >Newest</MenuItem>

                <MenuItem
                  checked={sort === "Oldest"}
                  value="Oldest"
                >Oldest</MenuItem>
              
              </Select>
            </FormControl>
          {/* </p> */}
        </div>
      </div>
      <div className="filter-container">
        <div className="filter-header">
          <p className="filter-header-text">FILTER BY:</p>
              <br />
          <FormGroup>
            Category
            <FormControlLabel
              control={
                <Checkbox
                  // checked={state.checkedB}
                  // onChange={handleChange}
                  name="checkedB"
                  color="primary"
                />
              }
              label="Abstract"
            />

            <FormControlLabel
              control={
                <Checkbox
                  // checked={state.checkedB}
                  // onChange={handleChange}
                  name="checkedB"
                  color="primary"
                />
              }
              label="Nature"
            />

            <FormControlLabel
              control={
                <Checkbox
                  // checked={state.checkedB}
                  // onChange={handleChange}
                  name="checkedB"
                  color="primary"
                />
              }
              label="Figurative"
            />
            <FormControlLabel
              control={
                <Checkbox
                  // checked={state.checkedB}
                  // onChange={handleChange}
                  name="checkedB"
                  color="primary"
                />
              }
              label="Fashion"
            />
            <br /><br />
            Color<br />
            <FormControlLabel
              control={
                <Checkbox
                  // checked={state.checkedB}
                  // onChange={handleChange}
                  name="checkedB"
                  color="primary"
                />
              }
              label="Black"
            />
            <FormControlLabel
              control={
                <Checkbox
                  // checked={state.checkedB}
                  // onChange={handleChange}
                  name="checkedB"
                  color="primary"
                />
              }
              label="White"
            />
            <FormControlLabel
              control={
                <Checkbox
                  // checked={state.checkedB}
                  // onChange={handleChange}
                  name="checkedB"
                  color="primary"
                />
              }
              label="Multi-color"
            />
            <FormControlLabel
              control={
                <Checkbox
                  // checked={state.checkedB}
                  // onChange={handleChange}
                  name="checkedB"
                  color="primary"
                />
              }
              label="Blue"
            />
            <FormControlLabel
              control={
                <Checkbox
                  // checked={state.checkedB}
                  // onChange={handleChange}
                  name="checkedB"
                  color="primary"
                />
              }
              label="Beige"
            />
            <FormControlLabel
              control={
                <Checkbox
                  // checked={state.checkedB}
                  // onChange={handleChange}
                  name="checkedB"
                  color="primary"
                />
              }
              label="Gold"
            />


          </FormGroup>
        </div>
      </div>
    </>
  )
}

export default Filter; 

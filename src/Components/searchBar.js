import React from 'react';
import InputBase from '@material-ui/core/InputBase';
import Search from '@material-ui/icons/Search';

function SearchBar(props) {

    const classes = props.classes

    return (
        <div className={classes.search}>
            <div className={classes.searchIcon}>
              <Search />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
    )
}

export default SearchBar;
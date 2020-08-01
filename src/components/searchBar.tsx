import React, { useState, useEffect, useCallback, ChangeEvent } from 'react';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton'
import SearchIcon from '@material-ui/icons/Search';
import Grid from '@material-ui/core/Grid';

interface SearchBarProps {
  searchText: string
  handleSearchArticle: (s: string) => Promise<void>
  classes: { [key: string]: string }  //TODO
  inputClass: string
}

export default function SearchBar(props: SearchBarProps) {


  const [searchText, search] = useState(props.searchText);
  useEffect(() => {
    search(props.searchText);
  }, [searchText, props.searchText]);


  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    search(e.target.value);
  }, [search]);

  
  const handleSubmit = useCallback((e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    if (searchText !== '') {
      props.handleSearchArticle(searchText)
    }
  }, [props.handleSearchArticle, searchText]);


	const handleKeyDown = useCallback((e: React.KeyboardEvent<HTMLInputElement>) => {
		switch (e.keyCode) {
		case 27: {
      search('');
			break;
		}
		case 13: {
      handleSubmit(e as any)
			break;
		}
		}
	}, []);

  const { classes, inputClass } = props;


  return (
      <Grid item className={classes.search}>
          <InputBase
            placeholder="Search…"
            classes={{
              input: inputClass 
            }}
            inputProps={{ 'aria-label': 'search' }}
            onKeyDown={handleKeyDown}
            onChange={handleChange}
            value={searchText}
          />
          <IconButton type="submit" className={classes.searchIconButton} aria-label="search" onClick={handleSubmit}>
            <SearchIcon />
          </IconButton>
      </Grid>
  );

}
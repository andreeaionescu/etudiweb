import React, { useState, useEffect, useCallback, ChangeEvent } from 'react';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton'
import SearchIcon from '@material-ui/icons/Search';
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';

interface SearchBarProps {
  searchText: string
  handleSearchArticle: (s: string) => Promise<void>
  classes: { [key: string]: string }  //TODO
  inputClass: string
}

export default function SearchBar(props: SearchBarProps) {

  const [isSearching, setSearching] = useState(false);

  const [searchText, search] = useState(props.searchText);
  useEffect(() => {
    search(props.searchText);
  }, [search, props.searchText]);


  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    search(e.target.value);
  }, [search]);

  
  const handleSubmit = useCallback((e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    if (searchText !== '') {
      setSearching(true);
      props.handleSearchArticle(searchText)
        .finally(() => setSearching(false));
    }
  }, [props.handleSearchArticle, searchText, setSearching]);


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
	}, [search, handleSubmit]);

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
            autoFocus
          />
          <IconButton type="submit" className={classes.searchIconButton} aria-label="search" onClick={handleSubmit}>
            {isSearching ?
              <CircularProgress size='1em' /> :
              <SearchIcon />
            }
          </IconButton>
      </Grid>
  );

}
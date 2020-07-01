import React from 'react';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton'
import SearchIcon from '@material-ui/icons/Search';
import Grid from '@material-ui/core/Grid';

class SearchBar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {searchText: this.props.searchText};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({searchText: event.target.value});
  }
  
  handleSubmit(event) {
    event.preventDefault();
    if (this.state.searchText !== ''){
        this.props.handleSearchArticle(this.state.searchText)
    }
  }

  render(){
      const classes = this.props.classes
      const inputClass = this.props.inputClass

      return (
          <Grid item className={classes.search}>
              <InputBase
                placeholder="Search…"
                classes={{
                  input: inputClass 
                }}
                inputProps={{ 'aria-label': 'search' }}
                onChange={this.handleChange}
                value={this.state.searchText}
              />
              <IconButton type="submit" className={classes.searchIconButton} aria-label="search" onClick={this.handleSubmit}>
                <SearchIcon />
              </IconButton>
            </Grid>
      )
  }
}

export default SearchBar;
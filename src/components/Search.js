import React from 'react'

const Search = props => {
  return (
    <div className="ui search">
      <div className="ui icon input">
        <input className="prompt" name='searchForm' onChange={props.searchChange}/>
        <i className="search icon" />
      </div>
    </div>
  )
}

export default Search

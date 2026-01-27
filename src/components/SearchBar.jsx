import { useState } from 'react'
import '../styles/main.scss'
import searchIcon from '../assets/images/icon-search.svg';

function SearchBar() {

  return (
    <>
      <img src={searchIcon} alt="Search icon" />
      <input type="search" name="" id="" placeholder='Search for a place..' />
      <button type="submit">Search</button>
      
    </>
  )
}

export default SearchBar
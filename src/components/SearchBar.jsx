import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { Paper, IconButton } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if(searchTerm) {
      navigate(`/search/${searchTerm}`);

      setSearchTerm('');
    }
  }
  return (
    <Paper component="form"
    onSubmit={handleSubmit}
    sx={{borderRadius:20, border: '1px solid #f5f5f5', pl:2, boxShadow: 'none', mr: {sm: 5} }}>
      <input type="text" className="search-bar"placeholder='Search' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
      <IconButton type="submit" sx={{p:'10px', color: '#C92C6D'}}>
        <SearchIcon />
      </IconButton>
    </Paper>
  )
}

export default SearchBar
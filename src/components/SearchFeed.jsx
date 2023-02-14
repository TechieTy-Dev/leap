import React, {useState, useEffect} from 'react'
import Videos from './Videos'
import {Box, Typography} from '@mui/material';
import { fetchAPI } from '../utils/fetchAPI';
import { useParams } from 'react-router-dom';

const SearchFeed = () => {
  const {searchTerm} = useParams();
  const [videos, setVideos] = useState([])
  useEffect(() => {
    fetchAPI(`search?part=snippet&q=${searchTerm}`)
    .then((data) =>  setVideos(data.items))
  }, [searchTerm]);


  return (
    <Box p={2} sx={{ overflowY: 'auto', height: '90vh', flex: 2}}>
      <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: '#F0EEED'}}>
        Search Results for: {' '}
          <span style={{color: '#609EA2'}}>{searchTerm}</span> Videos
      </Typography>
      <Videos videos={videos}/>
    </Box>
  )
}

export default SearchFeed;
import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { Box } from '@mui/material'
import {Videos, ChannelCard} from './'
import { fetchAPI } from '../utils/fetchAPI'
const ChannelDetail = () => {

  const [channelDetail, setChannelDetail] = useState(null)
  const [videos, setVideos] = useState([])
  const { id } = useParams();

  useEffect(() => {
    fetchAPI(`channels?part=snippet&id=${id}`)
    .then((data) => setChannelDetail(data?.items[0]));
    fetchAPI(`search?channelId=${id}&part=snippet&order=date`)
    .then((data) => setVideos(data?.items));
  }, [id]);
  
  console.log(channelDetail, videos);
  return (
    <Box minHeight="95vh">
      <Box>
        <div style={{background: 'linear-gradient(45deg, rgba(201,44,109,1) 25%, rgba(96,158,162,1) 75%)', zIndex: 10, height: '300px'}}/>
        <ChannelCard channelDetail={channelDetail} marginTop="-110px"
        />
      </Box>
      <Box display="flex" p={2}>
        <Box sx={{ mr: { xs: '70px', sm: '100px'}}} />
          <Videos videos={videos} />
       
      </Box>
    </Box>
  )
}

export default ChannelDetail
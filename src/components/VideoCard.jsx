import React from 'react'
import { Typography, Card, CardContent, CardMedia } from '@mui/material'
import { Link } from 'react-router-dom'
import { CheckCircle } from '@mui/icons-material'


const VideoCard = ({video: {id: {
  videoId
}, snippet}}) => {

  return (
  <Card sx={{width: {xs: '320px',md: '305px', sm:'358px'}, boxShadow: "none", borderRadius: 'none'}}>
    <Link to={`/video/${videoId}`}>
    <CardMedia 
    alt={snippet?.title}
    sx={{width: {xs: '100%', sm: '358px', md: '305px'}, height: 170}}
    image={snippet?.thumbnails?.high?.url}/>
    </Link>
    <CardContent sx={{ backgroundColor:'#333', height: '110px'}}>
      <Link to={`/video/${videoId}`}>
        <Typography variant='subtitle1' fontWeight="bold" color="white">
        {snippet?.title.slice(0,140)}
        </Typography>
      </Link>
      <Link to={`/channel/${snippet?.channelId}`}>
        <Typography variant='subtitle2' fontWeight="bold" color="#999999">
        {snippet?.channelTitle.slice(0,60)}
        <CheckCircle sx={{fontSize: 12, color: '#609EA2', ml:'5px'}} />
        </Typography>
      
      </Link>
    </CardContent>
  </Card>
  )
}

export default VideoCard
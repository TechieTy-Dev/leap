import React from 'react'
import{ CardMedia, CardContent, Typography, Box} from '@mui/material'
import { CheckCircle } from '@mui/icons-material'
import { Link } from 'react-router-dom'


const ChannelCard = ({channelDetail, marginTop}) => {
  return (
    <Box sx={{
      boxShadow: 'none',
      borderRadius: '20px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: {
        xs: '356px', md: '305px'
      },
      height: '326px',
      margin: 'auto',
      marginTop: marginTop
    }}>
      <Link to={`/channels/${channelDetail?.id?.channelId}`}>
        <CardContent sx={{display:'flex', flexDirection:'column', justifyContent:'center',
        textAlign: 'center',
        alignItems: 'center',
         color: '#f5f5f5'}} >
          <CardMedia image={channelDetail?.snippet?.thumbnails?.high?.url} alt={channelDetail?.snippet?.title} sx={{borderRadius: '50%', height: '180px', width: '180px', mb: 2, border: '1px solid #e3e3e3'}}/>
          <Typography variant="h6">
            {channelDetail?.snippet?.title}{' '}
            <CheckCircle sx={{fontSize: 14, color: '#609EA2', ml:'5px'}} />
          </Typography>
          {channelDetail?.statistics?.subscriberCount && (
            <Typography>
              {parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString()} Subscribers
            </Typography>
          )}
        </CardContent>
      </Link>
    </Box>
  )
}

export default ChannelCard
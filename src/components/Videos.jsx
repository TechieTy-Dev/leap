import React from 'react'
import { Stack, Box} from '@mui/material'
import {Loader, VideoCard, ChannelCard} from './'
const Videos = ({videos, direction}) => {
  if(!videos?.length) return <Loader />
  return (
   <Stack direction={direction || "row"} flexWrap="wrap" alignItems={{ xs: 'center', md:'start'}} justifyContent={{ xs: 'center', md:'start'}} gap={2}>
    {videos.map(( item, idx) => (
      <Box key={idx}>
        {item.id.videoId && <VideoCard  video={item} />}
        {item.id.channelId && <ChannelCard channelDetail={item}/>}
      </Box>
    )) }

   </Stack>
  )
}

export default Videos
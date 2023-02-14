import React from 'react'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Box } from '@mui/material'
import {Navbar, Feed, SearchFeed, ChannelDetail, VideoDetail} from './components'

const App = () => (
  <BrowserRouter>
  <Box sx={{ backgroundColor: '#20262E'}}>
    <Navbar />
    <Routes>
      <Route exact path="/" element={<Feed />} />
      <Route path="/video/:id" element={<VideoDetail/>}/>
      <Route path="/channel/:id" element={<ChannelDetail/>}/>
      <Route path="/search/:searchTerm" element={<SearchFeed/>}/>
    </Routes>
  </Box>
  
  </BrowserRouter>  
  )

export default App
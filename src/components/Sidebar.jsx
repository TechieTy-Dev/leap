import { Stack } from "@mui/material"
import {categories} from '../utils/constants'

const Sidebar = ({selectedCategory, setSelectedCategory}) =>  (
   <Stack direction="row" sx={{overflowY: 'auto', height: {sx: 'auto', md: '95%'},
  flexDirection: { md: 'column'},
}}>
  {categories.map((category) => (
    <button className="category-btn" onClick={() => setSelectedCategory(category.name)} style={{background:  category.name === selectedCategory && '#609EA2', color: '#F0EEED'}} key={category.name}>
      <span style={{ color: category.name === category ? '#F0EEED': '#C92C6D', marginRight: '15px'}}>{category.icon}</span>
      <span style={{ opacity: category.name === selectedCategory ? '1' : '0.8'}}>{category.name}</span>
    </button>
  ))}
</Stack>
  )


export default Sidebar
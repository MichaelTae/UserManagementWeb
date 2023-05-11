import { EuropeMap } from './EuropeMap';
import React,{useState} from 'react';
import { Box, Button, Text,SegmentedControl } from '@mantine/core';
import { NorthAmericaMap } from './NorthAmericaMap';
import { SouthAmericaMap } from './SouthAmericaMap';


const WorldMap = ({userData}) => {
    const [countrySelect, setCountrySelect] = useState('Europe')

    const hasUsers = (countryName)=>{
        if(userData.some((user)=>user.country===countryName)){
            return 'green'
        }

        return 'white'
    }

    
    
    
    return(
        <Box sx={{width:'100%', height:'100%',  border: '2px solid rgba(0,191,166,0.3)', background: 'rgba(255, 255, 255, 0.05)', borderRadius:'6%',backdropFilter: 'blur(10.9px)'}}>
            <Text sx={{display:'flex', justifyContent:'center'}} weight={600} size={28}>Users across the world</Text>
            
            <SegmentedControl
            radius="lg"
            color='teal'
            opacity={0.8}
            transitionDuration={500}
        transitionTimingFunction="linear"
            fullWidth
        data={[
          { value: 'Europe', label: 'Europe' },
          { value: 'North America', label: 'North America' },
          { value: 'South America', label: 'South America' }
        ]}
        onChange={(value) => setCountrySelect(value)}
      />
        <svg baseProfile="tiny" fill="#262654" stroke="black" strokeLinecap="round" viewBox={` ${countrySelect === 'Europe' ? '80 100 1000 700' : countrySelect === 'North America' ? '10 -30 1000 600' : '180 365 1000 600' } `} strokeLinejoin="round" preserveAspectRatio="xMidYMid meet" strokeWidth=".2" version="1.2"  xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
       {countrySelect === 'Europe' && <EuropeMap   hasUsers={hasUsers}  />}
       {countrySelect === 'North America' && <NorthAmericaMap hasUsers={hasUsers} />}
       {countrySelect === 'South America' && <SouthAmericaMap hasUsers={hasUsers} />}
       
       </svg>
</Box>
    )
};



export default WorldMap;


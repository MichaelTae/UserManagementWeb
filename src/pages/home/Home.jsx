import { Container, Skeleton, Grid, Box, Text, Loader } from '@mantine/core';
import Card from '../../components/card/Card';
import {
  IconUsers,
  IconTicket,
  IconUsersPlus,
  IconCurrencyDollar,
} from '@tabler/icons-react';
import Piechart from '../../components/piechart/Piechart';
import useMetrics from '../../helpers/hooks/use-Metrics'
import WorldMap from '../../components/worldMap/WorldMap';
import '/src/pages/home/Home.css'

const Home = ({isOpen}) => {

  
  const{userAges,userCountries,totalRevenue,userGenders,metrics}=useMetrics();
  
  
  return (
    <Container
      my={'lg'}
      mx={10}
      bg={'#25272b'}
      maw={'110rem'}
      
      sx={{
        
        top: '10px',
        height: '95%',
        position:'relative',
        left:isOpen ? '0px' : '-150px',
        transition: 'all 0.5s ease-in-out',
        width:isOpen ? '100%' : '110%',
        
        
       
      }}
    >
      <div className="background">
   <span />
   <span />
   <span />
   <span />
   <span />
   <span />
   <span />
   <span />
   <span />
   <span />
   <span />
   <span />
   
</div>
      <Grid m={10}  sx={{
        boxShadow: '15px 20px 60px -20px rgba(0,191,166,.7)',
        borderRadius: '30px',
        height: '95%',
       position:'relative',
       border: '1px solid rgba(0,191,166,0.3)',
        transition: 'all 0.5s ease-in-out',
      }}>
        <Grid.Col span={3}>
          <Skeleton height={100} animate={true} visible={false}>
            <Card>
              <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <Box
                  sx={{
                    display: 'flex',
                    paddingLeft: 10,
                    
                    
                  }}
                >
                    
                  <Text  size={22}>Registered users</Text>
                  <Text sx={{marginLeft:'auto'}}>
                    <IconUsers size={32} />
                  </Text>
                </Box>
                <Box sx={{ display: 'flex', paddingLeft: 10 }}>
                  <Text size={24}>{metrics?.users || "Loading..."} </Text>
                  
                </Box>
                
              </Box>
             
            </Card>
          </Skeleton>
        </Grid.Col>
        <Grid.Col span={3}>
          <Skeleton height={100} animate={true} visible={false}>
            <Card>
              <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <Box
                  sx={{
                    display: 'flex',
                    paddingLeft: 10,
                    
                  
                  }}
                >
                  <Text size={22}>Tickets sold</Text>
                  <Text sx={{marginLeft:'auto'}}>
                    <IconTicket size={32} />
                  </Text>
                </Box>
                <Box sx={{ display: 'flex', paddingLeft: 10 }}>
                  <Text size={24}>{metrics?.bookings || "Loading..."} </Text>
                </Box>
              </Box>
              
            </Card>
          </Skeleton>
        </Grid.Col>
        <Grid.Col span={3}>
          <Skeleton height={100} animate={true} visible={false}>
            <Card>
              <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <Box
                  sx={{
                    display: 'flex',
                    paddingLeft: 10,
                    
                    
                  }}
                >
                  <Text size={22}>Tickets available for booking</Text>
                  <Text sx={{marginLeft:'auto'}}>
                    <IconUsersPlus size={32} />
                  </Text>
                </Box>
                <Box sx={{ display: 'flex', paddingLeft: 10 }}>
                  <Text size={24}>{metrics?.tickets || "Loading..."} </Text>
                </Box>
              </Box>
              
            </Card>
          </Skeleton>
        </Grid.Col>
        <Grid.Col span={3}>
          <Skeleton height={100} animate={true} visible={false}>
            <Card>
              <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <Box
                  sx={{
                    display: 'flex',
                    paddingLeft: 10,
                    
                    
                  }}
                >
                  <Text size={22}>Revenue Total</Text>
                  <Text sx={{marginLeft:'auto'}}>
                    <IconCurrencyDollar size={32} />
                  </Text>
                </Box>
                <Box sx={{ display: 'flex', paddingLeft: 10 }}>
                  <Text size={24}>{totalRevenue?.totalRevenue || "Loading..."} </Text>
                </Box>
              </Box>
             
               
            </Card>
          </Skeleton>
        </Grid.Col>
        <Grid.Col span={5}>
          <Skeleton height={250} animate={true} visible={!userAges}>
            {!userAges && <Loader size={'xl'} sx={{zIndex:100, top:'40%', left:'45%'}} color='red' pos={'absolute'} />}
            {!userAges && <Text size={24} sx={{zIndex:100, top:'65%', left:'42%', position:'absolute'}}>Loading...</Text> }
            <Piechart title="User Age distribution" data={userAges} dataKey="quantity" nameKey="ageSpan"/>
          </Skeleton>
        </Grid.Col>
        <Grid.Col span={7}>
          <Skeleton height={525} animate={true} visible={!userCountries}>
            {!userCountries && <Loader size={100} sx={{zIndex:100, top:'40%', left:'45%'}} color='red' pos={'absolute'} />}
            {!userCountries && <Text size={24} sx={{zIndex:100, top:'60%', left:'45%', position:'absolute'}}>Loading...</Text> }
              {userCountries && <WorldMap userData={userCountries} />}
          </Skeleton>
        </Grid.Col>
        <Grid.Col span={5}>
          <Skeleton height={250} animate={true} visible={!userGenders} sx={{top:'-108%'}}>
            {!userGenders && <Loader size={'xl'} sx={{zIndex:100, top:'40%', left:'45%'}} color='red' pos={'absolute'} />}
            {!userGenders && <Text size={24} sx={{zIndex:100, top:'65%', left:'42%', position:'absolute'}}>Loading...</Text> }
            <Piechart title='User Gender Distribution' data={userGenders} dataKey="quantity" nameKey="gender"/>
          </Skeleton>
        </Grid.Col>
        <Grid.Col span={6}>
          <Skeleton height={250} animate={true} visible={false}>
            
          </Skeleton>
        </Grid.Col>
      </Grid>
    </Container>
  );
};

export default Home;

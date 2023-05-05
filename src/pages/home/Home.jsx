import { Container, Skeleton, Grid, Box, Text, Divider } from '@mantine/core';
import Card from '../../components/card/Card';
import {
  IconUsers,
  IconTicket,
  IconUsersPlus,
  IconCurrencyDollar,
} from '@tabler/icons-react';
import Demo from './test';
const Home = () => {
  return (
    <Container
      my={'lg'}
      mx={10}
      bg={'#25272b'}
      maw={1920}
      sx={{
        boxShadow: '10px 10px 18px -6px rgba(0,191,166,.7)',
        border: '1px solid rgba(0,191,166,0.3)',
        height: '55rem',
        position: 'relative',
      }}
    >
      <Grid m={10}>
        <Grid.Col span={3}>
          <Skeleton height={100} animate={true} visible={false}>
            <Card>
              <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <Box
                  sx={{
                    display: 'flex',
                    paddingLeft: 10,
                    paddingTop: 10,
                    
                  }}
                >
                    
                  <Text  size={22}>Registered users</Text>
                  <Text sx={{marginLeft:'auto'}}>
                    <IconUsers size={32} />
                  </Text>
                </Box>
                <Box sx={{ display: 'flex', paddingLeft: 10 }}>
                  <Text size={24}>1000 </Text>
                  
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
                    paddingTop: 10,
                  
                  }}
                >
                  <Text size={22}>Tickets sold</Text>
                  <Text sx={{marginLeft:'auto'}}>
                    <IconTicket size={32} />
                  </Text>
                </Box>
                <Box sx={{ display: 'flex', paddingLeft: 10 }}>
                  <Text size={24}>1000 </Text>
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
                    paddingTop: 10,
                    
                  }}
                >
                  <Text size={22}>New Users This Week</Text>
                  <Text sx={{marginLeft:'auto'}}>
                    <IconUsersPlus size={32} />
                  </Text>
                </Box>
                <Box sx={{ display: 'flex', paddingLeft: 10 }}>
                  <Text size={24}>1000 </Text>
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
                    paddingTop: 10,
                    
                  }}
                >
                  <Text size={22}>Revenue Total</Text>
                  <Text sx={{marginLeft:'auto'}}>
                    <IconCurrencyDollar size={32} />
                  </Text>
                </Box>
                <Box sx={{ display: 'flex', paddingLeft: 10 }}>
                  <Text size={24}>1000 </Text>
                </Box>
              </Box>
             
               
            </Card>
          </Skeleton>
        </Grid.Col>
        <Grid.Col span={6}>
          <Skeleton height={250} animate={true} visible={false}>
                    
          </Skeleton>
        </Grid.Col>
        <Grid.Col span={6}>
          <Skeleton height={250} animate={true}>

          </Skeleton>
        </Grid.Col>
        <Grid.Col span={6}>
          <Skeleton height={250} animate={true}>

          </Skeleton>
        </Grid.Col>
        <Grid.Col span={6}>
          <Skeleton height={250} animate={true}>

          </Skeleton>
        </Grid.Col>
      </Grid>
    </Container>
  );
};

export default Home;

import {
  Box,
  Container,
 
 
  Title,
  
  TextInput,
  Button,
  Text,
  createStyles,
  SegmentedControl,
  Tooltip,
} from '@mantine/core';
import { DataTable } from 'mantine-datatable';

import { useState, useEffect } from 'react';
import { IconSearch } from '@tabler/icons-react';
import useMetrics from '../../helpers/hooks/use-Metrics';

const useStyles = createStyles((theme) => ({
  root: {
    fontWeight: 700,
    width: '100%',
    borderRadius: '16px',
    
    
    '&& tbody tr': {
      backdropFilter: 'blur(10.9px)',
      background: 'rgba(0,191,166,0.05)',

      '&:hover': {
        background: 'rgba(0,191,166,0.1)',
      },
    },
    '&& thead tr': {
      backdropFilter: 'blur(10.9px)',
      background: 'none !important',
    },
    '&& thead': {
      background: 'rgba(0,191,166,0.05)',
    },
  },

  pagination: {
    color: 'rgba(0,191,166,1)',
    background: 'rgba(0,191,166,0.05)',
    'button[data-active="true"]': {
      background: 'rgba(0,191,166,0.70)',
    },
    'button[data-active="true"]:not([data-disabled="true"]):hover': {
      background: 'rgba(0,191,166,0.80)',
    },
  },
  textInput: {
    background: 'none !important',
    '& .mantine-TextInput-input': {
      background: 'rgba(0,191,166,0.05)',
      boxShadow: '3px 4px 8px 0px rgba(0,191,166,0.1)',
      border: '1px solid rgba(0,191,166,0.3)',
    },
    color: theme.colors.orange[6],
    root: {
      boxShadow: '3px 4px 8px 0px rgba(0,191,166,0.3)',
    },
  },
}));
const Revenue = ({ isOpen }) => {
  const { classes } = useStyles();
  const { revenuePerTicket, revenuePerUser, loading } = useMetrics();
  

  const PAGE_SIZE = 15;
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [totalUsers, setTotalUsers] = useState(revenuePerUser);
  const[totalTickets, setTotalTickets] = useState(revenuePerTicket);
  const [recordsPerTicket, setRecordsPerTicket] = useState(revenuePerTicket);
  const [recordsPerUser, setRecordsPerUser] = useState(revenuePerUser);
    const[querySelect, setQuerySelect] = useState('Per User')
  const [filteredRecords, setFilteredRecords] = useState([]);

  useEffect(() => {
    setPage(1);
    
  
    
    if(querySelect === 'Per Ticket') {
        setFilteredRecords(revenuePerTicket?.filter(({ ticketName }) => {
        return query === '' || `${ticketName}`.toLowerCase().includes(query.toLowerCase());
      }));
    } else {
        setFilteredRecords( revenuePerUser?.filter(({ email }) => {
        return query === '' || `${email}`.toLowerCase().includes(query.toLowerCase());
      }));
    }
    
   

    if(query !== '' && querySelect === 'Per User'){
      setTotalUsers(filteredRecords);
      setRecordsPerUser(filteredRecords);
    } else if(query !== '' && querySelect === 'Per Ticket'){
      setTotalTickets(filteredRecords);
      setRecordsPerTicket(filteredRecords);
    } else {
      setTotalUsers(revenuePerUser);
      setRecordsPerUser(revenuePerUser);
      setTotalTickets(revenuePerTicket);
      setRecordsPerTicket(revenuePerTicket);
    }

  }, [query, querySelect, revenuePerTicket, revenuePerUser]);
  useEffect(() => {
    const from = (page - 1) * PAGE_SIZE;
    const to = from + PAGE_SIZE;
    setRecordsPerTicket(revenuePerTicket?.slice(from, to));
  }, [page]);

  return (
    <Container
      my={'lg'}
      mx={10}
      maw={'110rem'}
      sx={{
        boxShadow: '15px 20px 60px -20px rgba(0,191,166,.7)',
        borderRadius: '30px',
        border: '1px solid rgba(0,191,166,0.3)',
        top: '10px',
        position: 'relative',
        backdropFilter: 'blur(10.9px)',
        left: isOpen ? '0px' : '-150px',
        transition: 'all 0.5s ease-in-out',
        width: isOpen ? '99%' : '110%',
        height:'90%'
      }}
    >
      <Title
        color='rgba(0,191,166,0.8)'
        size={50}
        display={'flex'}
        sx={{ justifyContent: 'center' }}
      >
        Revenue
      </Title>
      <Tooltip
        label='Select search type'
        withArrow
        position="right" transitionProps={{duration:300,transition:'scale-y' }} openDelay={200} sx={{fontWeight:600, border:'1px solid green'}} color="#272640"
        
      >
      <SegmentedControl
       data={[{value:'Per Ticket', label:'Per Ticket'},{value:'Per User', label:'Per User'}]}
         value={querySelect}
        onChange={(value) => {setQuerySelect(value), setQuery(''), setFilteredRecords([])}}
        radius="lg"
            sx={{color:'rgba(0,191,166,0.8)', background:'rgba(0,191,166,0.05)', border:'1px solid rgba(0,191,166,0.3)', boxShadow:'3px 4px 8px 0px rgba(0,191,166,0.1)'}}
            color={'cyan'}            
            opacity={0.8}
            transitionDuration={500}
        transitionTimingFunction="linear"
        
       />
       </Tooltip>
      <Box mb='md' mt={20} display='flex'>
        <TextInput
          className={classes.textInput}
          sx={{
            flex: '1',
            borderRadius: 6,
          }}
          placeholder={querySelect === 'Per User' ? 'Search Per User...' : 'Search Per Ticket...'} 
          icon={<IconSearch size={16} />}
          value={query}
          onChange={(e) => setQuery(e.currentTarget.value)}
        />
        
        
        
      </Box>
      <Box display={'flex'} sx={{justifyContent:'space-around', fontSize:22, fontWeight:600, color:'rgba(0,191,166,0.8)'}}>
      <Text>Revenue Per Ticket</Text>
      <Text>Revenue Per User</Text>
      </Box>
      <Box display={'flex'} sx={{ justifyContent: 'center', flexGrow: 1 }}>
        <RevenuePerTicket
          classes={classes}
          recordsPerTicket={recordsPerTicket}
          total={totalTickets}
          length={length}
          PAGE_SIZE={PAGE_SIZE}
          page={page}
          loading={loading}
          setPage={setPage}
        />
        <RevenuePerUser
          classes={classes}
          recordsPerUser={recordsPerUser}
          total={totalUsers}
          length={length}
          PAGE_SIZE={PAGE_SIZE}
          page={page}
          loading={loading}
          setPage={setPage}
        />
      </Box>
    </Container>
  );
};

export default Revenue;

function RevenuePerTicket({
  classes,
  recordsPerTicket,
  total,
  PAGE_SIZE,
  page,
  loading,
  setPage,
}) {
  return (
    <DataTable
      classNames={classes}
      withBorder
      rowBorderColor={'rgba(0,191,166,0.1)'}
      borderColor={'rgba(0,191,166,0.2)'}
      records={recordsPerTicket}
      totalRecords={total?.length}
      recordsPerPage={PAGE_SIZE}
      page={page}
      fetching={loading}
      height={490}
      loaderVariant='dots'
      highlightOnHover
      fontSize={14}
      onPageChange={(newPage) => setPage(newPage)}
      idAccessor='ticketName'
      columns={[
        {
          accessor: 'ticketName',
          title: 'Ticket Name',

          textAlignment: 'left',
        },
        {
          accessor: 'revenue',
          title: 'Total Revenue',

          textAlignment: 'left',
        },
      ]}
    />
  );
}

function RevenuePerUser({
  classes,
  recordsPerUser,
  total,
  PAGE_SIZE,
  page,
  loading,
  setPage,
}) {
  return (
    <DataTable
      classNames={classes}
      withBorder
      rowBorderColor={'rgba(0,191,166,0.1)'}
      borderColor={'rgba(0,191,166,0.2)'}
      records={recordsPerUser}
      totalRecords={total?.length}
      recordsPerPage={PAGE_SIZE}
      page={page}
      fetching={loading}
      height={490}
      loaderVariant='dots'
      highlightOnHover
      fontSize={14}
      onPageChange={(newPage) => setPage(newPage)}
      idAccessor='email'
      columns={[
        {
          accessor: 'email',
          title: 'Email',

          textAlignment: 'left',
        },
        {
          accessor: 'revenue',
          title: 'Total Revenue',

          textAlignment: 'left',
        },
      ]}
    />
  );
}

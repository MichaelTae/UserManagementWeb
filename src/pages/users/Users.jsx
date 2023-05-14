import {
  Box,
  Container,
  Group,
  Stack,
  Title,
  Text,
  TextInput,
  Button,
  Badge,
  createStyles
} from '@mantine/core';
import { DataTable } from 'mantine-datatable';
import useUsers from '../../helpers/hooks/use-users';
import { useState, useEffect } from 'react';
import { IconSearch } from '@tabler/icons-react';
import CreateUserModal from './CreateUserModal';
import { useDisclosure } from '@mantine/hooks';
import UpdateUserModal from './UpdateUserModal';


const useStyles = createStyles((theme) => ({
    
    root: {
        fontWeight: 700,
    
        '&& tbody tr':{
            
            backdropFilter: 'blur(10.9px)',
        background:'rgba(0,191,166,0.05)',
        
          '&:hover': {
            background: 'rgba(0,191,166,0.1)',
          },
        },
        '&& thead tr':{
            backdropFilter: 'blur(10.9px)',
            background:'none !important'
           
            
        },
        '&& thead':{
            background:'rgba(0,191,166,0.05)',
        },
       

    },
    
    pagination: {
      color: 'rgba(0,191,166,1)',
      background:'rgba(0,191,166,0.05)',
      'button[data-active="true"]': {
        background:'rgba(0,191,166,0.70)',
      },
      'button[data-active="true"]:not([data-disabled="true"]):hover': {
        background: 'rgba(0,191,166,0.80)',
      },
      
    },
    textInput:{
        background:'none !important' ,
        '& .mantine-TextInput-input':{
            background:'rgba(0,191,166,0.05)' ,
            boxShadow: '3px 4px 8px 0px rgba(0,191,166,0.1)',
            border: '1px solid rgba(0,191,166,0.3)',
        },
        color: theme.colors.orange[6],
        root:{
            
            boxShadow: '3px 4px 8px 0px rgba(0,191,166,0.3)',
        }
    }
    
  }));
const Users = ({isOpen}) => {
    const { classes } = useStyles();
  const { users, loading } = useUsers();
  const [opened, { open, close }] = useDisclosure(false);
  const [opened2, { open: open2, close: close2 }] = useDisclosure(false);

  const PAGE_SIZE = 15;
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(users);
  const [records, setRecords] = useState(users);
  
  const [filteredRecords, setFilteredRecords] = useState([]);
  const [userId, setUserId] = useState();

  useEffect(() => {
    setPage(1);
    if (query !== '') {
      setTotal(filteredRecords);
      setRecords(filteredRecords);
    } else {
      setTotal(users);
      setRecords(users);
    }
    

    setFilteredRecords(
      users?.filter(({ userId, email, country, firstName, username }) => {
        if (
          query !== '' &&
          !`${userId} ${email} ${country} ${firstName} ${username}`
            .toLowerCase()
            .includes(query.toLowerCase())
        ) {
          return false;
        }
        return true;
      })
    );
  }, [query, users]);
  useEffect(() => {
    const from = (page - 1) * PAGE_SIZE;
    const to = from + PAGE_SIZE;
    setRecords(users?.slice(from, to));
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
        height: '90%',
        position: 'relative',
        backdropFilter: 'blur(10.9px)',
        left:isOpen ? '0px' : '-150px',
        transition: 'all 0.5s ease-in-out',
        width:isOpen ? '99%' : '110%',
      }}
    >
      <Title color='rgba(0,191,166,0.8)' size={50} display={'flex'} sx={{justifyContent:'center'}}>Users</Title>
      <Box mb='md' mt={20} display='flex'>
        <TextInput
        className={classes.textInput}
          sx={{
            flex: '1',
            borderRadius: 6,
            
          }}
          placeholder='Search Users...'
          icon={<IconSearch size={16} />}
          value={query}
          onChange={(e) => setQuery(e.currentTarget.value)}
        />
        <Button
          type='button'
          onClick={() => {
            open();
          }}
          variant='outline'
          sx={{
            border: '1px solid rgba(0,191,166,0.3)',
            flex: '0 0 20px',
            marginLeft: '10px',
            color: '#b4ece5',
            
            
            '&:hover': {
                color: '#fff',
            },
            boxShadow: '3px 4px 8px 0px rgba(0,191,166,0.2)',
          }}
        >
          Add User
        </Button>
        <CreateUserModal opened={opened} onClose={close} />
        <UpdateUserModal userId={userId} opened={opened2} onClose={close2} />
      </Box>
      <Box>
        <DataTable
         classNames={classes}
          withBorder
          rowBorderColor={'rgba(0,191,166,0.1)'}
          borderColor={'rgba(0,191,166,0.2)'}
          records={records}
          totalRecords={total?.length}
          recordsPerPage={PAGE_SIZE}
          page={page}
          fetching={loading}
          height={590}
          loaderVariant='dots'
          highlightOnHover
          fontSize={14}
          
          onPageChange={(newPage) => setPage(newPage)}
          rowExpansion={{
            collapseProps: {
              transitionDuration: 250,
              transitionTimingFunction: 'ease-out',
            },
            content: ({ record }) => (
              <Stack p='xs' spacing={6}>
                <Group>
                  <Text fw={700}>Zip Code:</Text>
                  <Text>{record.zipcode}</Text>
                </Group>
                <Group>
                  <Text fw={700}>Address:</Text>
                  <Text>{record.address}</Text>
                </Group>
                <Group>
                  <Text fw={700}>State:</Text>
                  <Text>{record.state}</Text>
                </Group>
                <Group>
                  <Text fw={700}>Country:</Text>
                  <Text>{record.country}</Text>
                </Group>
              </Stack>
            ),
          }}
          idAccessor='userId'
          columns={[
            { accessor: 'userId', title: 'User Id', align: 'center' },
            { accessor: 'firstName', align: 'center' },
            { accessor: 'surname', align: 'center' },
            { accessor: 'username', align: 'center' },
            { accessor: 'email', align: 'center' },
            {
              accessor: 'Profile',
              title: 'Profile',
              align: 'center',
              render: (record) =>
                record.firstName === null || '' ? (
                  <Badge color={'red'} variant='outline'>
                    Not Complete
                  </Badge>
                ) : (
                  <Badge variant='outline' color={'green'}>
                    Complete
                  </Badge>
                ),
            },
            {
              accessor: 'edit',
              title: 'Edit',
              align: 'center',
              render: (record) => (
                <Button
                  variant='outline'
                  color='blue'
                  onClick={() => {
                    setUserId(record.userId), open2();
                  }}
                >
                  Edit
                </Button>
              ),
            },
          ]}
        />
      </Box>
    </Container>
  );
};

export default Users;

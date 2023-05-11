
import { useState } from 'react';
import { Modal, Group, TextInput, Stack, Button,Autocomplete } from '@mantine/core';
import { CreateNewUser } from '../../helpers/api/routes';
import { showNotification } from '@mantine/notifications';

const CreateUserModal = ({opened, onClose}) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [value, setValue] = useState('');
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    
    const data =
      value.trim().length > 0 && !value.includes('@')
        ? ['gmail.com', 'outlook.com', 'yahoo.com', 'hotmail.com'].map((provider) => `${value}@${provider}`)
        : [];
    const onSubmit = async () => {
        
        if (!username || !password || !email) {
            setError('All fields are required');
            return;
        }

       
        const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
        if (!emailRegex.test(email)) {
            setError('Invalid email format');
            return;
        }

        setError('');

        const user = { username, password, email };
        try {
            await CreateNewUser(user);
            setUsername('');
            setPassword('');
            setEmail('');
            onClose();  
            showNotification({
                title: 'User Created',
                message: 'User Created Successfully',
                color: 'green',
                autoClose: 5000,
                icon: null,
                disallowClose: false,
                position: 'top-right',
                

            })    
        } catch (err) {
            
            setError('Error creating user');
        }
    };

    return(
        <Modal opened={opened} onClose={onClose} title="Add User">
            <Stack>
                <TextInput 
                    label="Username" 
                    placeholder="Username" 
                    required
                    value={username}
                    onChange={event => setUsername(event.currentTarget.value)}
                />
                <TextInput 
                    label="Password" 
                    placeholder="Password" 
                    required
                    value={password}
                    onChange={event => setPassword(event.currentTarget.value)}
                />
                    <Autocomplete
                    value={value}
                    onChange={(val) => { setValue(val); setEmail(val); }}
                    label="Email"
                    placeholder="Start typing to see options"
                    data={data}
                    />
            </Stack>
            {error && <div style={{ color: 'red' }}>{error}</div>}
            <Group position="center" p={10}>
                <Button variant="outline" color='green' onClick={onSubmit} w={100}>Add User</Button>
                <Button variant="outline" color='green' w={100} onClick={onClose}>
                    Cancel
                </Button>
            </Group>
        </Modal>
    )
};

export default CreateUserModal;


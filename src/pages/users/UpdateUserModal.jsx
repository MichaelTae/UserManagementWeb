import { useState } from 'react';
import { Modal, Group, TextInput, Stack, Button,Autocomplete, em } from '@mantine/core';
import { UpdateUser } from '../../helpers/api/routes';
import { showNotification } from '@mantine/notifications';

const UpdateUserModal = ({opened, onClose,userId}) => {
    
    
    const [firstName, setFirstName] = useState('');
    const [surname, setSurName] = useState('');
    const [address, setAddress] = useState('');
    const [zipcode, setZipCode] = useState('');
    const [state, setState] = useState('');
    const [country, setCountry] = useState('');
    const [gender, setGender] = useState('');
    const [age, setAge] = useState(0);
    
    const [error, setError] = useState('');
    
    const onSubmit = async () => {
        
        if (!firstName || !surname || !address|| !zipcode || !state|| !country || !gender|| !age) {
            setError('All fields are required');
            return;
        }

       

        setError('');

        const user = { firstName, surname, address,zipcode,state,country,gender,age };
        try {
            await UpdateUser(userId,user);
            setFirstName('');
            setSurName('');
            setAddress('');
            setZipCode('');
            setState('');
            setCountry('');
            setGender('');
            setAge(0);


            onClose();  
            showNotification({
                title: 'User Updated',
                message: 'User Updated Successfully',
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
        <Modal opened={opened} onClose={onClose} title="Update User">
            <Stack>
                <TextInput 
                    label="firstName" 
                    placeholder="firstName" 
                    required
                    value={firstName}
                    onChange={event => setFirstName(event.currentTarget.value)}
                />
                <TextInput 
                    label="surname" 
                    placeholder="surname" 
                    required
                    value={surname}
                    onChange={event => setSurName(event.currentTarget.value)}
                />
                 <TextInput 
                    label="address" 
                    placeholder="address" 
                    required
                    value={address}
                    onChange={event => setAddress(event.currentTarget.value)}
                />
               
                 <TextInput 
                    label="zipcode" 
                    placeholder="zipcode" 
                    required
                    value={zipcode}
                    onChange={event => setZipCode(event.currentTarget.value)}
                />
                <TextInput 
                    label="state" 
                    placeholder="state" 
                    required
                    value={state}
                    onChange={event => setState(event.currentTarget.value)}
                />
                 <TextInput 
                    label="country" 
                    placeholder="country" 
                    required
                    value={country}
                    onChange={event => setCountry(event.currentTarget.value)}
                />
                <TextInput 
                    label="gender" 
                    placeholder="gender" 
                    required
                    value={gender}
                    onChange={event => setGender(event.currentTarget.value)}
                />
                 <TextInput 
                    label="age" 
                    placeholder="age" 
                    required
                    value={age}
                    onChange={event => setAge(event.currentTarget.value)}
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

export default UpdateUserModal;


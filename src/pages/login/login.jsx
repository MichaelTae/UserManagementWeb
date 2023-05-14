import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  TextInput,
  PasswordInput,
  Paper,
  Title,
  Container,
  Button,
} from '@mantine/core';

const Login = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const authCheck = (userName, Password) => {
    return userName === 'admin' && Password === 'admin';
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const isAuthenticated = authCheck(username, password);

    if (isAuthenticated) {
      localStorage.setItem('auth', true);

      navigate('/');
    } else {
      alert('Invalid username or password.');
    }
  };

  return (
    <Container size={620} my={40} sx={{ zIndex: 200, position: 'relative', right:100, top:10 }}>
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
      <form onSubmit={handleSubmit}>
        <Title
          align='center'
          sx={(theme) => ({
            fontFamily: `Greycliff CF, ${theme.fontFamily}`,
            fontWeight: 900,position: 'relative'
          })}
        >
          Welcome back!
        </Title>

        <Paper withBorder shadow='md' p={30} mt={30} radius='md' bg={'none'} sx={{  position: 'relative' }}>
          <TextInput
            label='Username'
            placeholder='Username'
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <PasswordInput
            label='Password'
            placeholder='Your password'
            required
            mt='md'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button
            type='submit'
            sx={{
              color: 'rgba(0,191,166,0.8)',
              background: 'rgba(0,191,166,0.05)',
              border: '1px solid rgba(0,191,166,0.3)',
              boxShadow: '3px 4px 8px 0px rgba(0,191,166,0.1)',
            }}
            fullWidth
            mt='xl'
          >
            Sign in
          </Button>
        </Paper>
      </form>
    </Container>
  );
};

export default Login;

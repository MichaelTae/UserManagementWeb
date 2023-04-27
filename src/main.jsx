import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { MantineProvider,ColorSchemeProvider } from '@mantine/core';
import { Notifications } from '@mantine/notifications';
const queryClient = new QueryClient();

function Root () {
  const [colorScheme, setColorScheme] = useState('dark');
  const toggleColorScheme = () => {
    setColorScheme(colorScheme === 'light' ? 'dark' : 'light');
  }
  return (
    <React.StrictMode>
      <ColorSchemeProvider>
      <MantineProvider withGlobalStyles={true} withNormalizeCSS={true} theme={{
						colorScheme: colorScheme,
						colors: {
							brand: [
								'#065a60',
								'#0b525b',
								'#144552',
								'#1b3a4b',
								'#212f45',
								'#272640',
								'#312244',
								'#3e1f47',
								'#4d194d',
								
							]
						},
            primaryColor: 'brand'}}>
    <QueryClientProvider client={queryClient}>
    <Notifications/>
						<App />
		
      <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
      </MantineProvider>
      </ColorSchemeProvider>
    </React.StrictMode>
  );
  
}



ReactDOM.createRoot(document.getElementById('root')).render(<Root />);
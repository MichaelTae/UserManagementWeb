import { useQuery } from '@tanstack/react-query';
import { getAllUsers } from '../api/routes';
import { useEffect, useState } from 'react';

const useUsers = () => {
    const [loading, setLoading] = useState(false);
    const {data: users, isLoading: loadingUsers} = useQuery(['users'], getAllUsers);

    useEffect(() => {
        if(loadingUsers) setLoading(true);
        else setLoading(false);
    }, [loadingUsers]);

    return {users, loading};
};

export default useUsers;
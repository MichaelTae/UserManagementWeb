import { useQuery } from '@tanstack/react-query';
import { getUserAges } from '../api/routes';
import { useEffect, useState } from 'react';

const useUsers = () => {
    const [loading, setLoading] = useState(false);
    const {data: userAges, isLoading: loadingUserAges} = useQuery(['age'], getUserAges);

    useEffect(() => {
        if(loadingUserAges) setLoading(true);
        else setLoading(false);
    }, [loadingUserAges]);

    return {userAges, loading};
};

export default useUsers;
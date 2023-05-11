import { useQuery } from '@tanstack/react-query';
import { getUserAges,getUserCountries,getTotalRevenue,getUserGenders,getMetrics } from '../api/routes';
import { useEffect, useState } from 'react';

const useUsers = () => {
    const [loading, setLoading] = useState(false);
    const {data: userAges, isLoading: loadingUserAges} = useQuery(['age'], getUserAges);
    const {data: userCountries, isLoading: loadingUserCountries} = useQuery(['country'], getUserCountries);
    const {data: totalRevenue, isLoading: loadingTotalRevenue} = useQuery(['revenue'], getTotalRevenue);
    const {data: userGenders, isLoading: loadingUserGenders} = useQuery(['gender'], getUserGenders);
    const {data:metrics , isLoading: loadingMetrics} = useQuery(['metrics'], getMetrics);
    
   
    useEffect(() => {
        if(loadingUserAges|| loadingUserCountries||loadingTotalRevenue||loadingUserGenders||loadingMetrics) setLoading(true);
        else setLoading(false);
    }, [loadingUserAges, loadingUserCountries]);

    return {userAges,userCountries,totalRevenue,userGenders,metrics,loading};
};

export default useUsers;
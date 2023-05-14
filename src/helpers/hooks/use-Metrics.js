import { useQuery } from '@tanstack/react-query';
import {
  getUserAges,
  getUserCountries,
  getTotalRevenue,
  getUserGenders,
  getMetrics,
  getRevenuePerTicket,
  getRevenuePerUser,
} from '../api/routes';
import { useEffect, useState } from 'react';

const useMetrics = () => {
  const [loading, setLoading] = useState(false);
  const { data: userAges, isLoading: loadingUserAges } = useQuery(
    ['age'],
    getUserAges
  );
  const { data: userCountries, isLoading: loadingUserCountries } = useQuery(
    ['country'],
    getUserCountries
  );
  const { data: totalRevenue, isLoading: loadingTotalRevenue } = useQuery(
    ['revenue'],
    getTotalRevenue
  );
  const { data: userGenders, isLoading: loadingUserGenders } = useQuery(
    ['gender'],
    getUserGenders
  );
  const { data: metrics, isLoading: loadingMetrics } = useQuery(
    ['metrics'],
    getMetrics
  );
  const { data: revenuePerUser, isLoading: loadingRevenuePerUser } = useQuery(
    ['revenuePerUser'],
    getRevenuePerUser
  );
  const { data: revenuePerTicket, isLoading: loadingRevenuePerTicket } =
    useQuery(['revenuePerTicket'], getRevenuePerTicket);

  useEffect(() => {
    if (
      loadingUserAges ||
      loadingUserCountries ||
      loadingTotalRevenue ||
      loadingUserGenders ||
      loadingMetrics ||
      loadingRevenuePerUser ||
      loadingRevenuePerTicket
    )
      setLoading(true);
    else setLoading(false);
  }, [loadingUserAges, loadingUserCountries]);

  return {
    userAges,
    userCountries,
    totalRevenue,
    userGenders,
    metrics,
    revenuePerUser,
    revenuePerTicket,
    loading,
  };
};

export default useMetrics;

import { getEpisodes } from '@/app/utils';
import { useState, useEffect } from 'react';

const useEpisodes = () => {
  const [episodes, setEpisodes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEpisodes = async () => {
      const res = await getEpisodes();
      setEpisodes(res);
      setLoading(false);
    };

    fetchEpisodes();
  }, []);

  return { episodes, loading };
};

export default useEpisodes;

"use client";
import useSWR from 'swr';

const fetcher = url => fetch(url).then(res => res.json());

export default function useEpisodes() {
  const { data, error, isLoading } = useSWR('/api/buzzsprout', fetcher, {
    dedupingInterval: 10 * 60 * 1000 // 10 minutes
  });

  return {
    episodes: data?.episodes || [],
    loading: isLoading,
    error,
  };
}

export function useFirstEpisode() {
  const { episodes, loading } = useEpisodes();
  return {
    firstEpisode: episodes.length > 0 ? episodes[0] : null,
    loading,
  };
}

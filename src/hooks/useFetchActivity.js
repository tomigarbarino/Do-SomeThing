import { useState, useEffect, useCallback } from 'react';

const useFetchActivity = (typeFilter, participantsFilter) => {
    const [currentActivity, setCurrentActivity] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const fetchActivity = useCallback(async (type, participants) => {
        setIsLoading(true);
        setError(null);

        const url = new URL('https://www.boredapi.com/api/activity/');
        if (type) url.searchParams.append('type', type);
        if (participants) url.searchParams.append('participants', participants);

        try {
            const response = await fetch(url.toString());
            const data = await response.json();
            if (data.activity) {
                setCurrentActivity(data);
            } else {
                setError('No activity found');
            }
        } catch (err) {
            setError(err.message);
        } finally {
            setIsLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchActivity(typeFilter, participantsFilter);
    }, [typeFilter, participantsFilter, fetchActivity]);

    return { currentActivity, fetchActivity, error, isLoading };
};

export default useFetchActivity;
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../context/AppContext.jsx';

export const useProtectedRoute = () => {
    const { isAuthenticated } = useAppContext();
    const navigate = useNavigate();

    useEffect(() => {
        if (!isAuthenticated) {
            navigate('/', { replace: true });
        }
    }, [isAuthenticated, navigate]);
};
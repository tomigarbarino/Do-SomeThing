import { useAppContext } from '../context/AppContext.jsx';
import { useNavigate } from 'react-router-dom';

export const useAuth = () => {
    const navigate = useNavigate();
    const { setCurrentUser } = useAppContext();

    const authenticate = (values) => {
        try {
            const users = JSON.parse(localStorage.getItem('users')) || [];
            const storedUser = users.find((user) => user.email === values.email);
            if (storedUser && storedUser.password === values.password) {
                setCurrentUser(storedUser);
                navigate('/home');
                return true;
            }
        } catch (error) {
            console.error("Error during authentication:", error);
        }
        return false;
    };

    return { authenticate };
};
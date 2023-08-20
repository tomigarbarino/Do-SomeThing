import React, { createContext, useState, useContext, useEffect } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [users, setUsers] = useState(JSON.parse(localStorage.getItem('users')) || []);
    const [currentUser, setCurrentUser] = useState(null);
    const [activities, setActivities] = useState([]);
    const isAuthenticated = !!currentUser;

    useEffect(() => {
        if (currentUser) {
            const storedActivities = JSON.parse(localStorage.getItem(`activities-${currentUser.email}`)) || [];
            setActivities(storedActivities);
        }
    }, [currentUser]);

    const addUser = (user) => {
        const updatedUsers = [...users, user];
        setUsers(updatedUsers);
        localStorage.setItem('users', JSON.stringify(updatedUsers));
    };

    const findUserByEmail = (email) => {
        return users.find((user) => user.email === email);
    };

    const handleActivitiesChange = (newActivities) => {
        setActivities(newActivities);
        if (currentUser) {
            localStorage.setItem(`activities-${currentUser.email}`, JSON.stringify(newActivities));
        }
    };

    return (
        <AppContext.Provider value={{ users, currentUser, setCurrentUser, isAuthenticated, addUser, findUserByEmail, activities, setActivities: handleActivitiesChange }}>
            {children}
        </AppContext.Provider>
    );
};

export const useAppContext = () => useContext(AppContext);
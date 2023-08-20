import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../../context/AppContext.jsx';
import { useProtectedRoute } from '../../hooks/useProtectedRoute';
import ActivityCard from '../../components/ActivityCard/ActivityCard';
import EmptyMessage from '../../components/EmptyMessage';
import NavBar from '../../components/NavBar/NavBar.jsx';
import './styles/ActivitiesToDo.css';

const ActivitiesToDo = () => {
    useProtectedRoute();
    const { activities, setActivities } = useAppContext();
    const navigate = useNavigate();

    const deleteActivity = (index) => {
        const newActivities = [...activities];
        newActivities.splice(index, 1);
        setActivities(newActivities);
    };

    const markAsDone = (index) => {
        const newActivities = [...activities];
        newActivities[index].done = !newActivities[index].done;
        setActivities(newActivities);
    };

    return (
        <>
            <NavBar />
            <div className="d-flex justify-content-center align-items-center vh-100">
                <div className="container p-5 rounded shadow-lg card bg-white activities-container">
                    <button className="btn btn-link text-secondary back-button" aria-label="Back to Home" onClick={() => navigate('/home')}>
                        <i className="fas fa-arrow-left"></i>
                    </button>
                    <h1 className="text-secondary text-center">Activities to Do</h1>
                    {activities.length === 0 ? (
                        <EmptyMessage message="No activities added yet. Go back to Home to add some!" />
                    ) : (
                        <div className="row">
                            {activities.map((activity, index) => (
                                <ActivityCard
                                    key={index}
                                    activity={activity}
                                    deleteActivity={() => deleteActivity(index)}
                                    markAsDone={() => markAsDone(index)}
                                    done={activity.done}
                                />
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default ActivitiesToDo;
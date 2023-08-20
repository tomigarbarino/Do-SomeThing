import React, { useEffect, useState } from 'react';
import { useAppContext } from '../../context/AppContext.jsx';
import { useNavigate } from 'react-router-dom';
import { useProtectedRoute } from '../../hooks/useProtectedRoute';
import useFetchActivity from '../../hooks/useFetchActivity';
import NavBar from '../../components/NavBar/NavBar.jsx';
import DuplicateModal from '../../components/DuplicateModal/DuplicateModal.jsx';
import ActionButtons from '../../components/ActionButtons.jsx';
import CurrentActivity from '../../components/CurrentActivity.jsx';
import {ACTIVITY_ICONS} from '../../utils/activityConstants';
import './styles/home.css'
import ActivityFilter from '../../components/ActivityFilter.jsx';

const Home = () => {
    useProtectedRoute();
    const { currentUser, activities, setActivities } = useAppContext();
    const [typeFilter, setTypeFilter] = useState('');
    const [participantsFilter, setParticipantsFilter] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const { currentActivity, fetchActivity, error, isLoading } = useFetchActivity(typeFilter, participantsFilter);
    const navigate = useNavigate();

    useEffect(() => {
        fetchActivity(typeFilter, participantsFilter);
    }, [typeFilter, participantsFilter, fetchActivity]);

    useEffect(() => {
        if (showSuccessMessage) {
            const timer = setTimeout(() => {
                setShowSuccessMessage(false);
            }, 2000);
            return () => clearTimeout(timer);
        }
    }, [showSuccessMessage]);

    const getActivityIcon = (type) => {
        return ACTIVITY_ICONS[type] || '🎉';
    };

    const addToList = () => {
        const isDuplicate = activities.some(activity => activity.activity === currentActivity.activity);
        if (isDuplicate) {
            setShowModal(true);
        } else {
            setActivities([...activities, currentActivity]);
            setShowSuccessMessage(true);
        }
    };

    const confirmDuplicate = () => {
        setActivities([...activities, currentActivity]);
        setShowModal(false);
    };

    return (
        <>
            <NavBar />
            <div className="d-flex justify-content-center align-items-center vh-100">
                <div className="container p-5 rounded shadow-lg bg-white container-max-width mt-5 text-center">
                    <h1 className="mb-4 text-secondary">Welcome, {currentUser?.name}!</h1>
                    <p>We believe in celebrating every stage of life. <br />Whether you're <span className="age-highlight">{currentUser?.age}</span> or any other age, <br />there's always something new and exciting to explore!</p>
                    {showSuccessMessage && (
                        <div className="alert alert-success" role="alert">
                            Activity added to the list!
                        </div>
                    )}
                    <div className="row">
                        <ActivityFilter
                            typeFilter={typeFilter}
                            setTypeFilter={setTypeFilter}
                            participantsFilter={participantsFilter}
                            setParticipantsFilter={setParticipantsFilter}
                        />
                        <CurrentActivity
                            currentActivity={currentActivity}
                            isLoading={isLoading}
                            error={error}
                            getActivityIcon={getActivityIcon}
                        />
                    </div>
                    <ActionButtons fetchActivity={() => fetchActivity(typeFilter, participantsFilter)} addToList={addToList} navigate={navigate} />
                    <DuplicateModal showModal={showModal} setShowModal={setShowModal} confirmDuplicate={confirmDuplicate} />
                </div>
            </div>
        </>
    );
};

export default Home;
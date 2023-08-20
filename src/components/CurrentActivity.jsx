import React from 'react';

const CurrentActivity = ({ currentActivity, isLoading, error, getActivityIcon }) => (
    <div className="col-md-6">
        {isLoading ? (
            <div className="text-info">Loading...</div>
        ) : error ? (
            <div className="alert alert-danger" role="alert">Error: {error}</div>
        ) : (
            <div className="mb-3 p-3 rounded shadow bg-light">
                <h3 className="text-secondary">Current Activity: {getActivityIcon(currentActivity?.type)}</h3>
                <p className="fw-bold">{currentActivity?.activity}</p>
                <p>Type: <span className="text-info">{currentActivity?.type}</span></p>
                <p>Participants: <span className="text-info">{currentActivity?.participants}</span></p>
            </div>
        )}
    </div>
);

export default CurrentActivity;
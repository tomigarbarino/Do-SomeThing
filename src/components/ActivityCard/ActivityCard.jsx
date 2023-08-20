import React from 'react';
import { ACTIVITY_ICONS } from '../../utils/activityConstants';
import './styles/ActivityCard.css';

const ActivityCard = ({ activity, index, deleteActivity, markAsDone, done }) => {
    const getActivityIcon = (type) => ACTIVITY_ICONS[type] || '🎉';

    return (
        <div className="col-md-4 mb-4 d-flex">
            <div className={`card shadow flex-column h-100 w-100 ${done ? 'bg-secondary text-white' : 'bg-light'}`}>
                <div className="card-body flex-grow-1">
                    <h5 className={`card-title ${done ? 'done-activity' : ''}`}>
                        {getActivityIcon(activity.type)} {activity.activity}
                    </h5>
                    <p className="card-text">Type: {activity.type}</p>
                    <p className="card-text">Participants: {activity.participants}</p>
                </div>
                <div className="card-footer mt-auto bg-transparent border-0 p-2 d-flex flex-column gap-2">
                    <button className={`btn ${done ? 'btn-warning' : 'btn-success'} btn-block`} aria-label="Mark as done" onClick={() => markAsDone(index)}>
                        {done ? 'Mark as Undone' : 'Mark as Done'}
                    </button>
                    <button className="btn btn-danger btn-block" aria-label="Delete activity" onClick={() => deleteActivity(index)}>
                        Delete
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ActivityCard;
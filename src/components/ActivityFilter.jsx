import React from 'react';
import { ACTIVITY_TYPES, PARTICIPANTS_OPTIONS } from '../utils/activityConstants';

const ActivityFilter = ({ typeFilter, setTypeFilter, participantsFilter, setParticipantsFilter }) => {
    return (
        <div className="col-md-6">
            <div className="mb-3">
                <label className="form-label">Type:</label>
                <select className="form-select" value={typeFilter} onChange={(e) => setTypeFilter(e.target.value)}>
                    <option value="">All</option>
                    {ACTIVITY_TYPES.map((type, index) => (
                        <option key={index} value={type}>
                            {type.charAt(0).toUpperCase() + type.slice(1)}
                        </option>
                    ))}
                </select>
            </div>
            <div className="mb-3">
                <label className="form-label">Participants:</label>
                <select className="form-select" value={participantsFilter} onChange={(e) => setParticipantsFilter(e.target.value)}>
                    {PARTICIPANTS_OPTIONS.map((number) => (
                        <option key={number} value={number}>
                            {number}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
};

export default ActivityFilter;
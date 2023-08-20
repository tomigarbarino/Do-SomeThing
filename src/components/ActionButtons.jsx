import React from 'react';

const ActionButtons = ({ fetchActivity, addToList, navigate }) => (
    <div className="d-flex justify-content-center mt-4">
        <button className="btn btn-primary me-2" onClick={fetchActivity}>
            Fetch Activity
        </button>
        <button className="btn btn-success me-2" onClick={addToList}>
            Add to List
        </button>
        <button className="btn btn-dark" onClick={() => navigate('/activities')}>
            Activities to Do
        </button>
    </div>
);

export default ActionButtons;
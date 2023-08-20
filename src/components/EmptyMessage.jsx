import React from 'react';

const EmptyMessage = ({ message }) => {
    return (
        <div className="d-flex justify-content-center align-items-center">
            <p className="text-info text-center fs-4">{message}</p>
        </div>
    );
};

export default EmptyMessage;
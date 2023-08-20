import React from 'react';
import './styles/DuplicateModal.css'

const DuplicateModal = ({ showModal, setShowModal, confirmDuplicate }) => (
    <div>
        {showModal && (
            <div className="modal show d-block modal-custom" tabIndex="-1">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header bg-warning text-dark">
                            <h5 className="modal-title">Duplicate Activity</h5>
                            <button type="button" className="close" onClick={() => setShowModal(false)}>
                                <span>&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <p>This activity already exists in your list. Are you sure you want to add it again?</p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" onClick={() => setShowModal(false)}>Cancel</button>
                            <button type="button" className="btn btn-primary" onClick={confirmDuplicate}>Add Anyway</button>
                        </div>
                    </div>
                </div>
            </div>
        )}
    </div>
);

export default DuplicateModal;
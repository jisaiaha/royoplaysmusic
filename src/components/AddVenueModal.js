import React from 'react';

function AddVenueModal({ isOpen, onClose, onSubmit, newVenueName, setNewVenueName }) {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <h3>Add New Venue</h3>
                <input
                    type="text"
                    value={newVenueName}
                    onChange={(e) => setNewVenueName(e.target.value)}
                    placeholder="Enter venue name"
                    required
                />
                <div className="modal-buttons">
                    <button onClick={onSubmit}>Add Venue</button>
                    <button onClick={onClose}>Cancel</button>
                </div>
            </div>
        </div>
    );
}

export default AddVenueModal;

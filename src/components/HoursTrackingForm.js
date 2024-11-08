import React, { useState, useEffect } from 'react';
import AddVenueModal from './AddVenueModal';

function HoursTrackingForm() {
    const [location, setLocation] = useState('');
    const [jobDescription, setJobDescription] = useState('');
    const [date, setDate] = useState('');
    const [startTime, setStartTime] = useState('');
    const [endTime, setEndTime] = useState('');
    const [venues, setVenues] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility
    const [newVenueName, setNewVenueName] = useState(''); // State for the new venue name

    // Fetch venues from the API when the component mounts
    useEffect(() => {
        fetchVenues();
    }, []);

    const fetchVenues = () => {
        fetch('http://localhost:5000/api/venues')
            .then(response => response.json())
            .then(data => setVenues(data))
            .catch(error => console.error('Error fetching venues:', error));
    };

    // Handle the submission of a new venue
    const handleAddVenue = () => {
        fetch('http://localhost:5000/api/venues', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name: newVenueName }),
        })
            .then(response => response.json())
            .then(data => {
                setVenues([...venues, data.venue]); // Add the new venue to the list
                setLocation(data.venue.name); // Set the new venue as selected
                setNewVenueName(''); // Clear the input field
                setIsModalOpen(false); // Close the modal
            })
            .catch(error => console.error('Error adding new venue:', error));
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const formData = {
            location,
            jobDescription,
            date,
            startTime,
            endTime,
        };

        console.log('Form Data:', formData);

        // Reset form fields after submission
        setLocation('');
        setJobDescription('');
        setDate('');
        setStartTime('');
        setEndTime('');
    };

    return (
        <div className="hours-tracking-form">
            <h2>Track Your Hours</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Location:</label>
                    <select
                        value={location}
                        onChange={(e) => {
                            if (e.target.value === 'add-new') {
                                setIsModalOpen(true); // Open the modal to add a new venue
                            } else {
                                setLocation(e.target.value);
                            }
                        }}
                        required
                    >
                        <option value="">Select a Venue</option>
                        {venues.map((venue) => (
                            <option key={venue.id} value={venue.name}>
                                {venue.name}
                            </option>
                        ))}
                        <option value="add-new">+ Add New Venue</option> {/* Option to open the modal */}
                    </select>
                </div>

                <div>
                    <label>Job Description:</label>
                    <input
                        type="text"
                        value={jobDescription}
                        onChange={(e) => setJobDescription(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Date:</label>
                    <input
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Start Time:</label>
                    <input
                        type="time"
                        value={startTime}
                        onChange={(e) => setStartTime(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>End Time:</label>
                    <input
                        type="time"
                        value={endTime}
                        onChange={(e) => setEndTime(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Submit</button>
            </form>

            {/* AddVenueModal component */}
            <AddVenueModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onSubmit={handleAddVenue}
                newVenueName={newVenueName}
                setNewVenueName={setNewVenueName}
            />
        </div>
    );
}

export default HoursTrackingForm;

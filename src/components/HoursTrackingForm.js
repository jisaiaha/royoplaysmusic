// src/HoursTrackingForm.js
import React, { useState } from 'react';

function HoursTrackingForm() {
    const [location, setLocation] = useState('');
    const [jobDescription, setJobDescription] = useState('');
    const [date, setDate] = useState('');
    const [startTime, setStartTime] = useState('');
    const [endTime, setEndTime] = useState('');

    // Handler for form submission
    const handleSubmit = (event) => {
        event.preventDefault();

        // Form data to be submitted
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
                    <input
                        type="text"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        required
                    />
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
        </div>
    );
}

export default HoursTrackingForm;

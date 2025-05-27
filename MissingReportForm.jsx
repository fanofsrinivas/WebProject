import React, { useState } from 'react';
import './missing.css';

const MissingReportForm = () => {
    const [previewImage, setPreviewImage] = useState(null);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setPreviewImage(URL.createObjectURL(file));
        } else {
            setPreviewImage(null);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        for (let [key, value] of formData.entries()) {
            console.log(`${key}: ${value}`);
        }
        alert('Missing item reported successfully!');
        e.target.reset();
        setPreviewImage(null);
    };

    return (
        <div className="missing-form-container">
            <h2>Report a Missing Item</h2>
            <form onSubmit={handleSubmit} encType="multipart/form-data">
                <input name="name" type="text" placeholder="Your Name" required />
                <input name="rollNo" type="text" placeholder="Roll Number" required />
                <input name="branch" type="text" placeholder="Branch" required />
                <input name="hostel" type="text" placeholder="Hostel Number" required />
                <input name="phone" type="tel" placeholder="Phone Number" pattern="[0-9]{10}" required />
                <input name="item" type="text" placeholder="Item Name" required />
                <textarea name="details" placeholder="Item Description or Last Seen Location" required />
                <input name="image" type="file" accept="image/*" onChange={handleImageChange} required />
                {previewImage && <img src={previewImage} alt="Preview" className="image-preview" />}
                <button type="submit">Submit Report</button>
            </form>
        </div>
    );
};

export default MissingReportForm;

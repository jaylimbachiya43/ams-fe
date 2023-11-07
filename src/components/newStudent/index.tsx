'use client'
import { useState } from 'react';

export default function Form() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '', 
        status: 'unemployed',
        attachment: null,
        city: '',
        state: '',
        college: '',
        semester: '1',
        interestedField: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };
    

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            if (file.type === 'application/pdf' && file.size <= 5000000) {
                setFormData({ ...formData, attachment: file });
            } else {
                alert('Please select a PDF file with a size <5mb.');
            }
        }
    };

    const handleDrop = (e) => {
        e.preventDefault();
        const file = e.dataTransfer.files[0];
        if (file) {
            if (file.type === 'application/pdf' && file.size <= 5000000) {
                setFormData({ ...formData, attachment: file });
            } else {
                alert('Please select a PDF file with a size <5mb.');
            }
        }
    };

    const handleRemoveFile = () => {
        setFormData({ ...formData, attachment: null });
    };

    const preventDefault = (e) => {
        e.preventDefault();
    };
    

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-xl mx-auto p-6 bg-white rounded-lg shadow-md">
            <div className="mb-4">
                <h2 className="text-lg font-semibold">Name <span className="text-red-500">*</span></h2>
                <div className="flex space-x-4">
                    <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        placeholder="First Name"
                        required
                        className="w-1/2 px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                    />
                    <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        placeholder="Last Name"
                        required
                        className="w-1/2 px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                    />
                </div>
            </div>
            <div className="mb-4">
                <label htmlFor="email" className="text-lg font-semibold">
                    Email <span className="text-red-500">*</span>
                </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder='abc@xyz.com'
                    required
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                />
            </div>
            <div className="mb-4">
                <label htmlFor="phoneNumber" className="text-lg font-semibold">
                    Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                    type="tel"
                    id="phoneNumber"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                    placeholder='(+91)xxxxx-xxxxx'
                    required
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                />
            </div>
            <div className="mb-4">
                <label htmlFor="college" className="text-lg font-semibold">
                    College <span className="text-red-500">*</span>
                </label>
                <input
                    type="text"
                    id="college"
                    name="college"
                    value={formData.college}
                    onChange={handleInputChange}
                    placeholder='Your College Name'
                    required
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                />
            </div>
            <div className="mb-4">
                <label htmlFor="semester" className="text-lg font-semibold">
                    Semester <span className="text-red-500">*</span>
                </label>
                <select
                    id="semester"
                    name="semester"
                    value={formData.semester}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                >
                    {Array.from({ length: 8 }, (_, i) => i + 1).map((sem) => (
                        <option key={sem} value={sem}>
                            {sem}
                        </option>
                    ))}
                </select>
            </div>
            <div className="mb-4">
                <label className="text-lg font-semibold">
                    Job Status <span className="text-red-500">*</span>
                </label>
                <div className="mt-2">
                    <input
                        type="radio"
                        id="employed"
                        name="status"
                        value="employed"
                        checked={formData.status === 'employed'}
                        onChange={handleInputChange}
                        className="mr-2"
                    />
                    <label htmlFor="employed" className="mr-4">Employed</label>
                    <input
                        type="radio"
                        id="unemployed"
                        name="status"
                        value="unemployed"
                        checked={formData.status === 'unemployed'}
                        onChange={handleInputChange}
                        className="mr-2"
                    />
                    <label htmlFor="unemployed">Unemployed</label>
                </div>
            </div>

            <div className="mb-4">
                <label htmlFor="city" className="text-lg font-semibold">
                    City <span className="text-red-500">*</span>
                </label>
                <input
                    type="text"
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                />
            </div>
            <div className="mb-4">
                <label htmlFor="state" className="text-lg font-semibold">
                    State <span className="text-red-500">*</span>
                </label>
                <input
                    type="text"
                    id="state"
                    name="state"
                    value={formData.state}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                />
            </div>
            <div className="mb-4">
                <label htmlFor="interestedField" className="text-lg font-semibold">
                    Interested Field <span className="text-red-500">*</span>
                </label>
                <select
                    id="interestedField"
                    name="interestedField"
                    value={formData.interestedField}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                    required
                >
                    <option value="">Select an option</option>
                    <option value="frontend developer">Frontend Developer</option>
                    <option value="backend developer">Backend Developer</option>
                    <option value="fullstack developer">Fullstack Developer</option>
                    <option value="flutter">Flutter Developer</option>
                    <option value="ui/ux designer">UI/UX Designer</option>
                    <option value="HR">HR</option>
                </select>
            </div>
            <div className="mb-4">
                <label htmlFor="attachment" className="text-lg font-semibold">
                    Attachment <span className="text-red-500">*</span>
                </label>
                <div
                    className="border p-4 border-dashed border-blue-300 mt-2 text-center"
                    onDrop={handleDrop}
                    onDragOver={preventDefault}
                >
                    <p className="mb-2">Drag & Drop files here or click to select</p>
                    {formData.attachment && (
                        <div className="mt-4">
                            <p>Selected File: {formData.attachment.name}</p>
                            <button
                                type="button"
                                onClick={handleRemoveFile}
                                className="mt-2 bg-red-500 text-white px-3 py-1 rounded-md"
                            >
                                Remove
                            </button>
                        </div>
                    )}
                </div>
                <input
                    type="file"
                    id="attachment"
                    name="attachment"
                    accept=".pdf,.doc,.docx"
                    onChange={handleFileChange}
                    className="hidden"
                />
                <label
                    htmlFor="attachment"
                    className="mt-2 bg-blue-500 text-white px-3 py-2 rounded-md cursor-pointer"
                >
                    Upload File
                </label>
            </div>
            <div>
                <button
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                >
                    Submit
                </button>
            </div>
        </form>
    );
}
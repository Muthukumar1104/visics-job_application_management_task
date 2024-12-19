import React from "react";

const JobForm = ({ formState, setFormState, onSave }) => {
  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formState);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        name="title"
        value={formState.title}
        onChange={handleChange}
        placeholder="Job Title"
        className="w-full border p-2 rounded mb-2"
        required
      />
      <input
        type="text"
        name="company"
        value={formState.company}
        onChange={handleChange}
        placeholder="Company Name"
        className="w-full border p-2 rounded mb-2"
        required
      />
      <input
        type="date"
        name="dateApplied"
        value={formState.dateApplied}
        onChange={handleChange}
        className="w-full border p-2 rounded mb-2"
        required
      />
      <select
        name="status"
        value={formState.status}
        onChange={handleChange}
        className="w-full border p-2 rounded mb-2"
      >
        <option value="applied">Applied</option>
        <option value="interviewing">Interviewing</option>
        <option value="accepted">Accepted</option>
        <option value="rejected">Rejected</option>
      </select>
      <button
        type="submit"
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
      >
        Save
      </button>
    </form>
  );
};

export default JobForm;
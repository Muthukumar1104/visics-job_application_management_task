import React, { useState } from "react";
import JobForm from "./Components/JobForm";
import JobList from "./Components/JobList";
import Modal from "./Components/Modal";
import FilterBar from "./Components/Filterbar";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const [applications, setApplications] = useState([]);
  const [formState, setFormState] = useState({
    id: null,
    title: "",
    company: "",
    dateApplied: "",
    status: "applied",
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [filter, setFilter] = useState("all");
  const [sort, setSort] = useState(null);

  const handleSave = (formData) => {
    if (formData.id) {
      setApplications((prev) =>
        prev.map((app) => (app.id === formData.id ? formData : app))
      );
    } else {
      setApplications((prev) => [
        ...prev,
        { ...formData, id: Date.now().toString() },
      ]);
    }
  };

  const handleDelete = (id) => {
    setApplications((prev) => prev.filter((app) => app.id !== id));
  };

  const filteredApplications = applications
    .filter((app) => (filter === "all" ? true : app.status === filter))
    .sort((a, b) =>
      sort === "title"
        ? a.title.localeCompare(b.title)
        : sort === "date"
        ? new Date(a.dateApplied) - new Date(b.dateApplied)
        : 0
    );

  return (
    <div className="p-6 space-y-4">
      <div className="job-management-header">
        <h1 className="job-management-title">Job Application Management</h1>
        <button
          onClick={() => {
            setFormState({
              id: null,
              title: "",
              company: "",
              dateApplied: "",
              status: "applied",
            });
            setIsModalOpen(true);
          }}
          className="add-job-button"
        >
          Add Job
        </button>
      </div>

      <FilterBar
        filter={filter}
        setFilter={setFilter}
        sort={sort}
        setSort={setSort}
      />

      <JobList
        applications={filteredApplications}
        onEdit={(id) => {
          const appToEdit = applications.find((app) => app.id === id);
          setFormState(appToEdit);
          setIsModalOpen(true);
        }}
        onDelete={handleDelete}
      />

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <JobForm
          formState={formState}
          setFormState={setFormState}
          onSave={(formData) => {
            handleSave(formData);
            setIsModalOpen(false);
          }}
        />
      </Modal>
    </div>
  );
};

export default App;

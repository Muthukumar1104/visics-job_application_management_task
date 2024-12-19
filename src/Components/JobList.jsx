import React from "react";

const statusStyles = (status) => {
  switch (status) {
    case "applied":
      return "bg-blue-200 text-blue-800";
    case "interviewing":
      return "bg-yellow-200 text-yellow-800";
    case "accepted":
      return "bg-green-200 text-green-800";
    case "rejected":
      return "bg-red-200 text-red-800";
    default:
      return "";
  }
};

const JobList = ({ applications, onEdit, onDelete }) => {
  return (
    <div className="overflow-x-auto">
      <table className="table-auto w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 px-4 py-2">Job Title</th>
            <th className="border border-gray-300 px-4 py-2">Company</th>
            <th className="border border-gray-300 px-4 py-2">Date Applied</th>
            <th className="border border-gray-300 px-4 py-2">Status</th>
            <th className="border border-gray-300 px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {applications.map((app) => (
            <tr key={app.id} className="text-center">
              <td className="border border-gray-300 px-4 py-2">{app.title}</td>
              <td className="border border-gray-300 px-4 py-2">{app.company}</td>
              <td className="border border-gray-300 px-4 py-2">{app.dateApplied}</td>
              <td className={`border border-gray-300 px-4 py-2 ${statusStyles(app.status)}`}>
                {app.status}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                <button
                  onClick={() => onEdit(app.id)}
                  className="text-blue-500 hover:text-blue-700 mr-2"
                >
                  Edit
                </button>
                <button
                  onClick={() => onDelete(app.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default JobList;

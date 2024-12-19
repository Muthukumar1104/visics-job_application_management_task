import React from "react";

const FilterBar = ({ filter, setFilter, sort, setSort }) => (
  <div className="flex justify-between items-center p-4">
    <select
      value={filter}
      onChange={(e) => setFilter(e.target.value)}
      className="border p-2 rounded"
    >
      <option value="all">All</option>
      <option value="applied">Applied</option>
      <option value="interviewing">Interviewing</option>
      <option value="accepted">Accepted</option>
      <option value="rejected">Rejected</option>
    </select>
    <select
      value={sort}
      onChange={(e) => setSort(e.target.value)}
      className="border p-2 rounded"
    >
      <option value="">Sort By</option>
      <option value="title">Job Title</option>
      <option value="date">Date Applied</option>
    </select>
  </div>
);

export default FilterBar;
import React, { useState, useEffect } from "react";
import "./Attendance.css";
import { FiMoreVertical, FiSearch } from "react-icons/fi";
import CommonHeader from "../../common/CommonHeader";
import axios from "axios";


const Attendance = () => {

  const [attendanceData, setAttendanceData] = useState([])

  const [attendanceList, setAttendanceList] = useState(attendanceData);
  const [statusFilter, setStatusFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const fetchAttendanceData = async () => {
    try {
      const baseUrl = import.meta.env.VITE_API_BASE_URL
      const token = localStorage.getItem("token");
      const response = await axios.get(`${baseUrl}/attendance`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setAttendanceData(response.data.data);
    } catch (error) {
      console.error("Error fetching attendance data:", error);
    }
  };
  
  useEffect(() => {
    fetchAttendanceData();
  }, []);

  // Toggle status between Present and Absent
  const toggleStatus = (index) => {
    const updatedAttendance = [...attendanceList];
    updatedAttendance[index].status = updatedAttendance[index].status === "Present" ? "Absent" : "Present";
    setAttendanceList(updatedAttendance);
  };

  // Filter attendees based on status and search query
  const filteredAttendance = attendanceList.filter(emp => {
    const matchesStatus = statusFilter === "All" || emp.status === statusFilter;
    const matchesSearch = emp.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          emp.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          emp.position.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          emp.department.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesStatus && matchesSearch;
  });

  return (
    <div className="employees-container">
      {console.log(attendanceData)}
      <CommonHeader screenName={"Attendance"} />
      
      {/* Status and Search Component */}
      <div className="status-search-container">
          <div className="attendance-status">
            <select 
              value={statusFilter} 
              onChange={(e) => setStatusFilter(e.target.value)}
              className="status-select"
            >
              <option value="All">All</option>
              <option value="Present">Present</option>
              <option value="Absent">Absent</option>
            </select>
          </div>
        
        <div className="search-box-candidates">
          <FiSearch />
          <input
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      <table className="employees-table">
        <thead>
          <tr>
            <th>Profile</th>
            <th>Employee Name</th>
            <th>Email Address</th>
            <th>Phone Number</th>
            <th>Position</th>
            <th>Department</th>
            <th>Date of Joining</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {/* {filteredAttendance.map((emp, index) => ( */}
          {attendanceData.map((emp, index) => (
            <tr key={index}>
              <td>
                <img src={emp.image} alt={emp.name} className="avatar" />
              </td>
              <td>{emp.name}</td>
              <td>{emp.email}</td>
              <td>{emp.phone}</td>
              <td 
                className="position-cell" 
                onClick={() => toggleStatus(attendanceList.findIndex(item => item.email === emp.email))}
              >
                {emp.position}
              </td>
              <td>{emp.department}</td>
              <td>{emp.joiningDate}</td>
              <td className={`status-cell ${emp?.status?.toLowerCase()}`}>
                {emp.status || "Present"}
              </td>
              <td>
                <FiMoreVertical />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Attendance;

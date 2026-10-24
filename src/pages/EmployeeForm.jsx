
import { useState } from 'react';

function EmployeeForm() {
  const [formData, setFormData] = useState({
    name: '',
    designation: '',
    location: '',
    salary: ''
  });

  const [message, setMessage] = useState('');

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value
    });

    setMessage('');
  }

  function handleSubmit(event) {
    event.preventDefault();

    setMessage(
      `Employee "${formData.name}" submitted successfully!`
    );

    console.log('Employee Details:', formData);

    setFormData({
      name: '',
      designation: '',
      location: '',
      salary: ''
    });
  }

  return (
    <div className="container mt-5 mb-5">
      <div className="row justify-content-center">
        <div className="col-md-7 col-lg-6">
          <div className="card shadow">
            <div className="card-header bg-primary text-white py-3">
              <h4 className="mb-0">Employee Registration Form</h4>
            </div>

            <div className="card-body p-4">
              {message && (
                <div className="alert alert-success">
                  {message}
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Name
                  </label>

                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="form-control"
                    placeholder="Enter employee name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="designation" className="form-label">
                    Designation
                  </label>

                  <input
                    type="text"
                    id="designation"
                    name="designation"
                    className="form-control"
                    placeholder="Enter designation"
                    value={formData.designation}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="location" className="form-label">
                    Location
                  </label>

                  <input
                    type="text"
                    id="location"
                    name="location"
                    className="form-control"
                    placeholder="Enter location"
                    value={formData.location}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="salary" className="form-label">
                    Salary
                  </label>

                  <input
                    type="number"
                    id="salary"
                    name="salary"
                    className="form-control"
                    placeholder="Enter salary"
                    value={formData.salary}
                    onChange={handleChange}
                    min="0"
                    required
                  />
                </div>

                <button type="submit" className="btn btn-primary w-100">
                  Submit Employee
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmployeeForm;

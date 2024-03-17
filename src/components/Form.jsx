import React, { useState } from "react";

export const Form = () => {
  const [formData, setFormData] = useState({});
  return (
    <div className="container my-5 d-flex align-items-center">
      <form>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            User Name :
          </label>
          <input type="text" className="form-control" id="username" />
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input type="email" className="form-control" id="email" />
        </div>

        {/* occupation */}
        <div className="mb-3">
          <label htmlFor="" className="form-label">
            Occupation:
          </label>
          <select className="form-select" name="occupation">
            <option value="student">Student</option>
            <option value="employee">Employee</option>
            <option value="other">Other</option>
          </select>
        </div>

        {/* gender */}
        <div className="mb-3">
          <label className="form-label">Gender</label>
          <div className="form-check">
            <input className="form-check-input" type="radio" name="gender" />
            <label className="form-check-label">Male</label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" name="gender" />
            <label className="form-check-label">Female</label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" name="gender" />
            <label className="form-check-label">Other</label>
          </div>
        </div>

        {/* Languages */}
        <div className="mb-3">
          <label className="form-label">Languages</label>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              name="languages"
              value="html"
            />
            <label className="form-check-label">HTML</label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              name="languages"
              value="css"
            />
            <label className="form-check-label">CSS</label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              name="languages"
              value="javascript"
            />
            <label className="form-check-label">JavaScript</label>
          </div>
        </div>

        <input className="btn btn-primary" type="submit" value="Login" />
      </form>
    </div>
  );
};

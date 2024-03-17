import React, { useState } from "react";

export const Form = () => {
  const [formData, setFormData] = useState({});
  return (
    <div className="container mb-2 d-flex flex-column align-items-center">
      <form className="border px-5 w-50 py-3">
        <h1 className="text-center text-primary mb-3">Form Handling</h1>
        {/* username  */}
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            User Name :
          </label>
          <input
            type="text"
            className="form-control"
            id="username"
            name="username"
          />
        </div>

        {/* email  */}
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
          />
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
            <input
              className="form-check-input"
              type="radio"
              name="gender"
              value="male"
            />
            <label className="form-check-label">Male</label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="gender"
              value="female"
            />
            <label className="form-check-label">Female</label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="gender"
              value="other"
            />
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

        <input className="btn btn-primary" type="submit" value="Submit" />
      </form>
    </div>
  );
};

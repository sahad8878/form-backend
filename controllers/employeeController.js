import Employee from "../models/employeeModel.js";
export const postEmployeeDetails = async (req, res) => {
  const {
    name,
    mobile,
    email,
    employeeId,
    address,
    designation,
    joiningDate,
    gender,
    experiences,
  } = req.body;

  if (
    name &&
    mobile &&
    email &&
    employeeId &&
    address &&
    designation &&
    joiningDate &&
    gender &&
    experiences
  ) {
    const existingEmployee = await Employee.findOne({ email: email });
    if (existingEmployee) {
      res.json({
        success: false,
        message: `${email} employee is already exists`,
      });
      return;
    }else{



      const newExperiences = experiences.map((exp) => {
        const timePeriod = `${exp.startYear} - ${exp.endYear}`;
        return {
          company: exp.company,
          designation: exp.designation,
          timePeriod: timePeriod,
        };
      });
      const employee = await Employee.create({
        name,
        mobile,
        email,
        employeeId,
        address,
        designation,
        joiningDate,
        gender,
        experiences: newExperiences,
      });
      if (employee) {
        res.status(201).json({
          success: true,
          message: "successfully created employee details",
        });
      } else {
        res.json({ success: false, message: "employee not found" });
      }
    }
  } else {
    res.json({ success: false, message: "Please enter all the fields" });
  }
};

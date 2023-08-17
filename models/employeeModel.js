import mongoose from 'mongoose';

const employeeSchema = new mongoose.Schema({
  name: { type: String},
  mobile: { type: Number},
  email: { type: String},
  employeeId: { type: String},
  address: { type: String},
  designation: { type: String},
  joiningDate: { type: String},
  gender: { type: String},

  experiences: [
    {
      company: { type: String},
      designation: { type: String},
      timePeriod: { type: String},
    },
  ],
});

export default mongoose.model('Employee', employeeSchema);
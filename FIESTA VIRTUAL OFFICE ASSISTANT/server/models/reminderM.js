import mongoose from "mongoose";
 const schema = mongoose.Schema;
  var reminderSchema = new schema({
         reminder_person: String, 
         reminder_title: String, 
         reminder_startDate: {
            type: Date,
            default: new Date(),
        },
        reminder_endDate: {
            type: Date,
            default: new Date(),
        },
  });

  const Reminder = mongoose.model('ReminderModel', reminderSchema);

  export default Reminder;
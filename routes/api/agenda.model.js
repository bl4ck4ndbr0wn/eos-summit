const mongoose = require("mongoose");

const { Schema } = mongoose;

let Agenda = null;

try {
  const AgendaSchema = new Schema({
    session: String,
    day: String,
    month: String,
    speakerImage: String,
    title: String,
    speaker: String,
    time: String,
    link:String,
    agendaConfirmed: {
      type: Boolean,
      default: false
    }
  });
  Agenda = mongoose.model("Agenda", AgendaSchema);
} catch (e) {
  Agenda = mongoose.model("Agenda");
}

module.exports = Agenda;

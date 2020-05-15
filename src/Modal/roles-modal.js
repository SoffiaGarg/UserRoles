import Mongoose from 'mongoose';

const Schema = Mongoose.Schema;

class RoleClass {
  /** method to get all roles **/
  static get(query, fields) {
    return this.findOne(query, fields).sort({ createdAt: -1 });
  }

  /** method to add new Role **/
  static add(payload) {
    return this(payload).save();
  }
}

const RoleSchema = new Schema({
  name: { type: String, unique: true, trim: true, required: true },
  isActive: { type: Boolean, default: true },
  createdAt: { type: Date}
});

RoleSchema.loadClass(RoleClass);

export default Mongoose.model('Role', RoleSchema);

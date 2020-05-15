import Mongoose from 'mongoose';

const Schema = Mongoose.Schema;

class UserClass {
  /** method to get all roles **/
  static get(query, fields) {
    return this.find(query, fields).sort({ createdAt: -1 });
  }

  /** method to add new Role **/
  static add(payload) {
    return this(payload).save();
  }
}

const UserSchema = new Schema({
  name: { type: String, trim: true, required: true },
  email: { type: String, unique:true,required:true},
  password: { type: String, unique:true,required:true},
  role: {  type: Schema.ObjectId,
    ref: 'Role'},
  createdAt: {type: Date},
  updatedAt: {type: Date}
});

UserSchema.loadClass(UserClass);

export default Mongoose.model('User', UserSchema);

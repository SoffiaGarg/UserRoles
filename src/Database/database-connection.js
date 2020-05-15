import Mongoose from 'mongoose';
import {mongoConnectionUrl} from '../Config/config';

//Connect to Mongoose
const dbConnection = async () => {
  Mongoose.connect(mongoConnectionUrl, {useNewUrlParser: true}, (err) => {
    if (err) {
      throw new Error(Messages.unableToConnect);
    } else {
      console.log(
        'Mongo connection successful with database'
      );
    }
  });
};
export default dbConnection;
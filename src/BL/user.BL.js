import Role from '../Modal/roles-modal';
import User from '../Modal/user-modal';

/**
 * ....................................................................
 * @param {*} payload - {name}
 * This api is to add different roles that will be assigned to user
 * ....................................................................
 */
export const addRole = async (payload) => {
    let result = await Role.add(payload);
    return result;
}



/**
 * ................................................................
 * @param {*} payload -{name,email,password}
 * Add new User - if there is no user in db set the role to admin
 * else set the role to employee.
 * .................................................................
 */
export const registerUser = async (payload) => {
    //check is there any user Exits
    let result = await User.aggregate([
        { $count: "userCount" }
    ]);
    let id;
    console.log(result);
    if (result.length === 0 || result.userCount === 0) {
        id = await getRoleId('admin');
    } else {
        id = await getRoleId('employee');
    }
    payload.role = id;
    await User.add(payload);
    return;

}


//Fetch the role Id to save the user
export const getRoleId = async (role) => {
    try {
        console.log(role)
        let roleData = await Role.findOne({ 'name': role }, { _id: 1 });
        if (roleData) {
            return roleData._id
        } else{
           let roleData = await addRole({"name":role});
           return roleData._id;
        }
    } catch (error) {
        throw new Error('Unable to get Role')
    }
}

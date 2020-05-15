/**
 * ---------------------------------------------------------------------
 * Following Functions we will created here :-
 *  1) Register User
 *  2) Add User Role
 * 
 * Here we are calling the actual Business Logic of the api and handling
 * Errors.
 * ......................................................................
 */
import * as userBL from '../BL/user.BL';

//  Add New Role
export const addUserRole = async (req, res) => {
    try {
        let payload = {
            name: req.body.name
        }
        await userBL.addRole(payload);
        res.send({
            status: 200,
            message: 'Role Added Successfully !'
        })
    } catch (error) {
        res.send({
            status:400,
            message:'Unable to add Role',
            data:error
        })
    }
}

// Add New User
export const addUser = async (req, res) => {
    try {
        if (!req.body.name) {
            throw new Error('Name is Missing')
        } else if (!req.body.password) {
            throw new Error('Password is Missing')
        } else if (!req.body.email) {
            throw new Error('Email is Missing')
        }else{
            let payload = {...req.body}
            await userBL.registerUser(payload);
            res.send({
              status:200,
              message:'User Added Successfully'
            })
        }
    } catch (error) {
        res.send({
            status:400,
            message:'Unable to add User',
            data:error
        })
    }
}
import connectDB from '../../middleware/mongodb';
import Users from '../../models/users';


const handler = async (req, res) => {
  if (req.method === 'POST') {
    // Check if name, email or password is provided
    const {username,miscInfo,contactInfo} = req.body
    const oldUser = await Users.findOne({username})
    if (!!oldUser) return res.status(200).send()
   
    const {email} = contactInfo
    const definition = {username,email}
    for (const [key, value] of Object.entries(miscInfo)) {
      if (!!value) {
        definition[key] = value
      }
    }  
    const newUser = new Users(definition);
    await newUser.save();
    
    return res.status(200).send()

  } else {
    res.status(422).send('req_method_not_supported');
  }
};

export default connectDB(handler);
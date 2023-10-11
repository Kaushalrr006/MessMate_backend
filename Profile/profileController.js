const AllUsers = require('../Profile/profileModels');

module.exports.getUser = async (req, res) => { 
    try {
        const user = await AllUsers.find(); 
        res.json(user);
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while fetching User.' });
    }
}

module.exports.createUser = async (req, res) => {
    const { name, email, password } = req.body;
  
    try {
      const newUser =  new AllUsers({
        name,
        email,
        password,
    
      });
  
      const savedUser = await newUser.save();
      res.status(201).json(savedUser);
    } catch (error) {
      console.error('Error creating card:', error);
      res.status(500).json({ error: 'An error occurred while creating the User.' });
    }
  };
const AllCards = require('../Admin/adminModels');

module.exports.getCard = async (req, res) => { 
    try {
        const cards = await AllCards.find(); 
        res.json(cards);
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while fetching cards.' });
    }
}

module.exports.createCard = async (req, res) => {
    const { id, name, description, date, dishes } = req.body;
  
    try {
      const newCard = new Card({
        id,
        name,
        description,
        date,
        dishes,
      });
  
      const savedCard = await newCard.save();
      res.status(201).json(savedCard);
    } catch (error) {
      console.error('Error creating card:', error);
      res.status(500).json({ error: 'An error occurred while creating the card.' });
    }
  };
  
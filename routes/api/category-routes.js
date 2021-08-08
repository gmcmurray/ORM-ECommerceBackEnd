const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  try{
  const categories = await Category.findAll({
    include:[Product]
  });
    res.status(200).json(categories);

}
  catch(err){
    res.status(500).json(err)
  }
  // find all categories
  // be sure to include its associated Products
});

router.get('/:id', async (req, res) => {
  try{
// find one category by its `id` value
// be sure to include its associated Products
    const catt = await Category.findByPk(req.params.id,{
      include: [{model: Product}]
    });
  if(!catt){
   return  res.status(404).json({message: 'No category found with this id'})
  }
  res.status(200).json(catt);
} catch(err){
  res.status(500).json(err);
}

});

router.post('/', async (req, res) => {
  // create a new category
  try{
const catt = await Category.create(req.body);
res.status(200).json(catt);
  }
  catch(err){
    res.status(400).json(err);
  }
});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  try{
 const horse= Category.update(req.body,{
    where:{id:req.params.id}
  })
    res.status(200).json(horse);
   }
  catch(err){
    res.status(500).json(err)
  }
});

router.delete('/:id', async (req, res) => {
  try{
  const catt = await Category.destroy({
    where:{id: req.params.id}
  });
  if(!catt){
    res.status(404).json({message: 'No category found with this id'})
    return;
  }
  res.status(200).json(catt);
  }
  catch(err){
    res.status(500).json(err);
  }
  // delete a category by its `id` value
});

module.exports = router;

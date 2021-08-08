const router = require('express').Router();
const { Product, Category, Tag, ProductTag } = require('../../models');

// The `/api/products` endpoint
// { model: Location, through: Trip, as: 'planned_trips' }
// get all products
router.get('/', async (req, res) => {
  try {
    const products = await Product.findAll(
      {
      include:[{ model: Category} ,{model: Tag, through: ProductTag, as: 'prod_tag'}]
    }
    );
    res.status(200).json(products)
  }
  catch(err){
  res.status(500).json(err)
  }
});

// get one product
router.get('/:id', async (req, res) => {
  try{
console.log("req.params",req)
 const catt = await Product.findByPk(req.params.id,{
  include:[{ model: Category} ,{model: Tag, through: ProductTag, as: 'prod_tag'}]
 });
 if(!catt){
   return res.status(404).json({message: 'no product found iwth this id'});
 }
 res.status(200).json(catt);
  }
  catch(err){
  res.status(500).json(err); }
  // find a single product by its `id`
  // be sure to include its associated Category and Tag data
});

// create new product
router.post('/', async (req, res) => {
  /* req.body should look like this...
    {
      product_name: "Basketball",
      price: 200.00,
      stock: 3,
      tagIds: [1, 2, 3, 4]
    }
  */

  const product = await Product.create(req.body)
    .then((product) => {
      // if there's product tags, we need to create pairings to bulk create in the ProductTag model
      if (req.body.tagIds.length) {
        const productTagIdArr = req.body.tagIds.map((tag_id) => {
          return {
            product_id: product.id,
            tag_id,
          };
        });
        return ProductTag.bulkCreate(productTagIdArr);
      }
      // if no product tags, just respond
      res.status(200).json(product);
    })
    .then((productTagIds) => res.status(200).json(productTagIds))
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
});

// update product
router.put('/:id', (req, res) => {
  // update product data
  Product.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
    .then((product) => {
      // find all associated tags from ProductTag
      return ProductTag.findAll({ where: { product_id: req.params.id } });
    })
    .then((productTags) => {
      // get list of current tag_ids

      const productTagIds = productTags.map(({ tag_id }) => tag_id);
      console.log("productTagIds",productTagIds)
      // create filtered list of new tag_ids
      const newProductTags = req.body.tagIds
        .filter((tag_id) => !productTagIds.includes(tag_id))
        .map((tag_id) => {
          return {
            product_id: req.params.id,
            tag_id,
          };
        });
      // figure out which ones to remove
      console.log('newProductTags',newProductTags)
      const productTagsToRemove = productTags
        .filter(({ tag_id }) => !req.body.tagIds.includes(tag_id))
        .map(({ id }) => id);

      // run both actions
      return Promise.all([
        ProductTag.destroy({ where: { id: productTagsToRemove } }),
        ProductTag.bulkCreate(newProductTags),
      ]);
    })
    .then((updatedProductTags) => res.json(updatedProductTags))
    .catch((err) => {
      // console.log(err);
      res.status(400).json(err);
    });
});

router.delete('/:id', async (req, res) => {
  // delete one product by its `id` value
    try{  
        const byebye = await Product.destroy( {
          where: {
            id: req.params.id
          }
        })

        console.log('byebye',byebye)

        if(!byebye){ res.status(404).json({message: 'No Product found with this id'})
        return;}

        //Collect tags associated with product
        const tagtoDestroy = await ProductTag.findAll({ where: { product_id: req.params.id } });

        const productTagsToRemove = tagtoDestroy
                .filter(({ tag_id }) => !req.body.tagIds.includes(tag_id))
                .map(({ id }) => id);

        console.log('tagstobe removed', productTagsToRemove)
        await ProductTag.destroy({ where: { id: productTagsToRemove } })

        res.status(200).json(byebye);
    }
    catch(err){
          res.status(500).json(err);
    }

});

module.exports = router;

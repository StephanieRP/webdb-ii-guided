const knex = require('knex')
const router = require('express').Router();

//configure knex to connect router to database
const knexConfig = {
  client: 'sqlite3',
  connection: {//can be a string or object
    filename: './data/roles.db3'  //from the root folder
  },
  useNullAsDefault: true, // must add if using sqlite3
  // debug: true //can add to see what sql command was executed
}

const db = knex(knexConfig)

router.get('/', (req, res) => {
  // select * from roles
  db('roles')
  .then(roles => {
    res.status(200).json(roles)
  }).catch(err => {
    console.log(err)
  })

});

router.get('/:id', (req, res) => {
  // select * from roles where id = :id
  db('roles')
  .first() // will return data as an object not json object
  .where({ id: req.params.id})
  .then(role => {
    role ? res.status(200).json(role) : res.status(404).json({
      message: 'No role found with that ID'
    })
  }).catch(err => {
    res.status(500).json(err)
  })
});

router.post('/', (req, res) => {
  // insert into roles () values (req.body)
  db('roles').insert(req.body, 'id')
  .then(ids => {
    db('roles')
    .where({id: ids[0]})
    .first()
    .then(role => {
      res.status(201).json(role)

    }).catch(err => {
      res.status(500).json(err)
    })
  }).catch(err => {
    res.status(500).json(err)
  })
});

router.put('/:id', (req, res) => {
 db('roles')
 .where({ id: req.params.id})
 .update(req.body)
 .then(count => {
   count > 0 ? res.status(200).json(req.body) : res.status(500).json({ message: 'Role could not be changed'})
   console.log(count)
 }).catch(err => {
   res.status(404).json({ message: 'Role does not exist'})
 })
});

router.delete('/:id', (req, res) => {
 db('roles')
 .where({id: req.params.id})
 .del()
 .then(count => {
   count > 0 ? res.status(204).json({
     message: 'Completed removing role!!'
   }) :    res.status(500).json({message: 'Something went wrong..'})

 }).catch(err => {
   res.status(500).json(err)
 })
});

module.exports = router;

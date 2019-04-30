Client <> API <> knex <> adapter <> DB (Server)

// objects
const student = {
name: '',
email: '',
cohorts: []
};

// relations
student row [ ]

name | email
'jon' | 'email'

ORM = Object Relational Mapper

ORMs include a Query Builder.

Query Builders translate from a programming language to SQL

## Roadmap

- [x] create a database
- [x] add a roles table to the DB
- [x] install knex and the adapter for sqlite3
- [x] configure knex to talk to our DB
- [x] list all roles
- [x] add a role
- [x] list a role by id
- [x] remove a role
- [x] update a role

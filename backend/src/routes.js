const { Router } = require('express');

const DevController = require('./controllers/DevController');
const SearchController = require('./controllers/SearchController');


const routes = Router();
// Methods http: GET, POST, PUT, DELETE

// Parameter types: 
// Query Params: req.query (filters, sorting, pagination, ...)
// Route Params: request.params (identify a feature on put or delete)
// Body:         Request.body (data for creating or changing a record)

// MondoDB (nonrelational)
routes.get('/devs', DevController.index);
routes.post('/devs', DevController.store);

routes.get('/search', SearchController.index);

module.exports = routes;
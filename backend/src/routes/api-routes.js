const express = require('express');
const router = express.Router();
const {checkAuthorization} = require('../middlewares/auth-middleware');


/*
    In this file is the routing for the REST-endpoints under /api managed
 */

const authApi = require('../apis/auth-api'); //api-endpoints are loaded from separate files
router.post('/login', authApi.login); //the function decides which request type should be accepted
router.delete('/login', checkAuthorization(),authApi.logout); //middlewares can be defined in parameters
router.get('/login', authApi.isLoggedIn); //the function, which handles requests is specified as the last parameter

const userApi = require('../apis/user-api');
router.get('/user', checkAuthorization(), userApi.getSelf);

const peopleDemoApi = require('../apis/people-demo-api');
router.get('/people', checkAuthorization(), peopleDemoApi.getPeople);

const salesmenApi = require('../apis/salesmen-api');
router.get('/salesmen', checkAuthorization(), salesmenApi.getSalesmen);

router.post('/bonussalary/:ID/:value/:year', salesmenApi.storeBonus);


const performanceApi = require('../apis/performance-api');
router.get('/performance/:ID', checkAuthorization(), performanceApi.getPerformance);

router.put('/performance/:ID', checkAuthorization(), performanceApi.updateRemark);

const EvaluationApi = require('../apis/evaluation-api');
router.get('/evaluation', EvaluationApi.getEvaluation);



module.exports = router;
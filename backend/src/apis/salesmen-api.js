exports.getSalesmen = function (req, res){
    const db = req.app.get('db');
    const collection = db.collection('salesman');
    collection.find({}).toArray(function(err, data){
        if (err) {
            console.log(err);
            res.status(500).send({ error: err });
        } else {
            res.send(data);
        }
    });
};

exports.storeBonus = function (req) {
    const axios = require('axios');
    const qs = require('querystring');
    const accessToken = req.app.get('token');
    const employeeId = req.params.ID;
    const value = req.params.value;
    const year = req.params.year;
    console.log(accessToken);
    // Store the bonus salary in OrangeHRM
    const config1 = {
        headers: {
            'Authorization': `Bearer ${accessToken}`,
            'Content-Type': 'application/x-www-form-urlencoded',
            'Accept': 'application/json',
        }
    };
    const data = qs.stringify({year, value});
    axios.post(`https://sepp-hrm.inf.h-brs.de/symfony/web/index.php/api/v1/employee/${employeeId}/bonussalary`, data, config1).then(r => console.log(r))
}

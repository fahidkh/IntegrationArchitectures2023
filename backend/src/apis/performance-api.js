exports.getPerformance = function (req, res){
    const salesmanCode = req.params.ID;
    const db = req.app.get('db');
    const collection = db.collection('social_performance');
    collection.find({code: salesmanCode}).toArray(function(err, data){
        if (err) {
            console.log(err);
            res.status(500).send({ error: err });
        } else {
            res.send(data);
        }
    });
};

exports.updateRemark = function (req, res){
    const db = req.app.get('db');
    const collection = db.collection('social_performance');
    const salesman_code = req.params.ID;
    const remark = req.body.remark;
    collection.updateOne({ code: salesman_code}, { $set: { remark: remark } }, function(err, data){
        if (err) {
            console.log(err);
            res.status(500).send({ error: err });
        } else {
            res.send(data);
        }
    });
};
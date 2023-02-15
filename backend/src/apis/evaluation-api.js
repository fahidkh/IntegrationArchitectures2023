const axios = require('axios');

exports.getEvaluation = async function(req, res) {
    const baseUrl = 'https://sepp-crm.inf.h-brs.de/opencrx-rest-CRX';
    const credentials = {
        username: 'guest',
        password: 'guest',
    };

    const config = {
        headers: {
            Accept: 'application/json',
        },
        auth: credentials,
    };

    try {
        const contacts = await axios.get(`${baseUrl}/org.opencrx.kernel.contract1/provider/CRX/segment/Standard/salesOrder`, config);
        const accounts = contacts.data.objects;
        console.log(accounts);
        res.send(accounts);
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: 'Failed to retrieve contacts' });
    }
};

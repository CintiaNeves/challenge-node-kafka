import express from 'express';

const routes = express.Router();

routes.post('/certifications', async (req, res) =>{
    const msg = {
        user:{id: 1, name: 'Cintia'},
        course:'Kafka com Node.js',
        grade: 5,
    };
    await req.producer.send({
        topic: 'issue-certificate',
        messages:[
            { value: JSON.stringify(msg)},
        ],
    });
    return res.json({ok: true});
});

export default routes;




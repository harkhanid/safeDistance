import express from 'express';
import * as adminsController from '../controllers/admins-controller';

const router = express.Router();

// define routes in /admins
router.route('/admins')
    .get(adminsController.list)
    .post(adminsController.save);

// define routes in /admins 
router.route('/admins/:id')
    .get(adminsController.get)
    .put(adminsController.update)


//routes to login
router.route('/login')
    .post(adminsController.login);



// //get infomation to print in dashboard
// Router.get('/profile', (req, res) => {
//   var decoded = jwt.verify(req.headers['authorization'], process.env.SECRET_KEY)

//   Admin.findOne({
//     _id: decoded._id
//   })
//     .then(admin => {
//       if (admin) {
//         res.json(admin)
//       } else {
//         res.send('Admin does not exist')
//       }
//     })
//     .catch(err => {
//       res.send('error: ' + err)
//     })
// })


// //get all admins
// Router.get('', (req, res) => {
// const promise = Admin.find().exec();
// promise.then((admins) => {
// res.status(200);
// res.json(admins);
// })
// .catch(renderErrorResponse(req));
// })

// Router.put('/:id', (req, res) => {
//   const adminsID = req.params.id;
//   const updatePart = Object.assign({}, req.body);

//   const resolve = (adminsID) => {
//       res.status(200);
//       res.json(adminsID);
//   }
//       const promise = Admin.findOneAndUpdate({_id:adminsID},updatePart,{new:true}).exec()
//       promise.then(resolve)
//       .catch(renderErrorResponse(res));
// })
// module.exports = Router

export default router;
import express from 'express';
import * as appSessionController from '../controllers/appSessions-controller';

const router = express.Router();


router.route('/appSessions')
    .get(appSessionController.conditionalGet)  // <- getAll if no requry parameter 
    .post(appSessionController.save)


router.route('/appSessions/:id')
    // .get(appSessionController.getByID)
    .put(appSessionController.conditionalUpdateByID);   // <- mark danger 


export default router;
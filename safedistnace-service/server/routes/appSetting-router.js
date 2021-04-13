import express from 'express';
import * as appSettingsController from '../controllers/appSettings-controller';

const router = express.Router();
//Implement AppSettings API `/appSettings`.*

router.route('/appSettings')
    .post(appSettingsController.saveSettings)
    .get(appSettingsController.searchSettings)

router.route('/appSettings/:id')
    
    .put(appSettingsController.changeSettings)

export default router;
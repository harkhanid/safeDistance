import * as locationStatsService from '../services/locationStats-service';
import { response } from 'express';

// define render error function
const renderErrorResponse = (response) => {
    const callback = (error) => {
        if (error) {
            response.status(500);
            response.json({
                message: error.message
            });
        }
    };
    return callback;
}

// define listData controllers
export const list = (request, response) => {
    const interval = request.params.interval; //interval given in admin dashboard
    let locationsStats = [];

    let endTime = new Date();
    let startTime = new Date(endTime.getTime() - (1000 * 60 * 60 * parseInt(interval)));

    /**
     * creating a list to store all Active sessions. 
    *  Length of this gives the count of users in particular time interval
    */
    let appSessionIDList;

    const resolve = (locations) => {
        //Iterating and getting appsessions in (12*interval) slots
        for (let i = 1; i <= (12 * interval); i++) {
            let newEndTime = new Date(startTime.getTime() + (1000 * 60 * 5 * i));
            appSessionIDList = new Set();

            for (let j = 0; j < locations.length; j++) {
                if (locations[j].appSessionID !== undefined) {
                    if (locations[j].lastModifiedDate <= newEndTime &&
                        locations[j].lastModifiedDate >= startTime) {
                        appSessionIDList.add(locations[j].appSessionID);
                    }
                }

            }
            //Saving startTime, endTime and count of users in a list
            locationsStats.push({
                startTime: startTime,
                endTime: newEndTime,
                numberOfUsers: appSessionIDList.size
            });
            //changing location startTime for every iteration
            startTime = newEndTime;

        }
        response.status(200);
        response.json(locationsStats);
    };

    locationStatsService.search({
        greaterThan: startTime,
        lessThan: endTime
    })
        .then(resolve)
        .catch(renderErrorResponse(response));
}
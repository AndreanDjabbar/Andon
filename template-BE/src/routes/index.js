const express = require('express');
const docsRoute = require('./docs.route'); // Route for documentation
const config = require('../config/config');

const dashboardRoutes = require('./dashboard.route'); // Route for dashboard
const qccMTypesRoutes = require('./qccMTypes.route'); // Route for QCC MTypes
const lineRoutes = require('./line.route'); // Route for line
const machineRoutes = require('./machine.route'); // Route for machine
const memberRoutes = require('./member.route'); // Route for member
const machineStopInputRoutes = require('./machineStopInput.route'); // Route for machine stop input

const problemRoutes = require('./problem.route'); // Route for problem
const mtbfmttrRoutes = require('./mtbfmttr.route'); // Route for MTBF MTTR
const realtimeParetoRoutes = require('./realtimePareto.route'); // Route for realtime pareto
const summaryRoutes = require('./summary.route'); // Route for summary
const cmFollowupRoutes = require('./cmFollowup.route'); // Route for CM Followup
const downloadRoutes = require('./download.route'); // Route for download

const tambahAnalysis = require('./tambahAnalysis.route'); // Route for tambah analysis

const authRoutes = require('./auth.route'); // Route for authentication
const userRoutes = require('./user.route'); // Route for user
const kyMachineRoutes = require('./kyMachine.route'); // Route for KY Machine
const sparepartRoutes = require('./spareparts.route'); // Route for spare parts
const q6Routes = require('./q6.route'); // Route for Q6
const temporaryActionListRoutes = require('./temporaryactionlist.route');
const focusThemaRoutes = require('./focusThema.route');
const floatingPlungerTipsRoutes = require('./floatingPlungerTips.route');
const frontendRoutes = require('./frontend.route');
const cameraRoutes = require('./camera.route');
const inspectionRoutes = require('./inspection.route');

const router = express.Router();

const defaultRoutes = [
  {
    path: '/inspections',
    route: inspectionRoutes,
  },
  {
    path: '/camera',
    route: cameraRoutes,
  },
  {
    path: '/dashboard',
    route: dashboardRoutes,
  },
  {
    path: '/smartandon',
    route: qccMTypesRoutes,
  },
  {
    path: '/smartandon',
    route: lineRoutes,
  },
  {
    path: '/smartandon',
    route: machineRoutes,
  },
  {
    path: '/smartandon',
    route: problemRoutes,
  },
  {
    path: '/smartandon',
    route: downloadRoutes,
  },
  {
    path: '/realtime-pareto',
    route: realtimeParetoRoutes,
  },
  {
    path: '/mtbfmttr',
    route: mtbfmttrRoutes,
  },
  {
    path: '/smartandon',
    route: memberRoutes,
  },
  {
    path: '/summary',
    route: summaryRoutes,
  },
  {
    path: '/cm-followup',
    route: cmFollowupRoutes,
  },
  {
    path: '/auth',
    route: authRoutes,
  },
  {
    path: '/user',
    route: userRoutes,
  },
  {
    path: '/smartandon',
    route: machineStopInputRoutes,
  },
  {
    path: '/smartandon',
    route: tambahAnalysis,
  },
  {
    path: '/smartandon',
    route: sparepartRoutes,
  },
  {
    path: '/smartandon',
    route: kyMachineRoutes,
  },
  {
    path: '/q6',
    route: q6Routes,
  },
  {
    path: '/smartandon',
    route: temporaryActionListRoutes,
  },
  {
    path: '/smartandon',
    route: focusThemaRoutes,
  },
  {
    path: '/smartandon',
    route: floatingPlungerTipsRoutes,
  },
  {
    path: '/smartandon',
    route: frontendRoutes,
  },
];

const devRoutes = [
  // routes available only in development mode
  {
    path: '/docs',
    route: docsRoute,
  },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

/* istanbul ignore next */
if (config.env === 'dev' || config.env === 'local') {
  devRoutes.forEach((route) => {
    router.use(route.path, route.route);
  });
}

module.exports = router;

import {ieFix} from './utils/ie-fix';
import {iosVhFix} from './utils/ios-vh-fix';

import {initModals} from './modules/init-modals';
import {loaderModals} from './modules/loader-modals';
import {headerModals} from './modules/header';
import {popupModals} from './modules/popup';

// Utils
// ---------------------------------

ieFix();
iosVhFix();

// Modules
// ---------------------------------

initModals();
loaderModals();
headerModals();
popupModals();


// variables for preventNavigation.js
var secondsBeforeExpire = "3600";
var wizardStepNo = "1";
var reloadWarning = "Möchten Sie forfahren?\nDie von Ihnen vorgenommenen Änderungen werden nicht gespeichert.";

var ANTON = window.ANTON || {};
/************************************************************************************************************************
 * ANTON Core Configuration:
 * processId: used for update method in ANTON.Remote
 * windowId: used for submit method in ANTON.Remote
 * baseUrl: used for reloadUrl
 * remoteUrl: used for submit method in ANTON.Remote
 * errorCallback: used as customizable callback on ajax fails in invoke method of ANTON.Remote
 * reloadUrl: use for reload method in ANTON.Remote
 * */

ANTON.CORE = ANTON.CORE || {};
ANTON.CORE.client = "TerminBuchen";
ANTON.CORE.fcClientId = '1';
ANTON.CORE.windowId = "dswid=2785";
ANTON.CORE.baseUrl = "/ams/TerminBuchen/wizardng/";
ANTON.CORE.processId = "006248b7-e345-42c0-a10f-9ac3146a74e3";
ANTON.CORE.remoteUrl = "/api/remote2/TerminBuchen/006248b7-e345-42c0-a10f-9ac3146a74e3/";
ANTON.CORE.sessionId = "9VlurGTy2fHOA8NbKkVI813BGGul4f3Y4WTxBMBC";
ANTON.CORE.backButtonEnabled = false;

/************************************************************************************************************************
 * ANTON WIZARD Configuration:
 * hasOverview: defines if this form has an overview step cofigured
 * unvalidatedProceed: defines if unvalidatedProceed is active
 * currentStep: Current Wizard Step
 * maxSteps: Maximum steps in form
 * overviewStep: id of the overview step (-1 if not configured)
 * */
ANTON.WIZARD = ANTON.WIZARD || {};

ANTON.WIZARD.hasOverview = false;
ANTON.WIZARD.unvalidatedProceed = ANTON.hasOverview ? 1 : false;
ANTON.WIZARD.currentStep = 1;
ANTON.WIZARD.maxSteps = 5;
ANTON.WIZARD.overviewStep = -1;

/***********Text Block Related Labels ***********/
ANTON.selectedFileNameLabel = 'Dateiname' + ':';
ANTON.userAssetLoginLinkText = 'Im Servicekonto anmelden, um diese Dateien für weitere Anträge im Dokumentenspeicher abzulegen';
ANTON.userAssetSelectFromStore = 'Gespeichertes Dokument aus Meine Dokumente';
ANTON.userAssetAddToStore = "In 'Meine Dokumente' speichern";
ANTON.isUserLoggedInForUserAsset = 'false';
ANTON.userAssetsFeatureEnabled = 'false';

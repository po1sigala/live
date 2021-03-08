const IDB = function init() {
  let db = null;
  let objectStore = null;
  const DBOpenReq = indexedDB.open('BudgetDB', 9);

  // An error occurred while trying to open the DB
  DBOpenReq.addEventListener('error', (err) => {
    console.warn(err);
  });

  // DB has opened after upgradeNeeded
  DBOpenReq.addEventListener('success', (e) => {
    db = e.target.result;
    console.log('success', db);
  });
  // First time opening this DB or there is a new version number that was passed to the open method
  DBOpenReq.addEventListener('upgradeneeded', (e) => {
    db = e.target.result;
    const { oldVersion } = e;
    const newVersion = e.newVersion || db.version;
    console.log(`DB Updated from version ${oldVersion} to ${newVersion}`);
    console.log('upgrade', db);
    if (!db.objectStoreNames.contains('BudgetStoreDB')) {
      objectStore = db.createObjectStore('BudgetStoreDB', {
        autoIncrement: true,
      });
    }

    // Delete store
    if (db.objectStoreNames.contains('deleteMe')) {
      db.deleteObjectStore('deleteMe');
    }
  });
};
window.addEventListener('online', IDB());

// let db;
// // create a new db request for a "budget" database.
// const request = indexedDB.open('budget', 1);

// request.onupgradeneeded = function (event) {
//   // create object store called "pending" and set autoIncrement to true
//   const db = event.target.result;
//   db.createObjectStore('pending', { autoIncrement: true });
// };

// request.onsuccess = function (event) {
//   db = event.target.result;

//   // check if app is online before reading from db
//   if (navigator.onLine) {
//     checkDatabase();
//   }
// };

// request.onerror = function (event) {
//   console.log(`Woops! ${event.target.errorCode}`);
// };

// function saveRecord(record) {
//   // create a transaction on the pending db with readwrite access
//   const transaction = db.transaction(['pending'], 'readwrite');

//   // access your pending object store
//   const store = transaction.objectStore('pending');

//   // add record to your store with add method.
//   store.add(record);
// }

// function checkDatabase() {
//   // open a transaction on your pending db
//   let transaction = db.transaction(['pending'], 'readwrite');
//   // access your pending object store
//   const store = transaction.objectStore('pending');
//   // get all records from store and set to a variable
//   const getAll = store.getAll();
//   console.log('🚀 ~ file: db.js ~ line 74 ~ checkDatabase ~ getAll', getAll);

//   getAll.onsuccess = function () {
//     if (getAll.result.length > 0) {
//       fetch('/api/transaction/bulk', {
//         method: 'POST',
//         body: JSON.stringify(getAll.result),
//         headers: {
//           Accept: 'application/json, text/plain, */*',
//           'Content-Type': 'application/json',
//         },
//       })
//         .then((response) => response.json())
//         .then(() => {
//           // if successful, open a transaction on your pending db
//           transaction = db.transaction(['pending'], 'readwrite');

//           // access your pending object store
//           const store = transaction.objectStore('pending');

//           // clear all items in your store
//           store.clear();
//         });
//     }
//   };
// }

// // listen for app coming back online
// window.addEventListener('online', checkDatabase);

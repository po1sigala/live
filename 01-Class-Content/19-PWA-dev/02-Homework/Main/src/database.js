const localData = localStorage.getItem('content');

const IDBDatabase =
  window.indexedDB ||
  window.webkitIndexedDB ||
  window.mozIndexedDB ||
  window.msIndexedDB;

// create an indexdb database
const request = IDBDatabase.open('content', 1);
const db = request.result;

const transaction = db.transaction(['content'], 'readwrite');
const objectStore = transaction.objectStore('content');

// add a new item in the database
export const addItem = (item) => {
  objectStore.add(item);
};

// get all items from the database
export const getAllItems = () => {
  return new Promise((resolve, reject) => {
    const req = objectStore.getAll();
    req.onsuccess = () => {
      resolve(req.result);
    };
    req.onerror = (e) => {
      reject(e);
    };
  });
};

// get specific item from the database
export const getItem = (id) => {
  return new Promise((resolve, reject) => {
    const req = objectStore.get(id);
    req.onsuccess = () => {
      resolve(req.result);
    };
    req.onerror = (e) => {
      reject(e);
    };
  });
};

// remove item from the database
export const removeItem = (id) => {
  return new Promise((resolve, reject) => {
    const req = objectStore.delete(id);
    req.onsuccess = () => {
      resolve(req.result);
    };
    req.onerror = (e) => {
      reject(e);
    };
  });
};

// update item in the database
export const updateItem = (id, item) => {
  return new Promise((resolve, reject) => {
    const req = objectStore.put(item, id);
    req.onsuccess = () => {
      resolve(req.result);
    };
    req.onerror = (e) => {
      reject(e);
    };
  });
};

export default database;

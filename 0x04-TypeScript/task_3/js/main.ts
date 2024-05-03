// Import RowID and RowElement from interface.ts
import { RowID, RowElement } from './interface';

// Import everything from crud.js as CRUD
import * as CRUD from './js/crud';

// Create an object called row with the type RowElement
const row: RowElement = {
  firstName: 'Guillaume',
  lastName: 'Salva'
};

// Call insertRow command and store the returned newRowID
const newRowID: RowID = CRUD.insertRow(row);

// Update row with an age field set to 23
const updatedRow: RowElement = { ...row, age: 23 };

// Call updateRow and deleteRow commands
CRUD.updateRow(newRowID, updatedRow);
CRUD.deleteRow(newRowID);

// Import RowID and RowElement from interface.ts
import { RowID, RowElement } from './interface';

// Type declaration for insertRow function
declare function insertRow(row: RowElement): RowID;

// Type declaration for deleteRow function
declare function deleteRow(rowId: RowID): void;

// Type declaration for updateRow function
declare function updateRow(rowId: RowID, row: RowElement): RowID;

// Export type declarations
export { insertRow, deleteRow, updateRow };

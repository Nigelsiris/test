/**
 * Store Restrictions Management System
 * Google Apps Script for managing store data and restrictions
 */

// Configuration
const SHEET_NAME = 'Store Data';
const EMAIL_RECIPIENTS_SHEET = 'Email Recipients';
const TEMP_RESTRICTIONS_SHEET = 'Temporary Restrictions';

/**
 * Initialize the spreadsheet with required sheets
 */
function initializeSheets() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  
  // Create Store Data sheet if it doesn't exist
  let storeSheet = ss.getSheetByName(SHEET_NAME);
  if (!storeSheet) {
    storeSheet = ss.insertSheet(SHEET_NAME);
    storeSheet.appendRow(['Store ID', 'Store Name', 'Location', 'Restrictions', 'Status', 'Last Updated']);
    storeSheet.getRange(1, 1, 1, 6).setFontWeight('bold');
    
    // Add sample data
    storeSheet.appendRow(['S001', 'Downtown Store', 'New York, NY', 'None', 'Active', new Date()]);
    storeSheet.appendRow(['S002', 'Uptown Location', 'Los Angeles, CA', 'No deliveries after 8pm', 'Active', new Date()]);
    storeSheet.appendRow(['S003', 'Suburban Center', 'Chicago, IL', 'Weekends only', 'Active', new Date()]);
  }
  
  // Create Email Recipients sheet if it doesn't exist
  let emailSheet = ss.getSheetByName(EMAIL_RECIPIENTS_SHEET);
  if (!emailSheet) {
    emailSheet = ss.insertSheet(EMAIL_RECIPIENTS_SHEET);
    emailSheet.appendRow(['Email', 'Name', 'Notify on Update']);
    emailSheet.getRange(1, 1, 1, 3).setFontWeight('bold');
    emailSheet.appendRow(['example@example.com', 'Store Manager', 'Yes']);
  }
  
  // Create Temporary Restrictions sheet if it doesn't exist
  let tempSheet = ss.getSheetByName(TEMP_RESTRICTIONS_SHEET);
  if (!tempSheet) {
    tempSheet = ss.insertSheet(TEMP_RESTRICTIONS_SHEET);
    tempSheet.appendRow(['Store ID', 'Restriction', 'Start Date', 'End Date', 'Created By', 'Status']);
    tempSheet.getRange(1, 1, 1, 6).setFontWeight('bold');
  }
  
  return 'Sheets initialized successfully!';
}

/**
 * Create menu when spreadsheet opens
 */
function onOpen() {
  const ui = SpreadsheetApp.getUi();
  ui.createMenu('Store Management')
    .addItem('Open Dashboard', 'showDashboard')
    .addItem('Initialize Sheets', 'initializeSheets')
    .addItem('Import CSV', 'showImportDialog')
    .addSeparator()
    .addItem('Send Test Email', 'sendTestEmail')
    .addToUi();
}

/**
 * Show the web app dashboard
 */
function showDashboard() {
  const html = HtmlService.createHtmlOutputFromFile('Dashboard')
    .setWidth(1000)
    .setHeight(700)
    .setTitle('Store Restrictions Dashboard');
  SpreadsheetApp.getUi().showModalDialog(html, 'Store Management Dashboard');
}

/**
 * Serve the web app
 */
function doGet() {
  return HtmlService.createHtmlOutputFromFile('Dashboard')
    .setTitle('Store Restrictions Management')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

/**
 * Get all store data
 */
function getStoreData() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getSheetByName(SHEET_NAME);
  
  if (!sheet) {
    return { error: 'Store Data sheet not found. Please initialize sheets first.' };
  }
  
  const data = sheet.getDataRange().getValues();
  const headers = data[0];
  const rows = data.slice(1);
  
  const stores = rows.map(row => {
    const store = {};
    headers.forEach((header, index) => {
      store[header] = row[index];
    });
    return store;
  });
  
  return stores;
}

/**
 * Get temporary restrictions
 */
function getTempRestrictions() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getSheetByName(TEMP_RESTRICTIONS_SHEET);
  
  if (!sheet) {
    return [];
  }
  
  const data = sheet.getDataRange().getValues();
  if (data.length <= 1) return [];
  
  const headers = data[0];
  const rows = data.slice(1);
  
  const restrictions = rows.map(row => {
    const restriction = {};
    headers.forEach((header, index) => {
      restriction[header] = row[index];
    });
    return restriction;
  });
  
  return restrictions;
}

/**
 * Update store data
 */
function updateStore(storeId, field, value) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getSheetByName(SHEET_NAME);
  
  if (!sheet) {
    return { success: false, message: 'Store Data sheet not found' };
  }
  
  const data = sheet.getDataRange().getValues();
  const headers = data[0];
  const fieldIndex = headers.indexOf(field);
  const storeIdIndex = headers.indexOf('Store ID');
  const lastUpdatedIndex = headers.indexOf('Last Updated');
  
  if (fieldIndex === -1) {
    return { success: false, message: 'Field not found' };
  }
  
  // Find the row with the matching store ID
  for (let i = 1; i < data.length; i++) {
    if (data[i][storeIdIndex] === storeId) {
      sheet.getRange(i + 1, fieldIndex + 1).setValue(value);
      if (lastUpdatedIndex !== -1) {
        sheet.getRange(i + 1, lastUpdatedIndex + 1).setValue(new Date());
      }
      
      // Send notification email
      sendUpdateNotification(storeId, field, value);
      
      return { success: true, message: 'Store updated successfully' };
    }
  }
  
  return { success: false, message: 'Store not found' };
}

/**
 * Add a new store
 */
function addStore(storeData) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getSheetByName(SHEET_NAME);
  
  if (!sheet) {
    return { success: false, message: 'Store Data sheet not found' };
  }
  
  const newRow = [
    storeData.storeId,
    storeData.storeName,
    storeData.location,
    storeData.restrictions || 'None',
    storeData.status || 'Active',
    new Date()
  ];
  
  sheet.appendRow(newRow);
  
  return { success: true, message: 'Store added successfully' };
}

/**
 * Add temporary restriction
 */
function addTempRestriction(restrictionData) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getSheetByName(TEMP_RESTRICTIONS_SHEET);
  
  if (!sheet) {
    return { success: false, message: 'Temporary Restrictions sheet not found' };
  }
  
  const newRow = [
    restrictionData.storeId,
    restrictionData.restriction,
    new Date(restrictionData.startDate),
    new Date(restrictionData.endDate),
    restrictionData.createdBy || Session.getActiveUser().getEmail(),
    'Active'
  ];
  
  sheet.appendRow(newRow);
  
  // Send notification
  sendRestrictionNotification(restrictionData.storeId, restrictionData.restriction, restrictionData.startDate, restrictionData.endDate);
  
  return { success: true, message: 'Temporary restriction added successfully' };
}

/**
 * Send email notification for store updates
 */
function sendUpdateNotification(storeId, field, value) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const emailSheet = ss.getSheetByName(EMAIL_RECIPIENTS_SHEET);
  
  if (!emailSheet) return;
  
  const data = emailSheet.getDataRange().getValues();
  const recipients = [];
  
  for (let i = 1; i < data.length; i++) {
    if (data[i][2] === 'Yes') {
      recipients.push(data[i][0]);
    }
  }
  
  if (recipients.length === 0) return;
  
  const subject = `Store Update: ${storeId}`;
  const body = `
    A store has been updated:
    
    Store ID: ${storeId}
    Field Updated: ${field}
    New Value: ${value}
    Updated At: ${new Date().toLocaleString()}
    
    Please review the changes in the Store Management Dashboard.
  `;
  
  try {
    recipients.forEach(email => {
      MailApp.sendEmail({
        to: email,
        subject: subject,
        body: body
      });
    });
  } catch (e) {
    Logger.log('Error sending email: ' + e.toString());
  }
}

/**
 * Send notification for temporary restrictions
 */
function sendRestrictionNotification(storeId, restriction, startDate, endDate) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const emailSheet = ss.getSheetByName(EMAIL_RECIPIENTS_SHEET);
  
  if (!emailSheet) return;
  
  const data = emailSheet.getDataRange().getValues();
  const recipients = [];
  
  for (let i = 1; i < data.length; i++) {
    if (data[i][2] === 'Yes') {
      recipients.push(data[i][0]);
    }
  }
  
  if (recipients.length === 0) return;
  
  const subject = `New Temporary Restriction: ${storeId}`;
  const body = `
    A temporary restriction has been added:
    
    Store ID: ${storeId}
    Restriction: ${restriction}
    Start Date: ${startDate}
    End Date: ${endDate}
    Created At: ${new Date().toLocaleString()}
    
    Please review the changes in the Store Management Dashboard.
  `;
  
  try {
    recipients.forEach(email => {
      MailApp.sendEmail({
        to: email,
        subject: subject,
        body: body
      });
    });
  } catch (e) {
    Logger.log('Error sending email: ' + e.toString());
  }
}

/**
 * Send a test email
 */
function sendTestEmail() {
  const email = Session.getActiveUser().getEmail();
  MailApp.sendEmail({
    to: email,
    subject: 'Test Email from Store Management System',
    body: 'This is a test email. The notification system is working correctly!'
  });
  
  SpreadsheetApp.getUi().alert('Test email sent to ' + email);
}

/**
 * Import CSV data
 */
function importCSVData(csvContent) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getSheetByName(SHEET_NAME);
  
  if (!sheet) {
    return { success: false, message: 'Store Data sheet not found' };
  }
  
  try {
    const rows = Utilities.parseCsv(csvContent);
    
    // Clear existing data (except header)
    const lastRow = sheet.getLastRow();
    if (lastRow > 1) {
      sheet.deleteRows(2, lastRow - 1);
    }
    
    // Add new data (skip header row from CSV)
    for (let i = 1; i < rows.length; i++) {
      const row = rows[i];
      if (row.length > 0 && row[0]) {
        // Ensure we have 6 columns
        while (row.length < 6) {
          row.push('');
        }
        row[5] = new Date(); // Set Last Updated
        sheet.appendRow(row);
      }
    }
    
    return { success: true, message: 'CSV data imported successfully' };
  } catch (e) {
    return { success: false, message: 'Error importing CSV: ' + e.toString() };
  }
}

/**
 * Show import dialog
 */
function showImportDialog() {
  const html = HtmlService.createHtmlOutputFromFile('Import')
    .setWidth(600)
    .setHeight(400)
    .setTitle('Import CSV Data');
  SpreadsheetApp.getUi().showModalDialog(html, 'Import CSV');
}

/**
 * Delete a store
 */
function deleteStore(storeId) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getSheetByName(SHEET_NAME);
  
  if (!sheet) {
    return { success: false, message: 'Store Data sheet not found' };
  }
  
  const data = sheet.getDataRange().getValues();
  const storeIdIndex = data[0].indexOf('Store ID');
  
  for (let i = 1; i < data.length; i++) {
    if (data[i][storeIdIndex] === storeId) {
      sheet.deleteRow(i + 1);
      return { success: true, message: 'Store deleted successfully' };
    }
  }
  
  return { success: false, message: 'Store not found' };
}

/**
 * Delete a temporary restriction
 */
function deleteTempRestriction(index) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getSheetByName(TEMP_RESTRICTIONS_SHEET);
  
  if (!sheet) {
    return { success: false, message: 'Temporary Restrictions sheet not found' };
  }
  
  const lastRow = sheet.getLastRow();
  if (index >= 0 && index + 1 <= lastRow) {
    sheet.deleteRow(index + 1);
    return { success: true, message: 'Restriction deleted successfully' };
  }
  
  return { success: false, message: 'Invalid restriction index' };
}

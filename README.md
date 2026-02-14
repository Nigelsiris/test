# Google Apps Script - Store Restrictions Management System

## Overview

This is a comprehensive Google Apps Script application for managing store data and restrictions. The system provides:

- **Interactive Web Dashboard** - Real-time viewing and editing of store data
- **Temporary Restrictions Management** - Add and track time-limited restrictions
- **Email Notifications** - Automatic emails when stores are updated
- **CSV Import/Export** - Easy data import from CSV files
- **User-Friendly Interface** - Modern, responsive design

## Features

### 1. Store Management
- View all stores in an easy-to-read table
- Click any cell to edit store information inline
- Add new stores through a simple form
- Delete stores with confirmation
- Real-time updates to Google Sheets

### 2. Temporary Restrictions
- Add temporary restrictions with start and end dates
- Track who created each restriction
- View all active restrictions
- Automatic status tracking

### 3. Email Notifications
- Automatic email notifications when stores are updated
- Configurable recipient list
- Notifications for store updates and new restrictions
- Test email functionality

### 4. CSV Import
- Import store data from CSV files
- Paste CSV content directly
- Validates and processes data
- Sample CSV format provided

## Setup Instructions

### 1. Create a New Google Sheets Document

1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new spreadsheet
3. Name it "Store Restrictions Management" (or any name you prefer)

### 2. Open Apps Script Editor

1. In your Google Sheet, click **Extensions** → **Apps Script**
2. Delete any code in the default `Code.gs` file

### 3. Add the Script Files

Create the following files in the Apps Script editor:

#### File 1: Code.gs
- Click the `+` button next to Files
- Select "Script"
- Name it `Code.gs`
- Copy and paste the contents from `Code.gs` in this repository

#### File 2: Dashboard.html
- Click the `+` button next to Files
- Select "HTML"
- Name it `Dashboard`
- Copy and paste the contents from `Dashboard.html` in this repository

#### File 3: Import.html
- Click the `+` button next to Files
- Select "HTML"
- Name it `Import`
- Copy and paste the contents from `Import.html` in this repository

### 4. Save and Deploy

1. Click the **Save** icon (disk icon)
2. Click **Deploy** → **New deployment**
3. Click the gear icon next to "Select type" and choose **Web app**
4. Configure deployment settings:
   - **Description**: Store Management System v1.0
   - **Execute as**: Me
   - **Who has access**: Anyone with Google account (or adjust as needed)
5. Click **Deploy**
6. Authorize the application when prompted
7. Copy the deployment URL (you can share this with users)

### 5. Initialize the Sheets

1. Refresh your Google Sheet
2. You should see a new menu called **Store Management**
3. Click **Store Management** → **Initialize Sheets**
4. This creates three sheets:
   - **Store Info** - Main store information
   - **Email Recipients** - People to notify on updates
   - **Temporary Restrictions** - Time-limited restrictions

### 6. Configure Email Recipients

1. Go to the **Email Recipients** sheet
2. Add email addresses of people who should receive notifications
3. Set "Notify on Update" to "Yes" for active recipients

### 7. Open the Dashboard

Option A - From the Sheet:
1. Click **Store Management** → **Open Dashboard**
2. The dashboard opens in a modal dialog

Option B - As a Web App:
1. Use the deployment URL from step 4
2. Share this URL with team members
3. They can access it from any browser

## Using the Application

### Managing Stores

1. **View Stores**: The main "Stores" tab shows all store data
2. **Edit Store**: Click on any cell (except Store ID) to edit
3. **Add Store**: Go to "Add Store" tab and fill out the form
4. **Delete Store**: Click the delete button next to any store
5. **Refresh Data**: Click the refresh button to reload from the sheet

### Adding Temporary Restrictions

1. Go to the "Add Restriction" tab
2. Fill out the form:
   - Store ID (must match an existing store)
   - Restriction description
   - Start and end dates
   - Your name (optional)
3. Click "Add Restriction"
4. Email notifications are sent automatically

### Importing CSV Data

1. Click **Store Management** → **Import CSV**
2. Either:
   - Upload a CSV file using the file picker
   - Paste CSV content directly into the text area
3. Click **Import Data**
4. The data replaces existing store data (backup first!)

### CSV Format

Your CSV file should have the following columns:
```csv
Store ID,Store Name,Location,Restrictions,Status
S001,Downtown Store,New York NY,None,Active
S002,Uptown Location,Los Angeles CA,No deliveries after 8pm,Active
```

See `sample-stores.csv` for a complete example.

## Customization

### Modifying Email Content

Edit the `sendUpdateNotification()` and `sendRestrictionNotification()` functions in `Code.gs` to customize email content.

### Adding Fields

To add new fields to stores:
1. Add the column to the "Store Info" sheet
2. Update the `initializeSheets()` function
3. Update the Dashboard.html table headers
4. Update the `displayStores()` function

### Styling

All styling is contained in `Dashboard.html` and `Import.html`. Modify the `<style>` sections to change colors, fonts, layouts, etc.

## Permissions

The application requires the following permissions:
- **Google Sheets**: Read and write access to manage store data
- **Gmail**: Send emails for notifications
- **External access**: If deployed as a web app accessible to others

## Troubleshooting

### No menu appears
- Refresh the spreadsheet
- Run `onOpen()` manually from the Apps Script editor

### Emails not sending
- Check that email addresses are correct in the "Email Recipients" sheet
- Verify "Notify on Update" is set to "Yes"
- Run "Send Test Email" from the menu

### Data not updating
- Click the refresh button in the dashboard
- Check browser console for errors
- Verify you have edit permissions on the spreadsheet

### Web app shows errors
- Re-deploy the web app
- Check that you're accessing the latest deployment URL
- Clear browser cache

## Security Notes

- The application runs with your permissions
- Be careful who you share the web app URL with
- Email recipients should be trusted individuals
- Store sensitive data carefully
- Consider using Google Workspace security features

## Advanced Usage

### Scheduled Tasks

You can create time-based triggers to:
- Check for expired temporary restrictions
- Send daily summaries
- Archive old data

To add triggers:
1. In Apps Script editor, click the clock icon (Triggers)
2. Click "+ Add Trigger"
3. Choose the function and schedule

### Integration with Other Systems

The script can be extended to:
- Connect to external APIs
- Sync with other databases
- Generate reports
- Send SMS notifications (via third-party services)

## Support

For issues or questions:
1. Check the troubleshooting section above
2. Review the Google Apps Script documentation
3. Check browser console for error messages

## License

This project is provided as-is for educational and business purposes.

## Credits

Created for store management and restrictions tracking.
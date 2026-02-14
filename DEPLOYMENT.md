# Deployment Checklist

Use this checklist to ensure your Store Management System is properly deployed and configured.

## ☑️ Pre-Deployment

- [ ] Created a new Google Sheets document
- [ ] Named the spreadsheet appropriately
- [ ] Opened Apps Script editor (Extensions → Apps Script)

## ☑️ File Setup

- [ ] Created `Code.gs` with backend code
- [ ] Created `Dashboard.html` with dashboard interface
- [ ] Created `Import.html` with import dialog
- [ ] Saved all files in Apps Script editor

## ☑️ Initial Configuration

- [ ] Refreshed the Google Sheet
- [ ] Saw "Store Management" menu appear
- [ ] Clicked "Initialize Sheets" from menu
- [ ] Authorized the application when prompted
- [ ] Verified three sheets were created:
  - [ ] Store Data
  - [ ] Email Recipients
  - [ ] Temporary Restrictions

## ☑️ Testing Basic Functionality

- [ ] Opened dashboard (Store Management → Open Dashboard)
- [ ] Verified stores are displayed in the table
- [ ] Clicked on a cell to test inline editing
- [ ] Navigated to "Add Store" tab
- [ ] Tested adding a new store
- [ ] Navigated to "Add Restriction" tab
- [ ] Tested adding a temporary restriction
- [ ] Verified data appears in respective sheets

## ☑️ Email Configuration

- [ ] Opened "Email Recipients" sheet
- [ ] Added valid email addresses
- [ ] Set "Notify on Update" to "Yes" for recipients
- [ ] Tested email: Store Management → Send Test Email
- [ ] Verified test email was received
- [ ] Made a data change in dashboard
- [ ] Verified notification email was received

## ☑️ CSV Import (Optional)

- [ ] Clicked Store Management → Import CSV
- [ ] Tested with sample data from `sample-stores.csv`
- [ ] Verified data was imported correctly
- [ ] Checked that "Last Updated" column was populated

## ☑️ Web App Deployment (Optional)

- [ ] Clicked Deploy → New deployment in Apps Script
- [ ] Selected "Web app" as deployment type
- [ ] Configured settings:
  - [ ] Execute as: Me
  - [ ] Who has access: (your choice)
- [ ] Clicked Deploy
- [ ] Copied deployment URL
- [ ] Tested URL in browser
- [ ] Verified dashboard loads correctly
- [ ] Tested functionality from web app URL

## ☑️ Security & Permissions

- [ ] Reviewed who has access to the spreadsheet
- [ ] Reviewed who has access to the web app
- [ ] Verified email notification recipients are correct
- [ ] Confirmed sensitive data is appropriately protected
- [ ] Documented the deployment URL securely

## ☑️ User Training

- [ ] Shared QUICKSTART.md with users
- [ ] Demonstrated how to edit stores
- [ ] Showed how to add restrictions
- [ ] Explained email notifications
- [ ] Shared web app URL (if deployed)

## ☑️ Post-Deployment

- [ ] Documented deployment date
- [ ] Noted deployment URL
- [ ] Created backup of initial data
- [ ] Set up regular backup schedule
- [ ] Added deployment notes below

---

## 📝 Deployment Notes

**Deployment Date:** _________________

**Deployment URL:** _________________

**Authorized Users:** 
- _________________
- _________________
- _________________

**Email Recipients:**
- _________________
- _________________

**Notes/Issues:**
_________________________________________________________________
_________________________________________________________________
_________________________________________________________________

---

## 🔧 Troubleshooting Checklist

If something isn't working, check these:

- [ ] All three files are in Apps Script (Code.gs, Dashboard.html, Import.html)
- [ ] Files are saved in Apps Script editor
- [ ] Sheets have been initialized (Store Management → Initialize Sheets)
- [ ] App has been authorized (may need to re-authorize)
- [ ] Email addresses in "Email Recipients" sheet are valid
- [ ] "Notify on Update" is set to "Yes" for active recipients
- [ ] Browser allows popups (dashboard may be blocked)
- [ ] Using latest deployment URL (check Deploy → Manage deployments)
- [ ] Have edit permissions on the spreadsheet

---

## 🚀 Next Steps After Deployment

1. **Import Your Data**
   - Prepare your CSV file with store data
   - Use Store Management → Import CSV
   - Verify all data imported correctly

2. **Customize for Your Needs**
   - Update sample email text in Code.gs
   - Adjust colors/styling in Dashboard.html
   - Add custom fields if needed

3. **Set Up Regular Backups**
   - Schedule weekly data exports
   - Keep CSV backups in secure location
   - Consider versioning important changes

4. **Monitor Usage**
   - Check Apps Script execution logs
   - Monitor email delivery
   - Review user feedback

5. **Plan for Maintenance**
   - Schedule periodic reviews of restrictions
   - Clean up expired temporary restrictions
   - Update email recipient list as needed

---

**✅ Deployment Complete!**

Once all checkboxes are marked, your Store Management System is fully operational!

For questions or issues, refer to:
- README.md - Full documentation
- QUICKSTART.md - Quick setup guide
- FEATURES.md - Feature overview
- Google Apps Script documentation

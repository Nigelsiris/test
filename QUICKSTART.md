# Quick Start Guide - Store Management System

## 🚀 5-Minute Setup

### Step 1: Create Google Sheet
1. Open [Google Sheets](https://sheets.google.com)
2. Create a new blank spreadsheet
3. Name it "Store Restrictions Management"

### Step 2: Open Apps Script
1. In the menu: **Extensions** → **Apps Script**
2. You'll see a code editor open

### Step 3: Copy the Files

**Clear the default code** and create these three files:

#### Create Code.gs
1. Replace all default code with contents from `Code.gs`
2. Save (Ctrl+S or Cmd+S)

#### Create Dashboard.html
1. Click **+** next to "Files"
2. Choose **HTML**
3. Name it `Dashboard`
4. Paste contents from `Dashboard.html`
5. Save

#### Create Import.html
1. Click **+** next to "Files"
2. Choose **HTML**
3. Name it `Import`
4. Paste contents from `Import.html`
5. Save

### Step 4: Test from the Sheet
1. Go back to your Google Sheet tab
2. Refresh the page (F5)
3. You'll see a new menu: **Store Management**
4. Click **Store Management** → **Initialize Sheets**
5. Authorize the app when prompted
6. Click **Store Management** → **Open Dashboard**

✅ **You're done!** The dashboard should now open.

### Step 5: Import Sample Data (Optional)
1. Click **Store Management** → **Import CSV**
2. Copy contents from `sample-stores.csv`
3. Paste into the import dialog
4. Click Import

### Step 6: Configure Email Notifications
1. Go to the **Email Recipients** sheet in your spreadsheet
2. Add your email address
3. Set "Notify on Update" to "Yes"
4. Test: **Store Management** → **Send Test Email**

---

## 🌐 Deploy as Web App (Optional)

To share with your team:

1. In Apps Script editor: **Deploy** → **New deployment**
2. Click gear icon → **Web app**
3. Settings:
   - Execute as: **Me**
   - Who has access: **Anyone with Google account** (or your preference)
4. Click **Deploy**
5. Copy the URL and share with your team

---

## 📊 How to Use

### View and Edit Stores
- Click any cell in the stores table to edit
- Changes save automatically
- Email notifications sent on updates

### Add a New Store
1. Go to "Add Store" tab
2. Fill in the form
3. Click "Add Store"

### Add Temporary Restriction
1. Go to "Add Restriction" tab
2. Enter store ID, restriction details, and dates
3. Click "Add Restriction"
4. Team members receive email notification

### Import CSV Data
1. **Store Management** → **Import CSV**
2. Upload file or paste CSV content
3. Click Import (this replaces existing data!)

---

## 🎯 Key Features

✅ Real-time editing - Click to edit any store data  
✅ Email notifications - Automatic updates to team  
✅ Temporary restrictions - Time-limited with start/end dates  
✅ CSV import - Bulk data updates  
✅ Beautiful interface - Modern, responsive design  
✅ No coding required - Easy for anyone to use  

---

## 🆘 Troubleshooting

**Menu doesn't appear?**
- Refresh the spreadsheet
- Wait 10 seconds, then refresh again

**Can't edit dashboard?**
- Make sure you initialized sheets first
- Check you have edit permissions on the spreadsheet

**Emails not sending?**
- Add your email to "Email Recipients" sheet
- Set "Notify on Update" to "Yes"
- Try "Send Test Email" from menu

**Web app not working?**
- Redeploy: Deploy → Manage deployments → Edit → Deploy
- Clear browser cache
- Try incognito/private window

---

## 📁 File Structure

```
Code.gs           - Backend functions (Google Apps Script)
Dashboard.html    - Main dashboard interface
Import.html       - CSV import dialog
sample-stores.csv - Example data
README.md         - Full documentation
QUICKSTART.md     - This file
```

---

## 💡 Pro Tips

1. **Backup before importing** - CSV import replaces all data
2. **Use clear Store IDs** - Like S001, S002 for easy tracking
3. **Regular exports** - Download your data periodically
4. **Test emails first** - Use "Send Test Email" to verify setup
5. **Share the web app** - Easier than giving sheet access

---

## 📞 Need Help?

1. Check the full README.md for detailed documentation
2. Review the troubleshooting section above
3. Check Google Apps Script documentation
4. Verify permissions and authorization

---

**Ready to start?** Follow the 5-minute setup above! 🎉

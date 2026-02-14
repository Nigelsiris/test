# 📁 File Index - Store Management System

Quick reference guide to all files in this project.

## 🎯 Core Application Files

### Code.gs
**Size:** 12 KB | **Lines:** 427  
**Purpose:** Backend Google Apps Script code  
**Contains:**
- Data management functions
- Email notification system
- CSV import/export logic
- Sheet initialization
- API endpoints for dashboard

### Dashboard.html
**Size:** 24 KB | **Lines:** 791  
**Purpose:** Main web interface  
**Contains:**
- Interactive dashboard UI
- Store management tab
- Temporary restrictions tab
- Add store form
- Add restriction form
- JavaScript for real-time updates
- Modern CSS styling

### Import.html
**Size:** 5.6 KB | **Lines:** 232  
**Purpose:** CSV import dialog  
**Contains:**
- File upload interface
- CSV paste functionality
- Import validation
- User instructions

## 📚 Documentation Files

### README.md
**Size:** 7.1 KB  
**Purpose:** Complete project documentation  
**Use When:** You need full details about features, setup, customization, or troubleshooting  
**Contains:**
- Feature overview
- Complete setup instructions
- Usage guide
- Customization options
- Troubleshooting section
- Security notes

### QUICKSTART.md
**Size:** 4.2 KB  
**Purpose:** 5-minute quick start guide  
**Use When:** You want to get started immediately  
**Contains:**
- Step-by-step setup (5 minutes)
- Quick testing instructions
- Pro tips
- Essential troubleshooting

### FEATURES.md
**Size:** 12 KB  
**Purpose:** Detailed feature documentation  
**Use When:** You want to understand what the system can do  
**Contains:**
- Interface walkthroughs
- Design specifications
- Data structure details
- Use case examples
- Best practices

### DEPLOYMENT.md
**Size:** 5.0 KB  
**Purpose:** Deployment checklist  
**Use When:** You're deploying the system  
**Contains:**
- Pre-deployment checklist
- File setup verification
- Testing checklist
- Post-deployment tasks
- Troubleshooting steps

### SUMMARY.md
**Size:** 6.3 KB  
**Purpose:** Project overview  
**Use When:** You want a high-level understanding  
**Contains:**
- What's included
- Key features summary
- Architecture diagram
- Quick start link
- Stats and highlights

### SECURITY.md
**Size:** 7.8 KB  
**Purpose:** Security documentation  
**Use When:** You need security information  
**Contains:**
- Security measures implemented
- Manual audit results
- Security considerations
- Best practices
- Incident response guide

### INDEX.md
**Size:** This file  
**Purpose:** File directory and navigation  
**Use When:** You need to find specific information

## 🔧 Configuration Files

### appsscript.json
**Size:** 992 bytes  
**Purpose:** Apps Script configuration  
**Contains:**
- Timezone settings (update for your location!)
- Runtime version
- Web app settings
- Project metadata

## 📊 Data Files

### sample-stores.csv
**Size:** 622 bytes | **Lines:** 11  
**Purpose:** Example store data  
**Contains:**
- 10 sample stores
- Various restriction examples
- Proper CSV format demonstration

---

## 🗺️ Navigation Guide

### "I want to..."

#### Get Started Quickly
→ Read **QUICKSTART.md** (5 minutes)

#### Understand All Features
→ Read **FEATURES.md** then **README.md**

#### Deploy the System
→ Follow **DEPLOYMENT.md** checklist

#### Customize the Application
→ See "Customization" section in **README.md**

#### Troubleshoot Issues
→ Check "Troubleshooting" in **QUICKSTART.md** or **README.md**

#### Review Security
→ Read **SECURITY.md**

#### Get Project Overview
→ Start with **SUMMARY.md**

#### Import Sample Data
→ Use **sample-stores.csv** with Import dialog

#### Configure Settings
→ Update **appsscript.json** timezone

---

## 📖 Reading Order

### For New Users
1. **SUMMARY.md** - Get the big picture
2. **QUICKSTART.md** - Set it up
3. **FEATURES.md** - Learn what it can do
4. **README.md** - Deep dive into details

### For Developers
1. **SUMMARY.md** - Understand the project
2. **Code.gs** - Review backend logic
3. **Dashboard.html** - Study frontend code
4. **SECURITY.md** - Review security measures

### For Administrators
1. **QUICKSTART.md** - Quick setup
2. **DEPLOYMENT.md** - Proper deployment
3. **SECURITY.md** - Security considerations
4. **README.md** - Reference documentation

---

## 📏 Project Statistics

| Metric | Count |
|--------|-------|
| Total Files | 11 |
| Core Files | 3 (Code.gs, Dashboard.html, Import.html) |
| Documentation | 7 (README, QUICKSTART, FEATURES, etc.) |
| Total Lines | 2,600+ |
| Core Code Lines | 1,450+ |
| Documentation Lines | 1,150+ |

---

## 🔗 File Dependencies

```
Code.gs
├── Uses: SpreadsheetApp, MailApp, Utilities
└── Called by: Dashboard.html, Import.html

Dashboard.html
├── Requires: Code.gs (backend functions)
└── Standalone UI with embedded JavaScript/CSS

Import.html
├── Requires: Code.gs (importCSVData function)
└── Standalone dialog with embedded JavaScript/CSS

appsscript.json
├── Configures: Code.gs execution environment
└── Required for: Apps Script deployment

sample-stores.csv
├── Used by: Import.html (example data)
└── Optional: For demonstration purposes
```

---

## 💾 File Locations (for Apps Script)

When setting up in Google Apps Script editor:

```
Project Root
├── Code.gs              (Script file)
├── Dashboard            (HTML file - no extension)
└── Import              (HTML file - no extension)
```

**Note:** Apps Script doesn't use file extensions for HTML files in the editor.

---

## 🏷️ File Categories

### Essential (Must Have)
- ✅ Code.gs
- ✅ Dashboard.html
- ✅ Import.html

### Highly Recommended
- 📖 README.md
- 📖 QUICKSTART.md
- 🔧 appsscript.json

### Optional but Useful
- 📖 FEATURES.md
- 📖 DEPLOYMENT.md
- 📖 SECURITY.md
- 📖 SUMMARY.md
- 📖 INDEX.md
- 📊 sample-stores.csv

---

## 🔍 Quick Search

**Need to find:**
- Setup instructions → QUICKSTART.md or README.md
- Feature details → FEATURES.md
- Security info → SECURITY.md
- Deployment help → DEPLOYMENT.md
- Sample data → sample-stores.csv
- Configuration → appsscript.json
- Backend code → Code.gs
- Frontend UI → Dashboard.html
- Import dialog → Import.html

---

## ✨ Tips

1. **Bookmark** this file for quick reference
2. **Start with** QUICKSTART.md if you're new
3. **Refer to** README.md for detailed information
4. **Check** SECURITY.md before deploying to production
5. **Use** DEPLOYMENT.md as a checklist during setup

---

**Last Updated:** February 14, 2026  
**Project Version:** 1.0.0  
**Total Project Size:** ~75 KB

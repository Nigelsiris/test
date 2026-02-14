# Features Overview

## 📱 Dashboard Interface

The Store Management Dashboard provides a modern, intuitive interface for managing your store data.

### Main Features

#### 1. **Stores Tab** - View & Edit Store Data
```
┌─────────────────────────────────────────────────────────────────┐
│  🏪 Store Restrictions Dashboard                               │
│  Manage your stores, restrictions, and notifications in real-time│
├─────────────────────────────────────────────────────────────────┤
│  [Stores] [Temp Restrictions] [Add Store] [Add Restriction]    │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  💡 Quick Tips:                                                 │
│  • Click on any cell to edit store information                  │
│  • Changes are saved immediately                                │
│  • Notifications sent automatically                             │
│                                                                  │
│                                      [🔄 Refresh Data]          │
│                                                                  │
│  ┌────────────────────────────────────────────────────────┐    │
│  │ Store ID │ Name │ Location │ Restrictions │ Status │...│    │
│  ├──────────┼──────┼──────────┼──────────────┼────────┼───┤    │
│  │ S001     │ ...  │ New York │ None         │ Active │...│    │
│  │ S002     │ ...  │ LA       │ No del...    │ Active │...│    │
│  └────────────────────────────────────────────────────────┘    │
└─────────────────────────────────────────────────────────────────┘
```

#### 2. **Temporary Restrictions Tab** - Track Time-Limited Restrictions
```
┌─────────────────────────────────────────────────────────────────┐
│  📅 Temporary Restrictions:                                      │
│  • View all active temporary restrictions for stores             │
│  • Time-limited restrictions that expire automatically           │
│                                                                  │
│  ┌────────────────────────────────────────────────────────┐    │
│  │ Store │ Restriction │ Start │ End │ By │ Status │ Act  │    │
│  ├───────┼─────────────┼───────┼─────┼────┼────────┼──────┤    │
│  │ S001  │ Closed...   │ 1/1   │ 1/7 │ Me │ Active │ [🗑️] │    │
│  └────────────────────────────────────────────────────────┘    │
└─────────────────────────────────────────────────────────────────┘
```

#### 3. **Add Store Tab** - Create New Stores
```
┌─────────────────────────────────────────────────────────────────┐
│  Add New Store                                                   │
│                                                                  │
│  Store ID *        Store Name *                                  │
│  [S004.........]   [Central Store................]              │
│                                                                  │
│  Location *        Status                                        │
│  [San Francisco]   [Active ▼]                                   │
│                                                                  │
│  Restrictions                                                    │
│  [Enter any restrictions or leave blank.....................]   │
│  [...........................................................]   │
│                                                                  │
│                              [✅ Add Store] [Clear]             │
└─────────────────────────────────────────────────────────────────┘
```

#### 4. **Add Restriction Tab** - Create Temporary Restrictions
```
┌─────────────────────────────────────────────────────────────────┐
│  Add Temporary Restriction                                       │
│                                                                  │
│  Store ID *        Your Name                                     │
│  [S001.......]     [John Doe............]                       │
│                                                                  │
│  Restriction *                                                   │
│  [Describe the temporary restriction.....................]      │
│  [...........................................................]   │
│                                                                  │
│  Start Date *      End Date *                                    │
│  [2026-02-14]     [2026-02-21]                                  │
│                                                                  │
│                        [✅ Add Restriction] [Clear]             │
└─────────────────────────────────────────────────────────────────┘
```

## 🎨 Design Features

### Color Scheme
- **Primary**: Purple gradient (#667eea to #764ba2)
- **Success**: Green (#48bb78)
- **Danger**: Red (#f56565)
- **Info**: Blue (#4299e1)

### Interactive Elements
- ✅ Hover effects on all buttons
- 🎯 Click-to-edit inline fields
- 🔄 Smooth animations and transitions
- 📱 Responsive design for mobile/tablet
- 💫 Loading spinners for async operations

### User Experience
- **Real-time updates** - No page refreshes needed
- **Inline editing** - Click any cell to edit
- **Form validation** - Required fields marked with *
- **Success/error messages** - Clear feedback on actions
- **Confirmation dialogs** - Prevent accidental deletions

## 📧 Email Notifications

### Update Notification Example
```
Subject: Store Update: S001

A store has been updated:

Store ID: S001
Field Updated: Restrictions
New Value: Closed for renovation
Updated At: 2/14/2026, 12:30:45 PM

Please review the changes in the Store Management Dashboard.
```

### Restriction Notification Example
```
Subject: New Temporary Restriction: S001

A temporary restriction has been added:

Store ID: S001
Restriction: Closed for holiday
Start Date: 2026-12-25
End Date: 2026-12-26
Created At: 2/14/2026, 12:30:45 PM

Please review the changes in the Store Management Dashboard.
```

## 📊 Data Structure

### Store Data Sheet
| Column | Type | Description |
|--------|------|-------------|
| Store ID | Text | Unique identifier (e.g., S001) |
| Store Name | Text | Display name of store |
| Location | Text | Store address/city |
| Restrictions | Text | Current restrictions or "None" |
| Status | Text | Active/Inactive |
| Last Updated | Date | Auto-updated timestamp |

### Email Recipients Sheet
| Column | Type | Description |
|--------|------|-------------|
| Email | Email | Recipient email address |
| Name | Text | Recipient name |
| Notify on Update | Yes/No | Enable/disable notifications |

### Temporary Restrictions Sheet
| Column | Type | Description |
|--------|------|-------------|
| Store ID | Text | Associated store |
| Restriction | Text | Description of restriction |
| Start Date | Date | When restriction begins |
| End Date | Date | When restriction ends |
| Created By | Text | Who created it |
| Status | Text | Active/Inactive |

## 🔐 Security & Permissions

### Required Permissions
1. **Google Sheets Access**
   - Read data from sheets
   - Write/update data
   - Create/delete sheets

2. **Gmail Access**
   - Send emails as you
   - Required for notifications

3. **Drive Access** (implicit)
   - Access to the spreadsheet file

### Privacy Notes
- App runs with YOUR permissions
- Data stored in YOUR Google Sheet
- Emails sent from YOUR account
- Be careful with deployment access settings

## 🚀 Performance

- **Fast loading** - Optimized data queries
- **Efficient updates** - Only modified cells updated
- **Lazy loading** - Data loaded on tab switch
- **Caching** - Reduced redundant API calls
- **Async operations** - Non-blocking UI updates

## 📱 Browser Compatibility

✅ Chrome (recommended)  
✅ Firefox  
✅ Safari  
✅ Edge  
✅ Mobile browsers (responsive design)

## 🎯 Use Cases

1. **Retail Management**
   - Track store restrictions
   - Manage temporary closures
   - Coordinate updates across teams

2. **Restaurant Chains**
   - Location-specific restrictions
   - Holiday hours
   - Delivery limitations

3. **Service Centers**
   - Maintenance schedules
   - Temporary service interruptions
   - Customer notifications

4. **Distribution Centers**
   - Shipping restrictions
   - Warehouse capacity
   - Regional limitations

## 💡 Best Practices

1. **Regular Backups**
   - Download CSV exports weekly
   - Keep offline copies

2. **Clear Naming**
   - Use consistent Store ID format (S001, S002, etc.)
   - Descriptive store names

3. **Email Management**
   - Only notify relevant people
   - Keep recipient list updated
   - Test email functionality

4. **Data Validation**
   - Check data before CSV import
   - Verify Store IDs are unique
   - Ensure dates are formatted correctly

5. **Access Control**
   - Share web app URL carefully
   - Use appropriate "Who has access" setting
   - Audit permissions regularly

---

**Ready to get started?** Check out QUICKSTART.md for a 5-minute setup guide!

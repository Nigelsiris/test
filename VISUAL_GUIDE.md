# Visual Guide - Store Management Dashboard

This document provides ASCII art representations of what the application looks like.

## 🖥️ Main Dashboard Interface

```
╔════════════════════════════════════════════════════════════════════════╗
║                                                                        ║
║           🏪 Store Restrictions Dashboard                             ║
║     Manage your stores, restrictions, and notifications in real-time  ║
║                                                                        ║
╠════════════════════════════════════════════════════════════════════════╣
║  [  Stores  ] [ Temp Restrictions ] [ Add Store ] [ Add Restriction ] ║
╠════════════════════════════════════════════════════════════════════════╣
║                                                                        ║
║  💡 Quick Tips:                                                        ║
║  • Click on any cell to edit store information                         ║
║  • Changes are saved immediately and notifications are sent            ║
║  • Use the refresh button to reload data from the spreadsheet          ║
║                                                                        ║
║                                              [🔄 Refresh Data]         ║
║  ┌──────────────────────────────────────────────────────────────────┐ ║
║  │ Store ID │ Store Name      │ Location    │ Restrictions │ ... │   │ ║
║  ├──────────┼─────────────────┼─────────────┼──────────────┼─────┤   │ ║
║  │ S001     │ Downtown Store  │ New York NY │ None         │ ✓   │   │ ║
║  │ S002     │ Uptown Location │ Los Ang. CA │ No deliveries│ ✓   │   │ ║
║  │ S003     │ Suburban Center │ Chicago IL  │ Weekends only│ ✓   │   │ ║
║  │ S004     │ East Side       │ Boston MA   │ Ltd parking  │ ✓   │   │ ║
║  └──────────┴─────────────────┴─────────────┴──────────────┴─────┘   │ ║
║                                                                        ║
╚════════════════════════════════════════════════════════════════════════╝
```

## 📝 Add Store Form

```
╔════════════════════════════════════════════════════════════════════════╗
║                         Add New Store                                  ║
║                                                                        ║
║  Store ID *                    Store Name *                            ║
║  ┌─────────────────────┐      ┌─────────────────────────────────┐    ║
║  │ S004                │      │ Central Store                    │    ║
║  └─────────────────────┘      └─────────────────────────────────┘    ║
║                                                                        ║
║  Location *                    Status                                  ║
║  ┌─────────────────────┐      ┌─────────────────────────────────┐    ║
║  │ San Francisco, CA   │      │ Active            ▼             │    ║
║  └─────────────────────┘      └─────────────────────────────────┘    ║
║                                                                        ║
║  Restrictions                                                          ║
║  ┌───────────────────────────────────────────────────────────────┐   ║
║  │ Enter any restrictions or leave blank for none               │   ║
║  │                                                                │   ║
║  └───────────────────────────────────────────────────────────────┘   ║
║                                                                        ║
║                                 [✅ Add Store]  [Clear]               ║
╚════════════════════════════════════════════════════════════════════════╝
```

## 📅 Temporary Restrictions Tab

```
╔════════════════════════════════════════════════════════════════════════╗
║  📅 Temporary Restrictions:                                            ║
║  • View all active temporary restrictions for stores                   ║
║  • These are time-limited restrictions that expire automatically       ║
║  • Use the refresh button to see the latest restrictions               ║
║                                              [🔄 Refresh Data]         ║
║  ┌──────────────────────────────────────────────────────────────────┐ ║
║  │ Store │ Restriction     │ Start    │ End      │ By   │ Status  │  │ ║
║  ├───────┼─────────────────┼──────────┼──────────┼──────┼─────────┤  │ ║
║  │ S001  │ Closed for...   │ 02/14/26 │ 02/21/26 │ John │ Active  │  │ ║
║  │ S003  │ Holiday hours   │ 12/24/26 │ 12/26/26 │ Jane │ Active  │  │ ║
║  └───────┴─────────────────┴──────────┴──────────┴──────┴─────────┘  │ ║
╚════════════════════════════════════════════════════════════════════════╝
```

## ✉️ Email Notification

```
╔════════════════════════════════════════════════════════════════════════╗
║  From: Store Management System                                        ║
║  To: team@example.com                                                  ║
║  Subject: Store Update: S001                                           ║
╠════════════════════════════════════════════════════════════════════════╣
║                                                                        ║
║  A store has been updated:                                             ║
║                                                                        ║
║  Store ID: S001                                                        ║
║  Field Updated: Restrictions                                           ║
║  New Value: Closed for renovation                                      ║
║  Updated At: 2/14/2026, 12:30:45 PM                                    ║
║                                                                        ║
║  Please review the changes in the Store Management Dashboard.          ║
║                                                                        ║
╚════════════════════════════════════════════════════════════════════════╝
```

## 📥 CSV Import Dialog

```
╔════════════════════════════════════════════════════════════════════════╗
║                      📥 Import CSV Data                                ║
║                                                                        ║
║  Instructions:                                                         ║
║  • Upload a CSV file or paste CSV content below                        ║
║  • First row should be headers                                         ║
║  • This will replace all existing store data                           ║
║  • Make sure to backup your data before importing                      ║
║                                                                        ║
║  Upload CSV File:                                                      ║
║  [Choose File] No file chosen                                          ║
║                                                                        ║
║  Or Paste CSV Content:                                                 ║
║  ┌───────────────────────────────────────────────────────────────┐   ║
║  │ Store ID,Store Name,Location,Restrictions,Status              │   ║
║  │ S001,Downtown Store,New York,None,Active                      │   ║
║  │ S002,Uptown Location,Los Angeles,No del...,Active            │   ║
║  │                                                                │   ║
║  └───────────────────────────────────────────────────────────────┘   ║
║                                                                        ║
║                              [📥 Import Data]  [Cancel]               ║
╚════════════════════════════════════════════════════════════════════════╝
```

## 🎨 Color Scheme

### Primary Colors
```
┌─────────────────────────────────────────────────┐
│  Purple Gradient:  #667eea → #764ba2            │  Header/Buttons
│  White:           #ffffff                       │  Background
│  Light Gray:      #f5f5f5                       │  Section Backgrounds
└─────────────────────────────────────────────────┘
```

### Status Colors
```
┌─────────────────────────────────────────────────┐
│  Success Green:   #48bb78                       │  ✅ Active Status
│  Error Red:       #f56565                       │  ❌ Errors
│  Info Blue:       #4299e1                       │  ℹ️ Tips
│  Warning Orange:  #ed8936                       │  ⚠️ Warnings
└─────────────────────────────────────────────────┘
```

## 🎯 Interactive Elements

### Click to Edit
```
Before Click:
┌────────────────────┐
│ Downtown Store     │  ← Hover shows edit cursor
└────────────────────┘

During Edit:
┌────────────────────┐
│ [Central Store   ]│  ← Input field appears
└────────────────────┘

After Save:
┌────────────────────┐
│ Central Store  ✓   │  ← Shows success indicator
└────────────────────┘
```

### Button States

```
Normal:     [   Button   ]
Hover:      [  ▲Button▲  ]  (lifts up with shadow)
Clicked:    [   Button   ]  (pressed down)
Loading:    [ ⟳ Loading...]  (spinner animation)
```

## 📱 Responsive Design

### Desktop View (1000px+)
```
╔══════════════════════════════════════════════════╗
║  Full Dashboard with Sidebar                     ║
║  ┌────────┬──────────────────────────────────┐  ║
║  │  Tabs  │      Content Area                │  ║
║  │        │                                   │  ║
║  │        │                                   │  ║
║  └────────┴──────────────────────────────────┘  ║
╚══════════════════════════════════════════════════╝
```

### Tablet View (768px - 999px)
```
╔═══════════════════════════════════╗
║  Compact Dashboard                ║
║  ┌──────────────────────────────┐ ║
║  │  Tabs (Horizontal)           │ ║
║  ├──────────────────────────────┤ ║
║  │                              │ ║
║  │  Content Area (Stacked)      │ ║
║  │                              │ ║
║  └──────────────────────────────┘ ║
╚═══════════════════════════════════╝
```

### Mobile View (< 768px)
```
╔═══════════════════╗
║  Mobile Layout    ║
║  ┌──────────────┐ ║
║  │ ☰ Menu       │ ║
║  ├──────────────┤ ║
║  │              │ ║
║  │  Content     │ ║
║  │  (Single     │ ║
║  │   Column)    │ ║
║  │              │ ║
║  └──────────────┘ ║
╚═══════════════════╝
```

## 🎬 Animation Examples

### Page Load
```
Frame 1:  ⬜⬜⬜⬜⬜  Loading spinner
Frame 2:  ▓⬜⬜⬜⬜  Fading in
Frame 3:  ▓▓▓⬜⬜  Content appearing
Frame 4:  ▓▓▓▓▓  Fully loaded
```

### Button Hover
```
Normal:   [  Button  ]          Y: 0px
Hover:    [ ⬆Button⬆ ]          Y: -2px (lifted)
          └─ Shadow ─┘
```

### Success Message
```
Step 1:  💾 Saving...
Step 2:  ✅ Saved successfully!
Step 3:  (Fades out after 3 seconds)
```

## 🖼️ Full Application Flow

```
┌─────────────┐
│  User opens │
│  Dashboard  │
└──────┬──────┘
       │
       ↓
┌─────────────┐      ┌──────────────┐
│ View Stores │◄────►│ Edit Store   │
└──────┬──────┘      └──────┬───────┘
       │                    │
       ↓                    ↓
┌─────────────┐      ┌──────────────┐
│Add Store    │      │ Save to      │
│Form         │─────►│ Sheet        │
└─────────────┘      └──────┬───────┘
                            │
                            ↓
                     ┌──────────────┐
                     │ Send Email   │
                     │ Notification │
                     └──────────────┘
```

## ✨ Key Visual Features

1. **Purple Gradient Header** - Eye-catching, professional
2. **Card-Based Layout** - Modern, clean organization
3. **Hover Effects** - Interactive feedback
4. **Loading Indicators** - Clear async operation feedback
5. **Success/Error Messages** - Inline status updates
6. **Badge Status Indicators** - Color-coded status pills
7. **Smooth Transitions** - 0.3s ease for all animations
8. **Responsive Tables** - Scroll on overflow
9. **Form Validation** - Red borders on errors
10. **Icon Usage** - Emojis for visual hierarchy

---

This visual guide shows the clean, modern interface users will interact with.
The actual application will have full color, smooth animations, and interactive elements.

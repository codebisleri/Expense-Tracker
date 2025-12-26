# 💰 Expense Tracker

A modern, responsive expense tracker application built with React and Vite. Track your income and expenses with a beautiful, premium interface featuring glassmorphism design, smooth animations, and optimized performance.

![Expense Tracker](./screenshot.png)

## ✨ Features

### Core Functionality
- ✅ **Add Transactions**: Easily add income and expense transactions
- ✅ **Real-time Statistics**: View total income, expenses, and balance at a glance
- ✅ **Filter Transactions**: Filter by all, income, or expense transactions
- ✅ **Delete Transactions**: Remove unwanted transactions with confirmation
- ✅ **Mock API Integration**: Simulates fetching data from an API
- ✅ **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices

### React Hooks Implementation

This project demonstrates the use of all major React hooks:

#### 1. **useState** - State Management
- Managing form inputs (description, amount, category, type)
- Managing expenses list
- Managing filter state
- Managing loading state

#### 2. **useEffect** - Side Effects
- Fetching data from mock API on component mount
- Simulating async data loading with loading states

#### 3. **useRef** - DOM References
- Auto-focusing on description input when form loads
- Managing focus on amount input for validation errors
- Maintaining references to form fields for better UX

#### 4. **useMemo** - Performance Optimization
- Calculating total income, expenses, and balance (prevents recalculation on every render)
- Filtering expenses based on selected filter
- Formatting currency values
- Formatting dates

#### 5. **useCallback** - Function Memoization
- Optimizing `addExpense` function to prevent unnecessary re-renders
- Optimizing `deleteExpense` function
- Preventing child component re-renders

### Design Features

- 🎨 **Modern UI/UX**: Premium glassmorphism design with vibrant gradients
- 🌈 **Beautiful Color Palette**: Carefully curated colors with smooth gradients
- ✨ **Smooth Animations**: Fade-in, slide-in, and hover animations
- 🎭 **Interactive Elements**: Hover effects, focus states, and micro-animations
- 📱 **Fully Responsive**: Mobile-first design that works on all screen sizes
- 🌊 **Animated Background**: Dynamic background with shifting gradients
- 💫 **Glass Morphism**: Modern frosted glass effect on cards
- 🎯 **Category Icons**: Visual category indicators with emojis

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository or navigate to the project directory:
```bash
cd "c:\Users\User\Desktop\My Folders\My Projects\Expense Tracker"
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to:
```
http://localhost:5173
```

## 📁 Project Structure

```
expense-tracker/
├── src/
│   ├── components/
│   │   ├── ExpenseForm.jsx      # Form component with useRef
│   │   ├── ExpenseList.jsx      # List component with filtering
│   │   ├── ExpenseItem.jsx      # Individual expense item with useMemo
│   │   └── StatsCards.jsx       # Statistics cards with useMemo
│   ├── App.jsx                  # Main app component
│   ├── main.jsx                 # Entry point
│   └── index.css                # Global styles and design system
├── index.html                   # HTML template
├── package.json                 # Dependencies and scripts
├── vite.config.js              # Vite configuration
└── README.md                    # This file
```

## 🎯 Component Breakdown

### App.jsx
- Main application component
- Manages global state with `useState`
- Fetches mock data with `useEffect`
- Calculates statistics with `useMemo`
- Provides optimized callbacks with `useCallback`

### ExpenseForm.jsx
- Form for adding new transactions
- Uses `useState` for form data
- Uses `useRef` for input focus management
- Auto-focuses on description field
- Validates input before submission

### ExpenseList.jsx
- Displays list of transactions
- Implements filtering functionality
- Shows empty state when no transactions

### ExpenseItem.jsx
- Individual transaction display
- Uses `useMemo` for date and currency formatting
- Includes delete functionality with confirmation

### StatsCards.jsx
- Displays financial statistics
- Uses `useMemo` for currency formatting
- Shows total income, expenses, and balance

## 🎨 Design System

### Color Palette
- **Primary Gradient**: Purple to violet (#667eea → #764ba2)
- **Success Gradient**: Blue to cyan (#4facfe → #00f2fe)
- **Danger Gradient**: Pink to yellow (#fa709a → #fee140)
- **Background**: Dark theme with layered backgrounds

### Typography
- **Font Family**: Inter (Google Fonts)
- **Weights**: 300, 400, 500, 600, 700, 800

### Animations
- Fade in/out effects
- Slide animations
- Hover transformations
- Background gradient shifts

## 📊 Mock API Data

The application includes sample transactions:
- Salary (Income)
- Grocery Shopping (Expense)
- Freelance Project (Income)
- Electric Bill (Expense)

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## 🎓 Learning Objectives

This project demonstrates:
1. **State Management** with useState
2. **Side Effects** with useEffect
3. **Performance Optimization** with useMemo and useCallback
4. **DOM Manipulation** with useRef
5. **Component Composition** and props
6. **Modern CSS** with glassmorphism and animations
7. **Responsive Design** principles
8. **Form Handling** and validation
9. **Conditional Rendering**
10. **Event Handling**

## 🌟 Key Features Explained

### Performance Optimizations
- **useMemo**: Prevents expensive calculations from running on every render
- **useCallback**: Prevents function recreation on every render
- **Conditional Rendering**: Only renders what's needed

### User Experience
- **Auto-focus**: Description field focuses automatically
- **Validation**: Prevents invalid data entry
- **Confirmation**: Asks before deleting transactions
- **Loading States**: Shows loading indicator during data fetch
- **Empty States**: Helpful messages when no data

### Accessibility
- Semantic HTML elements
- Proper form labels
- ARIA labels on buttons
- Keyboard navigation support

## 🚀 Future Enhancements

Potential features to add:
- Local storage persistence
- Edit transaction functionality
- Date range filtering
- Export to CSV
- Charts and graphs
- Multiple currency support
- Budget goals and alerts
- Search functionality
- Categories management

## 📝 License

This project is open source and available for educational purposes.

## 🤝 Contributing

Feel free to fork this project and add your own features!

---

**Built with ❤️ using React, Vite, and modern web technologies**

# Troubleshooting Guide - Browser Not Showing Anything

## 🔍 **Step-by-Step Debugging**

### **Step 1: Check if the server is running**
1. Open your terminal
2. Run: `npm run dev`
3. Look for output like: `Local: http://localhost:5173/`
4. Open that URL in your browser

### **Step 2: Check Browser Console**
1. Open browser developer tools (F12)
2. Go to **Console** tab
3. Look for any red error messages
4. Common errors:
   - `Module not found`
   - `Cannot read property of undefined`
   - `Failed to fetch`

### **Step 3: Check Environment Variables**
The test component will show if your `.env` file is set up correctly:

1. Create a `.env` file in your project root (same level as `package.json`)
2. Add your Supabase credentials:
   ```env
   VITE_SUPABASE_URL=your_supabase_project_url_here
   VITE_SUPABASE_ANON_KEY=your_supabase_anon_key_here
   ```
3. **Restart your dev server** after creating the `.env` file

### **Step 4: Check Supabase Setup**
1. Go to your Supabase dashboard
2. Check if your project is active (not paused)
3. Go to **Table Editor** and verify the `products` table exists
4. Go to **SQL Editor** → **History** to see if your SQL commands ran successfully

### **Step 5: Test Different Routes**
Try these URLs in your browser:
- `http://localhost:5173/` (Home page)
- `http://localhost:5173/products` (Products page)
- `http://localhost:5173/about` (About page)

### **Step 6: Check Network Tab**
1. Open browser developer tools
2. Go to **Network** tab
3. Refresh the page
4. Look for failed requests (red entries)
5. Check if Supabase requests are failing

## 🚨 **Common Issues and Solutions**

### **Issue 1: "Module not found" errors**
**Solution:** Check import paths in your components
```tsx
// Make sure these imports work:
import { supabase } from '../lib/supabase'
import { useProducts } from '../hooks/useSupabase'
```

### **Issue 2: "Missing environment variables"**
**Solution:** Create `.env` file in project root
```env
VITE_SUPABASE_URL=https://your-project-id.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

### **Issue 3: "Supabase connection failed"**
**Solution:** Check your Supabase project
1. Verify project URL and API key are correct
2. Check if project is active
3. Verify RLS policies are set up

### **Issue 4: "Table doesn't exist"**
**Solution:** Create the table
1. Go to Supabase SQL Editor
2. Run the table creation SQL from `SUPABASE_SETUP.md`
3. Check Table Editor to confirm table exists

### **Issue 5: "React Query errors"**
**Solution:** Check React Query setup
1. Verify `QueryClientProvider` is wrapping your app
2. Check if `@tanstack/react-query` is installed

## 🔧 **Quick Fixes**

### **Fix 1: Restart Everything**
```bash
# Stop the dev server (Ctrl+C)
# Then restart:
npm run dev
```

### **Fix 2: Clear Browser Cache**
1. Hard refresh: `Ctrl+F5` (Windows) or `Cmd+Shift+R` (Mac)
2. Or clear browser cache completely

### **Fix 3: Check Package Installation**
```bash
npm install
```

### **Fix 4: Check for TypeScript Errors**
```bash
npm run build
```

## 📞 **If Nothing Works**

1. **Check the test component** - It will show exactly what's wrong
2. **Share the error messages** from browser console
3. **Check if your Supabase project is working** by testing in the dashboard
4. **Try creating a simple test** without Supabase first

## 🎯 **Expected Behavior**

When everything works correctly, you should see:
1. **Home page loads** with all components
2. **Test component shows** "Success! Found X products"
3. **Products page** shows product cards with images
4. **No red errors** in browser console

Let me know what the test component shows and any error messages you see! 
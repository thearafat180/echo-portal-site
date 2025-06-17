# Supabase Integration Setup Guide

This guide will help you set up Supabase integration for your TAARA Craft Website.

## 1. Create a Supabase Project

1. Go to [supabase.com](https://supabase.com) and sign up/login
2. Create a new project
3. Wait for the project to be set up (this may take a few minutes)

## 2. Get Your Project Credentials

1. In your Supabase dashboard, go to **Settings** → **API**
2. Copy your **Project URL** and **anon/public key**
3. Create a `.env` file in your project root with these values:

```env
VITE_SUPABASE_URL=your_supabase_project_url_here
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key_here
```

## 3. Create the Products Table

### Method 1: Using SQL Editor (Recommended)

In your Supabase dashboard, go to **SQL Editor** and run this SQL:

```sql
-- Create products table (if it doesn't exist)
CREATE TABLE IF NOT EXISTS products (
  id BIGSERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  description TEXT,
  price DECIMAL(10,2) NOT NULL,
  image_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security (RLS)
ALTER TABLE products ENABLE ROW LEVEL SECURITY;

-- Drop existing policy if it exists (to avoid conflicts)
DROP POLICY IF EXISTS "Allow all operations" ON products;

-- Create policy to allow all operations (for demo purposes)
-- In production, you should create more restrictive policies
CREATE POLICY "Allow all operations" ON products FOR ALL USING (true);

-- Create storage bucket for product images (only if it doesn't exist)
DO $$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM storage.buckets WHERE id = 'product-images') THEN
    INSERT INTO storage.buckets (id, name, public) VALUES ('product-images', 'product-images', true);
  END IF;
END $$;

-- Drop existing storage policies if they exist
DROP POLICY IF EXISTS "Allow public access to product images" ON storage.objects;
DROP POLICY IF EXISTS "Allow authenticated uploads to product images" ON storage.objects;

-- Create policy for storage
CREATE POLICY "Allow public access to product images" ON storage.objects FOR SELECT USING (bucket_id = 'product-images');
CREATE POLICY "Allow authenticated uploads to product images" ON storage.objects FOR INSERT WITH CHECK (bucket_id = 'product-images');
```

### Method 2: Using Table Editor (Alternative)

If the SQL method doesn't work, you can create the table manually:

1. Go to **Table Editor** in your Supabase dashboard
2. Click **"Create a new table"**
3. Set the table name to `products`
4. Add the following columns:
   - `id` (type: `bigint`, primary key, identity)
   - `name` (type: `varchar`, length: 255, not null)
   - `description` (type: `text`, nullable)
   - `price` (type: `decimal`, precision: 10, scale: 2, not null)
   - `image_url` (type: `text`, nullable)
   - `created_at` (type: `timestamptz`, default: `now()`)
   - `updated_at` (type: `timestamptz`, default: `now()`)
5. Click **"Save"**
6. Go to **Authentication** → **Policies** and enable RLS for the products table
7. Create a policy: "Allow all operations" with the condition `true`

### Method 3: Force Create Table

If neither method works, try this SQL to force create the table:

```sql
-- Drop table if it exists and recreate
DROP TABLE IF EXISTS products CASCADE;

-- Create products table
CREATE TABLE products (
  id BIGSERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  description TEXT,
  price DECIMAL(10,2) NOT NULL,
  image_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security (RLS)
ALTER TABLE products ENABLE ROW LEVEL SECURITY;

-- Create policy to allow all operations
CREATE POLICY "Allow all operations" ON products FOR ALL USING (true);
```

## 4. Verify Table Creation

After running any of the methods above:

1. **Refresh your browser** and go to **Table Editor**
2. **Check if the `products` table appears** in the list
3. **If it still doesn't appear**, try:
   - Logging out and back into Supabase
   - Clearing your browser cache
   - Checking the **SQL Editor** → **History** to see if the commands executed successfully

## 5. Add Sample Data (Optional)

Once the table is created, run this SQL to add sample products:

```sql
-- Only insert if the table is empty
INSERT INTO products (name, description, price, image_url)
SELECT * FROM (VALUES
  ('Handcrafted Wooden Bowl', 'Beautiful hand-carved wooden bowl made from sustainable oak', 45.99, 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400'),
  ('Ceramic Mug Set', 'Set of 4 hand-thrown ceramic mugs in earthy tones', 32.50, 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400'),
  ('Woven Basket', 'Traditional hand-woven basket perfect for storage or decoration', 28.75, 'https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=400'),
  ('Leather Journal', 'Hand-stitched leather journal with handmade paper', 18.99, 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400')
) AS new_products(name, description, price, image_url)
WHERE NOT EXISTS (SELECT 1 FROM products LIMIT 1);
```

## 6. Test the Integration

1. Start your development server: `npm run dev`
2. The components should now be able to fetch data from Supabase
3. Check the browser console for any errors

## 7. Available Components

- **ProductList**: Displays all products with search and delete functionality
- **AddProductForm**: Form to add new products with image upload

## 8. Available Hooks

- `useProducts()`: Fetch all products
- `useProduct(id)`: Fetch a single product
- `useProductSearch(query)`: Search products by name
- `useCreateProduct()`: Create a new product
- `useUpdateProduct()`: Update an existing product
- `useDeleteProduct()`: Delete a product
- `useUploadImage()`: Upload images to Supabase Storage

## 9. Security Considerations

- The current setup allows all operations for demo purposes
- In production, implement proper Row Level Security (RLS) policies
- Consider adding authentication for admin operations
- Set up proper CORS policies in your Supabase project

## 10. Troubleshooting

- **"Missing Supabase environment variables"**: Make sure your `.env` file is in the project root and contains the correct values
- **"Failed to fetch products"**: Check that your Supabase project is active and the table exists
- **"Storage upload failed"**: Ensure the storage bucket is created and policies are set up correctly
- **"Duplicate key value violates unique constraint"**: This means the bucket already exists, which is fine - the updated SQL handles this
- **"Table doesn't appear in GUI"**: Try refreshing the page, clearing cache, or using Method 2 (Table Editor) instead
- **"SQL commands not working"**: Check the SQL Editor history to see if there are any error messages

## 11. Next Steps

- Add authentication for admin users
- Implement more restrictive RLS policies
- Add product categories and filtering
- Implement a shopping cart system
- Add order management functionality 
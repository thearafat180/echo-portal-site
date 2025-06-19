// Supabase table: promo_codes
// Columns: code (text, primary key), discount_type (text: 'amount'|'percent'), discount_value (number), is_active (boolean), expires_at (timestamp)

export type PromoCode = {
  code: string;
  discount_type: 'amount' | 'percent';
  discount_value: number;
  is_active: boolean;
  expires_at: string | null;
};

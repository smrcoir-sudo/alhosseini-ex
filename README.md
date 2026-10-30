# Al-Husseini Exchange (alhosseini-ex.com)

سایت نرخ خرید و فروش ارز با ورود، نقش مدیر/کاربر و دعوت ایمیلی.
Static site (no build step) + Supabase (database, login) + one Vercel function (`api/invite.js`).

## راه‌اندازی (به ترتیب)

### ۱. Supabase
1. در supabase.com یک Project جدید بساز (Region را نزدیک خودت انتخاب کن).
2. **SQL Editor → New query**: محتوای `supabase/schema.sql` را بچسبان و Run بزن. بعد همین کار را با `supabase/seed.sql` (ارزهای نمونه).
3. **Authentication → Sign In / Providers → Email**: گزینه «Allow new users to sign up» را **خاموش** کن (ثبت‌نام فقط با دعوت مدیر).
4. **Authentication → URL Configuration**: Site URL را `https://alhosseini-ex.com` بگذار و همین آدرس (و `https://www.alhosseini-ex.com`) را به Redirect URLs اضافه کن.
5. **Authentication → Users → Add user**: ایمیل و رمز خودت را بساز (Auto Confirm User روشن). بعد در SQL Editor:
   ```sql
   update public.profiles set role = 'admin' where email = 'EMAIL_KHODET';
   ```
6. از **Project Settings → API** این سه مقدار را بردار: Project URL، anon public key، service_role key (service_role را جایی منتشر نکن).

### ۲. تنظیم سایت
در فایل `config.js` مقدار `SUPABASE_URL` و `SUPABASE_ANON_KEY` را بگذار.

### ۳. GitHub
یک repo خصوصی بساز و این پوشه را آپلود/push کن:
```bash
git init && git add . && git commit -m "first version"
git branch -M main
git remote add origin https://github.com/smrcoir-sudo/alhosseini-ex.git
git push -u origin main
```

### ۴. Vercel
1. Add New → Project → repo را Import کن (Framework: Other، بدون build command).
2. Settings → Environment Variables:
   - `SUPABASE_URL` = همان Project URL
   - `SUPABASE_SERVICE_ROLE_KEY` = کلید service_role
   - `SITE_URL` = `https://alhosseini-ex.com`
3. Deploy بزن.

### ۵. دامنه
Vercel → Project → Settings → Domains → `alhosseini-ex.com` و `www.alhosseini-ex.com` را اضافه کن. Vercel رکوردهای DNS دقیق را نشان می‌دهد؛ همان‌ها را در پنل جایی که دامنه را خریدی وارد کن. گواهی HTTPS خودکار صادر می‌شود.

### ۶. ایمیل دعوت (مهم)
ایمیل پیش‌فرض Supabase فقط برای تست است و تعداد ایمیل در ساعت را شدیداً محدود می‌کند. برای استفاده واقعی در **Authentication → SMTP Settings** یک سرویس ایمیل (مثلاً Resend یا Brevo) وصل کن و متن قالب‌های ایمیل را از **Authentication → Email Templates** فارسی کن.

## ورود با شماره موبایل
هنوز اضافه نشده (طبق درخواست، بعداً). نیاز به سرویس پیامک دارد و در Supabase از Authentication → Providers → Phone وصل می‌شود.

## نقش‌ها
- مهمان: نرخ‌ها و تاریخچه را می‌بیند.
- کاربر: ورود، پنل کاربری، ثبت دعوت.
- مدیر: ویرایش نرخ و ارزها، پنل مدیران، ارسال دعوت‌نامه ایمیلی، تعیین ترتیب تابلو.

امنیت با قوانین دیتابیس (RLS در `schema.sql`) اجرا می‌شود، نه فقط با پنهان کردن دکمه‌ها.

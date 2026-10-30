-- Sample currencies (replace with real rates from the admin panel)
insert into public.docs(collection,id,data) values
('currencies','USD','{"n": "دلار آمریکا", "f": "🇺🇸", "b": 1, "s": 1, "o": 0}'::jsonb),
('currencies','EUR','{"n": "یورو", "f": "🇪🇺", "b": 0.92, "s": 0.93, "o": 1}'::jsonb),
('currencies','GBP','{"n": "پوند انگلیس", "f": "🇬🇧", "b": 0.78, "s": 0.79, "o": 2}'::jsonb),
('currencies','AED','{"n": "درهم امارات", "f": "🇦🇪", "b": 3.66, "s": 3.68, "o": 3}'::jsonb),
('currencies','TRY','{"n": "لیر ترکیه", "f": "🇹🇷", "b": 34, "s": 35, "o": 4}'::jsonb),
('currencies','CAD','{"n": "دلار کانادا", "f": "🇨🇦", "b": 1.365, "s": 1.375, "o": 5}'::jsonb),
('currencies','AUD','{"n": "دلار استرالیا", "f": "🇦🇺", "b": 1.51, "s": 1.53, "o": 6}'::jsonb),
('currencies','CHF','{"n": "فرانک سوئیس", "f": "🇨🇭", "b": 0.875, "s": 0.885, "o": 7}'::jsonb),
('currencies','JPY','{"n": "ین ژاپن", "f": "🇯🇵", "b": 149, "s": 151, "o": 8}'::jsonb),
('currencies','CNY','{"n": "یوان چین", "f": "🇨🇳", "b": 7.17, "s": 7.23, "o": 9}'::jsonb),
('currencies','INR','{"n": "روپیه هند", "f": "🇮🇳", "b": 82.6, "s": 83.4, "o": 10}'::jsonb),
('currencies','SAR','{"n": "ریال عربستان", "f": "🇸🇦", "b": 3.745, "s": 3.755, "o": 11}'::jsonb),
('currencies','IQD','{"n": "دینار عراق", "f": "🇮🇶", "b": 1310, "s": 1330, "o": 12}'::jsonb),
('currencies','IRT','{"n": "تومان ایران", "f": "🇮🇷", "b": 59800, "s": 60200, "o": 13}'::jsonb)
on conflict (collection,id) do nothing;

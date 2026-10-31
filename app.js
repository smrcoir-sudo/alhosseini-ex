
(function(){
var $=function(i){return document.getElementById(i)};
var LN=['fa','ar','en'],LI=0,PG='converter';
var D={
logo:["نرخ‌یار","سعر يار","RateYar"],
title:["الحسینی | نرخ خرید و فروش ارز","الحسيني | أسعار شراء وبيع العملات","Al-Husseini | Currency buy & sell rates"],
nConv:["مبدل ارز","محوّل العملات","Converter"],nBoard:["تابلوی نرخ","لوحة الأسعار","Rate board"],nPop:["پرکاربرد","الأكثر استخداماً","Popular"],nCross:["جدول تبدیل","جدول التحويل","Conversion table"],nEdit:["ویرایش نرخ‌ها","تعديل الأسعار","Edit rates"],nAdd:["افزودن ارز","إضافة عملة","Add currency"],
h1:["نرخ خرید و فروش جدا برای هر ارز","سعر شراء وبيع مستقل لكل عملة","Separate buy and sell rates for every currency"],
hp:["برای هر ارز نرخ خرید و فروش بگذارید؛ تبدیل‌ها دقیقاً مثل صرافی با اختلاف نرخ محاسبه می‌شوند.","حدّد سعر شراء وبيع لكل عملة؛ تُحسب التحويلات مثل مكاتب الصرافة مع فارق السعر.","Set a buy and a sell rate for each currency. Conversions are calculated like an exchange office, with the spread applied."],
amount:["مبلغ","المبلغ","Amount"],give:["شما می‌دهید","أنت تدفع","You give"],get:["شما می‌گیرید","أنت تستلم","You get"],swap:["جابه‌جایی ارزها","تبديل العملتين","Swap currencies"],
tSample:["نرخ نمونه","سعر تجريبي","Sample rate"],tCustom:["نرخ ثبت‌شده","سعر محدَّث","Updated rate"],tMan:["نرخ دستی","سعر يدوي","Manual rate"],
manChk:["نرخ دستی برای همین تبدیل","سعر يدوي لهذا التحويل","Manual rate for this conversion"],
manLbl:["۱ {0} برابر است با چند {1}؟","1 {0} يساوي كم {1}؟","1 {0} equals how many {1}?"],
backS:["(برگشت)","(عكسي)","(reverse)"],
spread:["اختلاف رفت و برگشت: {0}٪","الفارق بين الذهاب والإياب: {0}٪","Round-trip spread: {0}%"],
enter:["مبلغ را وارد کنید","أدخل المبلغ","Enter an amount"],same:["ارز مبدأ و مقصد یکی است.","العملتان متطابقتان.","Both currencies are the same."],
howMan:["این تبدیل با نرخ دستی شما محاسبه شد و نرخ خرید و فروش تابلو اعمال نشده است.","حُسب هذا التحويل بسعرك اليدوي دون تطبيق أسعار اللوحة.","This conversion uses your manual rate. The board's buy and sell rates were not applied."],
how1:["{0} به دلار: هر ۱ دلار با <span class='se'>نرخ فروش {1}</span> {0} فروخته می‌شود.","{0} إلى الدولار: يُباع كل 1 دولار بـ<span class='se'>سعر البيع {1}</span> {0}.","{0} to USD: each 1 USD is sold at the <span class='se'>sell rate of {1}</span> {0}."],
how2:["دلار به {0}: هر ۱ دلار با <span class='bu'>نرخ خرید {1}</span> {0} خریده می‌شود.","الدولار إلى {0}: يُشترى كل 1 دولار بـ<span class='bu'>سعر الشراء {1}</span> {0}.","USD to {0}: each 1 USD is bought at the <span class='bu'>buy rate of {1}</span> {0}."],
how3:["نرخ تبدیل = {0} ÷ {1} = {2}","سعر التحويل = {0} ÷ {1} = {2}","Conversion rate = {0} ÷ {1} = {2}"],
boardT:["تابلوی نرخ (مبنا دلار)","لوحة الأسعار (الأساس الدولار)","Rate board (USD base)"],
boardH:["هر ردیف یعنی ۱ دلار (USD) چند واحد از آن ارز است. نرخ خرید یعنی صرافی دلار را از شما می‌خرد، نرخ فروش یعنی دلار را به شما می‌فروشد.","كل صف يبيّن كم وحدة من العملة تساوي 1 دولار (USD). سعر الشراء: يشتري الصرّاف الدولار منك. سعر البيع: يبيعك الدولار.","Each row shows how many units of that currency 1 USD equals. Buy rate: the exchange office buys USD from you. Sell rate: it sells USD to you."],
thCur:["ارز","العملة","Currency"],thCode:["کد","الرمز","Code"],thBuy:["نرخ خرید","سعر الشراء","Buy rate"],thSell:["نرخ فروش","سعر البيع","Sell rate"],thSpr:["اختلاف","الفارق","Spread"],
popT:["تبدیل‌های پرکاربرد","التحويلات الشائعة","Popular conversions"],
popH:["برای اعمال روی مبدل بالا لمس کنید. نرخ رفت و برگشت با هم فرق دارد.","المس لتطبيقها على المحوّل أعلاه. سعر الذهاب يختلف عن العودة.","Tap to apply to the converter above. Forward and reverse rates differ."],
crossT:["تبدیل {0} به ارزهای دیگر","تحويل {0} إلى العملات الأخرى","Converting {0} to other currencies"],
crossH:["مبلغ {0} {1} با نرخ خرید و فروش به هر ارز تبدیل شده است.","تم تحويل مبلغ {0} {1} إلى كل عملة بأسعار الشراء والبيع.","{0} {1} converted to each currency using buy and sell rates."],
thFwd:["نرخ رفت","سعر الذهاب","Forward rate"],thRev:["نرخ برگشت","سعر العودة","Reverse rate"],thAmt:["مبلغ شما","مبلغك","Your amount"],
editT:["ویرایش نرخ‌ها","تعديل الأسعار","Edit rates"],
editH:["نرخ هر ارز را نسبت به ۱ دلار وارد کنید: خرید و فروش.","أدخل سعر كل عملة مقابل 1 دولار: الشراء والبيع.","Enter each currency's rate per 1 USD: buy and sell."],
thBuyUsd:["خرید دلار","شراء الدولار","Buy USD"],thSellUsd:["فروش دلار","بيع الدولار","Sell USD"],
save:["ذخیره نرخ‌ها","حفظ الأسعار","Save rates"],reset:["بازگشت به نرخ نمونه","استعادة الأسعار التجريبية","Reset to sample rates"],
note:["نرخ‌های اولیه فقط نمونه و تقریبی هستند، نه نرخ بازار. قبل از استفاده مقدار واقعی را وارد کنید. نرخ فروش معمولاً بالاتر از خرید است.","الأسعار الأولية تجريبية وتقريبية وليست أسعار السوق. أدخل القيم الحقيقية قبل الاستخدام. سعر البيع عادةً أعلى من الشراء.","The starting rates are rough samples, not market rates. Enter real values before use. The sell rate is normally higher than the buy rate."],
addT:["افزودن ارز جدید","إضافة عملة جديدة","Add a new currency"],
addH:["نرخ‌ها را به‌صورت «۱ دلار چند واحد از این ارز» وارد کنید. نرخ فروش باید برابر یا بیشتر از خرید باشد.","أدخل الأسعار على شكل «1 دولار = كم وحدة من هذه العملة». يجب ألا يقل سعر البيع عن الشراء.","Enter rates as “1 USD = how many units of this currency”. The sell rate must be at least the buy rate."],
lCode:["کد ارز","رمز العملة","Currency code"],lName:["نام ارز","اسم العملة","Currency name"],lFlag:["پرچم (اختیاری)","العلم (اختياري)","Flag (optional)"],
addB:["افزودن","إضافة","Add"],del:["حذف","حذف","Delete"],phName:["دینار کویت","دينار كويتي","Kuwaiti Dinar"],
eCode:["کد ارز باید ۲ تا ۱۲ حرف، عدد انگلیسی یا خط تیره باشد.","يجب أن يتكون الرمز من 2 إلى 12 حرفاً أو رقماً إنجليزياً أو شرطة.","The code must be 2–12 English letters, digits or hyphens."],
eDup:["ارز {0} از قبل در لیست هست.","العملة {0} موجودة مسبقاً.","{0} is already in the list."],
eNum:["نرخ خرید و فروش را به‌صورت عدد مثبت وارد کنید.","أدخل سعر الشراء والبيع كأرقام موجبة.","Enter buy and sell rates as positive numbers."],
eSell:["نرخ فروش نباید کمتر از نرخ خرید باشد.","يجب ألا يقل سعر البيع عن سعر الشراء.","The sell rate can't be lower than the buy rate."],
eMax:["حداکثر ۴۰ ارز مجاز است.","الحد الأقصى 40 عملة.","Maximum 40 currencies."],
eSellK:["در {0} نرخ فروش نباید کمتر از خرید باشد.","في {0} يجب ألا يقل سعر البيع عن الشراء.","For {0}, the sell rate can't be lower than the buy rate."],
ePos:["نرخ‌ها باید عدد مثبت باشند.","يجب أن تكون الأسعار أرقاماً موجبة.","Rates must be positive numbers."],
okAdd:["ارز {0} اضافه شد و برای همه کاربران در دسترس است.","أُضيفت العملة {0} وهي متاحة لجميع المستخدمين.","{0} was added and is available to all users."],
okDel:["ارز {0} برای همه کاربران حذف شد.","حُذفت العملة {0} لجميع المستخدمين.","{0} was removed for all users."],
okSave:["نرخ‌ها ذخیره شد و برای همه کاربران به‌روز شد.","حُفظت الأسعار وتحدّثت لجميع المستخدمين.","Rates saved and updated for all users."],
noChg:["تغییری برای ذخیره نیست.","لا توجد تغييرات للحفظ.","Nothing to save."],
okReset:["نرخ‌ها به مقادیر نمونه برگشت.","عادت الأسعار إلى القيم التجريبية.","Rates restored to the sample values."],
fail:["ذخیره نشد: {0}","تعذّر الحفظ: {0}","Couldn't save: {0}"],unk:["خطای نامشخص","خطأ غير معروف","Unknown error"],
rAdmin:["مدیر","مدير","Admin"],
nHist:["تاریخچه نرخ","سجل الأسعار","Rate history"],
histT:["تاریخچه تغییر نرخ","سجل تغيّر الأسعار","Rate change history"],
histH:["نمودار و جدول تغییرات نرخ خرید و فروش هر ارز نسبت به ۱ دلار. هر بار که مدیر نرخی را ذخیره کند، یک نقطه جدید ثبت می‌شود.","رسم وجدول لتغيّر سعر الشراء والبيع لكل عملة مقابل 1 دولار. تُسجَّل نقطة جديدة كلما حفظ المدير سعراً.","Chart and table of each currency's buy and sell rate per 1 USD. A new point is recorded each time the admin saves a rate."],
hVs:["نسبت به","مقابل","Against"],
chgF:["تغییر رفت","تغيّر الذهاب","Forward change"],chgR:["تغییر برگشت","تغيّر العودة","Reverse change"],
bhT:["ثبت دستی در تاریخچه","إضافة يدوية إلى السجل","Add a past history point"],
bhH:["برای ثبت نرخ‌های گذشته، تاریخ را میلادی (مثل 2026-10-01) یا شمسی (مثل 1405/07/09) وارد کنید. نرخ فعلی تغییر نمی‌کند و فقط به تاریخچه اضافه می‌شود.","لإضافة أسعار سابقة، أدخل التاريخ ميلادياً (مثل 2026-10-01) أو شمسياً (مثل 1405/07/09). لا يتغيّر السعر الحالي، بل تُضاف النقطة إلى السجل فقط.","To add past rates, enter the date in Gregorian (e.g. 2026-10-01) or Solar Hijri (e.g. 1405/07/09). The current rate is unchanged; the point is only added to the history."],
bhDate:["تاریخ","التاريخ","Date"],bhTime:["ساعت","الوقت","Time"],bhAdd:["ثبت در تاریخچه","إضافة إلى السجل","Add to history"],
eDate:["تاریخ نامعتبر است. مثال: 2026-10-01 یا 1405/07/09","التاريخ غير صالح. مثال: 2026-10-01 أو 1405/07/09","Invalid date. Example: 2026-10-01 or 1405/07/09"],
eFuture:["تاریخ نباید در آینده باشد.","يجب ألا يكون التاريخ في المستقبل.","The date can't be in the future."],
okHAdd:["نقطه به تاریخچه اضافه شد.","أُضيفت النقطة إلى السجل.","Point added to the history."],
okHDel:["نقطه از تاریخچه حذف شد.","حُذفت النقطة من السجل.","History point deleted."],
nFav:["علاقه‌مندی‌ها","المفضلة","Favorites"],
favT:["لیست علاقه‌مندی‌ها","قائمة المفضلة","Favorites list"],
favH:["جفت‌ارزهای مورد علاقه‌تان را با ستاره ذخیره کنید تا نرخ‌شان را با یک نگاه ببینید. لیست فقط روی همین دستگاه ذخیره می‌شود (حداکثر ۲۰ مورد).","احفظ أزواج العملات المفضلة بالنجمة لتراها بنظرة واحدة. تُحفظ القائمة على هذا الجهاز فقط (حتى 20 زوجاً).","Star the currency pairs you follow to see their rates at a glance. The list is saved on this device only (up to 20 pairs)."],
favAdd:["افزودن به علاقه‌مندی‌ها","أضف إلى المفضلة","Add to favorites"],favDel:["حذف از علاقه‌مندی‌ها","أزل من المفضلة","Remove from favorites"],
favEmpty:["هنوز جفت‌ارزی ذخیره نکرده‌اید. در مبدل ارزها را انتخاب کنید و دکمه ستاره را بزنید.","لم تحفظ أي زوج بعد. اختر العملتين في المحوّل واضغط زر النجمة.","No pairs saved yet. Pick two currencies in the converter and tap the star button."],
nBoard2:["تابلوی متفرقه","لوحة متنوعة","Other board"],
b2T:["تابلوی نرخ (مبنا {0})","لوحة الأسعار (الأساس {0})","Rate board ({0} base)"],
b2H:["قیمت ۱ واحد از هر ارز به {0}. نرخ خرید: صرافی ارز را از شما می‌خرد و {0} می‌دهد. نرخ فروش: ارز را به شما می‌فروشد و در برابرش {0} می‌گیرد.","سعر وحدة واحدة من كل عملة بـ{0}. سعر الشراء: يشتري الصرّاف العملة منك ويدفع لك {0}. سعر البيع: يبيعك العملة ويأخذ منك {0}.","Price of 1 unit of each currency in {0}. Buy rate: the exchange office buys the currency from you and pays {0}. Sell rate: it sells you the currency and you pay {0}."],
b2Inv:["⇄ برعکس کردن ارزها","⇄ عكس العملات","⇄ Invert pairs"],b2TI:["تابلوی نرخ (۱ {0} به ارزهای دیگر)","لوحة الأسعار (١ {0} بالعملات الأخرى)","Rate board (1 {0} in other currencies)"],b2HI:["قیمت ۱ واحد {0} به هر ارز. نرخ خرید: صرافی {0} را از شما می‌خرد و ارز مقابل را می‌دهد. نرخ فروش: {0} را به شما می‌فروشد و ارز مقابل را می‌گیرد.","سعر وحدة واحدة من {0} بكل عملة. سعر الشراء: يشتري الصرّاف {0} منك ويدفع لك العملة المقابلة. سعر البيع: يبيعك {0} ويأخذ منك العملة المقابلة.","Price of 1 unit of {0} in each currency. Buy rate: the exchange office buys {0} from you and pays the other currency. Sell rate: it sells you {0} and you pay the other currency."],b2Base:["ارز مبنا","العملة الأساسية","Base currency"],
nMore:["بیشتر","المزيد","More"],
b2Ed:["ویرایش ترتیب","تعديل الترتيب","Edit order"],b2Sv:["ذخیره ترتیب","حفظ الترتيب","Save order"],b2Cn:["انصراف","إلغاء","Cancel"],b2Rs:["ترتیب پیش‌فرض","الترتيب الافتراضي","Default order"],
b2Hint:["با فلش‌ها اولویت نمایش ارزها را تعیین کنید. این ترتیب برای همه کاربران اعمال می‌شود.","استخدم الأسهم لتحديد أولوية عرض العملات. يُطبّق الترتيب على جميع المستخدمين.","Use the arrows to set the display priority of the currencies. The order applies to all users."],
okOrd:["ترتیب نمایش ذخیره شد.","حُفظ ترتيب العرض.","Display order saved."],mUp:["بالا","أعلى","Move up"],mDn:["پایین","أسفل","Move down"],
r7:["۷ روز","7 أيام","7 days"],r30:["۳۰ روز","30 يوماً","30 days"],r90:["۹۰ روز","90 يوماً","90 days"],rAll:["همه","الكل","All"],
calG:["میلادی","ميلادي","Gregorian"],calJ:["شمسی","هجري شمسي","Solar Hijri"],
chgB:["تغییر خرید","تغيّر الشراء","Buy change"],chgS:["تغییر فروش","تغيّر البيع","Sell change"],nChg:["تعداد تغییرها","عدد التغييرات","Changes"],thChg:["تغییر","التغيّر","Change"],
noHist:["هنوز تغییری برای این ارز ثبت نشده است.","لم تُسجَّل أي تغييرات لهذه العملة بعد.","No changes have been recorded for this currency yet."],
noHistG:["تاریخچه فقط برای کاربران واردشده نمایش داده می‌شود.","يظهر السجل للمستخدمين المسجّلين فقط.","History is shown to signed-in users only."],rUser:["کاربر","مستخدم","User"],rGuest:["مهمان","زائر","Guest"],
nAdm:["شما مدیر هستید: تغییر نرخ‌ها و افزودن یا حذف ارز از پایین همین صفحه انجام می‌شود و برای همه کاربران اعمال می‌شود.","أنت مدير: تعديل الأسعار وإضافة العملات أو حذفها من أسفل هذه الصفحة، وتُطبَّق على جميع المستخدمين.","You are an admin: edit rates and add or remove currencies at the bottom of this page. Changes apply to all users."],
nUsr:["نرخ‌ها را مدیر سایت تعیین می‌کند و به‌صورت زنده به‌روز می‌شود.","يحدّد مدير الموقع الأسعار وتتحدّث مباشرة.","The site admin sets the rates and they update live."],
nGst:["شما وارد نشده‌اید. نرخ‌ها برای همه نمایش داده می‌شود؛ برای ثبت دعوت یا مدیریت وارد شوید.", "لم تسجّل الدخول. الأسعار ظاهرة للجميع؛ سجّل الدخول لإرسال الدعوات أو للإدارة.", "You are not signed in. Rates are visible to everyone; sign in to send invitations or manage the site."],
nAcc:["پنل کاربری","لوحة المستخدم","My panel"],nAdmP:["پنل مدیران","لوحة المديرين","Admin panel"],
accT:["پنل کاربری","لوحة المستخدم","User panel"],accH:["اطلاعات حساب شما و دعوت از دیگران.","معلومات حسابك ودعوة الآخرين.","Your account and invitations."],
accNameL:["نام","الاسم","Name"],accRoleL:["نقش","الدور","Role"],
accLvAdmin:["شما مدیر هستید: نرخ‌ها و دعوت‌ها را مدیریت می‌کنید.","أنت مدير: تدير الأسعار والدعوات.","You are an admin: you manage rates and invitations."],
accLvUser:["شما می‌توانید دیگران را دعوت کنید.","يمكنك دعوة الآخرين.","You can invite other people."],
accLvView:["حساب شما فعال است.", "حسابك مفعّل.", "Your account is active."],
invT:["دعوت از یک نفر","دعوة شخص","Invite someone"],
invH:["نام، ایمیل یا شماره او را بنویسید. دعوت شما برای مدیران ثبت می‌شود و بعد از تأیید و دادن دسترسی، او می‌تواند وارد شود.","اكتب اسمه أو بريده أو رقمه. تُسجَّل دعوتك للمديرين، وبعد الموافقة ومنح الوصول يستطيع الدخول.","Enter their name, email or phone. Your invitation is recorded for the admins; once approved and given access, they can sign in."],
invContact:["نام / ایمیل / شماره","الاسم / البريد / الرقم","Name / email / phone"],invNote:["توضیح (اختیاری)","ملاحظة (اختياري)","Note (optional)"],invSend:["ثبت دعوت","إرسال الدعوة","Send invitation"],
invOk:["دعوت ثبت شد و برای مدیران ارسال شد.","سُجّلت الدعوة وأُرسلت للمديرين.","Invitation recorded and sent to the admins."],
invErrC:["نام یا ایمیل را وارد کنید.","أدخل الاسم أو البريد.","Enter a name or email."],
invNoW:["دسترسی ثبت دعوت ندارید.","لا تملك صلاحية إرسال الدعوات.","You don't have permission to send invitations."],
myInvT:["دعوت‌های من","دعواتي","My invitations"],myInvE:["هنوز دعوتی نفرستاده‌اید.","لم ترسل أي دعوة بعد.","You haven't sent any invitations yet."],
shT:["لینک و پیام دعوت","رابط ورسالة الدعوة","Invite link and message"],
shH:["این پیام را برای هر کسی بفرستید. برای ورود باید مدیر او را دعوت کند.", "أرسل هذه الرسالة لأي شخص. للدخول يجب أن يدعوه المدير.", "Send this message to anyone. To sign in, an admin must invite them."],
invMsg:["سلام، شما به سایت نرخ ارز «مکتب السید الحسینی» دعوت شده‌اید: {0}\nبعد از دریافت ایمیل دعوت، رمز عبور خود را تعیین کنید. نوع دسترسی: {1}", "مرحباً، أنت مدعو إلى موقع أسعار العملات «مكتب السيد الحسيني»: {0}\nبعد وصول رسالة الدعوة حدّد كلمة المرور. نوع الوصول: {1}", "Hello, you're invited to the Al-Husseini currency rates site: {0}\nAfter you receive the invitation email, set your password. Access type: {1}"],
copy:["کپی","نسخ","Copy"],copied:["کپی شد","تم النسخ","Copied"],share:["اشتراک‌گذاری","مشاركة","Share"],you:["شما","أنت","You"],
admT:["پنل مدیران","لوحة المديرين","Admin panel"],
admH:["دعوت‌ها را بررسی کنید، دعوت جدید برای کاربر یا مدیر بسازید و وضعیت هر کدام را ثبت کنید.","راجع الدعوات وأنشئ دعوة جديدة لمستخدم أو مدير وسجّل حالة كل واحدة.","Review invitations, create new ones for users or admins, and track each one's status."],
admHow:["دعوت ایمیلی: ایمیل فرد را بنویس و «ارسال دعوت‌نامه ایمیلی» را بزن. او ایمیلی با لینک دریافت می‌کند، رمز خود را می‌گذارد و با نقشی که انتخاب کردی وارد می‌شود. برای دعوت‌هایی که کاربران ثبت کرده‌اند، در همان ردیف همین دکمه هست.", "الدعوة بالبريد: اكتب بريد الشخص واضغط «إرسال دعوة بالبريد». يصله بريد برابط، يحدّد كلمة المرور ويدخل بالدور الذي اخترته. لدعوات المستخدمين يوجد الزر نفسه في صفّها.", "Email invitation: type the person's email and press “Send email invitation”. They receive an email with a link, set a password, and sign in with the role you chose. Invitations recorded by users have the same button in their row."],
admNewT:["دعوت جدید","دعوة جديدة","New invitation"],admRole:["نوع دعوت","نوع الدعوة","Invitation type"],admInbox:["دعوت‌ها","الدعوات","Invitations"],
admEmpty:["دعوتی ثبت نشده است.","لا توجد دعوات.","No invitations yet."],cnt:["{0} در انتظار","{0} قيد الانتظار","{0} pending"],
thWho:["دعوت‌شده","المدعو","Invitee"],thType:["نوع","النوع","Type"],thBy:["دعوت‌کننده","الداعي","Invited by"],thDate:["تاریخ","التاريخ","Date"],thSt:["وضعیت","الحالة","Status"],
stP:["در انتظار","قيد الانتظار","Pending"],stA:["تأییدشده","مقبولة","Approved"],stD:["ردشده","مرفوضة","Declined"],
okInvDel:["دعوت حذف شد.","حُذفت الدعوة.","Invitation deleted."],okInvSt:["وضعیت ذخیره شد.","حُفظت الحالة.","Status saved."],
authIn:["ورود","دخول","Sign in"],authDone:["ثبت‌نام شما با موفقیت انجام شد","تم تسجيلك بنجاح","Your registration was successful"],authDoneH:["ایمیل شما تأیید شد و حساب شما فعال است. اکنون وارد سایت شده‌اید.","تم تأكيد بريدك وتفعيل حسابك. أنت الآن مسجّل الدخول.","Your email is confirmed and your account is active. You are now signed in."],authOk:["ادامه","متابعة","Continue"],authFn:["نام","الاسم","First name"],authLn:["نام خانوادگی","اللقب","Last name"],authPh:["شماره تلفن (اختیاری)","رقم الهاتف (اختياري)","Phone (optional)"],authNeedName:["نام و نام خانوادگی را وارد کنید.","أدخل الاسم واللقب.","Enter your first and last name."],authBadPh:["شماره تلفن معتبر نیست.","رقم الهاتف غير صالح.","Invalid phone number."],admUsers:["کاربران ثبت‌نام‌شده","المستخدمون المسجّلون","Registered users"],thName:["نام","الاسم","Name"],roleChg:["نقش کاربر تغییر کرد.","تم تغيير دور المستخدم.","User role changed."],thRole:["نقش","الدور","Role"],thPhone:["تلفن","الهاتف","Phone"],usRef:["بازخوانی","تحديث","Refresh"],usNone:["هنوز کاربری ثبت‌نام نکرده است.","لا يوجد مستخدمون بعد.","No users yet."],authUp:["ثبت‌نام","إنشاء حساب","Sign up"],authToUp:["حساب ندارید؟ ثبت‌نام","ليس لديك حساب؟ أنشئ حساباً","No account? Sign up"],authToIn:["حساب دارید؟ ورود","لديك حساب؟ سجّل الدخول","Have an account? Sign in"],authUpH:["با ایمیل و رمز عبور (حداقل ۸ نویسه) حساب بسازید. لینک تأیید به ایمیلتان ارسال می‌شود.","أنشئ حساباً بالبريد وكلمة المرور (٨ أحرف على الأقل). سيصلك رابط تأكيد.","Create an account with email and password (min 8 characters). A confirmation link will be emailed."],authUpSent:["ثبت‌نام انجام شد. برای فعال‌سازی، لینک تأییدی که به ایمیلتان ارسال شد را باز کنید.","تم التسجيل. افتح رابط التأكيد المرسل إلى بريدك لتفعيل الحساب.","Signed up. Open the confirmation link we emailed you to activate your account."],authOut:["خروج","خروج","Sign out"],authEmail:["ایمیل","البريد الإلكتروني","Email"],authPw:["رمز عبور","كلمة المرور","Password"],authForgot:["رمز را فراموش کرده‌ام","نسيت كلمة المرور","Forgot password"],
authInH:["با ایمیل و رمز عبور وارد شوید. اگر حساب ندارید ثبت‌نام کنید.","سجّل الدخول بالبريد وكلمة المرور. أنشئ حساباً إن لم يكن لديك.","Sign in with email and password. No account yet? Sign up below."],
authRstT:["بازیابی رمز عبور","استعادة كلمة المرور","Reset password"],authRstH:["ایمیلت را بنویس تا لینک تعیین رمز جدید برایت ارسال شود.","اكتب بريدك لإرسال رابط كلمة مرور جديدة.","Enter your email and we'll send a link to set a new password."],authSendLink:["ارسال لینک","إرسال الرابط","Send link"],
authSent:["ایمیل ارسال شد؛ صندوق ایمیل را ببین.","أُرسل البريد؛ تحقق من صندوقك.","Email sent. Check your inbox."],
authBad:["ایمیل یا رمز عبور درست نیست.","البريد أو كلمة المرور غير صحيحة.","Incorrect email or password."],
authNewT:["تعیین رمز عبور","تحديد كلمة المرور","Set your password"],authNewH:["یک رمز عبور حداقل ۸ کاراکتری بنویس.","اكتب كلمة مرور من 8 أحرف على الأقل.","Enter a password of at least 8 characters."],authSave:["ذخیره رمز","حفظ كلمة المرور","Save password"],authShort:["رمز عبور باید حداقل ۸ کاراکتر باشد.","يجب ألا تقل كلمة المرور عن 8 أحرف.","The password must be at least 8 characters."],
mailBtn:["ارسال دعوت‌نامه ایمیلی","إرسال دعوة بالبريد","Send email invitation"],mailOk:["دعوت‌نامه ایمیلی ارسال شد.","أُرسلت الدعوة بالبريد.","Email invitation sent."],mailBad:["برای ارسال ایمیل، یک آدرس ایمیل معتبر لازم است.","يلزم بريد إلكتروني صالح للإرسال.","A valid email address is required to send an invitation."],
foot:["مکتب السید الحسینی — ابزار تبدیل ارز با نرخ خرید و فروش","مكتب السيد الحسيني — أداة تحويل العملات بأسعار الشراء والبيع","Al-Husseini Office — currency converter with buy and sell rates"]
};
var NM={USD:["دلار آمریکا","الدولار الأمريكي","US Dollar"],EUR:["یورو","اليورو","Euro"],GBP:["پوند انگلیس","الجنيه الإسترليني","British Pound"],AED:["درهم امارات","الدرهم الإماراتي","UAE Dirham"],TRY:["لیر ترکیه","الليرة التركية","Turkish Lira"],CAD:["دلار کانادا","الدولار الكندي","Canadian Dollar"],AUD:["دلار استرالیا","الدولار الأسترالي","Australian Dollar"],CHF:["فرانک سوئیس","الفرنك السويسري","Swiss Franc"],JPY:["ین ژاپن","الين الياباني","Japanese Yen"],CNY:["یوان چین","اليوان الصيني","Chinese Yuan"],INR:["روپیه هند","الروبية الهندية","Indian Rupee"],SAR:["ریال عربستان","الريال السعودي","Saudi Riyal"],IQD:["دینار عراق","الدينار العراقي","Iraqi Dinar"],IRT:["تومان ایران","التومان الإيراني","Iranian Toman"]};
function t(k){var s=(D[k]||[])[LI]||k;for(var i=1;i<arguments.length;i++)s=s.split('{'+(i-1)+'}').join(arguments[i]);return s}

// [code, name, flag, buy, sell] — rates are units of the currency per 1 USD
var C=[["USD","دلار آمریکا","🇺🇸",1,1],["EUR","یورو","🇪🇺",0.92,0.93],["GBP","پوند انگلیس","🇬🇧",0.78,0.79],["AED","درهم امارات","🇦🇪",3.66,3.68],["TRY","لیر ترکیه","🇹🇷",34,35],["CAD","دلار کانادا","🇨🇦",1.365,1.375],["AUD","دلار استرالیا","🇦🇺",1.51,1.53],["CHF","فرانک سوئیس","🇨🇭",0.875,0.885],["JPY","ین ژاپن","🇯🇵",149,151],["CNY","یوان چین","🇨🇳",7.17,7.23],["INR","روپیه هند","🇮🇳",82.6,83.4],["SAR","ریال عربستان","🇸🇦",3.745,3.755],["IQD","دینار عراق","🇮🇶",1310,1330],["IRT","تومان ایران","🇮🇷",59800,60200]];
var C0=JSON.parse(JSON.stringify(C)),R={};C.forEach(function(c){R[c[0]]={b:c[3],s:c[4]}});
var custom=false,ADMIN=false,col=null,dbEmpty=true,roleK='guest',roleNm='';
var P=[["USD","IRT"],["IRT","USD"],["EUR","IRT"],["USD","EUR"],["EUR","USD"],["GBP","IRT"],["AED","IRT"],["USD","TRY"],["USD","IQD"]],PL=[];

function norm(s){return String(s||'').replace(/[۰-۹]/g,function(d){return d.charCodeAt(0)-1776}).replace(/[٠-٩]/g,function(d){return d.charCodeAt(0)-1632}).replace(/[٬,،\s]/g,'').replace(/[٫]/g,'.')}
function clean(s){return String(s==null?'':s).replace(/[<>&"'`]/g,'').trim()}
function f(n,m){return n.toLocaleString('en-US',{maximumFractionDigits:m===undefined?(Math.abs(n)>=100?2:Math.abs(n)>=1?4:8):m})}
function info(c){return C.filter(function(x){return x[0]===c})[0]}
function cname(c){return NM[c[0]]?NM[c[0]][LI]:c[1]}
function lab(c){return c[2]+' '+cname(c)}
// customer gives A (office sells USD at A's sell rate), then gets B (office buys USD at B's buy rate)
function rate(a,b){return a===b?1:R[b].b/R[a].s}
function cur(){return {a:parseFloat(norm($('amt').value)),f:$('from').value,t:$('to').value}}
function mv(){return parseFloat(norm($('manRate').value))}
function useMan(){return $('useMan').checked&&mv()>0}

function opts(){[$('from'),$('to')].forEach(function(sel,i){var p=sel.value;sel.innerHTML='';C.forEach(function(c){var o=document.createElement('option');o.value=c[0];o.textContent=lab(c)+' — '+c[0];sel.appendChild(o)});sel.value=(p&&info(p))?p:(i?(info('IRT')?'IRT':C[C.length-1][0]):'USD')})}

function calc(){
 var s=cur(),m=useMan(),r=m?mv():rate(s.f,s.t),back=rate(s.t,s.f);
 $('man').classList.toggle('on',$('useMan').checked);
 $('manLbl').textContent=t('manLbl',s.f,s.t);
 $('tag').textContent=t(m?'tMan':(custom?'tCustom':'tSample'));$('tag').className='tag'+(m?' man':'');
 $('p1').textContent='1 '+s.f+' = '+f(r)+' '+s.t;
 $('p2').textContent='1 '+s.t+' = '+f(back)+' '+s.f+' '+t('backS');
 $('p3').textContent=(s.f!==s.t&&!m)?t('spread',f((1-r*back)*100,2)):'';
 if(isNaN(s.a)){$('toTxt').textContent='—';$('fromTxt').textContent=t('enter')}else{$('fromTxt').textContent=f(s.a)+' '+s.f+' =';$('toTxt').textContent=f(s.a*r)+' '+s.t}
 var h='';
 if(s.f===s.t)h=t('same');else if(m)h=t('howMan');else{
  if(s.f!=='USD')h+=t('how1',s.f,f(R[s.f].s))+'<br>';
  if(s.t!=='USD')h+=t('how2',s.t,f(R[s.t].b))+'<br>';
  h+=t('how3',f(R[s.t].b),f(R[s.f].s),f(r))}
 $('how').innerHTML=h;cross(s)}
function cross(s){
 if(PG!=='cross')return;
 var a=isNaN(s.a)?1:s.a,tb=$('tb');tb.innerHTML='';
 $('tTitle').textContent=t('crossT',s.f);$('tHint').textContent=t('crossH',f(a),s.f);
 C.forEach(function(c){if(c[0]===s.f)return;var tr=document.createElement('tr'),r=rate(s.f,c[0]);
  tr.innerHTML='<td>'+lab(c)+'</td><td>'+c[0]+'</td><td class="n">'+f(r)+'</td><td class="n">'+f(rate(c[0],s.f))+'</td><td class="n">'+f(a*r)+'</td>';tb.appendChild(tr)})}
function board(){if(PG!=='board')return;var b=$('bb');b.innerHTML='';C.forEach(function(c){if(c[0]==='USD')return;var x=R[c[0]],tr=document.createElement('tr');
 tr.innerHTML='<td>'+lab(c)+'</td><td>'+c[0]+'</td><td class="n b">'+f(x.b)+'</td><td class="n s">'+f(x.s)+'</td><td class="n">'+f((x.s-x.b)/x.b*100,2)+'%</td>';b.appendChild(tr)})}
function pop(){var b=$('pop');b.innerHTML='';PL=P.filter(function(p){return info(p[0])&&info(p[1])});
 PL.forEach(function(p){var x=document.createElement('button');x.type='button';x.innerHTML='<b>'+p[0]+' → '+p[1]+'</b><span></span>';
  x.onclick=function(){$('from').value=p[0];$('to').value=p[1];$('useMan').checked=false;all();$('converter').scrollIntoView({behavior:'smooth'})};b.appendChild(x)})}
function popUpd(){if(PG!=='popular')return;var bs=$('pop').children;for(var i=0;i<bs.length;i++)bs[i].lastChild.textContent='1 '+PL[i][0]+' = '+f(rate(PL[i][0],PL[i][1]))+' '+PL[i][1]}
function edit(){if(PG!=='edit')return;var eb=$('eb');eb.innerHTML='';C.forEach(function(c){
 var tr=document.createElement('tr');tr.innerHTML='<td>'+lab(c)+'</td><td>'+c[0]+'</td><td class="n"></td><td class="n"></td>';
 ['b','s'].forEach(function(k,j){var i=document.createElement('input');i.className='ltr';i.addEventListener('input',function(){fmtAmt(this)});i.inputMode='decimal';i.value=f(R[c[0]][k],8);i.dataset.c=c[0];i.dataset.k=k;i.setAttribute('aria-label',c[0]+' '+t(k==='b'?'thBuyUsd':'thSellUsd'));if(c[0]==='USD')i.disabled=true;tr.children[2+j].appendChild(i)});
 var dt=document.createElement('td');if(c[0]!=='USD'){var d=document.createElement('button');d.type='button';d.className='del';d.textContent=t('del');d.setAttribute('aria-label',t('del')+' '+c[0]);d.onclick=function(){delCur(c[0])};dt.appendChild(d)}
 tr.appendChild(dt);eb.appendChild(tr)})}
function all(){calc();board();board2();popUpd();favUI()}

// ---------- language ----------
function setRole(k,nm){roleK=k;try{authUI()}catch(e){}roleNm=nm||'';
 var r=$('role');r.textContent=t(k==='admin'?'rAdmin':k==='user'?'rUser':'rGuest')+(roleNm&&k!=='guest'?': '+roleNm:'');r.className='role'+(k==='admin'?' adm':'');
 $('edit').hidden=k!=='admin';$('adminp').hidden=k!=='admin';
 var n=$('roleNote');if(!n){n=document.createElement('p');n.id='roleNote';n.className='hint';n.style.marginTop='12px';$('converter').appendChild(n)}
 n.textContent=t(k==='admin'?'nAdm':k==='user'?'nUsr':'nGst');drawHist();board2();route()}
function applyLang(){
 var h=document.documentElement;h.lang=LN[LI];h.dir=LI===2?'ltr':'rtl';document.title=t('title');
 document.querySelectorAll('[data-i]').forEach(function(e){e.textContent=t(e.dataset.i)});
 document.querySelectorAll('[data-ph]').forEach(function(e){e.placeholder=t(e.dataset.ph)});
 $('swap').setAttribute('aria-label',t('swap'));
 document.querySelectorAll('.lang button').forEach(function(b){b.classList.toggle('on',b.dataset.l===LN[LI])});
 opts();hOpts();b2Opts();pop();edit();all();drawHist();setRole(roleK,roleNm);$('addE').textContent='';var nw=new Date();$('dates').textContent=dfmt(nw,0)+' '+t('calG')+'  |  '+dfmt(nw,1)+' '+t('calJ')}
document.querySelectorAll('.lang button').forEach(function(b){b.onclick=function(){LI=LN.indexOf(b.dataset.l);try{localStorage.setItem('rateyar-lang',b.dataset.l)}catch(e){}applyLang()}});

// ---------- converter events ----------
$('swap').onclick=function(){var a=$('from').value;$('from').value=$('to').value;$('to').value=a;if(useMan())$('manRate').value=f(1/mv(),8);all()};
['amt','from','to','useMan','manRate'].forEach(function(i){$(i).addEventListener(i==='useMan'?'change':'input',function(){
 var s=cur();if((i==='useMan'&&$('useMan').checked&&!(mv()>0))||((i==='from'||i==='to')&&$('useMan').checked))$('manRate').value=f(rate(s.f,s.t),8);all()})});

// ---------- thousands separator in the amount field ----------
function fmtAmt(el){
 var v=el.value,pos=el.selectionStart==null?v.length:el.selectionStart;
 var n=norm(v.slice(0,pos)).replace(/[^0-9.]/g,'').length;
 var raw=norm(v).replace(/[^0-9.]/g,''),i=raw.indexOf('.');
 if(i>-1)raw=raw.slice(0,i+1)+raw.slice(i+1).replace(/\./g,'');
 var ip=i>-1?raw.slice(0,i):raw,dp=i>-1?raw.slice(i):'';
 var out=ip.replace(/\B(?=(\d{3})+(?!\d))/g,',')+dp,k=0,j=0;
 for(;j<out.length&&k<n;j++){if(out[j]!==',')k++}
 el.value=out;try{el.setSelectionRange(j,j)}catch(e){}}
$('amt').addEventListener('input',function(){fmtAmt(this)});
['manRate','nb','ns'].forEach(function(id){$(id).addEventListener('input',function(){fmtAmt(this)})});
fmtAmt($('amt'));

// ---------- admin (shared db) ----------
function msg(x,ok){var e=$('addE');e.textContent=x;e.className='err'+(ok?' ok':'')}
function canWrite(){return ADMIN&&!!col}
function wErr(e){msg(t('fail',(e&&e.message)||t('unk')))}
function full(code,b,s){var i=0,c=null;C.forEach(function(x,j){if(x[0]===code){c=x;i=j}});return {n:c[1],f:c[2],b:b,s:s,o:i}}
function seedAll(){return Promise.all(C.map(function(c,i){return col.doc(c[0]).set({n:c[1],f:c[2],b:R[c[0]].b,s:R[c[0]].s,o:i}).then(function(){return hAdd(c[0],R[c[0]].b,R[c[0]].s)})}))}
function ensureSeed(){return dbEmpty?seedAll().then(function(){dbEmpty=false}):Promise.resolve()}
function applySnap(snap){
 dbEmpty=snap.empty;if(snap.empty)return;
 var nc=[],nr={};
 snap.docs.forEach(function(d){var x=d.data()||{},code=d.id;if(/^[A-Z0-9][A-Z0-9-]{1,11}$/.test(code)&&x.b>0&&x.s>0&&!nr[code]){nc.push([code,clean(x.n)||code,clean(x.f)||'🏳️',+x.b,+x.s,+x.o||0]);nr[code]={b:+x.b,s:+x.s}}});
 if(!nr.USD){nc.push(['USD','دلار آمریکا','🇺🇸',1,1,-1]);nr.USD={b:1,s:1}}
 nc.sort(function(a,c){return a[5]-c[5]});
 C.length=0;nc.forEach(function(c){C.push(c)});R=nr;custom=true;
 var ae=document.activeElement;opts();pop();if(!(ae&&$('eb').contains(ae)))edit();all();hOpts();b2Opts();board2();drawHist()}
function delCur(code){if(!canWrite()||code==='USD')return;
 ensureSeed().then(function(){return col.doc(code).delete()}).then(function(){msg(t('okDel',code),true)},wErr)}
function addCur(){
 if(!canWrite())return;
 var code=norm($('nc').value).toUpperCase().replace(/[^A-Z0-9-]/g,'').replace(/-{2,}/g,'-').replace(/^-+|-+$/g,''),name=clean($('nn').value)||code,flag=clean($('nf').value)||'🏳️',b=parseFloat(norm($('nb').value)),s=parseFloat(norm($('ns').value));
 if(code.length<2||code.length>12)return msg(t('eCode'));
 if(info(code))return msg(t('eDup',code));
 if(!(b>0)||!(s>0))return msg(t('eNum'));
 if(s<b)return msg(t('eSell'));
 if(C.length>=40)return msg(t('eMax'));
 ensureSeed().then(function(){return col.doc(code).set({n:name,f:flag,b:b,s:s,o:C.length}).then(function(){return hAdd(code,b,s)})}).then(function(){
  ['nc','nn','nf','nb','ns'].forEach(function(id){$(id).value=''});msg(t('okAdd',code),true)},wErr)}
$('addB').onclick=addCur;
$('saveR').onclick=function(){
 if(!canWrite())return;
 var N={},bad=false;
 $('eb').querySelectorAll('input').forEach(function(i){var v=parseFloat(norm(i.value));if(!(v>0)){bad=true;i.classList.add('bad')}else{i.classList.remove('bad');(N[i.dataset.c]=N[i.dataset.c]||{})[i.dataset.k]=v}});
 if(bad)return msg(t('ePos'));
 var jobs=[];
 for(var k in N){var o=N[k];if(o.s<o.b)return msg(t('eSellK',k));if(R[k]&&(o.b!==R[k].b||o.s!==R[k].s))jobs.push([k,o])}
 if(!jobs.length)return msg(t('noChg'),true);
 ensureSeed().then(function(){return Promise.all(jobs.map(function(j){return col.doc(j[0]).set(full(j[0],j[1].b,j[1].s)).then(function(){return hAdd(j[0],j[1].b,j[1].s)})}))}).then(function(){msg(t('okSave'),true)},wErr)};
$('resetR').onclick=function(){
 if(!canWrite())return;
 var keep={};C0.forEach(function(c){keep[c[0]]=1});
 var ps=C0.map(function(c,i){var x=R[c[0]],ch=!x||x.b!==c[3]||x.s!==c[4];return col.doc(c[0]).set({n:c[1],f:c[2],b:c[3],s:c[4],o:i}).then(function(){return ch?hAdd(c[0],c[3],c[4]):0})});
 C.forEach(function(c){if(!keep[c[0]])ps.push(col.doc(c[0]).delete())});
 Promise.all(ps).then(function(){dbEmpty=false;msg(t('okReset'),true)},wErr)};

// ---------- rate history (chart + Gregorian/Jalali dates) ----------
var H=[],hcol=null,hRange=30,hSel='EUR',hGeo=null;
function dfmt(d,j,tm){var o={year:'numeric',month:j?'long':'short',day:'numeric'};if(tm){o.hour='2-digit';o.minute='2-digit'}
 try{return new Intl.DateTimeFormat(['fa-IR','ar','en-GB'][LI]+'-u-ca-'+(j?'persian':'gregory')+'-nu-latn',o).format(d)}catch(e){return d.toISOString().slice(0,16).replace('T',' ')}}
function hAdd(code,b,s){return hcol?hcol.add({c:code,b:b,s:s,t:Date.now()}):Promise.resolve()}
function applyHist(snap){H=[];snap.docs.forEach(function(d){var x=d.data()||{};if(x.c&&x.t>0&&x.b>0&&x.s>0)H.push({id:d.id,c:String(x.c),t:+x.t,b:+x.b,s:+x.s})});H.sort(function(a,c){return a.t-c.t});drawHist()}
function hOpts(){var s=$('hCur'),p=s.value||hSel;s.innerHTML='';C.forEach(function(c){if(c[0]==='USD')return;var o=document.createElement('option');o.value=c[0];o.textContent=lab(c)+' — '+c[0];s.appendChild(o)});s.value=(info(p)&&p!=='USD')?p:(C[1]?C[1][0]:'');hSel=s.value;
 var s2=$('hCur2'),p2=s2.value||'USD';s2.innerHTML='';C.forEach(function(c){var o=document.createElement('option');o.value=c[0];o.textContent=lab(c)+' — '+c[0];s2.appendChild(o)});s2.value=info(p2)?p2:'USD';
 var s3=$('bhC'),p3=s3.value;s3.innerHTML='';C.forEach(function(c){if(c[0]==='USD')return;var o=document.createElement('option');o.value=c[0];o.textContent=lab(c)+' — '+c[0];s3.appendChild(o)});s3.value=(info(p3)&&p3!=='USD')?p3:hSel}
function sg(x){return (x>0?'+':'')+f(x,2)+'%'}
function drawHist(){
 if(PG!=='history')return;
 var code=hSel,vs=$('hCur2').value||'USD',pm=(vs!=='USD'&&vs!==code),now=Date.now(),all=pm?pairPts(code,vs):H.filter(function(x){return x.c===code}),cut=hRange?now-hRange*864e5:0,inr=[],before=null;
 document.querySelectorAll('#rng button').forEach(function(b){b.classList.toggle('on',+b.dataset.r===hRange)});hK=pm?['thFwd','thRev']:['thBuy','thSell'];$('lgB').textContent=t(hK[0]);$('lgS').textContent=t(hK[1]);$('thHB').textContent=t(hK[0]);$('thHS').textContent=t(hK[1]);
 all.forEach(function(x){if(cut&&x.t<cut)before=x;else inr.push(x)});
 var pts=(before&&cut)?[{t:cut,b:before.b,s:before.s}].concat(inr):inr;
 var svg=$('chart'),em=$('hEmpty'),tb=$('hb');svg.innerHTML='';tb.innerHTML='';$('hTip').textContent='';hGeo=null;
 if(!pts.length){svg.setAttribute('hidden','');em.hidden=false;em.textContent=t(col?'noHist':'noHistG');$('hSum').innerHTML='';return}
 svg.removeAttribute('hidden');em.hidden=true;
 var tmin=cut||pts[0].t,tmax=now;if(tmax-tmin<6e4)tmin=tmax-864e5;
 var W=700,HH=260,L=62,RR=12,T=12,B=34,ymin=1e99,ymax=-1e99;
 pts.forEach(function(p){ymin=Math.min(ymin,p.b,p.s);ymax=Math.max(ymax,p.b,p.s)});
 var pad=(ymax-ymin)*.15||ymax*.01;ymin-=pad;ymax+=pad;
 function X(v){return L+(Math.max(v,tmin)-tmin)/(tmax-tmin)*(W-L-RR)}
 function Y(v){return T+(ymax-v)/(ymax-ymin)*(HH-T-B)}
 function pth(k){var d='';pts.forEach(function(p,i){d+=(i?'H':'M')+X(p.t).toFixed(1)+(i?'V':' ')+Y(p[k]).toFixed(1)});return d+'H'+X(tmax).toFixed(1)}
 var g='',i,v;
 for(i=0;i<4;i++){v=ymax-(ymax-ymin)*i/3;g+='<line x1="'+L+'" x2="'+(W-RR)+'" y1="'+Y(v)+'" y2="'+Y(v)+'" style="stroke:var(--line)"/><text x="'+(L-6)+'" y="'+(Y(v)+4)+'" text-anchor="end" font-size="11" style="fill:var(--muted)">'+f(v)+'</text>'}
 var d0=new Date(tmin),d1=new Date(tmax);
 g+='<text x="'+L+'" y="'+(HH-18)+'" font-size="11" style="fill:var(--muted)">'+dfmt(d0,0)+'</text><text x="'+L+'" y="'+(HH-5)+'" font-size="11" style="fill:var(--muted)">'+dfmt(d0,1)+'</text>';
 g+='<text x="'+(W-RR)+'" y="'+(HH-18)+'" text-anchor="end" font-size="11" style="fill:var(--muted)">'+dfmt(d1,0)+'</text><text x="'+(W-RR)+'" y="'+(HH-5)+'" text-anchor="end" font-size="11" style="fill:var(--muted)">'+dfmt(d1,1)+'</text>';
 g+='<path d="'+pth('s')+'" fill="none" stroke-width="2.2" style="stroke:var(--sell)"/><path d="'+pth('b')+'" fill="none" stroke-width="2.2" style="stroke:var(--buy)"/>';
 inr.forEach(function(p){g+='<circle cx="'+X(p.t)+'" cy="'+Y(p.s)+'" r="3" style="fill:var(--sell)"/><circle cx="'+X(p.t)+'" cy="'+Y(p.b)+'" r="3" style="fill:var(--buy)"/>'});
 g+='<line id="hv" x1="0" x2="0" y1="'+T+'" y2="'+(HH-B)+'" opacity="0" style="stroke:var(--muted)"/>';
 svg.innerHTML=g;hGeo={tmin:tmin,tmax:tmax,pts:pts,L:L,W:W,RR:RR,X:X};
 var a=pts[0],z=pts[pts.length-1],cb=(z.b-a.b)/a.b*100,cs=(z.s-a.s)/a.s*100;
 $('hSum').innerHTML='<div>'+t(pm?'chgF':'chgB')+': <b class="'+(cb>=0?'bu':'se')+'">'+sg(cb)+'</b></div><div>'+t(pm?'chgR':'chgS')+': <b class="'+(cs>=0?'bu':'se')+'">'+sg(cs)+'</b></div><div>'+t('nChg')+': <b>'+inr.length+'</b></div>';
 var rows=0;
 for(i=all.length-1;i>=0&&rows<60;i--){var x=all[i];if(cut&&x.t<cut)break;var pv=all[i-1],dd=pv?(x.b-pv.b)/pv.b*100:null,dt=new Date(x.t),tr=document.createElement('tr');
  tr.innerHTML='<td>'+dfmt(dt,0,1)+'</td><td>'+dfmt(dt,1)+'</td><td class="n b">'+f(x.b)+'</td><td class="n s">'+f(x.s)+'</td><td class="n">'+(dd==null?'—':sg(dd))+'</td>';var tdl=document.createElement('td');if(ADMIN&&hcol&&!pm&&x.id){var bt=document.createElement('button');bt.type='button';bt.className='del';bt.textContent=t('del');bt.onclick=(function(id){return function(){hcol.doc(id).delete().then(function(){msg(t('okHDel'),true)},wErr)}})(x.id);tdl.appendChild(bt)}tr.appendChild(tdl);tb.appendChild(tr);rows++}}
$('chart').addEventListener('pointermove',function(e){
 if(!hGeo)return;var r=this.getBoundingClientRect(),px=(e.clientX-r.left)/r.width*hGeo.W;
 var tt=hGeo.tmin+Math.min(Math.max((px-hGeo.L)/(hGeo.W-hGeo.L-hGeo.RR),0),1)*(hGeo.tmax-hGeo.tmin),p=hGeo.pts[0];
 hGeo.pts.forEach(function(q){if(q.t<=tt)p=q});
 var hv=$('hv');if(hv){hv.setAttribute('x1',hGeo.X(p.t));hv.setAttribute('x2',hGeo.X(p.t));hv.setAttribute('opacity','.5')}
 var d=new Date(Math.max(p.t,hGeo.tmin));
 $('hTip').textContent=dfmt(d,0,1)+' | '+dfmt(d,1)+' — '+t(hK[0])+' '+f(p.b)+' / '+t(hK[1])+' '+f(p.s)});
$('hCur').onchange=function(){hSel=this.value;drawHist()};
document.querySelectorAll('#rng button').forEach(function(b){b.onclick=function(){hRange=+b.dataset.r;drawHist()}});

// ---------- pair history, past points ----------
var hK=['thBuy','thSell'],jf=null;
// rate series for "give A, get B": forward = buyB/sellA, reverse = buyA/sellB
function pairPts(A,B){var sa=A==='USD'?{b:1,s:1}:null,sb=B==='USD'?{b:1,s:1}:null,out=[];
 H.forEach(function(x){if(x.c!==A&&x.c!==B)return;if(x.c===A)sa=x;if(x.c===B)sb=x;if(sa&&sb)out.push({t:x.t,b:sb.b/sa.s,s:sa.b/sb.s})});return out}
// Solar Hijri -> Gregorian by scanning one year with Intl
function j2g(y,m,d){try{jf=jf||new Intl.DateTimeFormat('en-US-u-ca-persian-nu-latn',{year:'numeric',month:'numeric',day:'numeric',timeZone:'UTC'});
 var st=Date.UTC(y+621,2,10);for(var k=0;k<420;k++){var dt=new Date(st+k*864e5),p={};jf.formatToParts(dt).forEach(function(x){p[x.type]=x.value});if(+p.year===y&&+p.month===m&&+p.day===d)return [dt.getUTCFullYear(),dt.getUTCMonth()+1,dt.getUTCDate()]}}catch(e){}return null}
$('hCur2').onchange=function(){drawHist()};
['bhB','bhS'].forEach(function(id){$(id).addEventListener('input',function(){fmtAmt(this)})});
$('bhAdd').onclick=function(){
 function m2(x,ok){var e=$('bhE');e.textContent=x;e.className='err'+(ok?' ok':'')}
 if(!canWrite()||!hcol)return;
 var code=$('bhC').value,b=parseFloat(norm($('bhB').value)),s=parseFloat(norm($('bhS').value)),dp=norm($('bhD').value).split(/[\/\-.]/).map(Number),tm=($('bhT2').value||'12:00').split(':');
 if(!info(code)||code==='USD')return;
 if(dp.length!==3||dp.some(function(n){return isNaN(n)||n<=0}))return m2(t('eDate'));
 var g=dp[0]<1700?j2g(dp[0],dp[1],dp[2]):dp;
 if(!g)return m2(t('eDate'));
 var dv=new Date(g[0],g[1]-1,g[2]);if(dv.getFullYear()!==g[0]||dv.getMonth()!==g[1]-1||dv.getDate()!==g[2])return m2(t('eDate'));
 var ts=new Date(g[0],g[1]-1,g[2],+tm[0]||0,+tm[1]||0).getTime();
 if(ts>Date.now())return m2(t('eFuture'));
 if(!(b>0)||!(s>0))return m2(t('eNum'));
 if(s<b)return m2(t('eSell'));
 hcol.add({c:code,b:b,s:s,t:ts}).then(function(){$('bhB').value=$('bhS').value='';m2(t('okHAdd'),true)},function(e){m2(t('fail',(e&&e.message)||t('unk')))})};

// ---------- favorites (saved per device) ----------
var FAV=[];
try{FAV=JSON.parse(localStorage.getItem('rateyar-fav'))||[];if(!Array.isArray(FAV))FAV=[]}catch(e){FAV=[]}
function favSave(){try{localStorage.setItem('rateyar-fav',JSON.stringify(FAV))}catch(e){}}
function favIdx(a,b){for(var i=0;i<FAV.length;i++)if(FAV[i][0]===a&&FAV[i][1]===b)return i;return -1}
function favUI(){
 var s=cur(),on=favIdx(s.f,s.t)>-1;
 $('favIc').textContent=on?'★':'☆';$('favTx').textContent=t(on?'favDel':'favAdd');$('favBtn').setAttribute('aria-pressed',on?'true':'false');$('favBtn').disabled=s.f===s.t;
 var L=$('favL'),show=FAV.filter(function(p){return p&&info(p[0])&&info(p[1])}),a=isNaN(s.a)?1:s.a;
 L.innerHTML='';$('favE').hidden=show.length>0;
 show.forEach(function(p){
  var d=document.createElement('div'),r=rate(p[0],p[1]);d.className='fc';
  var b=document.createElement('button');b.type='button';
  b.innerHTML='<b>'+p[0]+' → '+p[1]+'</b><span>1 '+p[0]+' = '+f(r)+' '+p[1]+'</span><span>'+f(a)+' '+p[0]+' = '+f(a*r)+' '+p[1]+'</span>';
  b.onclick=function(){$('from').value=p[0];$('to').value=p[1];$('useMan').checked=false;all();$('converter').scrollIntoView({behavior:'smooth'})};
  var x=document.createElement('button');x.type='button';x.className='fx';x.textContent='✕';x.setAttribute('aria-label',t('favDel')+' '+p[0]+' → '+p[1]);
  x.onclick=function(){FAV.splice(favIdx(p[0],p[1]),1);favSave();favUI()};
  d.appendChild(b);d.appendChild(x);L.appendChild(d)})}
$('favBtn').onclick=function(){var s=cur();if(s.f===s.t)return;var i=favIdx(s.f,s.t);if(i>-1)FAV.splice(i,1);else{if(FAV.length>=20)FAV.shift();FAV.push([s.f,s.t])}favSave();favUI()};

// ---------- board with a selectable base (default: Iraqi dinar) ----------
var b2='IQD',b2Inv=false;try{b2Inv=localStorage.getItem('b2inv')==='1'}catch(e){}
function b2Opts(){var s=$('b2Base'),p=s.value||b2;s.innerHTML='';C.forEach(function(c){var o=document.createElement('option');o.value=c[0];o.textContent=lab(c)+' — '+c[0];s.appendChild(o)});s.value=info(p)?p:(info('IQD')?'IQD':'USD');b2=s.value}
$('b2Base').onchange=function(){b2=this.value;board2()};
$('b2Inv').onclick=function(){b2Inv=!b2Inv;try{localStorage.setItem('b2inv',b2Inv?'1':'0')}catch(e){}board2()};

// ---------- pages: one section per page (hash router) ----------
var PAGES=['converter','favs','board','board2','history','popular','cross','account','adminp','edit'];
function route(scroll){
 var raw=(location.hash||'').slice(1),h=raw==='add'?'edit':raw;
 if(PAGES.indexOf(h)<0||((h==='edit'||h==='adminp')&&!(ADMIN&&col)))h='converter';
 PG=h;PAGES.forEach(function(id){$(id).classList.toggle('off',id!==h)});
 all();drawHist();edit();renderAcc();renderAdm();
 document.body.classList.toggle('home',h==='converter');
 $('moreB').classList.toggle('on',['board','popular','cross','account','adminp','edit'].indexOf(h)>-1);$('sE').style.display=$('sA').style.display=(ADMIN&&col)?'':'none';sheet(false);
 document.querySelectorAll('nav a').forEach(function(a){if(a.getAttribute('href')==='#'+h)a.setAttribute('aria-current','page');else a.removeAttribute('aria-current')});
 if(scroll){window.scrollTo(0,0);if(raw==='add'&&h==='edit')$('add').scrollIntoView()}}
$('converter').scrollIntoView=function(){location.hash='converter'};
window.addEventListener('hashchange',function(){route(true)});

// ---------- bottom tab bar: "more" sheet ----------
function sheet(open){$('sheet').hidden=!open;$('scrim').hidden=!open;$('moreB').setAttribute('aria-expanded',open?'true':'false')}
$('moreB').onclick=function(){sheet($('sheet').hidden)};
$('scrim').onclick=function(){sheet(false)};
$('sheet').addEventListener('click',function(e){if(e.target.closest('a'))sheet(false)});
document.addEventListener('keydown',function(e){if(e.key==='Escape')sheet(false)});

// ---------- editable display priority for the "other" board ----------
var ORD2=null,b2Edit=false,DR=[],scol=null;
function ordAll(){var cs=C.map(function(c){return c[0]}),pos={};(ORD2||[]).forEach(function(c,i){pos[c]=i});return cs.slice().sort(function(a,b){var pa=pos[a]===undefined?1e6+cs.indexOf(a):pos[a],pb=pos[b]===undefined?1e6+cs.indexOf(b):pos[b];return pa-pb})}
function b2List(K){return (b2Edit?DR:ordAll()).filter(function(c){return c!==K&&info(c)})}
function b2m(x,ok){var e=$('b2E');e.textContent=x;e.className='err'+(ok?' ok':'')}
function mv2(code,d,K){var l=b2List(K),i=l.indexOf(code),o=l[i+d];if(!o)return;var a=DR.indexOf(code),b=DR.indexOf(o),x=DR[a];DR[a]=DR[b];DR[b]=x;board2()}
function board2(){
 if(PG!=='board2')return;
 var K=$('b2Base').value||b2,kc=info(K),b=$('b2b'),adm=ADMIN&&!!col;b.innerHTML='';
 $('b2Ctl').hidden=!adm;$('b2Ed').hidden=b2Edit;$('b2Sv').hidden=!b2Edit;$('b2Cn').hidden=!b2Edit;$('b2Rs').hidden=!b2Edit;$('b2Hint').hidden=!b2Edit;
 if(!adm&&b2Edit){b2Edit=false}
 if(!kc||!R[K])return;
 $('b2T').textContent=t(b2Inv?'b2TI':'b2T',cname(kc));$('b2H').textContent=t(b2Inv?'b2HI':'b2H',cname(kc));$('b2Inv').textContent=t('b2Inv');$('b2Inv').setAttribute('aria-pressed',b2Inv?'true':'false');$('b2Inv').style.background=b2Inv?'var(--soft)':'';
 var list=b2List(K);
 list.forEach(function(code,ix){var c=info(code),buy=b2Inv?R[code].b/R[K].s:R[K].b/R[code].s,sell=b2Inv?R[code].s/R[K].b:R[K].s/R[code].b,tr=document.createElement('tr');
  tr.innerHTML='<td>'+lab(c)+'</td><td class="ltr">'+(b2Inv?K+'/'+code:code+'/'+K)+'</td><td class="n b">'+f(buy)+'</td><td class="n s">'+f(sell)+'</td><td class="n">'+f((sell-buy)/buy*100,2)+'%</td><td></td>';
  if(b2Edit){var td=tr.lastChild;[['▲',-1,'mUp'],['▼',1,'mDn']].forEach(function(m){var bt=document.createElement('button');bt.type='button';bt.className='mv';bt.textContent=m[0];bt.setAttribute('aria-label',t(m[2])+' '+code);bt.disabled=(m[1]<0&&ix===0)||(m[1]>0&&ix===list.length-1);bt.onclick=function(){mv2(code,m[1],K)};td.appendChild(bt)})}
  b.appendChild(tr)})}
function applySet(snap){ORD2=null;snap.docs.forEach(function(d){if(d.id==='board2'){var x=d.data()||{};if(Array.isArray(x.order))ORD2=x.order.filter(function(c){return typeof c==='string'})}});if(!b2Edit)board2()}
$('b2Ed').onclick=function(){DR=ordAll();b2Edit=true;b2m('');board2()};
$('b2Cn').onclick=function(){b2Edit=false;b2m('');board2()};
$('b2Rs').onclick=function(){DR=C.map(function(c){return c[0]});board2()};
$('b2Sv').onclick=function(){if(!canWrite()||!scol)return;
 scol.doc('board2').set({order:DR}).then(function(){b2Edit=false;ORD2=DR.slice();b2m(t('okOrd'),true);board2()},function(e){b2m(t('fail',(e&&e.message)||t('unk')))})};

// ---------- user panel and admin panel (invitations) ----------
// The page cannot grant access itself: invitations are records + a ready message; the owner grants access in the Share menu.
var UN=null,UID='',CANW=null,icol=null,adcol=null,stcol=null,pcol=null,INV=[],RU=[],RA=[],ST={},MINE=[],NAMES={},LINK=location.origin;
function rl(r){return t(r==='admin'?'rAdmin':'rUser')}
function m3(id,x,ok){var e=$(id);e.textContent=x;e.className='err'+(ok?' ok':'')}
function copyTxt(txt,btn){
 var o=btn.dataset.o||btn.textContent;btn.dataset.o=o;
 function ok(){btn.textContent=t('copied');setTimeout(function(){btn.textContent=o},1400)}
 function fb(){var ta=document.createElement('textarea');ta.value=txt;ta.style.cssText='position:fixed;opacity:0';document.body.appendChild(ta);ta.select();try{if(document.execCommand('copy'))ok()}catch(e){}document.body.removeChild(ta)}
 try{if(navigator.clipboard&&navigator.clipboard.writeText){navigator.clipboard.writeText(txt).then(ok,fb);return}}catch(e){}
 fb()}
function resolveNames(ids,cb){
 ids=ids.filter(function(i,k){return i&&!(i in NAMES)&&ids.indexOf(i)===k});
 if(!ids.length||!UN)return cb();
 UN.profiles(ids).then(function(ps){ids.forEach(function(i){var p=ps&&ps[i];NAMES[i]=(p&&p.name)||''});cb()},function(){cb()})}
function who(id){return !id?'—':(id===UID?t('you'):(NAMES[id]||'—'))}
function mkInvite(c,n,r,show,done){
 c=clean(c).slice(0,80);n=clean(n).slice(0,200);
 if(!c)return show(t('invErrC'));
 var rec={c:c,n:n,t:Date.now()};
 function fail(e){show(t('fail',(e&&e.message)||t('unk')),false)}
 function fin(){done();show(t('invOk'),true)}
 if(roleK==='admin'&&adcol)return adcol.add({c:c,n:n,r:r==='admin'?'admin':'user',by:UID||'',t:rec.t,s:'pending'}).then(fin,fail);
 if(!icol||!UID)return show(t('invNoW'));
 icol.doc(UID).get().then(function(sn){var d=sn.exists&&sn.data(),items=(d&&Array.isArray(d.items))?d.items.slice(-199):[];items.push(rec);return icol.doc(UID).set({items:items})}).then(function(){if(pcol)pcol.add({c:c,n:n,r:'user',t:rec.t}).catch(function(){});fin()},fail)}
function rebuildInv(){INV=[];
 RU.forEach(function(d){d.items.forEach(function(it){var key=d.id+'_'+it.t,st=ST[key]||'pending';if(st==='hidden')return;INV.push({src:'u',key:key,id:d.id,c:clean(it.c),n:clean(it.n),r:'user',by:d.id,t:+it.t||0,s:(st==='approved'||st==='declined')?st:'pending'})})});
 RA.forEach(function(x){INV.push({src:'a',key:x.id,id:x.id,c:x.c,n:x.n,r:x.r,by:x.by,t:x.t,s:x.s})});
 renderAdm()}
function applyInv(snap){RU=snap.docs.map(function(d){var x=d.data()||{};return {id:d.id,items:Array.isArray(x.items)?x.items.filter(function(i){return i&&i.c}):[]}});rebuildInv()}
function applyAdm(snap){RA=[];snap.docs.forEach(function(d){var x=d.data()||{};RA.push({id:d.id,c:clean(x.c),n:clean(x.n),r:x.r==='admin'?'admin':'user',by:String(x.by||''),t:+x.t||0,s:(x.s==='approved'||x.s==='declined')?x.s:'pending'})});rebuildInv()}
function applySt(snap){ST={};snap.docs.forEach(function(d){var x=d.data()||{};ST[d.id]=String(x.s||'')});rebuildInv()}
function applyMine(snap){
 MINE=[];snap.docs.forEach(function(d){var x=d.data()||{};MINE.push({c:clean(x.c),n:clean(x.n),r:x.r==='admin'?'admin':'user',t:+x.t||0})});
 renderAcc()}
function renderAcc(){
 if(PG!=='account')return;
 var g=roleK==='guest';
 $('accName').textContent=g?'—':(roleNm||'—');
 $('accRole').textContent=t(roleK==='admin'?'rAdmin':roleK==='user'?'rUser':'rGuest');
 $('accLv').textContent=g?t('nGst'):t(roleK==='admin'?'accLvAdmin':(CANW===false?'accLvView':'accLvUser'));
 var can=!g&&(roleK==='admin'||CANW!==false);
 $('invForm').hidden=!can;$('invDeny').hidden=can;$('invDeny').textContent=g?t('nGst'):t('accLvView');
 $('shMsg').value=t('invMsg',LINK,t('rUser'));
 $('shShare').hidden=!navigator.share;
 var L=$('myL');L.innerHTML='';
 MINE.slice().sort(function(a,b){return b.t-a.t}).forEach(function(x){
  var li=document.createElement('li'),b=document.createElement('b'),sm=document.createElement('small');
  b.textContent=x.c;sm.textContent=dfmt(new Date(x.t),0,1)+' | '+dfmt(new Date(x.t),1)+(x.n?' — '+x.n:'');
  li.appendChild(b);li.appendChild(sm);L.appendChild(li)});
 $('myE').hidden=MINE.length>0}
function renderAdm(){
 if(PG!=='adminp')return;
 $('aiR').options[0].textContent=rl('user');$('aiR').options[1].textContent=rl('admin');
 var rows=INV.slice().sort(function(a,b){return b.t-a.t});
 $('admCnt').textContent=t('cnt',rows.filter(function(x){return x.s==='pending'}).length);
 $('invE').hidden=rows.length>0;
 resolveNames(rows.map(function(x){return x.by}),function(){
  if(PG!=='adminp')return;
  var tb=$('invB');tb.innerHTML='';
  rows.forEach(function(x){
   var tr=document.createElement('tr'),d=new Date(x.t),c1=document.createElement('td'),b=document.createElement('b'),sm=document.createElement('small');
   b.textContent=x.c;c1.appendChild(b);if(x.n){sm.style.display='block';sm.style.color='var(--muted)';sm.textContent=x.n;c1.appendChild(sm)}
   var c2=document.createElement('td');c2.textContent=rl(x.r);
   var c3=document.createElement('td');c3.textContent=who(x.by);
   var c4=document.createElement('td');c4.textContent=dfmt(d,0,1);var s2=document.createElement('small');s2.style.display='block';s2.style.color='var(--muted)';s2.textContent=dfmt(d,1);c4.appendChild(s2);
   var c5=document.createElement('td'),sel=document.createElement('select');sel.className='st';sel.setAttribute('aria-label',t('thSt'));
   [['pending','stP'],['approved','stA'],['declined','stD']].forEach(function(o){var op=document.createElement('option');op.value=o[0];op.textContent=t(o[1]);sel.appendChild(op)});
   sel.value=x.s;sel.onchange=function(){(x.src==='a'?adcol.doc(x.id).update({s:sel.value}):stcol.doc(x.key).set({s:sel.value})).then(function(){m3('aiE',t('okInvSt'),true)},function(e){m3('aiE',t('fail',(e&&e.message)||t('unk')))})};
   c5.appendChild(sel);
   var c6=document.createElement('td'),cp=document.createElement('button'),dl=document.createElement('button');
   cp.type='button';cp.className='btn';cp.textContent=t('copy');cp.onclick=function(){copyTxt(t('invMsg',LINK,rl(x.r)),cp)};
   dl.type='button';dl.className='del';dl.textContent=t('del');dl.onclick=function(){(x.src==='a'?adcol.doc(x.id).delete():stcol.doc(x.key).set({s:'hidden'})).then(function(){m3('aiE',t('okInvDel'),true)},function(e){m3('aiE',t('fail',(e&&e.message)||t('unk')))})};
   c6.appendChild(cp);if(/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(x.c)){var ml=document.createElement('button');ml.type='button';ml.className='btn';ml.textContent=t('mailBtn');ml.onclick=function(){mailInvite(x.c,x.r,function(m,ok){m3('aiE',m,ok)},function(){(x.src==='a'?adcol.doc(x.id).update({s:'approved'}):stcol.doc(x.key).set({s:'approved'}))})};c6.appendChild(ml)}c6.appendChild(dl);
   [c1,c2,c3,c4,c5,c6].forEach(function(c){tr.appendChild(c)});tb.appendChild(tr)})})}
$('uiB').onclick=function(){mkInvite($('uiC').value,$('uiN').value,'user',function(x,ok){m3('uiE',x,ok)},function(){$('uiC').value=$('uiN').value=''})};
$('aiMail').onclick=function(){var em=clean($('aiC').value);mailInvite(em,$('aiR').value,function(x,ok){m3('aiE',x,ok)},function(){mkInvite(em,$('aiN').value,$('aiR').value,function(){},function(){$('aiC').value=$('aiN').value=''})})};
$('aiB').onclick=function(){if(!canWrite())return;mkInvite($('aiC').value,$('aiN').value,$('aiR').value,function(x,ok){m3('aiE',x,ok)},function(){$('aiC').value=$('aiN').value=''})};
$('shCopy').onclick=function(){copyTxt($('shMsg').value,this)};
$('shShare').onclick=function(){try{navigator.share({text:$('shMsg').value}).catch(function(){})}catch(e){}};
$('role').onclick=function(){location.hash='account'};
$('role').addEventListener('keydown',function(e){if(e.key==='Enter'||e.key===' '){e.preventDefault();location.hash='account'}});


// ---------- sign in / invitation e-mail (Supabase through shim.js) ----------
function mailInvite(email,role,show,done){
 if(!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email))return show(t('mailBad'));
 var A=window.AUTH;if(!A)return;
 A.invite(email,role==='admin'?'admin':'user').then(function(){show(t('mailOk'),true);done()},function(e){show(t('fail',(e&&e.message)||t('unk')))})}
var authMode='in';
function authShow(mode){authMode=mode;var box=$('authBox');box.hidden=$('authScrim').hidden=false;
 $('authT').textContent=t(mode==='done'?'authDone':mode==='in'?'authIn':mode==='up'?'authUp':mode==='rst'?'authRstT':'authNewT');
 $('authH').textContent=t(mode==='done'?'authDoneH':mode==='in'?'authInH':mode==='up'?'authUpH':mode==='rst'?'authRstH':'authNewH');
 $('auE').parentNode.hidden=mode==='new'||mode==='done';$('auPwW').hidden=mode==='rst'||mode==='done';$('auFg').hidden=mode!=='in';$('auNmW').hidden=mode!=='up';$('auSw').hidden=mode!=='in'&&mode!=='up';$('auSw').textContent=t(mode==='up'?'authToIn':'authToUp');
 $('auP').autocomplete=(mode==='new'||mode==='up')?'new-password':'current-password';
 $('auGo').textContent=t(mode==='done'?'authOk':mode==='in'?'authIn':mode==='up'?'authUp':mode==='rst'?'authSendLink':'authSave');$('auErr').textContent='';$('auErr').className='err';
 $('auX').hidden=mode==='new'||mode==='done';setTimeout(function(){(mode==='new'?$('auP'):$('auE')).focus()},30)}
function authHide(){$('authBox').hidden=$('authScrim').hidden=true}
$('authBtn').onclick=function(){if(UID){window.AUTH.signOut().then(function(){location.hash='converter';location.reload()})}else authShow('in')};
$('auX').onclick=authHide;$('authScrim').onclick=function(){if(authMode!=='new')authHide()};
$('auFg').onclick=function(){authShow('rst')};$('auSw').onclick=function(){authShow(authMode==='up'?'in':'up')};
$('authBox').onsubmit=function(e){e.preventDefault();var A=window.AUTH,er=$('auErr');if(!A)return;er.textContent='';er.className='err';
 var em=$('auE').value.trim(),pw=$('auP').value;
 function bad(x){er.textContent=x;er.className='err'}
 if(authMode==='done')return authHide();
 if(authMode==='in')A.signIn(em,pw).then(function(){location.reload()},function(){bad(t('authBad'))});
 else if(authMode==='up'){if(pw.length<8)return bad(t('authShort'));var fn=$('auFn').value.trim(),ln=$('auLn').value.trim(),ph=$('auPh').value.replace(/[\s\-()]/g,'');if(!fn||!ln)return bad(t('authNeedName'));if(ph&&!/^\+?[0-9]{7,15}$/.test(ph))return bad(t('authBadPh'));A.signUp(em,pw,{first_name:fn,last_name:ln,phone:ph}).then(function(ok){if(ok)location.reload();else{er.textContent=t('authUpSent');er.className='err ok'}},function(x){bad(t('fail',(x&&x.message)||t('unk')))})}
 else if(authMode==='rst')A.reset(em).then(function(){er.textContent=t('authSent');er.className='err ok'},function(x){bad(t('fail',(x&&x.message)||t('unk')))});
 else{if(pw.length<8)return bad(t('authShort'));A.setPassword(pw).then(function(){authHide();location.hash='converter';location.reload()},function(x){bad(t('fail',(x&&x.message)||t('unk')))})}};

function loadUsers(){var A=window.AUTH,tb=$('usB');if(!A||!tb)return;
 Promise.all([A.users(),A.email?A.email():Promise.resolve('')]).then(function(res){var rows=res[0],me=res[1],OWN='smr.co.ir@gmail.com',isOwner=me===OWN;rows=rows.slice().sort(function(a,b){return String(b.created_at||'').localeCompare(String(a.created_at||''))});
  tb.innerHTML='';$('usCnt').textContent=rows.length;$('usE').textContent=rows.length?'':t('usNone');
  rows.forEach(function(u){var tr=document.createElement('tr');
   [(u.first_name||u.last_name)?((u.first_name||'')+' '+(u.last_name||'')).trim():(u.name||''),u.email||'',u.phone||'',u.role==='admin'?t('rAdmin'):t('rUser')].forEach(function(v,i){var c=document.createElement('td');c.textContent=v;if(i===1||i===2)c.className='ltr';
    if(i===3&&isOwner&&String(u.email||'').toLowerCase()!==OWN){c.textContent='';var sl=document.createElement('select');[['user',t('rUser')],['admin',t('rAdmin')]].forEach(function(o){var op=document.createElement('option');op.value=o[0];op.textContent=o[1];sl.appendChild(op)});sl.value=u.role==='admin'?'admin':'user';
     sl.onchange=function(){sl.disabled=true;A.setRole(u.id,sl.value).then(function(){$('usE').textContent=t('roleChg');loadUsers()},function(e){sl.disabled=false;sl.value=u.role==='admin'?'admin':'user';$('usE').textContent=t('fail',(e&&e.message)||t('unk'))})};c.appendChild(sl)}
    tr.appendChild(c)});
   tb.appendChild(tr)})},function(e){$('usE').textContent=t('fail',(e&&e.message)||t('unk'))})}
$('usRef').onclick=loadUsers;
function authUI(){$('authBtn').textContent=t(UID?'authOut':'authIn')}

async function initRoles(){
 if(typeof claude==='undefined'||!claude.use)return;
 var user=null,nm='';
 try{user=await claude.use('user')}catch(e){}
 try{ADMIN=!!(user&&await user.canEdit());if(user){UN=user;var me=await user.me();nm=me.name||'';try{UID=(await user.id())||''}catch(e){}try{CANW=await user.can('data.write')}catch(e){}}}catch(e){}
 try{var d=await claude.use('db');if(d){col=d.collection('currencies');col.onSnapshot(applySnap,function(){});hcol=d.collection('history');hcol.orderBy('t','desc').limit(1000).onSnapshot(applyHist,function(){});scol=d.collection('settings');scol.onSnapshot(applySet,function(){});icol=d.collection('invites');icol.onSnapshot(applyInv,function(){});adcol=d.collection('invadmin');adcol.onSnapshot(applyAdm,function(){});stcol=d.collection('invstatus');stcol.onSnapshot(applySt,function(){});if(UID){pcol=d.collection('data/users/'+UID+'/invites');pcol.onSnapshot(applyMine,function(){})}}}catch(e){}
 setRole(UID?(ADMIN?'admin':'user'):'guest',nm);authUI();if(ADMIN&&window.AUTH&&window.AUTH.users)loadUsers();if(window.AUTH&&window.AUTH.needPassword&&UID)authShow('new');else if(window.AUTH&&window.AUTH.signedUp&&UID)authShow('done')}

try{var sl=localStorage.getItem('rateyar-lang');if(LN.indexOf(sl)>-1)LI=LN.indexOf(sl);else{var nl=(navigator.language||'').slice(0,2);if(nl==='ar')LI=1;else if(nl==='en')LI=2}}catch(e){}
applyLang();initRoles();
})();

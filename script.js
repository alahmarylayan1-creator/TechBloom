document.addEventListener('DOMContentLoaded', () => {
    // Project Dataset containing original cards + the new ones replacing 01, 02, 04, 06
    const projectsData = {
        "01": {
            en: {
                title: "AI Service Bottleneck Analyzer",
                summary: "AI-powered operations system optimizing workflow bottlenecks and service requests.",
                problem: "Long procedures, manual entries, delays, errors, and decision-making bottlenecks in government and organizational service journeys.",
                solution: "We propose an AI-powered system that analyzes service journeys (request -> verification -> review -> approval -> execution) to detect bottlenecks and automate checks.",
                fullDesc: "Designed to tackle administrative and human resource workflow challenges, this system analyzes complete service journeys. It identifies the exact stages causing major delays (such as document verification with average multi-day lags and high rejection rates), tracks operational bottlenecks, and proactively suggests automated validations before request submission."
            },
            ar: {
                title: "محلل اختناقات الخدمات بالذكاء الاصطناعي",
                summary: "نظام عمليات مدعوم بالذكاء الاصطناعي لتحليل وعلاج الاختناقات في رحلات الخدمات.",
                problem: "الإجراءات الطويلة، التدخل اليدوي، التأخير، الأخطاء، وصعوبة اتخاذ القرار في رحلات المستفيدين داخل الجهات والخدمات الإدارية.",
                solution: "نطرح نظاماً ذكياً يحلل رحلة الخدمة (طلب -> تحقيق -> مراجعة -> موافقة -> تنفيذ) ليكتشف المراحل التي تسبب أكبر تأخير ويقترح حلولاً استباقية.",
                fullDesc: "صُمم هذا النظام خصيصاً لمعالجة التحديات التشغيلية في القطاعات الإدارية، حيث يقوم بتحليل رحلة المستفيد بالكامل. يحدد النظام بدقة مرحلة التأخير الكبرى (مثل التحقق من المستندات التي تستغرق أياماً وارتفاع نسب المرتجعات)، ويقترح حلولاً مثل الأتمتة المسبقة لتقليل الأخطاء وتسريع إنجاز العمليات."
            }
        },
        "02": {
            en: {
                title: "The Intent-Aware Shopping Mall",
                summary: "A smart mall navigation and generative AI shopping assistant that curates complete itineraries.",
                problem: "Traditional mall navigation only points to stores, leaving visitors overwhelmed without knowing which stores match their specific time limits, preferences, or goals.",
                solution: "We propose an intelligent system that combines indoor navigation, recommendation algorithms, and generative AI to plan custom shopping trips based on natural intent.",
                fullDesc: "More than standard mall navigation, this system understands your exact constraints and goals. If a user inputs 'I have 1.5 hours' or expresses natural shopping intent like 'I want to buy a gift for my 25-year-old sister with a 300 SAR budget,' the system analyzes stores, products, promotions, wait times, and distances to instantly build a personalized 90-minute journey and schedule."
            },
            ar: {
                title: "المول الذي يتوقع ما تبغين",
                summary: "نظام ملاحة ذكي ومساعد تسوق توليدي يخطط لك رحلة التسوق المتكاملة.",
                problem: "تطبيقات الملاحة التقليدية للمولات تقتصر على البحث عن متجر معين، ولا تساعد الزائر في معرفة الأماكن المناسبة له بناءً على وقته أو هدفه المحدود.",
                solution: "نقدم نظاماً ذكياً يدمج التنقل الداخلي، خوارزميات التوصية، والذكاء الاصطناعي التوليدي لتخطيط جولة متكاملة بناءً على نية التسوق الطبيعية للمستخدم.",
                fullDesc: "يتجاوز هذا النظام فكرة البحث العادي عن المتاجر؛ فعندما تدخلين المول وتقولين لديك ساعة ونصف، أو تعبرين بطبيعية مثل 'أبغى أشتري هدية لأختي عمرها 25 وميزانيتي 300 ريال'، يقوم النظام بدمج المتاجر، المنتجات، العروض، وقت الانتظار، والمسافات ليقترح عليك أفضل الأماكن ويخطط لك رحلة تسوق متكاملة تضمن استغلال وقتك بأفضل شكل."
            }
        },
        "03": {
            en: {
                title: "Smart Farm Environment Monitor",
                summary: "Continuous IoT and AI monitoring for healthy crops and proactive alerts.",
                problem: "Continuously monitoring environmental conditions on a farm can be difficult. Delayed detection of unsuitable conditions may negatively affect crops.",
                solution: "We propose using AI and IoT technologies to monitor and analyze environmental data and provide alerts and recommendations to farmers.",
                fullDesc: "Our project is to develop a smart system for monitoring agricultural environments and helping farmers track the conditions surrounding their crops. The system uses data such as temperature and humidity, continuously analyzes the data, and alerts the farmer when the conditions become unsuitable. It can also suggest appropriate actions."
            },
            ar: {
                title: "نظام ذكي لمراقبة بيئة الزراعة",
                summary: "مراقبة مستمرة بالإنترنت والذكاء الاصطناعي لمحاصيل صحية.",
                problem: "مراقبة الظروف البيئية للمزرعة بشكل مستمر قد تكون صعبة، وقد يؤدي عدم اكتشاف التغيرات في الوقت المناسب إلى التأثير على المحاصيل.",
                solution: "نستخدم تقنيات الذكاء الاصطناعي وإنترنت الأشياء لمراقبة البيانات البيئية وتحليلها وإرسال التنبيهات والتوصيات للمزارع.",
                fullDesc: "فكرتنا هي تطوير نظام ذكي لمراقبة البيئة الزراعية ومساعدة المزارع في متابعة الظروف المحيطة بالمحاصيل. يعتمد النظام على بيانات مثل درجة الحرارة والرطوبة، ويقوم بتحليلها بشكل مستمر، ثم ينبه المزارع عند وجود ظروف غير مناسبة، ويمكن أن يقترح الإجراء المناسب."
            }
        },
        "04": {
            en: {
                title: "Smart Itinerary & Indoor Routing System",
                summary: "Advanced graph theory routing and time optimization for entertainment destinations.",
                problem: "Visitors inside large enclosed entertainment destinations (such as City Walk) face severe navigation difficulties and inefficient time management.",
                solution: "We propose a smart application that computes optimal routes and step-by-step itineraries based on user time limits and selected points of interest.",
                fullDesc: "Our project develops an intelligent routing system using advanced graph theory and the Traveling Salesperson Problem (TSP) algorithms. Visitors select the areas and attractions they wish to visit along with their available total time, and the application automatically calculates the ideal sequence to maximize efficiency, avoid congestion, and deliver a personalized tourist experience without complex hardware sensors."
            },
            ar: {
                title: "نظام الملاحة الذكي وتخطيط المسارات السياحية",
                summary: "تحسين الوقت وتخطيط المسارات باستخدام خوارزميات المخططات البيانية للوجهات الترفيهية.",
                problem: "يواجه الزوار داخل الوجهات الترفيهية الكبرى المغلقة (مثل سيتي ووك) صعوبة في التنقل وإدارة الوقت واختيار الأماكن المناسبة.",
                solution: "نطرح تطبيقاً ذكياً يحسب المسار الأمثل وترتيب الزيارات تلقائياً بناءً على الوقت الإجمالي المتاح ونقاط الاهتمام المختارة.",
                fullDesc: "يهدف هذا المشروع إلى تطوير تطبيق ذكي يحل مشكلة صعوبة التنقل وإدارة الوقت للزوار داخل الوجهات الترفيهية الكبرى المغلقة في مدينة جدة (مثل سيتي ووك). يتيح النظام للزائر إمكانية اختيار نقاط الاهتمام والمناطق التي يرغب بزيارتها، مع تحديد إجمالي الوقت المتاح لديه. وبناءً على ذلك، يقوم التطبيق تلقائياً بحساب المسار الأمثل وترتيب الزيارات خطوة بخطوة باستخدام خوارزميات المخططات البيانية المتقدمة (Graph Theory & Traveling Salesperson Problem)، مما يضمن استغلال الوقت بأقصى كفاءة، وتجنب الازدحام، وتقديم تجربة سياحية فريدة ومخصصة بالكامل بدون الحاجة لأي أجهزة أو حساسات معقدة."
            }
        },
        "05": {
            en: {
                title: "Graduation Projects Smart Hub",
                summary: "Semantic archive platform to prevent duplication and elevate ideas.",
                problem: "Graduation project idea repetition can be a challenge for students and project committees. Manually searching previous projects is time-consuming and may not identify similar ideas when they are written differently.",
                solution: "We propose an AI-powered platform that uses semantic analysis to compare project ideas, detect similarities, and help students improve their ideas.",
                fullDesc: "Our project is to develop an intelligent platform for managing and archiving graduation project ideas and previous projects within the department. Students can submit their project ideas, and the system uses AI to compare them with previous projects stored in the database and identify similar ideas. The system can also analyze the submitted idea and provide feedback and suggestions that may help students improve and add new value to their projects."
            },
            ar: {
                title: "مركز مشاريع التخرج الذكي",
                summary: "منصة أرشفة دلالية لمنع التكرار وتطوير أفكار المشاريع.",
                problem: "تكرار أفكار مشاريع التخرج يعتبر من المشاكل التي قد تواجه الطالبات ولجان المشاريع، كما أن البحث اليدوي في المشاريع السابقة يستغرق وقتًا وقد لا يكتشف التشابه في الأفكار إذا كانت مكتوبة بطريقة مختلفة.",
                solution: "نطور منصة تستخدم الذكاء الاصطناعي والتحليل الدلالي لمقارنة الأفكار، واكتشاف التشابه بينها، بالإضافة إلى مساعدة الطالبة في تطوير فكرتها.",
                fullDesc: "فكرتنا هي تطوير منصة ذكية لإدارة وأرشفة أفكار ومشاريع التخرج في القسم. تستطيع الطالبة إدخال فكرة مشروعها، ويقوم النظام باستخدام الذكاء الاصطناعي بمقارنتها بالمشاريع السابقة الموجودة في قاعدة البيانات لمعرفة مدى وجود أفكار مشابهة. بالإضافة إلى ذلك، يمكن للنظام تحليل الفكرة وتقديم ملاحظات واقتراحات تساعد الطالبة على تطويرها وإضافة قيمة جديدة للمشروع."
            }
        },
        "06": {
            en: {
                title: "Smart Campus Lost & Found Hub",
                summary: "AI-powered image matching and smart lockers for campus lost items.",
                problem: "Students frequently lose items on campus, and traditional lost-and-found processes lack efficient tracking or image matching.",
                solution: "We propose an AI-driven platform that matches lost items with found reports automatically.",
                fullDesc: "A smart hub utilizing computer vision and image description matching to easily connect students with their lost belongings across university buildings and facilities."
            },
            ar: {
                title: "منصة المفقودات الجامعية الذكية",
                summary: "مطابقة بالذكاء الاصطناعي وخزائن ذكية لإدارة المفقودات في الحرم الجامعي.",
                problem: "يفقد الطلاب أمتعتهم بشكل متكرر داخل الحرم الجامعي، وتفتقر الطرق التقليدية للمفقودات إلى تتبع فعال أو مطابقة دقيقة للصور.",
                solution: "نقترح منصة مدعومة بالذكاء الاصطناعي تقوم بمطابقة المفقودات مع بلاغات العثور عليها تلقائياً.",
                fullDesc: "منصة ذكية تستخدم تقنيات الرؤية الحاسوبية ومطابقة أوصاف الصور لتسهيل وصول الطلاب إلى مقتنياتهم المفقودة عبر مباني المرافق الجامعية المختلفة."
            }
        },
        "07": {
            en: {
                title: "AI Interactive Educational Stories",
                summary: "Transforming curriculum lessons into voice-enabled interactive story adventures.",
                problem: "Children and young students often find traditional curriculum textbooks unengaging, making it hard to sustain focus and deeply connect with foundational educational concepts.",
                solution: "We propose an interactive web platform that turns lessons into voice-enabled branching stories where children learn through play and conversation.",
                fullDesc: "Our project is to develop an interactive web platform that transforms standard curriculum lessons into voice-enabled, branching story adventures. Children can star in the stories, interact using speech recognition, and engage with adaptive educational challenges that reinforce core concepts naturally and enjoyably."
            },
            ar: {
                title: "القصص التعليمية التفاعلية بالذكاء الاصطناعي",
                summary: "تحويل دروس المنهج إلى قصص ومغامرات تفاعلية بالصوت والذكاء الاصطناعي.",
                problem: "يجد الأطفال والطلاب الصغار نصوص المناهج التقليدية غير جذابة، مما يجعل الحفاظ على التركيز والتفاعل العميق مع المفاهيم التعليمية الأساسية أمراً صعباً.",
                solution: "نطرح منصة ويب تفاعلية تحول الدروس إلى قصص سردية متفرعة بالصوت، حيث يتعلم الأطفال من خلال اللعب والمحادثة.",
                fullDesc: "فكرتنا هي تطوير منصة ويب تفاعلية تحول دروس المنهج الدراسي القياسية إلى مغامرات قصصية متفرعة ومدعومة بالصوت. يمكن للأطفال تقمص أدوار الشخصيات في القصص، والتفاعل صوتياً عبر التعرف على الكلام، وخوض تحديات تعليمية تكيفية ترسّخ المفاهيم الأساسية بطريقة ممتعة وطبيعية."
            }
        }
    };

    let currentLang = 'en';

    const langToggleBtn = document.getElementById('langToggle');
    const modalOverlay = document.getElementById('modalOverlay');
    const expandedContainer = document.getElementById('expandedContainer');
    const projectCards = document.querySelectorAll('.project-card');

    function toggleLanguage() {
        currentLang = currentLang === 'en' ? 'ar' : 'en';
        const htmlTag = document.documentElement;
        
        if (currentLang === 'ar') {
            htmlTag.setAttribute('lang', 'ar');
            htmlTag.setAttribute('dir', 'rtl');
            document.body.classList.add('rtl-mode');
            langToggleBtn.textContent = 'English';
            langToggleBtn.setAttribute('aria-label', 'Switch Language to English');
        } else {
            htmlTag.setAttribute('lang', 'en');
            htmlTag.setAttribute('dir', 'ltr');
            document.body.classList.remove('rtl-mode');
            langToggleBtn.textContent = 'عربي';
            langToggleBtn.setAttribute('aria-label', 'Switch Language to Arabic');
        }

        document.querySelectorAll('[data-en]').forEach(el => {
            const text = el.getAttribute(`data-${currentLang}`);
            if (text) {
                el.textContent = text;
            }
        });

        if (expandedContainer.classList.contains('active')) {
            const activeId = expandedContainer.getAttribute('data-active-id');
            if (activeId) {
                populateModalContent(activeId);
            }
        }
    }

    if (langToggleBtn) {
        langToggleBtn.addEventListener('click', toggleLanguage);
    }

    function populateModalContent(projectId) {
        const data = projectsData[projectId][currentLang];
        const cardElem = document.querySelector(`.project-card[data-id="${projectId}"]`);
        const iconHtml = cardElem ? cardElem.querySelector('.card-icon').innerHTML : '';

        const problemLabel = currentLang === 'ar' ? 'المشكلة' : 'Problem';
        const solutionLabel = currentLang === 'ar' ? 'الحل' : 'Solution';
        const descLabel = currentLang === 'ar' ? 'فكرة المشروع التفصيلية' : 'Project Idea Details';
        const closeAria = currentLang === 'ar' ? 'إغلاق النافذة' : 'Close panel';

        expandedContainer.innerHTML = `
            <button class="close-btn" id="closeModalBtn" aria-label="${closeAria}">&times;</button>
            <div class="expanded-content">
                <div class="card-header">
                    <span class="card-number">${projectId}</span>
                    <div class="card-icon" aria-hidden="true">${iconHtml}</div>
                </div>
                <h3 class="card-title">${data.title}</h3>
                <p class="card-summary">${data.summary}</p>
                
                <div class="expanded-sections-grid">
                    <div class="expanded-block">
                        <h4>${problemLabel}</h4>
                        <p>${data.problem}</p>
                    </div>
                    <div class="expanded-block">
                        <h4>${solutionLabel}</h4>
                        <p>${data.solution}</p>
                    </div>
                </div>

                <div class="full-description-box">
                    <h4>${descLabel}</h4>
                    <p>${data.fullDesc}</p>
                </div>
            </div>
        `;

        document.getElementById('closeModalBtn').addEventListener('click', closeCardModal);
    }

    function openCardModal(projectId) {
        expandedContainer.setAttribute('data-active-id', projectId);
        populateModalContent(projectId);

        modalOverlay.classList.add('active');
        expandedContainer.classList.add('active');
        modalOverlay.setAttribute('aria-hidden', 'false');
        expandedContainer.setAttribute('aria-hidden', 'false');
        document.body.classList.add('modal-open');

        setTimeout(() => {
            const closeBtn = document.getElementById('closeModalBtn');
            if (closeBtn) closeBtn.focus();
        }, 100);
    }

    function closeCardModal() {
        modalOverlay.classList.remove('active');
        expandedContainer.classList.remove('active');
        modalOverlay.setAttribute('aria-hidden', 'true');
        expandedContainer.setAttribute('aria-hidden', 'true');
        document.body.classList.remove('modal-open');
        expandedContainer.removeAttribute('data-active-id');
    }

    projectCards.forEach(card => {
        const id = card.getAttribute('data-id');

        card.addEventListener('click', () => {
            openCardModal(id);
        });

        card.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                openCardModal(id);
            }
        });
    });

    if (modalOverlay) {
        modalOverlay.addEventListener('click', closeCardModal);
    }

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && expandedContainer.classList.contains('active')) {
            closeCardModal();
        }
    });
});

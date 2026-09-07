document.addEventListener('DOMContentLoaded', () => {
    // Project Dataset matching the refined human wording
    const projectsData = {
        "01": {
            en: {
                title: "Beauty & Care",
                summary: "AI-powered skincare and beauty recommendations made personal and simple.",
                problem: "There are a large number of beauty and care products available, which makes it difficult for users to know which products are suitable for them. Users often depend on other people's experiences or search through multiple sources.",
                solution: "We propose a single intelligent platform that uses AI to analyze the user's needs and provide personalized recommendations instead of relying on random searches.",
                fullDesc: "Our project is to develop an AI-powered beauty and care platform that helps users choose suitable skincare, haircare, and beauty products based on their individual needs. The user can provide information about their needs or upload an image, and the system analyzes the input and provides personalized recommendations, such as suitable products and care routines. The system can also suggest suitable colors and styling options for clothing or makeup."
            },
            ar: {
                title: "الجمال والعناية",
                summary: "توصيات ذكية للعناية بالبشرة والجمال بطريقة شخصية وبسيطة.",
                problem: "يوجد عدد كبير جدًا من منتجات العناية والجمال، وقد يجد المستخدم صعوبة في معرفة المنتجات المناسبة له، وغالبًا يعتمد على تجارب الآخرين أو البحث في مصادر متعددة.",
                solution: "نقدم منصة واحدة تستخدم الذكاء الاصطناعي لتحليل احتياجات المستخدم وتقديم توصيات شخصية بدلًا من الاعتماد على البحث العشوائي.",
                fullDesc: "فكرتنا هي تطوير منصة ذكية تعتمد على الذكاء الاصطناعي تساعد المستخدم في اختيار المنتجات والروتين المناسب للعناية بالبشرة والشعر والمظهر بشكل عام. يدخل المستخدم معلومات عن احتياجاته أو يرفع صورة، ويقوم النظام بتحليلها وتقديم اقتراحات مناسبة له، مثل المنتجات التي يمكن استخدامها، خطوات روتين العناية، وأفضل الخيارات التي تناسب حالته. كما يمكن أن يساعد النظام في اختيار الألوان والتنسيقات المناسبة للمظهر، مثل ألوان الملابس أو المكياج."
            }
        },
        "02": {
            en: {
                title: "Biomarker Lifestyle System",
                summary: "Turning complex blood test reports into clear lifestyle insights.",
                problem: "Many people may find blood test reports difficult to understand, especially when the report contains many different measurements and indicators.",
                solution: "We propose an AI-powered platform that converts blood test results into understandable information and provides personalized general lifestyle recommendations.",
                fullDesc: "Our project is to develop an intelligent system that helps users understand their blood test results in a simpler way. Users can upload their blood test report as a PDF or image. The system extracts and analyzes important values, such as vitamin or iron levels, and provides general lifestyle and nutrition recommendations based on the results."
            },
            ar: {
                title: "نظام نمط الحياة المعتمد على المؤشرات الحيوية",
                summary: "تحويل تقارير تحاليل الدم المعقدة إلى إرشادات واضحة.",
                problem: "قد يجد بعض الأشخاص صعوبة في فهم نتائج تحاليل الدم ومعرفة معنى القيم المرتفعة أو المنخفضة، خصوصًا عند وجود العديد من المؤشرات في التقرير.",
                solution: "نطور منصة تستخدم الذكاء الاصطناعي لتحويل نتائج التحليل إلى معلومات واضحة وتوصيات عامة ومخصصة للمستخدم.",
                fullDesc: "فكرتنا هي تطوير نظام ذكي يساعد المستخدم على فهم نتائج تحاليل الدم بطريقة أبسط. يستطيع المستخدم رفع تقرير التحليل بصيغة PDF أو صورة، ويقوم النظام باستخراج البيانات المهمة من التقرير وتحليل القيم، مثل الفيتامينات أو الحديد وغيرها، ثم يقدم توصيات عامة لنمط الحياة والتغذية بناءً على النتائج."
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
                title: "Smart University Assistant & AI Advisor",
                summary: "Unified AI assistant for campus info and intelligent degree planning.",
                problem: "Students often need to search through multiple sources to find university information. Planning courses, understanding prerequisites, and knowing how academic decisions may affect graduation can also be difficult.",
                solution: "We propose a single platform that uses AI and a university database to provide both university information and personalized academic guidance.",
                fullDesc: "Our project is to develop a smart university assistant that combines an AI university assistant and an academic advisor in one platform. Students can ask the system questions about university information, such as classroom locations, registration dates, course prerequisites, and academic regulations. At the same time, the system can analyze the student's academic data, such as completed courses, GPA, remaining credits, and study plan. It can then help the student select suitable courses and show how different choices may affect their study plan and expected graduation date."
            },
            ar: {
                title: "المساعد الجامعي الذكي والمرشد الأكاديمي",
                summary: "مساعد ذكي موحد لمعلومات الحرم الجامعي والتخطيط الأكاديمي.",
                problem: "الطالبة تحتاج إلى البحث في أكثر من مصدر للحصول على المعلومات الجامعية، كما أن التخطيط للمواد ومعرفة المتطلبات وتأثير التسجيل أو التأجيل على التخرج قد يكون صعبًا.",
                solution: "نوفر منصة واحدة تعتمد على الذكاء الاصطناعي وقاعدة بيانات الجامعة، بحيث تعمل كمساعد للمعلومات الجامعية ومرشد أكاديمي في نفس الوقت.",
                fullDesc: "فكرتنا هي تطوير مساعد جامعي ذكي يجمع بين المساعد الجامعي والمرشد الأكاديمي في منصة واحدة. تستطيع الطالبة التحدث مع النظام وطرح أسئلة عن الجامعة، مثل مواقع القاعات، مواعيد التسجيل، متطلبات المواد، واللوائح الأكاديمية. وفي نفس الوقت، يستطيع النظام تحليل البيانات الأكاديمية للطالبة، مثل المواد التي اجتازتها، المعدل، الساعات المتبقية، والخطة الدراسية، ثم يساعدها في اختيار المواد المناسبة ويبين لها تأثير قراراتها على خطتها وموعد تخرجها."
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
                title: "Credit Transfer Hub",
                summary: "Making university course and credit transfers secure and straightforward.",
                problem: "Transferring courses between universities can be difficult.",
                solution: "The system makes course transfer easier and safer.",
                fullDesc: "A unified platform for transferring academic courses and credits between universities. Blockchain technology can be used to securely verify academic records and make the transfer process easier."
            },
            ar: {
                title: "منصة تحويل الساعات",
                summary: "تسهيل وتأمين إجراءات تحويل المواد والساعات بين الجامعات.",
                problem: "تحويل المواد بين الجامعات قد يكون صعبًا.",
                solution: "يجعل النظام تحويل المواد أسهل وأكثر أمانًا.",
                fullDesc: "منصة موحدة لتحويل المواد والساعات الأكاديمية بين الجامعات. يمكن استخدام تقنية Blockchain للتحقق من السجلات الأكاديمية بأمان وتسهيل عملية التحويل."
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

import { useState, useEffect, useRef } from "react";

const App = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [visibleCards, setVisibleCards] = useState(new Set());
  const [hoveredProject, setHoveredProject] = useState(null);
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);
  const [nameIndex, setNameIndex] = useState(0);
  const names = ["زياد الغامدي", "Zyad Alghamdi"];
  const observerRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setNameIndex((prev) => (prev + 1) % names.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const sections = [
    { id: "home", label: "الرئيسية" },
    { id: "about", label: "عنّي" },
    { id: "projects", label: "المشاريع" },
    { id: "experience", label: "الخبرات" },
    { id: "skills", label: "المهارات" },
    { id: "certs", label: "الشهادات" },
    { id: "contact", label: "تواصل" },
  ];

  const projects = [
    {
      id: 1,
      title: "تحصيلي",
      desc: "منصة أكاديمية متكاملة للطلاب السعوديين والخليجيين تجمع ثلاث طبقات: ملخصات مرتبة بالجامعة والتخصص والدكتور، تقييمات شفافة للدكاترة، ومجتمع أسئلة وأجوبة مع نظام نقاط. المشروع الرئيسي اللي يحل مشكلة حقيقية يعاني منها كل طالب جامعي.",
      longDesc: "تحصيلي هي منصة أكاديمية متكاملة صُممت خصيصاً للطلاب السعوديين والخليجيين لحل مشكلة حقيقية: صعوبة الوصول للملخصات والمراجعات الأكاديمية الموثوقة. المنصة تجمع ثلاث طبقات أساسية:\n\n• ملخصات مرتبة حسب الجامعة والتخصص والدكتور\n• نظام تقييمات شفاف للدكاترة يساعد الطلاب في اختيار المقررات\n• مجتمع أسئلة وأجوبة تفاعلي مع نظام نقاط يحفز المشاركة\n\nالمشروع مبني بتقنيات حديثة مع واجهة مستخدم سلسة وتجربة استخدام مميزة تراعي احتياجات الطالب الجامعي.",
      tags: ["Web", "Mobile", "AI"],
      category: "web",
      featured: true,
      color: "#5B7553",
      icon: "🎓",
      status: "active",
      url: "https://t7sele.vercel.app/",
      tech: ["React", "Next.js", "Vercel", "Supabase"],
    },
    {
      id: 2,
      title: "بطاقة عيد تفاعلية",
      desc: "بطاقة معايدة رقمية تفاعلية بتصميم احترافي مع رسوم متحركة وتأثيرات بصرية. تجربة مستخدم فريدة تجمع بين الإبداع والتقنية.",
      longDesc: "بطاقة معايدة رقمية تفاعلية تم تصميمها بعناية لتقديم تجربة فريدة في المناسبات. تتميز البطاقة بـ:\n\n• تصميم احترافي مع رسوم متحركة سلسة\n• تأثيرات بصرية تفاعلية تستجيب لحركة المستخدم\n• متوافقة مع جميع الأجهزة والشاشات\n• سهلة المشاركة عبر الروابط المباشرة\n\nالمشروع يُظهر القدرة على دمج الإبداع البصري مع البرمجة لإنتاج تجربة مستخدم لا تُنسى.",
      tags: ["Web", "Animation", "Creative"],
      category: "web",
      featured: false,
      color: "#D4A853",
      icon: "🎨",
      status: "active",
      url: "https://cs-zyad.github.io/EIDCard-main/",
      tech: ["HTML", "CSS", "JavaScript", "GitHub Pages"],
    },
    {
      id: 3,
      title: "نادي الإعلام والإنتاج السينمائي",
      desc: "موقع رسمي لنادي الإعلام والإنتاج السينمائي بجامعة الملك عبدالعزيز. يعرض أنشطة النادي وفعالياته بتصميم عصري يعكس الهوية البصرية للنادي.",
      longDesc: "الموقع الرسمي لنادي الإعلام والإنتاج السينمائي في جامعة الملك عبدالعزيز. المشروع يشمل:\n\n• تصميم واجهة مستخدم عصرية تعكس الهوية البصرية للنادي\n• عرض شامل لأنشطة النادي وفعالياته والمشاريع الإنتاجية\n• قسم خاص بأعضاء النادي والإنجازات\n• تجربة تصفح سلسة ومتجاوبة مع جميع الأجهزة\n\nتم بناء الموقع بالكامل من الصفر مع التركيز على الأداء وسرعة التحميل.",
      tags: ["Web", "Branding", "UI/UX"],
      category: "web",
      featured: false,
      color: "#3D5A6E",
      icon: "🎬",
      status: "active",
      url: "https://cs-zyad.github.io/Media-Club1/",
      tech: ["HTML", "CSS", "JavaScript", "GitHub Pages"],
    },
    {
      id: 4,
      title: "دراك",
      desc: "منصة مجتمع أكاديمي بتصميم احترافي بألوان جامعة الملك عبدالعزيز الرسمية (أخضر داكن وذهبي). تشمل منشورات سوشيال ميديا متكاملة وأتمتة التصميم عبر n8n وCanva.",
      longDesc: "دراك هي منصة مجتمع أكاديمي صُممت بعناية لتعكس الهوية الرسمية لجامعة الملك عبدالعزيز. المشروع يشمل:\n\n• تصميم هوية بصرية متكاملة بالألوان الرسمية (أخضر داكن وذهبي)\n• إنشاء قوالب منشورات سوشيال ميديا احترافية\n• أتمتة عملية التصميم والنشر عبر n8n وCanva\n• نظام إدارة محتوى يسهل على الفريق النشر والتفاعل\n\nالمشروع يُظهر القدرة على دمج التصميم الجرافيكي مع الأتمتة الذكية.",
      tags: ["Design", "Automation", "Branding"],
      category: "design",
      featured: false,
      color: "#8B6F47",
      icon: "🎨",
      status: "active",
      url: "https://aistudio.google.com/apps/dbb0b5dd-4df1-4bb0-9673-5ff25aba46e3?showPreview=true&showAssistant=true",
      tech: ["Google AI Studio", "n8n", "Canva", "Automation"],
    },
    {
      id: 5,
      title: "واجهة تك",
      desc: "هوية بصرية كاملة لمنصة عقارية سعودية بعناصر ثلاثية الأبعاد وألوان الهوية الوطنية السعودية. تصميم يعكس الطابع المعماري السعودي الحديث.",
      longDesc: "واجهة تك هي هوية بصرية متكاملة لمنصة عقارية سعودية تجمع بين الأصالة والحداثة:\n\n• تصميم ثلاثي الأبعاد يعكس الطابع المعماري السعودي\n• ألوان مستوحاة من الهوية الوطنية السعودية\n• عناصر بصرية متكاملة تشمل الشعار والأيقونات والقوالب\n• تجربة مستخدم تراعي السوق العقاري السعودي",
      tags: ["Branding", "3D", "UI/UX"],
      category: "design",
      featured: false,
      color: "#6B5B73",
      icon: "🏗️",
      status: "active",
      url: null,
      tech: ["Figma", "3D Design", "Branding"],
    },
    {
      id: 6,
      title: "مجتمع KAU",
      desc: "منصة أحداث جامعية تجمع الفعاليات والأندية والتقويم الأكاديمي. تم تصميم ثلاث نسخ لصفحة تسجيل الدخول مع تكرار تصميمي وتغذية راجعة نقدية.",
      longDesc: "مجتمع KAU هي منصة أحداث جامعية شاملة لجامعة الملك عبدالعزيز:\n\n• جمع الفعاليات والأندية والتقويم الأكاديمي في مكان واحد\n• تصميم ثلاث نسخ مختلفة لصفحة تسجيل الدخول\n• تطبيق منهجية التكرار التصميمي مع تغذية راجعة نقدية\n• مبنية على Figma مع prompts متقدمة\n\nالمشروع يُظهر القدرة على تطبيق منهجيات التصميم الاحترافية.",
      tags: ["UI/UX", "Figma", "Web"],
      category: "web",
      featured: false,
      color: "#4A6741",
      icon: "🏛️",
      status: "active",
      url: null,
      tech: ["Figma", "UI/UX Research", "Prototyping"],
    },
    {
      id: 7,
      title: "Front Line Agency",
      desc: "موقع ويب كامل وملفات تقديم احترافية لوكالة إعلانية. يشمل تصميم الموقع والهوية البصرية وملف Word للتقديم.",
      longDesc: "مشروع متكامل لوكالة إعلانية يشمل:\n\n• تصميم وتطوير موقع ويب كامل وعصري\n• إنشاء هوية بصرية شاملة للوكالة\n• إعداد ملفات تقديم احترافية بتنسيق Word\n• توحيد الرسالة البصرية عبر جميع القنوات",
      tags: ["Web", "Branding", "Design"],
      category: "web",
      featured: false,
      color: "#5A3D6E",
      icon: "📢",
      status: "active",
      url: null,
      tech: ["Web Development", "Graphic Design", "Branding"],
    },
    {
      id: 8,
      title: "نظام إدارة المهام الذكي",
      desc: "نظام متكامل عبر Telegram وGoogle Sheets وn8n Cloud، يعتمد على Gemini API لتصنيف المهام وفق مصفوفة أيزنهاور مع أزرار تأكيد تفاعلية.",
      longDesc: "نظام إدارة مهام ذكي يجمع بين عدة تقنيات:\n\n• بوت Telegram تفاعلي لإدخال وإدارة المهام\n• ربط مع Google Sheets لتخزين وتنظيم البيانات\n• أتمتة عبر n8n Cloud لمعالجة المهام\n• Gemini API لتصنيف المهام ذكياً وفق مصفوفة أيزنهاور\n• أزرار تأكيد تفاعلية لتحديث حالة المهام\n\nالنظام يُظهر القدرة على بناء حلول أتمتة متكاملة.",
      tags: ["Automation", "AI", "Telegram"],
      category: "automation",
      featured: false,
      color: "#5A6B3D",
      icon: "⚡",
      status: "active",
      url: null,
      tech: ["n8n Cloud", "Telegram Bot API", "Google Sheets", "Gemini API"],
    },
    {
      id: 9,
      title: "مشروع MNIST - COCS 446",
      desc: "مشروع أكاديمي متقدم باستخدام PyTorch على مجموعة بيانات MNIST مع ضبط Hyperparameters عبر 32 تجربة مختلفة في التعلم العميق.",
      longDesc: "مشروع أكاديمي متقدم في مقرر COCS 446:\n\n• بناء نموذج تعلم عميق باستخدام PyTorch\n• تدريب على مجموعة بيانات MNIST\n• ضبط Hyperparameters عبر 32 تجربة مختلفة\n• تحليل النتائج ومقارنة أداء النماذج\n• توثيق شامل للمنهجية والنتائج\n\nالمشروع يُظهر الفهم العميق لمفاهيم التعلم العميق وتحسين النماذج.",
      tags: ["AI", "PyTorch", "Deep Learning"],
      category: "ai",
      featured: false,
      color: "#6E3D5A",
      icon: "🧠",
      status: "active",
      url: null,
      tech: ["PyTorch", "Python", "Jupyter", "MNIST"],
    },
    {
      id: 10,
      title: "مطوّر",
      desc: "مشروع فائز بالمركز الأول في هاكاثون KAUST. حل مبتكر تم بناؤه خلال الهاكاثون وحاز على إعجاب لجنة التحكيم.",
      longDesc: "مشروع مطوّر هو الحل الفائز بالمركز الأول في هاكاثون KAUST:\n\n• حل مبتكر تم بناؤه بالكامل خلال فترة الهاكاثون\n• حاز على إعجاب لجنة التحكيم من خبراء KAUST\n• يعالج مشكلة حقيقية بطريقة إبداعية\n• تم العمل عليه كفريق متكامل مع توزيع واضح للمهام\n\n🏆 الجائزة: المركز الأول\n\nالمشروع قيد التطوير للإصدار الكامل — ترقبوا الإطلاق قريباً!",
      tags: ["Hackathon", "Innovation", "Winner"],
      category: "ai",
      featured: false,
      color: "#3D6E5A",
      icon: "🏆",
      status: "coming-soon",
      url: null,
      tech: ["Python", "AI", "Innovation"],
    },
    {
      id: 11,
      title: "تطبيق صيانة السيارات",
      desc: "تطبيق جوال لتتبع صيانة السيارات موجّه للسوق العربي. مبني بـ Flutter + Supabase + Python كمشروع متكامل.",
      longDesc: "تطبيق صيانة السيارات هو حل متكامل للسوق العربي:\n\n• تتبع جميع عمليات الصيانة والخدمة للسيارة\n• تنبيهات ذكية لمواعيد الصيانة القادمة\n• سجل كامل لتاريخ الصيانة\n• واجهة مستخدم عربية بالكامل\n\nالتطبيق قيد التطوير حالياً — ترقبوا الإطلاق قريباً!",
      tags: ["Flutter", "Supabase", "Python"],
      category: "mobile",
      featured: false,
      color: "#6E5A3D",
      icon: "🚗",
      status: "coming-soon",
      url: null,
      tech: ["Flutter", "Dart", "Supabase", "Python"],
    },
    {
      id: 12,
      title: "تطبيق اللياقة البدنية",
      desc: "تطبيق جوال بـ Flutter يستخدم Computer Vision لعدّ التكرارات وتتبع الأوزان مع قاعدة بيانات تمارين شاملة.",
      longDesc: "تطبيق اللياقة البدنية المتقدم:\n\n• استخدام Computer Vision لعدّ التكرارات تلقائياً\n• تتبع الأوزان والتقدم عبر الزمن\n• قاعدة بيانات تمارين شاملة ومصنفة\n• توليد برامج تدريبية جاهزة للإرسال المباشر للعملاء\n• واجهة مستخدم عربية احترافية\n\nالتطبيق قيد التطوير حالياً — ترقبوا الإطلاق قريباً!",
      tags: ["Flutter", "AI", "CV"],
      category: "mobile",
      featured: false,
      color: "#7A5C3D",
      icon: "💪",
      status: "coming-soon",
      url: null,
      tech: ["Flutter", "Dart", "Computer Vision", "Python"],
    },
  ];

  const experiences = [
    {
      role: "رئيس قسم الفينيوم",
      org: "ENG360",
      period: "2024 - الآن",
      desc: "سعيد جداً بقيادة قسم الفينيوم في ENG360! أقود فريق العمل في تطوير المحتوى الهندسي والتقني، وتنظيم الفعاليات والبرامج التدريبية المتخصصة",
      icon: "🚀",
      highlight: true,
    },
    {
      role: "نائب رئيس",
      org: "Manufacturing Community",
      period: "2022 - الآن",
      desc: "قيادة المجتمع التقني وتنظيم الفعاليات والورش التقنية لطلاب جامعة الملك عبدالعزيز",
      icon: "⚙️",
      highlight: false,
    },
    {
      role: "رئيس قسم التعليم",
      org: "Mufakker",
      period: "2022 - الآن",
      desc: "إنتاج مواد تعليمية عن منصات AI ومشاركتها مع الطلاب. إدارة المحتوى التعليمي والبرامج التدريبية",
      icon: "📚",
      highlight: false,
    },
    
  ];

  const certs = [
    { name: "المركز الأول - هاكاثون KAUST", org: "KAUST", icon: "🥇", color: "#D4A853" },
    { name: "مرشح نهائي - مسابقة مُطّلع GA", org: "GA", icon: "🎯", color: "#5B7553" },
    { name: "شهادة Alibaba Cloud", org: "Alibaba", icon: "☁️", color: "#FF6A00" },
    { name: "شهادة Python المتقدمة", org: "Python", icon: "🐍", color: "#3776AB" },
    { name: "شهادة الذكاء الاصطناعي", org: "SDAIA", icon: "🤖", color: "#6B5B73" },
    { name: "شهادة UI/UX Design", org: "Design", icon: "🎨", color: "#E84393" },
  ];

  const skills = [
    { name: "Frontend Development", level: 90, items: "HTML, CSS, JS, React" },
    { name: "Backend Development", level: 80, items: "Node.js, Python, APIs" },
    { name: "Mobile Development", level: 85, items: "Flutter, Dart" },
    { name: "AI & Machine Learning", level: 75, items: "PyTorch, CV, NLP" },
    { name: "Business Automation", level: 88, items: "n8n, Zapier, APIs" },
    { name: "UI/UX & Graphic Design", level: 82, items: "Figma, Canva, Branding" },
    { name: "Database Management", level: 78, items: "Supabase, SQL, Firebase" },
  ];

  const categories = [
    { id: "all", label: "الكل" },
    { id: "web", label: "ويب" },
    { id: "mobile", label: "جوال" },
    { id: "ai", label: "ذكاء اصطناعي" },
    { id: "design", label: "تصميم" },
    { id: "automation", label: "أتمتة" },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  // Sort: active first, coming-soon last
  const sortedProjects = [...filteredProjects].sort((a, b) => {
    if (a.status === "active" && b.status === "coming-soon") return -1;
    if (a.status === "coming-soon" && b.status === "active") return 1;
    return 0;
  });

  useEffect(() => {
    if (selectedProject) return;
    const handleScroll = () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i].id);
        if (el && el.offsetTop - 120 <= scrollY) {
          setActiveSection(sections[i].id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [selectedProject]);

  useEffect(() => {
    if (selectedProject) return;
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleCards((prev) => new Set([...prev, entry.target.dataset.id]));
          }
        });
      },
      { threshold: 0.15 }
    );

    document.querySelectorAll("[data-animate]").forEach((el) => {
      observerRef.current.observe(el);
    });

    return () => observerRef.current?.disconnect();
  }, [activeFilter, selectedProject]);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  const openProject = (project) => {
    if (project.status === "coming-soon") return;
    setSelectedProject(project);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const closeProject = () => {
    setSelectedProject(null);
  };

  const featuredProject = projects.find((p) => p.featured);

  // ═══════════ PROJECT DETAIL PAGE ═══════════
  if (selectedProject) {
    return (
      <div
        dir="rtl"
        style={{
          fontFamily: "'IBM Plex Sans Arabic', 'Noto Kufi Arabic', sans-serif",
          background: "#F5F0E8",
          color: "#2C2416",
          minHeight: "100vh",
        }}
      >
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Arabic:wght@300;400;500;600;700&family=Noto+Kufi+Arabic:wght@400;500;600;700;800;900&display=swap');
          * { margin: 0; padding: 0; box-sizing: border-box; }
          
          @keyframes fadeUp {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          @keyframes slideDown {
            from { opacity: 0; transform: translateY(-20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-8px); }
          }
          @keyframes shimmer {
            0% { background-position: -200% center; }
            100% { background-position: 200% center; }
          }
          @keyframes pulseRing {
            0% { transform: scale(1); opacity: 0.4; }
            100% { transform: scale(1.6); opacity: 0; }
          }
          
          .back-btn {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            padding: 10px 24px;
            border-radius: 12px;
            background: rgba(91, 117, 83, 0.08);
            color: #5B7553;
            border: 1px solid rgba(91, 117, 83, 0.15);
            font-size: 14px;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s;
            font-family: inherit;
          }
          .back-btn:hover {
            background: #5B7553;
            color: white;
            transform: translateX(4px);
          }
          
          .visit-btn {
            display: inline-flex;
            align-items: center;
            gap: 10px;
            padding: 16px 40px;
            border-radius: 14px;
            background: linear-gradient(135deg, #5B7553, #7A9E6E);
            color: white;
            border: none;
            font-size: 16px;
            font-weight: 700;
            cursor: pointer;
            transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
            text-decoration: none;
            font-family: inherit;
            box-shadow: 0 8px 32px rgba(91, 117, 83, 0.25);
          }
          .visit-btn:hover {
            transform: translateY(-3px);
            box-shadow: 0 16px 48px rgba(91, 117, 83, 0.35);
          }
          
          .tech-badge {
            display: inline-block;
            padding: 6px 16px;
            border-radius: 10px;
            font-size: 13px;
            font-weight: 500;
            background: #FFFCF5;
            color: #4A3F33;
            border: 1px solid rgba(139, 111, 71, 0.1);
            transition: all 0.25s;
          }
          .tech-badge:hover {
            border-color: #5B7553;
            color: #5B7553;
            transform: translateY(-2px);
          }
          
          .detail-tag {
            display: inline-block;
            padding: 6px 18px;
            border-radius: 24px;
            font-size: 13px;
            font-weight: 600;
            background: rgba(91, 117, 83, 0.08);
            color: #5B7553;
          }
        `}</style>

        {/* Back Navigation */}
        <div
          style={{
            position: "fixed",
            top: 0,
            right: 0,
            left: 0,
            zIndex: 100,
            background: "rgba(245, 240, 232, 0.9)",
            backdropFilter: "blur(20px)",
            borderBottom: "1px solid rgba(139, 111, 71, 0.08)",
          }}
        >
          <div
            style={{
              maxWidth: 1000,
              margin: "0 auto",
              padding: "0 24px",
              height: 64,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <button className="back-btn" onClick={closeProject}>
              → العودة للمشاريع
            </button>
            <div
              style={{
                fontFamily: "'Noto Kufi Arabic', sans-serif",
                fontWeight: 800,
                fontSize: 20,
                color: "#5B7553",
              }}
            >
              زياد<span style={{ color: "#D4A853" }}>.</span>
            </div>
          </div>
        </div>

        {/* Project Hero */}
        <div
          style={{
            paddingTop: 120,
            paddingBottom: 80,
            maxWidth: 900,
            margin: "0 auto",
            padding: "120px 24px 80px",
          }}
        >
          {/* Icon + Status */}
          <div
            style={{
              animation: "fadeIn 0.6s both",
              display: "flex",
              alignItems: "center",
              gap: 20,
              marginBottom: 32,
            }}
          >
            <div
              style={{
                width: 80,
                height: 80,
                borderRadius: 24,
                background: `${selectedProject.color}15`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 42,
                position: "relative",
              }}
            >
              {selectedProject.icon}
              <div
                style={{
                  position: "absolute",
                  bottom: -4,
                  left: -4,
                  width: 20,
                  height: 20,
                  borderRadius: "50%",
                  background: "#4CAF50",
                  border: "3px solid #F5F0E8",
                }}
              />
            </div>
            <div>
              <div
                style={{
                  display: "inline-block",
                  padding: "4px 14px",
                  borderRadius: 20,
                  background: "rgba(76, 175, 80, 0.1)",
                  color: "#4CAF50",
                  fontSize: 12,
                  fontWeight: 700,
                  marginBottom: 8,
                }}
              >
                ● مشروع نشط
              </div>
              <div
                style={{
                  fontSize: 12,
                  color: "#8B7D6B",
                  fontWeight: 500,
                }}
              >
                {selectedProject.category === "web" && "تطوير ويب"}
                {selectedProject.category === "mobile" && "تطبيقات جوال"}
                {selectedProject.category === "ai" && "ذكاء اصطناعي"}
                {selectedProject.category === "design" && "تصميم"}
                {selectedProject.category === "automation" && "أتمتة"}
              </div>
            </div>
          </div>

          {/* Title */}
          <h1
            style={{
              fontFamily: "'Noto Kufi Arabic', sans-serif",
              fontSize: "clamp(32px, 6vw, 56px)",
              fontWeight: 900,
              color: "#2C2416",
              lineHeight: 1.2,
              marginBottom: 24,
              animation: "fadeUp 0.7s 0.1s both",
            }}
          >
            {selectedProject.title}
          </h1>

          {/* Tags */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 8,
              marginBottom: 40,
              animation: "fadeUp 0.7s 0.2s both",
            }}
          >
            {selectedProject.tags.map((t) => (
              <span key={t} className="detail-tag">{t}</span>
            ))}
          </div>

          {/* Description */}
          <div
            style={{
              background: "#FFFCF5",
              borderRadius: 20,
              padding: "36px 32px",
              border: "1px solid rgba(139, 111, 71, 0.08)",
              marginBottom: 36,
              animation: "fadeUp 0.7s 0.3s both",
            }}
          >
            <h3
              style={{
                fontFamily: "'Noto Kufi Arabic', sans-serif",
                fontSize: 18,
                fontWeight: 700,
                color: "#2C2416",
                marginBottom: 20,
              }}
            >
              عن المشروع
            </h3>
            <div
              style={{
                fontSize: 16,
                lineHeight: 2.2,
                color: "#4A3F33",
                fontWeight: 300,
                whiteSpace: "pre-line",
              }}
            >
              {selectedProject.longDesc}
            </div>
          </div>

          {/* Technologies */}
          {selectedProject.tech && (
            <div
              style={{
                marginBottom: 36,
                animation: "fadeUp 0.7s 0.4s both",
              }}
            >
              <h3
                style={{
                  fontFamily: "'Noto Kufi Arabic', sans-serif",
                  fontSize: 16,
                  fontWeight: 700,
                  color: "#2C2416",
                  marginBottom: 16,
                }}
              >
                التقنيات المستخدمة
              </h3>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
                {selectedProject.tech.map((t) => (
                  <span key={t} className="tech-badge">{t}</span>
                ))}
              </div>
            </div>
          )}

          {/* CTA */}
          <div
            style={{
              animation: "fadeUp 0.7s 0.5s both",
              display: "flex",
              gap: 16,
              flexWrap: "wrap",
            }}
          >
            {selectedProject.url && (
              <a
                href={selectedProject.url}
                target="_blank"
                rel="noopener noreferrer"
                className="visit-btn"
              >
                زيارة المشروع ←
              </a>
            )}
            <button
              className="back-btn"
              onClick={closeProject}
              style={{ padding: "16px 32px", fontSize: 15 }}
            >
              ← العودة للمشاريع
            </button>
          </div>
        </div>
      </div>
    );
  }

  // ═══════════ MAIN PORTFOLIO ═══════════
  return (
    <div
      dir="rtl"
      style={{
        fontFamily: "'IBM Plex Sans Arabic', 'Noto Kufi Arabic', sans-serif",
        background: "#F5F0E8",
        color: "#2C2416",
        minHeight: "100vh",
        overflowX: "hidden",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Arabic:wght@300;400;500;600;700&family=Noto+Kufi+Arabic:wght@400;500;600;700;800;900&display=swap');

        * { margin: 0; padding: 0; box-sizing: border-box; }
        html { scroll-behavior: smooth; }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideRight {
          from { opacity: 0; transform: translateX(-30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        @keyframes grain {
          0%, 100% { transform: translate(0, 0); }
          10% { transform: translate(-5%, -10%); }
          30% { transform: translate(3%, -15%); }
          50% { transform: translate(12%, 9%); }
          70% { transform: translate(9%, 4%); }
          90% { transform: translate(-1%, 7%); }
        }
        @keyframes progressBar {
          from { width: 0; }
        }
        @keyframes pulseGlow {
          0%, 100% { box-shadow: 0 0 0 0 rgba(91, 117, 83, 0.2); }
          50% { box-shadow: 0 0 0 12px rgba(91, 117, 83, 0); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        @keyframes floatOrb1 {
          0% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -40px) scale(1.05); }
          66% { transform: translate(-20px, 20px) scale(0.95); }
          100% { transform: translate(0, 0) scale(1); }
        }
        @keyframes floatOrb2 {
          0% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(-40px, 30px) scale(1.1); }
          66% { transform: translate(25px, -35px) scale(0.9); }
          100% { transform: translate(0, 0) scale(1); }
        }
        @keyframes floatOrb3 {
          0% { transform: translate(0, 0) rotate(0deg); }
          50% { transform: translate(20px, -20px) rotate(180deg); }
          100% { transform: translate(0, 0) rotate(360deg); }
        }
        @keyframes glowPulse {
          0%, 100% { filter: brightness(1) drop-shadow(0 0 20px rgba(91, 117, 83, 0.3)); }
          50% { filter: brightness(1.1) drop-shadow(0 0 40px rgba(91, 117, 83, 0.5)); }
        }
        @keyframes borderGlow {
          0%, 100% { border-color: rgba(91, 117, 83, 0.15); box-shadow: 0 8px 32px rgba(91, 117, 83, 0.08); }
          50% { border-color: rgba(91, 117, 83, 0.3); box-shadow: 0 8px 48px rgba(91, 117, 83, 0.15); }
        }
        @keyframes textReveal {
          from { clip-path: inset(0 100% 0 0); }
          to { clip-path: inset(0 0 0 0); }
        }
        @keyframes scrollBounce {
          0%, 100% { transform: translateY(0) translateX(-50%); }
          50% { transform: translateY(10px) translateX(-50%); }
        }
        @keyframes ringPulse {
          0% { transform: scale(1); opacity: 0.6; }
          100% { transform: scale(2.2); opacity: 0; }
        }
        @keyframes particleFloat {
          0% { transform: translateY(0) rotate(0deg); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(-100vh) rotate(720deg); opacity: 0; }
        }
        @keyframes statCountUp {
          from { opacity: 0; transform: translateY(20px) scale(0.8); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        .hero-cta-primary {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 18px 40px;
          border-radius: 16px;
          background: linear-gradient(135deg, #5B7553, #7A9E6E);
          color: white;
          font-weight: 700;
          font-size: 16px;
          cursor: pointer;
          border: none;
          font-family: inherit;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          box-shadow: 0 8px 32px rgba(91, 117, 83, 0.3);
          position: relative;
          overflow: hidden;
        }
        .hero-cta-primary::before {
          content: '';
          position: absolute;
          top: 0; left: -100%; width: 100%; height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent);
          transition: left 0.6s;
        }
        .hero-cta-primary:hover::before {
          left: 100%;
        }
        .hero-cta-primary:hover {
          transform: translateY(-4px) scale(1.02);
          box-shadow: 0 16px 48px rgba(91, 117, 83, 0.45);
        }
        .hero-cta-secondary {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 18px 40px;
          border-radius: 16px;
          background: rgba(255, 252, 245, 0.08);
          backdrop-filter: blur(12px);
          color: #FFFCF5;
          font-weight: 600;
          font-size: 16px;
          cursor: pointer;
          border: 1.5px solid rgba(255, 252, 245, 0.15);
          font-family: inherit;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .hero-cta-secondary:hover {
          background: rgba(255, 252, 245, 0.15);
          border-color: rgba(255, 252, 245, 0.3);
          transform: translateY(-4px);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
        }
        .hero-stat-card {
          background: rgba(255, 252, 245, 0.06);
          backdrop-filter: blur(16px);
          border: 1px solid rgba(255, 252, 245, 0.1);
          border-radius: 20px;
          padding: 24px 28px;
          text-align: center;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          cursor: default;
          min-width: 140px;
          animation: borderGlow 4s ease-in-out infinite;
        }
        .hero-stat-card:hover {
          background: rgba(255, 252, 245, 0.1);
          transform: translateY(-6px);
          border-color: rgba(91, 117, 83, 0.4);
          box-shadow: 0 16px 48px rgba(91, 117, 83, 0.2);
        }

        .animate-card {
          opacity: 0;
          transform: translateY(40px);
          transition: all 0.7s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .animate-card.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .nav-link {
          position: relative;
          cursor: pointer;
          padding: 6px 0;
          color: #6B5D4F;
          font-size: 14px;
          font-weight: 500;
          transition: color 0.3s;
          background: none;
          border: none;
          font-family: inherit;
        }
        .nav-link:hover {
          color: #4ade80;
        }
        .nav-link.active {
          color: #5B7553;
        }
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: 0;
          right: 0;
          width: 0;
          height: 2px;
          background: #4ade80;
          transition: width 0.3s;
        }
        .nav-link.active::after {
          background: #5B7553;
          width: 100%;
        }
        .nav-link:hover::after {
          width: 100%;
        }

        .grain-overlay {
          position: fixed;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.03'/%3E%3C/svg%3E");
          pointer-events: none;
          z-index: 1000;
          animation: grain 8s steps(10) infinite;
        }

        .project-card {
          background: #FFFCF5;
          border-radius: 16px;
          padding: 28px;
          border: 1px solid rgba(139, 111, 71, 0.08);
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          cursor: pointer;
          position: relative;
          overflow: hidden;
        }
        .project-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 60px rgba(44, 36, 22, 0.08);
          border-color: rgba(139, 111, 71, 0.15);
        }
        
        .project-card-disabled {
          background: #EDEBE6;
          border-radius: 16px;
          padding: 28px;
          border: 1px solid rgba(139, 111, 71, 0.06);
          position: relative;
          overflow: hidden;
          cursor: default;
          opacity: 0.8;
        }

        .featured-card {
          background: linear-gradient(135deg, #FFFCF5 0%, #F0EBE0 100%);
          border-radius: 24px;
          padding: 48px;
          border: 2px solid rgba(91, 117, 83, 0.15);
          position: relative;
          overflow: hidden;
          cursor: pointer;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .featured-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 24px 64px rgba(44, 36, 22, 0.1);
          border-color: rgba(91, 117, 83, 0.3);
        }
        .featured-card::after {
          content: '';
          position: absolute;
          top: -50%;
          right: -50%;
          width: 200%;
          height: 200%;
          background: radial-gradient(circle, rgba(91, 117, 83, 0.03) 0%, transparent 70%);
          pointer-events: none;
        }

        .tag {
          display: inline-block;
          padding: 4px 12px;
          border-radius: 20px;
          font-size: 12px;
          font-weight: 500;
          background: rgba(91, 117, 83, 0.08);
          color: #5B7553;
          margin-left: 6px;
          margin-bottom: 6px;
        }
        .tag-grey {
          display: inline-block;
          padding: 4px 12px;
          border-radius: 20px;
          font-size: 12px;
          font-weight: 500;
          background: rgba(139, 139, 139, 0.08);
          color: #999;
          margin-left: 6px;
          margin-bottom: 6px;
        }

        .cert-card {
          background: #FFFCF5;
          border-radius: 16px;
          padding: 24px;
          border: 1px solid rgba(139, 111, 71, 0.08);
          transition: all 0.35s;
          text-align: center;
        }
        .cert-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 40px rgba(230, 57, 70, 0.15);
          border-color: rgba(230, 57, 70, 0.4);
        }

        .skill-bar-bg {
          background: rgba(91, 117, 83, 0.08);
          border-radius: 10px;
          height: 8px;
          overflow: hidden;
        }
        .skill-bar-fill {
          height: 100%;
          border-radius: 10px;
          background: linear-gradient(90deg, #5B7553, #7A9E6E);
          animation: progressBar 1.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .exp-card {
          background: #FFFCF5;
          border-radius: 16px;
          padding: 28px;
          border: 1px solid rgba(139, 111, 71, 0.08);
          border-right: 4px solid #5B7553;
          transition: all 0.35s;
        }
        .exp-card:hover {
          transform: translateX(-4px);
          box-shadow: 0 12px 40px rgba(44, 36, 22, 0.06);
        }
        .exp-card-highlight {
          background: linear-gradient(135deg, #FFFCF5 0%, #f0f5ee 100%);
          border-radius: 16px;
          padding: 28px;
          border: 2px solid rgba(91, 117, 83, 0.2);
          border-right: 5px solid #5B7553;
          transition: all 0.35s;
          position: relative;
          overflow: hidden;
        }
        .exp-card-highlight::before {
          content: '';
          position: absolute;
          top: -50%;
          right: -50%;
          width: 200%;
          height: 200%;
          background: radial-gradient(circle, rgba(91, 117, 83, 0.03) 0%, transparent 60%);
          pointer-events: none;
        }
        .exp-card-highlight:hover {
          transform: translateX(-4px);
          box-shadow: 0 16px 48px rgba(91, 117, 83, 0.12);
        }

        .filter-btn {
          padding: 8px 20px;
          border-radius: 24px;
          border: 1.5px solid rgba(139, 111, 71, 0.15);
          background: transparent;
          color: #6B5D4F;
          font-size: 13px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s;
          font-family: inherit;
        }
        .filter-btn:hover {
          border-color: #5B7553;
          color: #5B7553;
        }
        .filter-btn.active {
          background: #5B7553;
          color: white;
          border-color: #5B7553;
        }

        .contact-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 14px 32px;
          border-radius: 12px;
          font-weight: 600;
          font-size: 15px;
          cursor: pointer;
          transition: all 0.3s;
          text-decoration: none;
          font-family: inherit;
          border: none;
        }
        .contact-btn:hover {
          color: #4ade80 !important;
          border-color: #4ade80 !important;
          transform: translateY(-4px);
        }

        .mobile-menu {
          position: fixed;
          top: 0;
          right: 0;
          width: 280px;
          height: 100vh;
          background: #FFFCF5;
          z-index: 999;
          padding: 80px 32px 32px;
          transform: translateX(100%);
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          box-shadow: -20px 0 60px rgba(0,0,0,0.1);
        }
        .mobile-menu.open {
          transform: translateX(0);
        }
        .mobile-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.3);
          z-index: 998;
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.3s;
        }
        .mobile-overlay.open {
          opacity: 1;
          pointer-events: auto;
        }
        
        .coming-soon-badge {
          position: absolute;
          top: 16px;
          left: 16px;
          padding: 5px 14px;
          border-radius: 20px;
          background: rgba(158, 158, 158, 0.15);
          color: #999;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.5px;
          animation: pulse 2s ease-in-out infinite;
          z-index: 2;
        }
        
        .active-badge {
          position: absolute;
          top: 16px;
          left: 16px;
          padding: 5px 14px;
          border-radius: 20px;
          background: rgba(76, 175, 80, 0.1);
          color: #4CAF50;
          font-size: 11px;
          font-weight: 700;
          z-index: 2;
        }
        
        .view-project-hint {
          display: flex;
          align-items: center;
          gap: 6px;
          margin-top: 16px;
          padding-top: 16px;
          border-top: 1px solid rgba(139, 111, 71, 0.06);
          font-size: 13px;
          font-weight: 600;
          color: #5B7553;
          opacity: 0;
          transform: translateX(-8px);
          transition: all 0.35s;
        }
        .project-card:hover .view-project-hint {
          opacity: 1;
          transform: translateX(0);
        }

        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-toggle { display: flex !important; }
          .featured-card { padding: 28px !important; }
          .view-project-hint { opacity: 1; transform: translateX(0); }
        }
        @media (min-width: 769px) {
          .mobile-toggle { display: none !important; }
        }
      `}</style>

      <div className="grain-overlay" />

      {/* Navigation */}
      <nav
        style={{
          position: "fixed",
          top: 0,
          right: 0,
          left: 0,
          zIndex: 100,
          background: "rgba(245, 240, 232, 0.85)",
          backdropFilter: "blur(20px)",
          borderBottom: "1px solid rgba(139, 111, 71, 0.08)",
        }}
      >
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            padding: "0 24px",
            height: 64,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              fontFamily: "'Noto Kufi Arabic', sans-serif",
              fontWeight: 800,
              fontSize: 22,
              color: "#5B7553",
              letterSpacing: "-0.5px",
            }}
          >
            زياد<span style={{ color: "#D4A853" }}>.</span>
          </div>

          <div
            className="desktop-nav"
            style={{ display: "flex", gap: 28, alignItems: "center" }}
          >
            {sections.map((s) => (
              <button
                key={s.id}
                className={`nav-link ${activeSection === s.id ? "active" : ""}`}
                onClick={() => scrollTo(s.id)}
              >
                {s.label}
              </button>
            ))}
          </div>

          <button
            className="mobile-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: 8,
              display: "flex",
              flexDirection: "column",
              gap: 5,
            }}
          >
            <span
              style={{
                width: 24,
                height: 2,
                background: "#2C2416",
                borderRadius: 2,
                transition: "all 0.3s",
                transform: isMenuOpen ? "rotate(45deg) translate(5px, 5px)" : "none",
              }}
            />
            <span
              style={{
                width: 24,
                height: 2,
                background: "#2C2416",
                borderRadius: 2,
                opacity: isMenuOpen ? 0 : 1,
                transition: "all 0.3s",
              }}
            />
            <span
              style={{
                width: 24,
                height: 2,
                background: "#2C2416",
                borderRadius: 2,
                transition: "all 0.3s",
                transform: isMenuOpen ? "rotate(-45deg) translate(5px, -5px)" : "none",
              }}
            />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`mobile-overlay ${isMenuOpen ? "open" : ""}`}
        onClick={() => setIsMenuOpen(false)}
      />
      <div className={`mobile-menu ${isMenuOpen ? "open" : ""}`}>
        {sections.map((s, i) => (
          <button
            key={s.id}
            onClick={() => scrollTo(s.id)}
            style={{
              display: "block",
              width: "100%",
              textAlign: "right",
              padding: "16px 0",
              background: "none",
              border: "none",
              borderBottom: "1px solid rgba(139, 111, 71, 0.06)",
              fontSize: 16,
              fontWeight: activeSection === s.id ? 700 : 400,
              color: activeSection === s.id ? "#5B7553" : "#6B5D4F",
              cursor: "pointer",
              fontFamily: "inherit",
              animation: isMenuOpen ? `slideRight 0.4s ${i * 0.05}s both` : "none",
            }}
          >
            {s.label}
          </button>
        ))}
      </div>

      {/* ═══════════ HERO ═══════════ */}
      <section
        id="home"
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "120px 24px 60px",
          position: "relative",
          background: "linear-gradient(160deg, #1a2e1a 0%, #0f1f12 25%, #1a1510 50%, #0d1a0f 75%, #111a0e 100%)",
          overflow: "hidden",
        }}
      >
        {/* Animated floating orbs */}
        <div style={{ position: "absolute", top: "8%", left: "5%", width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle, rgba(91,117,83,0.2) 0%, transparent 60%)", pointerEvents: "none", animation: "floatOrb1 12s ease-in-out infinite", filter: "blur(40px)" }} />
        <div style={{ position: "absolute", bottom: "10%", right: "8%", width: 350, height: 350, borderRadius: "50%", background: "radial-gradient(circle, rgba(212,168,83,0.15) 0%, transparent 60%)", pointerEvents: "none", animation: "floatOrb2 15s ease-in-out infinite", filter: "blur(50px)" }} />
        <div style={{ position: "absolute", top: "50%", left: "50%", width: 500, height: 500, borderRadius: "50%", background: "radial-gradient(circle, rgba(91,117,83,0.08) 0%, transparent 50%)", pointerEvents: "none", animation: "floatOrb1 20s ease-in-out infinite reverse", filter: "blur(60px)", transform: "translate(-50%, -50%)" }} />
        <div style={{ position: "absolute", top: "20%", right: "15%", width: 200, height: 200, borderRadius: "50%", background: "radial-gradient(circle, rgba(122,158,110,0.12) 0%, transparent 60%)", pointerEvents: "none", animation: "floatOrb2 10s ease-in-out infinite", filter: "blur(30px)" }} />
        <div style={{ position: "absolute", bottom: "30%", left: "15%", width: 250, height: 250, borderRadius: "50%", background: "radial-gradient(circle, rgba(212,168,83,0.08) 0%, transparent 60%)", pointerEvents: "none", animation: "floatOrb3 18s linear infinite", filter: "blur(35px)" }} />

        {/* Floating particles */}
        {[...Array(6)].map((_, i) => (
          <div
            key={`particle-${i}`}
            style={{
              position: "absolute",
              width: 3 + (i % 3),
              height: 3 + (i % 3),
              borderRadius: "50%",
              background: i % 2 === 0 ? "rgba(91, 117, 83, 0.4)" : "rgba(212, 168, 83, 0.3)",
              bottom: "-5%",
              left: `${10 + i * 15}%`,
              animation: `particleFloat ${12 + i * 3}s linear infinite`,
              animationDelay: `${i * 2}s`,
              pointerEvents: "none",
            }}
          />
        ))}

        {/* Grid pattern overlay */}
        <div style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `linear-gradient(rgba(91,117,83,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(91,117,83,0.03) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
          pointerEvents: "none",
          opacity: 0.5,
        }} />

        {/* Main content */}
        <div style={{ maxWidth: 900, textAlign: "center", position: "relative", zIndex: 2 }}>
          {/* Premium badge with pulse ring */}
          <div style={{ animation: "fadeIn 1s 0.2s both", marginBottom: 28, position: "relative", display: "inline-block" }}>
            <div style={{
              position: "absolute",
              inset: -4,
              borderRadius: 32,
              background: "transparent",
              border: "1px solid rgba(91, 117, 83, 0.3)",
              animation: "ringPulse 3s ease-in-out infinite",
              pointerEvents: "none",
            }} />
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                padding: "10px 28px",
                borderRadius: 28,
                background: "rgba(91, 117, 83, 0.12)",
                backdropFilter: "blur(12px)",
                border: "1px solid rgba(91, 117, 83, 0.2)",
                color: "#7A9E6E",
                fontSize: 14,
                fontWeight: 600,
                letterSpacing: "0.5px",
              }}
            >
              <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#7A9E6E", display: "inline-block", boxShadow: "0 0 12px rgba(122,158,110,0.6)" }} />
              طموح بلا حدود وشغف دائم بالتطوير
            </span>
          </div>

          {/* Main heading */}
          <h1
            key={nameIndex}
            style={{
              fontFamily: nameIndex === 0 ? "'Noto Kufi Arabic', sans-serif" : "inherit",
              fontSize: "clamp(32px, 7vw, 76px)",
              fontWeight: 900,
              lineHeight: 1.1,
              color: "#FFFCF5",
              animation: "fadeUp 0.8s both",
              marginBottom: 12,
              textShadow: "0 4px 30px rgba(0,0,0,0.3)",
              minHeight: "1.2em",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {names[nameIndex]}
          </h1>

          {/* Gradient sub-heading */}
          <div
            style={{
              fontFamily: "'Noto Kufi Arabic', sans-serif",
              fontSize: "clamp(32px, 6vw, 64px)",
              fontWeight: 900,
              lineHeight: 1.2,
              animation: "fadeUp 0.8s 0.5s both",
              marginBottom: 28,
            }}
          >
            <span
              style={{
                background: "linear-gradient(135deg, #7A9E6E 0%, #5B7553 30%, #D4A853 70%, #E8C97A 100%)",
                backgroundSize: "300% auto",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                animation: "shimmer 5s linear infinite",
                filter: "drop-shadow(0 2px 20px rgba(91, 117, 83, 0.3))",
              }}
            >
              مطور تقني
            </span>
          </div>

          {/* Description */}
          <p
            style={{
              fontSize: "clamp(16px, 2.5vw, 21px)",
              color: "rgba(255, 252, 245, 0.6)",
              lineHeight: 2,
              maxWidth: 600,
              margin: "0 auto 48px",
              animation: "fadeUp 0.8s 0.6s both",
              fontWeight: 300,
              letterSpacing: "0.3px",
            }}
          >
            طالب علوم حاسب في جامعة الملك عبدالعزيز
            <br />
            <span style={{ color: "rgba(255, 252, 245, 0.8)", fontWeight: 400 }}>أبني حلول تقنية تحل مشاكل حقيقية</span>
          </p>

          {/* CTA Buttons */}
          <div
            style={{
              display: "flex",
              gap: 16,
              justifyContent: "center",
              flexWrap: "wrap",
              animation: "fadeUp 0.8s 0.8s both",
              marginBottom: 80,
            }}
          >
            <button
              className="hero-cta-primary"
              onClick={() => scrollTo("projects")}
            >
              شوف مشاريعي ←
            </button>
            <button
              className="hero-cta-secondary"
              onClick={() => scrollTo("contact")}
            >
              تواصل معي
            </button>
          </div>

          {/* Glassmorphism stat cards */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "clamp(12px, 3vw, 24px)",
              flexWrap: "wrap",
              animation: "fadeUp 0.8s 1s both",
            }}
          >
            {[
              { num: "12+", label: "مشروع", icon: "💻", delay: "1s" },
              { num: "6+", label: "شهادة", icon: "🏅", delay: "1.15s" },
              { num: "4+", label: "أدوار قيادية", icon: "👑", delay: "1.3s" },
            ].map((s, i) => (
              <div
                key={i}
                className="hero-stat-card"
                style={{ animation: `statCountUp 0.6s ${s.delay} both` }}
              >
                <div style={{ fontSize: 24, marginBottom: 8 }}>{s.icon}</div>
                <div
                  style={{
                    fontFamily: "'Noto Kufi Arabic', sans-serif",
                    fontSize: "clamp(28px, 4vw, 38px)",
                    fontWeight: 900,
                    background: "linear-gradient(135deg, #7A9E6E, #D4A853)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    marginBottom: 4,
                  }}
                >
                  {s.num}
                </div>
                <div style={{ fontSize: 13, color: "rgba(255,252,245,0.5)", fontWeight: 500, letterSpacing: "0.3px" }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          style={{
            position: "absolute",
            bottom: 32,
            left: "50%",
            animation: "scrollBounce 2s ease-in-out infinite",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 8,
            cursor: "pointer",
            zIndex: 3,
          }}
          onClick={() => scrollTo("about")}
        >
          <div style={{ fontSize: 11, color: "rgba(255,252,245,0.35)", fontWeight: 500, letterSpacing: 2 }}>اكتشف المزيد</div>
          <div style={{
            width: 24,
            height: 40,
            borderRadius: 12,
            border: "1.5px solid rgba(255,252,245,0.2)",
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "center",
            paddingTop: 8,
          }}>
            <div style={{
              width: 3,
              height: 8,
              borderRadius: 2,
              background: "rgba(255,252,245,0.4)",
              animation: "pulse 1.5s ease-in-out infinite",
            }} />
          </div>
        </div>

        {/* Crisp SVG curve separator */}
        <div style={{
          position: "absolute",
          bottom: -1,
          left: 0,
          right: 0,
          width: "100%",
          overflow: "hidden",
          lineHeight: 0,
        }}>
          <svg
            viewBox="0 0 1440 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            style={{ display: "block", width: "100%", height: 120 }}
          >
            <path
              d="M0,120 L1440,120 L1440,80 C960,-20 480,140 0,80 L0,120 Z"
              fill="#F5F0E8"
            />
          </svg>
        </div>
      </section>

      {/* ═══════════ ABOUT ═══════════ */}
      <section id="about" style={{ padding: "100px 24px", maxWidth: 900, margin: "0 auto" }}>
        <div
          data-animate
          data-id="about"
          className={`animate-card ${visibleCards.has("about") ? "visible" : ""}`}
        >
          <h2
            style={{
              fontFamily: "'Noto Kufi Arabic', sans-serif",
              fontSize: 14,
              fontWeight: 700,
              color: "#5B7553",
              letterSpacing: 2,
              textTransform: "uppercase",
              marginBottom: 12,
            }}
          >
            عنّي
          </h2>
          <h3
            style={{
              fontFamily: "'Noto Kufi Arabic', sans-serif",
              fontSize: "clamp(24px, 4vw, 36px)",
              fontWeight: 800,
              color: "#2C2416",
              marginBottom: 32,
              lineHeight: 1.3,
            }}
          >
            رحلة مستمرة من التعلم والإبداع
          </h3>
          <div
            style={{
              fontSize: 17,
              lineHeight: 2,
              color: "#4A3F33",
              fontWeight: 300,
            }}
          >
            <p style={{ marginBottom: 20 }}>
              أنا زياد، طالب علوم حاسب في جامعة الملك عبدالعزيز بجدة (2022–2026). 
              شغوف جداً ببناء حلول تقنية مبتكرة وأؤمن بأن الإبداع ليس له حدود عندما يلتقي التفكير المنطقي بالشغف.
            </p>
            <p style={{ marginBottom: 20 }}>
              أشتغل في تطوير الويب (Frontend و Backend)، تطبيقات الجوال بـ Flutter،
              وأتمتة الأعمال. إلى جانب ذلك، عندي اهتمام كبير بالتصميم الجرافيكي
              والهوية البصرية وتجربة المستخدم.
            </p>
            <p>
              فزت بالمركز الأول في هاكاثون KAUST بمشروع "مطوّر"، وكنت مرشح نهائي
              في مسابقة مُطّلع GA من بين آلاف المشاركين. أؤمن إن التنفيذ أهم من
              التخطيط المطوّل — أبني وأجرب وأتعلم.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════ FEATURED PROJECT ═══════════ */}
      <section style={{ padding: "0 24px 80px", maxWidth: 1000, margin: "0 auto" }}>
        <div
          data-animate
          data-id="featured"
          className={`animate-card ${visibleCards.has("featured") ? "visible" : ""}`}
        >
          <div className="featured-card" onClick={() => openProject(featuredProject)}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: 20,
              }}
            >
              <div
                style={{
                  display: "inline-block",
                  padding: "4px 14px",
                  borderRadius: 20,
                  background: "rgba(91, 117, 83, 0.1)",
                  color: "#5B7553",
                  fontSize: 12,
                  fontWeight: 700,
                  letterSpacing: 1,
                }}
              >
                ★ المشروع الرئيسي
              </div>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 6,
                  padding: "4px 14px",
                  borderRadius: 20,
                  background: "rgba(76, 175, 80, 0.1)",
                  color: "#4CAF50",
                  fontSize: 11,
                  fontWeight: 700,
                }}
              >
                ● نشط
              </div>
            </div>
            <div style={{ display: "flex", alignItems: "flex-start", gap: 20, flexWrap: "wrap" }}>
              <div style={{ fontSize: 56, animation: "float 3s ease-in-out infinite" }}>
                🎓
              </div>
              <div style={{ flex: 1, minWidth: 250 }}>
                <h3
                  style={{
                    fontFamily: "'Noto Kufi Arabic', sans-serif",
                    fontSize: 32,
                    fontWeight: 800,
                    color: "#2C2416",
                    marginBottom: 16,
                  }}
                >
                  {featuredProject.title}
                </h3>
                <p
                  style={{
                    fontSize: 16,
                    lineHeight: 1.9,
                    color: "#4A3F33",
                    fontWeight: 300,
                    marginBottom: 20,
                  }}
                >
                  {featuredProject.desc}
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 16 }}>
                  {featuredProject.tags.map((t) => (
                    <span key={t} className="tag">{t}</span>
                  ))}
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    color: "#5B7553",
                    fontWeight: 600,
                    fontSize: 14,
                  }}
                >
                  اضغط لمشاهدة التفاصيل ←
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ PROJECTS ═══════════ */}
      <section id="projects" style={{ padding: "80px 24px", maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ marginBottom: 48 }}>
          <h2
            style={{
              fontFamily: "'Noto Kufi Arabic', sans-serif",
              fontSize: 14,
              fontWeight: 700,
              color: "#5B7553",
              letterSpacing: 2,
              marginBottom: 12,
            }}
          >
            المشاريع
          </h2>
          <h3
            style={{
              fontFamily: "'Noto Kufi Arabic', sans-serif",
              fontSize: "clamp(24px, 4vw, 36px)",
              fontWeight: 800,
              color: "#2C2416",
              marginBottom: 28,
            }}
          >
            أعمال مختارة
          </h3>

          <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            {categories.map((c) => (
              <button
                key={c.id}
                className={`filter-btn ${activeFilter === c.id ? "active" : ""}`}
                onClick={() => setActiveFilter(c.id)}
              >
                {c.label}
              </button>
            ))}
          </div>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
            gap: 24,
          }}
        >
          {sortedProjects
            .filter((p) => !p.featured)
            .map((project, i) => {
              const isComingSoon = project.status === "coming-soon";

              return (
                <div
                  key={project.id}
                  data-animate
                  data-id={`proj-${project.id}`}
                  className={`animate-card ${visibleCards.has(`proj-${project.id}`) ? "visible" : ""}`}
                  style={{ transitionDelay: `${i * 0.08}s` }}
                >
                  <div
                    className={isComingSoon ? "project-card-disabled" : "project-card"}
                    onClick={() => openProject(project)}
                    onMouseEnter={() => !isComingSoon && setHoveredProject(project.id)}
                    onMouseLeave={() => setHoveredProject(null)}
                  >
                    {/* Status Badge */}
                    {isComingSoon ? (
                      <div className="coming-soon-badge">
                        ⏳ قريباً
                      </div>
                    ) : (
                      project.url && (
                        <div className="active-badge">
                          ● نشط
                        </div>
                      )
                    )}

                    {/* Accent bar for active cards */}
                    {!isComingSoon && (
                      <div
                        style={{
                          position: "absolute",
                          top: 0,
                          right: 0,
                          width: 4,
                          height: hoveredProject === project.id ? "100%" : 0,
                          background: project.color,
                          borderRadius: "0 4px 4px 0",
                          transition: "height 0.4s",
                        }}
                      />
                    )}

                    <div
                      style={{
                        fontSize: 36,
                        marginBottom: 16,
                        filter: isComingSoon ? "grayscale(60%)" : "none",
                        opacity: isComingSoon ? 0.6 : 1,
                      }}
                    >
                      {project.icon}
                    </div>
                    <h4
                      style={{
                        fontFamily: "'Noto Kufi Arabic', sans-serif",
                        fontSize: 20,
                        fontWeight: 700,
                        color: isComingSoon ? "#999" : "#2C2416",
                        marginBottom: 12,
                      }}
                    >
                      {project.title}
                    </h4>
                    <p
                      style={{
                        fontSize: 14,
                        lineHeight: 1.8,
                        color: isComingSoon ? "#aaa" : "#6B5D4F",
                        fontWeight: 300,
                        marginBottom: 16,
                      }}
                    >
                      {project.desc}
                    </p>
                    <div style={{ display: "flex", flexWrap: "wrap" }}>
                      {project.tags.map((t) => (
                        <span key={t} className={isComingSoon ? "tag-grey" : "tag"}>
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* View hint for active projects */}
                    {!isComingSoon && (
                      <div className="view-project-hint">
                        عرض التفاصيل ←
                      </div>
                    )}

                    {/* Coming soon overlay text */}
                    {isComingSoon && (
                      <div
                        style={{
                          marginTop: 16,
                          paddingTop: 16,
                          borderTop: "1px solid rgba(139, 139, 139, 0.1)",
                          fontSize: 13,
                          color: "#bbb",
                          fontWeight: 500,
                          textAlign: "center",
                        }}
                      >
                        سيتم الإعلان عنه قريباً
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
        </div>
      </section>

      {/* ═══════════ EXPERIENCE ═══════════ */}
      <section id="experience" style={{ padding: "80px 24px", maxWidth: 900, margin: "0 auto" }}>
        <h2
          style={{
            fontFamily: "'Noto Kufi Arabic', sans-serif",
            fontSize: 14,
            fontWeight: 700,
            color: "#5B7553",
            letterSpacing: 2,
            marginBottom: 12,
          }}
        >
          الخبرات
        </h2>
        <h3
          style={{
            fontFamily: "'Noto Kufi Arabic', sans-serif",
            fontSize: "clamp(24px, 4vw, 36px)",
            fontWeight: 800,
            color: "#2C2416",
            marginBottom: 40,
          }}
        >
          المسيرة المهنية
        </h3>

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          {experiences.map((exp, i) => (
            <div
              key={i}
              data-animate
              data-id={`exp-${i}`}
              className={`animate-card ${visibleCards.has(`exp-${i}`) ? "visible" : ""}`}
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div className={exp.highlight ? "exp-card-highlight" : "exp-card"}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    flexWrap: "wrap",
                    gap: 12,
                    marginBottom: 12,
                  }}
                >
                  <div>
                    <div style={{ fontSize: 28, marginBottom: 8 }}>{exp.icon}</div>
                    <h4
                      style={{
                        fontFamily: "'Noto Kufi Arabic', sans-serif",
                        fontSize: exp.highlight ? 20 : 18,
                        fontWeight: 700,
                        color: "#2C2416",
                      }}
                    >
                      {exp.role}
                    </h4>
                    <div
                      style={{
                        fontSize: 14,
                        color: "#5B7553",
                        fontWeight: 600,
                        marginTop: 2,
                      }}
                    >
                      {exp.org}
                    </div>
                  </div>
                  <div style={{ display: "flex", gap: 8, alignItems: "center", flexWrap: "wrap" }}>
                    {exp.highlight && (
                      <span
                        style={{
                          fontSize: 11,
                          color: "#D4A853",
                          background: "rgba(212, 168, 83, 0.1)",
                          padding: "4px 12px",
                          borderRadius: 20,
                          fontWeight: 700,
                        }}
                      >
                        ★ دور قيادي
                      </span>
                    )}
                    <span
                      style={{
                        fontSize: 12,
                        color: "#8B7D6B",
                        background: "rgba(139, 111, 71, 0.06)",
                        padding: "4px 12px",
                        borderRadius: 20,
                        fontWeight: 500,
                      }}
                    >
                      {exp.period}
                    </span>
                  </div>
                </div>
                <p style={{ fontSize: 14, lineHeight: 1.8, color: "#6B5D4F", fontWeight: 300 }}>
                  {exp.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════ SKILLS ═══════════ */}
      <section id="skills" style={{ padding: "80px 24px", maxWidth: 900, margin: "0 auto" }}>
        <h2
          style={{
            fontFamily: "'Noto Kufi Arabic', sans-serif",
            fontSize: 14,
            fontWeight: 700,
            color: "#5B7553",
            letterSpacing: 2,
            marginBottom: 12,
          }}
        >
          المهارات
        </h2>
        <h3
          style={{
            fontFamily: "'Noto Kufi Arabic', sans-serif",
            fontSize: "clamp(24px, 4vw, 36px)",
            fontWeight: 800,
            color: "#2C2416",
            marginBottom: 40,
          }}
        >
          التقنيات والأدوات
        </h3>

        <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
          {skills.map((skill, i) => (
            <div
              key={i}
              data-animate
              data-id={`skill-${i}`}
              className={`animate-card ${visibleCards.has(`skill-${i}`) ? "visible" : ""}`}
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "baseline",
                  marginBottom: 8,
                }}
              >
                <div>
                  <span style={{ fontWeight: 600, fontSize: 15, color: "#2C2416" }}>
                    {skill.name}
                  </span>
                  <span style={{ fontSize: 12, color: "#8B7D6B", marginRight: 8 }}>
                    {skill.items}
                  </span>
                </div>
                <span style={{ fontSize: 13, fontWeight: 700, color: "#5B7553" }}>
                  {skill.level}%
                </span>
              </div>
              <div className="skill-bar-bg">
                {visibleCards.has(`skill-${i}`) && (
                  <div className="skill-bar-fill" style={{ width: `${skill.level}%` }} />
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════ CERTIFICATIONS ═══════════ */}
      <section id="certs" style={{ padding: "80px 24px", maxWidth: 1100, margin: "0 auto" }}>
        <h2
          style={{
            fontFamily: "'Noto Kufi Arabic', sans-serif",
            fontSize: 14,
            fontWeight: 700,
            color: "#5B7553",
            letterSpacing: 2,
            marginBottom: 12,
          }}
        >
          الشهادات
        </h2>
        <h3
          style={{
            fontFamily: "'Noto Kufi Arabic', sans-serif",
            fontSize: "clamp(24px, 4vw, 36px)",
            fontWeight: 800,
            color: "#2C2416",
            marginBottom: 40,
          }}
        >
          الإنجازات والاعتمادات
        </h3>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
            gap: 20,
          }}
        >
          {certs.map((cert, i) => (
            <div
              key={i}
              data-animate
              data-id={`cert-${i}`}
              className={`animate-card ${visibleCards.has(`cert-${i}`) ? "visible" : ""}`}
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              <div className="cert-card">
                <div
                  style={{
                    width: 56,
                    height: 56,
                    borderRadius: 16,
                    background: `${cert.color}12`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 28,
                    margin: "0 auto 14px",
                  }}
                >
                  {cert.icon}
                </div>
                <h4
                  style={{
                    fontFamily: "'Noto Kufi Arabic', sans-serif",
                    fontSize: 14,
                    fontWeight: 700,
                    color: "#2C2416",
                    marginBottom: 6,
                    lineHeight: 1.5,
                  }}
                >
                  {cert.name}
                </h4>
                <div style={{ fontSize: 12, color: "#8B7D6B", fontWeight: 500 }}>
                  {cert.org}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════ CONTACT & FOOTER ═══════════ */}
      <div style={{ position: "relative", marginTop: 120 }}>
        {/* SVG Top Curve */}
        <div style={{ position: "absolute", top: -119, left: 0, right: 0, width: "100%", overflow: "hidden", lineHeight: 0, transform: "rotate(180deg)" }}>
          <svg viewBox="0 0 1440 120" fill="none" preserveAspectRatio="none" style={{ display: "block", width: "100%", height: 120 }}>
            <path d="M0,120 L1440,120 L1440,80 C960,-20 480,140 0,80 L0,120 Z" fill="#0f1f12" />
          </svg>
        </div>

        <div style={{ background: "linear-gradient(160deg, #0f1f12 0%, #162416 100%)", color: "#FFFCF5" }}>
          <section
            id="contact"
            style={{
              padding: "80px 24px 60px",
              maxWidth: 700,
              margin: "0 auto",
              textAlign: "center",
            }}
          >
            <div
              data-animate
              data-id="contact"
              className={`animate-card ${visibleCards.has("contact") ? "visible" : ""}`}
            >
              <h2
                style={{
                  fontFamily: "'Noto Kufi Arabic', sans-serif",
                  fontSize: 14,
                  fontWeight: 700,
                  color: "#7A9E6E",
                  letterSpacing: 2,
                  marginBottom: 12,
                }}
              >
                تواصل
              </h2>
              <h3
                style={{
                  fontFamily: "'Noto Kufi Arabic', sans-serif",
                  fontSize: "clamp(28px, 5vw, 42px)",
                  fontWeight: 800,
                  color: "#FFFCF5",
                  marginBottom: 20,
                  lineHeight: 1.3,
                }}
              >
                خلنا نبني شي مميز سوا
              </h3>
              <p
                style={{
                  fontSize: 16,
                  color: "rgba(255, 252, 245, 0.7)",
                  lineHeight: 1.8,
                  marginBottom: 40,
                  fontWeight: 300,
                }}
              >
                سواء عندك مشروع تبغى تحققه، فرصة وظيفية، أو مجرد سالفة تقنية —
                تواصل معي وبكل سعادة أرد عليك.
              </p>

              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 12,
                  justifyContent: "center",
                }}
              >
                <a
                  href="mailto:cs.zyad0@gmail.com"
                  className="contact-btn"
                  style={{ background: "#5B7553", color: "white", textDecoration: "none" }}
                >
                  📧 الإيميل
                </a>
                <a
                  href="https://www.linkedin.com/in/zyad-mohammed-333b49314/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-btn"
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    color: "#60A5FA",
                    border: "1px solid rgba(96, 165, 250, 0.3)",
                    textDecoration: "none",
                  }}
                >
                  💼 LinkedIn
                </a>
                <a
                  href="https://github.com/cs-zyad"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-btn"
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    color: "#E2E8F0",
                    border: "1px solid rgba(226, 232, 240, 0.3)",
                    textDecoration: "none",
                  }}
                >
                  🐙 GitHub
                </a>
                <a
                  href="https://x.com/CS_ZYAD"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-btn"
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    color: "#E2E8F0",
                    border: "1px solid rgba(226, 232, 240, 0.3)",
                    textDecoration: "none",
                  }}
                >
                  𝕏 تويتر
                </a>
              </div>
            </div>
          </section>

          {/* ═══════════ FOOTER ═══════════ */}
          <footer
            style={{
              padding: "40px 24px",
              textAlign: "center",
              borderTop: "1px solid rgba(255, 252, 245, 0.08)",
            }}
          >
            <div
              style={{
                fontFamily: "'Noto Kufi Arabic', sans-serif",
                fontSize: 18,
                fontWeight: 800,
                color: "#7A9E6E",
                marginBottom: 8,
              }}
            >
              زياد<span style={{ color: "#D4A853" }}>.</span>
            </div>
            <p style={{ fontSize: 13, color: "rgba(255, 252, 245, 0.5)" }}>
              صُنع بشغف — {new Date().getFullYear()}
            </p>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default App;

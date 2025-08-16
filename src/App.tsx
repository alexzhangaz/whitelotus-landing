import React, { useState } from 'react';
import {
  FiGlobe,
  FiCalendar,
  FiBell,
  FiSettings,
  FiUsers,
  FiClock,
  FiCheckCircle,
  FiMonitor,
  FiMail,
  FiPhone,
  FiMapPin,
  FiStar,
  FiArrowRight,
  FiLayers,
  FiCreditCard,
  FiRepeat,
  FiTrendingUp,
  FiShield,
  FiBox,
  FiUsers,
  FiClock,
  FiCalendar,
  FiCreditCard,
  FiBox,
  FiLayers,
  FiBell,
  FiTrendingUp,
  FiGift,
  FiRepeat,
  FiFileText,
  FiStar,
  FiHome,
  FiRefreshCcw,
} from 'react-icons/fi';

type Language = 'en' | 'zh' | 'th';

interface Content {
  nav: {
    home: string;
    features: string;
    contact: string;
  };
  hero: {
    title: string;
    subtitle: string;
    cta: string;
  };
  features: {
    title: string;
    items: {
      title: string;
      description: string;
    }[];
  };
  howItWorks: {
    title: string;
    steps: {
      title: string;
      description: string;
    }[];
  };
  testimonial: {
    quote: string;
    author: string;
    business: string;
  };
  highlights: {
    title: string;
    items: {
      title: string;
      description: string;
      icon: React.ComponentType<any>;
    }[];
  };
  modulesOverview: {
    core: string;
    advanced: string;
    operations: string;
  };
  cta: {
    title: string;
    button: string;
  };
  footer: {
    copyright: string;
    contact: string;
  };
}

const content: Record<Language, Content> = {
  en: {
    nav: {
      home: 'Home',
      features: 'Features',
      contact: 'Contact',
    },
    hero: {
      title: 'All-in-One Booking & Operations Platform',
      subtitle:
        'Member, coach, room, payment, multi-tenant, smart notifications, and analytics—unified for fitness & spa businesses.',
      cta: 'Start Free Trial',
    },
    features: {
      title: 'Everything you need to manage bookings',
      items: [
        {
          title: 'Member & VIP Management',
          description:
            'Register members, manage VIP tiers, loyalty, and flexible recharge rules.',
        },
        {
          title: 'Staff Scheduling',
          description:
            'Dynamic availability, shift creation, and conflict detection to avoid double bookings.',
        },
        {
          title: 'Intelligent Booking',
          description:
            'Online appointments with real-time availability and lifecycle status control.',
        },
        {
          title: 'Room & Facility Control',
          description:
            'Reserve rooms, track usage, monitor cleaning and occupancy.',
        },
        {
          title: 'Payment Ecosystem',
          description:
            'Omise integration, offline confirmation, gift cards, VIP top-ups, and refunds.',
        },
        {
          title: 'Multi-Tenant Architecture',
          description:
            'Multiple gyms/spas run in isolated environments with separated data.',
        },
        {
          title: 'Real-Time Notifications',
          description:
            'Email, SMS, in-app, and WebSocket push to keep everyone informed instantly.',
        },
        {
          title: 'Analytics & Insights',
          description:
            'Membership growth, revenue breakdown, coach performance, and space utilization.',
        },
      ],
    },
    howItWorks: {
      title: 'How It Works',
      steps: [
        {
          title: 'Configure Your Business',
          description:
            'Set up tenants, coaches, rooms, services, VIP tiers and rules.',
        },
        {
          title: 'Customers Book Online',
          description:
            'Intelligent appointment scheduling with conflict detection.',
        },
        {
          title: 'Automate Operations',
          description:
            'Payments, notifications, and staff assignment execute seamlessly.',
        },
        {
          title: 'Drive Growth',
          description:
            'Use real-time analytics to optimize revenue and resource usage.',
        },
      ],
    },
    testimonial: {
      quote:
        'We consolidated operations, reduced no-shows, and grew revenue using White Lotus Software. We got 40% more bookings within the first month. Brilliant tool.',
      author: 'Narin Fitness',
      business: 'Bangkok Wellness Center',
    },
    highlights: {
      title: 'Platform Highlights',
      items: [
        {
          title: 'Intelligent Booking',
          description:
            'Dynamic scheduling, automatic conflict detection, and real-time status management.',
          icon: FiCalendar,
        },
        {
          title: 'Complete Payment Ecosystem',
          description:
            'Online/offline pay, gift cards, VIP top-ups, refunds with Omise integration.',
          icon: FiCreditCard,
        },
        {
          title: 'Real-Time Notifications',
          description:
            'Email, SMS, in-app messages with WebSocket push for instant updates.',
          icon: FiBell,
        },
        {
          title: 'Data-Driven Insights',
          description:
            'Track membership growth, coach performance, and room utilization to make smarter decisions.',
          icon: FiTrendingUp,
        },
      ],
    },
    modulesOverview: {
      core: 'Core Business: Member, Coach, Booking, Payment, Room',
      advanced:
        'Advanced: Multi-Tenant, Notifications, Analytics, Gift Cards, Refunds, Documentation',
      operations: 'Operations: VIP Orders, Shop Management, Scheduling, Recharge Rules',
    },
    cta: {
      title: 'Ready to streamline your business?',
      button: 'Get Started Free',
    },
    footer: {
      copyright: '© 2025 White Lotus Software',
      contact: 'Contact: hello@whitelotus.space',
    },
  },
  zh: {
    nav: {
      home: '首页',
      features: '模块',
      contact: '联系我们',
    },
    hero: {
      title: '一体化预约与运营平台',
      subtitle:
        '会员、教练、房间、支付、多租户、智能通知与分析——为健身与美容行业统一打造。',
      cta: '开始免费试用',
    },
    features: {
      title: '预约管理所需的一切功能',
      items: [
        {
          title: '会员 & VIP 管理',
          description:
            '会员注册、VIP等级、充值规则与忠诚度管理。',
        },
        {
          title: '教练排班',
          description:
            '动态可用、排班设置、冲突检测，避免重复预约。',
        },
        {
          title: '智能预约',
          description:
            '在线预约，实时可用性、状态生命周期管理。',
        },
        {
          title: '房间与设施管理',
          description:
            '房间预约、使用跟踪、清洁与占用监控。',
        },
        {
          title: '支付生态',
          description:
            '集成Omise、线下确认、礼品卡、VIP充值与退款。',
        },
        {
          title: '多租户架构',
          description:
            '多个商家数据隔离运行，彼此独立安全。',
        },
        {
          title: '实时通知',
          description:
            '邮件、短信、站内信与 WebSocket 推送，信息即时到达。',
        },
        {
          title: '数据洞察',
          description:
            '会员增长、教练绩效、房间利用率的可视化分析。',
        },
      ],
    },
    howItWorks: {
      title: '使用流程',
      steps: [
        {
          title: '配置你的业务',
          description:
            '设置租户、教练、房间、服务、VIP等级和规则。',
        },
        {
          title: '客户在线预约',
          description:
            '智能排期附带冲突检测，自动推荐可用时间。',
        },
        {
          title: '自动化运营',
          description:
            '支付、通知与人员分配无缝执行。',
        },
        {
          title: '驱动增长',
          description:
            '利用实时分析优化收入与资源配置。',
        },
      ],
    },
    testimonial: {
      quote:
        '我们整合了运营，减少爽约，用白莲软件提升了收入。',
      author: 'Narin Fitness',
      business: '曼谷健康中心',
    },
    highlights: {
      title: '系统亮点',
      items: [
        {
          title: '智能预约',
          description:
            '动态排班、自动冲突检测、实时状态管理。',
          icon: FiCalendar,
        },
        {
          title: '完整支付体系',
          description:
            '线上/线下支付、礼品卡、VIP充值、退款，Omise 集成。',
          icon: FiCreditCard,
        },
        {
          title: '实时通知',
          description:
            '邮件、短信、站内信和 WebSocket 推送，即时提醒。',
          icon: FiBell,
        },
        {
          title: '数据驱动',
          description:
            '追踪会员增长、教练表现与房间使用率，辅助决策。',
          icon: FiTrendingUp,
        },
      ],
    },
    modulesOverview: {
      core: '核心业务：会员、教练、预约、支付、房间',
      advanced:
        '高级功能：多租户、通知、分析、礼品卡、退款、文档',
      operations: '运营管理：VIP订单、店铺、排班、充值规则',
    },
    cta: {
      title: '准备好简化你的业务了吗？',
      button: '免费开始',
    },
    footer: {
      copyright: '版权所有 © 2025 白莲软件',
      contact: '联系我们：hello@whitelotus.space',
    },
  },
  th: {
    nav: {
      home: 'หน้าแรก',
      features: 'โมดูล',
      contact: 'ติดต่อ',
    },
    hero: {
      title: 'แพลตฟอร์มจองและปฏิบัติงานครบวงจร',
      subtitle:
        'สมาชิก โค้ช ห้อง ระบบชำระเงิน หลายผู้เช่า แจ้งเตือนอัจฉริยะ และการวิเคราะห์—รวมในที่เดียวสำหรับฟิตเนสและสปา',
      cta: 'เริ่มทดลองใช้ฟรี',
    },
    features: {
      title: 'ทุกสิ่งที่คุณต้องการในการจัดการการจอง',
      items: [
        {
          title: 'การจัดการสมาชิก & VIP',
          description:
            'ลงทะเบียนสมาชิก จัดระดับ VIP กฎเติมเงินและความภักดี',
        },
        {
          title: 'ตารางโค้ช',
          description:
            'ความพร้อมที่ปรับได้แบบไดนามิก การจัดกะ และการตรวจสอบความขัดแย้ง',
        },
        {
          title: 'การจองอัจฉริยะ',
          description:
            'การนัดหมายออนไลน์พร้อมสถานะแบบเรียลไทม์และการจัดการวงจรชีวิต',
        },
        {
          title: 'การควบคุมห้อง',
          description:
            'สำรองห้อง ติดตามการใช้งาน ตรวจสอบความสะอาดและการครอบครอง',
        },
        {
          title: 'ระบบการชำระเงิน',
          description:
            'รวม Omise, การยืนยันออฟไลน์ บัตรของขวัญ เติมเงิน VIP และการคืนเงิน',
        },
        {
          title: 'โครงสร้างหลายผู้เช่า',
          description:
            'หลายยิม/สปาแยกข้อมูลอย่างสมบูรณ์ปลอดภัย',
        },
        {
          title: 'การแจ้งเตือนแบบเรียลไทม์',
          description:
            'อีเมล ข้อความ สายในแอป และการผลักดัน WebSocket',
        },
        {
          title: 'ข้อมูลเชิงลึกจากข้อมูล',
          description:
            'ติดตามการเติบโตของสมาชิก ผลงานโค้ช และการใช้ห้อง',
        },
      ],
    },
    howItWorks: {
      title: 'วิธีการใช้งาน',
      steps: [
        {
          title: 'ตั้งค่าธุรกิจของคุณ',
          description:
            'สร้างผู้เช่า กำหนดโค้ช ห้อง บริการ และระดับ VIP',
        },
        {
          title: 'ลูกค้าจองออนไลน์',
          description:
            'การนัดหมายอัจฉริยะพร้อมการตรวจสอบความขัดแย้ง',
        },
        {
          title: 'ระบบทำงานอัตโนมัติ',
          description:
            'การชำระเงิน การแจ้งเตือน และการมอบหมายพนักงานทำงานอย่างไร้รอยต่อ',
        },
        {
          title: 'ผลักดันการเติบโต',
          description:
            'ใช้การวิเคราะห์แบบเรียลไทม์ในการปรับรายได้และการใช้ทรัพยากร',
        },
      ],
    },
    testimonial: {
      quote:
        'เรา รวมการปฏิบัติงาน ลดการไม่มาตามนัด และเติบโตจากรายได้ด้วย White Lotus Software',
      author: 'Narin Fitness',
      business: 'Bangkok Wellness Center',
    },
    highlights: {
      title: 'ไฮไลต์ระบบ',
      items: [
        {
          title: 'การจองอัจฉริยะ',
          description:
            'ตารางแบบไดนามิก การตรวจจับความขัดแย้งอัตโนมัติ และการจัดการสถานะแบบเรียลไทม์',
          icon: FiCalendar,
        },
        {
          title: 'ระบบชำระเงินครบถ้วน',
          description:
            'ชำระเงินออนไลน์/ออฟไลน์ บัตรของขวัญ เติมเงิน VIP การคืนเงิน พร้อมการรวม Omise',
          icon: FiCreditCard,
        },
        {
          title: 'การแจ้งเตือนแบบเรียลไทม์',
          description:
            'อีเมล ข้อความ และการผลักดันผ่าน WebSocket แจ้งเตือนทันที',
          icon: FiBell,
        },
        {
          title: 'ข้อมูลเชิงลึกจากข้อมูล',
          description:
            'ติดตามการเติบโตของสมาชิก ผลงานโค้ช และการใช้ห้องเพื่อการตัดสินใจที่ชาญฉลาด',
          icon: FiTrendingUp,
        },
      ],
    },
    modulesOverview: {
      core: 'ฟีเจอร์หลัก: สมาชิก, โค้ช, การจอง, การชำระเงิน, ห้อง',
      advanced:
        'ขั้นสูง: หลายผู้เช่า, การแจ้งเตือน, การวิเคราะห์, บัตรของขวัญ, การคืนเงิน, เอกสาร',
      operations: 'การจัดการ: คำสั่ง VIP, การจัดการร้าน, ตารางเวลา, กฎเติมเงิน',
    },
    cta: {
      title: 'พร้อมที่จะปรับกระบวนการธุรกิจของคุณหรือยัง?',
      button: 'เริ่มฟรี',
    },
    footer: {
      copyright: 'ลิขสิทธิ์ © 2025 ไวท์โลตัสซอฟต์แวร์',
      contact: 'อีเมลติดต่อ: hello@whitelotus.space',
    },
  },
};

function App() {
  const [language, setLanguage] = useState<Language>('en');
  const currentContent = content[language];

  const getLanguageFlag = (lang: Language) => {
    switch (lang) {
      case 'en':
        return '🇺🇸';
      case 'zh':
        return '🇨🇳';
      case 'th':
        return '🇹🇭';
    }
  };

  const getLanguageName = (lang: Language) => {
    switch (lang) {
      case 'en':
        return 'English';
      case 'zh':
        return '中文';
      case 'th':
        return 'ไทย';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-blue-50 to-white">
      {/* Navigation */}
      <nav className="sticky top-0 bg-white/90 backdrop-blur-md border-b border-pink-100 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <img
                src="/media/logo.png"
                alt="White Lotus Logo"
                loading="lazy"
                className="w-16 h-16 object-contain logo"
              />
              {/* <h1 className="text-xl font-bold bg-gradient-to-r from-pink-600 to-blue-600 bg-clip-text text-transparent">
                {language === 'zh'
                  ? '白莲软件'
                  : language === 'th'
                  ? 'ไวท์โลตัส'
                  : 'White Lotus'}
              </h1> */}
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#home"
                className="text-gray-700 hover:text-pink-600 transition-colors"
              >
                {currentContent.nav.home}
              </a>
              <a
                href="#features"
                className="text-gray-700 hover:text-pink-600 transition-colors"
              >
                {currentContent.nav.features}
              </a>
              <a
                href="#contact"
                className="text-gray-700 hover:text-pink-600 transition-colors"
              >
                {currentContent.nav.contact}
              </a>
            </div>

            <div className="relative">
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value as Language)}
                className="appearance-none btn btn-primary text-white px-4 py-2 rounded-lg text-sm font-medium cursor-pointer hover:from-pink-600 hover:to-blue-600 transition-all"
              >
                <option value="en">🇺🇸 EN</option>
                <option value="zh">🇨🇳 中文</option>
                <option value="th">🇹🇭 ไทย</option>
              </select>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      {/* <section
        id="home"
        className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-pink-200/30 via-blue-200/30 to-purple-200/30"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            {currentContent.hero.title}
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            {currentContent.hero.subtitle}
          </p>
          <button className="bg-gradient-to-r from-pink-500 to-blue-500 hover:from-pink-600 hover:to-blue-600 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all transform hover:scale-105 shadow-lg hover:shadow-xl">
            {currentContent.hero.cta}
          </button>
        </div>
      </section> */}
      {/* Hero Section */}
<section
  id="home"
  className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-white"
>
  <div className="absolute inset-0 bg-gradient-to-r from-pink-200/30 via-blue-200/30 to-purple-200/30"></div>

  <div className="relative max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
    {/* 左边：视频 */}
    <div className="relative flex justify-center">
  <div className="w-3/4 md:w-2/3 lg:w-1/2 rounded-2xl overflow-hidden shadow-xl">
    <video
      src="/media/book-small.mov"
      autoPlay
      muted
      loop
      playsInline
      className="w-full h-full object-cover rounded-2xl"
    />
  </div>
</div>


    {/* 右边：内容 */}
    <div className="relative text-center md:text-left">
      <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
        {currentContent.hero.title}
      </h2>
      <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
        {currentContent.hero.subtitle}
      </p>
{/* <button className="btn btn-primary">
        {currentContent.hero.cta}
      </button> */}
      <a href="mailto:hello@whitelotus.space?subject=Free Trial Request&body=I would like to start a free trial of White Lotus Software." className="btn btn-primary">
  {currentContent.hero.cta}
</a>
    </div>
  </div>
</section>


      {/* Modules Overview */}
      {/* <section className="py-16 px-4 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-10">
            {language === 'zh'
              ? '主要模块概览'
              : language === 'th'
              ? 'ภาพรวมโมดูลหลัก'
              : 'Main Modules Overview'}
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-6 shadow">
              <h4 className="text-xl font-semibold mb-4">
                {language === 'zh'
                  ? '核心业务功能'
                  : language === 'th'
                  ? 'ฟีเจอร์หลัก'
                  : 'Core Business'}
              </h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>{language === 'zh' ? '会员管理' : language === 'th' ? 'สมาชิก' : 'Member Management'}</li>
                <li>{language === 'zh' ? '教练管理' : language === 'th' ? 'โค้ช' : 'Coach Management'}</li>
                <li>{language === 'zh' ? '预约系统' : language === 'th' ? 'การจอง' : 'Booking System'}</li>
                <li>{language === 'zh' ? '支付系统' : language === 'th' ? 'ระบบชำระเงิน' : 'Payment System'}</li>
                <li>{language === 'zh' ? '房间管理' : language === 'th' ? 'การจัดการห้อง' : 'Room Management'}</li>
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow">
              <h4 className="text-xl font-semibold mb-4">
                {language === 'zh'
                  ? '高级功能'
                  : language === 'th'
                  ? 'ฟีเจอร์ขั้นสูง'
                  : 'Advanced Features'}
              </h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>{language === 'zh' ? '多租户架构' : language === 'th' ? 'หลายผู้เช่า' : 'Multi-Tenant'}</li>
                <li>{language === 'zh' ? '智能通知系统' : language === 'th' ? 'การแจ้งเตือน' : 'Smart Notifications'}</li>
                <li>{language === 'zh' ? '统计分析' : language === 'th' ? 'การวิเคราะห์' : 'Analytics'}</li>
                <li>{language === 'zh' ? '礼品卡系统' : language === 'th' ? 'บัตรของขวัญ' : 'Gift Card System'}</li>
                <li>{language === 'zh' ? '退款管理' : language === 'th' ? 'การคืนเงิน' : 'Refund Management'}</li>
                <li>{language === 'zh' ? '文档管理' : language === 'th' ? 'เอกสาร' : 'Documentation'}</li>
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow">
              <h4 className="text-xl font-semibold mb-4">
                {language === 'zh'
                  ? '运营管理'
                  : language === 'th'
                  ? 'การจัดการ'
                  : 'Operations'}
              </h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>{language === 'zh' ? 'VIP会员系统' : language === 'th' ? 'คำสั่ง VIP' : 'VIP Orders'}</li>
                <li>{language === 'zh' ? '店铺管理' : language === 'th' ? 'การจัดการร้าน' : 'Shop Management'}</li>
                <li>{language === 'zh' ? '排班系统' : language === 'th' ? 'ตารางเวลา' : 'Scheduling'}</li>
                <li>{language === 'zh' ? '充值规则' : language === 'th' ? 'กฎเติมเงิน' : 'Recharge Rules'}</li>
              </ul>
            </div>
          </div>
        </div>
      </section> */}
      {/* Modules Overview */}
<section className="py-16 px-4 lg:px-8">
  <div className="max-w-7xl mx-auto">
    <h3 className="text-3xl font-bold text-center mb-10">
      {language === 'zh'
        ? '主要模块概览'
        : language === 'th'
        ? 'ภาพรวมโมดูลหลัก'
        : 'Main Modules Overview'}
    </h3>
    <div className="grid md:grid-cols-3 gap-8">
      {/* Core Business */}
      <div className="bg-white rounded-2xl p-6 shadow">
        <h4 className="text-xl font-semibold mb-4 flex items-center gap-2">
          {/* <FiLayers className="w-6 h-6 text-pink-500" /> */}
          {language === 'zh'
            ? '核心业务功能'
            : language === 'th'
            ? 'ฟีเจอร์หลัก'
            : 'Core Business'}
        </h4>
        <ul className="space-y-3 text-sm text-gray-600">
          <li className="flex items-start gap-2">
            <FiUsers className="w-5 h-5 mt-1 text-blue-500" />
            {language === 'zh'
              ? '会员管理'
              : language === 'th'
              ? 'สมาชิก'
              : 'Member Management'}
          </li>
          <li className="flex items-start gap-2">
            <FiClock className="w-5 h-5 mt-1 text-indigo-500" />
            {language === 'zh'
              ? '教练管理'
              : language === 'th'
              ? 'โค้ช'
              : 'Coach Management'}
          </li>
          <li className="flex items-start gap-2">
            <FiCalendar className="w-5 h-5 mt-1 text-green-500" />
            {language === 'zh'
              ? '预约系统'
              : language === 'th'
              ? 'การจอง'
              : 'Booking System'}
          </li>
          <li className="flex items-start gap-2">
            <FiCreditCard className="w-5 h-5 mt-1 text-yellow-500" />
            {language === 'zh'
              ? '支付系统'
              : language === 'th'
              ? 'ระบบชำระเงิน'
              : 'Payment System'}
          </li>
          <li className="flex items-start gap-2">
            <FiBox className="w-5 h-5 mt-1 text-teal-500" />
            {language === 'zh'
              ? '房间管理'
              : language === 'th'
              ? 'การจัดการห้อง'
              : 'Room Management'}
          </li>
        </ul>
      </div>

      {/* Advanced Features */}
      <div className="bg-white rounded-2xl p-6 shadow">
        <h4 className="text-xl font-semibold mb-4 flex items-center gap-2">
          {/* <FiSettings className="w-6 h-6 text-blue-500" /> */}
          {language === 'zh'
            ? '高级功能'
            : language === 'th'
            ? 'ฟีเจอร์ขั้นสูง'
            : 'Advanced Features'}
        </h4>
        <ul className="space-y-3 text-sm text-gray-600">
          <li className="flex items-start gap-2">
            <FiLayers className="w-5 h-5 mt-1 text-pink-500" />
            {language === 'zh'
              ? '多租户架构'
              : language === 'th'
              ? 'หลายผู้เช่า'
              : 'Multi-Tenant'}
          </li>
          <li className="flex items-start gap-2">
            <FiBell className="w-5 h-5 mt-1 text-indigo-500" />
            {language === 'zh'
              ? '智能通知系统'
              : language === 'th'
              ? 'การแจ้งเตือน'
              : 'Smart Notifications'}
          </li>
          <li className="flex items-start gap-2">
            <FiTrendingUp className="w-5 h-5 mt-1 text-green-500" />
            {language === 'zh'
              ? '统计分析'
              : language === 'th'
              ? 'การวิเคราะห์'
              : 'Analytics'}
          </li>
          <li className="flex items-start gap-2">
            <FiGift className="w-5 h-5 mt-1 text-yellow-500" />
            {language === 'zh'
              ? '礼品卡系统'
              : language === 'th'
              ? 'บัตรของขวัญ'
              : 'Gift Card System'}
          </li>
          <li className="flex items-start gap-2">
            <FiRepeat className="w-5 h-5 mt-1 text-red-500" />
            {language === 'zh'
              ? '退款管理'
              : language === 'th'
              ? 'การคืนเงิน'
              : 'Refund Management'}
          </li>
          <li className="flex items-start gap-2">
            <FiFileText className="w-5 h-5 mt-1 text-gray-500" />
            {language === 'zh'
              ? '文档管理'
              : language === 'th'
              ? 'เอกสาร'
              : 'Documentation'}
          </li>
        </ul>
      </div>

      {/* Operations */}
      <div className="bg-white rounded-2xl p-6 shadow">
        <h4 className="text-xl font-semibold mb-4 flex items-center gap-2">
          {/* <FiRepeat className="w-6 h-6 text-purple-500" /> */}
          {language === 'zh'
            ? '运营管理'
            : language === 'th'
            ? 'การจัดการ'
            : 'Operations'}
        </h4>
        <ul className="space-y-3 text-sm text-gray-600">
          <li className="flex items-start gap-2">
            <FiStar className="w-5 h-5 mt-1 text-yellow-400" />
            {language === 'zh'
              ? 'VIP会员系统'
              : language === 'th'
              ? 'คำสั่ง VIP'
              : 'VIP Orders'}
          </li>
          <li className="flex items-start gap-2">
            <FiHome className="w-5 h-5 mt-1 text-blue-400" />
            {language === 'zh'
              ? '店铺管理'
              : language === 'th'
              ? 'การจัดการร้าน'
              : 'Shop Management'}
          </li>
          <li className="flex items-start gap-2">
            <FiCalendar className="w-5 h-5 mt-1 text-indigo-500" />
            {language === 'zh'
              ? '排班系统'
              : language === 'th'
              ? 'ตารางเวลา'
              : 'Scheduling'}
          </li>
          <li className="flex items-start gap-2">
            <FiRefreshCcw className="w-5 h-5 mt-1 text-green-500" />
            {language === 'zh'
              ? '充值规则'
              : language === 'th'
              ? 'กฎเติมเงิน'
              : 'Recharge Rules'}
          </li>
        </ul>
      </div>
    </div>
  </div>
</section>


      {/* Features Section */}
      <section
        id="features"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50"
      >
        <div className="max-w-7xl mx-auto">
          <h3 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
            {currentContent.features.title}
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {currentContent.features.items.map((feature, index) => {
              const icons = [
                FiUsers,
                FiClock,
                FiCalendar,
                FiBox,
                FiCreditCard,
                FiLayers,
                FiBell,
                FiTrendingUp,
              ];
              const Icon = icons[index];
              const gradients = [
                'from-pink-400 to-rose-400',
                'from-blue-400 to-cyan-400',
                'from-purple-400 to-pink-400',
                'from-indigo-400 to-blue-400',
                'from-yellow-400 to-pink-400',
                'from-green-400 to-teal-400',
                'from-indigo-500 to-purple-500',
                'from-blue-500 to-green-400',
              ];

              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 border border-pink-100 features"
                >
                  {/* <div
                    className={`w-12 h-12 bg-gradient-to-r ${gradients[index]} rounded-xl flex items-center justify-center mb-4`}
                  > */}
                    {/* <Icon className="w-6 h-6 text-white" /> */}
                    <img
                        src={`/media/feature${index + 1}.png`}
                        alt={feature.title}
                        loading="lazy"
                        className="w-6 h-6 object-contain fearure-img shadow-2xl "
                      />
                  {/* </div> */}
                  <div className="feature-content">
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">
                    {feature.title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed feature-text">
                    {feature.description}
                  </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-16 px-4 lg:px-8 bg-gradient-to-r from-white to-pink-50">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12">
            {currentContent.highlights.title}
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {currentContent.highlights.items.map((h, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-2xl shadow flex flex-col"
              >
                <div className="flex items-center mb-4">
                  <div className="mr-3">
                    <h4 className="text-lg font-semibold flex items-center">
                      <h4 className="mr-2">{React.createElement(h.icon, { className: 'w-6 h-6 text-pink-500' })}</h4>
                      {h.title}
                    </h4>
                  </div>
                </div>
                <p className="text-sm text-gray-600">{h.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      {/* <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
            {currentContent.howItWorks.title}
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {currentContent.howItWorks.steps.map((step, index) => {
              const icons = [FiLayers, FiGlobe, FiRepeat, FiTrendingUp];
              const Icon = icons[index];

              return (
                <div key={index} className="text-center">
                  <div className="relative mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-rose-400 to-pink-400 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">
                        {index + 1}
                      </span>
                    </div>
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">
                    {step.title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section> */}

      {/* Testimonial Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-pink-50 to-blue-50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-pink-100">
            <div className="flex justify-center mb-6">
              {[...Array(5)].map((_, i) => (
                <FiStar key={i} className="w-6 h-6 text-yellow-400" />
              ))}
            </div>
            <blockquote className="text-2xl md:text-3xl font-medium text-gray-900 mb-8 leading-relaxed">
              "{currentContent.testimonial.quote}"
            </blockquote>
            <div>
              <p className="text-lg font-semibold text-gray-900">
                {currentContent.testimonial.author}
              </p>
              <p className="text-gray-600">
                {currentContent.testimonial.business}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-pink-500 to-blue-500">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-8 text-bg-none">
            {currentContent.cta.title}
          </h3>
{/* <button className="btn btn-primary">
            <span>{currentContent.cta.button}</span>
            <FiArrowRight className="w-5 h-5" />
          </button> */}
          <a href="mailto:hello@whitelotus.space?subject=Free Trial Request&body=I would like to start a free trial of White Lotus Software." className="btn btn-primary flex items-center">
  <span>{currentContent.cta.button}</span>
  <FiArrowRight className="w-5 h-5" />
</a>

        </div>
      </section>

      {/* Footer */}
      <footer
        id="contact"
        className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                {/* <div className="w-8 h-8 bg-gradient-to-r from-pink-400 to-blue-400 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">WL</span>
                </div>
                <h4 className="text-xl font-bold">
                  {language === 'zh'
                    ? '白莲软件'
                    : language === 'th'
                    ? 'ไวท์โลตัสซอฟต์แวร์'
                    : 'White Lotus Software'}
                </h4> */}
                <img
                src="/media/logo.png"
                alt="White Lotus Logo"
                loading="lazy"
                className="w-16 h-16 object-contain logo"
              />
              </div>
              <p className="text-gray-400">
                {language === 'en' &&
                  'Streamlining appointment booking and operations for fitness & wellness businesses.'}
                {language === 'zh' && '为健身与养生行业简化预约与运营流程。'}
                {language === 'th' &&
                  'ปรับปรุงระบบการจองและการดำเนินงานสำหรับธุรกิจฟิตเนสและสุขภาพ.'}
              </p>
            </div>

            <div>
              <h5 className="text-lg font-semibold mb-4">
                {currentContent.nav.contact}
              </h5>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <FiMail className="w-4 h-4" />
                  <span className="text-gray-400">
                    hello@whitelotus.space
                  </span>
                </div>
                {/* <div className="flex items-center space-x-2">
                  <FiPhone className="w-4 h-4" />
                  <span className="text-gray-400">+66 (0) 2-xxx-xxxx</span>
                </div> */}
                <div className="flex items-center space-x-2">
                  <FiMapPin className="w-4 h-4" />
                  <span className="text-gray-400">Bangkok, Thailand</span>
                </div>
              </div>
            </div>

            <div>
              <h5 className="text-lg font-semibold mb-4">
                {language === 'en' && 'Languages'}
                {language === 'zh' && '语言支持'}
                {language === 'th' && 'ภาษาที่รองรับ'}
              </h5>
              <div className="flex space-x-4">
                {(['en', 'zh', 'th'] as Language[]).map((lang) => (
                  <button
                    key={lang}
                    onClick={() => setLanguage(lang)}
                    className={`btn btn-primary ${
                      language === lang
                        ? 'bg-gradient-to-r from-pink-500 to-blue-500 text-white'
                        : 'bg-gray-800 text-gray-400 hover:text-white'
                    }`}
                  >
                    {getLanguageFlag(lang)} {getLanguageName(lang)}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>{currentContent.footer.copyright}</p>
            <p className="mt-2">{currentContent.footer.contact}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

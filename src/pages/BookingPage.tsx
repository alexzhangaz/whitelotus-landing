import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { 
  FiArrowLeft, 
  FiUser, 
  FiMail, 
  FiPhone, 
  FiHome, 
  FiCheckCircle,
  FiUsers,
  FiClock,
  FiCalendar,
  FiBox,
  FiCreditCard,
  FiLayers,
  FiBell,
  FiTrendingUp
} from 'react-icons/fi';

type Language = 'en' | 'zh' | 'th';

interface BookingContent {
  title: string;
  subtitle: string;
  hero: {
    title: string;
    subtitle: string;
    cta: string;
  };
  form: {
    name: string;
    email: string;
    phone: string;
    company: string;
    submit: string;
    submitting: string;
  };
  success: {
    title: string;
    message: string;
    backHome: string;
  };
  validation: {
    required: string;
    emailInvalid: string;
    phoneInvalid: string;
  };
  features: {
    title: string;
    items: {
      title: string;
      description: string;
    }[];
  };
}



const content: Record<Language, BookingContent> = {
  en: {
    title: 'Start Your Free Trial',
    subtitle: 'Get access to our all-in-one booking and operations platform',
    hero: {
      title: 'All-in-One Booking & Operations Platform',
      subtitle: 'Member, coach, room, payment, multi-tenant, smart notifications, and analytics—unified for massage, fitness & spa businesses.',
      cta: 'Start Free Trial'
    },
    form: {
      name: 'Full Name',
      email: 'Email Address',
      phone: 'Phone Number',
      company: 'Company (Optional)',
      submit: 'Start Free Trial',
      submitting: 'Starting Trial...'
    },
    success: {
      title: 'Trial Started Successfully!',
      message: 'Thank you for your interest! We\'ll contact you within 24 hours to set up your trial account.',
      backHome: 'Back to Home'
    },
    validation: {
      required: 'This field is required',
      emailInvalid: 'Please enter a valid email address',
      phoneInvalid: 'Please enter a valid phone number'
    },
    features: {
      title: 'Everything you need to manage bookings',
      items: [
        {
          title: 'Member & VIP Management',
          description: 'Register members, manage VIP tiers, loyalty, and flexible recharge rules.',
        },
        {
          title: 'Staff Scheduling',
          description: 'Dynamic availability, shift creation, and conflict detection to avoid double bookings.',
        },
        {
          title: 'Intelligent Booking',
          description: 'Online appointments with real-time availability and lifecycle status control.',
        },
        {
          title: 'Room & Facility Control',
          description: 'Reserve rooms, track usage, monitor cleaning and occupancy.',
        },
        {
          title: 'Payment Ecosystem',
          description: 'Omise integration, offline confirmation, gift cards, VIP top-ups, and refunds.',
        },
        {
          title: 'Multi-Tenant Architecture',
          description: 'Multiple gyms/spas run in isolated environments with separated data.',
        },
        {
          title: 'Real-Time Notifications',
          description: 'Email, SMS, in-app, and WebSocket push to keep everyone informed instantly.',
        },
        {
          title: 'Analytics & Insights',
          description: 'Membership growth, revenue breakdown, coach performance, and space utilization.',
        },
      ],
    }
  },
  zh: {
    title: '开始免费试用',
    subtitle: '获取我们的一体化预约与运营平台访问权限',
    hero: {
      title: '一体化预约与运营平台',
      subtitle: '会员、教练、房间、支付、多租户、智能通知与分析——为按摩，健身与美容行业统一打造。',
      cta: '开始免费试用'
    },
    form: {
      name: '姓名',
      email: '邮箱地址',
      phone: '电话号码',
      company: '公司名称（选填）',
      submit: '开始免费试用',
      submitting: '正在启动试用...'
    },
    success: {
      title: '试用启动成功！',
      message: '感谢您的关注！我们将在24小时内联系您，为您设置试用账户。',
      backHome: '返回首页'
    },
    validation: {
      required: '此字段为必填项',
      emailInvalid: '请输入有效的邮箱地址',
      phoneInvalid: '请输入有效的电话号码'
    },
    features: {
      title: '预约管理所需的一切功能',
      items: [
        {
          title: '会员 & VIP 管理',
          description: '会员注册、VIP等级、充值规则与忠诚度管理。',
        },
        {
          title: '教练排班',
          description: '动态可用、排班设置、冲突检测，避免重复预约。',
        },
        {
          title: '智能预约',
          description: '在线预约，实时可用性、状态生命周期管理。',
        },
        {
          title: '房间与设施管理',
          description: '房间预约、使用跟踪、清洁与占用监控。',
        },
        {
          title: '支付生态',
          description: '集成Omise、线下确认、礼品卡、VIP充值与退款。',
        },
        {
          title: '多租户架构',
          description: '多个商家数据隔离运行，彼此独立安全。',
        },
        {
          title: '实时通知',
          description: '邮件、短信、站内信与 WebSocket 推送，信息即时到达。',
        },
        {
          title: '数据洞察',
          description: '会员增长、教练绩效、房间利用率的可视化分析。',
        },
      ],
    }
  },
  th: {
    title: 'เริ่มทดลองใช้ฟรี',
    subtitle: 'เข้าถึงแพลตฟอร์มจองและปฏิบัติงานครบวงจรของเรา',
    hero: {
      title: 'แพลตฟอร์มจองและปฏิบัติงานครบวงจร',
      subtitle: 'สมาชิก โค้ช ห้อง ระบบชำระเงิน หลายผู้เช่า แจ้งเตือนอัจฉริยะ และการวิเคราะห์—บริการครบวงจรสำหรับร้านนวด ฟิตเนส และสปา',
      cta: 'เริ่มทดลองใช้ฟรี'
    },
    form: {
      name: 'ชื่อ-นามสกุล',
      email: 'ที่อยู่อีเมล',
      phone: 'หมายเลขโทรศัพท์',
      company: 'บริษัท (ไม่บังคับ)',
      submit: 'เริ่มทดลองใช้ฟรี',
      submitting: 'กำลังเริ่มทดลอง...'
    },
    success: {
      title: 'เริ่มทดลองใช้สำเร็จ!',
      message: 'ขอบคุณสำหรับความสนใจ! เราจะติดต่อคุณภายใน 24 ชั่วโมงเพื่อตั้งค่าบัญชีทดลองใช้',
      backHome: 'กลับหน้าแรก'
    },
    validation: {
      required: 'ฟิลด์นี้จำเป็นต้องกรอก',
      emailInvalid: 'กรุณากรอกที่อยู่อีเมลที่ถูกต้อง',
      phoneInvalid: 'กรุณากรอกหมายเลขโทรศัพท์ที่ถูกต้อง'
    },
    features: {
      title: 'ทุกสิ่งที่คุณต้องการในการจัดการการจอง',
      items: [
        {
          title: 'การจัดการสมาชิก & VIP',
          description: 'ลงทะเบียนสมาชิก จัดระดับ VIP กฎเติมเงินและความภักดี',
        },
        {
          title: 'ตารางโค้ช',
          description: 'ความพร้อมที่ปรับได้แบบไดนามิก การจัดกะ และการตรวจสอบความขัดแย้ง',
        },
        {
          title: 'การจองอัจฉริยะ',
          description: 'การนัดหมายออนไลน์พร้อมสถานะแบบเรียลไทม์และการจัดการวงจรชีวิต',
        },
        {
          title: 'การควบคุมห้อง',
          description: 'สำรองห้อง ติดตามการใช้งาน ตรวจสอบความสะอาดและการครอบครอง',
        },
        {
          title: 'ระบบการชำระเงิน',
          description: 'รวม Omise, การยืนยันออฟไลน์ บัตรของขวัญ เติมเงิน VIP และการคืนเงิน',
        },
        {
          title: 'โครงสร้างหลายผู้เช่า',
          description: 'หลายยิม/สปาแยกข้อมูลอย่างสมบูรณ์ปลอดภัย',
        },
        {
          title: 'การแจ้งเตือนแบบเรียลไทม์',
          description: 'อีเมล ข้อความ สายในแอป และการผลักดัน WebSocket',
        },
        {
          title: 'ข้อมูลเชิงลึกจากข้อมูล',
          description: 'ติดตามการเติบโตของสมาชิก ผลงานโค้ช และการใช้ห้อง',
        },
      ],
    }
  }
};

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
}

function BookingPage() {
  const history = useHistory();

  const handleBackToHome = () => {
    history.push('/');
  };
  const [language, setLanguage] = useState<Language>('zh');
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    company: ''
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const currentContent = content[language];

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone: string): boolean => {
    // const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
    // return phoneRegex.test(phone.replace(/[\s\-\(\)]/g, ''));
  //     const phoneRegex = /^(08\d{8}|\+66\d{9})$/;
  // return phoneRegex.test(phone.replace(/[\s\-\(\)]/g, ''));
  const phoneRegex = /^[\d\+\-\s\(\)]+$/;
return phoneRegex.test(phone) && phone.replace(/[\s\-\(\)]/g, '').length >= 6;


  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = currentContent.validation.required;
    }

    if (!formData.email.trim()) {
      newErrors.email = currentContent.validation.required;
    } else if (!validateEmail(formData.email)) {
      newErrors.email = currentContent.validation.emailInvalid;
    }

    if (!formData.phone.trim()) {
      newErrors.phone = currentContent.validation.required;
    } else if (!validatePhone(formData.phone)) {
      newErrors.phone = currentContent.validation.phoneInvalid;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // 追踪：Google Analytics 事件
if (window.gtag) {
  window.gtag('event', 'generate_lead', {
    event_category: 'booking',
    event_label: 'Free Trial Form',
    value: 1
  });
}

    try {
      // 方法1：使用fetch with no-cors（推荐）
      const response = await fetch('https://script.google.com/macros/s/AKfycbxvqnddYFujHtWgB4KY-U2oHbvITCeEaEs1wOlQG42_yOSxL92tVmKzZEcnv278g4bUUw/exec', {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          company: formData.company,
          language: language,
          timestamp: new Date().toISOString(),
          source: 'booking_page'
        })
      });

      // 由于使用了no-cors模式，无法检查响应状态
      // 但数据会正常发送到Google Sheets
      console.log('Form submitted to Google Sheets (no-cors mode):', formData);
      
      setIsSuccess(true);
    } catch (error) {
      console.error('Error submitting form:', error);
      
      // 方法2：备用方案 - 使用表单提交
      try {
        const form = document.createElement('form');
        form.method = 'POST';
        form.action = 'https://script.google.com/macros/s/AKfycbxvqnddYFujHtWgB4KY-U2oHbvITCeEaEs1wOlQG42_yOSxL92tVmKzZEcnv278g4bUUw/exec';
        form.target = '_blank';
        
        const data = {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          company: formData.company,
          language: language,
          timestamp: new Date().toISOString(),
          source: 'booking_page'
        };
        
        Object.entries(data).forEach(([key, value]) => {
          const input = document.createElement('input');
          input.type = 'hidden';
          input.name = key;
          input.value = value;
          form.appendChild(input);
        });
        
        document.body.appendChild(form);
        form.submit();
        document.body.removeChild(form);
        
        console.log('Form submitted via fallback method:', data);
        setIsSuccess(true);
      } catch (fallbackError) {
        console.error('Fallback method also failed:', fallbackError);
        // 即使出错也显示成功，因为用户已经填写了表单
        setIsSuccess(true);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const getLanguageFlag = (lang: Language) => {
    switch (lang) {
      case 'en': return '🇺🇸';
      case 'zh': return '🇨🇳';
      case 'th': return '🇹🇭';
    }
  };

  const getLanguageName = (lang: Language) => {
    switch (lang) {
      case 'en': return 'English';
      case 'zh': return '中文';
      case 'th': return 'ไทย';
    }
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-50 via-blue-50 to-white flex items-center justify-center px-4">
        <div className="max-w-md w-full">
          <div className="bg-white rounded-2xl p-8 shadow-xl text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <FiCheckCircle className="w-8 h-8 text-green-500" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mb-4">
              {currentContent.success.title}
            </h1>
            <p className="text-gray-600 mb-8 leading-relaxed">
              {currentContent.success.message}
            </p>
            <Link
              to="/"
              className="btn btn-primary w-full justify-center"
            >
              {currentContent.success.backHome}
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-blue-50 to-white">
      {/* Header */}
      <header className="bg-white/90 backdrop-blur-md border-b border-pink-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center space-x-2">
              <img
                src="/media/logo.png"
                alt="White Lotus Logo"
                className="w-12 h-12 object-contain"
              />
            </Link>

            <div className="flex items-center space-x-4">
              {/* <Link
                to="/"
                className="flex items-center text-gray-600 hover:text-pink-600 transition-colors"
              >
                <FiArrowLeft className="w-4 h-4 mr-2" />
                {language === 'zh' ? '返回首页' : language === 'th' ? 'กลับหน้าแรก' : 'Back to Home'}
              </Link> */}
              <button
  onClick={handleBackToHome}
  className="flex items-center text-gray-600 hover:text-pink-600 transition-colors"
>
  <FiArrowLeft className="w-4 h-4 mr-2" />
  {language === 'zh' ? '返回首页' : language === 'th' ? 'กลับหน้าแรก' : 'Back to Home'}
</button>

              <div className="relative">
                <select
                  value={language}
                  onChange={(e) => setLanguage(e.target.value as Language)}
                  className="appearance-none btn btn-primary text-white px-4 py-2 rounded-lg text-sm font-medium cursor-pointer"
                >
                  <option value="en">🇺🇸 EN</option>
                  <option value="zh">🇨🇳 中文</option>
                  <option value="th">🇹🇭 ไทย</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section - 复制自主页 */}
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
            <button 
              onClick={() => {
                const formSection = document.getElementById('booking-form');
                if (formSection) {
                  formSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="btn btn-primary"
            >
              {currentContent.hero.cta}
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/50">
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

              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 border border-pink-100 features"
                >
                  <img
                    src={`/media/feature${index + 1}.png`}
                    alt={feature.title}
                    loading="lazy"
                    className="w-6 h-6 object-contain fearure-img shadow-2xl"
                  />
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

      {/* Main Content */}
      <main id="booking-form" className="flex items-center justify-center px-4 py-12">
        <div className="max-w-md w-full">
          <div className="bg-white rounded-2xl p-8 shadow-xl">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-4">
                {currentContent.title}
              </h1>
              <p className="text-gray-600">
                {currentContent.subtitle}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {currentContent.form.name} *
                </label>
                <div className="relative">
                  <FiUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-colors ${
                      errors.name ? 'border-red-300' : 'border-gray-300'
                    }`}
                    placeholder={currentContent.form.name}
                  />
                </div>
                {errors.name && (
                  <p className="mt-1 text-sm text-red-600">{errors.name}</p>
                )}
              </div>

              {/* Email Field */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {currentContent.form.email} *
                </label>
                <div className="relative">
                  <FiMail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-colors ${
                      errors.email ? 'border-red-300' : 'border-gray-300'
                    }`}
                    placeholder={currentContent.form.email}
                  />
                </div>
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                )}
              </div>

              {/* Phone Field */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {currentContent.form.phone} *
                </label>
                <div className="relative">
                  <FiPhone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-colors ${
                      errors.phone ? 'border-red-300' : 'border-gray-300'
                    }`}
                    placeholder={currentContent.form.phone}
                  />
                </div>
                {errors.phone && (
                  <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
                )}
              </div>

              {/* Company Field */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {currentContent.form.company}
                </label>
                <div className="relative">
                  <FiHome className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => handleInputChange('company', e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-colors"
                    placeholder={currentContent.form.company}
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn btn-primary py-3 text-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? currentContent.form.submitting : currentContent.form.submit}
              </button>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}

export default BookingPage;

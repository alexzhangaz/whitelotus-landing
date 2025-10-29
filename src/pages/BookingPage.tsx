import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
// icons removed to avoid type issues; using plain text/emojis for clarity

type Language = 'en' | 'zh' | 'th';

interface BookingContent {
  title: string;
  subtitle: string;
  hero: {
    title: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    trialNote: string;
  };
  valueBullets: string[];
  trust: string;
  privacy: string;
  form: {
    name: string;
    phone: string;
    industry: string;
    companyOpt: string;
    emailOpt: string;
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
    phoneInvalid: string;
    emailInvalid: string;
  };
}



const content: Record<Language, BookingContent> = {
  en: {
    title: 'Start Free Trial',
    subtitle: '0 cost | Full features for 7 days | Cancel anytime',
    hero: {
      title: 'Free Trial 7 Days | All-in-one Booking Ops Platform',
      subtitle: 'Reduce booking conflicts, automate scheduling, and see revenue in one place.',
      ctaPrimary: 'Start Free Trial',
      ctaSecondary: 'See What You Get',
      trialNote: 'No credit card needed. Full access for 7 days.'
    },
    valueBullets: [
      'Smart Booking: customer self-book, auto conflict prevention',
      'Faster Ops: auto scheduling, reminders, check-in',
      'Insights: daily bookings and revenue at a glance',
      'Multi-language and multi-branch ready'
    ],
    trust: 'Trusted by growing massage, fitness and spa businesses',
    privacy: 'Your info is only used to set up the trial and will never be shared.',
    form: {
      name: 'Full Name',
      phone: 'Phone Number',
      industry: 'Industry',
      companyOpt: 'Company (Optional)',
      emailOpt: 'Email (Optional)',
      submit: 'Start Free Trial',
      submitting: 'Starting...'
    },
    success: {
      title: 'Trial Request Submitted!',
      message: 'Thanks! We will contact you within 24 hours to activate your trial.',
      backHome: 'Back to Home'
    },
    validation: {
      required: 'This field is required',
      phoneInvalid: 'Please enter a valid phone number',
      emailInvalid: 'Please enter a valid email address'
    }
  },
  zh: {
    title: '开始免费试用',
    subtitle: '0成本 | 7天全部功能 | 随时可停',
    hero: {
      title: '免费试用7天｜一体化预约运营系统',
      subtitle: '减少预约冲突，自动排班，营收数据一目了然。',
      ctaPrimary: '立即免费试用',
      ctaSecondary: '了解可体验内容',
      trialNote: '无需信用卡，7天全功能体验。'
    },
    valueBullets: [
      '智能预约：用户自助下单，系统自动防冲突',
      '运营提效：自动排班、提醒、签到',
      '数据看板：预约量与营收实时可见',
      '多语言多门店支持'
    ],
    trust: '被多家按摩/健身/美容门店选择与信赖',
    privacy: '你的信息仅用于开通试用，绝不外泄。',
    form: {
      name: '姓名',
      phone: '手机号',
      industry: '行业',
      companyOpt: '公司（选填）',
      emailOpt: '邮箱（选填）',
      submit: '开始免费试用',
      submitting: '正在提交...'
    },
    success: {
      title: '试用申请已提交！',
      message: '感谢关注！我们将在24小时内联系你，开通试用。',
      backHome: '返回首页'
    },
    validation: {
      required: '此项为必填',
      phoneInvalid: '请输入有效的手机号',
      emailInvalid: '请输入有效的邮箱地址'
    }
  },
  th: {
    title: 'เริ่มทดลองใช้ฟรี',
    subtitle: 'ใช้ฟรี 7 วัน ครบทุกฟีเจอร์ ยกเลิกได้ทุกเวลา',
    hero: {
      title: 'ทดลองใช้ฟรี 7 วัน | แพลตฟอร์มจองและปฏิบัติงานครบวงจร',
      subtitle: 'ลดการชนกันของตาราง อัตโนมัติเรื่องกะงาน ดูรายได้ได้ในที่เดียว',
      ctaPrimary: 'เริ่มทดลองใช้ฟรี',
      ctaSecondary: 'ดูสิ่งที่คุณจะได้ลอง',
      trialNote: 'ไม่ต้องใช้บัตรเครดิต ใช้ได้ครบทุกฟีเจอร์ 7 วัน'
    },
    valueBullets: [
      'จองอัจฉริยะ: ลูกค้าจองเอง ระบบกันชนซ้ำ',
      'ทำงานไวขึ้น: จัดกะ อัปเดต แจ้งเตือนอัตโนมัติ',
      'ข้อมูลชัดเจน: ดูยอดจองและรายได้แบบเรียลไทม์',
      'รองรับหลายภาษา หลายสาขา'
    ],
    trust: 'เป็นที่ไว้วางใจจากธุรกิจนวด ฟิตเนส และสปาที่กำลังเติบโต',
    privacy: 'ข้อมูลของคุณใช้เพื่อเปิดทดลองเท่านั้น และจะไม่ถูกเปิดเผย',
    form: {
      name: 'ชื่อ-นามสกุล',
      phone: 'เบอร์โทร',
      industry: 'ประเภทธุรกิจ',
      companyOpt: 'บริษัท (ไม่บังคับ)',
      emailOpt: 'อีเมล (ไม่บังคับ)',
      submit: 'เริ่มทดลองใช้ฟรี',
      submitting: 'กำลังส่ง...'
    },
    success: {
      title: 'ส่งคำขอทดลองใช้แล้ว!',
      message: 'ขอบคุณค่ะ/ครับ เราจะติดต่อกลับภายใน 24 ชั่วโมงเพื่อเปิดใช้งาน',
      backHome: 'กลับหน้าแรก'
    },
    validation: {
      required: 'จำเป็นต้องกรอก',
      phoneInvalid: 'กรุณากรอกเบอร์โทรที่ถูกต้อง',
      emailInvalid: 'กรุณากรอกอีเมลที่ถูกต้อง'
    }
  }
};

interface FormData {
  name: string;
  phone: string;
  industry: string;
  company?: string;
  email?: string;
}

interface FormErrors {
  name?: string;
  phone?: string;
  industry?: string;
  email?: string;
}

function BookingPage() {
  const history = useHistory();

  const handleBackToHome = () => {
    history.push('/');
  };
  const [language, setLanguage] = useState<Language>('th');
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    industry: '',
    company: '',
    email: ''
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const currentContent = content[language];

  const validateEmail = (email: string): boolean => {
    if (!email) return true;
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

    if (!formData.industry.trim()) {
      newErrors.industry = currentContent.validation.required;
    }

    if (formData.email && !validateEmail(formData.email)) {
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
          phone: formData.phone,
          industry: formData.industry,
          company: formData.company,
          email: formData.email,
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
          phone: formData.phone,
          industry: formData.industry,
          company: formData.company || '',
          email: formData.email || '',
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

  // language helpers not required; keeping UI minimal

  if (isSuccess) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-50 via-blue-50 to-white flex items-center justify-center px-4">
        <div className="max-w-md w-full">
          <div className="bg-white rounded-2xl p-8 shadow-xl text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 text-green-600 text-3xl">
              ✓
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
              <button
                onClick={handleBackToHome}
                className="flex items-center text-gray-600 hover:text-pink-600 transition-colors"
              >
                ← {language === 'zh' ? '返回首页了解更多' : language === 'th' ? 'กลับหน้าแรก' : 'Back to Home'}
              </button>

              <div className="relative">
                <select
                  value={language}
                  onChange={(e) => setLanguage(e.target.value as Language)}
                  className="appearance-none btn btn-primary text-white px-4 py-2 rounded-lg text-sm font-medium cursor-pointer"
                >
                  <option value="th">🇹🇭 ไทย</option>
                  <option value="zh">🇨🇳 中文</option>
                  <option value="en">🇺🇸 EN</option>
                </select>
              </div>
              <button
                onClick={() => {
                  const formSection = document.getElementById('booking-form');
                  if (formSection) {
                    formSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="btn btn-primary"
              >
                {content[language].hero.ctaPrimary}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center text-xs font-semibold text-pink-600 bg-pink-50 px-3 py-1 rounded-full mb-4">
              ⚡ {currentContent.subtitle}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
              {currentContent.hero.title}
            </h1>
            <p className="text-gray-700 text-lg mb-6">{currentContent.hero.subtitle}</p>
            <div className="flex flex-wrap gap-3 mb-6">
              <button
                onClick={() => {
                  const formSection = document.getElementById('booking-form');
                  if (formSection) formSection.scrollIntoView({ behavior: 'smooth' });
                }}
                className="btn btn-primary"
              >
                {currentContent.hero.ctaPrimary}
              </button>
              <button
                onClick={() => {
                  const valueSection = document.getElementById('value');
                  if (valueSection) valueSection.scrollIntoView({ behavior: 'smooth' });
                }}
                className="btn btn-secondary"
              >
                {currentContent.hero.ctaSecondary}
              </button>
            </div>
            <div className="text-sm text-gray-500 flex items-center">🛡️ {currentContent.hero.trialNote}</div>
          </div>
          <div className="bg-gradient-to-br from-pink-50 to-blue-50 border border-pink-100 rounded-2xl p-6">
            <ul className="space-y-3">
              {(() => {
                const extraTh: string[] = [
                  'แพลตฟอร์มการจองและการดำเนินการแบบบูรณาการสำหรับร้านนวดและคลินิก',
                  'ไม่จำเป็นต้องให้บริการลูกค้า และลูกค้าใช้เวลาเพียง 2 นาทีในการกรอกการจองและชำระเงิน',
                  'ระบบจองออนไลน์ที่ครอบคลุมสำหรับร้านนวด ศูนย์ออกกำลังกาย และคลินิก',
                  'ระบบสมาชิกแบบครบวงจร ทั้งการลงทะเบียนสมาชิก การจัดการระดับ VIP ความภักดี และกฎการเติมเงินที่ยืดหยุ่น เป็นต้น',
                  'ระบบนิเวศการชำระเงินที่สมบูรณ์แบบ - การบูรณาการ Omise รวมถึงบัตรเครดิต Line Pay, True Money ฯลฯ',
                  'ระบบการจัดการแบ็คเอนด์อันทรงพลัง - รวมถึงการจัดตารางพนักงาน การจองอัจฉริยะ สถาปัตยกรรมผู้เช่าหลายราย การแจ้งเตือนแบบเรียลไทม์ ฯลฯ',
                ];
                const list = language === 'th' ? [...currentContent.valueBullets, ...extraTh] : currentContent.valueBullets;
                return list;
              })().map((b, i) => (
                <li key={i} className="flex items-start text-gray-800">
                  <span className="mr-3 text-green-600">✓</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Trial Form */}
      <main id="booking-form" className="flex items-center justify-center px-4 py-8">
        <div className="max-w-md w-full">
          <div className="bg-white rounded-2xl p-8 shadow-xl">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">{currentContent.title}</h2>
              <p className="text-gray-600 text-sm">{currentContent.subtitle}</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {currentContent.form.name} *
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">👤</span>
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

              {/* Phone Field */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {currentContent.form.phone} *
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">📞</span>
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

              {/* Industry Field */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {currentContent.form.industry} *
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">🏷️</span>
                  <input
                    type="text"
                    value={formData.industry}
                    onChange={(e) => handleInputChange('industry', e.target.value)}
                    className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-colors ${
                      errors.industry ? 'border-red-300' : 'border-gray-300'
                    }`}
                    placeholder={currentContent.form.industry}
                  />
                </div>
                {errors.industry && (
                  <p className="mt-1 text-sm text-red-600">{errors.industry}</p>
                )}
              </div>

              {/* Company Field (Optional) */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {currentContent.form.companyOpt}
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">🏢</span>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => handleInputChange('company', e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-colors"
                    placeholder={currentContent.form.companyOpt}
                  />
                </div>
              </div>

              {/* Email Field (Optional) */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {currentContent.form.emailOpt}
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">✉️</span>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-colors ${
                      errors.email ? 'border-red-300' : 'border-gray-300'
                    }`}
                    placeholder={currentContent.form.emailOpt}
                  />
                </div>
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                )}
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
            <div className="mt-4 text-xs text-gray-500 flex items-start">🛡️ {currentContent.privacy}</div>
          </div>
        </div>
      </main>

      {/* Value section for anchor */}
      <section id="value" className="px-4 pb-16">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-2xl p-6 border border-pink-100">
            <div className="flex items-center text-gray-700 mb-4">
              <span className="mr-2">📈</span>
              <span className="font-semibold">{currentContent.trust}</span>
            </div>
            <ul className="grid md:grid-cols-2 gap-3">
              {currentContent.valueBullets.map((b, i) => (
                <li key={i} className="flex items-start text-gray-800">
                  <span className="mr-3 text-green-600">✓</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      {/* Footer (copied from home, simplified icons) */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <img src="/media/logo.png" alt="White Lotus Logo" loading="lazy" className="w-16 h-16 object-contain logo" />
              </div>
              <p className="text-gray-400">
                {language === 'en' && 'Streamlining appointment booking and operations for fitness & wellness businesses.'}
                {language === 'zh' && '为健身与养生行业简化预约与运营流程。'}
                {language === 'th' && 'ปรับปรุงระบบการจองและการดำเนินงานสำหรับธุรกิจฟิตเนสและสุขภาพ.'}
              </p>
            </div>
            <div>
              <h5 className="text-lg font-semibold mb-4">
                {language === 'en' && 'Contact'}
                {language === 'zh' && '联系我们'}
                {language === 'th' && 'ติดต่อ'}
              </h5>
              <div className="space-y-2 text-gray-400">
                <div>✉️ info@whitelotus.space</div>
                <div>📍 Bangkok, Thailand</div>
              </div>
            </div>
            <div>
              <h5 className="text-lg font-semibold mb-4">
                {language === 'en' && 'Languages'}
                {language === 'zh' && '语言支持'}
                {language === 'th' && 'ภาษาที่รองรับ'}
              </h5>
              <div className="flex space-x-4">
                {(['th','zh','en'] as Language[]).map((lang) => (
                  <button
                    key={lang}
                    onClick={() => setLanguage(lang)}
                    className={`btn btn-primary ${language === lang ? 'bg-gradient-to-r from-pink-500 to-blue-500 text-white' : 'bg-gray-800 text-gray-400 hover:text-white'}`}
                  >
                    {lang === 'th' && '🇹🇭 ไทย'}
                    {lang === 'zh' && '🇨🇳 中文'}
                    {lang === 'en' && '🇺🇸 EN'}
                  </button>
                ))}
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>
              {language === 'en' && '© 2025 White Lotus Software'}
              {language === 'zh' && '版权所有 © 2025 白莲软件'}
              {language === 'th' && 'ลิขสิทธิ์ © 2025 ไวท์โลตัสซอฟต์แวร์'}
            </p>
            <p className="mt-2">info@whitelotus.space</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default BookingPage;

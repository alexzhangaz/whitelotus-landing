/**
 * Google Apps Script for White Lotus Software Trial Requests
 * 
 * 设置步骤：
 * 1. 打开 Google Sheets (sheets.google.com)
 * 2. 创建一个新的电子表格
 * 3. 点击 扩展程序 > Apps Script
 * 4. 删除默认代码，粘贴此代码
 * 5. 保存并部署为 Web 应用
 * 6. 将部署后的 URL 替换到 BookingPage.tsx 中的 YOUR_SCRIPT_ID
 */

// 配置
const CONFIG = {
  // 管理员邮箱 - 修改为实际的管理员邮箱
  ADMIN_EMAIL: 'info@whitelotus.space',
  
  // 电子表格名称
  SHEET_NAME: 'Trial Requests',
  
  // 邮件模板
  EMAIL_SUBJECT: 'New Trial Request - White Lotus Software',
  EMAIL_TEMPLATE: `
新的试用申请

姓名: {name}
邮箱: {email}
电话: {phone}
公司: {company}
语言: {language}
申请时间: {timestamp}
来源: {source}

请及时联系客户安排试用。
  `
};

/**
 * 处理GET请求（直接访问URL时）
 */
function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({ 
      message: 'This endpoint only accepts POST requests',
      usage: 'Send POST request with JSON data containing: name, email, phone, company, language, source'
    }))
    .setMimeType(ContentService.MimeType.JSON);
}

/**
 * 处理POST请求
 */
function doPost(e) {
  try {
    // 检查是否有POST数据
    if (!e || !e.postData || !e.postData.contents) {
      console.log('No POST data received');
      return ContentService
        .createTextOutput(JSON.stringify({ error: 'No POST data received' }))
        .setMimeType(ContentService.MimeType.JSON);
    }
    
    // 解析请求数据
    let data;
    try {
      data = JSON.parse(e.postData.contents);
    } catch (parseError) {
      console.log('JSON parse error:', parseError);
      return ContentService
        .createTextOutput(JSON.stringify({ error: 'Invalid JSON data' }))
        .setMimeType(ContentService.MimeType.JSON);
    }
    
    console.log('Received data:', data);
    
    // 验证必填字段
    if (!data.name || !data.email || !data.phone) {
      console.log('Missing required fields');
      return ContentService
        .createTextOutput(JSON.stringify({ error: 'Missing required fields' }))
        .setMimeType(ContentService.MimeType.JSON);
    }
    
    // 保存到电子表格
    const sheet = getOrCreateSheet();
    const row = [
      new Date(),
      data.name,
      data.email,
      data.phone,
      data.company || '',
      data.language,
      data.source || 'booking_page'
    ];
    
    sheet.appendRow(row);
    
    // 发送邮件通知
    sendEmailNotification(data);
    
    // 返回成功响应
    return ContentService
      .createTextOutput(JSON.stringify({ success: true }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    console.error('Error processing request:', error);
    return ContentService
      .createTextOutput(JSON.stringify({ error: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

/**
 * 获取或创建电子表格
 */
function getOrCreateSheet() {
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = spreadsheet.getSheetByName(CONFIG.SHEET_NAME);
  
  if (!sheet) {
    // 创建新的工作表
    sheet = spreadsheet.insertSheet(CONFIG.SHEET_NAME);
    
    // 设置表头
    const headers = [
      '申请时间',
      '姓名',
      '邮箱',
      '电话',
      '公司',
      '语言',
      '来源'
    ];
    sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
    
    // 设置格式
    sheet.getRange(1, 1, 1, headers.length)
      .setFontWeight('bold')
      .setBackground('#f0f0f0');
    
    // 自动调整列宽
    sheet.autoResizeColumns(1, headers.length);
  }
  
  return sheet;
}

/**
 * 发送邮件通知
 */
function sendEmailNotification(data) {
  try {
    const emailBody = CONFIG.EMAIL_TEMPLATE
      .replace('{name}', data.name)
      .replace('{email}', data.email)
      .replace('{phone}', data.phone)
      .replace('{company}', data.company || '未填写')
      .replace('{language}', data.language)
      .replace('{timestamp}', new Date().toLocaleString('zh-CN'))
      .replace('{source}', data.source || 'booking_page');
    
    GmailApp.sendEmail(
      CONFIG.ADMIN_EMAIL,
      CONFIG.EMAIL_SUBJECT,
      emailBody
    );
    
    console.log('Email notification sent successfully');
  } catch (error) {
    console.error('Error sending email:', error);
  }
}

/**
 * 测试函数 - 可以在Apps Script编辑器中运行此函数进行测试
 */
function testFunction() {
  const testData = {
    name: '测试用户',
    email: 'test@example.com',
    phone: '1234567890',
    company: '测试公司',
    language: 'zh',
    source: 'test'
  };
  
  const mockEvent = {
    postData: {
      contents: JSON.stringify(testData)
    }
  };
  
  const result = doPost(mockEvent);
  console.log('Test result:', result.getContent());
}

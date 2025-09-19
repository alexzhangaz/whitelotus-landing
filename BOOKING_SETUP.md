# 试用申请页面设置说明

## 项目概述

已成功创建了 `/booking` 页面，用于收集试用用户信息。页面包含以下功能：

- ✅ 多语言支持（中文、英文、泰文）
- ✅ 表单验证（姓名、邮箱、电话必填，公司选填）
- ✅ 响应式设计
- ✅ 成功页面
- ✅ 与主页面集成

## 数据处理方案

选择了 **Google Sheets + Apps Script** 方案，具有以下优势：

- 💰 **成本低**：完全免费
- 🚀 **部署快**：无需后端开发
- 📊 **数据管理**：数据存储在Google Sheets中
- 📧 **自动通知**：自动发送邮件给管理员
- 🔒 **安全可靠**：Google平台保障

## 设置步骤

### 1. 创建Google Sheets

1. 访问 [Google Sheets](https://sheets.google.com)
2. 创建新的电子表格
3. 将电子表格命名为 "White Lotus Trial Requests"

### 2. 设置Google Apps Script

1. 在电子表格中，点击 **扩展程序** > **Apps Script**
2. 删除默认代码，复制 `google-apps-script.js` 文件中的代码
3. 修改配置部分：
   ```javascript
   const CONFIG = {
     ADMIN_EMAIL: 'info@whitelotus.space', // 修改为实际邮箱
     SHEET_NAME: 'Trial Requests',
     // ... 其他配置
   };
   ```
4. 保存项目（Ctrl+S）

### 3. 部署Web应用

1. 点击 **部署** > **新建部署**
2. 选择类型：**Web应用**
3. 设置执行身份：**我**
4. 设置访问权限：**任何人**
5. 点击 **部署**
6. 复制生成的Web应用URL

### 4. 更新代码中的URL

1. 打开 `src/pages/BookingPage.tsx`
2. 找到第178行的URL：
   ```javascript
   const response = await fetch('https://script.google.com/macros/s/AKfycbxYOUR_SCRIPT_ID/exec', {
   ```
3. 将 `YOUR_SCRIPT_ID` 替换为实际的Script ID

### 5. 测试功能

1. 运行项目：`npm run dev`
2. 访问 `http://localhost:5173/booking`
3. 填写表单并提交
4. 检查Google Sheets是否收到数据
5. 检查管理员邮箱是否收到通知

## 数据字段说明

收集的用户信息包括：

| 字段 | 类型 | 必填 | 说明 |
|------|------|------|------|
| name | string | ✅ | 用户姓名 |
| email | string | ✅ | 邮箱地址 |
| phone | string | ✅ | 电话号码 |
| company | string | ❌ | 公司名称（选填） |
| language | string | - | 用户选择的语言 |
| timestamp | string | - | 提交时间 |
| source | string | - | 来源页面 |

## 邮件通知模板

管理员将收到包含以下信息的邮件：

```
新的试用申请

姓名: [用户姓名]
邮箱: [用户邮箱]
电话: [用户电话]
公司: [公司名称]
语言: [选择语言]
申请时间: [提交时间]
来源: booking_page

请及时联系客户安排试用。
```

## 其他数据处理方案

如果Google Sheets方案不适用，还可以考虑：

### 方案2：第三方表单服务
- **Formspree**: 免费版每月50个提交
- **Netlify Forms**: 免费版每月100个提交
- **Typeform**: 免费版每月100个回复

### 方案3：邮件直接发送
- 使用 `mailto:` 链接
- 简单但用户体验较差

### 方案4：自建后端
- 需要服务器和数据库
- 成本较高但控制力强

## 维护说明

1. **定期检查**：每周检查Google Sheets中的数据
2. **邮件监控**：确保邮件通知正常工作
3. **数据备份**：定期导出Google Sheets数据
4. **用户反馈**：收集用户对表单的反馈并优化

## 故障排除

### 常见问题

1. **表单提交失败**
   - 检查Google Apps Script URL是否正确
   - 确认Web应用部署权限设置为"任何人"

2. **邮件未收到**
   - 检查Gmail垃圾邮件文件夹
   - 确认CONFIG.ADMIN_EMAIL设置正确

3. **数据未保存到Sheets**
   - 检查Apps Script代码是否有语法错误
   - 确认电子表格权限设置正确

### 调试方法

1. 在Apps Script编辑器中运行 `testFunction()`
2. 查看执行日志
3. 检查Google Sheets中的数据

## 联系支持

如有问题，请联系：
- 邮箱：info@whitelotus.space
- 项目地址：当前项目目录

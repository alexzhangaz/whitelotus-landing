# 白莲软件试用申请页面

## 功能概述

已成功为白莲软件落地页添加了试用申请功能，用户可以通过 `/booking` 页面提交试用申请。

## 页面功能

- 🌐 **多语言支持**：中文、英文、泰文
- 📝 **表单验证**：姓名、邮箱、电话必填，公司选填
- 📱 **响应式设计**：适配各种设备
- ✅ **成功反馈**：提交后显示确认页面
- 🔗 **无缝集成**：与主页面完美集成

## 快速开始

### 1. 安装依赖
```bash
npm install
```

### 2. 启动开发服务器
```bash
npm run dev
```

### 3. 访问页面
- 主页：http://localhost:5173/
- 试用申请：http://localhost:5173/booking

## 数据处理

当前使用Google Sheets + Apps Script方案处理用户数据：

1. 用户提交表单
2. 数据自动保存到Google Sheets
3. 管理员收到邮件通知
4. 数据可导出用于CRM系统

详细设置说明请参考：`BOOKING_SETUP.md`

## 项目结构

```
src/
├── pages/
│   └── BookingPage.tsx    # 试用申请页面
├── App.tsx                # 主页面
├── main.tsx               # 路由配置
└── index.css              # 样式文件

google-apps-script.js      # Google Apps Script代码
BOOKING_SETUP.md          # 详细设置说明
```

## 技术栈

- React 17 + TypeScript
- React Router DOM
- Tailwind CSS
- React Icons
- Google Apps Script

## 部署说明

1. 按照 `BOOKING_SETUP.md` 设置Google Sheets
2. 更新 `BookingPage.tsx` 中的Google Apps Script URL
3. 构建项目：`npm run build`
4. 部署到静态托管服务

## 联系支持

如有问题，请联系：info@whitelotus.space

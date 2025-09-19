# 部署说明

## SPA路由404问题解决方案

### 问题描述
当直接访问 `/booking` 路径时出现404错误，这是因为单页应用(SPA)的路由是客户端路由，服务器需要配置重定向规则。

### 解决方案

#### 1. Apache服务器
确保 `public/.htaccess` 文件存在并包含：
```apache
Options -MultiViews
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteRule ^ index.html [QSA,L]
```

#### 2. Netlify
确保 `public/_redirects` 文件存在并包含：
```
/*    /index.html   200
```

#### 3. Vercel
确保 `vercel.json` 文件存在并包含：
```json
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

#### 4. Nginx
在nginx配置中添加：
```nginx
location / {
  try_files $uri $uri/ /index.html;
}
```

### 部署步骤

1. **构建项目**
   ```bash
   npm run build
   ```

2. **上传文件**
   - 将 `dist` 目录中的所有文件上传到服务器
   - 确保包含相应的重定向配置文件

3. **测试路由**
   - 访问 `https://whitelotus.space/`
   - 访问 `https://whitelotus.space/booking`
   - 两个路径都应该正常工作

### 验证方法

1. 直接访问 `https://whitelotus.space/booking`
2. 应该显示booking页面而不是404错误
3. 页面内的导航应该正常工作

### 常见问题

1. **仍然404**：检查服务器是否正确配置了重定向规则
2. **资源加载失败**：检查 `base` 配置是否正确
3. **路由不工作**：确保使用的是 `BrowserRouter` 而不是 `HashRouter`

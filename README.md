# 🛒 Flipkart Clone - Full Stack E-commerce Platform

A complete, production-ready Flipkart clone built with the MERN stack (MongoDB, Express.js, React.js, Node.js) featuring a modern admin dashboard, payment integration, and comprehensive e-commerce functionality.

![Flipkart Clone](https://img.shields.io/badge/Flipkart-Clone-orange)
![MERN Stack](https://img.shields.io/badge/MERN-Stack-blue)
![E-commerce](https://img.shields.io/badge/E-commerce-Platform-green)

## 🚀 Live Demo

**Frontend:** [https://flipkartweb-mern.vercel.app](https://flipkartweb-mern.vercel.app)

## 📋 Table of Contents

- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Screenshots](#-screenshots)
- [Installation](#-installation)
- [Environment Variables](#-environment-variables)
- [Usage](#-usage)
- [API Documentation](#-api-documentation)
- [Deployment](#-deployment)
- [Contributing](#-contributing)
- [License](#-license)

## ✨ Features

### 👤 User Features

- **Authentication & Authorization**

  - User registration and login
  - JWT-based authentication
  - Password reset via email
  - Profile management
  - Secure session handling

- **Product Management**

  - Browse products with pagination
  - Advanced search functionality
  - Filter by category, price, rating
  - Product reviews and ratings
  - Wishlist management

- **Shopping Experience**

  - Add/remove items from cart
  - Update quantities
  - Save items for later
  - Real-time cart updates
  - Order history tracking

- **Checkout & Payment**
  - Secure checkout process
  - Multiple payment options (Paytm, Stripe)
  - Order confirmation emails
  - Shipping information management

### 🛠️ Admin Features

- **Dashboard Analytics**

  - Sales overview and statistics
  - User management
  - Order tracking
  - Revenue analytics
  - Product performance metrics

- **Product Management**

  - Add/edit/delete products
  - Bulk product operations
  - Image upload with Cloudinary
  - Inventory management
  - Category management

- **Order Management**

  - View all orders
  - Update order status
  - Process refunds
  - Order analytics
  - Customer communication

- **User Management**
  - View user profiles
  - Manage user roles
  - User analytics
  - Account verification

## 🛠️ Tech Stack

### Frontend

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Redux](https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Material UI](https://img.shields.io/badge/Material--UI-0081CB?style=for-the-badge&logo=material-ui&logoColor=white)
![Chart.js](https://img.shields.io/badge/Chart.js-FF6384?style=for-the-badge&logo=chartdotjs&logoColor=white)

### Backend

![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=JSON%20web%20tokens&logoColor=white)

### Payment & Services

![Paytm](https://img.shields.io/badge/Paytm-002970?style=for-the-badge&logo=paytm&logoColor=00BAF2)
![Stripe](https://img.shields.io/badge/Stripe-008CDD?style=for-the-badge&logo=stripe&logoColor=white)
![Cloudinary](https://img.shields.io/badge/Cloudinary-3448C5?style=for-the-badge&logo=cloudinary&logoColor=white)
![SendGrid](https://img.shields.io/badge/SendGrid-00A4BD?style=for-the-badge&logo=sendgrid&logoColor=white)

## 📸 Screenshots

### User Interface

<table>
  <tr>
    <td><img src="https://user-images.githubusercontent.com/64949957/153995383-367cbcc0-cce5-4523-a999-b8d92e44d6ab.jpg" alt="Homepage" width="300"/></td>
    <td><img src="https://user-images.githubusercontent.com/64949957/153995406-45e36cbc-8d42-4416-b23a-08ad592e4ebc.jpg" alt="Product Page" width="300"/></td>
  </tr>
  <tr>
    <td><img src="https://user-images.githubusercontent.com/64949957/153996560-bd631f30-46f0-4248-83b3-d8ce44a8f9e4.PNG" alt="Cart" width="300"/></td>
    <td><img src="https://user-images.githubusercontent.com/64949957/153996577-57b1a1d-064a-49dc-9055-e2bceb854ab2.PNG" alt="Checkout" width="300"/></td>
  </tr>
</table>

### Admin Dashboard

![Admin Dashboard](https://user-images.githubusercontent.com/64949957/153995268-0cb769b9-e0ee-48ea-83c1-09b881df4101.PNG)

## 🚀 Installation

### Prerequisites

- Node.js (v14 or higher)
- MongoDB (local or Atlas)
- npm or yarn package manager

### Step 1: Clone the Repository

```bash
git clone https://github.com/GudiyaVerma16/Flipkart.git
cd Flipkart
```

### Step 2: Install Dependencies

```bash
# Install backend dependencies
npm install

# Install frontend dependencies
cd frontend
npm install
cd ..
```

### Step 3: Environment Setup

Create a `.env` file in the root directory:

```bash
cp backend/config/config.env.example .env
```

### Step 4: Configure Environment Variables

Update the `.env` file with your credentials:

```env
# Server Configuration
PORT=4000
NODE_ENV=development

# Database
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/flipkart

# JWT Configuration
JWT_SECRET=your_jwt_secret_key_here
JWT_EXPIRE=7d
COOKIE_EXPIRE=5

# Payment Gateway (Choose one)
# Paytm Configuration
PAYTM_MID=your_paytm_merchant_id
PAYTM_MERCHANT_KEY=your_paytm_merchant_key
PAYTM_WEBSITE=WEBSTAGING
PAYTM_CHANNEL_ID=WEB
PAYTM_INDUSTRY_TYPE=Retail
PAYTM_CUST_ID=your_customer_id

# Stripe Configuration (Alternative)
STRIPE_API_KEY=your_stripe_api_key
STRIPE_SECRET_KEY=your_stripe_secret_key

# Email Service
SENDGRID_API_KEY=your_sendgrid_api_key
SENDGRID_MAIL=your_email@gmail.com
SENDGRID_RESET_TEMPLATEID=your_reset_template_id
SENDGRID_ORDER_TEMPLATEID=your_order_template_id

# Cloud Storage
CLOUDINARY_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret

# SMTP Configuration (Alternative to SendGrid)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=465
SMTP_SERVICE=gmail
SMTP_MAIL=your_email@gmail.com
SMTP_PASSWORD=your_app_password
```

### Step 5: Run the Application

#### Development Mode (Both Frontend & Backend)

```bash
npm run dev
```

#### Run Separately

```bash
# Backend only
npm run server

# Frontend only
npm run frontend
```

#### Production Mode

```bash
npm start
```

## 🌐 Usage

### Access Points

- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:4000
- **Admin Dashboard**: http://localhost:3000/admin

### Default Admin Credentials

- **Email**: admin@flipkart.com
- **Password**: admin123

## 📚 API Documentation

### Authentication Endpoints

```
POST /api/v1/register          - User registration
POST /api/v1/login             - User login
POST /api/v1/logout            - User logout
POST /api/v1/password/forgot   - Forgot password
PUT  /api/v1/password/reset    - Reset password
GET  /api/v1/me                - Get user profile
PUT  /api/v1/me/update         - Update user profile
PUT  /api/v1/password/update   - Update password
```

### Product Endpoints

```
GET    /api/v1/products        - Get all products
GET    /api/v1/product/:id     - Get single product
POST   /api/v1/admin/product/new - Create product (Admin)
PUT    /api/v1/admin/product/:id  - Update product (Admin)
DELETE /api/v1/admin/product/:id  - Delete product (Admin)
```

### Order Endpoints

```
POST   /api/v1/order/new       - Create new order
GET    /api/v1/orders/me       - Get my orders
GET    /api/v1/admin/orders    - Get all orders (Admin)
PUT    /api/v1/admin/order/:id - Update order status (Admin)
DELETE /api/v1/admin/order/:id - Delete order (Admin)
```

### Payment Endpoints

```
POST /api/v1/payment/process   - Process payment
POST /api/v1/payment/verify    - Verify payment
```

## 🚀 Deployment

### Frontend Deployment (Vercel/Netlify)

1. **Build the frontend:**

```bash
cd frontend
npm run build
```

2. **Deploy to Vercel:**

   - Connect your GitHub repository to Vercel
   - Set build command: `npm run build`
   - Set output directory: `build`
   - Add environment variables in Vercel dashboard

3. **Deploy to Netlify:**
   - Drag and drop the `frontend/build` folder
   - Or connect your GitHub repository

### Backend Deployment (Render/Heroku)

1. **Deploy to Render:**

   - Connect your GitHub repository
   - Set build command: `npm install`
   - Set start command: `npm start`
   - Add environment variables in Render dashboard

2. **Deploy to Heroku:**
   - Install Heroku CLI
   - Run: `heroku create your-app-name`
   - Set environment variables: `heroku config:set KEY=value`
   - Deploy: `git push heroku main`

### Database Setup (MongoDB Atlas)

1. Create a MongoDB Atlas account
2. Create a new cluster
3. Get your connection string
4. Add it to your environment variables as `MONGO_URI`

### Environment Variables for Production

Set these in your deployment platform:

- `MONGO_URI`
- `JWT_SECRET`
- `CLOUDINARY_*`
- `SENDGRID_*`
- `PAYTM_*` or `STRIPE_*`
- `NODE_ENV=production`

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Jigar Sable**

- LinkedIn: [Jigar Sable](https://www.linkedin.com/in/jigar-sablee)
- Instagram: [@jigarsable.dev](https://www.instagram.com/jigarsable.dev)

## 🙏 Acknowledgments

- [React.js](https://reactjs.org/) - Frontend framework
- [Node.js](https://nodejs.org/) - Backend runtime
- [Express.js](https://expressjs.com/) - Web framework
- [MongoDB](https://www.mongodb.com/) - Database
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [Material-UI](https://mui.com/) - React components
- [Paytm](https://paytm.com/) - Payment gateway
- [Cloudinary](https://cloudinary.com/) - Cloud storage
- [SendGrid](https://sendgrid.com/) - Email service

---

⭐ **Star this repository if you found it helpful!**

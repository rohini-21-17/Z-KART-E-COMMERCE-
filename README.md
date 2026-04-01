🛒 E-Commerce Microservices Backend

A Microservices-based E-Commerce Backend built using Node.js, Express, MongoDB, and Consul for service discovery.
This project demonstrates scalable architecture with independent services for Kart and Order management.

🚀 Features
Microservices Architecture
Service Discovery using Consul
RESTful APIs
MongoDB Database
CRUD Operations
Independent Services
Scalable & Maintainable Design
🏗️ Architecture
Client
   |
API Gateway (Optional)
   |
-------------------------
|        |              |
Kart     Order      Other Services
Service  Service
🧰 Tech Stack
Node.js
Express.js
MongoDB Atlas
Mongoose
Consul (Service Discovery)
Body-parser
📂 Project Structure
project-root
│
├── kart-service
│   ├── kart.js
│   ├── kartSchema.js
│
├── order-service
│   ├── order.js
│   ├── orderSchema.js
│
└── README.md
⚙️ Installation
1. Clone the Repository
git clone https://github.com/your-username/your-repo-name.git
2. Navigate to Project
cd your-repo-name
3. Install Dependencies
npm install
🧪 Run Services
Run Kart Service
node kart.js

Runs on:

http://localhost:9090
Run Order Service
node order.js

Runs on:

http://localhost:9092
📦 Kart Service APIs
Create Item
POST /
Get All Items
GET /
Get Item by ID
GET /:id
Get Items by Username
GET /kart/:username
Update Item
PUT /
Delete Item
DELETE /:id

Kart Service includes CRUD operations for cart items such as item name, price, username, and added date.

📦 Order Service APIs
Create Order
POST /
Get All Orders
GET /
Get Order by ID
GET /:id
Get Orders by Username
GET /order/:username
Update Order
PUT /
Delete Order
DELETE /:id

Order service manages order ID, username, item details, payment method, and date.

🗄️ Database

MongoDB Atlas is used for storing data.

Example Connection:

MongoDB Atlas
🔍 Service Discovery

Consul is used to register services:

kart-service → Port 9090
order-service → Port 9092

Services automatically register and deregister when started/stopped.

🎯 Future Improvements
API Gateway
Authentication (JWT)
Payment Integration
Frontend UI
Docker Support
👩‍💻 Author

Rohini M

GitHub: https://github.com/rohini-21-17
LinkedIn: https://www.linkedin.com/in/rohini-m21/
⭐ If you like this project

Give it a ⭐ on GitHub!

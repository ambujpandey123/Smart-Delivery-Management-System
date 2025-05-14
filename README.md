# 🚚 Smart Delivery Management System

A modern, intelligent delivery management dashboard built with **Next.js**, **TypeScript**, and **MongoDB**, focused on streamlining delivery partner coordination, smart order assignments, and real-time tracking.

---

## 📌 Features

### ✅ Partner Management
- Register and manage delivery partners
- Edit partner profiles, areas, and shifts
- View partner availability and current load

### ✅ Order Processing
- Track and manage order statuses
- View order details, assignments, and scheduling
- Monitor delivery performance

### ✅ Smart Assignment System
- Automatically assign orders based on partner availability, area, and load
- Track assignment success/failure with reasoning
- View metrics for assignment efficiency

---

## 📁 Pages

| Page | Description |
|------|-------------|
| `/` | Dashboard with key metrics, active orders map, and assignment summary |
| `/partners` | List of partners, filter by availability, manage areas and shifts |
| `/orders` | Order list with filters (status, area, date), status tracking |
| `/assignments` | View active assignments, success/failure reasons, and metrics |

---

## 🧩 Data Models (TypeScript)

### `DeliveryPartner`
```ts
type DeliveryPartner = {
  name: string;
  email: string;
  phone: string;
  status: 'active' | 'inactive';
  currentLoad: number;
  areas: string[];
  shift: { start: string; end: string };
  metrics: {
    rating: number;
    completedOrders: number;
    cancelledOrders: number;
  };
}
```

### `Order`
```ts
type Order = {
  orderNumber: string;
  customer: { name: string; phone: string; address: string };
  area: string;
  items: { name: string; quantity: number; price: number }[];
  status: 'pending' | 'assigned' | 'picked' | 'delivered';
  scheduledFor: string;
  assignedTo?: string;
  totalAmount: number;
  createdAt: Date;
  updatedAt: Date;
}
```

### `Assignment`
```ts
type Assignment = {
  orderId: string;
  partnerId: string;
  timestamp: Date;
  status: 'success' | 'failed';
  reason?: string;
}
```

---

## 📡 API Routes

### Partners
- `GET /api/partners`
- `POST /api/partners`
- `PUT /api/partners/[id]`
- `DELETE /api/partners/[id]`

### Orders
- `GET /api/orders`
- `POST /api/orders/assign`
- `PUT /api/orders/[id]/status`

### Assignments
- `GET /api/assignments/metrics`
- `POST /api/assignments/run`

---

## 🚀 Getting Started

### Prerequisites
- Node.js
- MongoDB (local or Atlas)

### Setup

```bash
# Clone the repo
git clone https://github.com/your-username/smart-delivery-management.git
cd smart-delivery-management

# Install dependencies
npm install

# Start the development server
npm run dev
```

### Environment Variables

Create a `.env.local` file with:

```env
MONGODB_URI=your_mongodb_connection_string
```

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/YourFeature`)
3. Commit your changes (`git commit -am 'Add feature'`)
4. Push to the branch (`git push origin feature/YourFeature`)
5. Open a Pull Request

Check out [`CONTRIBUTING.md`](CONTRIBUTING.md) for more details.

---

## 📄 License

This project is licensed under the **MIT License** – see the [`LICENSE`](LICENSE) file for details.

---

## 👀 Live Demo

_(Optional) Add your deployed URL here if available:_

[https://your-project-demo-url.com](https://your-project-demo-url.com)

---

## 💡 Evaluation Criteria (for developers and reviewers)

- ✅ TypeScript and type safety
- ✅ Component structure and modularity
- ✅ State and error handling
- ✅ Responsiveness and UX
- ✅ Efficient assignment logic

---

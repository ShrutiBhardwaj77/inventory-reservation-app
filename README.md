# Inventory Reservation System

A backend inventory reservation system built with Next.js, Prisma ORM, PostgreSQL (Neon DB), and TypeScript.

## Live Demo

Deployed Vercel URL :



---

## Tech Stack

- Next.js 15
- TypeScript
- Prisma ORM
- PostgreSQL (Neon)
- REST APIs

---

## Features

- View products
- View warehouses
- Reserve inventory
- Prevent overbooking
- Inventory stock validation
- Reservation expiry timestamp

---

## API Endpoints

### GET Products

/api/products

### GET Warehouses

/ api/warehouses

### POST Reservation

/api/reservations

Sample Request Body:

```json
{
  "productId": "product_id",
  "warehouseId": "warehouse_id",
  "quantity": 2
}
```

---

## Run Locally

### 1. Clone Repository

```bash
git clone <repo-url>
cd inventory-reservation-app
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create `.env`

```env
DATABASE_URL="your_neon_database_url"
```

### 4. Run Prisma Migration

```bash
npx prisma migrate dev
```

### 5. Generate Prisma Client

```bash
npx prisma generate
```

### 6. Seed Database

```bash
npx tsx prisma/seed.ts
```

### 7. Start Development Server

```bash
npm run dev
```

---

## Expiry Mechanism

Reservations include an `expiresAt` timestamp set to 10 minutes from creation time.

This simulates temporary inventory reservation behaviour used in ecommerce systems.

In production, expired reservations could be cleaned using:
- Cron jobs
- Background workers
- Queue systems
- Redis-based expiry mechanisms

---

## Trade-offs / Improvements

Due to time constraints:
- Authentication was not implemented
- Redis locking was not added
- Expiry cleanup worker was not implemented

With more time, improvements would include:
- Distributed locking
- Reservation auto-expiry workers
- Authentication & authorization
- Better error handling
- Unit and integration testing
- Docker deployment setup

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
# Inventory Reservation System

A backend inventory reservation system built with Next.js, Prisma ORM, PostgreSQL (Neon DB), and TypeScript.

## Live Demo

Deployed Vercel URL :

https://inventory-reservation-app-cplq.vercel.app

## API Endpoints

https://inventory-reservation-app-cplq.vercel.app/api/products

https://inventory-reservation-app-cplq.vercel.app/api/warehouses

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

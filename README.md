# Project Structure

Drive Direct 26 follows a modular architecture designed for:

- Fast MVP development
- Clear separation of concerns
- Easy onboarding for new developers
- Long-term scalability

Each layer has a specific responsibility:

```text
src/
│
├── app/
│   │
│   ├── (public)/
│   │   ├── page.tsx
│   │   ├── listings/
│   │   ├── dealers/
│   │   ├── about/
│   │   └── contact/
│   │
│   ├── admin/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── listings/
│   │   ├── users/
│   │   └── inquiries/
│   │
│   ├── dealer/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── listings/
│   │   ├── profile/
│   │   └── inquiries/
│   │
│   ├── user/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── favorites/
│   │   └── inquiries/
│   │
│   ├── api/
│   │
│   └── globals.css
│
├── components/
│   │
│   ├── admin/
│   ├── dealer/
│   ├── public/
│   ├── user/
│   └── global/
│
├── hooks/
│
├── libs/
│   │
│   ├── prisma.ts
│   ├── clerk.ts
│   ├── cloudinary.ts
│   ├── brevo.ts
│   ├── payfast.ts
│   │
│   ├── auth/
│   ├── validations/
│   ├── helpers/
│   └── constants/
│
├── crud/
│   │
│   ├── user/
│   ├── dealer/
│   ├── listing/
│   ├── inquiry/
│   ├── featured/
│   └── admin/
│
├── services/
│   │
│   ├── user/
│   ├── dealer/
│   ├── listing/
│   ├── inquiry/
│   ├── payment/
│   └── admin/
│
├── types/
│
└── middleware.ts
```

---

## Architecture Rules

### app/

Contains routing, layouts, pages, API routes, and route groups.

**Do not place business logic or Prisma queries here.**

---

### components/

Contains all UI components.

```text
components/
├── admin/
├── dealer/
├── public/
├── user/
└── global/
```

Components should focus on presentation and user interaction.

---

### hooks/

Contains reusable React hooks.

Examples:

```text
usePagination.ts
useFilters.ts
useDebounce.ts
useListings.ts
```

---

### libs/

Contains infrastructure and shared utilities.

Examples:

```text
prisma.ts
clerk.ts
cloudinary.ts
brevo.ts
payfast.ts
```

Subfolders:

```text
auth/
validations/
helpers/
constants/
```

No business logic should be stored here.

---

### crud/

Database access layer.

All Prisma queries belong here.

Example:

```text
crud/
└── listing/
    ├── listing.create.ts
    ├── listing.read.ts
    ├── listing.update.ts
    └── listing.delete.ts
```

Responsibilities:

- Create records
- Read records
- Update records
- Delete records

No business rules should exist in this layer.

---

### services/

Business logic layer.

Example:

```text
services/
└── listing/
    └── createListingService.ts
```

Responsibilities:

- Authorization
- Validation orchestration
- External service integrations
- Business workflows

Services may call:

- CRUD functions
- Cloudinary
- Brevo
- PayFast

Services should never contain UI code.

---

### types/

Contains shared TypeScript types and interfaces.

Example:

```text
Listing.ts
Dealer.ts
Inquiry.ts
```

---

### middleware.ts

Global route protection.

Responsibilities:

- Clerk authentication
- Protected routes
- Admin route restrictions

---

## Request Flow

All mutations should follow this pattern:

```text
Route
  ↓
Service
  ↓
CRUD
  ↓
Prisma
  ↓
Database
```

Example:

```text
POST /api/listings

        ↓

createListingService()

        ↓

createListing()

        ↓

prisma.vehicleListing.create()

        ↓

PostgreSQL
```

This separation ensures the project remains maintainable as Drive Direct 26 grows from MVP to a national automotive marketplace.
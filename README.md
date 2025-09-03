# Supreme Homeschool Bella

This repository contains an MVP for the **Supreme Homeschool Bella** application. It is built with Next.js (TypeScript), Tailwind CSS, and Supabase. The goal of this project is to provide a foundation for a homeschooling platform inspired by Le Rosey, Montessori and Reggio Emilia philosophies, adapted for modern homeschooling with AI support. The code here reflects the blueprint previously designed for Year 2.

## 📦 Getting Started

### Requirements

- Node.js (v18 or later)
- npm or yarn

### Installation

1. **Clone** this repository or copy the files into your own project directory.
2. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

3. Copy the `.env.example` file to `.env.local` and populate it with your Supabase credentials:

   ```bash
   cp .env.example .env.local
   ```

4. Start the development server:

   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the app.

## 🗂️ Project Structure

```
supreme-homeschool-bella/
├── components/             # Reusable React components
│   ├── Layout.tsx
│   └── Navbar.tsx
├── lib/                    # Client libraries and helpers
│   └── supabaseClient.ts
├── pages/                  # Next.js pages (routes)
│   ├── _app.tsx
│   └── index.tsx
├── styles/                 # Global styles (Tailwind CSS)
│   └── globals.css
├── supabase/               # Supabase migrations and RLS policies
│   └── rls_policies.sql
├── .env.example            # Environment variables template
├── next.config.js          # Next.js configuration
├── package.json            # npm scripts and dependencies
├── postcss.config.js       # PostCSS configuration
├── tailwind.config.js      # Tailwind CSS configuration
├── tsconfig.json           # TypeScript configuration
└── README.md               # Project documentation
```

## ⚙️ Supabase Setup

This project uses [Supabase](https://supabase.com/) for authentication and data storage. To configure it:

1. Create a new project in the Supabase dashboard.
2. Go to `Project Settings` → `API` and copy your `URL` and `anon` public key.
3. Populate the following keys in your `.env.local` file:

   ```env
   NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
   ```

4. Apply Row Level Security (RLS) policies to your tables using the SQL provided in `supabase/rls_policies.sql`. You can run the SQL via the SQL editor in the Supabase dashboard.

## 🚀 Scripts

- `npm run dev` — Start the development server.
- `npm run build` — Build the production version of the app.
- `npm run start` — Run the built app in production mode.
- `npm run lint` — Check code quality with ESLint.

## ✨ Next Steps

- Expand the data model and add tables according to the blueprint (e.g., students, lessons, reports).
- Build pages and components for each area of the curriculum (math, language arts, science, etc.).
- Implement authentication flows using Supabase Auth.
- Add more advanced UI elements using [shadcn/ui](https://ui.shadcn.com/) once you initialize it via `npx shadcn-ui@latest init`.
- Write tests to ensure application stability.

## 📄 License

This project is provided as-is for educational purposes. You may adapt it as needed for your own use.

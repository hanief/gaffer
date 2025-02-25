# Gaffer

A modern web application built with Next.js 15, React 18, and TypeScript, featuring AI-powered chat capabilities and authentication.

## Features

- 🔒 Secure authentication using NextAuth.js
- 💬 AI-powered chat interface using OpenAI
- 🎮 Interactive game UI component
- 🎨 Modern UI with Tailwind CSS
- 📱 Fully responsive design
- 🚀 Built with Next.js 15 and React 18

## Prerequisites

- Node.js (LTS version recommended)
- npm or yarn package manager

## Getting Started

1. Clone the repository:
```bash
git clone <repository-url>
cd gaffer
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
Create a `.env.local` file in the root directory and add your configuration:
```env
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-secret-key
OPENAI_API_KEY=your-openai-api-key
```

4. Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the application for production
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint for code linting

## Project Structure

- `/src/app` - Next.js app router pages and API routes
- `/src/components` - Reusable React components
- `/public` - Static assets
- `/src/app/api` - API routes for authentication and chat functionality

## Technologies

- [Next.js](https://nextjs.org/) - React framework
- [React](https://reactjs.org/) - UI library
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [NextAuth.js](https://next-auth.js.org/) - Authentication
- [OpenAI](https://openai.com/) - AI capabilities

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is private and proprietary.
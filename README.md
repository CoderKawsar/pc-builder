# PC Builder

## Overview

PC Builder Steel is a web application that allows users to build their custom PC by selecting different PC components from various categories. It is built using React.js and Next.js with authentication implemented using NextAuth.js. The styling is done using Tailwind CSS and DaisyUI, and state management is handled using Redux Toolkit.

## Features

- Homepage with a menu, hero section, featured products, categories, and footer.
- Category-specific product pages that display products of the selected category.
- Login page with GitHub authentication for user login.
- Build PC page (protected route) where logged-in users can select PC components from different categories to build their custom PC. Users are required to select a minimum of 6 category products to complete building the PC.

## Deployment

The application is deployed on Vercel and can be accessed at [https://pc-builder-steel.vercel.app/](https://pc-builder-steel.vercel.app/).

## Technologies Used

- React.js
- Next.js
- Tailwind CSS
- DaisyUI
- Redux Toolkit
- NextAuth.js

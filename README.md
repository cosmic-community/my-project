# 🏫 School Management Portal

![App Preview](https://imgix.cosmicjs.com/83d7d6c0-3c65-11f1-b186-117430a97b22-autopilot-photo-1532187863486-abf9dbad1b69-1776654212643.jpeg?w=1200&h=630&fit=crop&auto=format,compress)

A modern Next.js school management website powered by [Cosmic](https://www.cosmicjs.com).

## Features

- 👨‍🏫 Teacher profiles with photos and bios
- 🎓 Student directory with grade levels
- 📚 Course catalog connected to teachers
- 🎨 Beautiful, responsive design
- ⚡ Fast server-side rendering with Next.js 16
- 🔗 Connected content via Cosmic relationships

## Clone this Project

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Project](https://img.shields.io/badge/Clone%20this%20Project-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](https://app.cosmicjs.com/projects/new?clone_bucket=69e597581e803e708f6acd6a&clone_repository=69e598101e803e708f6acd96)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> "Create content models for: School"

### Code Generation Prompt

> Build a Next.js application for a website called "My Project". The content is managed in Cosmic CMS with the following object types: teachers, students, courses. Create a beautiful, modern, responsive design with a homepage and pages for each content type. User instructions: School

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## Technologies

- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS
- Cosmic SDK

## Getting Started

### Prerequisites
- Bun installed
- A Cosmic account with the required object types

### Installation

```bash
bun install
bun run dev
```

## Cosmic SDK Examples

```typescript
// Fetch all teachers
const { objects } = await cosmic.objects
  .find({ type: 'teachers' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1)

// Fetch a course with its teacher
const { object } = await cosmic.objects
  .findOne({ type: 'courses', slug })
  .depth(1)
```

## Cosmic CMS Integration

This app fetches data from three object types: `teachers`, `students`, and `courses`. Courses use the `teacher` object metafield to link to a teacher.

## Deployment

Deploy to Vercel or Netlify. Set these environment variables:
- `COSMIC_BUCKET_SLUG`
- `COSMIC_READ_KEY`
- `COSMIC_WRITE_KEY`

<!-- README_END -->
export interface CosmicObject {
  id: string;
  slug: string;
  title: string;
  content?: string;
  metadata: Record<string, any>;
  type: string;
  created_at: string;
  modified_at: string;
}

export interface CosmicImage {
  url: string;
  imgix_url: string;
}

export interface Teacher extends CosmicObject {
  type: 'teachers';
  metadata: {
    full_name?: string;
    email?: string;
    subject?: string;
    bio?: string;
    photo?: CosmicImage;
  };
}

export interface Student extends CosmicObject {
  type: 'students';
  metadata: {
    full_name?: string;
    email?: string;
    grade_level?: string;
    bio?: string;
    photo?: CosmicImage;
  };
}

export interface Course extends CosmicObject {
  type: 'courses';
  metadata: {
    title?: string;
    description?: string;
    teacher?: Teacher;
    cover_image?: CosmicImage;
  };
}

export function hasStatus(error: unknown): error is { status: number } {
  return typeof error === 'object' && error !== null && 'status' in error;
}

export function getMetafieldValue(field: unknown): string {
  if (field === null || field === undefined) return '';
  if (typeof field === 'string') return field;
  if (typeof field === 'number' || typeof field === 'boolean') return String(field);
  if (typeof field === 'object' && field !== null && 'value' in field) {
    return String((field as { value: unknown }).value);
  }
  if (typeof field === 'object' && field !== null && 'key' in field) {
    return String((field as { key: unknown }).key);
  }
  return '';
}
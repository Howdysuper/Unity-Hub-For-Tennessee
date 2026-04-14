export interface Resource {
  id: string;
  title: string;
  category: 'non-profit' | 'support' | 'event' | 'program';
  description: string;
  contact: string;
  address?: string;
  website?: string;
  highlighted?: boolean;
}

export type ResourceCategory = Resource['category'] | 'all';

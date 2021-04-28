import { Reference } from './reference';
import { SanityType } from './sanity-type';

export interface FeedbackReference extends SanityType {
  feedback: Reference[];
}

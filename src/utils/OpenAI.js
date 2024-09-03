import OpenAI from 'openai';
import { OPEN_AI_key } from './constants';

export const openai = new OpenAI({
  apiKey: OPEN_AI_key,
  dangerouslyAllowBrowser:true
  // This is the default and can be omitted
});


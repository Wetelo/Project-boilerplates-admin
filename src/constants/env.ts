import zod from 'zod';

import { TEnv } from '@/types';

export const envValidationSchema = zod.object({
  PUBLIC_API_URL: zod.string().url(),
});

export const validatedEnv: TEnv = envValidationSchema.parse(import.meta.env);

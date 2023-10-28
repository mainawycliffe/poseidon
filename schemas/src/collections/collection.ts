import * as zod from 'zod';
import { COLLECTION_FIELD_SCHEMA } from './fields';

export const collectionSchema = zod.object({
  name: zod.string(),
  slug: zod.string(),
  fields: zod.array(zod.lazy(() => COLLECTION_FIELD_SCHEMA)),
});

export type COLLECTION_SCHEMA_TYPE = zod.infer<typeof collectionSchema>;

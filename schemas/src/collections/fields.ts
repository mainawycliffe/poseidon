import * as zod from 'zod';

export const collectionFieldTypesText = zod.object({
  type: zod.literal('TEXT'),
  label: zod.string(),
  slug: zod.string(),
  required: zod.boolean().optional().default(false),
  minLength: zod.number().optional().default(0),
  maxLength: zod.number().optional(),
  defaultValue: zod.string().optional(),
});

export const collectionFieldTypesNumber = zod.object({
  type: zod.literal('NUMBER'),
  label: zod.string(),
  slug: zod.string(),
  required: zod.boolean().optional().default(false),
  min: zod.number().optional(),
  max: zod.number().optional(),
  defaultValue: zod.number().optional(),
});

export const collectionFieldTypesBoolean = zod.object({
  type: zod.literal('BOOLEAN'),
  label: zod.string(),
  slug: zod.string(),
  required: zod.boolean().optional().default(false),
  defaultValue: zod.boolean().optional(),
});

export const collectionFieldTypesDate = zod.object({
  type: zod.literal('DATE'),
  label: zod.string(),
  slug: zod.string(),
  required: zod.boolean().optional().default(false),
  defaultValue: zod.string().optional(),
});

export const collectionFieldTypesMedia = zod.object({
  type: zod.literal('MEDIA'),
  label: zod.string(),
  slug: zod.string(),
  required: zod.boolean().optional().default(false),
});

// List/Array of Text
export const collectionFieldTypesTextList = zod.object({
  type: zod.literal('TEXT_LIST'),
  label: zod.string(),
  slug: zod.string(),
  required: zod.boolean().optional().default(false),
  minLength: zod.number().optional().default(0),
  maxLength: zod.number().optional(),
  defaultValue: zod.array(zod.string()).optional(),
});

// List of Fields
export const collectionFieldTypesCollectionList = zod.object({
  type: zod.literal('COLLECTION_LIST'),
  label: zod.string(),
  slug: zod.string(),
  required: zod.boolean().optional().default(false),
  collection: zod.string(),
});

// List of Media
export const collectionFieldTypesMediaList = zod.object({
  type: zod.literal('MEDIA_LIST'),
  label: zod.string(),
  slug: zod.string(),
  required: zod.boolean().optional().default(false),
});

// Rich Text Field
export const collectionFieldTypesRichText = zod.object({
  type: zod.literal('RICH_TEXT'),
  label: zod.string(),
  slug: zod.string(),
  required: zod.boolean().optional().default(false),
});

// Discriminated Union
export const COLLECTION_FIELD_SCHEMA = zod.union([
  collectionFieldTypesText,
  collectionFieldTypesNumber,
  collectionFieldTypesBoolean,
  collectionFieldTypesDate,
  collectionFieldTypesMedia,
  collectionFieldTypesTextList,
  collectionFieldTypesCollectionList,
  collectionFieldTypesMediaList,
]);

// export all types
export type COLLECTION_FIELD_SCHEMA_TYPES = zod.infer<
  typeof COLLECTION_FIELD_SCHEMA
>;

export type COLLECTION_FIELD_TYPES_TEXT = zod.infer<
  typeof collectionFieldTypesText
>;
export type COLLECTION_FIELD_TYPES_NUMBER = zod.infer<
  typeof collectionFieldTypesNumber
>;
export type COLLECTION_FIELD_TYPES_BOOLEAN = zod.infer<
  typeof collectionFieldTypesBoolean
>;
export type COLLECTION_FIELD_TYPES_DATE = zod.infer<
  typeof collectionFieldTypesDate
>;
export type COLLECTION_FIELD_TYPES_MEDIA = zod.infer<
  typeof collectionFieldTypesMedia
>;
export type COLLECTION_FIELD_TYPES_TEXT_LIST = zod.infer<
  typeof collectionFieldTypesTextList
>;
export type COLLECTION_FIELD_TYPES_COLLECTION_LIST = zod.infer<
  typeof collectionFieldTypesCollectionList
>;
export type COLLECTION_FIELD_TYPES_MEDIA_LIST = zod.infer<
  typeof collectionFieldTypesMediaList
>;

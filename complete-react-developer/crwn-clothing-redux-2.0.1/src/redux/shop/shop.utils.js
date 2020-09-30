/**
 * const testObj = {a:1, b:2, c: 3}
 * Object.keys(testObj) // ["a", "b", "c"];
 * Object.keys(testObj).map(key => testObj[key]) // [1, 2, 3] retrun object value array
 *
 */

export const selectCollectionsForPreview = (collections) =>
  Object.keys(collections).map((key) => collections[key]);

export const selectCollection = (collections, collectionUrlParam) =>
  collections[collectionUrlParam];

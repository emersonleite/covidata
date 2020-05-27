export default function sumValuesObjectIntoArray(arrayOfObjects, keyOfObject) {
  return arrayOfObjects.reduce((acc, objectIntoArray) => {
    //must be numeric value
    return acc + objectIntoArray[keyOfObject];
  }, 0);
}

export function operationOverSumValuesObjectIntoArray(
  arrayWithObjects,
  keyOfObject
) {
  return arrayWithObjects.reduce((acc, objectIntoArray) => {
    //must be numeric value
    return acc + objectIntoArray[keyOfObject];
  }, 0);
}

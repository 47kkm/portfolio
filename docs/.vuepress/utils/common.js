/**
 * 객체로 이루어진 배열에서 객체 내 키값에 따라 그룹핑
 * @param {Array} list 
 * @param {String} key 
 * @returns
 */
export const groupByObjectKey = (list, key) => {
  return list.reduce((acc, item) => {
    const baseKey = item[key];

    if (!acc[baseKey]) {
      acc[baseKey] = [];
    }

    acc[baseKey].push(item);
    return acc;
  }, {});
}

export {
  groupByObjectKey,
}
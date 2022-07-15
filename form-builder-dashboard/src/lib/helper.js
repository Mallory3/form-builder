export function map(data, property) {
  if(!data || !property) return null;

  const value = data?.map((item) => item.property)

  return value;
}

export function getPageCount(data) {
  if(!data) return null;

  const pageCount = data?.map((pages) => pages)

  return pageCount.length;
}

export function getFieldsetHeader(apiData) {
  if(!apiData) return null;

  const fieldsetHeader = apiData?.map((pages) => pages.heading)

  return fieldsetHeader;
}

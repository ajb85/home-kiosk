export function objectToSearchParams(obj: Record<string, any>): string {
  let qs = "?";

  for (const key in obj) {
    if (qs.length > 1) {
      qs += "&";
    }
    qs += `${key}=${obj[key].toString?.()}`;
  }

  return qs;
}

export function searchParamsToObject(
  searchParams: string
): Record<string, string> {
  return searchParams.split("&").reduce((acc, str) => {
    const [key, value] = str.split("=");
    acc[key] = value;
    return acc;
  }, {} as Record<string, string>);
}

export function appendSearchParams(
  searchParams: string,
  newData: Record<string, any>
) {
  const obj = searchParamsToObject(searchParams);
  return objectToSearchParams({ ...obj, ...newData });
}

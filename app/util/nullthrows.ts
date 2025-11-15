export function nullThrows<T>(value: T | null | undefined) {
  if (value === null || value === undefined) {
    throw new Error("Expected nonnull, received null");
  }

  return value;
}

export function emptyStringThrows(
  value: string | FormDataEntryValue | null | undefined
) {
  nullThrows(value);
  if (!value) {
    throw new Error("Expected string with value, received ''");
  }
  return value.toString();
}

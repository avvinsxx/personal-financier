export const validate = (
  fileList: File[],
  maxFiles?: number,
  maxSizeMB?: number,
): string | null => {
  if (maxFiles && fileList.length > maxFiles) {
    return `Максимальное количество файлов: ${maxFiles}`;
  }

  if (maxSizeMB) {
    const maxSizeBytes = maxSizeMB * 1024 * 1024;
    for (const file of fileList) {
      if (file.size > maxSizeBytes) {
        return `Файл "${file.name}" превышает максимальный размер ${maxSizeMB}MB`;
      }
    }
  }

  return null;
};

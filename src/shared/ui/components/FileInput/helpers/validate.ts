export const validate = (
  addedFilesCount: number,
  newFiles: File[],
  maxFiles?: number,
  maxSizeMB?: number,
): string | null => {
  if (maxFiles && (addedFilesCount + newFiles.length) > maxFiles) {
    return `Максимальное количество файлов: ${maxFiles}`;
  }

  if (maxSizeMB) {
    const maxSizeBytes = maxSizeMB * 1024 * 1024;
    for (const file of newFiles) {
      if (file.size > maxSizeBytes) {
        return `Файл "${file.name}" превышает максимальный размер ${maxSizeMB}MB`;
      }
    }
  }

  return null;
};

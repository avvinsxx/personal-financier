import { FilePreview } from '../types';

export const createPreviews = async (
  fileList: File[],
): Promise<FilePreview[]> => {
  const previewPromises = fileList.map(async (file): Promise<FilePreview> => {
    let name = file.name;
    let extension: string | undefined;
    const lastDotIndex = file.name.lastIndexOf('.');

    if (lastDotIndex > 0) {
      name = file.name.slice(0, lastDotIndex);
      extension = file.name.slice(lastDotIndex + 1);
    }

    const preview: FilePreview = {
      name,
      extension,
      size: file.size,
      type: file.type,
      lastModified: file.lastModified,
    };

    if (file.type.startsWith('image/')) {
      const dataUrl = await new Promise<string>((resolve) => {
        const reader = new FileReader();
        reader.onloadend = () => resolve(reader.result as string);
        reader.readAsDataURL(file);
      });
      preview.url = dataUrl;
    }

    return preview;
  });

  return Promise.all(previewPromises);
};

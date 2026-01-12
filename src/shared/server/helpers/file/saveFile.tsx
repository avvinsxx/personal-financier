import fs from 'node:fs/promises';

export const saveFile = async (folder: string, file: File) => {
  const arrayBuffer = await file.arrayBuffer();
  const buffer = new Uint8Array(arrayBuffer);

  const publicDir = './public';
  const uploadDir = `/uploads/${folder}`;
  const filePath = `${uploadDir}/${generateName(file.name)}`;

  await fs.mkdir(`${publicDir}${uploadDir}`, { recursive: true });
  await fs.writeFile(`${publicDir}${filePath}`, buffer);

  return filePath;
};

const generateName = (originalName: string) => {
  const ext = originalName.split('.').pop();
  const timestamp = Date.now();
  const randomString = Math.random().toString(36).substring(2, 9);

  return `${randomString}-${timestamp}.${ext}`;
};

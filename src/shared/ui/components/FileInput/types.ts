export type FilePreview = {
  name: string;
  extension?: string;
  size: number;
  type: string;
  url?: string;
  lastModified: number;
};

export type Props = {
  label?: string;
  accept?: string;
  multiple?: boolean;
  maxFiles?: number;
  maxSizeMB?: number;
  onChange?: (files: File[]) => void;
  className?: string;
  error?: string;
};

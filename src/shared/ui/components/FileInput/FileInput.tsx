'use client';
import { ChangeEvent, useRef, useState } from 'react';
import clsx from 'clsx';
import { MdClear } from 'react-icons/md';
import { FiPlus } from 'react-icons/fi';

import { Button } from '../Button';
import { Typography } from '../Typography';

import { FilePreview, Props } from './types';
import { createPreviews, validate } from './helpers';
import styles from './styles.module.scss';

export const FileInput = ({
  label,
  accept,
  multiple,
  maxFiles,
  maxSizeMB = 10,
  onChange,
  className,
  error: externalError,
}: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [files, setFiles] = useState<File[]>([]);
  const [previews, setPreviews] = useState<FilePreview[]>([]);
  const [error, setError] = useState<string | null>(null);

  const errorMessageToShow = error || externalError;

  const _onAddClick = () => {
    inputRef.current?.click();
  };

  const _onClearClick = () => {
    setFiles([]);
    setPreviews([]);
    setError(null);
    onChange?.([]);
  };

  const _onInputChange = async (event: ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = event.target.files;

    if (!selectedFiles || selectedFiles.length === 0) {
      return;
    }

    const selectedFilesArray = Array.from(selectedFiles);

    const validationError = validate(
      files.length,
      selectedFilesArray,
      maxFiles,
      maxSizeMB,
    );
    if (validationError) {
      setError(validationError);
      event.target.value = '';
      return;
    }

    setError(null);

    setFiles((prevFiles) => {
      const updatedFiles = multiple
        ? [...prevFiles, ...selectedFilesArray]
        : selectedFilesArray;
      return updatedFiles;
    });

    const newPreviews = await createPreviews(selectedFilesArray);
    setPreviews((prevPreviews) => {
      const updatedPreviews = multiple
        ? [...prevPreviews, ...newPreviews]
        : newPreviews;
      return updatedPreviews;
    });

    onChange?.(
      multiple ? [...files, ...selectedFilesArray] : selectedFilesArray,
    );

    event.target.value = '';
  };

  return (
    <div className={clsx(styles.fileInput, className)}>
      <input
        accept={accept}
        multiple={multiple}
        className={styles.fileInput__input}
        type="file"
        ref={inputRef}
        onChange={_onInputChange}
      />
      <div
        className={clsx(
          styles.fileInput__container,
          !label && styles.fileInput__container_bordered,
        )}
      >
        <div className={styles.fileInput__files}>
          {previews.map((p, i) => (
            <div
              className={clsx(
                styles.fileInput__file,
                !multiple && styles.fileInput__file_fullWidth,
              )}
              key={`${p.name}-${i}`}
            >
              <Typography
                truncate
                variant="text1"
                className={styles.fileInput__fileName}
              >
                {p.name}
              </Typography>
              {p.extension && (
                <Typography truncate variant="text1">
                  .{p.extension}
                </Typography>
              )}
            </div>
          ))}
          {(multiple || files.length < 1) && (
            <Button
              color="secondary"
              size="sm"
              variant="outlined"
              type="button"
              onClick={_onAddClick}
            >
              <FiPlus size={24} />
            </Button>
          )}
        </div>
        {files.length > 0 && (
          <div className={styles.fileInput__clearContainer}>
            <Button
              color="secondary"
              size="sm"
              variant="outlined"
              type="button"
              onClick={_onClearClick}
            >
              <MdClear size={24} />
            </Button>
          </div>
        )}
        {label && (
          <fieldset
            className={clsx(
              styles.fileInput__fieldset,
              errorMessageToShow && styles.fileInput__fieldset_error,
            )}
          >
            <legend
              className={clsx(
                styles.fileInput__legend,
                errorMessageToShow && styles.fileInput__legend_error,
              )}
            >
              {label}
            </legend>
          </fieldset>
        )}
      </div>

      {errorMessageToShow && (
        <Typography variant="error">{errorMessageToShow}</Typography>
      )}
    </div>
  );
};

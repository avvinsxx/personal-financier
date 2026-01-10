import { VALIDATION_MESSAGES } from './messages';

export const validateUrl = (value: string) => {
  try {
    const url = new URL(value);
    if (url.protocol !== 'http:' && url.protocol !== 'https:') {
      return VALIDATION_MESSAGES.url;
    }
    return true;
  } catch (_) {
    return VALIDATION_MESSAGES.url;
  }
};

export async function Sanitizer(data) {
  /** Declare variable. */
  const filtered = {};

  /** Define your sanitization regex patterns */
  const sanitizePattern = /[^A-Za-z0-9\s.'?!,@$#\-_]/g;
  const sanitizeEmailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  /** Sanitize each field in the object  */
  if (data) {
    for (const key in data) {
      if (key === 'email') {
        /** Check if email is in proper format.  */
        const format = sanitizeEmailPattern.test(data[key]);
        if (format) {
          /** Get the clean data.  */
          filtered[key] = data[key].replace(sanitizePattern, '');
        } else {
          return { error: 'Email is not valid format.' };
        }
      } else {
        /** Get the clean data.  */
        filtered[key] = data[key].replace(sanitizePattern, '');
      }
    }
  } else {
    /** Return empty array if user did not put any. */
    return filtered;
  }

  /** Return filtered array.  */
  return filtered;
}

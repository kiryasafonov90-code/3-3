const {
  isValidEmail,
  normalizeEmail,
  getAuthMessage,
} = require('./validation');

describe('isValidEmail', () => {
  test('accepts a valid email', () => {
    expect(isValidEmail('student@example.com')).toBe(true);
  });

  test('rejects an invalid email', () => {
    expect(isValidEmail('not-an-email')).toBe(false);
  });

  test('rejects non-string values', () => {
    expect(isValidEmail(null)).toBe(false);
  });

  test('trims surrounding whitespace', () => {
    expect(isValidEmail('  student@example.com  ')).toBe(true);
  });
});

describe('normalizeEmail', () => {
  test('trims and converts email to lowercase', () => {
    expect(normalizeEmail('  Student@Example.COM ')).toBe('student@example.com');
  });

  test('returns an empty string for non-string values', () => {
    expect(normalizeEmail(undefined)).toBe('');
  });
});

describe('getAuthMessage', () => {
  test('returns success message for authenticated user', () => {
    expect(getAuthMessage(true)).toBe('Авторизация успешна');
  });

  test('returns error message for unauthenticated user', () => {
    expect(getAuthMessage(false)).toBe('Неверный логин или пароль');
  });
});
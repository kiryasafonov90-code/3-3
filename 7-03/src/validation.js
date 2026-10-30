function isValidEmail(email) {
  if (typeof email !== 'string') {
    return false;
  }

  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
}

function normalizeEmail(email) {
  if (typeof email !== 'string') {
    return '';
  }

  return email.trim().toLowerCase();
}

function getAuthMessage(isAuthenticated) {
  return isAuthenticated ? 'Авторизация успешна' : 'Неверный логин или пароль';
}

module.exports = {
  isValidEmail,
  normalizeEmail,
  getAuthMessage,
};
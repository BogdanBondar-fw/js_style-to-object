'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  if (typeof sourceString !== 'string') {
    return {};
  }

  return sourceString
    .split(';')
    .map((declaration) => declaration.trim())
    .filter((declaration) => declaration.includes(':'))
    .reduce((styleObject, declaration) => {
      const [key, value] = declaration.split(':').map((part) => part.trim());

      styleObject[key] = value;

      return styleObject;
    }, {});
}

module.exports = convertToObject;

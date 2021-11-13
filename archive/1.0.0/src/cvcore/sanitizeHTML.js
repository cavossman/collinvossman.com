import sanitize from 'sanitize-html';

const options = {
  allowedTags: [ 'h3', 'h4', 'h5', 'h6', 'blockquote', 'p', 'a', 'ul', 'ol',
    'nl', 'li', 'b', 'i', 'strong', 'em', 'strike', 'code', 'hr', 'br', 'div',
    'table', 'thead', 'caption', 'tbody', 'tr', 'th', 'td', 'pre', 'iframe', 'figure', 'img' ],
  allowedAttributes: {
    h1: [ 'class' ],
    h2: [ 'class' ],
    h3: [ 'class' ],
    p: [ 'class' ],
    a: [ 'class', 'href', 'name', 'target' ],
    // We don't currently allow img itself by default, but this
    // would make sense if we did. You could add srcset here,
    // and if you do the URL is checked for safety
    img: [ 'src', 'srcset' ]
  },
  // Lots of these won't come up by default because we don't allow them
  selfClosing: [ 'img', 'br', 'hr', 'area', 'base', 'basefont', 'input', 'link', 'meta' ],
  // URL schemes we permit
  allowedSchemes: [ 'http', 'https', 'ftp', 'mailto' ],
  allowedSchemesByTag: {},
  allowedSchemesAppliedToAttributes: [ 'href', 'src', 'cite' ],
  allowProtocolRelative: true
};

const previewOptions = {
  allowedTags: [ 'p' ],
}

const sanitizeHTML = (html) => {
  return sanitize(html, options);
}

const previewSanitizeHTML = (html) => {
  return sanitize(html, previewOptions);
}

export {
  sanitizeHTML,
  previewSanitizeHTML
};

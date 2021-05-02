import * as URL from 'url';

const parseQueryParams = (req, _, next) => {
  req.parsedQuery = URL.parse(req._parsedUrl);
  next();
};

export default parseQueryParams;

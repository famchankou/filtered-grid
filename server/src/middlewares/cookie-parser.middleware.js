const parseCookie = (req, _, next) => {
  let cookies = req.headers.cookie;
  let parsedCookies = {};

  if (cookies && cookies.length) {
    cookies.split(';').forEach(cookie => {
      let parts = cookie.split('=');
      parsedCookies[parts.shift().trim()] = decodeURI(parts.join('='));
    });
  }

  req.parsedCookies = parsedCookies;
  next();
};

export default parseCookie;

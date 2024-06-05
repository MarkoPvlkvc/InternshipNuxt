export default function (req) {
  return [{ Sitemap: `https://${req.headers.host}/sitemap.xml` }];
}

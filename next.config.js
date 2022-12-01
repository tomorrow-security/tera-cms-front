module.exports = {
  compress: false,
  i18n: {
    locales: ['fr'],
    defaultLocale: 'fr',
  },
  async redirects() {
    return [
      {
        source: '/enrolment',
        destination: '/',
        permanent: true,
      },
      {
        source: '/enrolment/welcome',
        destination: '/welcome',
        permanent: true,
      },
      {
        source: '/enrolment/:uuid*',
        destination: '/:uuid*',
        permanent: true,
      },
    ]
  },
  poweredByHeader: false,
}

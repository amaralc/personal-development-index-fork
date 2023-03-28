module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'body-leading-blank': [1, 'always'],
    'body-max-line-length': [2, 'always', 100],
    'footer-leading-blank': [1, 'always'],
    'footer-max-line-length': [2, 'always', 100],
    'header-max-length': [2, 'always', 100],
    'scope-case': [2, 'always', ['upper-case', 'lower-case']], // allow upper-case and lower-case in scope
    'subject-case': [2, 'never', ['sentence-case', 'start-case', 'pascal-case', 'upper-case']],
    'subject-empty': [2, 'never'],
    'subject-full-stop': [2, 'never', '.'],
    'type-case': [2, 'always', 'lower-case'],
    'type-empty': [2, 'never'],
    'type-enum': [
      2,
      'always',
      [
        'build',
        'ci',
        'docs',
        'feat',
        'fix',
        'perf',
        'refactor',
        'revert',
        'style',
        'test',
        'release',
        'chore',
        'config',
      ],
    ],
  },
  /**
   * Ignore commit lint in bitbucket CI
   *
   * Push back to repository: https://support.atlassian.com/bitbucket-cloud/docs/push-back-to-your-repository/
   * Ignoring lint: https://stackoverflow.com/questions/60194822/how-do-you-configure-commitlint-to-ignore-certain-commit-messages-such-as-any-th#60195181
   */
  ignores: [(message) => message.startsWith('[skip ci]')],
};
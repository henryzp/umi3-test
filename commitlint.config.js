module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'build',
        'chore',
        'ci',
        'docs',
        'feat',
        'fix',
        'improvement',
        'perf',
        'refactor',
        'revert',
        'style',
        'test',
        'WIP',
      ],
    ],
    'type-case': [
      2,
      'always',
      [
        'lower-case', // default
        'upper-case', // UPPERCASE
      ],
    ],
    'header-max-length': [2, 'always', 150],
  },
};

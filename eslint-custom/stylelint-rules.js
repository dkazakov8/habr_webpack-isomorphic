module.exports = {
  rules: {
    'at-rule-empty-line-before': [
      'always',
      {
        except: ['blockless-after-same-name-blockless', 'first-nested'],
        ignore: ['after-comment'],
      },
    ],
    'declaration-empty-line-before': [
      'always',
      {
        except: ['after-declaration', 'first-nested'],
        ignore: ['after-comment', 'inside-single-line-block'],
      },
    ],

    'max-empty-lines': 1,
    'rule-empty-line-before': [
      'always-multi-line',
      { except: ['first-nested'], ignore: ['after-comment'] },
    ],
    'scss/dollar-variable-empty-line-before': [
      'always',
      { except: ['after-dollar-variable', 'first-nested'], ignore: ['after-comment'] },
    ],
  },
};

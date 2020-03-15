module.exports = {
  name: 'users-admin',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/users-admin',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};

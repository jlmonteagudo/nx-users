module.exports = {
  name: 'users-admin',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/users-admin',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};

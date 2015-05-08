'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var exec = require('child_process').exec;
var auto_updater = 'TODO :D'; //require('auto-updater')

var Update = (function () {
  function Update(gh) {
    _classCallCheck(this, Update);

    this.repo = gh.repo;
  }

  _createClass(Update, [{
    key: '_getTags',
    value: function _getTags(cb) {
      // Clone repo
      exec('git clone ' + this.repo, function (err, stdout, stderr) {
        if (err) throw new Error('Failed to clone repo.');

        // Get latest tags
        exec('git tag', { cwd: 'drupal-shoot' }, function (err, stdout, stderr) {
          var tags = stdout.split('\n');
          tags.pop();
          cb(tags);
        });
      });
    }
  }, {
    key: '_getCurrentVersion',
    value: function _getCurrentVersion() {
      return require('./package.json').version;
    }
  }, {
    key: 'check',

    /**
     * Check for updates.
     */
    value: function check() {
      // 1. Get latest released version from Github.
      _getTags(function (tags) {
        // Get the latest version
        var current = _getCurrentVersion;

        // Get latest tag
        // @TODO: Would be nice to sort the tags here.
        var latest = tags.pop();
      });
    }
  }, {
    key: 'install',

    /**
     * Relaunch and install new update.
     */
    value: function install() {}
  }]);

  return Update;
})();

exports.Update = Update;
// 2. Compare with current version.
// 3. Get .zip URL from Github release.
// 4. Create local json file with .zip URL.
// 5. Set local url with file:// protocol in auto_updater.
// 6. Check for updates with auto_updater.

// Run exit and instsall with auto_updater
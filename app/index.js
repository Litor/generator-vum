'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.generators.Base.extend({
  initializing: function() {
    this.pkg = require('../package.json');
  },

  prompting: {
    askFor: function() {
      var done = this.async();

      this.log(yosay('Create your own ' + chalk.red('ubase page') + ' generator with superpowers!'));

      var moduleNamePrompts = [{
        name: 'moduleName',
        message: "What's the name of you module / page?",
        default: 'page name'
      }];

      var mainPagePrompts = [{
        name: 'mainPage',
        message: "first page of app?",
        type: 'confirm',
        defaults: false
      }];

      var moduleNamePromptsApp = [{
        name: 'moduleName',
        message: "What's the name of you app?",
        default: 'app name'
      }];

      var paperDialogPrompts = [{
        name: 'isPaperDialog',
        type: 'confirm',
        defaults: false,
        message: "does page show in paperdialog?"
      }];

      var prompts = [{
        name: 'type',
        type: 'list',
        message: "What's the type do you want?",
        default: 'simple',
        choices: [{
          name: 'ubase',
          value: 'ubase'
        }, {
          name: 'simple',
          value: 'simple'
        }, {
          name: 'searchtable',
          value: 'searchtable'
        }, {
          name: 'searchgrid',
          value: 'searchgrid'
        }, {
          name: 'searchcard',
          value: 'searchcard'
        }, {
          name: 'emapform',
          value: 'emapform'
        }, {
          name: 'tab',
          value: 'tab'
        }
        /*, {
          name: 'wizard',
          value: 'wizard'
        }*/
        ]
      }];

      this.prompt(prompts, function(props) {
        this.type = props.type;

        if (this.type === 'ubase') {
          this.prompt(moduleNamePromptsApp, function(props) {
            this.moduleName = props.moduleName;
            done();
          }.bind(this));

        } else {
          this.prompt(mainPagePrompts, function(props) {
            this.mainPage = props.mainPage;
            this.prompt(moduleNamePrompts, function(props) {
              this.moduleName = props.moduleName;
              done();
            }.bind(this));
          }.bind(this));
        }
      }.bind(this));
    }
  },

  writing: {
    app: function() {
      switch (this.type) {
        case 'ubase':
          this.mkdir('src');
          this.mkdir('src/components');
          this.mkdir('src/pages');
          this.mkdir('src/statics/meta-info');
          this.copy(
            this.templatePath(this.type + '/.babelrc'),
            this.destinationPath('.babelrc')
          );
          this.copy(
            this.templatePath(this.type + '/.editorconfig'),
            this.destinationPath('.editorconfig')
          );
          this.copy(
            this.templatePath(this.type + '/.eslintrc'),
            this.destinationPath('.eslintrc')
          );
          this.copy(
            this.templatePath(this.type + '/gitignore'),
            this.destinationPath('.gitignore')
          );
          this.copy(
            this.templatePath(this.type + '/gulpfile.babel.js'),
            this.destinationPath('gulpfile.babel.js')
          );

          this.template(this.type + '/package.json', 'package.json');
          this.copy(
            this.templatePath(this.type + '/README.md'),
            this.destinationPath('README.md')
          );
          this.copy(
            this.templatePath(this.type + '/update.bat'),
            this.destinationPath('update.bat')
          );
          break;
        case 'simple':
          var basePath = this.moduleName + '/';
          if (this.mainPage) {
            this.template(this.type + '/routes.js', this.moduleName + '/routes.js');
            this.template(this.type + '/config.json', this.moduleName + '/config.json');
            this.template(this.type + '/index.html', this.moduleName + '/index.html');
            this.template(this.type + '/umodule1.service.js', this.moduleName + '/service.js');
            var basePath = this.moduleName + '/' + this.moduleName + '/';
          }
          this.template(this.type + '/umodule1.vue', basePath + this.moduleName + '.vue');

          this.template(this.type + '/umodule1.i18n.js', basePath + this.moduleName + '.i18n.js');
          this.template(this.type + '/umodule1.vuex.js', basePath + this.moduleName + '.vuex.js');
          break;

        case 'searchtable':
          var basePath = this.moduleName + '/';
          if (this.mainPage) {
            this.template(this.type + '/routes.js', this.moduleName + '/routes.js');
            this.template(this.type + '/config.json', this.moduleName + '/config.json');
            this.template(this.type + '/index.html', this.moduleName + '/index.html');
            this.template(this.type + '/umodule1.service.js', this.moduleName + '/service.js');
            var basePath = this.moduleName + '/' + this.moduleName + '/';
          }
          this.template(this.type + '/umodule1.vue', basePath + this.moduleName + '.vue');
          this.template(this.type + '/umodule1.i18n.js', basePath + this.moduleName + '.i18n.js');
          this.template(this.type + '/umodule1.vuex.js', basePath + this.moduleName + '.vuex.js');
          break;

        case 'searchgrid':
          var basePath = this.moduleName + '/';
          if (this.mainPage) {
            this.template(this.type + '/routes.js', this.moduleName + '/routes.js');
            this.template(this.type + '/config.json', this.moduleName + '/config.json');
            this.template(this.type + '/index.html', this.moduleName + '/index.html');
            this.template(this.type + '/umodule1.service.js', this.moduleName + '/service.js');
            var basePath = this.moduleName + '/' + this.moduleName + '/';
          }
          this.template(this.type + '/cardTpl.html', basePath + '/cardTpl.html');
          this.template(this.type + '/umodule1.vue', basePath + this.moduleName + '.vue');
          this.template(this.type + '/umodule1.service.js', basePath + this.moduleName + '.service.js');
          this.template(this.type + '/umodule1.i18n.js', basePath + this.moduleName + '.i18n.js');
          this.template(this.type + '/umodule1.vuex.js', basePath + this.moduleName + '.vuex.js');
          break;

        case 'searchcard':
          var basePath = this.moduleName + '/';
          if (this.mainPage) {
            this.template(this.type + '/routes.js', this.moduleName + '/routes.js');
            this.template(this.type + '/config.json', this.moduleName + '/config.json');
            this.template(this.type + '/index.html', this.moduleName + '/index.html');
            this.template(this.type + '/umodule1.service.js', this.moduleName + '/service.js');
            var basePath = this.moduleName + '/' + this.moduleName + '/';
          }
          this.template(this.type + '/cardTpl.html', basePath + '/cardTpl.html');
          this.template(this.type + '/umodule1.vue', basePath + this.moduleName + '.vue');
          this.template(this.type + '/umodule1.i18n.js', basePath + this.moduleName + '.i18n.js');
          this.template(this.type + '/umodule1.vuex.js', basePath + this.moduleName + '.vuex.js');
          break;

        case 'emapform':
          var basePath = this.moduleName + '/';
          if (this.mainPage) {
            this.template(this.type + '/routes.js', this.moduleName + '/routes.js');
            this.template(this.type + '/config.json', this.moduleName + '/config.json');
            this.template(this.type + '/index.html', this.moduleName + '/index.html');
            this.template(this.type + '/umodule1.service.js', this.moduleName + '/service.js');
            var basePath = this.moduleName + '/' + this.moduleName + '/';
          }
          this.template(this.type + '/umodule1.vue', basePath + this.moduleName + '.vue');
          this.template(this.type + '/umodule1.i18n.js', basePath + this.moduleName + '.i18n.js');
          this.template(this.type + '/umodule1.vuex.js', basePath + this.moduleName + '.vuex.js');
          break;

        case 'tab':
          var basePath = this.moduleName + '/';
          if (this.mainPage) {
            this.template(this.type + '/routes.js', this.moduleName + '/routes.js');
            this.template(this.type + '/config.json', this.moduleName + '/config.json');
            this.template(this.type + '/index.html', this.moduleName + '/index.html');
            this.template(this.type + '/umodule1.service.js', this.moduleName + '/service.js');
            var basePath = this.moduleName + '/' + this.moduleName + '/';
          }
          this.template(this.type + '/umodule1.vue', basePath + this.moduleName + '.vue');
          this.template(this.type + '/umodule1.i18n.js', basePath + this.moduleName + '.i18n.js');
          this.template(this.type + '/umodule1.vuex.js', basePath + this.moduleName + '.vuex.js');
          break;

        case 'wizard':
          this.template(this.type + '/mock.js', this.moduleName + '/mock.js');
          this.template(this.type + '/umodule1.css', basePath + this.moduleName + '.css');
          this.template(this.type + '/umodule1.js', basePath + this.moduleName + '.js');
          this.template(this.type + '/umodule1BS.js', basePath + this.moduleName + 'BS.js');
          this.template(this.type + '/umodule1IndexPage.html', basePath + this.moduleName + 'IndexPage.html');
          break;

      }
    }
  }
});

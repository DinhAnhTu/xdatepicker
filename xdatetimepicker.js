'use strict';

angular.module('xdatetimepicker', []).provider('xdatetimepicker', function() {
  var default_options;
  default_options = {};
  this.setOptions = function(options) {
    default_options = options;
  };
  this.$get = function() {
    return {
      getOptions: function() {
        return default_options;
      }
    };
  };
}).directive('xdatepicker', function($timeout, xdatetimepicker) {
  return {
    require: '?ngModel',
    restrict: 'A',
    scope: {
      xdatetimepickerOptions: '@'
    },
    link: function(scope, el, attrs, ngModelCtrl) {
      var default_options, options, passed_in_options;
      default_options = xdatetimepicker.getOptions();
      passed_in_options = scope.$eval(attrs.xdatetimepickerOptions);
      options = jQuery.extend({}, default_options, {format:'d/m/Y', timepicker:false}, passed_in_options);
      
      el.on('change', function(e) {
        if (ngModelCtrl) {
          $timeout(function() {
      
            ngModelCtrl.$setViewValue(e.target.value);
            options.value = e.target.value;
          });
        }
      }).datetimepicker(options);
    }
  };
}).directive('xdatetimepicker', function($timeout, xdatetimepicker) {
  return {
    require: '?ngModel',
    restrict: 'A',
    scope: {
      xdatetimepickerOptions: '@'
    },
    link: function(scope, el, attrs, ngModelCtrl) {
      var default_options, options, passed_in_options;
      default_options = xdatetimepicker.getOptions();
      passed_in_options = scope.$eval(attrs.xdatetimepickerOptions);
      options = jQuery.extend({}, default_options, {format: 'd/m/Y H:i'}, passed_in_options);

      el.on('change', function(e) {
        if (ngModelCtrl) {
          $timeout(function() {
      
            ngModelCtrl.$setViewValue(e.target.value);
          });
        }
      }).datetimepicker(options);
    }
  };
}).directive('xdatepickerStart', function($timeout, xdatetimepicker) {
  return {
    require: '?ngModel',
    restrict: 'A',
    scope: {
      xdatetimepickerOptions: '@'
    },
    link: function(scope, el, attrs, ngModelCtrl) {
      var default_options, onShow, options, passed_in_options;
      default_options = xdatetimepicker.getOptions();
      passed_in_options = scope.$eval(attrs.xdatetimepickerOptions);
      onShow = function(ct) {
        this.setOptions({
          formatDate: 'd/m/Y',
          maxDate: (jQuery("[xdatepicker-end=" + attrs.xdatepickerStart + "]").val() !== jQuery("[xdatepicker-start=" + attrs.xdatepickerStart + "]").val()) && (jQuery("[xdatepicker-end=" + attrs.xdatepickerStart + "]").val() !== '') ? jQuery("[xdatepicker-end=" + attrs.xdatepickerStart + "]").val() : false
        });
      };
      options = jQuery.extend({}, {
        onShow: onShow
      }, default_options, {format: 'd/m/Y', timepicker:false}, passed_in_options);
      el.on('change', function(e) {
        if (ngModelCtrl) {
          $timeout(function() {
      
            ngModelCtrl.$setViewValue(e.target.value);
          });
        }
      }).datetimepicker(options);
    }
  };
}).directive('xdatepickerEnd', function($timeout, xdatetimepicker, $filter) {
  return {
    require: '?ngModel',
    restrict: 'A',
    scope: {
      xdatetimepickerOptions: '@'
    },
    link: function(scope, el, attrs, ngModelCtrl) {
      var default_options, onShow, options, passed_in_options;
      default_options = xdatetimepicker.getOptions();
      passed_in_options = scope.$eval(attrs.xdatetimepickerOptions);
      onShow = function(ct) {
        this.setOptions({
          formatDate: 'd/m/Y',
          minDate: jQuery("[xdatepicker-start=" + attrs.xdatepickerEnd + "]").val() !== jQuery("[xdatepicker-end=" + attrs.xdatepickerEnd + "]").val() ? jQuery("[xdatepicker-start=" + attrs.xdatepickerEnd + "]").val() : false
        });
      };
      options = jQuery.extend({}, {
        onShow: onShow
      }, default_options, {format: 'd/m/Y', timepicker:false}, passed_in_options);
      el.on('change', function(e) {
        if (ngModelCtrl) {
          $timeout(function() {

            ngModelCtrl.$setViewValue(e.target.value);
          });
        }
      }).datetimepicker(options);
    }
  };
}).directive('xdatetimepickerStart', function($timeout, xdatetimepicker) {
  return {
    require: '?ngModel',
    restrict: 'A',
    scope: {
      xdatetimepickerOptions: '@'
    },
    link: function(scope, el, attrs, ngModelCtrl) {
      var default_options, onShow, options, passed_in_options;
      default_options = xdatetimepicker.getOptions();
      passed_in_options = scope.$eval(attrs.xdatetimepickerOptions);
      onShow = function(ct) {
        this.setOptions({
          formatDate: 'd/m/Y',
          maxDate: (jQuery("[xdatetimepicker-end=" + attrs.xdatetimepickerStart + "]").val() !== jQuery("[xdatetimepicker-start=" + attrs.xdatetimepickerStart + "]").val()) && (jQuery("[xdatetimepicker-end=" + attrs.xdatetimepickerStart + "]").val() !== '__/__/____ __:__') ? jQuery("[xdatetimepicker-end=" + attrs.xdatetimepickerStart + "]").val() : false
        });
      };
      options = jQuery.extend({}, {
        onShow: onShow
      }, default_options, {format: 'd/m/Y H:i'}, passed_in_options);
      el.on('change', function(e) {
        if (ngModelCtrl) {
          $timeout(function() {
      
            ngModelCtrl.$setViewValue(e.target.value);
          });
        }
      }).datetimepicker(options);
    }
  };
}).directive('xdatetimepickerEnd', function($timeout, xdatetimepicker, $filter) {
  return {
    require: '?ngModel',
    restrict: 'A',
    scope: {
      xdatetimepickerOptions: '@'
    },
    link: function(scope, el, attrs, ngModelCtrl) {
      var default_options, onShow, options, passed_in_options;
      default_options = xdatetimepicker.getOptions();
      passed_in_options = scope.$eval(attrs.xdatetimepickerOptions);
      onShow = function(ct) {
        this.setOptions({
          formatDate: 'd/m/Y',
          minDate: jQuery("[xdatetimepicker-start=" + attrs.xdatetimepickerEnd + "]").val() !== jQuery("[xdatetimepicker-end=" + attrs.xdatetimepickerEnd + "]").val() ? jQuery("[xdatetimepicker-start=" + attrs.xdatetimepickerEnd + "]").val() : false
        });
      };
      options = jQuery.extend({}, {
        onShow: onShow
      }, default_options, {format: 'd/m/Y H:i'}, passed_in_options);
      el.on('change', function(e) {
        if (ngModelCtrl) {
          $timeout(function() {

            ngModelCtrl.$setViewValue(e.target.value);
          });
        }
      }).datetimepicker(options);
    }
  };
});
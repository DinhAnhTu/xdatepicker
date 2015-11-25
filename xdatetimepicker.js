'use strict';

angular.module('xdatetimepicker', []).provider('xdatetimepicker', function() {
  var default_options;
  default_options = {
    editable: false
  };
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
}).directive('xdatepicker', function($timeout, xdatetimepicker, $filter) {
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
      
      if(options.editable == false){
        el.keydown(function(e){
          e.preventDefault();
          });
      }
      
      el.on('change', function(e) {
        if (ngModelCtrl) {
          $timeout(function() {
      
            ngModelCtrl.$setViewValue(e.target.value);
            options.value = e.target.value;
          });
        }
      }).datetimepicker(options);

      function setPickerValue() {
              $timeout(function() {
              var date = ngModelCtrl.$modelValue;
              if(options.fromunixtime && angular.isNumber(date)){
                  date = $filter('date')(new Date(date*1000),'dd/MM/yyyy');
                  el.val(date);  
              } else {
                ngModelCtrl.$setViewValue(date);  
              }
            });
        }

      setPickerValue();
    }
  };
}).directive('xdatetimepicker', function($timeout, xdatetimepicker, $filter) {
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

      if(options.editable == false){
        el.keydown(function(e){
          e.preventDefault();
          });
      }

      el.on('change', function(e) {
        if (ngModelCtrl) {
          $timeout(function() {
            ngModelCtrl.$setViewValue(e.target.value);
          });
        }
      }).datetimepicker(options);

      function setPickerValue() {
              $timeout(function() {
              var date = ngModelCtrl.$modelValue;
              if(options.fromunixtime && angular.isNumber(date)){
                  date = $filter('date')(new Date(date*1000),'dd/MM/yyyy HH:mm');
                  el.val(date);  
              } else {
                ngModelCtrl.$setViewValue(date);  
              }
            });
        }

      setPickerValue();
    }
  };
}).directive('xdatepickerStart', function($timeout, xdatetimepicker, $filter) {
  return {
    require: '?ngModel',
    restrict: 'A',
    scope: {
      xdatetimepickerOptions: '@'
    },
    link: function(scope, el, attrs, ngModelCtrl) {
      var default_options, onShow, options, passed_in_options, startDate, endDate;
      default_options = xdatetimepicker.getOptions();
      passed_in_options = scope.$eval(attrs.xdatetimepickerOptions);
      onShow = function(ct) {

        startDate = jQuery("[xdatepicker-start=" + attrs.xdatepickerStart + "]").val();
        endDate = jQuery("[xdatepicker-end=" + attrs.xdatepickerStart + "]").val();

        if(endDate !== ''){
          this.setOptions({
            formatDate: 'd/m/Y',
            maxDate: (endDate !== startDate) && (endDate !== '') ? endDate : false
          });
        }  
      };
      options = jQuery.extend({}, {
        onShow: onShow
      }, default_options, {format: 'd/m/Y', timepicker:false}, passed_in_options);
      
      function setPickerValue() {
              $timeout(function() {
              var date = ngModelCtrl.$modelValue;
              if(options.fromunixtime && angular.isNumber(date)){
                  date = $filter('date')(new Date(date*1000),'dd/MM/yyyy');
                  el.val(date);  
              } else {
                ngModelCtrl.$setViewValue(date);  
              }
            });
        }

      if(options.editable == false){
        el.keydown(function(e){
          e.preventDefault();
          });
      }

      el.on('change', function(e) {
        if (ngModelCtrl) {
          $timeout(function() {
            setPickerValue();
            ngModelCtrl.$setViewValue(e.target.value);
          });
        }
      }).datetimepicker(options);

      setPickerValue();
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
      var default_options, onShow, options, passed_in_options, startDate, endDate;
      default_options = xdatetimepicker.getOptions();
      passed_in_options = scope.$eval(attrs.xdatetimepickerOptions);
      onShow = function(ct) {

        startDate = jQuery("[xdatepicker-start=" + attrs.xdatepickerEnd + "]").val();
        endDate = jQuery("[xdatepicker-end=" + attrs.xdatepickerEnd + "]").val();

        this.setOptions({
          formatDate: 'd/m/Y',
          minDate: (startDate !== endDate) ? startDate : false
        });
      };
      options = jQuery.extend({}, {
        onShow: onShow
      }, default_options, {format: 'd/m/Y', timepicker:false}, passed_in_options);

      if(options.editable == false){
        el.keydown(function(e){
          e.preventDefault();
          });
      }

      el.on('change', function(e) {
        if (ngModelCtrl) {
          $timeout(function() {

            ngModelCtrl.$setViewValue(e.target.value);
          });
        }
      }).datetimepicker(options);

      function setPickerValue() {
              $timeout(function() {
              var date = ngModelCtrl.$modelValue;
              if(options.fromunixtime && angular.isNumber(date)){
                  date = $filter('date')(new Date(date*1000),'dd/MM/yyyy');
                  el.val(date);  
              } else {
                ngModelCtrl.$setViewValue(date);  
              }
            });
        }

      setPickerValue();
    }
  };
}).directive('xtimepickerStart', function($timeout, xdatetimepicker, $filter) {
  return {
    require: '?ngModel',
    restrict: 'A',
    scope: {
      xdatetimepickerOptions: '@'
    },
    link: function(scope, el, attrs, ngModelCtrl) {
      var default_options, onShow, options, passed_in_options, startTime, endTime, offset = 0, maxTimeWithOffset;

      default_options = xdatetimepicker.getOptions();
      passed_in_options = scope.$eval(attrs.xdatetimepickerOptions);
      
      options = jQuery.extend({}, default_options, {format: 'H:i', datepicker:false}, passed_in_options);
      
      onShow = function(ct) {

        startTime = jQuery("[xtimepicker-start=" + attrs.xtimepickerStart + "]").val();
        endTime = jQuery("[xtimepicker-end=" + attrs.xtimepickerStart + "]").val();

        if(passed_in_options.offset != undefined){
          if( el.val() != undefined && (parseInt(endTime.split(":")[0]) - passed_in_options.offset <= parseInt(el.val().split(":")[0]))){
            offset = 0;
          } else {
            offset = parseInt(passed_in_options.offset);
          }
        }

        maxTimeWithOffset = ((startTime !== endTime) && (endTime !== '') ? parseInt(endTime.split(":")[0]) - offset + ':' +  endTime.split(":")[1] : false);


        if(endTime !== ''){
          this.setOptions({
            formatTime:'H:i',
            maxTime: maxTimeWithOffset
          });
        }  
      };

      options = jQuery.extend({}, {
        onShow: onShow
      }, options);
      
      
      function setPickerValue() {
              $timeout(function() {
              var date = ngModelCtrl.$modelValue;
              if(options.fromunixtime && angular.isNumber(date)){
                  date = $filter('date')(new Date(date*1000),'HH:mm');
                  el.val(date);  
              } else {
                ngModelCtrl.$setViewValue(date);  
              }
            });
        }

      if(options.editable == false){
        el.keydown(function(e){
          e.preventDefault();
          });
      }

      el.on('change', function(e) {
        if (ngModelCtrl) {
          $timeout(function() {
            setPickerValue();
            ngModelCtrl.$setViewValue(e.target.value);
          });
        }
      }).datetimepicker(options);

      setPickerValue();
    }
  };
}).directive('xtimepickerEnd', function($timeout, xdatetimepicker, $filter) {
  return {
    require: '?ngModel',
    restrict: 'A',
    scope: {
      xdatetimepickerOptions: '@'
    },
    link: function(scope, el, attrs, ngModelCtrl) {
      var default_options, onShow, options, passed_in_options, startTime, endTime, offset = 0, minTimeWithOffset;

      default_options = xdatetimepicker.getOptions();
      passed_in_options = scope.$eval(attrs.xdatetimepickerOptions);

      options = jQuery.extend({}, default_options, {format: 'H:i', datepicker:false}, passed_in_options);
      
      onShow = function(ct) {
        startTime = jQuery("[xtimepicker-start=" + attrs.xtimepickerEnd + "]").val();
        endTime = jQuery("[xtimepicker-end=" + attrs.xtimepickerEnd + "]").val();

        if(passed_in_options.offset != undefined){
          if( el.val() != undefined && (parseInt(startTime.split(":")[0]) - passed_in_options.offset <= parseInt(el.val().split(":")[0]))){
            offset = 0;
          } else {
            offset = parseInt(passed_in_options.offset);
          }
        }

        minTimeWithOffset = ((startTime !== endTime) && (startTime !== '') ? parseInt(startTime.split(":")[0]) + offset + ':' +  startTime.split(":")[1] : false);

        if(startTime !== ''){
          this.setOptions({
            formatTime:'H:i',
            minTime: minTimeWithOffset
          });
        }  
      };
      options = jQuery.extend({}, {
        onShow: onShow
      }, options);
      
      function setPickerValue() {
              $timeout(function() {
              var date = ngModelCtrl.$modelValue;
              if(options.fromunixtime && angular.isNumber(date)){
                  date = $filter('date')(new Date(date*1000),'HH:mm');
                  el.val(date);  
              } else {
                ngModelCtrl.$setViewValue(date);  
              }
            });
        }

      if(options.editable == false){
        el.keydown(function(e){
          e.preventDefault();
          });
      }

      el.on('change', function(e) {
        if (ngModelCtrl) {
          $timeout(function() {
            setPickerValue();
            ngModelCtrl.$setViewValue(e.target.value);
          });
        }
      }).datetimepicker(options);

      setPickerValue();
    }
  };
}).directive('xdatetimepickerStart', function($timeout, xdatetimepicker, $filter) {
  return {
    require: '?ngModel',
    restrict: 'A',
    scope: {
      xdatetimepickerOptions: '@'
    },
    link: function(scope, el, attrs, ngModelCtrl) {
      var default_options, onShow, options, passed_in_options, startTime, endTime;
      default_options = xdatetimepicker.getOptions();
      passed_in_options = scope.$eval(attrs.xdatetimepickerOptions);

      onShow = function(ct) {
        startTime = jQuery("[xdatetimepicker-start=" + attrs.xdatetimepickerStart + "]").val();
        endTime = jQuery("[xdatetimepicker-end=" + attrs.xdatetimepickerStart + "]").val();
        
        if(endTime !== ''){
          this.setOptions({
            formatDate: 'd/m/Y H:i',
            maxDate: endTime || false
          });
        }
      };

      options = jQuery.extend({}, {
        onShow: onShow
      }, default_options, {format: 'd/m/Y H:i'}, passed_in_options);

      if(options.editable == false){
        el.keydown(function(e){
          e.preventDefault();
          });
      }

      el.on('change', function(e) {
        if (ngModelCtrl) {
          $timeout(function() {
      
            ngModelCtrl.$setViewValue(e.target.value);
          });
        }
      }).datetimepicker(options);

      function setPickerValue() {
              $timeout(function() {
              var date = ngModelCtrl.$modelValue;
              if(options.fromunixtime && angular.isNumber(date)){
                  date = $filter('date')(new Date(date*1000),'dd/MM/yyyy HH:mm');
                  el.val(date);  
              } else {
                ngModelCtrl.$setViewValue(date);  
              }
            });
        }

      setPickerValue();
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
      var default_options, onShow, options, passed_in_options, startTime, endTime;
      default_options = xdatetimepicker.getOptions();
      passed_in_options = scope.$eval(attrs.xdatetimepickerOptions);
      
      onShow = function(ct) {

        startTime = jQuery("[xdatetimepicker-start=" + attrs.xdatetimepickerEnd + "]").val();
        endTime = jQuery("[xdatetimepicker-end=" + attrs.xdatetimepickerEnd + "]").val();

        this.setOptions({
          formatDate: 'd/m/Y H:i',
          minDate: startTime !== endTime ? startTime : false
        });
      };

      options = jQuery.extend({}, {
        onShow: onShow
      }, default_options, {format: 'd/m/Y H:i'}, passed_in_options);

      if(options.editable == false){
        el.keydown(function(e){
          e.preventDefault();
          });
      }

      el.on('change', function(e) {
        if (ngModelCtrl) {
          $timeout(function() {

            ngModelCtrl.$setViewValue(e.target.value);
          });
        }
      }).datetimepicker(options);

      function setPickerValue() {
              $timeout(function() {
              var date = ngModelCtrl.$modelValue;
              if(options.fromunixtime && angular.isNumber(date)){
                  date = $filter('date')(new Date(date*1000),'dd/MM/yyyy HH:mm');
                  el.val(date);  
              } else {
                ngModelCtrl.$setViewValue(date);  
              }
            });
        }

      setPickerValue();
    }
  };
});
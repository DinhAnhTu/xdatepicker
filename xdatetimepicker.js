// angular component
'use strict';

angular
  .module('xdatetimepicker', [])

  .provider('xdatetimepicker', function () {
    var default_options = {
	    	format:'d/m/Y H:i',
	      	minDate:'0',
	      	mask:true
	    };

    this.setOptions = function (options) {
      default_options = options;
    };

    this.$get = function () {
      return {
        getOptions: function () {
          return default_options;
        }
      };
    };
  })

  .directive('xDatePicker', [
    '$timeout',
    'xdatetimepicker',
    function ($timeout,
              xdatetimepicker) {

      var default_options = xdatetimepicker.getOptions();

      return {
        require : '?ngModel',
        restrict: 'AE',
        scope   : {
          datetimepickerOptions: '@'
        },
        link    : function ($scope, $element, $attrs, ngModelCtrl) {
          var passed_in_options = $scope.$eval($attrs.datetimepickerOptions);
          var options = jQuery.extend({}, default_options, passed_in_options);

          $element
            .on('dp.change', function (e) {
              if (ngModelCtrl) {
                $timeout(function () {
                  ngModelCtrl.$setViewValue(e.target.value);
                });
              }
            })
            .datetimepicker(options);

          function setPickerValue() {
            var date = null;

            if (ngModelCtrl && ngModelCtrl.$viewValue) {
              date = ngModelCtrl.$viewValue;
            }

            $element
              .data('DateTimePicker')
              .date(date);
          }

          if (ngModelCtrl) {
            ngModelCtrl.$render = function () {
              setPickerValue();
            };
          }

          setPickerValue();
        }
      };
    }
  ]);
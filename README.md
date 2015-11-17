# xdatetimepicker

## This package is in early development state
xdatetimepicker is a thin wrapper around datetimepicker jQuery plugin select date and time picker from https://github.com/xdan/datetimepicker
use:

### Directive:
- xdatepicker
- xdatepicker-start
- xdatepicker-end
- xdatetimepicker
- xdatetimepicker-start
- xdatetimepicker-end
- xdatetimepicker-options

#### As attribute:

```html 
<input type="text" ng-model="strTime" xdatepicker /> 

* Time range
<input type="text" ng-model="strTimeStart" xdatepicker-start="range1" />
<input type="text" ng-model="strTimeEnd" xdatepicker-end="range1" />

* Options:
<input type="text" ng-model="strTime" xdatepicker xdatetimepicker-options="{format:'d/m/Y'}" />
```
---

#### As element:

```html 
<xdatepicker ng-model="strTime"></xdatepicker> 

* Time range
<xdatepicker-start="range1" ng-model="strTimeStart"></xdatepicker>
<xdatepicker-end="range1" ng-model="strTimeEnd"></xdatepicker>

* Options:
<xdatepicker xdatetimepicker-options="{format:'d/m/Y'}" ng-model="strTime"></xdatepicker>
```
---

### Installation

```sh
$ bower install xdatetimepicker
```

Thanks [xdan](https://github.com/xdan/datetimepicker)!

License

----

MIT

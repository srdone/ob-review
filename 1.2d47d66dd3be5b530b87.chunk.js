webpackJsonp([1,7],{661:function(e,t,n){"use strict";var o=n(0),i=n(64),c=n(360),r=n(666),u=n(217);n.d(t,"MultipleChoiceQuestionTestModule",function(){return l});var f=this&&this.__decorate||function(e,t,n,o){var i,c=arguments.length,r=c<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,n,o);else for(var u=e.length-1;u>=0;u--)(i=e[u])&&(r=(c<3?i(r):c>3?i(t,n,r):i(t,n))||r);return c>3&&r&&Object.defineProperty(t,n,r),r},s=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},a=[{path:"",component:r.a}],l=function(){function e(){}return e=f([n.i(o.u)({imports:[c.a.forChild(a),i.g,u.SharedModule],declarations:[r.a]}),s("design:paramtypes",[])],e)}()},666:function(e,t,n){"use strict";var o=n(0),i=n(361);n.d(t,"a",function(){return u});var c=this&&this.__decorate||function(e,t,n,o){var i,c=arguments.length,r=c<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,n,o);else for(var u=e.length-1;u>=0;u--)(i=e[u])&&(r=(c<3?i(r):c>3?i(t,n,r):i(t,n))||r);return c>3&&r&&Object.defineProperty(t,n,r),r},r=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},u=function(){function e(e){this.questionDataService=e,this.title="Multiple Choice Questions Test!"}return e.prototype.ngOnInit=function(){this.questions=this.questionDataService.getQuestions()},e=c([n.i(o.J)({selector:"multiple-choice-question-test",template:n(677),styles:[n(672)]}),r("design:paramtypes",["function"==typeof(t="undefined"!=typeof i.b&&i.b)&&t||Object])],e);var t}()},672:function(e,t){e.exports=":host /deep/ multiple-choice .correct{\n  color:green;\n}\n\n:host /deep/ multiple-choice .incorrect{\n  color:red;\n}"},677:function(e,t){e.exports='<h1>{{title}}</h1>\n<div *ngFor="let question of questions">\n    <multiple-choice [question]="question"></multiple-choice>\n    <hr/>\n</div>'}});
//# sourceMappingURL=1.2d47d66dd3be5b530b87.bundle.map
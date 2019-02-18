(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('tslib'), require('@angular/core'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('micro-frontend-alpha', ['exports', 'tslib', '@angular/core', '@angular/common'], factory) :
    (factory((global['micro-frontend-alpha'] = {}),global.tslib,global.ng.core,global.ng.common));
}(this, (function (exports,tslib_1,core,common) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var globalComponents = [];
    var GlobalModule = /** @class */ (function () {
        function GlobalModule() {
        }
        GlobalModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: tslib_1.__spread(globalComponents),
                        imports: [
                            common.CommonModule,
                        ],
                        schemas: [
                            core.CUSTOM_ELEMENTS_SCHEMA,
                        ],
                        exports: tslib_1.__spread(globalComponents)
                    },] }
        ];
        return GlobalModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.GlobalModule = GlobalModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=global.bundle.umd.js.map
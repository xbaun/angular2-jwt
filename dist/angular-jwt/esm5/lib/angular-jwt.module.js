import { __decorate, __metadata, __param } from "tslib";
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor } from './jwt.interceptor';
import { JWT_OPTIONS } from './jwtoptions.token';
import { JwtHelperService } from './jwthelper.service';
var JwtModule = /** @class */ (function () {
    function JwtModule(parentModule) {
        if (parentModule) {
            throw new Error('JwtModule is already loaded. It should only be imported in your application\'s main module.');
        }
    }
    JwtModule_1 = JwtModule;
    JwtModule.forRoot = function (options) {
        return {
            ngModule: JwtModule_1,
            providers: [
                {
                    provide: HTTP_INTERCEPTORS,
                    useClass: JwtInterceptor,
                    multi: true
                },
                options.jwtOptionsProvider ||
                    {
                        provide: JWT_OPTIONS,
                        useValue: options.config
                    },
                JwtHelperService
            ]
        };
    };
    var JwtModule_1;
    JwtModule.ctorParameters = function () { return [
        { type: JwtModule, decorators: [{ type: Optional }, { type: SkipSelf }] }
    ]; };
    JwtModule = JwtModule_1 = __decorate([
        NgModule(),
        __param(0, Optional()), __param(0, SkipSelf()),
        __metadata("design:paramtypes", [JwtModule])
    ], JwtModule);
    return JwtModule;
}());
export { JwtModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhci1qd3QubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGF1dGgwL2FuZ3VsYXItand0LyIsInNvdXJjZXMiOlsibGliL2FuZ3VsYXItand0Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBdUIsUUFBUSxFQUFFLFFBQVEsRUFBWSxNQUFNLGVBQWUsQ0FBQztBQUM1RixPQUFPLEVBQUUsaUJBQWlCLEVBQWUsTUFBTSxzQkFBc0IsQ0FBQztBQUN0RSxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0sbUJBQW1CLENBQUM7QUFDakQsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLG9CQUFvQixDQUFDO0FBQy9DLE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLHFCQUFxQixDQUFDO0FBaUJyRDtJQUVFLG1CQUFvQyxZQUF1QjtRQUN6RCxJQUFJLFlBQVksRUFBRTtZQUNoQixNQUFNLElBQUksS0FBSyxDQUFDLDZGQUE2RixDQUFDLENBQUM7U0FDaEg7SUFDSCxDQUFDO2tCQU5VLFNBQVM7SUFPYixpQkFBTyxHQUFkLFVBQWUsT0FBeUI7UUFDdEMsT0FBTztZQUNMLFFBQVEsRUFBRSxXQUFTO1lBQ25CLFNBQVMsRUFBRTtnQkFDVDtvQkFDRSxPQUFPLEVBQUUsaUJBQWlCO29CQUMxQixRQUFRLEVBQUUsY0FBYztvQkFDeEIsS0FBSyxFQUFFLElBQUk7aUJBQ1o7Z0JBQ0QsT0FBTyxDQUFDLGtCQUFrQjtvQkFDMUI7d0JBQ0UsT0FBTyxFQUFFLFdBQVc7d0JBQ3BCLFFBQVEsRUFBRSxPQUFPLENBQUMsTUFBTTtxQkFDekI7Z0JBQ0QsZ0JBQWdCO2FBQ2pCO1NBQ0YsQ0FBQztJQUNKLENBQUM7OztnQkF0QmlELFNBQVMsdUJBQTlDLFFBQVEsWUFBSSxRQUFROztJQUZ0QixTQUFTO1FBRHJCLFFBQVEsRUFBRTtRQUdJLFdBQUEsUUFBUSxFQUFFLENBQUEsRUFBRSxXQUFBLFFBQVEsRUFBRSxDQUFBO3lDQUFlLFNBQVM7T0FGaEQsU0FBUyxDQXlCckI7SUFBRCxnQkFBQztDQUFBLEFBekJELElBeUJDO1NBekJZLFNBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycywgT3B0aW9uYWwsIFNraXBTZWxmLCBQcm92aWRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSFRUUF9JTlRFUkNFUFRPUlMsIEh0dHBSZXF1ZXN0IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHtKd3RJbnRlcmNlcHRvcn0gZnJvbSAnLi9qd3QuaW50ZXJjZXB0b3InO1xuaW1wb3J0IHtKV1RfT1BUSU9OU30gZnJvbSAnLi9qd3RvcHRpb25zLnRva2VuJztcbmltcG9ydCB7Snd0SGVscGVyU2VydmljZX0gZnJvbSAnLi9qd3RoZWxwZXIuc2VydmljZSc7XG5cblxuZXhwb3J0IGludGVyZmFjZSBKd3RNb2R1bGVPcHRpb25zIHtcbiAgand0T3B0aW9uc1Byb3ZpZGVyPzogUHJvdmlkZXI7XG4gIGNvbmZpZz86IHtcbiAgICB0b2tlbkdldHRlcj86IChyZXF1ZXN0OiBIdHRwUmVxdWVzdDxhbnk+KSA9PiBzdHJpbmcgfCBudWxsIHwgUHJvbWlzZTxzdHJpbmcgfCBudWxsPjtcbiAgICBoZWFkZXJOYW1lPzogc3RyaW5nO1xuICAgIGF1dGhTY2hlbWU/OiBzdHJpbmc7XG4gICAgd2hpdGVsaXN0ZWREb21haW5zPzogQXJyYXk8c3RyaW5nIHwgUmVnRXhwPjtcbiAgICBibGFja2xpc3RlZFJvdXRlcz86IEFycmF5PHN0cmluZyB8IFJlZ0V4cD47XG4gICAgdGhyb3dOb1Rva2VuRXJyb3I/OiBib29sZWFuO1xuICAgIHNraXBXaGVuRXhwaXJlZD86IGJvb2xlYW47XG4gIH07XG59XG5cbkBOZ01vZHVsZSgpXG5leHBvcnQgY2xhc3MgSnd0TW9kdWxlIHtcblxuICBjb25zdHJ1Y3RvcihAT3B0aW9uYWwoKSBAU2tpcFNlbGYoKSBwYXJlbnRNb2R1bGU6IEp3dE1vZHVsZSkge1xuICAgIGlmIChwYXJlbnRNb2R1bGUpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignSnd0TW9kdWxlIGlzIGFscmVhZHkgbG9hZGVkLiBJdCBzaG91bGQgb25seSBiZSBpbXBvcnRlZCBpbiB5b3VyIGFwcGxpY2F0aW9uXFwncyBtYWluIG1vZHVsZS4nKTtcbiAgICB9XG4gIH1cbiAgc3RhdGljIGZvclJvb3Qob3B0aW9uczogSnd0TW9kdWxlT3B0aW9ucyk6IE1vZHVsZVdpdGhQcm92aWRlcnM8Snd0TW9kdWxlPiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBKd3RNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAge1xuICAgICAgICAgIHByb3ZpZGU6IEhUVFBfSU5URVJDRVBUT1JTLFxuICAgICAgICAgIHVzZUNsYXNzOiBKd3RJbnRlcmNlcHRvcixcbiAgICAgICAgICBtdWx0aTogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBvcHRpb25zLmp3dE9wdGlvbnNQcm92aWRlciB8fFxuICAgICAgICB7XG4gICAgICAgICAgcHJvdmlkZTogSldUX09QVElPTlMsXG4gICAgICAgICAgdXNlVmFsdWU6IG9wdGlvbnMuY29uZmlnXG4gICAgICAgIH0sXG4gICAgICAgIEp3dEhlbHBlclNlcnZpY2VcbiAgICAgIF1cbiAgICB9O1xuICB9XG59XG4iXX0=
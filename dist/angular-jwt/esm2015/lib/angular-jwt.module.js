var JwtModule_1;
import { __decorate, __metadata, __param } from "tslib";
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor } from './jwt.interceptor';
import { JWT_OPTIONS } from './jwtoptions.token';
import { JwtHelperService } from './jwthelper.service';
let JwtModule = JwtModule_1 = class JwtModule {
    constructor(parentModule) {
        if (parentModule) {
            throw new Error('JwtModule is already loaded. It should only be imported in your application\'s main module.');
        }
    }
    static forRoot(options) {
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
    }
};
JwtModule.ctorParameters = () => [
    { type: JwtModule, decorators: [{ type: Optional }, { type: SkipSelf }] }
];
JwtModule = JwtModule_1 = __decorate([
    NgModule(),
    __param(0, Optional()), __param(0, SkipSelf()),
    __metadata("design:paramtypes", [JwtModule])
], JwtModule);
export { JwtModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhci1qd3QubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGF1dGgwL2FuZ3VsYXItand0LyIsInNvdXJjZXMiOlsibGliL2FuZ3VsYXItand0Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQXVCLFFBQVEsRUFBRSxRQUFRLEVBQVksTUFBTSxlQUFlLENBQUM7QUFDNUYsT0FBTyxFQUFFLGlCQUFpQixFQUFlLE1BQU0sc0JBQXNCLENBQUM7QUFDdEUsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLG1CQUFtQixDQUFDO0FBQ2pELE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSxvQkFBb0IsQ0FBQztBQUMvQyxPQUFPLEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSxxQkFBcUIsQ0FBQztBQWlCckQsSUFBYSxTQUFTLGlCQUF0QixNQUFhLFNBQVM7SUFFcEIsWUFBb0MsWUFBdUI7UUFDekQsSUFBSSxZQUFZLEVBQUU7WUFDaEIsTUFBTSxJQUFJLEtBQUssQ0FBQyw2RkFBNkYsQ0FBQyxDQUFDO1NBQ2hIO0lBQ0gsQ0FBQztJQUNELE1BQU0sQ0FBQyxPQUFPLENBQUMsT0FBeUI7UUFDdEMsT0FBTztZQUNMLFFBQVEsRUFBRSxXQUFTO1lBQ25CLFNBQVMsRUFBRTtnQkFDVDtvQkFDRSxPQUFPLEVBQUUsaUJBQWlCO29CQUMxQixRQUFRLEVBQUUsY0FBYztvQkFDeEIsS0FBSyxFQUFFLElBQUk7aUJBQ1o7Z0JBQ0QsT0FBTyxDQUFDLGtCQUFrQjtvQkFDMUI7d0JBQ0UsT0FBTyxFQUFFLFdBQVc7d0JBQ3BCLFFBQVEsRUFBRSxPQUFPLENBQUMsTUFBTTtxQkFDekI7Z0JBQ0QsZ0JBQWdCO2FBQ2pCO1NBQ0YsQ0FBQztJQUNKLENBQUM7Q0FDRixDQUFBOztZQXZCbUQsU0FBUyx1QkFBOUMsUUFBUSxZQUFJLFFBQVE7O0FBRnRCLFNBQVM7SUFEckIsUUFBUSxFQUFFO0lBR0ksV0FBQSxRQUFRLEVBQUUsQ0FBQSxFQUFFLFdBQUEsUUFBUSxFQUFFLENBQUE7cUNBQWUsU0FBUztHQUZoRCxTQUFTLENBeUJyQjtTQXpCWSxTQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMsIE9wdGlvbmFsLCBTa2lwU2VsZiwgUHJvdmlkZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEhUVFBfSU5URVJDRVBUT1JTLCBIdHRwUmVxdWVzdCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7Snd0SW50ZXJjZXB0b3J9IGZyb20gJy4vand0LmludGVyY2VwdG9yJztcbmltcG9ydCB7SldUX09QVElPTlN9IGZyb20gJy4vand0b3B0aW9ucy50b2tlbic7XG5pbXBvcnQge0p3dEhlbHBlclNlcnZpY2V9IGZyb20gJy4vand0aGVscGVyLnNlcnZpY2UnO1xuXG5cbmV4cG9ydCBpbnRlcmZhY2UgSnd0TW9kdWxlT3B0aW9ucyB7XG4gIGp3dE9wdGlvbnNQcm92aWRlcj86IFByb3ZpZGVyO1xuICBjb25maWc/OiB7XG4gICAgdG9rZW5HZXR0ZXI/OiAocmVxdWVzdDogSHR0cFJlcXVlc3Q8YW55PikgPT4gc3RyaW5nIHwgbnVsbCB8IFByb21pc2U8c3RyaW5nIHwgbnVsbD47XG4gICAgaGVhZGVyTmFtZT86IHN0cmluZztcbiAgICBhdXRoU2NoZW1lPzogc3RyaW5nO1xuICAgIHdoaXRlbGlzdGVkRG9tYWlucz86IEFycmF5PHN0cmluZyB8IFJlZ0V4cD47XG4gICAgYmxhY2tsaXN0ZWRSb3V0ZXM/OiBBcnJheTxzdHJpbmcgfCBSZWdFeHA+O1xuICAgIHRocm93Tm9Ub2tlbkVycm9yPzogYm9vbGVhbjtcbiAgICBza2lwV2hlbkV4cGlyZWQ/OiBib29sZWFuO1xuICB9O1xufVxuXG5ATmdNb2R1bGUoKVxuZXhwb3J0IGNsYXNzIEp3dE1vZHVsZSB7XG5cbiAgY29uc3RydWN0b3IoQE9wdGlvbmFsKCkgQFNraXBTZWxmKCkgcGFyZW50TW9kdWxlOiBKd3RNb2R1bGUpIHtcbiAgICBpZiAocGFyZW50TW9kdWxlKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0p3dE1vZHVsZSBpcyBhbHJlYWR5IGxvYWRlZC4gSXQgc2hvdWxkIG9ubHkgYmUgaW1wb3J0ZWQgaW4geW91ciBhcHBsaWNhdGlvblxcJ3MgbWFpbiBtb2R1bGUuJyk7XG4gICAgfVxuICB9XG4gIHN0YXRpYyBmb3JSb290KG9wdGlvbnM6IEp3dE1vZHVsZU9wdGlvbnMpOiBNb2R1bGVXaXRoUHJvdmlkZXJzPEp3dE1vZHVsZT4ge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogSnd0TW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBwcm92aWRlOiBIVFRQX0lOVEVSQ0VQVE9SUyxcbiAgICAgICAgICB1c2VDbGFzczogSnd0SW50ZXJjZXB0b3IsXG4gICAgICAgICAgbXVsdGk6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgb3B0aW9ucy5qd3RPcHRpb25zUHJvdmlkZXIgfHxcbiAgICAgICAge1xuICAgICAgICAgIHByb3ZpZGU6IEpXVF9PUFRJT05TLFxuICAgICAgICAgIHVzZVZhbHVlOiBvcHRpb25zLmNvbmZpZ1xuICAgICAgICB9LFxuICAgICAgICBKd3RIZWxwZXJTZXJ2aWNlXG4gICAgICBdXG4gICAgfTtcbiAgfVxufVxuIl19
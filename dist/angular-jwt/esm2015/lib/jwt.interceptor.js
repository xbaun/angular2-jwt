import { __decorate, __metadata, __param } from "tslib";
import { Injectable, Inject } from '@angular/core';
import { JwtHelperService } from './jwthelper.service';
import { JWT_OPTIONS } from './jwtoptions.token';
import { mergeMap } from 'rxjs/operators';
import { parse } from 'url';
import { from } from 'rxjs';
let JwtInterceptor = class JwtInterceptor {
    constructor(config, jwtHelper) {
        this.jwtHelper = jwtHelper;
        this.tokenGetter = config.tokenGetter;
        this.headerName = config.headerName || 'Authorization';
        this.authScheme =
            config.authScheme || config.authScheme === ''
                ? config.authScheme
                : 'Bearer ';
        this.whitelistedDomains = config.whitelistedDomains || [];
        this.blacklistedRoutes = config.blacklistedRoutes || [];
        this.throwNoTokenError = config.throwNoTokenError || false;
        this.skipWhenExpired = config.skipWhenExpired;
    }
    isWhitelistedDomain(request) {
        const requestUrl = parse(request.url, false, true);
        return (requestUrl.host === null ||
            this.whitelistedDomains.findIndex(domain => typeof domain === 'string'
                ? domain === requestUrl.host
                : domain instanceof RegExp
                    ? domain.test(requestUrl.host)
                    : false) > -1);
    }
    isBlacklistedRoute(request) {
        const url = request.url;
        return (this.blacklistedRoutes.findIndex(route => typeof route === 'string'
            ? route === url
            : route instanceof RegExp
                ? route.test(url)
                : false) > -1);
    }
    handleInterception(token, request, next) {
        let tokenIsExpired = false;
        if (!token && this.throwNoTokenError) {
            throw new Error('Could not get token from tokenGetter function.');
        }
        if (this.skipWhenExpired) {
            tokenIsExpired = token ? this.jwtHelper.isTokenExpired(token) : true;
        }
        if (token && tokenIsExpired && this.skipWhenExpired) {
            request = request.clone();
        }
        else if (token) {
            request = request.clone({
                setHeaders: {
                    [this.headerName]: `${this.authScheme}${token}`
                }
            });
        }
        return next.handle(request);
    }
    intercept(request, next) {
        if (!this.isWhitelistedDomain(request) ||
            this.isBlacklistedRoute(request)) {
            return next.handle(request);
        }
        const token = this.tokenGetter(request);
        if (token instanceof Promise) {
            return from(token).pipe(mergeMap((asyncToken) => {
                return this.handleInterception(asyncToken, request, next);
            }));
        }
        else {
            return this.handleInterception(token, request, next);
        }
    }
};
JwtInterceptor.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [JWT_OPTIONS,] }] },
    { type: JwtHelperService }
];
JwtInterceptor = __decorate([
    Injectable(),
    __param(0, Inject(JWT_OPTIONS)),
    __metadata("design:paramtypes", [Object, JwtHelperService])
], JwtInterceptor);
export { JwtInterceptor };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiand0LmludGVyY2VwdG9yLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGF1dGgwL2FuZ3VsYXItand0LyIsInNvdXJjZXMiOlsibGliL2p3dC5pbnRlcmNlcHRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFPbkQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDdkQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRWpELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMxQyxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sS0FBSyxDQUFDO0FBQzVCLE9BQU8sRUFBQyxJQUFJLEVBQWEsTUFBTSxNQUFNLENBQUM7QUFHdEMsSUFBYSxjQUFjLEdBQTNCLE1BQWEsY0FBYztJQVN6QixZQUN1QixNQUFXLEVBQ3pCLFNBQTJCO1FBQTNCLGNBQVMsR0FBVCxTQUFTLENBQWtCO1FBRWxDLElBQUksQ0FBQyxXQUFXLEdBQUcsTUFBTSxDQUFDLFdBQVcsQ0FBQztRQUN0QyxJQUFJLENBQUMsVUFBVSxHQUFHLE1BQU0sQ0FBQyxVQUFVLElBQUksZUFBZSxDQUFDO1FBQ3ZELElBQUksQ0FBQyxVQUFVO1lBQ2IsTUFBTSxDQUFDLFVBQVUsSUFBSSxNQUFNLENBQUMsVUFBVSxLQUFLLEVBQUU7Z0JBQzNDLENBQUMsQ0FBQyxNQUFNLENBQUMsVUFBVTtnQkFDbkIsQ0FBQyxDQUFDLFNBQVMsQ0FBQztRQUNoQixJQUFJLENBQUMsa0JBQWtCLEdBQUcsTUFBTSxDQUFDLGtCQUFrQixJQUFJLEVBQUUsQ0FBQztRQUMxRCxJQUFJLENBQUMsaUJBQWlCLEdBQUcsTUFBTSxDQUFDLGlCQUFpQixJQUFJLEVBQUUsQ0FBQztRQUN4RCxJQUFJLENBQUMsaUJBQWlCLEdBQUcsTUFBTSxDQUFDLGlCQUFpQixJQUFJLEtBQUssQ0FBQztRQUMzRCxJQUFJLENBQUMsZUFBZSxHQUFHLE1BQU0sQ0FBQyxlQUFlLENBQUM7SUFDaEQsQ0FBQztJQUVELG1CQUFtQixDQUFDLE9BQXlCO1FBQzNDLE1BQU0sVUFBVSxHQUFRLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQztRQUV4RCxPQUFPLENBQ0wsVUFBVSxDQUFDLElBQUksS0FBSyxJQUFJO1lBQ3hCLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxTQUFTLENBQy9CLE1BQU0sQ0FBQyxFQUFFLENBQ1AsT0FBTyxNQUFNLEtBQUssUUFBUTtnQkFDeEIsQ0FBQyxDQUFDLE1BQU0sS0FBSyxVQUFVLENBQUMsSUFBSTtnQkFDNUIsQ0FBQyxDQUFDLE1BQU0sWUFBWSxNQUFNO29CQUN4QixDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDO29CQUM5QixDQUFDLENBQUMsS0FBSyxDQUNkLEdBQUcsQ0FBQyxDQUFDLENBQ1AsQ0FBQztJQUNKLENBQUM7SUFFRCxrQkFBa0IsQ0FBQyxPQUF5QjtRQUMxQyxNQUFNLEdBQUcsR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDO1FBRXhCLE9BQU8sQ0FDTCxJQUFJLENBQUMsaUJBQWlCLENBQUMsU0FBUyxDQUM5QixLQUFLLENBQUMsRUFBRSxDQUNOLE9BQU8sS0FBSyxLQUFLLFFBQVE7WUFDdkIsQ0FBQyxDQUFDLEtBQUssS0FBSyxHQUFHO1lBQ2YsQ0FBQyxDQUFDLEtBQUssWUFBWSxNQUFNO2dCQUN2QixDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUM7Z0JBQ2pCLENBQUMsQ0FBQyxLQUFLLENBQ2QsR0FBRyxDQUFDLENBQUMsQ0FDUCxDQUFDO0lBQ0osQ0FBQztJQUVELGtCQUFrQixDQUNoQixLQUFvQixFQUNwQixPQUF5QixFQUN6QixJQUFpQjtRQUVqQixJQUFJLGNBQWMsR0FBRyxLQUFLLENBQUM7UUFFM0IsSUFBSSxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsaUJBQWlCLEVBQUU7WUFDcEMsTUFBTSxJQUFJLEtBQUssQ0FBQyxnREFBZ0QsQ0FBQyxDQUFDO1NBQ25FO1FBRUQsSUFBSSxJQUFJLENBQUMsZUFBZSxFQUFFO1lBQ3hCLGNBQWMsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7U0FDdEU7UUFFRCxJQUFJLEtBQUssSUFBSSxjQUFjLElBQUksSUFBSSxDQUFDLGVBQWUsRUFBRTtZQUNuRCxPQUFPLEdBQUcsT0FBTyxDQUFDLEtBQUssRUFBRSxDQUFDO1NBQzNCO2FBQU0sSUFBSSxLQUFLLEVBQUU7WUFDaEIsT0FBTyxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUM7Z0JBQ3RCLFVBQVUsRUFBRTtvQkFDVixDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxFQUFFO2lCQUNoRDthQUNGLENBQUMsQ0FBQztTQUNKO1FBQ0QsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUFFRCxTQUFTLENBQ1AsT0FBeUIsRUFDekIsSUFBaUI7UUFFakIsSUFDRSxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxPQUFPLENBQUM7WUFDbEMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLE9BQU8sQ0FBQyxFQUNoQztZQUNBLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUM3QjtRQUNELE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUM7UUFFeEMsSUFBSSxLQUFLLFlBQVksT0FBTyxFQUFFO1lBQzVCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQzlCLENBQUMsVUFBeUIsRUFBRSxFQUFFO2dCQUM1QixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxVQUFVLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDO1lBQzVELENBQUMsQ0FDRixDQUFDLENBQUM7U0FDSjthQUFNO1lBQ0wsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsS0FBSyxFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQztTQUN0RDtJQUNILENBQUM7Q0FDRixDQUFBOzs0Q0EvRkksTUFBTSxTQUFDLFdBQVc7WUFDRCxnQkFBZ0I7O0FBWHpCLGNBQWM7SUFEMUIsVUFBVSxFQUFFO0lBV1IsV0FBQSxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUE7NkNBQ0YsZ0JBQWdCO0dBWHpCLGNBQWMsQ0F5RzFCO1NBekdZLGNBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIEh0dHBSZXF1ZXN0LFxuICBIdHRwSGFuZGxlcixcbiAgSHR0cEV2ZW50LFxuICBIdHRwSW50ZXJjZXB0b3Jcbn0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgSnd0SGVscGVyU2VydmljZSB9IGZyb20gJy4vand0aGVscGVyLnNlcnZpY2UnO1xuaW1wb3J0IHsgSldUX09QVElPTlMgfSBmcm9tICcuL2p3dG9wdGlvbnMudG9rZW4nO1xuXG5pbXBvcnQgeyBtZXJnZU1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IHBhcnNlIH0gZnJvbSAndXJsJztcbmltcG9ydCB7ZnJvbSwgT2JzZXJ2YWJsZX0gZnJvbSAncnhqcyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBKd3RJbnRlcmNlcHRvciBpbXBsZW1lbnRzIEh0dHBJbnRlcmNlcHRvciB7XG4gIHRva2VuR2V0dGVyOiAocmVxdWVzdDogSHR0cFJlcXVlc3Q8YW55PikgPT4gc3RyaW5nIHwgbnVsbCB8IFByb21pc2U8c3RyaW5nIHwgbnVsbD47XG4gIGhlYWRlck5hbWU6IHN0cmluZztcbiAgYXV0aFNjaGVtZTogc3RyaW5nO1xuICB3aGl0ZWxpc3RlZERvbWFpbnM6IEFycmF5PHN0cmluZyB8IFJlZ0V4cD47XG4gIGJsYWNrbGlzdGVkUm91dGVzOiBBcnJheTxzdHJpbmcgfCBSZWdFeHA+O1xuICB0aHJvd05vVG9rZW5FcnJvcjogYm9vbGVhbjtcbiAgc2tpcFdoZW5FeHBpcmVkOiBib29sZWFuO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIEBJbmplY3QoSldUX09QVElPTlMpIGNvbmZpZzogYW55LFxuICAgIHB1YmxpYyBqd3RIZWxwZXI6IEp3dEhlbHBlclNlcnZpY2VcbiAgKSB7XG4gICAgdGhpcy50b2tlbkdldHRlciA9IGNvbmZpZy50b2tlbkdldHRlcjtcbiAgICB0aGlzLmhlYWRlck5hbWUgPSBjb25maWcuaGVhZGVyTmFtZSB8fCAnQXV0aG9yaXphdGlvbic7XG4gICAgdGhpcy5hdXRoU2NoZW1lID1cbiAgICAgIGNvbmZpZy5hdXRoU2NoZW1lIHx8IGNvbmZpZy5hdXRoU2NoZW1lID09PSAnJ1xuICAgICAgICA/IGNvbmZpZy5hdXRoU2NoZW1lXG4gICAgICAgIDogJ0JlYXJlciAnO1xuICAgIHRoaXMud2hpdGVsaXN0ZWREb21haW5zID0gY29uZmlnLndoaXRlbGlzdGVkRG9tYWlucyB8fCBbXTtcbiAgICB0aGlzLmJsYWNrbGlzdGVkUm91dGVzID0gY29uZmlnLmJsYWNrbGlzdGVkUm91dGVzIHx8IFtdO1xuICAgIHRoaXMudGhyb3dOb1Rva2VuRXJyb3IgPSBjb25maWcudGhyb3dOb1Rva2VuRXJyb3IgfHwgZmFsc2U7XG4gICAgdGhpcy5za2lwV2hlbkV4cGlyZWQgPSBjb25maWcuc2tpcFdoZW5FeHBpcmVkO1xuICB9XG5cbiAgaXNXaGl0ZWxpc3RlZERvbWFpbihyZXF1ZXN0OiBIdHRwUmVxdWVzdDxhbnk+KTogYm9vbGVhbiB7XG4gICAgY29uc3QgcmVxdWVzdFVybDogYW55ID0gcGFyc2UocmVxdWVzdC51cmwsIGZhbHNlLCB0cnVlKTtcblxuICAgIHJldHVybiAoXG4gICAgICByZXF1ZXN0VXJsLmhvc3QgPT09IG51bGwgfHxcbiAgICAgIHRoaXMud2hpdGVsaXN0ZWREb21haW5zLmZpbmRJbmRleChcbiAgICAgICAgZG9tYWluID0+XG4gICAgICAgICAgdHlwZW9mIGRvbWFpbiA9PT0gJ3N0cmluZydcbiAgICAgICAgICAgID8gZG9tYWluID09PSByZXF1ZXN0VXJsLmhvc3RcbiAgICAgICAgICAgIDogZG9tYWluIGluc3RhbmNlb2YgUmVnRXhwXG4gICAgICAgICAgICAgID8gZG9tYWluLnRlc3QocmVxdWVzdFVybC5ob3N0KVxuICAgICAgICAgICAgICA6IGZhbHNlXG4gICAgICApID4gLTFcbiAgICApO1xuICB9XG5cbiAgaXNCbGFja2xpc3RlZFJvdXRlKHJlcXVlc3Q6IEh0dHBSZXF1ZXN0PGFueT4pOiBib29sZWFuIHtcbiAgICBjb25zdCB1cmwgPSByZXF1ZXN0LnVybDtcblxuICAgIHJldHVybiAoXG4gICAgICB0aGlzLmJsYWNrbGlzdGVkUm91dGVzLmZpbmRJbmRleChcbiAgICAgICAgcm91dGUgPT5cbiAgICAgICAgICB0eXBlb2Ygcm91dGUgPT09ICdzdHJpbmcnXG4gICAgICAgICAgICA/IHJvdXRlID09PSB1cmxcbiAgICAgICAgICAgIDogcm91dGUgaW5zdGFuY2VvZiBSZWdFeHBcbiAgICAgICAgICAgICAgPyByb3V0ZS50ZXN0KHVybClcbiAgICAgICAgICAgICAgOiBmYWxzZVxuICAgICAgKSA+IC0xXG4gICAgKTtcbiAgfVxuXG4gIGhhbmRsZUludGVyY2VwdGlvbihcbiAgICB0b2tlbjogc3RyaW5nIHwgbnVsbCxcbiAgICByZXF1ZXN0OiBIdHRwUmVxdWVzdDxhbnk+LFxuICAgIG5leHQ6IEh0dHBIYW5kbGVyXG4gICkge1xuICAgIGxldCB0b2tlbklzRXhwaXJlZCA9IGZhbHNlO1xuXG4gICAgaWYgKCF0b2tlbiAmJiB0aGlzLnRocm93Tm9Ub2tlbkVycm9yKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NvdWxkIG5vdCBnZXQgdG9rZW4gZnJvbSB0b2tlbkdldHRlciBmdW5jdGlvbi4nKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5za2lwV2hlbkV4cGlyZWQpIHtcbiAgICAgIHRva2VuSXNFeHBpcmVkID0gdG9rZW4gPyB0aGlzLmp3dEhlbHBlci5pc1Rva2VuRXhwaXJlZCh0b2tlbikgOiB0cnVlO1xuICAgIH1cblxuICAgIGlmICh0b2tlbiAmJiB0b2tlbklzRXhwaXJlZCAmJiB0aGlzLnNraXBXaGVuRXhwaXJlZCkge1xuICAgICAgcmVxdWVzdCA9IHJlcXVlc3QuY2xvbmUoKTtcbiAgICB9IGVsc2UgaWYgKHRva2VuKSB7XG4gICAgICByZXF1ZXN0ID0gcmVxdWVzdC5jbG9uZSh7XG4gICAgICAgIHNldEhlYWRlcnM6IHtcbiAgICAgICAgICBbdGhpcy5oZWFkZXJOYW1lXTogYCR7dGhpcy5hdXRoU2NoZW1lfSR7dG9rZW59YFxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIG5leHQuaGFuZGxlKHJlcXVlc3QpO1xuICB9XG5cbiAgaW50ZXJjZXB0KFxuICAgIHJlcXVlc3Q6IEh0dHBSZXF1ZXN0PGFueT4sXG4gICAgbmV4dDogSHR0cEhhbmRsZXJcbiAgKTogT2JzZXJ2YWJsZTxIdHRwRXZlbnQ8YW55Pj4ge1xuICAgIGlmIChcbiAgICAgICF0aGlzLmlzV2hpdGVsaXN0ZWREb21haW4ocmVxdWVzdCkgfHxcbiAgICAgIHRoaXMuaXNCbGFja2xpc3RlZFJvdXRlKHJlcXVlc3QpXG4gICAgKSB7XG4gICAgICByZXR1cm4gbmV4dC5oYW5kbGUocmVxdWVzdCk7XG4gICAgfVxuICAgIGNvbnN0IHRva2VuID0gdGhpcy50b2tlbkdldHRlcihyZXF1ZXN0KTtcblxuICAgIGlmICh0b2tlbiBpbnN0YW5jZW9mIFByb21pc2UpIHtcbiAgICAgIHJldHVybiBmcm9tKHRva2VuKS5waXBlKG1lcmdlTWFwKFxuICAgICAgICAoYXN5bmNUb2tlbjogc3RyaW5nIHwgbnVsbCkgPT4ge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhhbmRsZUludGVyY2VwdGlvbihhc3luY1Rva2VuLCByZXF1ZXN0LCBuZXh0KTtcbiAgICAgICAgfVxuICAgICAgKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZUludGVyY2VwdGlvbih0b2tlbiwgcmVxdWVzdCwgbmV4dCk7XG4gICAgfVxuICB9XG59XG4iXX0=
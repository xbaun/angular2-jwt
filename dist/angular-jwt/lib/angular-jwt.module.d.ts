import { ModuleWithProviders, Provider } from '@angular/core';
import { HttpRequest } from '@angular/common/http';
export interface JwtModuleOptions {
    jwtOptionsProvider?: Provider;
    config?: {
        tokenGetter?: (request: HttpRequest<any>) => string | null | Promise<string | null>;
        headerName?: string;
        authScheme?: string;
        whitelistedDomains?: Array<string | RegExp>;
        blacklistedRoutes?: Array<string | RegExp>;
        throwNoTokenError?: boolean;
        skipWhenExpired?: boolean;
    };
}
export declare class JwtModule {
    constructor(parentModule: JwtModule);
    static forRoot(options: JwtModuleOptions): ModuleWithProviders<JwtModule>;
}

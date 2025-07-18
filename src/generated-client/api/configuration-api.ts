/* tslint:disable */
/* eslint-disable */
/**
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * Do not edit the class manually.
 *
 * Jellyfin API
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */


import type { Configuration } from '../configuration';
import type { AxiosPromise, AxiosInstance, RawAxiosRequestConfig } from 'axios';
import globalAxios from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, type RequestArgs, BaseAPI, RequiredError, operationServerMap } from '../base';
// @ts-ignore
import type { BrandingOptionsDto } from '../models';
// @ts-ignore
import type { MetadataOptions } from '../models';
// @ts-ignore
import type { ServerConfiguration } from '../models';
/**
 * ConfigurationApi - axios parameter creator
 * @export
 */
export const ConfigurationApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Gets application configuration.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getConfiguration: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/System/Configuration`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication CustomAuthentication required
            await setApiKeyToObject(localVarHeaderParameter, "Authorization", configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Gets a default MetadataOptions object.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getDefaultMetadataOptions: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/System/Configuration/MetadataOptions/Default`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication CustomAuthentication required
            await setApiKeyToObject(localVarHeaderParameter, "Authorization", configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Gets a named configuration.
         * @param {string} key Configuration key.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getNamedConfiguration: async (key: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'key' is not null or undefined
            assertParamExists('getNamedConfiguration', 'key', key)
            const localVarPath = `/System/Configuration/{key}`
                .replace(`{${"key"}}`, encodeURIComponent(String(key)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication CustomAuthentication required
            await setApiKeyToObject(localVarHeaderParameter, "Authorization", configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Updates branding configuration.
         * @param {BrandingOptionsDto} brandingOptionsDto Branding configuration.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateBrandingConfiguration: async (brandingOptionsDto: BrandingOptionsDto, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'brandingOptionsDto' is not null or undefined
            assertParamExists('updateBrandingConfiguration', 'brandingOptionsDto', brandingOptionsDto)
            const localVarPath = `/System/Configuration/Branding`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication CustomAuthentication required
            await setApiKeyToObject(localVarHeaderParameter, "Authorization", configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(brandingOptionsDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Updates application configuration.
         * @param {ServerConfiguration} serverConfiguration Configuration.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateConfiguration: async (serverConfiguration: ServerConfiguration, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'serverConfiguration' is not null or undefined
            assertParamExists('updateConfiguration', 'serverConfiguration', serverConfiguration)
            const localVarPath = `/System/Configuration`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication CustomAuthentication required
            await setApiKeyToObject(localVarHeaderParameter, "Authorization", configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(serverConfiguration, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Updates named configuration.
         * @param {string} key Configuration key.
         * @param {any} body Configuration.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateNamedConfiguration: async (key: string, body: any, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'key' is not null or undefined
            assertParamExists('updateNamedConfiguration', 'key', key)
            // verify required parameter 'body' is not null or undefined
            assertParamExists('updateNamedConfiguration', 'body', body)
            const localVarPath = `/System/Configuration/{key}`
                .replace(`{${"key"}}`, encodeURIComponent(String(key)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication CustomAuthentication required
            await setApiKeyToObject(localVarHeaderParameter, "Authorization", configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(body, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * ConfigurationApi - functional programming interface
 * @export
 */
export const ConfigurationApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = ConfigurationApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Gets application configuration.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getConfiguration(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ServerConfiguration>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getConfiguration(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ConfigurationApi.getConfiguration']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @summary Gets a default MetadataOptions object.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getDefaultMetadataOptions(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<MetadataOptions>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getDefaultMetadataOptions(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ConfigurationApi.getDefaultMetadataOptions']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @summary Gets a named configuration.
         * @param {string} key Configuration key.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getNamedConfiguration(key: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<File>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getNamedConfiguration(key, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ConfigurationApi.getNamedConfiguration']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @summary Updates branding configuration.
         * @param {BrandingOptionsDto} brandingOptionsDto Branding configuration.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateBrandingConfiguration(brandingOptionsDto: BrandingOptionsDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateBrandingConfiguration(brandingOptionsDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ConfigurationApi.updateBrandingConfiguration']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @summary Updates application configuration.
         * @param {ServerConfiguration} serverConfiguration Configuration.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateConfiguration(serverConfiguration: ServerConfiguration, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateConfiguration(serverConfiguration, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ConfigurationApi.updateConfiguration']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @summary Updates named configuration.
         * @param {string} key Configuration key.
         * @param {any} body Configuration.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateNamedConfiguration(key: string, body: any, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateNamedConfiguration(key, body, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ConfigurationApi.updateNamedConfiguration']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * ConfigurationApi - factory interface
 * @export
 */
export const ConfigurationApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = ConfigurationApiFp(configuration)
    return {
        /**
         * 
         * @summary Gets application configuration.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getConfiguration(options?: RawAxiosRequestConfig): AxiosPromise<ServerConfiguration> {
            return localVarFp.getConfiguration(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Gets a default MetadataOptions object.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getDefaultMetadataOptions(options?: RawAxiosRequestConfig): AxiosPromise<MetadataOptions> {
            return localVarFp.getDefaultMetadataOptions(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Gets a named configuration.
         * @param {ConfigurationApiGetNamedConfigurationRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getNamedConfiguration(requestParameters: ConfigurationApiGetNamedConfigurationRequest, options?: RawAxiosRequestConfig): AxiosPromise<File> {
            return localVarFp.getNamedConfiguration(requestParameters.key, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Updates branding configuration.
         * @param {ConfigurationApiUpdateBrandingConfigurationRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateBrandingConfiguration(requestParameters: ConfigurationApiUpdateBrandingConfigurationRequest, options?: RawAxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.updateBrandingConfiguration(requestParameters.brandingOptionsDto, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Updates application configuration.
         * @param {ConfigurationApiUpdateConfigurationRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateConfiguration(requestParameters: ConfigurationApiUpdateConfigurationRequest, options?: RawAxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.updateConfiguration(requestParameters.serverConfiguration, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Updates named configuration.
         * @param {ConfigurationApiUpdateNamedConfigurationRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateNamedConfiguration(requestParameters: ConfigurationApiUpdateNamedConfigurationRequest, options?: RawAxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.updateNamedConfiguration(requestParameters.key, requestParameters.body, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for getNamedConfiguration operation in ConfigurationApi.
 * @export
 * @interface ConfigurationApiGetNamedConfigurationRequest
 */
export interface ConfigurationApiGetNamedConfigurationRequest {
    /**
     * Configuration key.
     * @type {string}
     * @memberof ConfigurationApiGetNamedConfiguration
     */
    readonly key: string
}

/**
 * Request parameters for updateBrandingConfiguration operation in ConfigurationApi.
 * @export
 * @interface ConfigurationApiUpdateBrandingConfigurationRequest
 */
export interface ConfigurationApiUpdateBrandingConfigurationRequest {
    /**
     * Branding configuration.
     * @type {BrandingOptionsDto}
     * @memberof ConfigurationApiUpdateBrandingConfiguration
     */
    readonly brandingOptionsDto: BrandingOptionsDto
}

/**
 * Request parameters for updateConfiguration operation in ConfigurationApi.
 * @export
 * @interface ConfigurationApiUpdateConfigurationRequest
 */
export interface ConfigurationApiUpdateConfigurationRequest {
    /**
     * Configuration.
     * @type {ServerConfiguration}
     * @memberof ConfigurationApiUpdateConfiguration
     */
    readonly serverConfiguration: ServerConfiguration
}

/**
 * Request parameters for updateNamedConfiguration operation in ConfigurationApi.
 * @export
 * @interface ConfigurationApiUpdateNamedConfigurationRequest
 */
export interface ConfigurationApiUpdateNamedConfigurationRequest {
    /**
     * Configuration key.
     * @type {string}
     * @memberof ConfigurationApiUpdateNamedConfiguration
     */
    readonly key: string

    /**
     * Configuration.
     * @type {any}
     * @memberof ConfigurationApiUpdateNamedConfiguration
     */
    readonly body: any
}

/**
 * ConfigurationApi - object-oriented interface
 * @export
 * @class ConfigurationApi
 * @extends {BaseAPI}
 */
export class ConfigurationApi extends BaseAPI {
    /**
     * 
     * @summary Gets application configuration.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ConfigurationApi
     */
    public getConfiguration(options?: RawAxiosRequestConfig) {
        return ConfigurationApiFp(this.configuration).getConfiguration(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Gets a default MetadataOptions object.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ConfigurationApi
     */
    public getDefaultMetadataOptions(options?: RawAxiosRequestConfig) {
        return ConfigurationApiFp(this.configuration).getDefaultMetadataOptions(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Gets a named configuration.
     * @param {ConfigurationApiGetNamedConfigurationRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ConfigurationApi
     */
    public getNamedConfiguration(requestParameters: ConfigurationApiGetNamedConfigurationRequest, options?: RawAxiosRequestConfig) {
        return ConfigurationApiFp(this.configuration).getNamedConfiguration(requestParameters.key, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Updates branding configuration.
     * @param {ConfigurationApiUpdateBrandingConfigurationRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ConfigurationApi
     */
    public updateBrandingConfiguration(requestParameters: ConfigurationApiUpdateBrandingConfigurationRequest, options?: RawAxiosRequestConfig) {
        return ConfigurationApiFp(this.configuration).updateBrandingConfiguration(requestParameters.brandingOptionsDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Updates application configuration.
     * @param {ConfigurationApiUpdateConfigurationRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ConfigurationApi
     */
    public updateConfiguration(requestParameters: ConfigurationApiUpdateConfigurationRequest, options?: RawAxiosRequestConfig) {
        return ConfigurationApiFp(this.configuration).updateConfiguration(requestParameters.serverConfiguration, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Updates named configuration.
     * @param {ConfigurationApiUpdateNamedConfigurationRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ConfigurationApi
     */
    public updateNamedConfiguration(requestParameters: ConfigurationApiUpdateNamedConfigurationRequest, options?: RawAxiosRequestConfig) {
        return ConfigurationApiFp(this.configuration).updateNamedConfiguration(requestParameters.key, requestParameters.body, options).then((request) => request(this.axios, this.basePath));
    }
}


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


// May contain unused imports in some cases
// @ts-ignore
import type { ClientCapabilitiesDto } from './client-capabilities-dto';

/**
 * A DTO representing device information.
 * @export
 * @interface DeviceInfoDto
 */
export interface DeviceInfoDto {
    /**
     * Gets or sets the name.
     * @type {string}
     * @memberof DeviceInfoDto
     */
    'Name'?: string | null;
    /**
     * Gets or sets the custom name.
     * @type {string}
     * @memberof DeviceInfoDto
     */
    'CustomName'?: string | null;
    /**
     * Gets or sets the access token.
     * @type {string}
     * @memberof DeviceInfoDto
     */
    'AccessToken'?: string | null;
    /**
     * Gets or sets the identifier.
     * @type {string}
     * @memberof DeviceInfoDto
     */
    'Id'?: string | null;
    /**
     * Gets or sets the last name of the user.
     * @type {string}
     * @memberof DeviceInfoDto
     */
    'LastUserName'?: string | null;
    /**
     * Gets or sets the name of the application.
     * @type {string}
     * @memberof DeviceInfoDto
     */
    'AppName'?: string | null;
    /**
     * Gets or sets the application version.
     * @type {string}
     * @memberof DeviceInfoDto
     */
    'AppVersion'?: string | null;
    /**
     * Gets or sets the last user identifier.
     * @type {string}
     * @memberof DeviceInfoDto
     */
    'LastUserId'?: string | null;
    /**
     * Gets or sets the date last modified.
     * @type {string}
     * @memberof DeviceInfoDto
     */
    'DateLastActivity'?: string | null;
    /**
     * 
     * @type {ClientCapabilitiesDto}
     * @memberof DeviceInfoDto
     */
    'Capabilities'?: ClientCapabilitiesDto;
    /**
     * Gets or sets the icon URL.
     * @type {string}
     * @memberof DeviceInfoDto
     */
    'IconUrl'?: string | null;
}


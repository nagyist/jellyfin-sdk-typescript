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


import { InstallationInfo } from './installation-info';
import { SessionMessageType } from './session-message-type';

/**
 * Plugin installation cancelled message.
 * @export
 * @interface PluginInstallationCancelledMessage
 */
export interface PluginInstallationCancelledMessage {
    /**
     * 
     * @type {InstallationInfo}
     * @memberof PluginInstallationCancelledMessage
     */
    'Data'?: InstallationInfo;
    /**
     * Gets or sets the message id.
     * @type {string}
     * @memberof PluginInstallationCancelledMessage
     */
    'MessageId'?: string;
    /**
     * 
     * @type {SessionMessageType}
     * @memberof PluginInstallationCancelledMessage
     */
    'MessageType'?: SessionMessageType;
}


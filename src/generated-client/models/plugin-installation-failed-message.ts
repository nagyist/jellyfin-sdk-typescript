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
 * Plugin installation failed message.
 * @export
 * @interface PluginInstallationFailedMessage
 */
export interface PluginInstallationFailedMessage {
    /**
     * 
     * @type {InstallationInfo}
     * @memberof PluginInstallationFailedMessage
     */
    'Data'?: InstallationInfo;
    /**
     * Gets or sets the message id.
     * @type {string}
     * @memberof PluginInstallationFailedMessage
     */
    'MessageId'?: string;
    /**
     * 
     * @type {SessionMessageType}
     * @memberof PluginInstallationFailedMessage
     */
    'MessageType'?: SessionMessageType;
}

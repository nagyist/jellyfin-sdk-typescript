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
import type { GroupUpdate } from './group-update';
// May contain unused imports in some cases
// @ts-ignore
import type { SessionMessageType } from './session-message-type';

/**
 * Untyped sync play command.
 * @export
 * @interface SyncPlayGroupUpdateMessage
 */
export interface SyncPlayGroupUpdateMessage {
    /**
     * 
     * @type {GroupUpdate}
     * @memberof SyncPlayGroupUpdateMessage
     */
    'Data'?: GroupUpdate;
    /**
     * Gets or sets the message id.
     * @type {string}
     * @memberof SyncPlayGroupUpdateMessage
     */
    'MessageId'?: string;
    /**
     * 
     * @type {SessionMessageType}
     * @memberof SyncPlayGroupUpdateMessage
     */
    'MessageType'?: SessionMessageType;
}




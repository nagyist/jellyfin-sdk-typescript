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
import type { GroupUpdateType } from './group-update-type';
// May contain unused imports in some cases
// @ts-ignore
import type { PlayQueueUpdate } from './play-queue-update';

/**
 * 
 * @export
 * @interface SyncPlayPlayQueueUpdate
 */
export interface SyncPlayPlayQueueUpdate {
    /**
     * Gets the group identifier.
     * @type {string}
     * @memberof SyncPlayPlayQueueUpdate
     */
    'GroupId'?: string;
    /**
     * 
     * @type {PlayQueueUpdate}
     * @memberof SyncPlayPlayQueueUpdate
     */
    'Data'?: PlayQueueUpdate;
    /**
     * 
     * @type {GroupUpdateType}
     * @memberof SyncPlayPlayQueueUpdate
     */
    'Type'?: GroupUpdateType;
}




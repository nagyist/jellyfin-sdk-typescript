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



/**
 * Enum containing tonemapping algorithms.
 * @export
 * @enum {string}
 */

export const TonemappingAlgorithm = {
    None: 'none',
    Clip: 'clip',
    Linear: 'linear',
    Gamma: 'gamma',
    Reinhard: 'reinhard',
    Hable: 'hable',
    Mobius: 'mobius',
    Bt2390: 'bt2390'
} as const;

export type TonemappingAlgorithm = typeof TonemappingAlgorithm[keyof typeof TonemappingAlgorithm];



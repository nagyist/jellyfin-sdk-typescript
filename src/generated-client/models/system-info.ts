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


import { Architecture } from './architecture';
import { CastReceiverApplication } from './cast-receiver-application';
import { FFmpegLocation } from './ffmpeg-location';
import { InstallationInfo } from './installation-info';

/**
 * Class SystemInfo.
 * @export
 * @interface SystemInfo
 */
export interface SystemInfo {
    /**
     * Gets or sets the local address.
     * @type {string}
     * @memberof SystemInfo
     */
    'LocalAddress'?: string | null;
    /**
     * Gets or sets the name of the server.
     * @type {string}
     * @memberof SystemInfo
     */
    'ServerName'?: string | null;
    /**
     * Gets or sets the server version.
     * @type {string}
     * @memberof SystemInfo
     */
    'Version'?: string | null;
    /**
     * Gets or sets the product name. This is the AssemblyProduct name.
     * @type {string}
     * @memberof SystemInfo
     */
    'ProductName'?: string | null;
    /**
     * Gets or sets the operating system.
     * @type {string}
     * @memberof SystemInfo
     * @deprecated
     */
    'OperatingSystem'?: string | null;
    /**
     * Gets or sets the id.
     * @type {string}
     * @memberof SystemInfo
     */
    'Id'?: string | null;
    /**
     * Gets or sets a value indicating whether the startup wizard is completed.
     * @type {boolean}
     * @memberof SystemInfo
     */
    'StartupWizardCompleted'?: boolean | null;
    /**
     * Gets or sets the display name of the operating system.
     * @type {string}
     * @memberof SystemInfo
     * @deprecated
     */
    'OperatingSystemDisplayName'?: string | null;
    /**
     * Gets or sets the package name.
     * @type {string}
     * @memberof SystemInfo
     */
    'PackageName'?: string | null;
    /**
     * Gets or sets a value indicating whether this instance has pending restart.
     * @type {boolean}
     * @memberof SystemInfo
     */
    'HasPendingRestart'?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof SystemInfo
     */
    'IsShuttingDown'?: boolean;
    /**
     * Gets or sets a value indicating whether [supports library monitor].
     * @type {boolean}
     * @memberof SystemInfo
     */
    'SupportsLibraryMonitor'?: boolean;
    /**
     * Gets or sets the web socket port number.
     * @type {number}
     * @memberof SystemInfo
     */
    'WebSocketPortNumber'?: number;
    /**
     * Gets or sets the completed installations.
     * @type {Array<InstallationInfo>}
     * @memberof SystemInfo
     */
    'CompletedInstallations'?: Array<InstallationInfo> | null;
    /**
     * Gets or sets a value indicating whether this instance can self restart.
     * @type {boolean}
     * @memberof SystemInfo
     * @deprecated
     */
    'CanSelfRestart'?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof SystemInfo
     * @deprecated
     */
    'CanLaunchWebBrowser'?: boolean;
    /**
     * Gets or sets the program data path.
     * @type {string}
     * @memberof SystemInfo
     */
    'ProgramDataPath'?: string | null;
    /**
     * Gets or sets the web UI resources path.
     * @type {string}
     * @memberof SystemInfo
     */
    'WebPath'?: string | null;
    /**
     * Gets or sets the items by name path.
     * @type {string}
     * @memberof SystemInfo
     */
    'ItemsByNamePath'?: string | null;
    /**
     * Gets or sets the cache path.
     * @type {string}
     * @memberof SystemInfo
     */
    'CachePath'?: string | null;
    /**
     * Gets or sets the log path.
     * @type {string}
     * @memberof SystemInfo
     */
    'LogPath'?: string | null;
    /**
     * Gets or sets the internal metadata path.
     * @type {string}
     * @memberof SystemInfo
     */
    'InternalMetadataPath'?: string | null;
    /**
     * Gets or sets the transcode path.
     * @type {string}
     * @memberof SystemInfo
     */
    'TranscodingTempPath'?: string | null;
    /**
     * Gets or sets the list of cast receiver applications.
     * @type {Array<CastReceiverApplication>}
     * @memberof SystemInfo
     */
    'CastReceiverApplications'?: Array<CastReceiverApplication> | null;
    /**
     * Gets or sets a value indicating whether this instance has update available.
     * @type {boolean}
     * @memberof SystemInfo
     * @deprecated
     */
    'HasUpdateAvailable'?: boolean;
    /**
     * 
     * @type {FFmpegLocation}
     * @memberof SystemInfo
     */
    'EncoderLocation'?: FFmpegLocation;
    /**
     * 
     * @type {Architecture}
     * @memberof SystemInfo
     */
    'SystemArchitecture'?: Architecture;
}


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
 * This exists simply to identify a set of known commands.
 * @export
 * @enum {string}
 */

export const GeneralCommandType = {
    MoveUp: 'MoveUp',
    MoveDown: 'MoveDown',
    MoveLeft: 'MoveLeft',
    MoveRight: 'MoveRight',
    PageUp: 'PageUp',
    PageDown: 'PageDown',
    PreviousLetter: 'PreviousLetter',
    NextLetter: 'NextLetter',
    ToggleOsd: 'ToggleOsd',
    ToggleContextMenu: 'ToggleContextMenu',
    Select: 'Select',
    Back: 'Back',
    TakeScreenshot: 'TakeScreenshot',
    SendKey: 'SendKey',
    SendString: 'SendString',
    GoHome: 'GoHome',
    GoToSettings: 'GoToSettings',
    VolumeUp: 'VolumeUp',
    VolumeDown: 'VolumeDown',
    Mute: 'Mute',
    Unmute: 'Unmute',
    ToggleMute: 'ToggleMute',
    SetVolume: 'SetVolume',
    SetAudioStreamIndex: 'SetAudioStreamIndex',
    SetSubtitleStreamIndex: 'SetSubtitleStreamIndex',
    ToggleFullscreen: 'ToggleFullscreen',
    DisplayContent: 'DisplayContent',
    GoToSearch: 'GoToSearch',
    DisplayMessage: 'DisplayMessage',
    SetRepeatMode: 'SetRepeatMode',
    ChannelUp: 'ChannelUp',
    ChannelDown: 'ChannelDown',
    Guide: 'Guide',
    ToggleStats: 'ToggleStats',
    PlayMediaSource: 'PlayMediaSource',
    PlayTrailers: 'PlayTrailers',
    SetShuffleQueue: 'SetShuffleQueue',
    PlayState: 'PlayState',
    PlayNext: 'PlayNext',
    ToggleOsdMenu: 'ToggleOsdMenu',
    Play: 'Play',
    SetMaxStreamingBitrate: 'SetMaxStreamingBitrate',
    SetPlaybackOrder: 'SetPlaybackOrder'
} as const;

export type GeneralCommandType = typeof GeneralCommandType[keyof typeof GeneralCommandType];




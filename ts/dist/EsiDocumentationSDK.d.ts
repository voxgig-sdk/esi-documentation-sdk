import { AssetEntity } from './entity/AssetEntity';
import { CharacterEntity } from './entity/CharacterEntity';
import { StructureEntity } from './entity/StructureEntity';
export type * from './EsiDocumentationTypes';
import { inspect } from 'node:util';
import type { Context, Feature } from './types';
import { config } from './Config';
import { EsiDocumentationEntityBase } from './EsiDocumentationEntityBase';
import { Utility } from './utility/Utility';
import { BaseFeature } from './feature/base/BaseFeature';
declare const stdutil: Utility;
declare class EsiDocumentationSDK {
    _mode: string;
    _options: any;
    _utility: Utility;
    _features: Feature[];
    _rootctx: Context;
    constructor(options?: any);
    options(): any;
    utility(): any;
    prepare(fetchargs?: any): Promise<any>;
    direct(fetchargs?: any): Promise<Error | {
        ok: boolean;
        status: number;
        headers: any;
        data: any;
        err?: undefined;
    } | {
        ok: boolean;
        err: any;
        status?: undefined;
        headers?: undefined;
        data?: undefined;
    }>;
    _rawRequest(fetchargs?: any): Promise<Error | {
        ok: boolean;
        status: number;
        headers: any;
        data: any;
        err?: undefined;
    } | {
        ok: boolean;
        err: any;
        status?: undefined;
        headers?: undefined;
        data?: undefined;
    }>;
    graphql(query: string, variables?: any, ctrl?: any): Promise<any>;
    Asset(entopts?: Record<string, any>): AssetEntity;
    Character(entopts?: Record<string, any>): CharacterEntity;
    Structure(entopts?: Record<string, any>): StructureEntity;
    static test(testoptsarg?: any, sdkoptsarg?: any): EsiDocumentationSDK;
    tester(testopts?: any, sdkopts?: any): EsiDocumentationSDK;
    toJSON(): {
        name: string;
    };
    toString(): string;
    [inspect.custom](): string;
}
declare const SDK: typeof EsiDocumentationSDK;
export { stdutil, config, BaseFeature, EsiDocumentationEntityBase, EsiDocumentationSDK, SDK, };

import { EsiDocumentationEntityBase } from '../EsiDocumentationEntityBase';
import type { EsiDocumentationSDK } from '../EsiDocumentationSDK';
import type { Control } from '../types';
import type { Asset, AssetListMatch } from '../EsiDocumentationTypes';
declare class AssetEntity extends EsiDocumentationEntityBase<Asset> {
    constructor(client: EsiDocumentationSDK, entopts: any);
    make(this: AssetEntity): AssetEntity;
    list(this: any, reqmatch?: AssetListMatch, ctrl?: Control): Promise<AssetEntity[]>;
}
export { AssetEntity };

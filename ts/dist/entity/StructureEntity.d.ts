import { EsiDocumentationEntityBase } from '../EsiDocumentationEntityBase';
import type { EsiDocumentationSDK } from '../EsiDocumentationSDK';
import type { Control } from '../types';
import type { Structure, StructureLoadMatch } from '../EsiDocumentationTypes';
declare class StructureEntity extends EsiDocumentationEntityBase<Structure> {
    constructor(client: EsiDocumentationSDK, entopts: any);
    make(this: StructureEntity): StructureEntity;
    load(this: any, reqmatch?: StructureLoadMatch, ctrl?: Control): Promise<StructureEntity>;
}
export { StructureEntity };

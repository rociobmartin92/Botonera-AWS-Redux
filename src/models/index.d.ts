import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection } from "@aws-amplify/datastore";





type EagerAuthors = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Authors, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly profile_image?: string | null;
  readonly created_at?: string | null;
  readonly AuthorsAudios?: (Audios | null)[] | null;
  readonly updated_at?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyAuthors = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Authors, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly profile_image?: string | null;
  readonly created_at?: string | null;
  readonly AuthorsAudios: AsyncCollection<Audios>;
  readonly updated_at?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Authors = LazyLoading extends LazyLoadingDisabled ? EagerAuthors : LazyAuthors

export declare const Authors: (new (init: ModelInit<Authors>) => Authors) & {
  copyOf(source: Authors, mutator: (draft: MutableModel<Authors>) => MutableModel<Authors> | void): Authors;
}

type EagerAudios = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Audios, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title?: string | null;
  readonly duration?: number | null;
  readonly created_at?: string | null;
  readonly updated_at?: string | null;
  readonly created_by?: string | null;
  readonly updated_by?: string | null;
  readonly authorID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyAudios = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Audios, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title?: string | null;
  readonly duration?: number | null;
  readonly created_at?: string | null;
  readonly updated_at?: string | null;
  readonly created_by?: string | null;
  readonly updated_by?: string | null;
  readonly authorID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Audios = LazyLoading extends LazyLoadingDisabled ? EagerAudios : LazyAudios

export declare const Audios: (new (init: ModelInit<Audios>) => Audios) & {
  copyOf(source: Audios, mutator: (draft: MutableModel<Audios>) => MutableModel<Audios> | void): Audios;
}
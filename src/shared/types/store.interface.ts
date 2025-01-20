export interface IStore {
  id: string;
  name: string;
  description: string;
}

export interface IStoreCreate extends Pick<IStore, "title"> {}
export interface IStoreEdit extends Omit<IStore, "id"> {}

// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Authors, Audios } = initSchema(schema);

export {
  Authors,
  Audios
};
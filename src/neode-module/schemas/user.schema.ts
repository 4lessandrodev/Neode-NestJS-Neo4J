import { SchemaObject } from 'neode';

const UserSchema: SchemaObject = {
  id: {
    type: 'uuid',
    primary: true,
    required: true,
  },
  name: {
    type: 'string',
    /**
     * @todo Remove indexed comment when pull request #151 be merged
     * @description on typescript handle error on try indexed schema attribute on neo4j 
     */
   /*  indexed: true, */
    required: true,
  },
  email: {
    type: 'string',
  /*   indexed: true, */
    unique: true,
    required: true,
  },
  password: { type: 'string', required: true },
  avatar: {
    type: 'string'
  },
  isFirstAuth: {
    type: 'boolean'
  },
};

export default UserSchema;

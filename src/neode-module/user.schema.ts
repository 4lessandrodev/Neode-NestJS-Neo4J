import { SchemaObject } from 'neode';
export const UserSchema: SchemaObject = {
  id: {
    type: 'uuid',
    primary: true,
    required: true,
  },
  name: {
    type: 'string',
    indexed: true,
    required: true,
  },
  email: {
    type: 'string',
    indexed: true,
    unique: true,
    required: true,
  },
  password: { type: 'string', required: true },
  avatar: 'string',
  firstAuth: 'boolean',
  confirmedEmail: 'boolean',
};

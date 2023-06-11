const userSchema = {
    type: 'object',
    properties: {
      id_user: { type: 'integer' },
      name_user: { type: 'string', maxLength: 100 },
      email: { type: 'string', format: 'email', maxLength: 100 },
      pass: { type: 'string', maxLength: 255, pattern: '^(?=.*[A-Z])(?=.*\\d)(?!.*\\s).+$'},
      estatus: { type: 'integer', default: 1 },
      id_role: { type: 'integer' }
    },
    required: ['name_user', 'email', 'pass', 'id_role'],
    additionalProperties: false
};

module.exports = userSchema;
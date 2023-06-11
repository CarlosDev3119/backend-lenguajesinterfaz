
const role =  {
    type: "object",
    properties: {
        id_role: { type: 'integer' },
        name_role: { 
            type: 'string', 
            maxLength: 30,
            pattern: '^[a-z]+$'
        }
    },
    required: ['name_role']
}

module.exports = role;

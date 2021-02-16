<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Validation Language Lines
    |--------------------------------------------------------------------------
    |
    | The following language lines contain the default error messages used by
    | the validator class. Some of these rules have multiple versions such
    | as the size rules. Feel free to tweak each of these messages here.
    |
    */
    'required' => 'Kotak input :attribute harus diisi.',
    'same' => ':attribute dan :other harus sama.',
    'confirmed' => 'Konfirmasi :attribute tidak cocok.',
    'email' => ':attribute harus menggunakan format email yang valid.',
    'min' => [
        'numeric' => ':attribute harus lebih dari :min.',
        'file' => ':attribute harus lebih dari :min Kb.',
        'string' => ':attribute harus lebih dari :min karakter.',
        'array' => ':attribute harus lebih dari :min item.',
    ],
    'max' => [
        'numeric' => ':attribute tidak boleh lebih dari :min.',
        'file' => ':attribute tidak boleh lebih dari :min Kb.',
        'string' => ':attribute tidak boleh lebih dari :min karakter.',
        'array' => ':attribute tidak boleh lebih dari :min item.',
    ],
    
    'unique' => ':attribute sudah pernah digunakan.',
    
    /*
    |--------------------------------------------------------------------------
    | Custom Validation Language Lines
    |--------------------------------------------------------------------------
    |
    | Here you may specify custom validation messages for attributes using the
    | convention "attribute.rule" to name the lines. This makes it quick to
    | specify a specific custom language line for a given attribute rule.
    |
    */

    'custom' => [
        'attribute-name' => [
            'rule-name' => 'custom-message',
        ],
    ],

    /*
    |--------------------------------------------------------------------------
    | Custom Validation Attributes
    |--------------------------------------------------------------------------
    |
    | The following language lines are used to swap our attribute placeholder
    | with something more reader friendly such as "E-Mail Address" instead
    | of "email". This simply helps us make our message more expressive.
    |
    */

    'attributes' => [],

];

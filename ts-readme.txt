since we have typing now

inside tsconfig.json we have this now to resolve our imports

"typeRoots": [
    "./node_modules/@types",
    "./@types",
]

dont need "./@types" directory 
if you just npm install @types/react...

this is saying you can have npm install @types/react
and if it is already inside our node modules, it'll use that
other than that we can set our own type by declaring them as modules

declare module 'react';
declare module 'redux';

to use these modules in our code we can do:

import * as React from 'react';
import { Route, Switch } from 'react-router-dom';

we can do: 

import React from 'react';

because of "esModuleInterop": true inside of tsconfig.json

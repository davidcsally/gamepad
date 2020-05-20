import { addDecorator } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

import 'border-box.css'
import 'normalize.css'
import '../global.css'

addDecorator(withKnobs);

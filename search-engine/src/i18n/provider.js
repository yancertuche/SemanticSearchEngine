import React , {fragment} from 'react';
import {IntlProvider} from 'react-intl';

import {LOCALES} from './locales';
import messages from './messages';


const Provider = ({children, locale = LOCALES.ESPAÑOL}) => (
    <IntlProvider
        locale = {locale}
        textComponent = {fragment}
        messages = {messages[locale]}>
            {children}
        </IntlProvider>
);

export default Provider
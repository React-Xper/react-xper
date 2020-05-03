import React from 'react';
import { Box, Main, Heading, Paragraph, TextInput, Select } from 'grommet';
import { IntlProvider, FormattedMessage } from 'react-intl';
import en from '../../assets/localization/en.json';
import zh_cn from '../../assets/localization/zh-cn.json';
import ru from '../../assets/localization/ru.json';
import { useState } from 'react';


const messages = {
  "English": en,
  "Chinese": zh_cn,
  "Russian": ru
}

export function Localization() {
  const [language, setLanguage] = useState('English');


  return (
    <Main pad="xlarge">
      <Box>
        <Heading level="2">Localizaton using react-intl</Heading>
        <Paragraph>
          <label>Enter locale code</label>
          <Select
            options={['English', 'Chinese','Russian']}
            value={language}
            onChange={({ option }) => setLanguage(option)}
          />
          <section>
            <IntlProvider locale={language} messages={messages[language]}>
              <h1><FormattedMessage id="home.title" /></h1>
            </IntlProvider>
          </section>
        </Paragraph>
      </Box>
    </Main>
  )
}
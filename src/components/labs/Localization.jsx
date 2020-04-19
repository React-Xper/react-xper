import React from 'react';
import { Box, Main, Heading, Paragraph, TextInput } from 'grommet';
import { IntlProvider, FormattedMessage } from 'react-intl';
import en from '../../assets/localization/en.json';
import zh_cn from '../../assets/localization/zh-cn.json';
import { useState } from 'react';


const messages = {
  "en": en,
  "zh-cn": zh_cn
}

export function Localization() {
  const [language,setLanguage] = useState('en');

  
  return (
    <Main pad="xlarge">
      <Box>
        <Heading level="2">Localizaton using react-intl</Heading>
        <Paragraph>
          <label>Enter locale code</label>
          <TextInput value={language} onChange={(e) => {setLanguage(e.target.value)}}></TextInput>
          <IntlProvider locale={language} messages={messages[language]}>
            <FormattedMessage id="home.title" />
          </IntlProvider>
        </Paragraph>
      </Box>
    </Main>
  )
}
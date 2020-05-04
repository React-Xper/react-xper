import React from "react";
import {
  Box,
  Main,
  Heading,
  Paragraph,
  TextInput,
  Select,
  Text,
} from "grommet";
import { IntlProvider, FormattedMessage } from "react-intl";
import en from "../../assets/localization/en.json";
import zh_cn from "../../assets/localization/zh-cn.json";
import ru from "../../assets/localization/ru.json";
import { useState } from "react";

const messages = {
  English: en,
  Chinese: zh_cn,
  Russian: ru,
};

export function Localization() {
  const [language, setLanguage] = useState("English");

  return (
    <Main pad="xlarge">
      <Box>
        <Heading level="2">Localizaton using react-intl</Heading>
        <Paragraph fill={true}>
          React-intl is a localization library by FormatJS to create
          multi-language websites.
          <br />
          <br />
          Internationalized software supports the languages and cultural customs
          of people throughout the world. The Web reaches all parts of the
          world. Internationalized web apps provide a great user experience for
          people everywhere. Localized software adapts to a specific language
          and culture by translating text into the user's language and
          formatting data in accordance with the user's expectations. An app is
          typically localized for a small set of locales.
          <br />
          <br />
          Read more on official FormatJS website at{" "}
          <a href="https://formatjs.io/docs/react-intl">here</a>
        </Paragraph>
      </Box>
      <Box>
        <Heading level="2">Localizaton using react-intl</Heading>
        <Paragraph>
          <label>Enter locale code</label>
          <Select
            options={["English", "Chinese", "Russian"]}
            value={language}
            onChange={({ option }) => setLanguage(option)}
          />
          <section>
            <IntlProvider locale={language} messages={messages[language]}>
              <h1>
                <FormattedMessage id="home.title" />
              </h1>
            </IntlProvider>
          </section>
        </Paragraph>
        <br />
        <br />
        <Text>
          View code at{" "}
          <a
            href="https://github.com/m3yevn/reacthesis/blob/master/src/components/labs/Localization.jsx"
            alt="github"
          >
            Github
          </a>
        </Text>
      </Box>
    </Main>
  );
}

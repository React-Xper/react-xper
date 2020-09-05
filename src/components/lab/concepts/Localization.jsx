import React from "react";
import { Box, Main, Heading, Paragraph, Select, Text } from "grommet";
import en from "assets/localization/en.json";
import zh_cn from "assets/localization/zh-cn.json";
import ru from "assets/localization/ru.json";
import { useState } from "react";

const messages = {
  English: en,
  Chinese: zh_cn,
  Russian: ru,
};

export default function Localization() {
  const [language, setLanguage] = useState("English");

  return (
    <Main pad="xlarge">
      <Box>
        <Heading level="2">Localization using bespoke method</Heading>
        <Paragraph fill={true}>
          Reacthesis implemented an own localization framework
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
        </Paragraph>
      </Box>
      <Box>
        <Heading level="2"></Heading>
        <Paragraph>
          <label>Select Language</label>
          <Select
            options={["English", "Chinese", "Russian"]}
            value={language}
            onChange={({ option }) => setLanguage(option)}
          />
          <section>
            Renovating in progress...
            {
              JSON.stringify(messages["English"])
            }
          </section>
        </Paragraph>
      </Box>
      <Box style={{ marginTop: 30 }}>
        <Text>
          View code at{" "}
          <a
            href="https://github.com/m3yevn/reacthesis/blob/master/src/components/lab/concepts/Localization.jsx"
            alt="github"
          >
            Github
          </a>
        </Text>
      </Box>
    </Main>
  );
}

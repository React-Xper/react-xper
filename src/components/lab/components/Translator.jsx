import React from "react";
import { TranslateProvider, Translatable } from "@techlestial/uilerial/dist/translator";

const en = {
  welcome_msg: "Uilerial is the best!",
};

const zh_cn = {
  welcome_msg: "Uilerial 是最好的!",
};

const languageSrc = {
  en,
  zh_cn,
};

export function Translator() {
  return (
    <div>
      <TranslateProvider src={languageSrc}>
        <div>
          <Translatable text="welcome_msg" language="en" />
        </div>
        <br />
        <div>
          <Translatable text="welcome_msg" language="zh_cn" />
        </div>
      </TranslateProvider>
    </div>
  );
}

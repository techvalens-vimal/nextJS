import React, { useEffect } from "react";
import { Configuration, OpenAIApi } from "openai";

const page = () => {
  const configuration = new Configuration({
    organization: "org-qCoqVsaZE8DvcCKGo4uyb8N4",
    apiKey: 'process.env.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',
  });
  const openai = new OpenAIApi(configuration);
  const response = openai.listEngines();

  async function abc() {}
  useEffect(() => {}, []);
  return <div>this is page component inside components folder</div>;
};

export default page;

# Prompt to Code POC

This is a simple Proof of Concept (POC) demonstrating how to generate code from prompts using OpenAI and LangGraph.

## How it Works

- Send a POST request to the endpoint:
  ```
  http://localhost:3000/generate
  ```
- Request body example:
  ```json
  {
    "prompt": "Create a login page with email and password fields and submit button with beautiful ui using tailwind css."
  }
  ```
- The response will contain generated code based on your prompt.

## Example Response

```json
{
  "code": "`jsx\nimport React from 'react';\n\nconst LoginPage = () => {\n  return (\n    <div className=\"min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12\">\n      <div className=\"relative py-3 sm:max-w-xl sm:mx-auto\">\n        <div className=\"absolute inset-0 bg-gradient-to-r from-cyan-400 to-light-blue-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl\"></div>\n        <div className=\"relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20\">\n          <div className=\"max-w-md mx-auto\">\n            <div>\n              <h1 className=\"text-2xl font-semibold\">Login</h1>\n            </div>\n            <div className=\"divide-y divide-gray-200\">\n              <div className=\"py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7\">\n                <div className=\"relative\">\n                  <input autoComplete=\"off\" id=\"email\" name=\"email\" type=\"text\" required className=\"peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-rose-600\" placeholder=\"Email Address\" />\n                  <label htmlFor=\"email\" className=\"absolute left-0 -top-3.5 text-gray-600 text-sm dark:text-gray-400 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm\">Email Address</label>\n                </div>\n                <div className=\"relative\">\n                  <input autoComplete=\"off\" id=\"password\" name=\"password\" type=\"password\" required className=\"peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-rose-600\" placeholder=\"Password\" />\n                  <label htmlFor=\"password\" className=\"absolute left-0 -top-3.5 text-gray-600 text-sm dark:text-gray-400 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm\">Password</label>\n                </div>\n              </div>\n              <div className=\"pt-6 text-base leading-6 font-bold sm:text-lg sm:leading-7\">\n                <button className=\"w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500\">Submit</button>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  );\n}\n\nexport default LoginPage;\n`"
}
```

"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8594],{3031:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var s=t(74848),o=t(28453);const a={},r="Introduction to Transform Messages",i={id:"topics/handling_long_contexts/intro_to_transform_messages",title:"Introduction to Transform Messages",description:"Why do we need to handle long contexts? The problem arises from several constraints and requirements:",source:"@site/docs/topics/handling_long_contexts/intro_to_transform_messages.md",sourceDirName:"topics/handling_long_contexts",slug:"/topics/handling_long_contexts/intro_to_transform_messages",permalink:"/autogen/docs/topics/handling_long_contexts/intro_to_transform_messages",draft:!1,unlisted:!1,editUrl:"https://github.com/microsoft/autogen/edit/main/website/docs/topics/handling_long_contexts/intro_to_transform_messages.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Compressing Text with LLMLingua",permalink:"/autogen/docs/topics/handling_long_contexts/compressing_text_w_llmligua"},next:{title:"LLM Caching",permalink:"/autogen/docs/topics/llm-caching"}},l={},c=[{value:"Transform Messages Capability",id:"transform-messages-capability",level:2},{value:"Exploring and Understanding Transformations",id:"exploring-and-understanding-transformations",level:3},{value:"Example 1: Limiting the Total Number of Messages",id:"example-1-limiting-the-total-number-of-messages",level:4},{value:"Example 2: Limiting the Number of Tokens",id:"example-2-limiting-the-number-of-tokens",level:4},{value:"Apply Transformations Using Agents",id:"apply-transformations-using-agents",level:3},{value:"Setting Up the Stage",id:"setting-up-the-stage",level:4},{value:"Create Custom Transformations to Handle Sensitive Content",id:"create-custom-transformations-to-handle-sensitive-content",level:3}];function m(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"introduction-to-transform-messages",children:"Introduction to Transform Messages"}),"\n",(0,s.jsx)(n.p,{children:"Why do we need to handle long contexts? The problem arises from several constraints and requirements:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Token limits: LLMs have token limits that restrict the amount of textual data they can process. If we exceed these limits, we may encounter errors or incur additional costs. By preprocessing the chat history, we can ensure that we stay within the acceptable token range."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Context relevance: As conversations progress, retaining the entire chat history may become less relevant or even counterproductive. Keeping only the most recent and pertinent messages can help the LLMs focus on the most crucial context, leading to more accurate and relevant responses."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Efficiency: Processing long contexts can consume more computational resources, leading to slower response times."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"transform-messages-capability",children:"Transform Messages Capability"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"TransformMessages"})," capability is designed to modify incoming messages before they are processed by the LLM agent. This can include limiting the number of messages, truncating messages to meet token limits, and more."]}),"\n",(0,s.jsxs)(n.admonition,{title:"Requirements",type:"info",children:[(0,s.jsxs)(n.p,{children:["Install ",(0,s.jsx)(n.code,{children:"pyautogen"}),":"]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"pip install pyautogen\n"})}),(0,s.jsxs)(n.p,{children:["For more information, please refer to the ",(0,s.jsx)(n.a,{href:"/docs/installation/",children:"installation guide"}),"."]})]}),"\n",(0,s.jsx)(n.h3,{id:"exploring-and-understanding-transformations",children:"Exploring and Understanding Transformations"}),"\n",(0,s.jsx)(n.p,{children:"Let's start by exploring the available transformations and understanding how they work. We will start off by importing the required modules."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"import copy\nimport pprint\n\nfrom autogen.agentchat.contrib.capabilities import transforms\n"})}),"\n",(0,s.jsx)(n.h4,{id:"example-1-limiting-the-total-number-of-messages",children:"Example 1: Limiting the Total Number of Messages"}),"\n",(0,s.jsx)(n.p,{children:"Consider a scenario where you want to limit the context history to only the most recent messages to maintain efficiency and relevance. You can achieve this with the MessageHistoryLimiter transformation:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'# Limit the message history to the 3 most recent messages\nmax_msg_transfrom = transforms.MessageHistoryLimiter(max_messages=3)\n\nmessages = [\n    {"role": "user", "content": "hello"},\n    {"role": "assistant", "content": [{"type": "text", "text": "there"}]},\n    {"role": "user", "content": "how"},\n    {"role": "assistant", "content": [{"type": "text", "text": "are you doing?"}]},\n    {"role": "user", "content": "very very very very very very long string"},\n]\n\nprocessed_messages = max_msg_transfrom.apply_transform(copy.deepcopy(messages))\npprint.pprint(processed_messages)\n'})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-console",children:"[{'content': 'how', 'role': 'user'},\n{'content': [{'text': 'are you doing?', 'type': 'text'}], 'role': 'assistant'},\n{'content': 'very very very very very very long string', 'role': 'user'}]\n"})}),"\n",(0,s.jsxs)(n.p,{children:["By applying the ",(0,s.jsx)(n.code,{children:"MessageHistoryLimiter"}),', we can see that we were able to limit the context history to the 3 most recent messages. However, if the splitting point is between a "tool_calls" and "tool" pair, the complete pair will be included to obey the OpenAI API call constraints.']}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'max_msg_transfrom = transforms.MessageHistoryLimiter(max_messages=3)\n\nmessages = [\n    {"role": "user", "content": "hello"},\n    {"role": "tool_calls", "content": "calling_tool"},\n    {"role": "tool", "content": "tool_response"},\n    {"role": "user", "content": "how are you"},\n    {"role": "assistant", "content": [{"type": "text", "text": "are you doing?"}]},\n]\n\nprocessed_messages = max_msg_transfrom.apply_transform(copy.deepcopy(messages))\npprint.pprint(processed_messages)\n'})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-console",children:"[{'content': 'calling_tool', 'role': 'tool_calls'},\n{'content': 'tool_response', 'role': 'tool'},\n{'content': 'how are you', 'role': 'user'},\n{'content': [{'text': 'are you doing?', 'type': 'text'}], 'role': 'assistant'}]\n"})}),"\n",(0,s.jsx)(n.h4,{id:"example-2-limiting-the-number-of-tokens",children:"Example 2: Limiting the Number of Tokens"}),"\n",(0,s.jsxs)(n.p,{children:["To adhere to token limitations, use the ",(0,s.jsx)(n.code,{children:"MessageTokenLimiter"})," transformation. This limits tokens per message and the total token count across all messages. Additionally, a ",(0,s.jsx)(n.code,{children:"min_tokens"})," threshold can be applied:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"# Limit the token limit per message to 3 tokens\ntoken_limit_transform = transforms.MessageTokenLimiter(max_tokens_per_message=3, min_tokens=10)\n\nprocessed_messages = token_limit_transform.apply_transform(copy.deepcopy(messages))\n\npprint.pprint(processed_messages)\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-console",children:"[{'content': 'hello', 'role': 'user'},\n{'content': [{'text': 'there', 'type': 'text'}], 'role': 'assistant'},\n{'content': 'how', 'role': 'user'},\n{'content': [{'text': 'are you doing', 'type': 'text'}], 'role': 'assistant'},\n{'content': 'very very very', 'role': 'user'}]\n"})}),"\n",(0,s.jsx)(n.p,{children:"We can see that we were able to limit the number of tokens to 3, which is equivalent to 3 words for this instance."}),"\n",(0,s.jsxs)(n.p,{children:["In the following example we will explore the effect of the ",(0,s.jsx)(n.code,{children:"min_tokens"})," threshold."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'short_messages = [\n    {"role": "user", "content": "hello there, how are you?"},\n    {"role": "assistant", "content": [{"type": "text", "text": "hello"}]},\n]\n\nprocessed_short_messages = token_limit_transform.apply_transform(copy.deepcopy(short_messages))\n\npprint.pprint(processed_short_messages)\n'})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-console",children:"[{'content': 'hello there, how are you?', 'role': 'user'},\n {'content': [{'text': 'hello', 'type': 'text'}], 'role': 'assistant'}]\n"})}),"\n",(0,s.jsx)(n.p,{children:"We can see that no transformation was applied, because the threshold of 10 total tokens was not reached."}),"\n",(0,s.jsx)(n.h3,{id:"apply-transformations-using-agents",children:"Apply Transformations Using Agents"}),"\n",(0,s.jsxs)(n.p,{children:["So far, we have only tested the ",(0,s.jsx)(n.code,{children:"MessageHistoryLimiter"})," and ",(0,s.jsx)(n.code,{children:"MessageTokenLimiter"})," transformations individually, let's test these transformations with AutoGen's agents."]}),"\n",(0,s.jsx)(n.h4,{id:"setting-up-the-stage",children:"Setting Up the Stage"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'import os\nimport copy\n\nimport autogen\nfrom autogen.agentchat.contrib.capabilities import transform_messages, transforms\nfrom typing import Dict, List\n\nconfig_list = [{"model": "gpt-3.5-turbo", "api_key": os.getenv("OPENAI_API_KEY")}]\n\n# Define your agent; the user proxy and an assistant\nassistant = autogen.AssistantAgent(\n    "assistant",\n    llm_config={"config_list": config_list},\n)\nuser_proxy = autogen.UserProxyAgent(\n    "user_proxy",\n    human_input_mode="NEVER",\n    is_termination_msg=lambda x: "TERMINATE" in x.get("content", ""),\n    max_consecutive_auto_reply=10,\n)\n'})}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsxs)(n.p,{children:["Learn more about configuring LLMs for agents ",(0,s.jsx)(n.a,{href:"/docs/topics/llm_configuration",children:"here"}),"."]})}),"\n",(0,s.jsxs)(n.p,{children:["We first need to write the ",(0,s.jsx)(n.code,{children:"test"})," function that creates a very long chat history by exchanging messages between an assistant and a user proxy agent, and then attempts to initiate a new chat without clearing the history, potentially triggering an error due to token limits."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'# Create a very long chat history that is bound to cause a crash for gpt 3.5\ndef test(assistant: autogen.ConversableAgent, user_proxy: autogen.UserProxyAgent):\n    for _ in range(1000):\n        # define a fake, very long messages\n        assitant_msg = {"role": "assistant", "content": "test " * 1000}\n        user_msg = {"role": "user", "content": ""}\n\n        assistant.send(assitant_msg, user_proxy, request_reply=False, silent=True)\n        user_proxy.send(user_msg, assistant, request_reply=False, silent=True)\n\n    try:\n        user_proxy.initiate_chat(assistant, message="plot and save a graph of x^2 from -10 to 10", clear_history=False)\n    except Exception as e:\n        print(f"Encountered an error with the base assistant: \\n{e}")\n'})}),"\n",(0,s.jsxs)(n.p,{children:["The first run will be the default implementation, where the agent does not have the ",(0,s.jsx)(n.code,{children:"TransformMessages"})," capability."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"test(assistant, user_proxy)\n"})}),"\n",(0,s.jsx)(n.p,{children:"Running this test will result in an error due to the large number of tokens sent to OpenAI's gpt 3.5."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-console",children:"user_proxy (to assistant):\n\nplot and save a graph of x^2 from -10 to 10\n\n--------------------------------------------------------------------------------\nEncountered an error with the base assistant\nError code: 429 - {'error': {'message': 'Request too large for gpt-3.5-turbo in organization org-U58JZBsXUVAJPlx2MtPYmdx1 on tokens per min (TPM): Limit 60000, Requested 1252546. The input or output tokens must be reduced in order to run successfully. Visit https://platform.openai.com/account/rate-limits to learn more.', 'type': 'tokens', 'param': None, 'code': 'rate_limit_exceeded'}}\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Now let's add the ",(0,s.jsx)(n.code,{children:"TransformMessages"})," capability to the assistant and run the same test."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"context_handling = transform_messages.TransformMessages(\n    transforms=[\n        transforms.MessageHistoryLimiter(max_messages=10),\n        transforms.MessageTokenLimiter(max_tokens=1000, max_tokens_per_message=50, min_tokens=500),\n    ]\n)\ncontext_handling.add_to_agent(assistant)\n\ntest(assistant, user_proxy)\n"})}),"\n",(0,s.jsx)(n.p,{children:"The following console output shows that the agent is now able to handle the large number of tokens sent to OpenAI's gpt 3.5."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-console",children:"user_proxy (to assistant):\n\nplot and save a graph of x^2 from -10 to 10\n\n--------------------------------------------------------------------------------\nTruncated 3804 tokens. Tokens reduced from 4019 to 215\nassistant (to user_proxy):\n\nTo plot and save a graph of \\( x^2 \\) from -10 to 10, we can use Python with the matplotlib library. Here's the code to generate the plot and save it to a file named \"plot.png\":\n\n```python\n# filename: plot_quadratic.py\nimport matplotlib.pyplot as plt\nimport numpy as np\n\n# Create an array of x values from -10 to 10\nx = np.linspace(-10, 10, 100)\ny = x**2\n\n# Plot the graph\nplt.plot(x, y)\nplt.xlabel('x')\nplt.ylabel('x^2')\nplt.title('Plot of x^2')\nplt.grid(True)\n\n# Save the plot as an image file\nplt.savefig('plot.png')\n\n# Display the plot\nplt.show()\n````\n\nYou can run this script in a Python environment. It will generate a plot of \\( x^2 \\) from -10 to 10 and save it as \"plot.png\" in the same directory where the script is executed.\n\nExecute the Python script to create and save the graph.\nAfter executing the code, you should see a file named \"plot.png\" in the current directory, containing the graph of \\( x^2 \\) from -10 to 10. You can view this file to see the plotted graph.\n\nIs there anything else you would like to do or need help with?\nIf not, you can type \"TERMINATE\" to end our conversation.\n\n---\n\n"})}),"\n",(0,s.jsx)(n.h3,{id:"create-custom-transformations-to-handle-sensitive-content",children:"Create Custom Transformations to Handle Sensitive Content"}),"\n",(0,s.jsxs)(n.p,{children:["You can create custom transformations by implementing the ",(0,s.jsx)(n.code,{children:"MessageTransform"})," protocol, which provides flexibility to handle various use cases. One practical application is to create a custom transformation that redacts sensitive information, such as API keys, passwords, or personal data, from the chat history or logs. This ensures that confidential data is not inadvertently exposed, enhancing the security and privacy of your conversational AI system."]}),"\n",(0,s.jsxs)(n.p,{children:["We will demonstrate this by implementing a custom transformation called ",(0,s.jsx)(n.code,{children:"MessageRedact"})," that detects and redacts OpenAI API keys from the conversation history. This transformation is particularly useful when you want to prevent accidental leaks of API keys, which could compromise the security of your system."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'import os\nimport pprint\nimport copy\nimport re\n\nimport autogen\nfrom autogen.agentchat.contrib.capabilities import transform_messages, transforms\nfrom typing import Dict, List\n\n# The transform must adhere to transform_messages.MessageTransform protocol.\nclass MessageRedact:\n    def __init__(self):\n        self._openai_key_pattern = r"sk-([a-zA-Z0-9]{48})"\n        self._replacement_string = "REDACTED"\n\n    def apply_transform(self, messages: List[Dict]) -> List[Dict]:\n        temp_messages = copy.deepcopy(messages)\n\n        for message in temp_messages:\n            if isinstance(message["content"], str):\n                message["content"] = re.sub(self._openai_key_pattern, self._replacement_string, message["content"])\n            elif isinstance(message["content"], list):\n                for item in message["content"]:\n                    if item["type"] == "text":\n                        item["text"] = re.sub(self._openai_key_pattern, self._replacement_string, item["text"])\n        return temp_messages\n\n    def get_logs(self, pre_transform_messages: List[Dict], post_transform_messages: List[Dict]) -> Tuple[str, bool]:\n        keys_redacted = self._count_redacted(post_transform_messages) - self._count_redacted(pre_transform_messages)\n        if keys_redacted > 0:\n            return f"Redacted {keys_redacted} OpenAI API keys.", True\n        return "", False\n\n    def _count_redacted(self, messages: List[Dict]) -> int:\n        # counts occurrences of "REDACTED" in message content\n        count = 0\n        for message in messages:\n            if isinstance(message["content"], str):\n                if "REDACTED" in message["content"]:\n                    count += 1\n            elif isinstance(message["content"], list):\n                for item in message["content"]:\n                    if isinstance(item, dict) and "text" in item:\n                        if "REDACTED" in item["text"]:\n                            count += 1\n        return count\n\n\nassistant_with_redact = autogen.AssistantAgent(\n    "assistant",\n    llm_config=llm_config,\n    max_consecutive_auto_reply=1,\n)\nredact_handling = transform_messages.TransformMessages(transforms=[MessageRedact()])\n\nredact_handling.add_to_agent(assistant_with_redact)\n\nuser_proxy = autogen.UserProxyAgent(\n    "user_proxy",\n    human_input_mode="NEVER",\n    max_consecutive_auto_reply=1,\n)\n\nmessages = [\n    {"content": "api key 1 = sk-7nwt00xv6fuegfu3gnwmhrgxvuc1cyrhxcq1quur9zvf05fy"},  # Don\'t worry, the key is randomly generated\n    {"content": [{"type": "text", "text": "API key 2 = sk-9wi0gf1j2rz6utaqd3ww3o6c1h1n28wviypk7bd81wlj95an"}]},\n]\n\nfor message in messages:\n    user_proxy.send(message, assistant_with_redact, request_reply=False, silent=True)\n\nresult = user_proxy.initiate_chat(\n    assistant_with_redact, message="What are the two API keys that I just provided", clear_history=False\n\n'})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-console",children:'user_proxy (to assistant):\n\nWhat are the two API keys that I just provided\n\n--------------------------------------------------------------------------------\nRedacted 2 OpenAI API keys.\nassistant (to user_proxy):\n\nAs an AI, I must inform you that it is not safe to share API keys publicly as they can be used to access your private data or services that can incur costs. Given that you\'ve typed "REDACTED" instead of the actual keys, it seems you are aware of the privacy concerns and are likely testing my response or simulating an exchange without exposing real credentials, which is a good practice for privacy and security reasons.\n\nTo respond directly to your direct question: The two API keys you provided are both placeholders indicated by the text "REDACTED", and not actual API keys. If these were real keys, I would have reiterated the importance of keeping them secure and would not display them here.\n\nRemember to keep your actual API keys confidential to prevent unauthorized use. If you\'ve accidentally exposed real API keys, you should revoke or regenerate them as soon as possible through the corresponding service\'s API management console.\n\n--------------------------------------------------------------------------------\nuser_proxy (to assistant):\n\n\n\n--------------------------------------------------------------------------------\nRedacted 2 OpenAI API keys.\n'})})]})}function d(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(m,{...e})}):m(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>i});var s=t(96540);const o={},a=s.createContext(o);function r(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);
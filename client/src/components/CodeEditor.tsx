import { Editor } from "@monaco-editor/react";

interface CodeEditorProps {
  code: string,
  setCode: React.Dispatch<React.SetStateAction<string>>;
  language: string
}

export function CodeEditor({ code, setCode, language }: CodeEditorProps) {

  return (
    <Editor
      height="100vh"
      width="48vw"
      language={language || "cpp"}
      theme="vs-dark"
      value={code}
      onChange={(value) => setCode(value || "")}
      options={{
        fontSize: 16,
        fontFamily: "Fira Code, monospace",
        lineHeight: 22,
        minimap: { enabled: false },
        wordWrap: "on",
        automaticLayout: true
      }}
    />
  )
}
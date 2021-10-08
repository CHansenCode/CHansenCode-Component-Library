const CodeBlock = ({ language, showLineNumbers, color }) => {
  const code = `    <html>
        blablab
    </html>`;
  return (
    <pre>
      <code style={{ color: color }}>{`${code}`}</code>
    </pre>
  );
};

export default CodeBlock;

const DangerousHtml = ({ data }) => {
  return <div dangerouslySetInnerHTML={{ __html: data }} />;
};

export default DangerousHtml;

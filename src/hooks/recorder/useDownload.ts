export const useDownload = () => {
  const download = (blob: Blob) => {
    const url = window?.URL?.createObjectURL?.(blob);
    if (!url) return null;
    const a = document.createElement("a");
    a.style.display = "none";
    a.href = url;
    a.download = `test_${Math.random().toFixed(4)}.pcm`;
    document.body.appendChild(a);
    a.click();
    setTimeout(() => {
      document.body.removeChild(a);
      window?.URL?.revokeObjectURL?.(url);
    }, 100);
  };

  return download;
};

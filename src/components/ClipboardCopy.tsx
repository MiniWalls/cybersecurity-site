import { useState } from 'react';

interface ComponentProps {
  copyText: string;
}

function ClipboardCopy({ copyText }: ComponentProps): JSX.Element {
  const [isCopied, setIsCopied] = useState(false);

  async function copyTextToClipboard(text: string) {
    if ('clipboard' in navigator) {
      return await navigator.clipboard.writeText(text);
    } else {
      return document.execCommand('copy', true, text); //Deprecated but there's no alternative made for it.
    }
  }

  const handleCopyClick = () => {
    // Asynchronously call copyTextToClipboard
    copyTextToClipboard(copyText)
      .then(() => {
        // If successful, update the isCopied state value
        setIsCopied(true);
        setTimeout(() => {
          setIsCopied(false);
        }, 900);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <input type="text" value={copyText} readOnly 
      className="mx-1 my-1 pl-1 rounded-md border-gray-300 border-[1px]"/>
      <button type="button" onClick={handleCopyClick} className="px-1 rounded-md border-gray-800 border-[1px]">
        <span>{isCopied ? 'Copied!' : 'Copy'}</span>
      </button>
    </div>
  );
}

export default ClipboardCopy;
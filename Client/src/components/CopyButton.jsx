import React, { useState } from "react";

function CopyButton({ textToCopy }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(textToCopy);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  return (
    <button
      onClick={handleCopy}
      className="px-4 py-2 text-sm rounded bg-blue-700 hover:bg-blue-800 text-white transition"
    >
      {copied ? "Copied!" : "Share Link"}
    </button>
  );
}

export default CopyButton;

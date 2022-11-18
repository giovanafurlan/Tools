import { Button, Input } from "@chakra-ui/react";
import { useState } from "react";

export default function CopyClipboard({ copyText }) {
    const [isCopied, setIsCopied] = useState(false);

    async function copyTextToClipboard(text) {
        if ('clipboard' in navigator) {
            return await navigator.clipboard.writeText(text);
        } else {
            return document.execCommand('copy', true, text);
        }
    }

    const handleCopyClick = () => {
        copyTextToClipboard(copyText)
            .then(() => {
                setIsCopied(true);
                setTimeout(() => {
                    setIsCopied(false);
                }, 1500);
            })
            .catch((err) => {
                console.log(err);
            });
    }

    return (
        <div>
            <Input
                type="text"
                value={copyText}
                readOnly 
                display={'none'}/>
            <Button
                onClick={handleCopyClick}
                my='4'>
                <span>
                    {isCopied ? 'Copied!' : 'Copy'}
                </span>
            </Button>
        </div>
    );
}

import React, { useEffect, useState } from "react";
import "./EditableProp.less";
import { Button, FormInput, Tooltip } from "components";
import useShortcut from "hooks/useShortcut";
import {
    CheckRounded,
    CopyAllRounded,
    EditRounded,
    SaveRounded,
    VisibilityRounded,
    VisibilityOffRounded,
} from "@mui/icons-material";
import backend from "backend";

/**
 * Displays an editable property
 * @param {object} props The props
 * @param {JSX.Element} props.icon The icon to display
 * @param {string} props.name The name of the input
 * @param {string} props.placeholder The placeholder of the input
 * @param {boolean} props.password Whether the input is a password
 * @param {function} props.onUpdate The function to call when the input is updated
 * @param {string} props.value The value of the input
 * @param {boolean} props.multiline Whether the input is multiline
 * @param {boolean} props.title Whether the input is a title
 * @param {boolean} props.copyable Whether the input is copyable
 * @param {boolean} props.url Whether the input is a url
 * @returns The editable prop component
 */
const EditableProp = ({
    icon,
    name,
    placeholder,
    password,
    onUpdate,
    value,
    multiline,
    title,
    copyable = false,
    url = false,
}) => {
    const [editable, setEditable] = useState(false);
    const [copied, setCopied] = useState(false);
    const [hidden, setHidden] = useState(!!password);
    const inputRef = React.useRef(null);

    useShortcut("Tab", () => setEditable(false), editable);
    useShortcut(
        multiline ? "Ctrl-Enter" : "Enter",
        () => {
            setEditable(false);
        },
        editable
    );

    useEffect(() => {
        if (editable) {
            inputRef.current.focus();
        }
    }, [editable]);

    return (
        <div
            className="editableProp"
            data-editable={editable}
            data-multiline={multiline}
            data-title={title}
            data-nodivider={password}
            onDoubleClick={e => {
                if (url && (e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA")) return;
                setEditable(true);
            }}
            onClick={
                url && !editable && value
                    ? e => {
                          if (e.target.tagName !== "INPUT" && e.target.tagName !== "TEXTAREA") return;
                          backend.openURL(value.startsWith("http") ? value : "https://" + value);
                      }
                    : null
            }>
            {icon}
            {!multiline ? (
                <FormInput
                    ref={inputRef}
                    name={name}
                    placeholder={placeholder || name.replace(/^\w/, c => c.toUpperCase())}
                    type={hidden ? "password" : null}
                    value={value}
                    onInput={onUpdate}
                    disabled={!editable}
                    spellCheck={false}
                    data-url={url && !editable}
                    inputProps={{ onBlur: () => setEditable(false) }}
                />
            ) : (
                <textarea
                    ref={inputRef}
                    name={name}
                    placeholder={placeholder || name.replace(/^\w/, c => c.toUpperCase())}
                    value={value}
                    onInput={onUpdate}
                    disabled={!editable}
                    spellCheck={false}
                    onBlur={() => setEditable(false)}
                />
            )}
            <div className="buttonGroup">
                {password && (
                    <Tooltip label={hidden ? "Show Password" : "Hide Password"}>
                        <Button onClick={() => setHidden(v => !v)}>
                            {hidden ? <VisibilityRounded /> : <VisibilityOffRounded style={{ fill: "var(--error)" }} />}
                        </Button>
                    </Tooltip>
                )}
                <Tooltip label={editable ? "Save" : "Edit"}>
                    <Button className="editButton" onClick={() => setEditable(!editable)}>
                        {editable ? <SaveRounded /> : <EditRounded />}
                    </Button>
                </Tooltip>
                {copyable && (
                    <Tooltip label={copied ? "Copied" : "Copy"}>
                        <Button
                            onClick={() => {
                                navigator.clipboard.writeText(value);
                                setCopied(v => {
                                    if (!v) setTimeout(() => setCopied(false), 2000);
                                    return true;
                                });
                            }}>
                            {copied ? <CheckRounded style={{ fill: "var(--success)" }} /> : <CopyAllRounded />}
                        </Button>
                    </Tooltip>
                )}
            </div>
        </div>
    );
};

export default EditableProp;

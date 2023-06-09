import React, { useContext, useState } from "react";
import "./UrlLogo.less";
import AppContext from "contexts/App.context";

function getDomain(url) {
    return url
        ?.replace(/https?:\/\//i, "")
        ?.split("/")?.[0]
        ?.split(".")
        ?.slice(-2)?.join(".");
}

function getFaviconUrl(url, size=64) {
    const domain = getDomain(url);
    return `https://www.google.com/s2/favicons?sz=${size}&domain_url=http://${domain}/`
}

/**
 * A logo for a url
 * @param {object} props The props
 * @param {object} props.entry The entry object
 * @param {string} props.entry.url The entry's url
 * @param {string} props.entry.name The entry's name
 * @param {string} props.className The logo's class name
 * @returns The url logo component
 */
const UrlLogo = React.forwardRef(({ entry, className, ...props }, ref) => {

    const { settings } = useContext(AppContext);

    const [imgLoadError, setImgLoadError] = useState(!entry.url?.match(/.*\..{2,}/i));
    const [urls, setUrls] = useState([
        getFaviconUrl(entry.url, 16),
        getFaviconUrl(entry.url, 32),
        getFaviconUrl(entry.url, 64),
        getFaviconUrl(entry.url, 128),
        getFaviconUrl(entry.url, 256),
        `http://${getDomain(entry.url)}/favicon.ico`
    ]);

    function loadFail() {
        setUrls(urls => {
            if (urls.length <= 1) setImgLoadError(true);
            return urls.slice(0, -1);
        });
    }

    return (
        <div className={"urlLogo " + (className || "")} {...props} ref={ref}>
            {!settings.loadFavicons || imgLoadError ? (
                <span>{entry?.name[0]}</span>
            ) : (
                <img
                    src={urls.slice(-1)[0]}
                    alt=""
                    onError={loadFail}
                />
            )}
        </div>
    );
});

export default UrlLogo;

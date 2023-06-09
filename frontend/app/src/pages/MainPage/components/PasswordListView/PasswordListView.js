import React, { useContext, useEffect, useState } from "react";
import "./PasswordListView.less";
import AppContext from "contexts/App.context";
import { Button, FormInput } from "components";

import PasswordListItem from "./PasswordListItem";

import { AddRounded, ArrowUpwardRounded, SearchRounded } from "@mui/icons-material";
import useShortcut from "hooks/useShortcut";


function matchesSearch(entry, searchTerm) {
    return (
        searchTerm === "" ||
        entry.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        entry.url?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        entry.username?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        entry.notes?.toLowerCase().includes(searchTerm.toLowerCase())
    )
}

const PasswordListView = ({ currentCategory, setAddEntryPopupVisible, setCurrentEntry }) => {

    const { db, settings: { createEntryShortcut, searchShortcut } } = useContext(AppContext);

    const category = db.categories.find((category) => category.id === currentCategory);
    const entryCount = db.entries.filter((entry) => entry.category == category?.id).length;

    const [searchTerm, setSearchTerm] = useState("");

    useShortcut(createEntryShortcut, () => {
        setAddEntryPopupVisible(true)
    });
    useShortcut(searchShortcut, () => document.querySelector(".searchInput input").focus());
    useShortcut("Escape", () => {
        if(document.querySelector(".passwordListView .searchInput input")  === document.activeElement) {
            setSearchTerm("");
            document.activeElement.blur();
        }
    });

    return (
        <div className="passwordListView">
            <div className="toolbar">
                <Button size="small" type="secondary" className="addButton" onClick={() => setAddEntryPopupVisible(true)} disabled={!category}>
                    <AddRounded />
                    New
                </Button>
                {category ? (
                    <span>
                        {category.category} - {entryCount || "0"} Entries
                    </span>
                ) : (
                    <span>No category selected</span>
                )}
                <FormInput
                    className="searchInput"
                    placeholder="Search"
                    iconLeft={<SearchRounded />}
                    value={searchTerm}
                    onInput={e => setSearchTerm(e.target.value)}
                />
            </div>
            <div className="sortingOptions">
                <div className="sortOption">
                    <span>Name / URL</span>
                    {/* <ArrowUpwardRounded /> */}
                </div>
                {/* <div className="sortOption">
                    <span>Date</span>
                </div>
                <div className="sortOption">
                    <span>Type</span>
                </div> */}
                <div className="sortOption">
                    <span>USER / PASSWD</span>
                </div>
            </div>
            <div className="passwordList">
                <div style={{ borderBottom: "2px solid var(--divider)" }}></div>
                {db.entries?.map((entry) => (
                    <PasswordListItem
                        key={entry.id}
                        entry={entry}
                        visible={matchesSearch(entry, searchTerm) && entry.category == currentCategory}
                        setCurrentEntry={setCurrentEntry}
                    />
                ))}
                {entryCount === 0 && (
                    <div className="noEntries">
                        <h2>{category ? "No entries in this category" : "No category selected"}</h2>
                    </div>
                )}
            </div>
        </div>
    );
};

export default PasswordListView;

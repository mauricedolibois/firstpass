import React, { useEffect } from "react"
import "./LoginPage.less"

import FirstpassLogo from "../../../assets/svg/logo_full.svg"
import WavesSvg from "../../../assets/svg/waves.svg"
import FormInput from "../../components/FormInput/FormInput"

import { KeyRounded, DnsRounded, AddRounded} from "@mui/icons-material"
import Button from "../../components/Button/Button"

import backend from "../../backend"
import DropdownMenu from "../../components/DropdownMenu/DropdownMenu"
import TitleBar from "../../components/TitleBar/TitleBar"


const recentDBs_ = [
    {
        name: "Firstpass Default Database",
        date: "2021-10-10",
        filepath: "C:\\Users\\Avaze\\Documents\\test.fpdb",
    },
    {
        name: "Online Banking",
        date: "2021-10-10",
        filepath: "C:\\Users\\test\\Documents\\ein\\wirklich\\sehr\\langer\\pfad\\test2.fp",
    },
    {
        name: "Arbeit",
        date: "2021-10-10",
        filepath: "C:\\Users\\test\\Documents\\test3.fp",
    },
]

const RecentDB = ({ data }) => {
    return (
        <div className="recentDB">
            <div className="name">{data.name}</div>
            <div className="filename">{data.filepath}</div>
        </div>
    );
}


const LoginPage = ({ setDb, setLogin }) => {

    const [database, setDatabase] = React.useState();
    const [recentDBs, setRecentDBs] = React.useState([]);

    useEffect(() => {
        // TODO: Load recent DBs from backend
        // backend.call({
        //     type: "LIST_DBS",
        // }).then((dbs) => {
        //     console.log(dbs);
        //     setRecentDBs(dbs);
        // });
        setRecentDBs(recentDBs_);
    }, []);
    

    async function login() {
        const masterpassword = document.querySelector(".formInput input").value;
        const filepath = recentDBs[database].filepath;
    
        try {
            const { data: db } = await backend.call({
                type: "OPEN_DB",
                data: {
                    masterpassword,
                    filepath,
                }
            });
            console.log(db);
            setDb(db);
    
        } catch (e) {
            // TODO Error Handling
            console.log(e);
            // setDb({
            //     categories: ["test", "1234", "wow"],
            // });
        }
    
    }

    const openFileOption = {
        component: () => {
            return (
                <div className="openFileItem recentDB">
                    Open File...
                </div>
            );
        },
        onClick: () => {
            // TODO create a new entry in recent dbs from filepath
            console.log("File:", backend.selectDBFile());
        },
    }

    return (
        <div className="loginPage">
           <TitleBar/>

            <div className="loginForm-wrapper">
                <div className="loginForm">
                    <FirstpassLogo className="firstpassLogo" />

                    <div className="loginFormInputs">
                        <div className="databaseInput">
                        <DropdownMenu
                            options={recentDBs}
                            value={database}
                            onChange={setDatabase}
                            placeholder={
                                <span style={{ paddingLeft: "10px" }}>
                                    Select a database...
                                </span>
                            }
                            icon={<DnsRounded />}
                            component={RecentDB}
                            customItems={[openFileOption]}
                        />
                         <Button onClick={() => setLogin(false)}>{<AddRounded />}</Button>
                         </div>
                        <FormInput
                            placeholder="Enter Masterpassword"
                            type="password"
                            iconLeft={<KeyRounded />}
                        />
                    </div>

                    <Button onClick={login}>Login</Button>
                </div>
            </div>
            <WavesSvg />
        </div>
    );
};

export default LoginPage
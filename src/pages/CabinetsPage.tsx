
import {Profile} from "../components/Profile.tsx";
import {FileList} from "../components/FileList.tsx";
import {CountFile} from "../components/CountFile.tsx";
import {AddButton} from "../components/AddButton.tsx";

export const CabinetsPage = () => {
    return (
        <div className="container">
            <div className="cabinet">
                <FileList/>
                <aside>
                    <Profile/>
                    <CountFile/>
                    <AddButton/>
                </aside>
            </div>
        </div>
    )
}
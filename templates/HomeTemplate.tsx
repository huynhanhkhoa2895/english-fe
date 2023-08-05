'use client';

import VocabularyTable from "@/organisms/VocabularyTable";
import Recently from "@/molecules/Recently";

const HomeTemplate = () => {
    return (
        <div className={'w-full'}>
            <Recently/>
            <div className={'shadow-2xl rounded-2xl p-5'}>
                <VocabularyTable/>
            </div>
        </div>
    )
}
export default HomeTemplate
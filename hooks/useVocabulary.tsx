import {sampleSize} from 'lodash'
import {InterviewQuestion, Vocabulary} from "@/types/common";
import {useEffect, useState} from "react";
import {getCookie} from "cookies-next";

const useVocabulary = () => {
    const [page, setPage] = useState<number>(1)
    const [sort, setSort] = useState<any>(null)
    const [limit, setLimit] = useState<number>(10)
    const [firstLoad, setFirstLoad] = useState<boolean>(true)
    const [data, setData] = useState<any>([])

    useEffect(() => {
        if (firstLoad) {
            setFirstLoad(false)
        }
    }, []);

    useEffect(() => {
        !firstLoad && fetchUser()
    }, [page, sort, limit, firstLoad]);

    const fetchUser = () => {
        return fetch(process.env.NEXT_PUBLIC_APP_BE + `/api/student/${getCookie('userid',)}?type=vocabulary&page=${page}&limit=${limit}${sort != null ? `&sort[field]=${sort.field}&sort[direction]=${sort.direction}` : ''}`, {
            headers: {
                "Authorization": "Bearer " + getCookie("token"),
            }
        })
            .then((res) => res.json())
            .then((res) => setData(res.data));
    }

    const listRandomData = (data: Vocabulary[] | InterviewQuestion[]) => {
        return sampleSize(data, data.length);
    }

    const setPageNumber = (pageNumber: number) => {
        setPage(pageNumber)
    }

    const setPageLimit = (limit: number) => {
        setLimit(limit)
    }

    const setSortField = (field: string, direction: string) => {
        setSort({field, direction})
    }

    const paginationData = () => {
        return {...data}
    }
    return {listRandomData, paginationData, setPageNumber, setSortField, setPageLimit}
}
export default useVocabulary
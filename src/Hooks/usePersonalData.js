import { useMyData } from "../Store/store"

const usePersonalData = () => {
    const data = useMyData(({myData}) =>  myData)
    return data

}


export default usePersonalData
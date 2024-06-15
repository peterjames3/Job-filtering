 import { create } from "zustand"


const useStore = create((set) =>({
    data:null,
    loading:false,
    error:null,
    screenWidth: window.innerWidth,
    setScreenWidth: (width) => set({screenWidth: width}),
    fetchData: async ()=>{
        set({false:true, error:null});
        try{
            const response = await fetch("http://localhost:3000/jobs");
            if(!response.ok){
                throw new Error (`Error status ${response.statusText}`)
             
            }
            const result = await response.json();
            set({data: result, loading:false})
        }catch (error){
          set({error: error, loading:false})
        }
    }


}))
export default useStore
export const getAccessToken = () => {
    if(typeof window !== 'undefined'){
        return localStorage.getItem('token');
    }  
};
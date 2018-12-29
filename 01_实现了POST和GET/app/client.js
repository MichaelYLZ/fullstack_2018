window.client = (function (){
    
    function getAPIcall(success) {
      return axios.get('/api/sens')
        .then(success)
        .catch(error => {
            console.log(error);
        })
    }
    
    function postAPIcall(obj) {
        return axios.post('/api/sens', obj)
        .then(res => console.log(res.data));
    }
    
    return {
        getAPIcall,
        postAPIcall
    };
    
}());    
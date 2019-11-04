export default {

    addPreZero(num){

        if(!isNaN(num)){

            return num < 10 ? "0" + num : num;
        }
        return num;
    },
    formateDate(timestamp){
        
        if(!timestamp) return "";
        let date = new Date(timestamp);
        return date.getFullYear() + '-' + this.addPreZero((date.getMonth() + 1)) + '-' + this.addPreZero(date.getDate()) + ' ' + this.addPreZero(date.getHours()) + ':' + this.addPreZero(date.getMinutes()) + ':' + this.addPreZero(date.getSeconds());
    },
    
}